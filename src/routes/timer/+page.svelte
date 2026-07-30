<script lang="ts">
	import { browser } from '$app/environment';
	import { onDestroy, onMount } from 'svelte';

	type Team = 'orange' | 'blue';
	type Mode = 'planning' | 'resolving' | 'upgrading';
	type Screen = 'setup' | 'timer' | 'victory';

	type TimerConfig = {
		leftTeam: Team;
		planningTimer: number;
		waitingTimer: number;
		shameTimer: number;
		turnTimer: number;
		upgradeTimer: number;
	};

	type Clock = {
		remaining: number;
		running: boolean;
	};

	type WaitingState = Clock & {
		started: boolean;
		complete: boolean;
		forcedReady: boolean;
		readyClicked: boolean;
	};

	type ResolvingStage = 'idle' | 'reading' | 'turn';

	const TIMER_PAGE_STORAGE_KEY = 'goa-timer-page-state';
	const SECOND = 1000;
	const TEAMS: Team[] = ['orange', 'blue'];
	const MODES: Mode[] = ['planning', 'resolving', 'upgrading'];
	const MODE_LABELS: Record<Mode, string> = {
		planning: 'Planning',
		resolving: 'Resolving',
		upgrading: 'Upgrading'
	};

	const defaultConfig = (): TimerConfig => ({
		leftTeam: 'orange',
		planningTimer: 180,
		waitingTimer: 20,
		shameTimer: 60,
		turnTimer: 60,
		upgradeTimer: 180
	});

	let hydrated = false;
	let screen: Screen = 'setup';
	let config: TimerConfig = defaultConfig();
	let mode: Mode = 'planning';
	let winner: Team | null = null;

	let shameTimers: Record<Team, Clock> = createShameTimers(config);

	let commonTimer = createClock(config.planningTimer);
	let commonStarted = false;
	let commonExpired = false;
	let waitingTimers: Record<Team, WaitingState> = createWaitingTimers(config);

	let readingTimer = createClock(config.turnTimer);
	let resolvingStage: ResolvingStage = 'idle';
	let resolvingTeam: Team = 'orange';
	let activeTurnTimer = createClock(config.turnTimer);
	let enemyTurnTimer = createClock(config.turnTimer);
	let resolvingOnEnemy = false;

	let upgradeTimer = createClock(config.upgradeTimer);
	let upgradeStarted = false;
	let upgradeReady: Record<Team, boolean> = { orange: false, blue: false };

	let interval: ReturnType<typeof setInterval> | null = null;
	let lastTick = 0;

	$: leftTeam = config.leftTeam;
	$: rightTeam = otherTeam(leftTeam);
	$: teamOrder = [leftTeam, rightTeam] as Team[];

	$: if (browser && hydrated) {
		localStorage.setItem(TIMER_PAGE_STORAGE_KEY, JSON.stringify(config));
	}

	onMount(() => {
		const storedConfig = readStoredConfig();
		if (storedConfig != null) {
			config = storedConfig;
		}
		resetAllTimers();
		hydrated = true;
		lastTick = Date.now();
		interval = setInterval(tick, 200);
	});

	onDestroy(() => {
		if (interval != null) {
			clearInterval(interval);
		}
	});

	function createClock(seconds: number, running = false): Clock {
		return {
			remaining: Math.max(0, seconds) * SECOND,
			running
		};
	}

	function createShameTimers(nextConfig: TimerConfig): Record<Team, Clock> {
		return {
			orange: createClock(nextConfig.shameTimer),
			blue: createClock(nextConfig.shameTimer)
		};
	}

	function createWaitingTimers(nextConfig: TimerConfig): Record<Team, WaitingState> {
		return {
			orange: createWaitingState(nextConfig.waitingTimer),
			blue: createWaitingState(nextConfig.waitingTimer)
		};
	}

	function createWaitingState(seconds: number): WaitingState {
		return {
			...createClock(seconds),
			started: false,
			complete: false,
			forcedReady: false,
			readyClicked: false
		};
	}

	function readStoredConfig(): TimerConfig | null {
		if (!browser) {
			return null;
		}
		const raw = localStorage.getItem(TIMER_PAGE_STORAGE_KEY);
		if (!raw) {
			return null;
		}
		try {
			return sanitizeConfig(JSON.parse(raw) as Partial<TimerConfig>);
		} catch {
			return null;
		}
	}

	function sanitizeConfig(raw: Partial<TimerConfig>): TimerConfig {
		const next = defaultConfig();
		if (raw.leftTeam === 'orange' || raw.leftTeam === 'blue') {
			next.leftTeam = raw.leftTeam;
		}
		for (const key of [
			'planningTimer',
			'waitingTimer',
			'shameTimer',
			'turnTimer',
			'upgradeTimer'
		] as const) {
			next[key] = sanitizeSeconds(raw[key], next[key]);
		}
		return next;
	}

	function sanitizeSeconds(value: unknown, fallback: number): number {
		if (typeof value !== 'number' || !Number.isFinite(value)) {
			return fallback;
		}
		return Math.max(1, Math.floor(value));
	}

	function updateConfig<K extends keyof TimerConfig>(key: K, value: TimerConfig[K]) {
		config = {
			...config,
			[key]: key === 'leftTeam' ? value : sanitizeSeconds(value, config[key] as number)
		};
	}

	function proceed() {
		config = sanitizeConfig(config);
		resetAllTimers();
		screen = 'timer';
		mode = 'planning';
		resolvingTeam = config.leftTeam;
	}

	function resetAllTimers() {
		winner = null;
		shameTimers = createShameTimers(config);
		resetModeTimers('planning');
	}

	function resetModeTimers(nextMode = mode) {
		pauseAllShameTimers();
		mode = nextMode;
		commonTimer = createClock(config.planningTimer);
		commonStarted = false;
		commonExpired = false;
		waitingTimers = createWaitingTimers(config);
		readingTimer = createClock(config.turnTimer);
		resolvingStage = 'idle';
		activeTurnTimer = createClock(config.turnTimer);
		enemyTurnTimer = createClock(config.turnTimer);
		resolvingOnEnemy = false;
		upgradeTimer = createClock(config.upgradeTimer);
		upgradeStarted = false;
		upgradeReady = { orange: false, blue: false };
	}

	function setMode(nextMode: Mode) {
		resetModeTimers(nextMode);
	}

	function tick() {
		if (screen !== 'timer') {
			lastTick = Date.now();
			return;
		}

		const now = Date.now();
		const elapsed = now - lastTick;
		lastTick = now;
		if (elapsed <= 0) {
			return;
		}

		tickShameTimers(elapsed);
		if (screen !== 'timer') {
			return;
		}

		if (mode === 'planning') {
			tickPlanning(elapsed);
		} else if (mode === 'resolving') {
			tickResolving(elapsed);
		} else {
			tickUpgrading(elapsed);
		}
	}

	function tickShameTimers(elapsed: number) {
		const next = { ...shameTimers };
		for (const team of TEAMS) {
			const timer = next[team];
			if (!timer.running) {
				continue;
			}
			const remaining = Math.max(0, timer.remaining - elapsed);
			next[team] = { remaining, running: remaining > 0 };
			if (remaining === 0) {
				shameTimers = next;
				declareWinner(otherTeam(team));
				return;
			}
		}
		shameTimers = next;
	}

	function tickPlanning(elapsed: number) {
		if (commonTimer.running) {
			const remaining = Math.max(0, commonTimer.remaining - elapsed);
			commonTimer = { remaining, running: remaining > 0 };
			if (remaining === 0) {
				expireCommonTimer();
			}
		}

		let nextWaiting = { ...waitingTimers };
		let changed = false;
		for (const team of TEAMS) {
			const timer = nextWaiting[team];
			if (!timer.running) {
				continue;
			}
			const remaining = Math.max(0, timer.remaining - elapsed);
			nextWaiting[team] = {
				...timer,
				remaining,
				running: remaining > 0,
				complete: remaining === 0 ? true : timer.complete
			};
			changed = true;
			if (remaining === 0) {
				handleWaitingTimerFinished(team, nextWaiting);
				nextWaiting = { ...waitingTimers };
			}
		}
		if (changed) {
			waitingTimers = nextWaiting;
		}
		maybeAutoEndPlanning();
	}

	function tickResolving(elapsed: number) {
		if (resolvingStage === 'reading' && readingTimer.running) {
			const remaining = Math.max(0, readingTimer.remaining - elapsed);
			readingTimer = { remaining, running: remaining > 0 };
			if (remaining === 0) {
				proceedToFirstPlayer();
			}
			return;
		}

		if (resolvingStage !== 'turn') {
			return;
		}

		if (resolvingOnEnemy && enemyTurnTimer.running) {
			const remaining = Math.max(0, enemyTurnTimer.remaining - elapsed);
			enemyTurnTimer = { remaining, running: remaining > 0 };
			if (remaining === 0) {
				startShameTimer(otherTeam(resolvingTeam));
			}
			return;
		}

		if (!resolvingOnEnemy && activeTurnTimer.running) {
			const remaining = Math.max(0, activeTurnTimer.remaining - elapsed);
			activeTurnTimer = { remaining, running: remaining > 0 };
			if (remaining === 0) {
				startShameTimer(resolvingTeam);
			}
		}
	}

	function tickUpgrading(elapsed: number) {
		if (!upgradeTimer.running) {
			return;
		}
		const remaining = Math.max(0, upgradeTimer.remaining - elapsed);
		upgradeTimer = { remaining, running: remaining > 0 };
		if (remaining === 0) {
			for (const team of TEAMS) {
				if (!upgradeReady[team]) {
					startShameTimer(team);
				}
			}
		}
	}

	function startCommonTimer() {
		commonStarted = true;
		commonExpired = false;
		commonTimer = createClock(config.planningTimer, true);
		waitingTimers = createWaitingTimers(config);
	}

	function expireCommonTimer() {
		commonExpired = true;
		commonTimer = { ...commonTimer, running: false, remaining: 0 };
		const next = { ...waitingTimers };
		for (const team of TEAMS) {
			const timer = next[team];
			if (!timer.running && !timer.complete) {
				next[team] = {
					...timer,
					started: true,
					running: true,
					forcedReady: true
				};
				pauseShameTimer(team);
			}
		}
		waitingTimers = next;
	}

	function startWaitingTimer(team: Team) {
		const timer = waitingTimers[team];
		if (commonExpired || timer.started) {
			return;
		}
		waitingTimers = {
			...waitingTimers,
			[team]: {
				...timer,
				started: true,
				running: true,
				complete: false,
				remaining: config.waitingTimer * SECOND
			}
		};
		pauseShameTimer(team);
	}

	function cancelWaitingTimer(team: Team) {
		if (commonExpired) {
			return;
		}
		waitingTimers = {
			...waitingTimers,
			[team]: createWaitingState(config.waitingTimer)
		};
		pauseShameTimer(team);
	}

	function markWaitingReady(team: Team) {
		const timer = waitingTimers[team];
		if (!timer.forcedReady || timer.readyClicked) {
			return;
		}
		waitingTimers = {
			...waitingTimers,
			[team]: {
				...timer,
				readyClicked: true
			}
		};
		pauseShameTimer(team);
		maybeAutoEndPlanning();
	}

	function handleWaitingTimerFinished(team: Team, nextWaiting: Record<Team, WaitingState>) {
		waitingTimers = nextWaiting;
		const timer = nextWaiting[team];
		if (timer.forcedReady && !timer.readyClicked) {
			startShameTimer(team);
			return;
		}
		if (!allWaitingStarted(nextWaiting)) {
			startShameTimer(team);
		}
	}

	function maybeAutoEndPlanning() {
		if (!allWaitingStarted(waitingTimers)) {
			return;
		}
		if (TEAMS.every((team) => waitingTimers[team].complete || waitingTimers[team].readyClicked)) {
			endPlanning();
		}
	}

	function endPlanning() {
		resetModeTimers('resolving');
	}

	function moveToUpgrading() {
		resetModeTimers('upgrading');
	}

	function allWaitingStarted(timers: Record<Team, WaitingState>) {
		return TEAMS.every((team) => timers[team].started);
	}

	function startReadingTimer() {
		resolvingStage = 'reading';
		readingTimer = createClock(config.turnTimer, true);
		activeTurnTimer = createClock(config.turnTimer);
		enemyTurnTimer = createClock(config.turnTimer);
		resolvingOnEnemy = false;
	}

	function proceedToFirstPlayer() {
		resolvingStage = 'turn';
		readingTimer = createClock(config.turnTimer);
		activeTurnTimer = createClock(config.turnTimer, true);
		enemyTurnTimer = createClock(config.turnTimer);
		resolvingOnEnemy = false;
		pauseAllShameTimers();
	}

	function waitForEnemy() {
		if (resolvingStage !== 'turn') {
			return;
		}
		activeTurnTimer = { ...activeTurnTimer, running: false };
		enemyTurnTimer = { ...enemyTurnTimer, running: true };
		resolvingOnEnemy = true;
		pauseShameTimer(otherTeam(resolvingTeam));
	}

	function returnBack() {
		if (resolvingStage !== 'turn') {
			return;
		}
		enemyTurnTimer = { ...enemyTurnTimer, running: false };
		activeTurnTimer = { ...activeTurnTimer, running: true };
		resolvingOnEnemy = false;
		pauseShameTimer(resolvingTeam);
	}

	function resolveAction() {
		if (resolvingStage !== 'turn') {
			return;
		}
		activeTurnTimer = createClock(config.turnTimer, true);
		enemyTurnTimer = createClock(config.turnTimer);
		resolvingOnEnemy = false;
		pauseAllShameTimers();
	}

	function endTurn() {
		resolvingTeam = otherTeam(resolvingTeam);
		resetModeTimers('planning');
	}

	function startUpgradeTimer() {
		upgradeStarted = true;
		upgradeTimer = createClock(config.upgradeTimer, true);
		upgradeReady = { orange: false, blue: false };
	}

	function markUpgradeReady(team: Team) {
		if (!upgradeStarted || upgradeReady[team]) {
			return;
		}
		upgradeReady = {
			...upgradeReady,
			[team]: true
		};
		pauseShameTimer(team);
		if (TEAMS.every((item) => upgradeReady[item] || item === team)) {
			resetModeTimers('planning');
		}
	}

	function startShameTimer(team: Team) {
		const timer = shameTimers[team];
		if (timer.remaining <= 0) {
			declareWinner(otherTeam(team));
			return;
		}
		shameTimers = {
			...shameTimers,
			[team]: {
				...timer,
				running: true
			}
		};
	}

	function pauseShameTimer(team: Team) {
		shameTimers = {
			...shameTimers,
			[team]: {
				...shameTimers[team],
				running: false
			}
		};
	}

	function pauseAllShameTimers() {
		shameTimers = {
			orange: { ...shameTimers.orange, running: false },
			blue: { ...shameTimers.blue, running: false }
		};
	}

	function declareWinner(team: Team) {
		winner = team;
		screen = 'victory';
		pauseAllShameTimers();
	}

	function resetToSetup() {
		resetAllTimers();
		screen = 'setup';
	}

	function otherTeam(team: Team): Team {
		return team === 'orange' ? 'blue' : 'orange';
	}

	function teamLabel(team: Team) {
		return team === 'orange' ? 'Orange' : 'Blue';
	}

	function teamTextClass(team: Team) {
		return team === 'orange' ? 'text-orange-400' : 'text-blue-400';
	}

	function teamBorderClass(team: Team) {
		return team === 'orange' ? 'border-orange-500/70' : 'border-blue-500/70';
	}

	function teamButtonClass(team: Team) {
		return team === 'orange'
			? 'bg-orange-600 hover:bg-orange-700 border-orange-500'
			: 'bg-blue-600 hover:bg-blue-700 border-blue-500';
	}

	function formatTimer(milliseconds: number) {
		const totalSeconds = Math.ceil(Math.max(0, milliseconds) / SECOND);
		const minutes = Math.floor(totalSeconds / 60);
		const seconds = totalSeconds % 60;
		return `${minutes}:${seconds.toString().padStart(2, '0')}`;
	}
