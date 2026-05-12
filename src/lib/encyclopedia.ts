import newHeroInfo from "../new_heroes.json"
import spellsInfo from "../spells.json"
import { heroes, Item, Modifier, Pack, Type, ValueSign } from "../states"

export const SHOW_NUMBERS_STORAGE_KEY = "goa-show-numbers"

/** Visible spell assets (Gydion); order matches CardGrid / encyclopedia tail section. */
export const SPELL_CARD_ORDER = [
	"GoldI",
	"GoldII",
	"GoldIII",
	"BlueIA",
	"RedIA",
	"GreenIA",
	"BlueIIA",
	"BlueIIB",
	"BlueIIB2",
	"RedIIA",
	"RedIIB",
	"RedIIB2",
	"GreenIIA",
	"GreenIIB",
	"GreenIIB2",
	"BlueIIIA",
	"BlueIIIB",
	"RedIIIA",
	"RedIIIB",
	"GreenIIIA",
	"GreenIIIB",
	"Ultimate",
] as const

export type SpellCardKey = (typeof SPELL_CARD_ORDER)[number]
export const CARD_TRAITS = [
	"AFTER_THE_ATTACK",
	"ATTACK_HERO",
	"ATTACK_MINION",
	"ATTACK_UNIT",
	"BEFORE_THE_ATTACK",
	"COUNTS_AS",
	"DEFEAT",
	"DISCARD",
	"DISCARD_OR_KILL",
	"DISCARD_TEAM",
	"END_OF_ROUND",
	"END_OF_TURN",
	"FARMING_FOR_SELF",
	"FARMING_FOR_TEAM",
	"FAST_TRAVEL",
	"GIVING_MARKERS",
	"HEALING_ENEMY",
	"HEALING_SELF",
	"HEALING_TEAM",
	"HIGH_RANGE_ATTACK",
	"IGNORING_OBSTACLES",
	"IMMUNITY_GAIN",
	"IMMUNITY_IGNORE",
	"MINION_BATTLE",
	"MOVING_ENEMY",
	"MOVING_HEROES",
	"MOVING_MINIONS",
	"MOVING_SELF",
	"MOVING_TEAM",
	"MOVING_TOKENS",
	"MOVING_UNITS",
	"MULTIPLE_CHOICE",
	"NEXT_TURN",
	"NOT_STRAIGHT_LINE",
	"PLACING_ENEMY",
	"PLACING_HEROES",
	"PLACING_MINIONS",
	"PLACING_SELF",
	"PLACING_TEAM",
	"PLACING_TOKENS",
	"PLACING_UNITS",
	"PUSHING_HEROES",
	"PUSHING_MINIONS",
	"PUSHING_TOKENS",
	"PUSHING_UNITS",
	"REMOVING",
	"RESPAWN",
	"SCALING",
	"SPAWN_POINTS",
	"STAT_CHANGING",
	"STRAIGHT_LINE",
	"SWAPPING_ENEMY",
	"SWAPPING_HEROES",
	"SWAPPING_MINIONS",
	"SWAPPING_SELF",
	"SWAPPING_TEAM",
	"SWAPPING_TOKENS",
	"SWAPPING_UNITS",
	"TERRAIN",
	"THIS_ROUND",
	"THIS_TURN",
	"USING_MARKERS",
	"USING_TOKENS",
] as const
export type CardTrait = (typeof CARD_TRAITS)[number]

export type HeroCardJson = {
	name: string
	description: string
	color: string
	traits?: string[]
	level?: number
	handicapped?: boolean
	extra?: boolean
	variant?: { first: number; second: number }
	initiative?: number
	primaryAction?: string
	primaryValue?: number
	primaryValueSign?: string
	modifier?: string
	modifierValue?: number
	modifierValueSign?: string
	secondaryMovement?: number
	secondaryDefense?: number
	secondaryAttack?: number
	item?: string
}

export type EncyclopediaCanvasEntry = {
	kind: "canvas"
	id: string
	heroId: keyof typeof heroes
	card: HeroCardJson
	extraSlotIndex: number | null
}

export type EncyclopediaSpellEntry = {
	kind: "spell"
	id: string
	heroId: "gydion"
	spellKey: SpellCardKey
}

export type EncyclopediaEntry = EncyclopediaCanvasEntry | EncyclopediaSpellEntry
export type FilterMode = "ignore" | "include" | "exclude"
const GYDION_SPELL_DEFAULT_ACTION = Type.SKILL
type SpellJson = HeroCardJson & { school?: string }
const spellCards = spellsInfo as SpellJson[]

