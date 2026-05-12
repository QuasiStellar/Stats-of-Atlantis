<script lang="ts">
import { heroes, Pack } from "../states"
import { CARD_TRAITS, nextFilterMode, type CardTrait, type EncyclopediaFilters, type FilterMode } from "./encyclopedia"

	export let filters: EncyclopediaFilters
export let onReset: () => void

	function packLabel(pack: Pack): string {
		const s = pack as string
		return s.charAt(0) + s.slice(1).toLowerCase()
	}

	function cycle(current: FilterMode): FilterMode {
		return nextFilterMode(current)
	}

	function markerClass(mode: FilterMode): string {
		if (mode === "include") {
			return "bg-amber-600 border-amber-500 text-white"
		}
		if (mode === "exclude") {
			return "bg-red-700 border-red-500 text-white"
		}
		return "bg-transparent border-dark-500 text-transparent"
	}

	function traitLabel(trait: CardTrait): string {
		const text = trait.replaceAll("_", " ").toLowerCase()
		return text.charAt(0).toUpperCase() + text.slice(1)
	}
</script>

<div class="flex flex-col gap-5 text-sm">
	<button
		type="button"
		class="w-full rounded-md border border-dark-600 bg-dark-800 px-3 py-2 text-dark-300 hover:bg-dark-700"
		on:click={onReset}
	>
		Reset Filters
	</button>

	{#snippet triCheckbox(label: string, value: FilterMode, onToggle: () => void)}
		<button type="button" on:click={onToggle} class="inline-flex items-center text-left">
			<span class={`mr-2 inline-flex h-4 w-4 items-center justify-center rounded border ${markerClass(value)}`}>
				{#if value === "include"}
					<svg viewBox="0 0 16 16" class="h-3 w-3 fill-current" aria-hidden="true">
						<path d="M6.2 11.5 2.8 8.1l1.2-1.2 2.2 2.2 5.8-5.8 1.2 1.2z" />
					</svg>
				{:else if value === "exclude"}
					<svg viewBox="0 0 16 16" class="h-3 w-3 fill-current" aria-hidden="true">
						<path d="M4 4.9 4.9 4 8 7.1 11.1 4l.9.9L8.9 8l3.1 3.1-.9.9L8 8.9 4.9 12l-.9-.9L7.1 8z" />
					</svg>
				{/if}
			</span>
			<span class="text-dark-300">{label}</span>
		</button>
	{/snippet}

	<section>
		<h3 class="font-semibold mb-2 text-dark-300">Pack</h3>
		<div class="flex flex-col gap-2">
			{#each Object.values(Pack) as pack (pack)}
				{@render triCheckbox(packLabel(pack), filters.packs[pack], () => (filters.packs[pack] = cycle(filters.packs[pack])))}
			{/each}
		</div>
	</section>

	<section>
		<h3 class="font-semibold mb-2 text-dark-300">Hero</h3>
		<div class="flex flex-col gap-2 max-h-52 overflow-y-auto pr-1">
			{#each Object.keys(heroes) as hid (hid)}
				{@render triCheckbox(heroes[hid as keyof typeof heroes].name, filters.heroes[hid], () => (filters.heroes[hid] = cycle(filters.heroes[hid])))}
			{/each}
		</div>
	</section>

	<section>
		<h3 class="font-semibold mb-2 text-dark-300">Color</h3>
		<div class="flex flex-col gap-2">
			{@render triCheckbox("Gold", filters.colors.GOLD, () => (filters.colors.GOLD = cycle(filters.colors.GOLD)))}
			{@render triCheckbox("Silver", filters.colors.SILVER, () => (filters.colors.SILVER = cycle(filters.colors.SILVER)))}
			{@render triCheckbox("Blue", filters.colors.BLUE, () => (filters.colors.BLUE = cycle(filters.colors.BLUE)))}
			{@render triCheckbox("Red", filters.colors.RED, () => (filters.colors.RED = cycle(filters.colors.RED)))}
			{@render triCheckbox("Green", filters.colors.GREEN, () => (filters.colors.GREEN = cycle(filters.colors.GREEN)))}
			{@render triCheckbox("Purple", filters.colors.PURPLE, () => (filters.colors.PURPLE = cycle(filters.colors.PURPLE)))}
		</div>
	</section>

	<section>
		<h3 class="font-semibold mb-2 text-dark-300">Primary action</h3>
		<div class="flex flex-col gap-2">
			{@render triCheckbox("Attack", filters.primaryAttack, () => (filters.primaryAttack = cycle(filters.primaryAttack)))}
			{@render triCheckbox("Skill", filters.primarySkill, () => (filters.primarySkill = cycle(filters.primarySkill)))}
			{@render triCheckbox("Movement", filters.primaryMovement, () => (filters.primaryMovement = cycle(filters.primaryMovement)))}
			{@render triCheckbox("Defense", filters.primaryDefense, () => (filters.primaryDefense = cycle(filters.primaryDefense)))}
			{@render triCheckbox("Skill/Defense", filters.skillDefense, () => (filters.skillDefense = cycle(filters.skillDefense)))}
			{@render triCheckbox("Block", filters.blocks, () => (filters.blocks = cycle(filters.blocks)))}
		</div>
	</section>

	<section>
		<h3 class="font-semibold mb-2 text-dark-300">Modifiers</h3>
		<div class="flex flex-col gap-2">
			{@render triCheckbox("Ranged", filters.hasRangeModifier, () => (filters.hasRangeModifier = cycle(filters.hasRangeModifier)))}
			{@render triCheckbox("Radius", filters.hasRadiusModifier, () => (filters.hasRadiusModifier = cycle(filters.hasRadiusModifier)))}
			{@render triCheckbox("Handicap", filters.hasHandicap, () => (filters.hasHandicap = cycle(filters.hasHandicap)))}
			{@render triCheckbox("Extra", filters.hasExtra, () => (filters.hasExtra = cycle(filters.hasExtra)))}
			{@render triCheckbox("Spells", filters.spells, () => (filters.spells = cycle(filters.spells)))}
		</div>
	</section>

	<section>
		<h3 class="font-semibold mb-2 text-dark-300">Level</h3>
		<div class="flex flex-col gap-2">
			{@render triCheckbox("Level 1", filters.level1, () => (filters.level1 = cycle(filters.level1)))}
			{@render triCheckbox("Level 2", filters.level2, () => (filters.level2 = cycle(filters.level2)))}
			{@render triCheckbox("Level 3", filters.level3, () => (filters.level3 = cycle(filters.level3)))}
		</div>
	</section>

	<section>
		<h3 class="font-semibold mb-2 text-dark-300">Provides an item</h3>
		<div class="flex flex-col gap-2">
			{@render triCheckbox("Initiative", filters.providesInitiative, () => (filters.providesInitiative = cycle(filters.providesInitiative)))}
			{@render triCheckbox("Attack", filters.providesAttack, () => (filters.providesAttack = cycle(filters.providesAttack)))}
			{@render triCheckbox("Defense", filters.providesDefense, () => (filters.providesDefense = cycle(filters.providesDefense)))}
			{@render triCheckbox("Movement", filters.providesMovement, () => (filters.providesMovement = cycle(filters.providesMovement)))}
			{@render triCheckbox("Range", filters.providesRange, () => (filters.providesRange = cycle(filters.providesRange)))}
			{@render triCheckbox("Radius", filters.providesRadius, () => (filters.providesRadius = cycle(filters.providesRadius)))}
		</div>
	</section>

	<section>
		<h3 class="font-semibold mb-2 text-dark-300">Traits</h3>
		<div class="flex flex-col gap-2 max-h-72 overflow-y-auto pr-1">
			{#each CARD_TRAITS as trait (trait)}
				{@render triCheckbox(traitLabel(trait), filters.traits[trait], () => (filters.traits[trait] = cycle(filters.traits[trait])))}
			{/each}
		</div>
	</section>
</div>