</script>

<svelte:head>
	<title>Timer — Stats of Atlantis</title>
	<meta
		name="description"
		content="Run Guards of Atlantis II planning, resolving, and upgrading timers."
	/>
</svelte:head>

<div class="max-w-6xl mx-auto px-3 md:mt-20 mt-16 mb-10 text-white">
	{#if screen === 'setup'}
		<div class="rounded-lg border border-dark-600 bg-dark-900/90 p-4 sm:p-6">
			<h1 class="font-modesto text-3xl sm:text-4xl mb-4">Timer</h1>

			<div class="space-y-6">
				<div>
					<p class="font-semibold mb-2">Team on the left</p>
					<div class="flex flex-wrap gap-3">
						{#each TEAMS as team (team)}
							<label class="inline-flex items-center gap-2 cursor-pointer">
								<input
									type="radio"
									name="left-team"
									checked={config.leftTeam === team}
									on:change={() => updateConfig('leftTeam', team)}
								/>
								<span>{teamLabel(team)}</span>
							</label>
						{/each}
					</div>
				</div>

				<div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
					<label class="space-y-2">
						<span class="block font-semibold">Planning timer</span>
						<span class="flex items-center gap-2">
							<input class="timer-input" type="number" min="1" bind:value={config.planningTimer} />
							<span class="text-dark-300">seconds</span>
						</span>
					</label>
					<label class="space-y-2">
						<span class="block font-semibold">Waiting timer</span>
						<span class="flex items-center gap-2">
							<input class="timer-input" type="number" min="1" bind:value={config.waitingTimer} />
							<span class="text-dark-300">seconds</span>
						</span>
					</label>
					<label class="space-y-2">
						<span class="block font-semibold">Shame timer</span>
						<span class="flex items-center gap-2">
							<input class="timer-input" type="number" min="1" bind:value={config.shameTimer} />
							<span class="text-dark-300">seconds</span>
						</span>
					</label>
					<label class="space-y-2">
						<span class="block font-semibold">Turn timer</span>
						<span class="flex items-center gap-2">
							<input class="timer-input" type="number" min="1" bind:value={config.turnTimer} />
							<span class="text-dark-300">seconds</span>
						</span>
					</label>
					<label class="space-y-2">
						<span class="block font-semibold">Upgrade timer</span>
						<span class="flex items-center gap-2">
							<input class="timer-input" type="number" min="1" bind:value={config.upgradeTimer} />
							<span class="text-dark-300">seconds</span>
						</span>
					</label>
				</div>

				<button
					on:click={proceed}
					class="px-4 py-2 rounded bg-amber-600 hover:bg-amber-700 text-white border border-amber-500"
				>
					Proceed
				</button>
			</div>
		</div>
	{:else if screen === 'victory' && winner != null}
		<div class="rounded-lg border border-dark-600 bg-dark-900/90 p-6 text-center">
			<h1 class={`font-modesto text-5xl mb-4 ${teamTextClass(winner)}`}>
				{teamLabel(winner)} wins!
			</h1>
			<p class="text-dark-300 mb-5">The other team&apos;s shame timer ran out.</p>
			<button
				on:click={resetToSetup}
				class="px-4 py-2 rounded bg-dark-700 hover:bg-dark-600 border border-dark-600"
			>
				Back to setup
			</button>
		</div>
	{:else}
		<div class="space-y-5">
			<div
				class="flex flex-wrap items-center justify-between gap-3 rounded-lg border border-dark-600 bg-dark-900/90 p-4"
			>
				<div class="flex flex-wrap gap-2">
					{#each MODES as item (item)}
						<button
							on:click={() => setMode(item)}
							class={`px-3 py-1.5 rounded border ${mode === item ? 'bg-amber-600 border-amber-500' : 'bg-dark-700 hover:bg-dark-600 border-dark-600'}`}
						>
							{MODE_LABELS[item]}
						</button>
					{/each}
				</div>
				<button
					on:click={resetToSetup}
					class="px-3 py-1.5 rounded bg-dark-700 hover:bg-dark-600 border border-dark-600"
				>
					Reset
				</button>
			</div>

			<div class="grid grid-cols-2 gap-3">
				{#each teamOrder as team (team)}
					<div class={`rounded-lg border bg-dark-900/90 p-3 ${teamBorderClass(team)}`}>
						<p class={`font-semibold ${teamTextClass(team)}`}>{teamLabel(team)} shame</p>
						<p class="font-mono text-3xl">{formatTimer(shameTimers[team].remaining)}</p>
						<p class="text-sm text-dark-300">{shameTimers[team].running ? 'Running' : 'Paused'}</p>
					</div>
				{/each}
			</div>

			<div class="rounded-lg border border-dark-600 bg-dark-900/90 p-4 sm:p-6">
				{#if mode === 'planning'}
					<div class="space-y-6">
						<div class="text-center space-y-3">
							<h1 class="font-modesto text-3xl">Planning</h1>
							{#if commonStarted}
								<p class="font-mono text-5xl">{formatTimer(commonTimer.remaining)}</p>
							{/if}
							{#if !commonStarted}
								<button on:click={startCommonTimer} class="primary-button"
									>Start the common timer</button
								>
							{/if}
							{#if allWaitingStarted(waitingTimers)}
								<div>
									<button on:click={endPlanning} class="primary-button">End the Planning</button>
								</div>
							{/if}
							<button
								on:click={moveToUpgrading}
								class="text-sm px-3 py-1.5 rounded bg-dark-700 hover:bg-dark-600 border border-dark-600"
							>
								Move to upgrading
							</button>
						</div>

						{#if commonStarted}
							<div class="grid grid-cols-1 md:grid-cols-2 gap-4">
								{#each teamOrder as team (team)}
									{@const timer = waitingTimers[team]}
									<div
										class={`rounded-lg border p-4 text-center bg-dark-800/70 ${teamBorderClass(team)}`}
									>
										<h2 class={`font-semibold text-lg mb-2 ${teamTextClass(team)}`}>
											{teamLabel(team)}
										</h2>
										<p class="font-mono text-4xl mb-3">{formatTimer(timer.remaining)}</p>
										{#if timer.forcedReady}
											<button
												on:click={() => markWaitingReady(team)}
												disabled={timer.readyClicked}
												class={`team-button ${teamButtonClass(team)}`}
											>
												Ready?
											</button>
										{:else if timer.started}
											<button
												on:click={() => cancelWaitingTimer(team)}
												disabled={commonExpired}
												class={`team-button ${teamButtonClass(team)}`}
											>
												Cancel the waiting timer
											</button>
										{:else}
											<button
												on:click={() => startWaitingTimer(team)}
												class={`team-button ${teamButtonClass(team)}`}
											>
												Start the waiting timer
											</button>
										{/if}
									</div>
								{/each}
							</div>
						{/if}
					</div>
				{:else if mode === 'resolving'}
					<div class="space-y-6 text-center">
						<h1 class="font-modesto text-3xl">Resolving</h1>
						<p class="text-dark-300">
							Current player: <span class={`font-semibold ${teamTextClass(resolvingTeam)}`}
								>{teamLabel(resolvingTeam)}</span
							>
						</p>

						{#if resolvingStage === 'idle'}
							<button on:click={startReadingTimer} class="primary-button"
								>Start the reading timer</button
							>
						{:else if resolvingStage === 'reading'}
							<div class="space-y-3">
								<p class="font-mono text-5xl">{formatTimer(readingTimer.remaining)}</p>
								<button on:click={proceedToFirstPlayer} class="primary-button"
									>Proceed to the first player</button
								>
							</div>
						{:else}
							<div class="grid grid-cols-1 md:grid-cols-2 gap-4 text-left">
								<div
									class={`rounded-lg border p-4 bg-dark-800/70 ${teamBorderClass(resolvingTeam)}`}
								>
									<h2 class={`font-semibold ${teamTextClass(resolvingTeam)}`}>
										{teamLabel(resolvingTeam)} turn
									</h2>
									<p class="font-mono text-4xl">{formatTimer(activeTurnTimer.remaining)}</p>
									<p class="text-sm text-dark-300">{!resolvingOnEnemy ? 'Running' : 'Paused'}</p>
								</div>
								<div
									class={`rounded-lg border p-4 bg-dark-800/70 ${teamBorderClass(otherTeam(resolvingTeam))}`}
								>
									<h2 class={`font-semibold ${teamTextClass(otherTeam(resolvingTeam))}`}>
										{teamLabel(otherTeam(resolvingTeam))} wait
									</h2>
									<p class="font-mono text-4xl">{formatTimer(enemyTurnTimer.remaining)}</p>
									<p class="text-sm text-dark-300">{resolvingOnEnemy ? 'Running' : 'Paused'}</p>
								</div>
							</div>
							<div class="flex flex-wrap justify-center gap-3">
								<button on:click={resolveAction} class="primary-button">Resolve</button>
								{#if resolvingOnEnemy}
									<button on:click={returnBack} class="primary-button">Return back</button>
								{:else}
									<button on:click={waitForEnemy} class="primary-button">Wait for enemy</button>
								{/if}
							</div>
							<button
								on:click={endTurn}
								class="text-sm px-3 py-1.5 rounded bg-dark-700 hover:bg-dark-600 border border-dark-600"
							>
								End turn
							</button>
						{/if}
					</div>
				{:else}
					<div class="space-y-6 text-center">
						<h1 class="font-modesto text-3xl">Upgrading</h1>
						{#if !upgradeStarted}
							<button on:click={startUpgradeTimer} class="primary-button"
								>Start the upgrading timer</button
							>
						{:else}
							<p class="font-mono text-5xl">{formatTimer(upgradeTimer.remaining)}</p>
							<div class="grid grid-cols-1 md:grid-cols-2 gap-4">
								{#each teamOrder as team (team)}
									<div class={`rounded-lg border p-4 bg-dark-800/70 ${teamBorderClass(team)}`}>
										<h2 class={`font-semibold text-lg mb-3 ${teamTextClass(team)}`}>
											{teamLabel(team)}
										</h2>
										<button
											on:click={() => markUpgradeReady(team)}
											disabled={upgradeReady[team]}
											class={`team-button ${teamButtonClass(team)}`}
										>
											Ready
										</button>
									</div>
								{/each}
							</div>
						{/if}
					</div>
				{/if}
			</div>
		</div>
	{/if}
</div>

<style>
	.font-modesto {
		font-family: 'Modesto Poster', serif;
	}

	@font-face {
		font-family: 'Modesto Poster';
		src: url('../../lib/fonts/modesto_poster.woff') format('woff');
	}

	.timer-input {
		width: 8rem;
		border-radius: 0.375rem;
		border: 1px solid rgb(75 85 99);
		background: rgb(17 24 39);
		padding: 0.45rem 0.6rem;
		color: white;
	}

	.primary-button {
		border: 1px solid rgb(245 158 11);
		border-radius: 0.375rem;
		background: rgb(217 119 6);
		padding: 0.55rem 1rem;
		color: white;
	}

	.primary-button:hover:enabled {
		background: rgb(180 83 9);
	}

	.team-button {
		border-width: 1px;
		border-radius: 0.375rem;
		padding: 0.55rem 1rem;
		color: white;
	}

	.team-button:disabled,
	.primary-button:disabled {
		cursor: not-allowed;
		opacity: 0.55;
	}
</style>
