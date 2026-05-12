<script lang="ts">
	import { Color, Item, Modifier, Type, ValueSign, heroes } from "../states"
	import { images, importCardImage, preloadImages, updateCanvas } from "../card_painter"

	const cardArtModules = import.meta.glob("../lib/images/cards/*/*.webp", {
		eager: true,
		import: "default",
	}) as Record<string, string>
	import type { HeroCardJson } from "./encyclopedia"
	import { getBackgroundSlug } from "./encyclopedia"
	import { onMount } from "svelte"
	import { browser } from "$app/environment"
	export let heroId: keyof typeof heroes
	export let card: HeroCardJson
	export let extraSlotIndex: number | null
	export let showNumbers: boolean

	let root: HTMLDivElement
	let canvas: HTMLCanvasElement | undefined
	let visible = false
	let ctx: CanvasRenderingContext2D | null = null
	let imagesReady = false
	let fontsReady = false
	let bgImage: HTMLImageElement | null = null
	let loadInFlight = false

	const useNewPrinting = true

	$: hero = heroes[heroId]

	function getStatRange(statValue: number | Array<number> | undefined) {
		if (statValue == null) {
			return { min: 0, max: 0 }
		}
		if (Array.isArray(statValue)) {
			return { min: statValue[0], max: statValue[1] }
		}
		return { min: statValue, max: statValue }
	}

	function getPrimaryStat(statIndex: number): number {
		const { min, max } = getStatRange(hero?.stats?.[statIndex])
		return useNewPrinting ? min : max
	}

	async function cropCardBackground(image: HTMLImageElement): Promise<HTMLImageElement> {
		const sourceWidth = Math.min(744, image.width)
		const sourceHeight = Math.min(1039, image.height)
		const sourceX = (image.width - sourceWidth) / 2
		const sourceY = (image.height - sourceHeight) / 2

		const croppedCanvas = document.createElement("canvas")
		croppedCanvas.width = sourceWidth
		croppedCanvas.height = sourceHeight
		const croppedContext = croppedCanvas.getContext("2d")
		if (croppedContext == null) {
			return image
		}

		croppedContext.drawImage(image, sourceX, sourceY, sourceWidth, sourceHeight, 0, 0, sourceWidth, sourceHeight)

		const croppedImage = new Image()
		croppedImage.src = croppedCanvas.toDataURL()
		return await new Promise((resolve) => {
			croppedImage.onload = () => resolve(croppedImage)
			croppedImage.onerror = () => resolve(image)
		})
	}

	function paint(bg: HTMLImageElement) {
		if (!canvas || !ctx) {
			return
		}
		updateCanvas(
			canvas,
			ctx,
			[],
			bg,
			(card.color as Color) ?? Color.GOLD,
			card.handicapped ?? false,
			card.extra ?? false,
			card.name ?? "",
			card.description ?? "",
			"i".repeat(card.level ?? 1),
			(card.item as Item) ?? Item.ATTACK,
			card.initiative ?? 0,
			(card.primaryAction as Type) ?? Type.ATTACK,
			card.primaryValue ?? 0,
			(card.primaryValueSign as ValueSign) ?? ValueSign.NONE,
			(card.modifier as Modifier) ?? Modifier.NONE,
			card.modifierValue ?? 0,
			(card.modifierValueSign as ValueSign) ?? ValueSign.NONE,
			card.secondaryMovement ?? 0,
			card.secondaryDefense ?? 0,
			card.secondaryAttack ?? null,
			0,
			0,
			0,
			0,
			0,
			0,
			showNumbers,
			getPrimaryStat(0),
			getPrimaryStat(1),
			getPrimaryStat(2),
			getPrimaryStat(3),
		)
	}

	async function loadBackgroundOnce(): Promise<HTMLImageElement | null> {
		const slug = getBackgroundSlug(card, extraSlotIndex)
		const wantedSuffix = `/cards/${String(heroId)}/${slug}.webp`
		const url = Object.entries(cardArtModules).find(([key]) => key.endsWith(wantedSuffix))?.[1]
		if (typeof url === "string") {
			const raw = new Image()
			raw.src = url
			const loaded = await new Promise<boolean>((resolve) => {
				raw.onload = () => resolve(true)
				raw.onerror = () => resolve(false)
			})
			if (loaded) {
				return await cropCardBackground(raw)
			}
		}

		await importCardImage(String(heroId), slug)
		const fallback = images.get(slug)
		if (!(fallback instanceof HTMLImageElement)) {
			return null
		}
		return await cropCardBackground(fallback)
	}

	async function ensureReady() {
		if (!browser || !visible || !imagesReady || !fontsReady || !canvas || bgImage || loadInFlight) {
			return
		}
		if (!ctx) {
			ctx = canvas.getContext("2d")
		}
		if (!ctx) {
			return
		}
		loadInFlight = true
		try {
			bgImage = await loadBackgroundOnce()
		} finally {
			loadInFlight = false
		}
	}

	$: if (browser && visible && imagesReady && fontsReady && canvas) {
		void ensureReady()
	}

	$: if (browser && bgImage && ctx && canvas) {
		void showNumbers
		paint(bgImage)
	}

	onMount(() => {
		if (!browser) {
			return
		}
		void Promise.all([
			preloadImages(),
			document.fonts.load('16px "Modesto Poster"'),
			document.fonts.ready,
		]).then(() => {
			imagesReady = true
			fontsReady = true
		})

		const io = new IntersectionObserver(
			(entries) => {
				for (const e of entries) {
					if (e.isIntersecting) {
						visible = true
						io.disconnect()
					}
				}
			},
			{ rootMargin: "240px" },
		)
		io.observe(root)
		return () => io.disconnect()
	})
</script>

<div
	bind:this={root}
	class="relative w-full aspect-[1192/1664] border border-dark-600 rounded-lg sm:rounded-xl lg:rounded-3xl overflow-hidden bg-dark-900"
>
	{#if visible}
		<canvas
			bind:this={canvas}
			width="1192"
			height="1664"
			class="w-full h-full block rounded-lg sm:rounded-xl lg:rounded-3xl"
		></canvas>
	{:else}
		<div class="absolute inset-0 animate-pulse bg-dark-800" aria-hidden="true"></div>
	{/if}
</div>

<style>
	@font-face {
		font-family: "Modesto Poster";
		src: url("./fonts/modesto_poster.woff") format("woff");
	}
</style>
