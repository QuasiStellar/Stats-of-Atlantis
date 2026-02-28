<script lang="ts">
	import { onMount, tick } from "svelte";
	import newHeroInfo from "../../new_heroes.json";
	import { importImages, updateCanvas } from "../../card_painter";
	import { Color, Item, Modifier, Type, ValueSign } from "../../states";

	type Variant = {
		index: number;
		path: string;
		canvas: HTMLCanvasElement | null;
	queued: boolean;
	rendering: boolean;
	rendered: boolean;
	failed: boolean;
	};

	type CardDescription = {
		name?: string;
		description?: string;
		color?: string;
		handicapped?: boolean;
		extra?: boolean;
		level?: number;
		variant?: { first?: number; second?: number };
		initiative?: number;
		primaryAction?: string;
		primaryValue?: number;
		primaryValueSign?: string;
		modifier?: string;
		modifierValue?: number;
		modifierValueSign?: string;
		secondaryMovement?: number;
		secondaryDefense?: number;
		secondaryAttack?: number;
		item?: string;
	};

	type CardQueueEntry = {
		hero: string;
		card: CardDescription;
	};


	let queue: CardQueueEntry[] = [];
	let currentQueueIndex = 0;
	let currentEntry: CardQueueEntry | null = null;
	let currentFolder = "";
	let variants: Variant[] = [];
	let loading = true;
	let done = false;
	let statusText = "";
let variantStatusText = "";
	let errorText = "";
	let activeRenderId = 0;
let renderQueue: Variant[] = [];
let queuedVariantCount = 0;
let renderingVariantCount = 0;
let renderedVariantCount = 0;
let failedVariantCount = 0;
const MAX_VARIANT_RENDERS = 1;
const VARIANTS_PAGE_SIZE = 12;
const variantUrlCache = new Map<string, Promise<string[]>>();
let visibleVariantCount = 0;

	function withTimeout<T>(promise: Promise<T>, timeoutMs: number, message: string): Promise<T> {
		return new Promise<T>((resolve, reject) => {
			const timeout = window.setTimeout(() => reject(new Error(message)), timeoutMs);
			promise
				.then((value) => {
					window.clearTimeout(timeout);
					resolve(value);
				})
				.catch((error) => {
					window.clearTimeout(timeout);
					reject(error);
				});
		});
	}

function registerCanvas(node: HTMLCanvasElement, variant: Variant) {
	variant.canvas = node;
	window.setTimeout(() => queueVariantRender(variant), 0);
		return {
		update(nextVariant: Variant) {
			if (variant.canvas === node) {
				variant.canvas = null;
			}
			variant = nextVariant;
			variant.canvas = node;
			window.setTimeout(() => queueVariantRender(variant), 0);
			},
			destroy() {
			if (variant.canvas === node) {
				variant.canvas = null;
				}
			}
		};
	}

	function getFolderName(card: CardDescription): string {
		if (card.handicapped) {
			return "Handicap";
		}

		if (card.extra) {
			return `Extra${card.variant?.first ?? 1}`;
		}

		const color = (card.color ?? "").toUpperCase();
		if (color === Color.GOLD) return "Gold";
		if (color === Color.SILVER) return "Silver";
		if (color === Color.PURPLE) return "Ultimate";

		const levelMap: Record<number, string> = {
			1: "I",
			2: "II",
			3: "III"
		};
		const level = levelMap[card.level ?? 1] ?? "I";
		const variantLetter = card.variant?.first === 2 ? "B" : "A";
		const colorName = color.charAt(0) + color.slice(1).toLowerCase();
		return `${colorName}${level}${variantLetter}`;
	}

	function getLevelRoman(level?: number): string {
		switch (level) {
			case 2:
				return "ii";
			case 3:
				return "iii";
			case 4:
				return "iv";
			default:
				return "i";
		}
	}

	function toColor(value?: string): Color {
		switch ((value ?? "").toUpperCase()) {
			case Color.BLUE:
				return Color.BLUE;
			case Color.GREEN:
				return Color.GREEN;
			case Color.RED:
				return Color.RED;
			case Color.SILVER:
				return Color.SILVER;
			case Color.PURPLE:
				return Color.PURPLE;
			case Color.GOLD:
			default:
				return Color.GOLD;
		}
	}

	function toType(value?: string): Type {
		switch ((value ?? "").toUpperCase()) {
			case Type.SKILL:
				return Type.SKILL;
			case Type.MOVEMENT:
				return Type.MOVEMENT;
			case Type.DEFENSE:
				return Type.DEFENSE;
			case Type.DEFENSE_SKILL:
				return Type.DEFENSE_SKILL;
			case Type.ATTACK:
			default:
				return Type.ATTACK;
		}
	}

	function toModifier(value?: string): Modifier {
		switch ((value ?? "").toUpperCase()) {
			case Modifier.AREA:
				return Modifier.AREA;
			case Modifier.RANGE:
				return Modifier.RANGE;
			case Modifier.NONE:
			default:
				return Modifier.NONE;
		}
	}

	function toValueSign(value?: string): ValueSign {
		switch ((value ?? "").toUpperCase()) {
			case ValueSign.PLUS:
				return ValueSign.PLUS;
			case ValueSign.MINUS:
				return ValueSign.MINUS;
			case ValueSign.EXCLAMATION:
				return ValueSign.EXCLAMATION;
			case ValueSign.NONE:
			default:
				return ValueSign.NONE;
		}
	}

	function toItem(value?: string): Item {
		switch ((value ?? "").toUpperCase()) {
			case Item.ATTACK:
				return Item.ATTACK;
			case Item.DEFENSE:
				return Item.DEFENSE;
			case Item.INITIATIVE:
				return Item.INITIATIVE;
			case Item.RANGE:
				return Item.RANGE;
			case Item.AREA:
				return Item.AREA;
			case Item.MOVEMENT:
				return Item.MOVEMENT;
			default:
				return Item.ATTACK;
		}
	}

	function shuffle<T>(items: T[]): T[] {
		const copy = [...items];
		for (let index = copy.length - 1; index > 0; index -= 1) {
			const randomIndex = Math.floor(Math.random() * (index + 1));
			[copy[index], copy[randomIndex]] = [copy[randomIndex], copy[index]];
		}
		return copy;
	}

	async function getVariantUrls(hero: string, folder: string): Promise<string[]> {
		const params = new URLSearchParams({ hero, folder });
		const response = await fetch(`/card_selection/variants?${params.toString()}`);
		if (!response.ok) {
			throw new Error(`Unable to load variants for ${hero}/${folder}`);
		}
		const payload = await response.json() as { files: string[] };
		return payload.files.map((fileName) => {
			const imageParams = new URLSearchParams({ hero, folder, file: fileName });
			return `/card_selection/art?${imageParams.toString()}`;
		});
	}

