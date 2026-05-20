<script lang="ts">
	import { browser } from "$app/environment"
	import { goto } from "$app/navigation"
	import { page } from "$app/stores"
	import { onMount } from "svelte"
	import { Pack, heroes } from "../../states"

	import starImage from "$lib/images/star.png"

	type TeamSize = "2v2" | "3v3" | "4v4" | "5v5"
	type DraftSystem = "all-random" | "all-pick" | "single-draft" | "random-draft" | "pick-ban"
	type Team = "red" | "blue"
	type StartingTeamChoice = Team | "random"
	type DraftTurnType = "pick" | "ban"

	type DraftConfig = {
		teamSize: TeamSize
		draftSystem: DraftSystem
		startingTeam: StartingTeamChoice
		enabledStars: number[]
		enabledPacks: Pack[]
		enabledHeroes: Record<string, boolean>
	}

	type DraftTurn = {
		team: Team
		type: DraftTurnType
	}

	type DraftSession = {
		mode: DraftSystem
		players: number
		playersPerTeam: number
		startingTeam: Team
		availableHeroIds: string[]
		pickedRed: string[]
		pickedBlue: string[]
		bannedHeroIds: string[]
		turnIndex: number
		singleChoices: string[]
		singleOfferedHeroIds: string[]
		singleRevealPending: boolean
	}

	type ShareState = {
		v: 1
		config: DraftConfig
		session: DraftSession
	}

	const DRAFT_PAGE_STORAGE_KEY = "goa-draft-page-state"
	const PACK_ORDER: Pack[] = [Pack.BASE, Pack.DEVOTED, Pack.RENOWNED, Pack.DEFIANT, Pack.ARCANE, Pack.WAYWARD]
	const TEAM_SIZE_PLAYERS: Record<TeamSize, number> = {
		"2v2": 4,
		"3v3": 6,
		"4v4": 8,
		"5v5": 10,
	}
	const TEAM_SIZE_ORDER: TeamSize[] = ["2v2", "3v3", "4v4", "5v5"]
	const STARTING_TEAM_ORDER: StartingTeamChoice[] = ["red", "blue", "random"]
	const STARTING_TEAM_LABELS: Record<StartingTeamChoice, string> = {
		red: "Red",
		blue: "Blue",
		random: "Random",
	}
	const DRAFT_SYSTEM_ORDER: DraftSystem[] = ["all-random", "all-pick", "single-draft", "random-draft", "pick-ban"]
	const DRAFT_SYSTEM_LABELS: Record<DraftSystem, string> = {
		"all-random": "All Random",
		"all-pick": "All Pick",
		"single-draft": "Single Draft",
		"random-draft": "Random Draft",
		"pick-ban": "Pick and Ban",
	}
	const emptyImage = "data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs="
	const logoImageModules = import.meta.glob("../../lib/images/logos/*.png", {
		eager: true,
		import: "default",
	}) as Record<string, string>

	const allHeroIds = (Object.keys(heroes) as Array<keyof typeof heroes>).map(String)
	const heroesSorted = [...allHeroIds].sort((a, b) => {
		const starsDiff = heroes[a as keyof typeof heroes].stars - heroes[b as keyof typeof heroes].stars
		if (starsDiff !== 0) {
			return starsDiff
		}
		return heroes[a as keyof typeof heroes].name.localeCompare(heroes[b as keyof typeof heroes].name)
	})

	const defaultConfig = (): DraftConfig => ({
		teamSize: "2v2",
		draftSystem: "pick-ban",
		startingTeam: "random",
		enabledStars: [1, 2, 3, 4],
		enabledPacks: [...PACK_ORDER],
		enabledHeroes: Object.fromEntries(allHeroIds.map((heroId) => [heroId, true])),
	})

	let hydrated = false
	let setupConfig: DraftConfig = defaultConfig()
	let currentScreen: "setup" | "draft" = "setup"
	let session: DraftSession | null = null
	let availableHeroTextColors: Record<string, string> = {}

	$: selectedPackSet = new Set(setupConfig.enabledPacks)
	$: selectedStarSet = new Set(setupConfig.enabledStars)
	$: players = TEAM_SIZE_PLAYERS[setupConfig.teamSize]
	$: configurableHeroIds = heroesSorted.filter((heroId) => {
		const hero = heroes[heroId as keyof typeof heroes]
		return selectedPackSet.has(hero.pack) && selectedStarSet.has(hero.stars)
	})
	$: eligibleHeroIds = heroesSorted.filter((heroId) => {
		const hero = heroes[heroId as keyof typeof heroes]
		return selectedPackSet.has(hero.pack) && selectedStarSet.has(hero.stars) && setupConfig.enabledHeroes[heroId] !== false
	})
	$: requiredHeroes = getRequiredHeroes(setupConfig.draftSystem, players)
	$: startDisabled = eligibleHeroIds.length < requiredHeroes
	$: missingHeroesCount = Math.max(requiredHeroes - eligibleHeroIds.length, 0)

	$: promptText = getPromptText(session)
	$: currentTurn = getCurrentTurn(session)
	$: availableHeroTextColors = buildAvailableHeroTextColors(session)

	$: if (browser && hydrated) {
		localStorage.setItem(DRAFT_PAGE_STORAGE_KEY, JSON.stringify(setupConfig))
	}

	$: if (browser && hydrated) {
		syncShareParam(currentScreen, session, setupConfig, $page.url)
	}

	onMount(() => {
		const localConfig = readStoredConfig()
		if (localConfig != null) {
			setupConfig = localConfig
		}

		const shareParam = new URLSearchParams(window.location.search).get("draft")
		if (shareParam != null) {
			const decoded = decodeShareState(shareParam)
			if (decoded != null) {
				setupConfig = decoded.config
				session = decoded.session
				currentScreen = "draft"
			}
		}

		hydrated = true
	})

	function getLogoImage(heroId: string) {
		return logoImageModules[`../../lib/images/logos/${heroId}.png`] ?? emptyImage
	}

	function getPackLabel(pack: Pack) {
		return `${pack.charAt(0)}${pack.slice(1).toLowerCase()}`
	}

	function readStoredConfig(): DraftConfig | null {
		if (!browser) {
			return null
		}
		const raw = localStorage.getItem(DRAFT_PAGE_STORAGE_KEY)
		if (!raw) {
			return null
		}
		try {
			const parsed = JSON.parse(raw) as Partial<DraftConfig>
			return sanitizeConfig(parsed)
		} catch {
			return null
		}
	}

	function sanitizeConfig(raw: Partial<DraftConfig>): DraftConfig {
		const next = defaultConfig()
		if (raw.teamSize && TEAM_SIZE_ORDER.includes(raw.teamSize)) {
			next.teamSize = raw.teamSize
		}
		if (raw.draftSystem && DRAFT_SYSTEM_ORDER.includes(raw.draftSystem)) {
			next.draftSystem = raw.draftSystem
		}
		if (raw.startingTeam && STARTING_TEAM_ORDER.includes(raw.startingTeam)) {
			next.startingTeam = raw.startingTeam
		}

		if (Array.isArray(raw.enabledStars)) {
			const stars = raw.enabledStars.filter((star) => [1, 2, 3, 4].includes(star))
			next.enabledStars = stars.length > 0 ? [...new Set(stars)] : [1, 2, 3, 4]
		}
		if (Array.isArray(raw.enabledPacks)) {
			const packs = raw.enabledPacks.filter((pack) => PACK_ORDER.includes(pack))
			next.enabledPacks = packs.length > 0 ? [...new Set(packs)] : [...PACK_ORDER]
		}
		if (raw.enabledHeroes != null && typeof raw.enabledHeroes === "object") {
			const sanitized: Record<string, boolean> = {}
			for (const heroId of allHeroIds) {
				const value = raw.enabledHeroes[heroId]
				sanitized[heroId] = typeof value === "boolean" ? value : true
			}
			next.enabledHeroes = sanitized
		}
		return next
	}

	function sanitizeHeroIds(ids: unknown): string[] {
		if (!Array.isArray(ids)) {
			return []
		}
		const deduped = ids.filter((value): value is string => typeof value === "string" && allHeroIds.includes(value))
		return [...new Set(deduped)]
	}

	function sanitizeSession(raw: unknown): DraftSession | null {
		if (raw == null || typeof raw !== "object") {
			return null
		}
		const source = raw as Partial<DraftSession>
		if (!source.mode || !DRAFT_SYSTEM_ORDER.includes(source.mode)) {
			return null
		}
		const players = typeof source.players === "number" && source.players > 0 ? source.players : 4
		const playersPerTeam = Math.floor(players / 2)
		return {
			mode: source.mode,
			players,
			playersPerTeam,
			startingTeam: source.startingTeam === "blue" ? "blue" : "red",
			availableHeroIds: sanitizeHeroIds(source.availableHeroIds),
			pickedRed: sanitizeHeroIds(source.pickedRed).slice(0, playersPerTeam),
			pickedBlue: sanitizeHeroIds(source.pickedBlue).slice(0, playersPerTeam),
			bannedHeroIds: sanitizeHeroIds(source.bannedHeroIds),
			turnIndex: typeof source.turnIndex === "number" && source.turnIndex >= 0 ? source.turnIndex : 0,
			singleChoices: sanitizeHeroIds(source.singleChoices),
			singleOfferedHeroIds:
				sanitizeHeroIds((source as Partial<DraftSession> & { singleOfferedHeroIds?: unknown }).singleOfferedHeroIds).length > 0
					? sanitizeHeroIds((source as Partial<DraftSession> & { singleOfferedHeroIds?: unknown }).singleOfferedHeroIds)
					: sanitizeHeroIds(source.singleChoices),
			singleRevealPending: source.singleRevealPending === true,
		}
	}

	function decodeShareState(encoded: string): ShareState | null {
		if (!browser) {
			return null
		}
		try {
			const payload = decodeBase64Url(encoded)
			const parsed = JSON.parse(payload) as Partial<ShareState>
			if (parsed.v !== 1) {
				return null
			}
			const config = sanitizeConfig(parsed.config ?? {})
			const decodedSession = sanitizeSession(parsed.session)
			if (decodedSession == null) {
				return null
			}
			return {
				v: 1,
				config,
				session: decodedSession,
			}
		} catch {
			return null
		}
	}

	function encodeShareState(state: ShareState): string {
		return encodeBase64Url(JSON.stringify(state))
	}

	function encodeBase64Url(value: string): string {
		const bytes = new TextEncoder().encode(value)
		let binary = ""
		for (const byte of bytes) {
			binary += String.fromCharCode(byte)
		}
		return btoa(binary).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/g, "")
	}

	function decodeBase64Url(value: string): string {
		const normalized = value.replace(/-/g, "+").replace(/_/g, "/")
		const padded = normalized.padEnd(Math.ceil(normalized.length / 4) * 4, "=")
		const binary = atob(padded)
		const bytes = Uint8Array.from(binary, (char) => char.charCodeAt(0))
		return new TextDecoder().decode(bytes)
	}

	function getRequiredHeroes(mode: DraftSystem, totalPlayers: number) {
		if (mode === "single-draft") {
			return totalPlayers * 3
		}
		if (mode === "random-draft") {
			return totalPlayers + 2
		}
		if (mode === "pick-ban") {
			return totalPlayers * 2
		}
		return totalPlayers
	}

	function updateConfig<K extends keyof DraftConfig>(key: K, value: DraftConfig[K]) {
		setupConfig = { ...setupConfig, [key]: value }
	}

	function togglePack(pack: Pack) {
		const hasPack = setupConfig.enabledPacks.includes(pack)
		if (hasPack && setupConfig.enabledPacks.length === 1) {
			return
		}
		updateConfig(
			"enabledPacks",
			hasPack ? setupConfig.enabledPacks.filter((item) => item !== pack) : [...setupConfig.enabledPacks, pack],
		)
	}

	function toggleStar(star: number) {
		const hasStar = setupConfig.enabledStars.includes(star)
		if (hasStar && setupConfig.enabledStars.length === 1) {
			return
		}
		updateConfig(
			"enabledStars",
			hasStar ? setupConfig.enabledStars.filter((value) => value !== star) : [...setupConfig.enabledStars, star].sort(),
		)
	}

	function toggleHeroEnabled(heroId: string) {
		const next = { ...setupConfig.enabledHeroes }
		next[heroId] = !(setupConfig.enabledHeroes[heroId] !== false)
		updateConfig("enabledHeroes", next)
	}

	function shuffle<T>(list: T[]): T[] {
		const out = [...list]
		for (let i = out.length - 1; i > 0; i -= 1) {
			const j = Math.floor(Math.random() * (i + 1))
			;[out[i], out[j]] = [out[j], out[i]]
		}
		return out
	}

	function getPickBanTurnOrder(totalPlayers: number, startingTeam: Team): DraftTurn[] {
		const fullSequence: DraftTurn[] = [
			{ team: "red", type: "ban" },
			{ team: "blue", type: "ban" },
			{ team: "red", type: "pick" },
			{ team: "blue", type: "pick" },
			{ team: "blue", type: "ban" },
			{ team: "red", type: "ban" },
			{ team: "blue", type: "pick" },
			{ team: "red", type: "pick" },
			{ team: "red", type: "ban" },
			{ team: "blue", type: "ban" },
			{ team: "blue", type: "pick" },
			{ team: "red", type: "pick" },
			{ team: "blue", type: "ban" },
			{ team: "red", type: "ban" },
			{ team: "red", type: "pick" },
			{ team: "blue", type: "pick" },
			{ team: "blue", type: "ban" },
			{ team: "red", type: "ban" },
			{ team: "blue", type: "pick" },
			{ team: "red", type: "pick" },
		]
		const order = fullSequence.slice(0, totalPlayers * 2)
		if (startingTeam === "red") {
			return order
		}
		return order.map((turn) => ({
			...turn,
			team: turn.team === "red" ? "blue" : "red",
		}))
	}

	function remainingHeroesForSession(draftSession: DraftSession): string[] {
		const blocked = new Set([...draftSession.pickedRed, ...draftSession.pickedBlue, ...draftSession.bannedHeroIds])
		return draftSession.availableHeroIds.filter((heroId) => !blocked.has(heroId))
	}

	function initializeSession(): DraftSession | null {
		const activePlayers = TEAM_SIZE_PLAYERS[setupConfig.teamSize]
		const perTeam = activePlayers / 2
		const eligible = [...eligibleHeroIds]
		const resolvedStartingTeam: Team =
			setupConfig.startingTeam === "random"
				? (Math.random() < 0.5 ? "red" : "blue")
				: setupConfig.startingTeam

		if (eligible.length < getRequiredHeroes(setupConfig.draftSystem, activePlayers)) {
			return null
		}

		if (setupConfig.draftSystem === "all-random") {
			const rolled = shuffle(eligible).slice(0, activePlayers)
			return {
				mode: setupConfig.draftSystem,
				players: activePlayers,
				playersPerTeam: perTeam,
				startingTeam: resolvedStartingTeam,
				availableHeroIds: eligible,
				pickedRed:
					resolvedStartingTeam === "red"
						? rolled.slice(0, perTeam)
						: rolled.slice(perTeam, activePlayers),
				pickedBlue:
					resolvedStartingTeam === "blue"
						? rolled.slice(0, perTeam)
						: rolled.slice(perTeam, activePlayers),
				bannedHeroIds: [],
				turnIndex: activePlayers,
				singleChoices: [],
				singleOfferedHeroIds: [],
				singleRevealPending: false,
			}
		}

		if (setupConfig.draftSystem === "random-draft") {
			const pool = shuffle(eligible).slice(0, activePlayers + 2)
			return {
				mode: setupConfig.draftSystem,
				players: activePlayers,
				playersPerTeam: perTeam,
				startingTeam: resolvedStartingTeam,
				availableHeroIds: pool,
				pickedRed: [],
				pickedBlue: [],
				bannedHeroIds: [],
				turnIndex: 0,
				singleChoices: [],
				singleOfferedHeroIds: [],
				singleRevealPending: false,
			}
		}

		if (setupConfig.draftSystem === "single-draft") {
			const initialChoices = shuffle(eligible).slice(0, 3)
			return {
				mode: setupConfig.draftSystem,
				players: activePlayers,
				playersPerTeam: perTeam,
				startingTeam: resolvedStartingTeam,
				availableHeroIds: eligible,
				pickedRed: [],
				pickedBlue: [],
				bannedHeroIds: [],
				turnIndex: 0,
				singleChoices: initialChoices,
				singleOfferedHeroIds: [...initialChoices],
				singleRevealPending: true,
			}
		}

		return {
			mode: setupConfig.draftSystem,
			players: activePlayers,
			playersPerTeam: perTeam,
			startingTeam: resolvedStartingTeam,
			availableHeroIds: eligible,
			pickedRed: [],
			pickedBlue: [],
			bannedHeroIds: [],
			turnIndex: 0,
			singleChoices: [],
			singleOfferedHeroIds: [],
			singleRevealPending: false,
		}
	}

	function startDraft() {
		const started = initializeSession()
		if (started == null) {
			return
		}
		session = started
		currentScreen = "draft"
	}

	function resetDraft() {
		currentScreen = "setup"
		session = null
	}

	function getCurrentTurn(draftSession: DraftSession | null): DraftTurn | null {
		if (draftSession == null) {
			return null
		}
		if (draftSession.mode !== "pick-ban") {
			if (draftSession.pickedRed.length + draftSession.pickedBlue.length >= draftSession.players) {
				return null
			}
			return { team: draftSession.turnIndex % 2 === 0 ? draftSession.startingTeam : draftSession.startingTeam === "red" ? "blue" : "red", type: "pick" }
		}
		const order = getPickBanTurnOrder(draftSession.players, draftSession.startingTeam)
		return order[draftSession.turnIndex] ?? null
	}

	function getPromptText(draftSession: DraftSession | null): string {
		const turn = getCurrentTurn(draftSession)
		if (turn == null) {
			return ""
		}
		const teamLabel = turn.team === "red" ? "Red" : "Blue"
		return `${teamLabel} team's ${turn.type}.`
	}

	function canSelectHero(heroId: string): boolean {
		if (session == null) {
			return false
		}
		const turn = getCurrentTurn(session)
		if (turn == null) {
			return false
		}
		if (session.pickedRed.includes(heroId) || session.pickedBlue.includes(heroId) || session.bannedHeroIds.includes(heroId)) {
			return false
		}
		if (session.mode === "single-draft") {
			return session.singleChoices.includes(heroId)
		}
		return session.availableHeroIds.includes(heroId)
	}

	function pickOrBan(heroId: string) {
		if (session == null || !canSelectHero(heroId)) {
			return
		}
		const next: DraftSession = {
			...session,
			pickedRed: [...session.pickedRed],
			pickedBlue: [...session.pickedBlue],
			bannedHeroIds: [...session.bannedHeroIds],
			singleOfferedHeroIds: [...session.singleOfferedHeroIds],
		}

		const turn = getCurrentTurn(next)
		if (turn == null) {
			return
		}

		if (turn.type === "ban") {
			next.bannedHeroIds = [...next.bannedHeroIds, heroId]
		} else if (turn.team === "red") {
			next.pickedRed = [...next.pickedRed, heroId]
		} else {
			next.pickedBlue = [...next.pickedBlue, heroId]
		}

		next.turnIndex += 1

		if (next.mode === "single-draft" && getCurrentTurn(next) != null) {
			const alreadyOffered = new Set(next.singleOfferedHeroIds)
			const remaining = remainingHeroesForSession(next).filter((hero) => !alreadyOffered.has(hero))
			next.singleChoices = shuffle(remaining).slice(0, 3)
			next.singleOfferedHeroIds = [...next.singleOfferedHeroIds, ...next.singleChoices]
			next.singleRevealPending = true
		}

		session = next
	}

	function revealSingleChoices() {
		if (session == null || session.mode !== "single-draft") {
			return
		}
		session = { ...session, singleRevealPending: false }
	}

	function teamColorClass(color: "red" | "blue"): string {
		if (color === "red") return "text-orange-400"
		return "text-blue-400"
	}

	function buildAvailableHeroTextColors(draftSession: DraftSession | null): Record<string, string> {
		const colors: Record<string, string> = {}
		for (const heroId of allHeroIds) {
			colors[heroId] = "#ffffff"
		}
		if (draftSession == null) {
			return colors
		}
		for (const heroId of draftSession.pickedRed) {
			colors[heroId] = "#fb923c"
		}
		for (const heroId of draftSession.pickedBlue) {
			colors[heroId] = "#60a5fa"
		}
		for (const heroId of draftSession.bannedHeroIds) {
			colors[heroId] = "#6b7280"
		}
		return colors
	}

	function isDraftFinished(draftSession: DraftSession | null): boolean {
		if (draftSession == null) {
			return false
		}
		return draftSession.pickedRed.length + draftSession.pickedBlue.length >= draftSession.players
	}

	function getListHeroIds(draftSession: DraftSession | null): string[] {
		if (draftSession == null) {
			return []
		}
		if (draftSession.mode === "single-draft") {
			return draftSession.singleChoices
		}
		return draftSession.availableHeroIds
	}

	function syncShareParam(
		screen: "setup" | "draft",
		draftSession: DraftSession | null,
		config: DraftConfig,
		currentUrl: URL,
	) {
		if (!browser) {
			return
		}
		const current = new URL(currentUrl)
		if (screen === "draft" && draftSession != null) {
			const encoded = encodeShareState({ v: 1, config, session: draftSession })
			if (current.searchParams.get("draft") !== encoded) {
				current.searchParams.set("draft", encoded)
				goto(`${current.pathname}${current.search}${current.hash}`, {
					replaceState: true,
					noScroll: true,
					keepFocus: true,
				})
			}
			return
		}
		if (current.searchParams.has("draft")) {
			current.searchParams.delete("draft")
			goto(`${current.pathname}${current.search}${current.hash}`, {
				replaceState: true,
				noScroll: true,
				keepFocus: true,
			})
		}
	}

	function repeatStars(count: number): number[] {
		return Array.from({ length: count }, (_, i) => i)
	}

	function heroLink(heroId: string): string {
		return `/${heroId}`
	}
