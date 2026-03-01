<script lang="ts">
	import { page } from "$app/stores"
	import { flip } from "svelte/animate"
	import { Card, Img, SpeedDial, SpeedDialButton, Tooltip } from "flowbite-svelte"
	import { SortOutline } from "flowbite-svelte-icons"
	import { goto } from "$app/navigation"
	import { browser } from "$app/environment"
	import { Pack, Trait, heroes, oldHeroes, stats } from "../states"
	import { onMount } from "svelte"

	import starImage from "$lib/images/star.png"

	let heroImages = new Map()
	let statImages = new Map()
	let logoImages = new Map()

	const heroImageLoadingPromises: Map<string, Promise<unknown>> = new Map()

	const emptyImage = "data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs="
	const traitImageModules = import.meta.glob("../lib/images/trait_*.png", { eager: true, import: "default" }) as Record<string, string>

	onMount(() => {
		const updateViewportWidth = () => {
			viewportWidth = window.innerWidth
		}
		updateViewportWidth()
		window.addEventListener("resize", updateViewportWidth)
		void (async () => {
			const heroKeys = new Set([...Object.keys(oldHeroes), ...Object.keys(heroes)])

			for (const hero of heroKeys) {
				try {
					const path = (await import(`../lib/images/avatars/${hero}.webp`)).default
					heroImages.set(hero, path)
					const image = new Image()
					image.src = path
					heroImageLoadingPromises.set(hero, new Promise(resolve => image.onload = (a) => {
						return resolve(a)
					}))
				} catch {
					heroImages.set(hero, emptyImage)
				}
			}
			heroImages = heroImages

			for (const hero of heroKeys) {
				try {
					logoImages.set(hero, (await import(`../lib/images/logos/${hero}.png`)).default)
				} catch {
					logoImages.set(hero, emptyImage)
				}
			}
			logoImages = logoImages

			for (const stat of stats) {
				statImages.set(stat, (await import(`../lib/images/stat_icons/${stat}_white.png`)).default)
			}
			statImages = statImages
		})()

		return () => {
			window.removeEventListener("resize", updateViewportWidth)
		}
	})

	let useNewPrinting = true
	let displayTraits = true
	let showBaseGame = true
	let showDevotedPack = true
	let showRenownedPack = true
	let showDefiantPack = true
	let showArcanePack = true
	let showWaywardPack = true
	let sortIndex: number | null = null
	let viewportWidth = 1024
	let heroList: Array<[string, typeof heroes[keyof typeof heroes] | typeof oldHeroes[keyof typeof oldHeroes]]> = []
	let filteredHeroList: Array<[string, typeof heroes[keyof typeof heroes] | typeof oldHeroes[keyof typeof oldHeroes]]> = []
	const newPrintingStats = stats.slice(0, 4)
	$: activeStats = useNewPrinting ? newPrintingStats : stats

	if (browser) {
		useNewPrinting = $page.url.searchParams.get("printing") !== "old"
		viewportWidth = window.innerWidth
	}

	const sortParam = browser ? $page.url.searchParams.get("sort") : null
	if (sortParam != null && stats.includes(sortParam)) {
		sortBy(stats.indexOf(sortParam), false)
	} else {
		sortByComplexity(false)
	}

	$: {
		const baseHeroes = Object.entries(useNewPrinting ? heroes : oldHeroes)
		const maxStatIndex = useNewPrinting ? newPrintingStats.length - 1 : stats.length - 1
		const statIndex = sortIndex
		if (statIndex == null || statIndex > maxStatIndex) {
			heroList = [...baseHeroes].sort((first, second) => first[1].stars - second[1].stars)
		} else {
			heroList = [...baseHeroes].sort((first, second) => {
				return getStatRange(second[1], statIndex).max - getStatRange(first[1], statIndex).max
			})
		}
	}

	$: {
		const packVisibility = {
			base: showBaseGame,
			devoted: showDevotedPack,
			renowned: showRenownedPack,
			defiant: showDefiantPack,
			arcane: showArcanePack,
			wayward: showWaywardPack,
		}
		filteredHeroList = heroList.filter(([name, desc]) => {
			void packVisibility
			return isPackVisible(name, desc)
		})
	}

	function getStatRange(desc: { stats: Array<number | Array<number>> }, statIndex: number) {
		const statValue = desc.stats[statIndex]
		if (statValue == null) {
			return { min: 0, max: 0 }
		}
		if (Array.isArray(statValue)) {
			return { min: statValue[0], max: statValue[1] }
		}
		return { min: statValue, max: statValue }
	}

	function getHeroTraits(desc: typeof heroes[keyof typeof heroes] | typeof oldHeroes[keyof typeof oldHeroes]) {
		if ("traits" in desc) {
			return desc.traits
		}
		return []
	}

	function getTraitImageKey(heroName: string, trait: Trait) {
		if (trait === Trait.TOKENS) {
			return `tokens_${heroName}`
		}
		return trait
	}

	function getTraitImage(heroName: string, trait: Trait) {
		return traitImageModules[`../lib/images/trait_${getTraitImageKey(heroName, trait)}.png`] ?? emptyImage
	}

	function getTraitLabel(trait: Trait) {
		return trait.charAt(0).toUpperCase() + trait.slice(1)
	}

	function getHeroPackName(name: string, desc: typeof heroes[keyof typeof heroes] | typeof oldHeroes[keyof typeof oldHeroes]) {
		if ("pack" in desc) {
			return desc.pack
		}
		const pack = heroes[name as keyof typeof heroes]?.pack
		return pack ?? null
	}

	function isPackVisible(name: string, desc: typeof heroes[keyof typeof heroes] | typeof oldHeroes[keyof typeof oldHeroes]) {
		const packName = getHeroPackName(name, desc)
		if (packName == null) {
			return true
		}
		switch (packName) {
			case Pack.BASE:
				return showBaseGame
			case Pack.DEVOTED:
				return showDevotedPack
			case Pack.RENOWNED:
				return showRenownedPack
			case Pack.DEFIANT:
				return showDefiantPack
			case Pack.ARCANE:
				return showArcanePack
			case Pack.WAYWARD:
				return showWaywardPack
			default:
				return true
		}
	}

	function getPackLabel(packName: string) {
		return packName.charAt(0) + packName.slice(1).toLowerCase()
	}

	function getResponsiveTraitLayout(width: number) {
		if (width >= 768) {
			return { threshold: 0.6, bannerWidth: 720, traitSlotWidth: 80 }
		}
		if (width >= 640) {
			return { threshold: 0.4, bannerWidth: 560, traitSlotWidth: 64 }
		}
		if (width >= 420) {
			return { threshold: 0.6, bannerWidth: 360, traitSlotWidth: 48 }
		}
		return { threshold: 0.5, bannerWidth: 300, traitSlotWidth: 40 }
	}

	function getTraitRows(heroTraits: Array<Trait>) {
		if (heroTraits.length <= 1) {
			return { top: [] as Array<Trait>, bottom: heroTraits }
		}

		const { threshold, bannerWidth, traitSlotWidth } = getResponsiveTraitLayout(viewportWidth)
		const overlapPx = 8
		const oneRowWidth = traitSlotWidth + (heroTraits.length - 1) * (traitSlotWidth - overlapPx)
		const shouldWrap = oneRowWidth > bannerWidth * threshold

		if (!shouldWrap) {
			return { top: [] as Array<Trait>, bottom: heroTraits }
		}

		const splitIndex = Math.floor(heroTraits.length / 2)
		return {
			top: heroTraits.slice(0, splitIndex),
			bottom: heroTraits.slice(splitIndex),
		}
	}

	function setSearchParam(key: string, value: string | null) {
		if (!browser) {
			return
		}
		const url = new URL($page.url)
		if (value == null) {
			url.searchParams.delete(key)
		} else {
			url.searchParams.set(key, value)
		}
		goto(`${url.pathname}${url.search}${url.hash}`, {
			replaceState: true,
			noScroll: true,
			keepFocus: true,
		})
	}

	function sortBy(statIndex: number, updateUrl = true) {
		sortIndex = statIndex
		if (browser && updateUrl) {
			setSearchParam("sort", stats[statIndex])
		}
	}

	function sortByComplexity(updateUrl = true) {
		sortIndex = null
		if (browser && updateUrl) {
			setSearchParam("sort", "complexity")
		}
	}

	$: if (browser) {
		const current = $page.url.searchParams.get("printing")
		const desired = useNewPrinting ? null : "old"
		if (current !== desired) {
			setSearchParam("printing", desired)
		}
	}