function getVariantCacheKey(hero: string, folder: string): string {
	return `${hero}/${folder}`;
}

async function getCachedVariantUrls(hero: string, folder: string): Promise<string[]> {
	const cacheKey = getVariantCacheKey(hero, folder);
	const cachedPromise = variantUrlCache.get(cacheKey);
	if (cachedPromise) {
		return cachedPromise;
	}

	const promise = withTimeout(
		getVariantUrls(hero, folder),
		5000,
		`Timed out while loading variants for ${hero}/${folder}.`
	).catch((error) => {
		console.warn("Skipping card because variant URLs failed to load:", error);
		return [] as string[];
	});

	variantUrlCache.set(cacheKey, promise);
	return promise;
}

	function nextFrame(): Promise<void> {
		return new Promise((resolve) => {
			requestAnimationFrame(() => resolve());
		});
	}

	function canvasToBlob(canvas: HTMLCanvasElement): Promise<Blob> {
		return new Promise((resolve, reject) => {
			canvas.toBlob((blob) => {
				if (!blob) {
					reject(new Error("Unable to create image blob from cropped canvas."));
					return;
				}
				resolve(blob);
			}, "image/png");
		});
	}

	async function renderVariant(variant: Variant, card: CardDescription): Promise<void> {
		if (!variant.canvas) {
			return;
		}

		const context = variant.canvas.getContext("2d");
		if (!context) {
			return;
		}

		const sourceImage = await withTimeout(
			loadImage(variant.path),
			30000,
			`Timed out while loading source image: ${variant.path}`
		);
		const cropCanvas = await cropCentered(sourceImage);
		const blob = await canvasToBlob(cropCanvas);
		const objectUrl = URL.createObjectURL(blob);
		const croppedImage = await withTimeout(
			loadImage(objectUrl),
			30000,
			"Timed out while loading cropped image."
		);

		try {
			updateCanvas(
				variant.canvas,
				context,
				[],
				croppedImage,
				toColor(card.color),
				card.handicapped ?? false,
				card.extra ?? false,
				card.name ?? "",
				card.description ?? "",
				getLevelRoman(card.level),
				toItem(card.item),
				card.initiative ?? 0,
				toType(card.primaryAction),
				card.primaryValue ?? 0,
				toValueSign(card.primaryValueSign),
				toModifier(card.modifier),
				card.modifierValue ?? 0,
				toValueSign(card.modifierValueSign),
				card.secondaryMovement ?? 0,
				card.secondaryDefense ?? 0,
				card.secondaryAttack ?? null
			);
		} finally {
		cropCanvas.width = 0;
		cropCanvas.height = 0;
			URL.revokeObjectURL(objectUrl);
			croppedImage.src = "";
			sourceImage.src = "";
		}
	}

	function loadImage(url: string): Promise<HTMLImageElement> {
		return new Promise((resolve, reject) => {
			const image = new Image();
			image.onload = () => resolve(image);
			image.onerror = () => reject(new Error(`Unable to load image: ${url}`));
			image.src = url;
		});
	}

	async function cropCentered(image: HTMLImageElement): Promise<HTMLCanvasElement> {
		const targetWidth = 744;
		const targetHeight = 1039;
		const sourceWidth = Math.min(targetWidth, image.width);
		const sourceHeight = Math.min(targetHeight, image.height);
		const sourceX = Math.floor((image.width - sourceWidth) / 2);
		const sourceY = Math.floor((image.height - sourceHeight) / 2);

		const cropCanvas = document.createElement("canvas");
		cropCanvas.width = targetWidth;
		cropCanvas.height = targetHeight;
		const cropContext = cropCanvas.getContext("2d");
		if (!cropContext) {
			throw new Error("Unable to create crop canvas context.");
		}

		cropContext.drawImage(
			image,
			sourceX,
			sourceY,
			sourceWidth,
			sourceHeight,
			0,
			0,
			targetWidth,
			targetHeight
		);

		return cropCanvas;
	}