function sortedExtras(cards: HeroCardJson[]) {
	return cards.filter((c) => c.extra).sort((a, b) => (a.variant?.first ?? 0) - (b.variant?.first ?? 0))
}

export function getBackgroundSlug(card: HeroCardJson, extraSlotIndex: number | null): string {
	if (card.extra && extraSlotIndex != null) {
		return `Extra${extraSlotIndex + 1}`
	}

	const c = card.color
	if (c === "GOLD") {
		return card.handicapped ? "Handicap" : "Gold"
	}
	if (c === "SILVER") {
		return card.handicapped ? "Handicap" : "Silver"
	}
	if (c === "PURPLE") {
		return "Ultimate"
	}

	const prefix = c === "BLUE" ? "Blue" : c === "RED" ? "Red" : "Green"
	const lvl = card.level ?? 1
	if (lvl === 1) {
		return `${prefix}IA`
	}
	if (lvl === 2) {
		return card.variant?.first === 2 ? `${prefix}IIB` : `${prefix}IIA`
	}
	if (lvl === 3) {
		return card.variant?.first === 2 ? `${prefix}IIIB` : `${prefix}IIIA`
	}
	return `${prefix}IA`
}

export function buildEncyclopediaEntries(): EncyclopediaEntry[] {
	const out: EncyclopediaEntry[] = []
	const heroIds = Object.keys(heroes) as Array<keyof typeof heroes>

	for (const heroId of heroIds) {
		const cards = newHeroInfo[heroId as keyof typeof newHeroInfo] as HeroCardJson[] | undefined
		if (cards == null) {
			continue
		}
		const extrasSorted = sortedExtras(cards)

		for (let i = 0; i < cards.length; i++) {
			const card = cards[i]
			let extraSlotIndex: number | null = null
			if (card.extra) {
				const idx = extrasSorted.indexOf(card)
				extraSlotIndex = idx >= 0 ? idx : null
			}
			out.push({
				kind: "canvas",
				id: `${String(heroId)}:${i}:${card.name}`,
				heroId,
				card,
				extraSlotIndex,
			})
		}
	}

	for (const spellKey of SPELL_CARD_ORDER) {
		out.push({
			kind: "spell",
			id: `spell:${spellKey}`,
			heroId: "gydion",
			spellKey,
		})
	}

	return out
}

export type EncyclopediaFilters = {
	packs: Record<Pack, FilterMode>
	heroes: Record<string, FilterMode>
	colors: Record<string, FilterMode>
	primaryAttack: FilterMode
	primarySkill: FilterMode
	primaryMovement: FilterMode
	primaryDefense: FilterMode
	skillDefense: FilterMode
	blocks: FilterMode
	hasRangeModifier: FilterMode
	hasRadiusModifier: FilterMode
	hasHandicap: FilterMode
	hasExtra: FilterMode
	spells: FilterMode
	level1: FilterMode
	level2: FilterMode
	level3: FilterMode
	providesInitiative: FilterMode
	providesAttack: FilterMode
	providesDefense: FilterMode
	providesMovement: FilterMode
	providesRange: FilterMode
	providesRadius: FilterMode
	traits: Record<CardTrait, FilterMode>
}

