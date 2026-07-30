<script lang="ts">
	import { tick } from "svelte"
	import { slide } from "svelte/transition"
	import { SearchOutline, CloseOutline } from "flowbite-svelte-icons"
	import rivalsCardsJson from "../../rivals_cards.json"
	import {
		RIVALS_CLASSES,
		RIVALS_TYPES,
		RIVALS_RARITIES,
		RIVALS_TRAITS,
		RIVALS_COSTS,
		defaultRivalsFilters,
		matchesFilters,
		matchesSearch,
		cardId,
		cardImageKey,
		formatLabel,
		cardSubtitle,
		type RivalsCard,
		type RivalsFilters,
	} from "$lib/rivals"
	import RivalsCardView from "./RivalsCard.svelte"

	const allCards = rivalsCardsJson as RivalsCard[]

	const imageModules = import.meta.glob("../../lib/images/rivals_cards/*.png", {
		eager: true,
		import: "default",
	}) as Record<string, string>

	function imageSrc(card: RivalsCard): string {
		return imageModules[`../../lib/images/rivals_cards/${cardImageKey(card)}.png`] ?? ""
	}

	let filters: RivalsFilters = defaultRivalsFilters()
	let searchOpen = false
	let searchQuery = ""
	let selectedCard: RivalsCard | null = null
	let searchInput: HTMLInputElement | undefined

	$: filteredCards = allCards.filter(
		(card) => matchesFilters(card, filters) && matchesSearch(card, searchQuery),
	)

	function selectCard(card: RivalsCard) {
		selectedCard = selectedCard && cardId(selectedCard) === cardId(card) ? null : card
	}

	function closeSearch() {
		searchOpen = false
		searchQuery = ""
	}

	async function openSearch() {
		searchOpen = true
		await tick()
		searchInput?.focus()
	}

	function resetFilters() {
		filters = defaultRivalsFilters()
	}

	function formatRange(range: number[] | undefined): string | null {
		if (!range || range.length < 2) {
			return null
		}
		if (range[0] === 0 && range[1] >= 99) {
			return "∞"
		}
		if (range[1] >= 99) {
			return `${range[0]}–∞`
		}
		return `${range[0]}–${range[1]}`
	}
</script>

