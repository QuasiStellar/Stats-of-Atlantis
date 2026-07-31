export type RivalsClass = "interface" | "schema" | "event" | "guild" | "ultimate"

export type RivalsType =
	| "attack"
	| "physical"
	| "psychic"
	| "explosive"
	| "skill"
	| "activable"
	| "permanent"
	| "defense"
	| "mod"
	| "utility"

export type RivalsRarity = "basic" | "common" | "uncommon" | "rare" | "schema" | "other"

export type RivalsTrait =
	| "Plus damage"
	| "Grenade"
	| "action points"
	| "card draw"
	| "dice"
	| "health"
	| "movement"
	| "poison"
	| "resources"
	| "teleport"
	| "wounds"

export interface RivalsCard {
	class: RivalsClass
	typeArg: number
	name: string
	description: string
	expansion: string
	rarity?: string
	cost?: number
	range?: number[]
	n?: number
	ashak?: boolean
	ashakType?: string
	types: string[]
	traits: string[]
	damage?: number
	salvos?: number
	discardBonusDescription?: string
}

export const RIVALS_CLASSES: RivalsClass[] = ["interface", "schema", "event", "guild", "ultimate"]

export const RIVALS_TYPES: RivalsType[] = [
	"attack",
	"physical",
	"psychic",
	"explosive",
	"skill",
	"activable",
	"permanent",
	"defense",
	"mod",
	"utility",
]

export const RIVALS_RARITIES: RivalsRarity[] = [
	"basic",
	"common",
	"uncommon",
	"rare",
	"schema",
	"other",
]

export const RIVALS_TRAITS: RivalsTrait[] = [
	"action points",
	"card draw",
	"dice",
	"Grenade",
	"health",
	"movement",
	"Plus damage",
	"poison",
	"resources",
	"teleport",
	"wounds",
]

export type RivalsCost = 0 | 1 | 2 | "none"

export const RIVALS_COSTS: RivalsCost[] = [0, 1, 2, "none"]

/** ignore → include → exclude → ignore */
export type FilterMode = "ignore" | "include" | "exclude"

export type ClassFilters = Record<RivalsClass, FilterMode>
export type TypeFilters = Record<RivalsType, FilterMode>
export type RarityFilters = Record<RivalsRarity, FilterMode>
export type TraitFilters = Record<RivalsTrait, FilterMode>
export type CostFilters = Record<RivalsCost, FilterMode>

export interface RivalsFilters {
	classes: ClassFilters
	types: TypeFilters
	rarities: RarityFilters
	traits: TraitFilters
	costs: CostFilters
	ashak: FilterMode
}

function allIgnore<T extends string | number>(keys: readonly T[]): Record<T, FilterMode> {
	return Object.fromEntries(keys.map((k) => [k, "ignore"])) as Record<T, FilterMode>
}

export function defaultRivalsFilters(): RivalsFilters {
	return {
		classes: allIgnore(RIVALS_CLASSES),
		types: allIgnore(RIVALS_TYPES),
		rarities: allIgnore(RIVALS_RARITIES),
		traits: allIgnore(RIVALS_TRAITS),
		costs: allIgnore(RIVALS_COSTS),
		ashak: "ignore",
	}
}

export function nextFilterMode(mode: FilterMode): FilterMode {
	if (mode === "ignore") {
		return "include"
	}
	if (mode === "include") {
		return "exclude"
	}
	return "ignore"
}

function modeMatches(mode: FilterMode, abides: boolean): boolean {
	if (mode === "ignore") {
		return true
	}
	if (mode === "include") {
		return abides
	}
	return !abides
}

export function effectiveRarity(card: RivalsCard): RivalsRarity {
	if (card.rarity === "basic" || card.rarity === "common" || card.rarity === "uncommon" || card.rarity === "rare") {
		return card.rarity
	}
	if (card.class === "schema") {
		return "schema"
	}
	return "other"
}

export function effectiveCost(card: RivalsCard): RivalsCost {
	if (card.cost === 0 || card.cost === 1 || card.cost === 2) {
		return card.cost
	}
	return "none"
}

export function cardImageKey(card: RivalsCard): string {
	return `${card.class}_${card.typeArg}`
}

export function cardId(card: RivalsCard): string {
	return cardImageKey(card)
}

export function matchesSearch(card: RivalsCard, query: string): boolean {
	const q = query.trim().toLowerCase()
	if (!q) {
		return true
	}
	const haystacks = [card.name, card.description, card.discardBonusDescription ?? ""]
	return haystacks.some((text) => text.toLowerCase().includes(q))
}

export function matchesFilters(card: RivalsCard, filters: RivalsFilters): boolean {
	for (const cls of RIVALS_CLASSES) {
		if (!modeMatches(filters.classes[cls], card.class === cls)) {
			return false
		}
	}

	if (!modeMatches(filters.ashak, Boolean(card.ashak))) {
		return false
	}

	for (const rarity of RIVALS_RARITIES) {
		if (!modeMatches(filters.rarities[rarity], effectiveRarity(card) === rarity)) {
			return false
		}
	}

	for (const cost of RIVALS_COSTS) {
		if (!modeMatches(filters.costs[cost], effectiveCost(card) === cost)) {
			return false
		}
	}

	for (const type of RIVALS_TYPES) {
		if (!modeMatches(filters.types[type], card.types.includes(type))) {
			return false
		}
	}

	for (const trait of RIVALS_TRAITS) {
		if (!modeMatches(filters.traits[trait], card.traits.includes(trait))) {
			return false
		}
	}

	return true
}

export function cardSubtitle(card: RivalsCard): string {
	const parts = [formatLabel(card.class)]
	if (card.rarity) {
		parts.push(formatLabel(card.rarity))
	}
	if (card.ashak) {
		parts.push("Ashak")
		if (card.ashakType) {
			parts.push(card.ashakType)
		}
	}
	return parts.join(" · ")
}

export function formatLabel(value: string): string {
	return value.charAt(0).toUpperCase() + value.slice(1)
}
