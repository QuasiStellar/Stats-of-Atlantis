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

export type ClassFilters = Record<RivalsClass, boolean>
export type TypeFilters = Record<RivalsType, boolean>
export type RarityFilters = Record<RivalsRarity, boolean>
export type TraitFilters = Record<RivalsTrait, boolean>
export type CostFilters = Record<RivalsCost, boolean>

export interface RivalsFilters {
	classes: ClassFilters
	types: TypeFilters
	rarities: RarityFilters
	traits: TraitFilters
	costs: CostFilters
	ashakOnly: boolean
}

export function defaultRivalsFilters(): RivalsFilters {
	return {
		classes: Object.fromEntries(RIVALS_CLASSES.map((c) => [c, true])) as ClassFilters,
		types: Object.fromEntries(RIVALS_TYPES.map((t) => [t, true])) as TypeFilters,
		rarities: Object.fromEntries(RIVALS_RARITIES.map((r) => [r, true])) as RarityFilters,
		traits: Object.fromEntries(RIVALS_TRAITS.map((t) => [t, false])) as TraitFilters,
		costs: Object.fromEntries(RIVALS_COSTS.map((c) => [c, true])) as CostFilters,
		ashakOnly: false,
	}
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
	if (!filters.classes[card.class]) {
		return false
	}

	if (filters.ashakOnly && !card.ashak) {
		return false
	}

	if (!filters.rarities[effectiveRarity(card)]) {
		return false
	}

	if (card.cost === 0 || card.cost === 1 || card.cost === 2) {
		if (!filters.costs[card.cost]) {
			return false
		}
	} else if (!filters.costs.none) {
		return false
	}

	// Cards with no types (e.g. events) are not excluded by type filters.
	if (card.types.length > 0) {
		const typeMatch = card.types.some((t) => filters.types[t as RivalsType])
		if (!typeMatch) {
			return false
		}
	}

	const anyTraitOn = RIVALS_TRAITS.some((t) => filters.traits[t])
	if (anyTraitOn) {
		const traitMatch = card.traits.some((t) => filters.traits[t as RivalsTrait])
		if (!traitMatch) {
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
	}
	return parts.join(" · ")
}

export function formatLabel(value: string): string {
	return value.charAt(0).toUpperCase() + value.slice(1)
}