<div class="pt-18 md:pt-22 px-3 md:px-6 mb-24 max-w-[1920px] mx-auto">
	{#if selectedCard}
		<section
			class="mb-6 rounded-lg border border-dark-600 bg-dark-800/80 p-4 md:p-6"
			transition:slide={{ duration: 250 }}
		>
			<div class="flex flex-col md:flex-row gap-6 items-start">
				<div class="w-40 sm:w-48 md:w-56 shrink-0 mx-auto md:mx-0">
					<RivalsCardView
						card={selectedCard}
						imageSrc={imageSrc(selectedCard)}
						selected={false}
						showHighlight={false}
						onSelect={selectCard}
					/>
				</div>
				<div class="flex-1 min-w-0 text-dark-200">
					<div class="flex items-start justify-between gap-3">
						<div>
							<p class="text-xs uppercase tracking-wider text-primary-400 mb-1">
								{cardSubtitle(selectedCard)}
							</p>
							<h1 class="text-2xl md:text-3xl font-semibold text-white">{selectedCard.name}</h1>
						</div>
						<button
							type="button"
							class="shrink-0 rounded-md border border-dark-600 bg-dark-900 px-3 py-1.5 text-sm text-dark-300 hover:bg-dark-700 hover:text-white"
							on:click={() => (selectedCard = null)}
						>
							Close
						</button>
					</div>

					{#if selectedCard.description}
						<p class="mt-4 text-dark-200 leading-relaxed">{selectedCard.description}</p>
					{/if}
					{#if selectedCard.discardBonusDescription}
						<p class="mt-2 text-sm text-primary-300/90">
							<span class="font-semibold text-primary-400">Discard bonus:</span>
							{selectedCard.discardBonusDescription}
						</p>
					{/if}

					<dl class="mt-5 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-x-4 gap-y-3 text-sm">
						{#if selectedCard.cost !== undefined}
							<div>
								<dt class="text-dark-400">Cost</dt>
								<dd class="text-white">{selectedCard.cost}</dd>
							</div>
						{/if}
						{#if formatRange(selectedCard.range)}
							<div>
								<dt class="text-dark-400">Range</dt>
								<dd class="text-white">{formatRange(selectedCard.range)}</dd>
							</div>
						{/if}
						{#if selectedCard.damage !== undefined}
							<div>
								<dt class="text-dark-400">Damage</dt>
								<dd class="text-white">{selectedCard.damage}</dd>
							</div>
						{/if}
						{#if selectedCard.salvos !== undefined}
							<div>
								<dt class="text-dark-400">Salvos</dt>
								<dd class="text-white">{selectedCard.salvos}</dd>
							</div>
						{/if}
						{#if selectedCard.types.length > 0}
							<div class="col-span-2">
								<dt class="text-dark-400">
									{selectedCard.types.length === 1 ? "Type" : "Types"}
								</dt>
								<dd class="text-white">{selectedCard.types.map(formatLabel).join(", ")}</dd>
							</div>
						{/if}
						<div class="col-span-2">
							<dt class="text-dark-400">Traits</dt>
							<dd class="text-white">
								{selectedCard.traits.length
									? selectedCard.traits.map(formatLabel).join(", ")
									: "—"}
							</dd>
						</div>
					</dl>
				</div>
			</div>
		</section>
	{/if}

	<section class="rounded-lg border border-dark-600 bg-dark-800/60 p-4 md:p-5 mb-6">
		<div class="flex flex-col xl:flex-row gap-6 xl:gap-8 items-start">
			<div class="flex-1 w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
				<div>
					<h2 class="font-semibold text-dark-200 mb-2">Class</h2>
					<div class="flex flex-col gap-1.5">
						{#each RIVALS_CLASSES as cls}
							<label class="inline-flex items-center gap-2 cursor-pointer text-sm text-dark-300 hover:text-white">
								<input
									type="checkbox"
									class="rounded border-dark-500 bg-dark-900 text-primary-500 focus:ring-primary-500 focus:ring-offset-0"
									bind:checked={filters.classes[cls]}
								/>
								{formatLabel(cls)}
							</label>
						{/each}
					</div>

					<h2 class="font-semibold text-dark-200 mt-5 mb-2">Ashak</h2>
					<label class="inline-flex items-center gap-2 cursor-pointer text-sm text-dark-300 hover:text-white">
						<input
							type="checkbox"
							class="rounded border-dark-500 bg-dark-900 text-primary-500 focus:ring-primary-500 focus:ring-offset-0"
							bind:checked={filters.ashakOnly}
							aria-label="Ashak only"
						/>
					</label>
				</div>

				<div>
					<h2 class="font-semibold text-dark-200 mb-2">Type</h2>
					<div class="flex flex-col gap-1.5">
						{#each RIVALS_TYPES as type}
							<label class="inline-flex items-center gap-2 cursor-pointer text-sm text-dark-300 hover:text-white">
								<input
									type="checkbox"
									class="rounded border-dark-500 bg-dark-900 text-primary-500 focus:ring-primary-500 focus:ring-offset-0"
									bind:checked={filters.types[type]}
								/>
								{formatLabel(type)}
							</label>
						{/each}
					</div>
				</div>

				<div>
					<h2 class="font-semibold text-dark-200 mb-2">Rarity</h2>
					<div class="flex flex-col gap-1.5">
						{#each RIVALS_RARITIES as rarity}
							<label class="inline-flex items-center gap-2 cursor-pointer text-sm text-dark-300 hover:text-white">
								<input
									type="checkbox"
									class="rounded border-dark-500 bg-dark-900 text-primary-500 focus:ring-primary-500 focus:ring-offset-0"
									bind:checked={filters.rarities[rarity]}
								/>
								{formatLabel(rarity)}
							</label>
						{/each}
					</div>

					<h2 class="font-semibold text-dark-200 mt-5 mb-2">Cost</h2>
					<div class="flex flex-col gap-1.5">
						{#each RIVALS_COSTS as cost}
							<label class="inline-flex items-center gap-2 cursor-pointer text-sm text-dark-300 hover:text-white">
								<input
									type="checkbox"
									class="rounded border-dark-500 bg-dark-900 text-primary-500 focus:ring-primary-500 focus:ring-offset-0"
									bind:checked={filters.costs[cost]}
								/>
								{cost === "none" ? "None" : cost}
							</label>
						{/each}
					</div>
				</div>

				<div>
					<h2 class="font-semibold text-dark-200 mb-2">Traits</h2>
					<div class="flex flex-col gap-1.5">
						{#each RIVALS_TRAITS as trait}
							<label class="inline-flex items-center gap-2 cursor-pointer text-sm text-dark-300 hover:text-white">
								<input
									type="checkbox"
									class="rounded border-dark-500 bg-dark-900 text-primary-500 focus:ring-primary-500 focus:ring-offset-0"
									bind:checked={filters.traits[trait]}
								/>
								{formatLabel(trait)}
							</label>
						{/each}
					</div>
				</div>
			</div>

			<div class="flex xl:flex-col items-center gap-3 shrink-0 self-center xl:self-start xl:pt-6">
				{#if searchOpen}
					<button
						type="button"
						class="inline-flex h-12 w-12 items-center justify-center rounded-full border border-dark-500 bg-dark-900 text-dark-200 hover:bg-dark-700 hover:text-white"
						aria-label="Close search"
						on:click={closeSearch}
					>
						<CloseOutline class="h-6 w-6" />
					</button>
				{:else}
					<button
						type="button"
						class="inline-flex h-12 w-12 items-center justify-center rounded-full border border-dark-500 bg-dark-900 text-dark-200 hover:bg-dark-700 hover:text-white"
						aria-label="Open search"
						on:click={openSearch}
					>
						<SearchOutline class="h-6 w-6" />
					</button>
				{/if}
				<button
					type="button"
					class="rounded-md border border-dark-600 bg-dark-900 px-3 py-2 text-sm text-dark-300 hover:bg-dark-700 hover:text-white"
					on:click={resetFilters}
				>
					Reset
				</button>
			</div>
		</div>

		{#if searchOpen}
			<div class="mt-5" transition:slide={{ duration: 200 }}>
				<label class="sr-only" for="rivals-search">Search cards</label>
				<input
					id="rivals-search"
					type="search"
					bind:this={searchInput}
					bind:value={searchQuery}
					placeholder="Search by name or description…"
					class="w-full rounded-md border border-dark-500 bg-dark-900 px-4 py-3 text-white placeholder:text-dark-400 focus:border-primary-500 focus:ring-primary-500"
				/>
			</div>
		{/if}
	</section>

	<p class="mb-3 text-sm text-dark-400">
		Showing {filteredCards.length} of {allCards.length} cards
	</p>

	{#if filteredCards.length === 0}
		<div class="rounded-lg bg-dark-900/70 p-8 text-center text-dark-300">
			No cards match the selected filters.
		</div>
	{:else}
		<ul class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-3 sm:gap-4">
			{#each filteredCards as card (cardId(card))}
				<li>
					<RivalsCardView
						{card}
						imageSrc={imageSrc(card)}
						selected={selectedCard !== null && cardId(selectedCard) === cardId(card)}
						onSelect={selectCard}
					/>
				</li>
			{/each}
		</ul>
	{/if}
</div>
