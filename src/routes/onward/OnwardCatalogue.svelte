<script lang="ts">
  import { onMount } from "svelte"
  import {
    Button,
  } from "flowbite-svelte"
  import { paintHero, preloadImages } from "../../onward_card_painter"
  import onwardHeroInfo from "../../onward_heroes.json"

  const emptyImage = "data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs="
  const catalogueCanvasWidth = 1407
  const catalogueCanvasHeight = 11407
  const heroPortraitModules = import.meta.glob("../../lib/images/onward/portraits/portrait_*.png", { eager: true, import: "default" }) as Record<string, string>
  const heroPortraitSelectedModules = import.meta.glob("../../lib/images/onward/portraits/portrait_selected_*.png", { eager: true, import: "default" }) as Record<string, string>

  let canvas: HTMLCanvasElement

  let mountPromise: Promise<void>;
  let resolveMount: () => void;

  mountPromise = new Promise((resolve) => {
    resolveMount = resolve;
  });

  onMount(async () => {
    await Promise.all([
      document.fonts.ready,
      preloadImages(true),
    ])

    resolveMount()
  })

  let selectedHero = ""

  async function selectHero(hero: string) {
    selectedHero = hero
    await mountPromise
    canvas.width = catalogueCanvasWidth
    canvas.height = catalogueCanvasHeight
    await paintHero(hero, canvas)
    adjustCatalogueCanvas(canvas, !hasThreeOrMoreRegularAbilityLines(hero))
  }

  function hasThreeOrMoreRegularAbilityLines(hero: string) {
    const heroKey = hero[0].toUpperCase() + hero.slice(1).toLowerCase()
    const heroData = onwardHeroInfo[heroKey as keyof typeof onwardHeroInfo]
    if (!heroData?.abilityDescription) {
      return false
    }

    return heroData.abilityDescription
      .split("\n")
      .filter((line) => line.trim().length > 0)
      .length >= 3
  }

  function adjustCatalogueCanvas(targetCanvas: HTMLCanvasElement, shouldShiftUp: boolean) {
    const ctx = targetCanvas.getContext("2d")
    if (!ctx) {
      return
    }

    const { width, height } = targetCanvas

    if (shouldShiftUp) {
      const removalStartY = 400
      const removalEndY = 800
      const removedHeight = removalEndY - removalStartY
      const movableHeight = height - removalEndY
      if (movableHeight > 0) {
        const shiftedContent = document.createElement("canvas")
        shiftedContent.width = width
        shiftedContent.height = movableHeight
        const shiftedCtx = shiftedContent.getContext("2d")
        if (!shiftedCtx) {
          return
        }

        shiftedCtx.drawImage(
          targetCanvas,
          0,
          removalEndY,
          width,
          movableHeight,
          0,
          0,
          width,
          movableHeight
        )

        // Clear destination area first so we never sample from and write to overlapping regions.
        ctx.clearRect(0, removalStartY, width, height - removalStartY)
        ctx.drawImage(shiftedContent, 0, removalStartY)
      }

      // Keep the bottom fully transparent after the upward shift.
      ctx.clearRect(0, height - removedHeight, width, removedHeight)
    }

    const trimmedHeight = findContentBottom(ctx, width, height)
    if (trimmedHeight > 0 && trimmedHeight < targetCanvas.height) {
      const resizedImage = document.createElement("canvas")
      resizedImage.width = width
      resizedImage.height = trimmedHeight
      const resizedCtx = resizedImage.getContext("2d")
      if (!resizedCtx) {
        return
      }

      resizedCtx.drawImage(targetCanvas, 0, 0, width, trimmedHeight, 0, 0, width, trimmedHeight)
      targetCanvas.height = trimmedHeight

      const finalCtx = targetCanvas.getContext("2d")
      if (!finalCtx) {
        return
      }
      finalCtx.drawImage(resizedImage, 0, 0)
    }
  }

  function findContentBottom(ctx: CanvasRenderingContext2D, width: number, height: number) {
    const pixels = ctx.getImageData(0, 0, width, height).data
    for (let y = height - 1; y >= 0; y -= 1) {
      const rowOffset = y * width * 4
      for (let x = 0; x < width; x += 1) {
        if (pixels[rowOffset + (x * 4) + 3] !== 0) {
          return y + 1
        }
      }
    }
    return 0
  }

  function getHeroPortrait(hero: string) {
    return heroPortraitModules[`../../lib/images/onward/portraits/portrait_${hero}.png`] ?? emptyImage
  }

  function getHeroPortraitSelected(hero: string) {
    return heroPortraitSelectedModules[`../../lib/images/onward/portraits/portrait_selected_${hero}.png`] ?? emptyImage
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
          <img src={selectedHero === hero ? getHeroPortraitSelected(hero) : getHeroPortrait(hero)} class="w-20" on:click={() => {selectHero(hero)}}/>
        </div>
      {/each}
    </div>

    {#if selectedHero !== ''}
      <div class="w-full max-w-[800px]">
        <canvas width={catalogueCanvasWidth} height={catalogueCanvasHeight} class="py-5 w-full max-w-[1407px]" bind:this={canvas} />
      </div>
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