export function defaultEncyclopediaFilters(): EncyclopediaFilters {
	const packs = {} as Record<Pack, FilterMode>
	for (const p of Object.values(Pack)) {
		packs[p] = "ignore"
	}
	const heroesAll = {} as Record<string, FilterMode>
	for (const h of Object.keys(heroes)) {
		heroesAll[h] = "ignore"
	}
	const traits = {} as Record<CardTrait, FilterMode>
	for (const trait of CARD_TRAITS) {
		traits[trait] = "ignore"
	}
	return {
		packs,
		heroes: heroesAll,
		colors: {
			GOLD: "ignore",
			SILVER: "ignore",
			BLUE: "ignore",
			RED: "ignore",
			GREEN: "ignore",
			PURPLE: "ignore",
		},
		primaryAttack: "ignore",
		primarySkill: "ignore",
		primaryMovement: "ignore",
		primaryDefense: "ignore",
		skillDefense: "ignore",
		blocks: "ignore",
		hasRangeModifier: "ignore",
		hasRadiusModifier: "ignore",
		hasHandicap: "ignore",
		hasExtra: "ignore",
		spells: "ignore",
		level1: "ignore",
		level2: "ignore",
		level3: "ignore",
		providesInitiative: "ignore",
		providesAttack: "ignore",
		providesDefense: "ignore",
		providesMovement: "ignore",
		providesRange: "ignore",
		providesRadius: "ignore",
		traits,
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

function primaryActionMatches(card: HeroCardJson, mode: FilterMode, type: Type): boolean {
	return modeMatches(mode, card.primaryAction === type)
}

function recordModesMatch<T extends string>(modes: Record<T, FilterMode>, getAbides: (k: T) => boolean): boolean {
	for (const key of Object.keys(modes) as T[]) {
		if (!modeMatches(modes[key], getAbides(key))) {
			return false
		}
	}
	return true
}

function levelMatches(card: HeroCardJson, expectedLevel: 1 | 2 | 3, isSpell: boolean): boolean {
	if (isSpell) {
		return (card.level ?? 0) === expectedLevel
	}
	const hasLevel = card.color === "RED" || card.color === "BLUE" || card.color === "GREEN"
	if (!hasLevel) {
		return false
	}
	return (card.level ?? 1) === expectedLevel
}

function spellCardLike(entry: EncyclopediaSpellEntry): HeroCardJson {
	function pickOne(match: (spell: SpellJson) => boolean): SpellJson | null {
		return spellCards.find(match) ?? null
	}

	function pickNth(match: (spell: SpellJson) => boolean, index: number): SpellJson | null {
		const list = spellCards.filter(match)
		return list[index] ?? null
	}

	const key = entry.spellKey
	let matched: SpellJson | null = null
	switch (key) {
		case "GoldI":
			matched = pickOne((s) => s.color === "GOLD" && s.school === "CANTRIP" && s.variant?.first === 1)
			break
		case "GoldII":
			matched = pickOne((s) => s.color === "GOLD" && s.school === "CANTRIP" && s.variant?.first === 2)
			break
		case "GoldIII":
			matched = pickOne((s) => s.color === "GOLD" && s.school === "CANTRIP" && s.variant?.first === 3)
			break
		case "BlueIA":
			matched = pickOne((s) => s.color === "BLUE" && (s.level ?? 0) === 1)
			break
		case "RedIA":
			matched = pickOne((s) => s.color === "RED" && (s.level ?? 0) === 1)
			break
		case "GreenIA":
			matched = pickOne((s) => s.color === "GREEN" && (s.level ?? 0) === 1)
			break
		case "BlueIIA":
			matched = pickOne((s) => s.color === "BLUE" && (s.level ?? 0) === 2 && s.variant?.first === 1)
			break
		case "RedIIA":
			matched = pickOne((s) => s.color === "RED" && (s.level ?? 0) === 2 && s.variant?.first === 1)
			break
		case "GreenIIA":
			matched = pickOne((s) => s.color === "GREEN" && (s.level ?? 0) === 2 && s.variant?.first === 1)
			break
		case "BlueIIB":
			matched = pickNth((s) => s.color === "BLUE" && (s.level ?? 0) === 2 && s.variant?.first === 2, 0)
			break
		case "BlueIIB2":
			matched = pickNth((s) => s.color === "BLUE" && (s.level ?? 0) === 2 && s.variant?.first === 2, 1)
			break
		case "RedIIB":
			matched = pickNth((s) => s.color === "RED" && (s.level ?? 0) === 2 && s.variant?.first === 2, 0)
			break
		case "RedIIB2":
			matched = pickNth((s) => s.color === "RED" && (s.level ?? 0) === 2 && s.variant?.first === 2, 1)
			break
		case "GreenIIB":
			matched = pickNth((s) => s.color === "GREEN" && (s.level ?? 0) === 2 && s.variant?.first === 2, 0)
			break
		case "GreenIIB2":
			matched = pickNth((s) => s.color === "GREEN" && (s.level ?? 0) === 2 && s.variant?.first === 2, 1)
			break
		case "BlueIIIA":
			matched = pickOne((s) => s.color === "BLUE" && (s.level ?? 0) === 3 && s.variant?.first === 1)
			break
		case "BlueIIIB":
			matched = pickOne((s) => s.color === "BLUE" && (s.level ?? 0) === 3 && s.variant?.first === 2)
			break
		case "RedIIIA":
			matched = pickOne((s) => s.color === "RED" && (s.level ?? 0) === 3 && s.variant?.first === 1)
			break
		case "RedIIIB":
			matched = pickOne((s) => s.color === "RED" && (s.level ?? 0) === 3 && s.variant?.first === 2)
			break
		case "GreenIIIA":
			matched = pickOne((s) => s.color === "GREEN" && (s.level ?? 0) === 3 && s.variant?.first === 1)
			break
		case "GreenIIIB":
			matched = pickOne((s) => s.color === "GREEN" && (s.level ?? 0) === 3 && s.variant?.first === 2)
			break
		case "Ultimate":
			matched = pickOne((s) => s.color === "PURPLE" && (s.level ?? 0) === 4)
			break
	}

	if (matched == null) {
		return {
			color: key === "Ultimate" ? "PURPLE" : "GOLD",
			primaryAction: GYDION_SPELL_DEFAULT_ACTION,
		}
	}

	return {
		color: matched.color,
		level: matched.level,
		traits: matched.traits,
		primaryAction: matched?.primaryAction ?? GYDION_SPELL_DEFAULT_ACTION,
		primaryValueSign: matched?.primaryValueSign,
		modifier: matched?.modifier,
		handicapped: matched?.handicapped,
		extra: matched?.extra,
	}
}

function counterpartBonusItem(heroId: keyof typeof heroes, card: HeroCardJson): Item | null {
	const level = card.level ?? 1
	if (level !== 2 && level !== 3) {
		return null
	}
	const variant = card.variant?.first
	if (variant !== 1 && variant !== 2) {
		return null
	}
	const counterpartVariant = variant === 1 ? 2 : 1
	const cards = newHeroInfo[heroId as keyof typeof newHeroInfo] as HeroCardJson[] | undefined
	if (cards == null) {
		return null
	}
	const counterpart = cards.find((candidate) => {
		return (
			candidate.color === card.color &&
			(candidate.level ?? 1) === level &&
			candidate.variant?.first === counterpartVariant
		)
	})
	if (counterpart?.item == null) {
		return null
	}
	return counterpart.item as Item
}

function bonusFiltersMatch(
	heroId: keyof typeof heroes,
	card: HeroCardJson,
	f: EncyclopediaFilters,
	isSpell: boolean,
): boolean {
	const counterpartItem = counterpartBonusItem(heroId, card)
	const canProvideBonus = !isSpell
	return (
		modeMatches(f.providesInitiative, canProvideBonus && counterpartItem === Item.INITIATIVE) &&
		modeMatches(f.providesAttack, canProvideBonus && counterpartItem === Item.ATTACK) &&
		modeMatches(f.providesDefense, canProvideBonus && counterpartItem === Item.DEFENSE) &&
		modeMatches(f.providesMovement, canProvideBonus && counterpartItem === Item.MOVEMENT) &&
		modeMatches(f.providesRange, canProvideBonus && counterpartItem === Item.RANGE) &&
		modeMatches(f.providesRadius, canProvideBonus && counterpartItem === Item.AREA)
	)
}

export function entryMatchesFilters(entry: EncyclopediaEntry, f: EncyclopediaFilters): boolean {
	const isSpell = entry.kind === "spell"
	if (!modeMatches(f.spells, isSpell)) {
		return false
	}

	const heroId = entry.heroId
	if (!recordModesMatch(f.heroes, (hid) => hid === heroId)) {
		return false
	}

	const pack = heroes[heroId].pack
	if (!recordModesMatch(f.packs, (packName) => packName === pack)) {
		return false
	}

	const card = isSpell ? spellCardLike(entry) : entry.card
	if (!recordModesMatch(f.colors, (color) => color === card.color)) {
		return false
	}

	if (
		!modeMatches(f.level1, levelMatches(card, 1, isSpell)) ||
		!modeMatches(f.level2, levelMatches(card, 2, isSpell)) ||
		!modeMatches(f.level3, levelMatches(card, 3, isSpell))
	) {
		return false
	}
	if (!recordModesMatch(f.traits, (trait) => (card.traits ?? []).includes(trait))) {
		return false
	}

	if (!modeMatches(f.blocks, card.primaryValueSign === ValueSign.EXCLAMATION)) {
		return false
	}

	if (!modeMatches(f.hasRangeModifier, card.modifier === Modifier.RANGE)) {
		return false
	}
	if (!modeMatches(f.hasRadiusModifier, card.modifier === Modifier.AREA)) {
		return false
	}
	if (!modeMatches(f.hasHandicap, card.handicapped === true)) {
		return false
	}
	if (!modeMatches(f.hasExtra, card.extra !== undefined)) {
		return false
	}

	if (!primaryActionMatches(card, f.primaryAttack, Type.ATTACK)) {
		return false
	}
	if (!primaryActionMatches(card, f.primarySkill, Type.SKILL)) {
		return false
	}
	if (!primaryActionMatches(card, f.primaryMovement, Type.MOVEMENT)) {
		return false
	}
	if (!primaryActionMatches(card, f.primaryDefense, Type.DEFENSE)) {
		return false
	}
	if (!primaryActionMatches(card, f.skillDefense, Type.DEFENSE_SKILL)) {
		return false
	}
	if (!bonusFiltersMatch(heroId, card, f, isSpell)) {
		return false
	}

	return true
}
