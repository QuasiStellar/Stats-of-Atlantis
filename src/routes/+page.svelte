<script lang="ts">
	import { page } from "$app/stores"
	import { flip } from "svelte/animate"
	import { Card, Img, SpeedDial, SpeedDialButton, Tooltip } from "flowbite-svelte"
	import { SortOutline } from "flowbite-svelte-icons"
	import { goto } from "$app/navigation"
	import { browser } from "$app/environment"
	import { heroes, oldHeroes, stats } from "../states"
	import { onMount } from "svelte"

	import starImage from "$lib/images/star.png"

	$: heroImages = new Map()
	$: statImages = new Map()
	$: logoImages = new Map()

	const heroImageLoadingPromises: Map<string, Promise<unknown>> = new Map()

	const emptyImage = "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw=="

	onMount(async () => {
		const heroKeys = new Set([...Object.keys(oldHeroes), ...Object.keys(heroes)])

		for (const hero of heroKeys) {
			try {
				const path = (await import(`../lib/images/avatars/${hero}.png`)).default
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
	})

	let useNewPrinting = true
	let sortIndex: number | null = null
	let heroList: Array<[string, typeof heroes[keyof typeof heroes] | typeof oldHeroes[keyof typeof oldHeroes]]> = []
	const newPrintingStats = stats.slice(0, 4)
	$: activeStats = useNewPrinting ? newPrintingStats : stats

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

	function sortBy(statIndex: number, updateUrl = true) {
		sortIndex = statIndex
		if (browser && updateUrl) {
			goto("?sort=" + stats[statIndex])
		}
	}

	function sortByComplexity(updateUrl = true) {
		sortIndex = null
		if (browser && updateUrl) {
			goto("?sort=complexity")
		}
	}
</script>

<svelte:head>
	<title>Stats of Atlantis</title>
	<meta name="description" content="Guards of Atlantis II card builder and catalogue." />
</svelte:head>
bg-dark-700 hover:bg-dark-800 border-dark-600
<div class="flex flex-col items-center md:mt-20 mt-16">
	<label class="inline-flex items-center cursor-pointer mb-4 sm:mb-6 text-white text-sm sm:text-base">
		<input type="checkbox" class="sr-only peer" bind:checked={useNewPrinting} />
		<div class="relative w-11 h-6 bg-dark-700 peer-focus:outline-none rounded-full peer peer-checked:bg-amber-600 after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:after:translate-x-full"></div>
		<span class="ml-3">New Printing</span>
	</label>
	<ul class="max-w-full m-auto">
		{#each heroList as [name, desc] (name)}
			<li class="px-3 py-1.5" animate:flip={{duration: 300}}>
				<a href="/{name}">
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
						<div class="absolute left-15 sm:left-28 top-0 sm:top-1">
							{#each Array(desc.stars) as _, star_index (star_index)}
								<div class="w-1 h-1" />
								<Img src={starImage} size="w-4 sm:w-8"/>
							{/each}
						</div>
						<Img src={logoImages.get(name) ?? emptyImage} size="w-10 sm:w-20" class="absolute bottom-[3px] left-[5px]"/>

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
</style>