<script lang="ts">
  import { onMount } from "svelte"
  import {
    Button,
  } from "flowbite-svelte"
  import { importImages, paintHero } from "../../onward_card_painter"

  $: heroImages = new Map()
  $: heroPortraitImages = new Map()
  $: heroPortraitSelectedImages = new Map()

  let canvas: HTMLCanvasElement

  let mountPromise: Promise<void>;
  let resolveMount: () => void;

  mountPromise = new Promise((resolve) => {
    resolveMount = resolve;
  });

  onMount(async () => {
    for (const hero of heroes) {
      heroPortraitImages.set(hero, (await import(`../../lib/images/onward/portraits/portrait_${hero}.png`)).default)
    }
    heroPortraitImages = heroPortraitImages
    for (const hero of heroes) {
      heroPortraitSelectedImages.set(hero, (await import(`../../lib/images/onward/portraits/portrait_selected_${hero}.png`)).default)
    }
    heroPortraitSelectedImages = heroPortraitSelectedImages

    await Promise.all([
      document.fonts.ready,
      importImages(true),
    ])

    resolveMount()
  })

  let selectedHero = ""

  async function selectHero(hero: string) {
    selectedHero = hero
    await mountPromise
    await paintHero(hero, canvas)
  }

  async function getHeroImage(hero: string) {
    if (!heroImages.has(hero)) {
      heroImages.set(hero, (await import(`../../lib/images/onward/heroes/${hero}.png`)).default)
    }
    return heroImages.get(hero)
  }

  const heroes = [
    "hogosai",
    "miyuki",
    "kichie",
    "doomies",
    "akimo",
    "sakoshi",
    "kumaya",
    "yami",
    "brylvar",
    "freyhel",
    "corjof",
    "astryda",
    "shyllavi",
    "vorhild",
    "heraal",
    "gulbjarn",
    "cotlic",
    "tlakali",
    "nelaclen",
    "kohai",
    "nantaca",
    "achla",
    "ixatosk",
    "zacoal",
    "shaidrus",
    "akhuti",
    "setheru",
    "ekhrit",
    "haburat",
    "khepiax",
    "shafathi",
    "khenui",
  ]
</script>

<div class="pt-18 md:pt-22">
  <div class="flex items-center flex-col w-full">
    <div class="flex justify-center pb-5">
      <a href="/onward/builder">
        <Button class="w-40 text-xl">Card Builder</Button>
      </a>
    </div>

    <div class="grid grid-cols-8 lg:gap-3 px-3">
      {#each heroes as hero}
        <div class="col-span-1">
          <img src={selectedHero === hero ? heroPortraitSelectedImages.get(hero) : heroPortraitImages.get(hero)} class="w-20" on:click={() => {selectHero(hero)}}/>
        </div>
      {/each}
    </div>

    {#if selectedHero !== ''}
      <div class="w-full max-w-[800px]">
        <canvas width="1407" height="11407" class="py-5 w-full max-w-[1407px]" bind:this={canvas} />
      </div>
      <!--{#await getHeroImage(selectedHero)}-->
      <!--  <p>Loading image...</p>-->
      <!--{:then url}-->
      <!--  <img src={url} alt={selectedHero} class="w-124 py-5" />-->
      <!--{:catch error}-->
      <!--  <p>Failed to load image</p>-->
      <!--{/await}-->
    {/if}

    <p class="font-itc invisible">a</p>
    <p class="font-atlantis invisible">a</p>
  </div>
</div>

<style>
    .font-atlantis {
        font-family: "Atlantis Regular", serif;
    }

    @font-face {
        font-family: "Atlantis Regular";
        src: url("../../lib/fonts/atlantis_regular.woff") format("woff");
    }

    .font-itc {
        font-family: "ITC Charter", serif;
    }

    @font-face {
        font-family: "ITC Charter";
        src: url("../../lib/fonts/itc_charter_bold.woff") format("woff");
    }
</style>