</script>

<svelte:head>
	<title>Draft — Stats of Atlantis</title>
	<meta name="description" content="Draft heroes for your Guards of Atlantis II games." />
</svelte:head>

<div class="max-w-6xl mx-auto px-3 md:mt-20 mt-16 mb-10 text-white">
	{#if currentScreen === "setup"}
		<div class="rounded-lg border border-dark-600 bg-dark-900/90 p-4 sm:p-6">
			<h1 class="font-modesto text-3xl sm:text-4xl mb-4">Draft</h1>

			<div class="space-y-6">
				<div>
					<p class="font-semibold mb-2">Team sizes</p>
					<div class="flex flex-wrap gap-3">
						{#each TEAM_SIZE_ORDER as option (option)}
							<label class="inline-flex items-center gap-2 cursor-pointer">
								<input
									type="radio"
									name="team-size"
									checked={setupConfig.teamSize === option}
									on:change={() => updateConfig("teamSize", option)}
								/>
								<span>{option}</span>
							</label>
						{/each}
					</div>
				</div>

				<div>
					<p class="font-semibold mb-2">Draft system</p>
					<div class="flex flex-wrap gap-3">
						{#each DRAFT_SYSTEM_ORDER as option (option)}
							<label class="inline-flex items-center gap-2 cursor-pointer">
								<input
									type="radio"
									name="draft-system"
									checked={setupConfig.draftSystem === option}
									on:change={() => updateConfig("draftSystem", option)}
								/>
								<span>{DRAFT_SYSTEM_LABELS[option]}</span>
							</label>
						{/each}
					</div>
				</div>

				<div>
					<p class="font-semibold mb-2">Starting team</p>
					<div class="flex flex-wrap gap-3">
						{#each STARTING_TEAM_ORDER as option (option)}
							<label class="inline-flex items-center gap-2 cursor-pointer">
								<input
									type="radio"
									name="starting-team"
									checked={setupConfig.startingTeam === option}
									on:change={() => updateConfig("startingTeam", option)}
								/>
								<span>{STARTING_TEAM_LABELS[option]}</span>
							</label>
						{/each}
					</div>
				</div>

				<div>
					<p class="font-semibold mb-2">Hero complexity</p>
					<div class="flex flex-wrap gap-4">
						{#each [1, 2, 3, 4] as starCount (starCount)}
							<label class="inline-flex items-center gap-2 cursor-pointer">
								<input
									type="checkbox"
									checked={setupConfig.enabledStars.includes(starCount)}
									disabled={setupConfig.enabledStars.length === 1 && setupConfig.enabledStars.includes(starCount)}
									on:change={() => toggleStar(starCount)}
								/>
								<span class="inline-flex items-center gap-1">
									{#each repeatStars(starCount) as star (star)}
										<img src={starImage} alt="" class="w-4 h-4" />
									{/each}
								</span>
							</label>
						{/each}
					</div>
				</div>

				<div>
					<p class="font-semibold mb-2">Hero packs</p>
					<div class="flex flex-wrap gap-3">
						{#each PACK_ORDER as pack (pack)}
							<label class="inline-flex items-center gap-2 cursor-pointer">
								<input
									type="checkbox"
									checked={setupConfig.enabledPacks.includes(pack)}
									disabled={setupConfig.enabledPacks.length === 1 && setupConfig.enabledPacks.includes(pack)}
									on:change={() => togglePack(pack)}
								/>
								<span>{getPackLabel(pack)}</span>
							</label>
						{/each}
					</div>
				</div>

				<div>
					<p class="font-semibold mb-2">Enabled heroes</p>
					<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 max-h-72 overflow-y-auto pr-1">
						{#each configurableHeroIds as heroId (heroId)}
							<label class="inline-flex items-center gap-2 cursor-pointer">
								<input
									type="checkbox"
									checked={setupConfig.enabledHeroes[heroId] !== false}
									on:change={() => toggleHeroEnabled(heroId)}
								/>
								<span>{heroes[heroId as keyof typeof heroes].name}</span>
							</label>
						{/each}
					</div>
				</div>

				{#if startDisabled}
					<p class="text-amber-300">
						Not enough heroes enabled! Add at least {missingHeroesCount} more to continue with the selected draft system.
					</p>
				{/if}

				<div class="pt-1">
					<button
						disabled={startDisabled}
						on:click={startDraft}
						class="px-4 py-2 rounded bg-amber-600 hover:bg-amber-700 text-white border border-amber-500 disabled:bg-dark-700 disabled:text-dark-300 disabled:border-dark-600 disabled:cursor-not-allowed"
					>
						Start
					</button>
				</div>
			</div>
		</div>
	{:else if session != null}
		<div class="rounded-lg border border-dark-600 bg-dark-900/90 p-4 sm:p-6">
			<button on:click={resetDraft} class="px-3 py-1.5 rounded bg-dark-700 hover:bg-dark-600 border border-dark-600 mb-4">
				Reset
			</button>

			{#if session.mode !== "all-random" && promptText !== ""}
				<p class="font-semibold mb-3">{promptText}</p>
			{/if}

			{#if session.mode === "all-random"}
				<div class="space-y-5">
					<div>
						<h2 class="font-semibold text-lg mb-2 text-orange-400">Red team</h2>
						<div class="space-y-2">
							{#each Array.from({ length: session.playersPerTeam }, (_, i) => i) as idx (idx)}
								<div class="flex items-center gap-3">
									<p class="w-20 text-dark-300">Player {idx + 1}:</p>
									<div class="min-w-0 flex-1">
										<div class="hero-row">
											<img src={getLogoImage(session.pickedRed[idx])} alt="" class="w-8 h-8 shrink-0" />
											<div class="min-w-0">
												<p class={`font-modesto text-xl leading-none truncate ${teamColorClass("red")}`}>{heroes[session.pickedRed[idx] as keyof typeof heroes].name}</p>
												<p class={`font-modesto text-sm leading-none truncate ${teamColorClass("red")}`}>{heroes[session.pickedRed[idx] as keyof typeof heroes].title}</p>
											</div>
											<a
												href={heroLink(session.pickedRed[idx])}
												class="info-link"
												aria-label={`Open ${heroes[session.pickedRed[idx] as keyof typeof heroes].name} page`}
											>
												i
											</a>
										</div>
									</div>
								</div>
							{/each}
						</div>
					</div>
					<div>
						<h2 class="font-semibold text-lg mb-2 text-blue-400">Blue team</h2>
						<div class="space-y-2">
							{#each Array.from({ length: session.playersPerTeam }, (_, i) => i) as idx (idx)}
								<div class="flex items-center gap-3">
									<p class="w-20 text-dark-300">Player {idx + 1}:</p>
									<div class="min-w-0 flex-1">
										<div class="hero-row">
											<img src={getLogoImage(session.pickedBlue[idx])} alt="" class="w-8 h-8 shrink-0" />
											<div class="min-w-0">
												<p class={`font-modesto text-xl leading-none truncate ${teamColorClass("blue")}`}>{heroes[session.pickedBlue[idx] as keyof typeof heroes].name}</p>
												<p class={`font-modesto text-sm leading-none truncate ${teamColorClass("blue")}`}>{heroes[session.pickedBlue[idx] as keyof typeof heroes].title}</p>
											</div>
											<a
												href={heroLink(session.pickedBlue[idx])}
												class="info-link"
												aria-label={`Open ${heroes[session.pickedBlue[idx] as keyof typeof heroes].name} page`}
											>
												i
											</a>
										</div>
									</div>
								</div>
							{/each}
						</div>
					</div>
				</div>
			{:else}
				<div class="space-y-5">
					{#if !(session.mode === "single-draft" && isDraftFinished(session))}
						<div class="relative">
							{#if session.mode === "single-draft" && session.singleRevealPending && !isDraftFinished(session)}
								<button
									on:click={revealSingleChoices}
									class="absolute inset-0 z-20 rounded border border-dark-500 bg-dark-900 text-2xl font-modesto tracking-wider"
								>
									Show
								</button>
							{/if}
							<ul class="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-2">
								{#each getListHeroIds(session) as heroId (heroId)}
									<li>
										<div class="hero-row hero-option-row">
											<button
												class="hero-pick-button"
												disabled={!canSelectHero(heroId)}
												on:click={() => pickOrBan(heroId)}
											>
												<img src={getLogoImage(heroId)} alt="" class="w-10 h-10 shrink-0" />
												<div class="min-w-0 text-left">
													<p class="font-modesto text-xl leading-none truncate" style={`color: ${availableHeroTextColors[heroId] ?? "#ffffff"};`}>{heroes[heroId as keyof typeof heroes].name}</p>
													<p class="font-modesto text-sm leading-none truncate" style={`color: ${availableHeroTextColors[heroId] ?? "#ffffff"};`}>{heroes[heroId as keyof typeof heroes].title}</p>
												</div>
											</button>
											<a href={heroLink(heroId)} class="info-link" aria-label={`Open ${heroes[heroId as keyof typeof heroes].name} page`}>
												i
											</a>
										</div>
									</li>
								{/each}
							</ul>
						</div>
					{/if}

					<div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
						<div>
							<h2 class="font-semibold text-lg mb-2 text-orange-400">Red team</h2>
							<div class="space-y-2">
								{#each Array.from({ length: session.playersPerTeam }, (_, i) => i) as idx (idx)}
									<div class="flex items-center gap-3">
										<p class="w-20 text-dark-300">Player {idx + 1}:</p>
									{#if session.pickedRed[idx]}
											<div class="hero-row flex-1">
											<img src={getLogoImage(session.pickedRed[idx])} alt="" class="w-8 h-8 shrink-0" />
												<div class="min-w-0">
												<p class={`font-modesto text-xl leading-none truncate ${teamColorClass("red")}`}>{heroes[session.pickedRed[idx] as keyof typeof heroes].name}</p>
												<p class={`font-modesto text-sm leading-none truncate ${teamColorClass("red")}`}>{heroes[session.pickedRed[idx] as keyof typeof heroes].title}</p>
												</div>
												<a
													href={heroLink(session.pickedRed[idx])}
													class="info-link"
													aria-label={`Open ${heroes[session.pickedRed[idx] as keyof typeof heroes].name} page`}
												>
													i
												</a>
											</div>
										{:else}
											<div class="text-dark-400">Waiting...</div>
										{/if}
									</div>
								{/each}
							</div>
						</div>

						<div>
							<h2 class="font-semibold text-lg mb-2 text-blue-400">Blue team</h2>
							<div class="space-y-2">
								{#each Array.from({ length: session.playersPerTeam }, (_, i) => i) as idx (idx)}
									<div class="flex items-center gap-3">
										<p class="w-20 text-dark-300">Player {idx + 1}:</p>
									{#if session.pickedBlue[idx]}
											<div class="hero-row flex-1">
											<img src={getLogoImage(session.pickedBlue[idx])} alt="" class="w-8 h-8 shrink-0" />
												<div class="min-w-0">
												<p class={`font-modesto text-xl leading-none truncate ${teamColorClass("blue")}`}>{heroes[session.pickedBlue[idx] as keyof typeof heroes].name}</p>
												<p class={`font-modesto text-sm leading-none truncate ${teamColorClass("blue")}`}>{heroes[session.pickedBlue[idx] as keyof typeof heroes].title}</p>
												</div>
												<a
													href={heroLink(session.pickedBlue[idx])}
													class="info-link"
													aria-label={`Open ${heroes[session.pickedBlue[idx] as keyof typeof heroes].name} page`}
												>
													i
												</a>
											</div>
										{:else}
											<div class="text-dark-400">Waiting...</div>
										{/if}
									</div>
								{/each}
							</div>
						</div>
					</div>

					{#if session.mode === "pick-ban"}
						<div>
							<h2 class="font-semibold text-lg mb-2 text-dark-300">Banned heroes</h2>
							{#if session.bannedHeroIds.length === 0}
								<p class="text-dark-400">None yet.</p>
							{:else}
								<ul class="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-2">
									{#each session.bannedHeroIds as heroId (heroId)}
										<li class="hero-row">
											<img src={getLogoImage(heroId)} alt="" class="w-8 h-8 shrink-0" />
											<div class="min-w-0">
												<p class="font-modesto text-xl leading-none text-dark-500 truncate">{heroes[heroId as keyof typeof heroes].name}</p>
												<p class="font-modesto text-sm leading-none text-dark-500 truncate">{heroes[heroId as keyof typeof heroes].title}</p>
											</div>
											<a href={heroLink(heroId)} class="info-link" aria-label={`Open ${heroes[heroId as keyof typeof heroes].name} page`}>
												i
											</a>
										</li>
									{/each}
								</ul>
							{/if}
						</div>
					{/if}

					<p class="text-dark-300">
						You can send the link to this page to your opponent once it's their turn to make a decision. Ask them to send the new link back when they are done.
					</p>
				</div>
			{/if}
		</div>
	{/if}
</div>

<style>
	.font-modesto {
		font-family: "Modesto Poster", serif;
	}

	@font-face {
		font-family: "Modesto Poster";
		src: url("../../lib/fonts/modesto_poster.woff") format("woff");
	}

	.hero-row {
		display: flex;
		align-items: center;
		gap: 0.5rem;
		padding: 0.35rem 0.5rem;
		border-radius: 0.5rem;
		border: 1px solid rgb(75 85 99);
		background: rgb(17 24 39 / 0.75);
	}

	.hero-option-row {
		display: flex;
		align-items: center;
		gap: 0.4rem;
	}

	.hero-pick-button {
		display: flex;
		align-items: center;
		gap: 0.5rem;
		width: 100%;
		padding: 0;
		border: 0;
		background: transparent;
		text-align: left;
	}

	.hero-button {
		display: flex;
		align-items: center;
		gap: 0.5rem;
		width: 100%;
		padding: 0.45rem 0.55rem;
		border-radius: 0.5rem;
		border: 1px solid rgb(75 85 99);
		background: rgb(17 24 39 / 0.75);
		transition: background 150ms ease;
	}

	.hero-button:hover:enabled {
		background: rgb(31 41 55 / 0.85);
	}

	.hero-button:disabled,
	.hero-pick-button:disabled {
		cursor: not-allowed;
	}

	.info-link {
		display: inline-flex;
		align-items: center;
		justify-content: center;
		flex-shrink: 0;
		width: 1.65rem;
		height: 1.65rem;
		margin-left: auto;
		border: 1px solid rgb(75 85 99);
		border-radius: 9999px;
		background: rgb(31 41 55 / 0.8);
		color: rgb(209 213 219);
		font-size: 0.9rem;
		font-weight: 700;
		line-height: 1;
	}

	.info-link:hover {
		background: rgb(55 65 81 / 0.9);
		color: white;
	}
</style>