function updateVariantStatusText() {
	if (variants.length === 0) {
		variantStatusText = "";
		return;
	}
	const total = variants.length;
	variantStatusText =
		`Variants: rendered ${renderedVariantCount}/${total}, rendering ${renderingVariantCount}, queued ${queuedVariantCount}, failed ${failedVariantCount}`;
}

function queueVariantRender(variant: Variant) {
	if (!currentEntry || !variant.canvas || variant.rendered || variant.rendering || variant.queued) {
		return;
	}
	variant.queued = true;
	renderQueue.push(variant);
	queuedVariantCount += 1;
	updateVariantStatusText();
	void flushVariantRenderQueue(activeRenderId);
}

function queueVisibleVariantRenders() {
	const visibleVariants = variants.slice(0, visibleVariantCount);
	for (const variant of visibleVariants) {
		queueVariantRender(variant);
	}
}

function showMoreVariants() {
	visibleVariantCount = Math.min(visibleVariantCount + VARIANTS_PAGE_SIZE, variants.length);
	updateVariantStatusText();
	window.setTimeout(() => queueVisibleVariantRenders(), 0);
}

function flushVariantRenderQueue(renderId: number) {
	if (renderId !== activeRenderId || !currentEntry) {
		return;
	}

	while (renderingVariantCount < MAX_VARIANT_RENDERS && renderQueue.length > 0) {
		const variant = renderQueue.shift();
		if (!variant) {
			continue;
		}

		variant.queued = false;
		queuedVariantCount = Math.max(0, queuedVariantCount - 1);
		if (variant.rendered || !variant.canvas) {
			updateVariantStatusText();
			continue;
		}

		variant.rendering = true;
		renderingVariantCount += 1;
		updateVariantStatusText();

		void (async () => {
			try {
				if (renderId !== activeRenderId || !currentEntry) {
					return;
				}
				await withTimeout(
					renderVariant(variant, currentEntry.card),
					12000,
					`Timed out while rendering variant ${variant.index}.`
				);
				if (renderId !== activeRenderId) {
					return;
				}
				variant.rendered = true;
				renderedVariantCount += 1;
			} catch (error) {
				console.warn("Skipping variant after render failure:", error);
				if (renderId === activeRenderId && !variant.failed) {
					variant.failed = true;
					failedVariantCount += 1;
				}
			} finally {
				variant.rendering = false;
				renderingVariantCount = Math.max(0, renderingVariantCount - 1);
				updateVariantStatusText();
				await nextFrame();
				flushVariantRenderQueue(renderId);
			}
		})();
	}
}

	async function renderCurrentCard() {
		if (currentQueueIndex >= queue.length) {
			done = true;
			currentEntry = null;
			variants = [];
			statusText = "All cards have been processed.";
		variantStatusText = "";
			loading = false;
			return;
		}

		loading = true;
		errorText = "";
	statusText = `Scanning cards: ${currentQueueIndex + 1}/${queue.length}`;

		while (currentQueueIndex < queue.length) {
			const candidate = queue[currentQueueIndex];
			const folder = getFolderName(candidate.card);
		statusText = `Scanning cards: ${currentQueueIndex + 1}/${queue.length} (${candidate.hero}/${folder})`;
		if ((currentQueueIndex + 1) % 20 === 0) {
			await nextFrame();
		}
		const variantPaths = await getCachedVariantUrls(candidate.hero, folder);

			if (variantPaths.length > 0) {
				currentEntry = candidate;
				currentFolder = folder;
				variants = variantPaths.map((path, index) => ({
					index: index + 1,
					path,
					canvas: null,
					queued: false,
					rendering: false,
					rendered: false,
					failed: false
				}));
				visibleVariantCount = Math.min(VARIANTS_PAGE_SIZE, variants.length);
				statusText = `Ready: ${currentQueueIndex + 1}/${queue.length}`;
				break;
			}

			currentQueueIndex += 1;
		}

		if (!currentEntry || variants.length === 0) {
			done = true;
			loading = false;
			statusText = "All cards have been processed.";
		variantStatusText = "";
			return;
		}

		const renderId = ++activeRenderId;
		renderQueue = [];
		queuedVariantCount = 0;
		renderingVariantCount = 0;
		renderedVariantCount = 0;
		failedVariantCount = 0;
		updateVariantStatusText();
		loading = false;
		await tick();
		queueVisibleVariantRenders();
		flushVariantRenderQueue(renderId);
	}

	function chooseVariant(variant: Variant) {
		if (!currentEntry) {
			return;
		}

		console.log(`${currentEntry.hero} - ${currentFolder} - ${variant.index}`);
		activeRenderId += 1;
	renderQueue = [];
	queuedVariantCount = 0;
	renderingVariantCount = 0;
	renderedVariantCount = 0;
	failedVariantCount = 0;
	visibleVariantCount = 0;
	updateVariantStatusText();
		currentQueueIndex += 1;
		void renderCurrentCard().catch((error) => {
			console.error("Failed to render next card:", error);
			errorText = "Unable to render the next card.";
			loading = false;
		});
	}

	onMount(async () => {
		try {
			statusText = "Preparing fonts...";
			await document.fonts.load('66px "Modesto Poster"');
			await document.fonts.ready;
			statusText = "Loading painter assets...";
			await withTimeout(
				importImages(),
				15000,
				"Timed out while loading painter assets."
			);

			statusText = "Building card queue...";
			const allCards: CardQueueEntry[] = [];
			for (const [hero, cards] of Object.entries(newHeroInfo)) {
				for (const card of cards as CardDescription[]) {
					allCards.push({ hero, card });
				}
			}

			queue = shuffle(allCards);
			statusText = `Scanning cards: 1/${queue.length}`;
			await renderCurrentCard();
		} catch (error) {
			console.error("Failed to initialize card selection route:", error);
			errorText = "Unable to initialize card selection.";
			loading = false;
		}
	});
