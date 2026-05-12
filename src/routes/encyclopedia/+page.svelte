<script lang="ts">
	import { browser } from "$app/environment"
	import { onMount } from "svelte"
	import EncyclopediaCanvasCard from "$lib/EncyclopediaCanvasCard.svelte"
	import EncyclopediaFilterControls from "$lib/EncyclopediaFilterControls.svelte"
	import {
		buildEncyclopediaEntries,
		defaultEncyclopediaFilters,
		entryMatchesFilters,
		SHOW_NUMBERS_STORAGE_KEY,
		type EncyclopediaFilters,
	} from "$lib/encyclopedia"

	const spellCardImageModules = import.meta.glob(
		"../../lib/images/spell_cards/*.webp",
		{ eager: true, import: "default" },
	) as Record<string, string>

	function spellImageSrc(key: string): string {
		return spellCardImageModules[`../../lib/images/spell_cards/${key}.webp`] ?? ""
	}

	const allEntries = buildEncyclopediaEntries()

	let filters: EncyclopediaFilters = defaultEncyclopediaFilters()
	let showNumbers = false
	let detailsEl: HTMLDetailsElement | undefined

	$: filteredEntries = allEntries.filter((e) => entryMatchesFilters(e, filters))

function resetFilters() {
	filters = defaultEncyclopediaFilters()
}

	onMount(() => {
		if (!browser) {
			return
		}
		const readShowNumbers = () => {
			showNumbers = localStorage.getItem(SHOW_NUMBERS_STORAGE_KEY) === "true"
		}
		readShowNumbers()
		window.addEventListener("storage", readShowNumbers)

		const mq = window.matchMedia("(min-width: 1024px)")
		const syncDetails = () => {
			if (detailsEl) {
				detailsEl.open = mq.matches
			}
		}
		syncDetails()
		mq.addEventListener("change", syncDetails)

		return () => {
			window.removeEventListener("storage", readShowNumbers)
			mq.removeEventListener("change", syncDetails)
		}
	})
</script>

<svelte:head>
	<title>Encyclopedia — Stats of Atlantis</title>
	<meta name="description" content="Browse all Guards of Atlantis II hero cards and spell cards." />
</svelte:head>

<div class="flex flex-col lg:flex-row lg:gap-8 lg:items-start px-3 md:mt-20 mt-16 mb-24 max-w-[1920px] mx-auto">
	<details
		bind:this={detailsEl}
		class="lg:hidden mt-2 mb-4 rounded-lg border border-dark-600 bg-dark-900/90 p-4"
	>
		<summary class="cursor-pointer font-semibold text-white select-none">Filters</summary>
		<div class="mt-4">
			<EncyclopediaFilterControls bind:filters onReset={resetFilters} />
		</div>
	</details>

	<div class="flex-1 min-w-0">
		{#if filteredEntries.length === 0}
			<div class="rounded-lg bg-dark-900/70 p-6 text-center text-dark-300">
				No cards match the selected filters.
			</div>
		{:else}
			<ul class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-5 gap-2 sm:gap-3">
				{#each filteredEntries as entry (entry.id)}
					<li>
						{#if entry.kind === "canvas"}
							<EncyclopediaCanvasCard
								heroId={entry.heroId}
								card={entry.card}
								extraSlotIndex={entry.extraSlotIndex}
								{showNumbers}
							/>
						{:else}
							<div
								class="relative w-full aspect-[80/57] border border-dark-600 rounded-lg sm:rounded-xl lg:rounded-3xl overflow-hidden bg-dark-900"
							>
								<img
									src={spellImageSrc(entry.spellKey)}
									alt={`Spell card ${entry.spellKey}`}
									class="w-full h-full object-cover rounded-lg sm:rounded-xl lg:rounded-3xl"
									loading="lazy"
									decoding="async"
								/>
							</div>
						{/if}
					</li>
				{/each}
			</ul>
		{/if}
	</div>

	<aside
		class="hidden lg:block w-full lg:w-72 shrink-0 lg:sticky lg:top-20 lg:max-h-[calc(100vh-10rem)] lg:overflow-y-auto rounded-lg border border-dark-600 bg-dark-900/90 p-4"
	>
		<EncyclopediaFilterControls bind:filters onReset={resetFilters} />
	</aside>
</div>