</script>

<svelte:head>
	<title>Stats of Atlantis</title>
	<meta name="description" content="Guards of Atlantis II card builder and catalogue." />
</svelte:head>
bg-dark-700 hover:bg-dark-800 border-dark-600
<div class="flex flex-col items-center md:mt-16 mt-16">
	<div class="mb-4 sm:mb-6 flex flex-col gap-y-2 text-white text-sm sm:text-base xl:fixed xl:top-24 xl:left-[calc(50%+380px)] xl:z-30 xl:mb-0 xl:w-56 xl:rounded-lg xl:border xl:border-dark-600 xl:bg-dark-900/80 xl:p-4 xl:backdrop-blur-sm">
		<label class="inline-flex items-center cursor-pointer">
			<input type="checkbox" class="sr-only peer" bind:checked={useNewPrinting} />
			<div class="relative w-11 h-6 bg-dark-700 peer-focus:outline-none rounded-full peer peer-checked:bg-amber-600 after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:after:translate-x-full"></div>
			<span class="ml-3">New Printing</span>
		</label>
		<label class="inline-flex items-center cursor-pointer">
			<input type="checkbox" class="sr-only peer" bind:checked={displayTraits} />
			<div class="relative w-11 h-6 bg-dark-700 peer-focus:outline-none rounded-full peer peer-checked:bg-amber-600 after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:after:translate-x-full"></div>
			<span class="ml-3">Display traits</span>
		</label>
		<div class="h-px bg-dark-600 my-1" />
		<label class="inline-flex items-center cursor-pointer">
			<input type="checkbox" class="mr-2" bind:checked={showBaseGame} />
			<span>Base game</span>
		</label>
		<label class="inline-flex items-center cursor-pointer">
			<input type="checkbox" class="mr-2" bind:checked={showDevotedPack} />
			<span>Devoted pack</span>
		</label>
		<label class="inline-flex items-center cursor-pointer">
			<input type="checkbox" class="mr-2" bind:checked={showRenownedPack} />
			<span>Renowned pack</span>
		</label>
		<label class="inline-flex items-center cursor-pointer">
			<input type="checkbox" class="mr-2" bind:checked={showDefiantPack} />
			<span>Defiant pack</span>
		</label>
		<label class="inline-flex items-center cursor-pointer">
			<input type="checkbox" class="mr-2" bind:checked={showArcanePack} />
			<span>Arcane pack</span>
		</label>
		<label class="inline-flex items-center cursor-pointer">
			<input type="checkbox" class="mr-2" bind:checked={showWaywardPack} />
			<span>Wayward pack</span>
		</label>
	</div>
	<ul class="max-w-full m-auto">
		{#each filteredHeroList as [name, desc] (name)}
			<li class="px-3 py-1.5" animate:flip={{duration: 300}}>
				<a href={useNewPrinting ? `/${name}` : `/${name}?printing=old`}>
					<div class="border border-dark-600 rounded-lg sm:rounded-2xl relative w-[300px] xs:w-[360px] sm:w-[560px] md:w-[720px] h-[151px] xs:h-[181px] sm:h-[281px] md:h-[361px]">
						<Img src={heroImages.get(name) ?? emptyImage} class="absolute z-0 rounded-lg sm:rounded-2xl transition-all duration-300 cursor-pointer filter md:saturate-50 hover:saturate-150" alt="" />
						<ul class="absolute top-1 sm:top-2 left-1 sm:left-2 space-y-0.5 sm:space-y-1">
							{#each activeStats as stat, stat_index (stat_index)}
								{@const range = getStatRange(desc, stat_index)}
								<li>
									<Card id="{name}_{stat}" padding="none" class="h-2.5 sm:h-5 z-20 border-dark-600 bg-dark-900">
										<div class="m-0.5 sm:m-1 relative h-full">
											<Img src={statImages.get(stat)} class="absolute w-3 sm:w-5 z-30 -top-1 sm:-top-1.25" />
											<div class="float-left w-3 sm:w-5 h-full bg-transparent" />
											{#each Array(8) as _, color_index (color_index)}
												<div class="float-left w-0.5 sm:w-1 h-1" />
												{#if range.min > color_index}
													<div class="z-40 float-left w-0.5 sm:w-1 h-full bg-{name}" />
												{:else if range.max > color_index}
													<div class="z-40 float-left w-0.5 sm:w-1 h-full bg-{name} opacity-50" />
												{:else}
													<div class="float-left w-0.5 sm:w-1 h-1 bg-transparent" />
												{/if}
											{/each}
											<div class="float-left w-0.5 h-1" />
										</div>
									</Card>
								</li>
								<Tooltip triggeredBy="#{name}_{stat}" placement="left">{stat.charAt(0).toUpperCase() + stat.slice(1)}</Tooltip>
							{/each}
						</ul>
						{#if useNewPrinting && displayTraits}
							{@const heroTraits = getHeroTraits(desc)}
							{#if heroTraits.length > 0}
								{@const traitRows = getTraitRows(heroTraits)}
								<div class="absolute bottom-1 sm:bottom-2 right-1 sm:right-2 flex flex-col items-end gap-y-0.5 sm:gap-y-1 z-0">
									{#if traitRows.top.length > 0}
										<ul class="flex items-end space-x-0 xs:-space-x-1 sm:-space-x-2">
											{#each traitRows.top as trait, traitIndex (traitIndex)}
												<li class="w-10 xs:w-12 sm:w-16 md:w-20">
													<div class="relative mx-auto w-5 xs:w-6 sm:w-10 md:w-12">
														<div class="absolute inset-0 rounded-full trait-image-gradient" />
														<img
															src={getTraitImage(name, trait)}
															class={`relative z-10 w-5 xs:w-6 sm:w-10 md:w-12 ${trait === Trait.TOKENS ? "" : "trait-image-brightness"}`}
															alt=""
														/>
													</div>
													<div class="relative mt-0.5 sm:mt-1 h-1.5 xs:h-2 sm:h-4 md:h-5">
														<p class="absolute text-black text-[5px] xs:text-[6px] sm:text-[10px] md:text-xs left-[1px] top-[1px] w-full text-center font-modesto whitespace-nowrap">{getTraitLabel(trait)}</p>
														<p class="absolute text-black text-[5px] xs:text-[6px] sm:text-[10px] md:text-xs left-[-1px] top-[-1px] w-full text-center font-modesto whitespace-nowrap">{getTraitLabel(trait)}</p>
														<p class="absolute text-black text-[5px] xs:text-[6px] sm:text-[10px] md:text-xs left-[-1px] top-[1px] w-full text-center font-modesto whitespace-nowrap">{getTraitLabel(trait)}</p>
														<p class="absolute text-black text-[5px] xs:text-[6px] sm:text-[10px] md:text-xs left-[1px] top-[-1px] w-full text-center font-modesto whitespace-nowrap">{getTraitLabel(trait)}</p>
														<p class="absolute text-white text-[5px] xs:text-[6px] sm:text-[10px] md:text-xs left-0 top-0 w-full text-center font-modesto whitespace-nowrap">{getTraitLabel(trait)}</p>
													</div>
												</li>
											{/each}
										</ul>
									{/if}
									<ul class="flex items-end space-x-0 xs:-space-x-1 sm:-space-x-2">
										{#each traitRows.bottom as trait, traitIndex (traitIndex)}
											<li class="w-10 xs:w-12 sm:w-16 md:w-20">
												<div class="relative mx-auto w-5 xs:w-6 sm:w-10 md:w-12">
													<div class="absolute inset-0 rounded-full trait-image-gradient" />
													<img
														src={getTraitImage(name, trait)}
														class={`relative z-10 w-5 xs:w-6 sm:w-10 md:w-12 ${trait === Trait.TOKENS ? "" : "trait-image-brightness"}`}
														alt=""
													/>
												</div>
												<div class="relative mt-0.5 sm:mt-1 h-1.5 xs:h-2 sm:h-4 md:h-5">
													<p class="absolute text-black text-[5px] xs:text-[6px] sm:text-[10px] md:text-xs left-[1px] top-[1px] w-full text-center font-modesto whitespace-nowrap">{getTraitLabel(trait)}</p>
													<p class="absolute text-black text-[5px] xs:text-[6px] sm:text-[10px] md:text-xs left-[-1px] top-[-1px] w-full text-center font-modesto whitespace-nowrap">{getTraitLabel(trait)}</p>
													<p class="absolute text-black text-[5px] xs:text-[6px] sm:text-[10px] md:text-xs left-[-1px] top-[1px] w-full text-center font-modesto whitespace-nowrap">{getTraitLabel(trait)}</p>
													<p class="absolute text-black text-[5px] xs:text-[6px] sm:text-[10px] md:text-xs left-[1px] top-[-1px] w-full text-center font-modesto whitespace-nowrap">{getTraitLabel(trait)}</p>
													<p class="absolute text-white text-[5px] xs:text-[6px] sm:text-[10px] md:text-xs left-0 top-0 w-full text-center font-modesto whitespace-nowrap">{getTraitLabel(trait)}</p>
												</div>
											</li>
										{/each}
									</ul>
								</div>
							{/if}
						{/if}
						<div class="absolute left-15 sm:left-28 top-0 sm:top-1">
							{#each Array(desc.stars) as _, star_index (star_index)}
								<div class="w-1 h-1" />
								<Img src={starImage} size="w-4 sm:w-8"/>
							{/each}
						</div>
						<Img src={logoImages.get(name) ?? emptyImage} size="w-10 sm:w-20" class="absolute bottom-[3px] left-[5px]"/>
						{#if getHeroPackName(name, desc) != null}
							{@const packName = getHeroPackName(name, desc)}
							<div class="absolute top-1 sm:top-2 right-1 sm:right-2 z-10">
								<div class="relative h-1.5 xs:h-2 sm:h-4 md:h-5 w-16 xs:w-20 sm:w-28 md:w-32 text-right">
									<p class="absolute text-black text-[5px] xs:text-[6px] sm:text-[10px] md:text-xs left-[1px] top-[1px] w-full text-right font-modesto whitespace-nowrap">{getPackLabel(packName)}</p>
									<p class="absolute text-black text-[5px] xs:text-[6px] sm:text-[10px] md:text-xs left-[-1px] top-[-1px] w-full text-right font-modesto whitespace-nowrap">{getPackLabel(packName)}</p>
									<p class="absolute text-black text-[5px] xs:text-[6px] sm:text-[10px] md:text-xs left-[-1px] top-[1px] w-full text-right font-modesto whitespace-nowrap">{getPackLabel(packName)}</p>
									<p class="absolute text-black text-[5px] xs:text-[6px] sm:text-[10px] md:text-xs left-[1px] top-[-1px] w-full text-right font-modesto whitespace-nowrap">{getPackLabel(packName)}</p>
									<p class="absolute text-white text-[5px] xs:text-[6px] sm:text-[10px] md:text-xs left-0 top-0 w-full text-right font-modesto whitespace-nowrap">{getPackLabel(packName)}</p>
								</div>
							</div>
						{/if}

						<p class="absolute text-black text-lg sm:text-4xl bottom-[14px] sm:bottom-[34px] left-[40px] sm:left-[74px] font-modesto">{desc.name}</p>
						<p class="absolute text-black text-xs sm:text-2xl bottom-[7px] sm:bottom-[12px] left-[39px] sm:left-[72px] font-modesto">{desc.title}</p>

						<p class="absolute text-black text-lg sm:text-4xl bottom-[10px] sm:bottom-[26px] left-[36px] sm:left-[66px] font-modesto">{desc.name}</p>
						<p class="absolute text-black text-xs sm:text-2xl bottom-[5px] sm:bottom-[8px] left-[37px] sm:left-[68px] font-modesto">{desc.title}</p>

						<p class="absolute text-black text-lg sm:text-4xl bottom-[14px] sm:bottom-[34px] left-[36px] sm:left-[66px] font-modesto">{desc.name}</p>
						<p class="absolute text-black text-xs sm:text-2xl bottom-[7px] sm:bottom-[12px] left-[37px] sm:left-[68px] font-modesto">{desc.title}</p>

						<p class="absolute text-black text-lg sm:text-4xl bottom-[10px] sm:bottom-[26px] left-[40px] sm:left-[74px] font-modesto">{desc.name}</p>
						<p class="absolute text-black text-xs sm:text-2xl bottom-[5px] sm:bottom-[8px] left-[39px] sm:left-[72px] font-modesto">{desc.title}</p>

						<p class="absolute text-white text-lg sm:text-4xl bottom-[12px] sm:bottom-[30px] left-[38px] sm:left-[70px] font-modesto">{desc.name}</p>
						<p class="absolute text-white text-xs sm:text-2xl bottom-[6px] sm:bottom-[10px] left-[38px] sm:left-[70px] font-modesto">{desc.title}</p>
					</div>
				</a>
			</li>
		{/each}
	</ul>
</div>

<SpeedDial pill={false} tooltip="none" textOutside>
	<SortOutline slot="icon" class="w-8 h-8" />
	<SpeedDialButton id="complexity" on:click={() => sortByComplexity()} class="w-10 sm:w-auto h-10 sm:h-auto bg-dark-700 hover:bg-dark-800 border-dark-600">
		<Img src={starImage} class="w-10 h-10" />
	</SpeedDialButton>
	<Tooltip triggeredBy="#complexity" placement="left">Complexity</Tooltip>
	{#each activeStats as stat, index (index)}
		<SpeedDialButton id={stat} on:click={() => sortBy(index)} class="w-10 sm:w-auto h-10 sm:h-auto bg-dark-700 hover:bg-dark-800 border-dark-600">
			<Img src={statImages.get(stat)} class="w-10 h-10" />
		</SpeedDialButton>
		<Tooltip triggeredBy="#{stat}" placement="left">{stat[0].toUpperCase() + stat.slice(1)}</Tooltip>
	{/each}
</SpeedDial>

<style>
	.font-modesto {
		font-family: "Modesto Poster", serif;
	}

	@font-face{
		font-family: "Modesto Poster";
		src: url("../lib/fonts/modesto_poster.woff") format("woff");
	}

	.trait-image-gradient {
		background: radial-gradient(
			circle closest-side,
			rgba(0, 0, 0, 1) 0%,
			rgba(0, 0, 0, 1) 50%,
			rgba(0, 0, 0, 0) 100%
		);
		transform: scale(1.2);
	}

	.trait-image-brightness {
		filter: brightness(1.2);
	}
</style>