</script>

<svelte:head>
	<title>Card Selection</title>
</svelte:head>

<div class="w-full px-4 py-24 text-white">
	<h1 class="text-3xl font-semibold">Card Selection</h1>

	{#if done}
		<p class="mt-6 text-xl">Work is done.</p>
	{:else}
		{#if errorText}
			<p class="mt-6 text-red-400">{errorText}</p>
		{/if}
		{#if !currentEntry && statusText}
			<p class="mt-4 text-sm text-gray-300">{statusText}</p>
		{/if}
		{#if currentEntry}
			<p class="mt-4 text-sm text-gray-300">
				Card: <span class="font-semibold">{currentEntry.card.name ?? "Unnamed"}</span>
				({currentEntry.hero} / {currentFolder}) - {statusText}
			</p>
			<p class="mt-2 text-sm text-gray-400">{variantStatusText}</p>
		{/if}

		{#if loading}
			<p class="mt-8 text-lg">Rendering cards...</p>
		{:else}
			<div class="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 2xl:grid-cols-7">
				{#each variants.slice(0, visibleVariantCount) as variant (variant.path)}
					<button
						type="button"
						class="mx-auto w-full max-w-[400px] rounded-lg border border-dark-600 bg-dark-800 p-2 transition hover:border-cyan-400"
						on:click={() => chooseVariant(variant)}
					>
						<canvas use:registerCanvas={variant} width="1192" height="1664" class="w-full rounded-md" />
						<span class="mt-2 block text-center text-sm">Variant {variant.index}</span>
					</button>
				{/each}
			</div>
			{#if visibleVariantCount < variants.length}
				<div class="mt-6">
					<button
						type="button"
						class="rounded-lg border border-dark-600 bg-dark-800 px-4 py-2 text-sm transition hover:border-cyan-400"
						on:click={showMoreVariants}
					>
						Load more variants ({visibleVariantCount}/{variants.length})
					</button>
				</div>
			{/if}
		{/if}
	{/if}
</div>

<style>
	@font-face {
		font-family: "Modesto Poster";
		src: url("../../lib/fonts/modesto_poster.woff") format("woff");
	}
</style>
