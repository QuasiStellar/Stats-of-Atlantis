<script lang="ts">
  import { browser } from "$app/environment"
  import { onMount, tick } from "svelte"
  import { Color, Hero, OldHero, heroes, oldHeroes, Item, Modifier, stats, Type, ValueSign } from "../../states"
  import { images, importCardImage, preloadImages, updateCanvas } from "../../card_painter"
  import oldHeroInfo from "../../heroes.json"
  import newHeroInfo from "../../new_heroes.json"
  import { Checkbox, Img, Tooltip } from "flowbite-svelte"
  const emptyImage = "data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs="
  const statImageModules = import.meta.glob("../../lib/images/stat_icons/*_white.png", { eager: true, import: "default" }) as Record<string, string>
  const bannerImageModules = import.meta.glob("../../lib/images/avatars_full/*.webp", { eager: true, import: "default" }) as Record<string, string>

  export let heroName: string
  export let useNewPrinting = true

  let gold: HTMLCanvasElement
  let goldCtx: CanvasRenderingContext2D
  let goldBg: HTMLImageElement | undefined
  let handicapBg: HTMLImageElement | undefined

  let silver: HTMLCanvasElement
  let silverCtx: CanvasRenderingContext2D
  let silverBg: HTMLImageElement | undefined

  let purple: HTMLCanvasElement
  let purpleCtx: CanvasRenderingContext2D
  let purpleBg: HTMLImageElement | undefined

  let blueIa: HTMLCanvasElement
  let blueIaCtx: CanvasRenderingContext2D
  let blueIaBg: HTMLImageElement | undefined

  let redIa: HTMLCanvasElement
  let redIaCtx: CanvasRenderingContext2D
  let redIaBg: HTMLImageElement | undefined

  let greenIa: HTMLCanvasElement
  let greenIaCtx: CanvasRenderingContext2D
  let greenIaBg: HTMLImageElement | undefined

  let blueIIa: HTMLCanvasElement
  let blueIIaCtx: CanvasRenderingContext2D
  let blueIIaBg: HTMLImageElement | undefined

  let blueIIb: HTMLCanvasElement
  let blueIIbCtx: CanvasRenderingContext2D
  let blueIIbBg: HTMLImageElement | undefined

  let redIIa: HTMLCanvasElement
  let redIIaCtx: CanvasRenderingContext2D
  let redIIaBg: HTMLImageElement | undefined

  let redIIb: HTMLCanvasElement
  let redIIbCtx: CanvasRenderingContext2D
  let redIIbBg: HTMLImageElement | undefined

  let greenIIa: HTMLCanvasElement
  let greenIIaCtx: CanvasRenderingContext2D
  let greenIIaBg: HTMLImageElement | undefined

  let greenIIb: HTMLCanvasElement
  let greenIIbCtx: CanvasRenderingContext2D
  let greenIIbBg: HTMLImageElement | undefined

  let blueIIIa: HTMLCanvasElement
  let blueIIIaCtx: CanvasRenderingContext2D
  let blueIIIaBg: HTMLImageElement | undefined

  let blueIIIb: HTMLCanvasElement
  let blueIIIbCtx: CanvasRenderingContext2D
  let blueIIIbBg: HTMLImageElement | undefined

  let redIIIa: HTMLCanvasElement
  let redIIIaCtx: CanvasRenderingContext2D
  let redIIIaBg: HTMLImageElement | undefined

  let redIIIb: HTMLCanvasElement
  let redIIIbCtx: CanvasRenderingContext2D
  let redIIIbBg: HTMLImageElement | undefined

  let greenIIIa: HTMLCanvasElement
  let greenIIIaCtx: CanvasRenderingContext2D
  let greenIIIaBg: HTMLImageElement | undefined

  let greenIIIb: HTMLCanvasElement
  let greenIIIbCtx: CanvasRenderingContext2D
  let greenIIIbBg: HTMLImageElement | undefined

  let extraCards: any[] = []
  let extraCardCanvases: Array<HTMLCanvasElement | undefined> = []
  let extraCardContexts: Array<CanvasRenderingContext2D | undefined> = []
  let extraCardBackgrounds: Array<HTMLImageElement | undefined> = []
  let extraCardsLoaded: boolean[] = []

  let imagesLoaded = false
  const SHOW_NUMBERS_STORAGE_KEY = "goa-show-numbers"

  let goldLoaded = false
  let goldHandicapLoaded = false
  let silverLoaded = false
  let silverHandicapLoaded = false
  let purpleLoaded = false
  let blueIaLoaded = false
  let redIaLoaded = false
  let greenIaLoaded = false
  let blueIIaLoaded = false
  let redIIaLoaded = false
  let greenIIaLoaded = false
  let blueIIbLoaded = false
  let redIIbLoaded = false
  let greenIIbLoaded = false
  let blueIIIaLoaded = false
  let redIIIaLoaded = false
  let greenIIIaLoaded = false
  let blueIIIbLoaded = false
  let redIIIbLoaded = false
  let greenIIIbLoaded = false

  let blueIIalt = false
  let redIIalt = false
  let greenIIalt = false
  let blueIIIalt = false
  let redIIIalt = false
  let greenIIIalt = false

  $: hoverOverBlueII = false
  $: hoverOverRedII = false
  $: hoverOverGreenII = false
  $: hoverOverBlueIII = false
  $: hoverOverRedIII = false
  $: hoverOverGreenIII = false

  let goldCard: any
  let goldHandicapCard: any
  let silverCard: any
  let silverHandicapCard: any
  let purpleCard: any
  let blueIaCard: any
  let redIaCard: any
  let greenIaCard: any
  let blueIIaCard: any
  let redIIaCard: any
  let greenIIaCard: any
  let blueIIbCard: any
  let redIIbCard: any
  let greenIIbCard: any
  let blueIIIaCard: any
  let redIIIaCard: any
  let greenIIIaCard: any
  let blueIIIbCard: any
  let redIIIbCard: any
  let greenIIIbCard: any

  let initiativeBonus: number = 0
  let attackBonus: number = 0
  let defenseBonus: number = 0
  let areaBonus: number = 0
  let rangeBonus: number = 0
  let movementBonus: number = 0

  let blueIIaltChecked = false
  let blueIImainChecked = false
  let redIIaltChecked = false
  let redIImainChecked = false
  let greenIIaltChecked = false
  let greenIImainChecked = false
  let blueIIIaltChecked = false
  let blueIIImainChecked = false
  let redIIIaltChecked = false
  let redIIImainChecked = false
  let greenIIIaltChecked = false
  let greenIIImainChecked = false

  function checkBlueIIalt(e: Event) {
    if ((e.target as unknown as EventTarget & { checked: boolean }).checked) {
      blueIImainChecked = false
    }
  }

  function checkBlueIImain(e: Event) {
    if ((e.target as unknown as EventTarget & { checked: boolean }).checked) {
      blueIIaltChecked = false
    }
  }

  function checkRedIIalt(e: Event) {
    if ((e.target as unknown as EventTarget & { checked: boolean }).checked) {
      redIImainChecked = false
    }
  }

  function checkRedIImain(e: Event) {
    if ((e.target as unknown as EventTarget & { checked: boolean }).checked) {
      redIIaltChecked = false
    }
  }

  function checkGreenIIalt(e: Event) {
    if ((e.target as unknown as EventTarget & { checked: boolean }).checked) {
      greenIImainChecked = false
    }
  }

  function checkGreenIImain(e: Event) {
    if ((e.target as unknown as EventTarget & { checked: boolean }).checked) {
      greenIIaltChecked = false
    }
  }

  function checkBlueIIIalt(e: Event) {
    if ((e.target as unknown as EventTarget & { checked: boolean }).checked) {
      blueIIImainChecked = false
    }
  }

  function checkBlueIIImain(e: Event) {
    if ((e.target as unknown as EventTarget & { checked: boolean }).checked) {
      blueIIIaltChecked = false
    }
  }

  function checkRedIIIalt(e: Event) {
    if ((e.target as unknown as EventTarget & { checked: boolean }).checked) {
      redIIImainChecked = false
    }
  }

  function checkRedIIImain(e: Event) {
    if ((e.target as unknown as EventTarget & { checked: boolean }).checked) {
      redIIIaltChecked = false
    }
  }

  function checkGreenIIIalt(e: Event) {
    if ((e.target as unknown as EventTarget & { checked: boolean }).checked) {
      greenIIImainChecked = false
    }
  }

  function checkGreenIIImain(e: Event) {
    if ((e.target as unknown as EventTarget & { checked: boolean }).checked) {
      greenIIIaltChecked = false
    }
  }

  $: {
    blueIIaltChecked
    blueIImainChecked
    redIIaltChecked
    redIImainChecked
    greenIIaltChecked
    greenIImainChecked
    blueIIIaltChecked
    blueIIImainChecked
    redIIIaltChecked
    redIIImainChecked
    greenIIIaltChecked
    greenIIImainChecked
    showNumbers
    showHandicap

    goldLoaded
    goldHandicapLoaded
    silverLoaded
    silverHandicapLoaded
    purpleLoaded
    blueIaLoaded
    redIaLoaded
    greenIaLoaded
    blueIIaLoaded
    redIIaLoaded
    greenIIaLoaded
    blueIIbLoaded
    redIIbLoaded
    greenIIbLoaded
    blueIIIaLoaded
    redIIIaLoaded
    greenIIIaLoaded
    blueIIIbLoaded
    redIIIbLoaded
    greenIIIbLoaded

    let blueIIselection = blueIImainChecked ? true : (blueIIaltChecked ? false : null)
    let redIIselection = redIImainChecked ? true : (redIIaltChecked ? false : null)
    let greenIIselection = greenIImainChecked ? true : (greenIIaltChecked ? false : null)
    let blueIIIselection = blueIIImainChecked ? true : (blueIIIaltChecked ? false : null)
    let redIIIselection = redIIImainChecked ? true : (redIIIaltChecked ? false : null)
    let greenIIIselection = greenIIImainChecked ? true : (greenIIIaltChecked ? false : null)

    const bonuses: { [item: string] : number } = {}
    bonuses[Item.INITIATIVE] = 0
    bonuses[Item.ATTACK] = 0
    bonuses[Item.DEFENSE] = 0
    bonuses[Item.AREA] = 0
    bonuses[Item.RANGE] = 0
    bonuses[Item.MOVEMENT] = 0

    const incrementBonus = (card: { item?: Item } | null | undefined) => {
      if (!card?.item) return
      bonuses[card.item] += 1
    }

    if (blueIIselection === true) {
      incrementBonus(blueIIbCard)
    }

    if (blueIIselection === false) {
      incrementBonus(blueIIaCard)
    }

    if (redIIselection === true) {
      incrementBonus(redIIbCard)
    }

    if (redIIselection === false) {
      incrementBonus(redIIaCard)
    }

    if (greenIIselection === true) {
      incrementBonus(greenIIbCard)
    }

    if (greenIIselection === false) {
      incrementBonus(greenIIaCard)
    }
    
    if (blueIIIselection === true) {
      incrementBonus(blueIIIbCard)
    }

    if (blueIIIselection === false) {
      incrementBonus(blueIIIaCard)
    }
    
    if (redIIIselection === true) {
      incrementBonus(redIIIbCard)
    }

    if (redIIIselection === false) {
      incrementBonus(redIIIaCard)
    }

    if (greenIIIselection === true) {
      incrementBonus(greenIIIbCard)
    }

    if (greenIIIselection === false) {
      incrementBonus(greenIIIaCard)
    }

    initiativeBonus = bonuses[Item.INITIATIVE]
    attackBonus = bonuses[Item.ATTACK]
    defenseBonus = bonuses[Item.DEFENSE]
    areaBonus = bonuses[Item.AREA]
    rangeBonus = bonuses[Item.RANGE]
    movementBonus = bonuses[Item.MOVEMENT]

    if (imagesLoaded && (goldLoaded || goldHandicapLoaded))
      updateCard(
        gold,
        goldCtx,
        showHandicap && goldHandicapCard ? goldHandicapCard : goldCard,
        showHandicap && goldHandicapCard ? handicapBg! : goldBg!,
      )
    if (imagesLoaded && (silverLoaded || silverHandicapLoaded))
      updateCard(
        silver,
        silverCtx,
        showHandicap && silverHandicapCard ? silverHandicapCard : silverCard,
        showHandicap && silverHandicapCard ? handicapBg! : silverBg!,
      )
    if (imagesLoaded && purpleLoaded)
      updateCard(
        purple,
        purpleCtx,
        purpleCard,
        purpleBg!,
      )
    if (imagesLoaded && blueIaLoaded)
      updateCard(
        blueIa,
        blueIaCtx,
        blueIaCard,
        blueIaBg!,
      )
    if (imagesLoaded && redIaLoaded)
      updateCard(
        redIa,
        redIaCtx,
        redIaCard,
        redIaBg!,
      )
    if (imagesLoaded && greenIaLoaded)
      updateCard(
        greenIa,
        greenIaCtx,
        greenIaCard,
        greenIaBg!,
      )
    if (imagesLoaded && blueIIaLoaded)
      updateCard(
        blueIIa,
        blueIIaCtx,
        blueIIaCard,
        blueIIaBg!,
      )
    if (imagesLoaded && redIIaLoaded)
      updateCard(
        redIIa,
        redIIaCtx,
        redIIaCard,
        redIIaBg!,
      )
    if (imagesLoaded && greenIIaLoaded)
      updateCard(
        greenIIa,
        greenIIaCtx,
        greenIIaCard,
        greenIIaBg!,
      )
    if (imagesLoaded && blueIIbLoaded)
      updateCard(
        blueIIb,
        blueIIbCtx,
        blueIIbCard,
        blueIIbBg!,
      )
    if (imagesLoaded && redIIbLoaded)
      updateCard(
        redIIb,
        redIIbCtx,
        redIIbCard,
        redIIbBg!,
      )
    if (imagesLoaded && greenIIbLoaded)
      updateCard(
        greenIIb,
        greenIIbCtx,
        greenIIbCard,
        greenIIbBg!,
      )
    if (imagesLoaded && blueIIIaLoaded)
      updateCard(
        blueIIIa,
        blueIIIaCtx,
        blueIIIaCard,
        blueIIIaBg!,
      )
    if (imagesLoaded && redIIIaLoaded)
      updateCard(
        redIIIa,
        redIIIaCtx,
        redIIIaCard,
        redIIIaBg!,
      )
    if (imagesLoaded && greenIIIaLoaded)
      updateCard(
        greenIIIa,
        greenIIIaCtx,
        greenIIIaCard,
        greenIIIaBg!,
      )
    if (imagesLoaded && blueIIIbLoaded)
      updateCard(
        blueIIIb,
        blueIIIbCtx,
        blueIIIbCard,
        blueIIIbBg!,
      )
    if (imagesLoaded && redIIIbLoaded)
      updateCard(
        redIIIb,
        redIIIbCtx,
        redIIIbCard,
        redIIIbBg!,
      )
    if (imagesLoaded && greenIIIbLoaded)
      updateCard(
        greenIIIb,
        greenIIIbCtx,
        greenIIIbCard,
        greenIIIbBg!,
      )

    for (let index = 0; index < extraCards.length; index++) {
      const extraCanvas = extraCardCanvases[index]
      const extraContext = extraCardContexts[index]
      const extraBackground = extraCardBackgrounds[index]

      if (imagesLoaded && extraCardsLoaded[index] && extraCanvas && extraContext && extraBackground) {
        updateCard(
          extraCanvas,
          extraContext,
          extraCards[index],
          extraBackground,
        )
      }
    }
  }

  let showNumbers = browser ? localStorage.getItem(SHOW_NUMBERS_STORAGE_KEY) === "true" : false
  $: if (browser) {
    localStorage.setItem(SHOW_NUMBERS_STORAGE_KEY, `${showNumbers}`)
  }
  $: showHandicap = false

  const labelColor = (disabled: boolean): string => disabled ? "gray" : "white"

  $: disableShowNumbers = true

  $: activeStats = useNewPrinting ? stats.slice(0, 4) : stats
  const hero = (useNewPrinting ? heroes[heroName as keyof typeof heroes] : oldHeroes[heroName as keyof typeof oldHeroes]) as Hero | OldHero
  const fullName = hero.name + " " + hero.title

  function getStatRange(statValue: number | Array<number> | undefined) {
    if (statValue == null) {
      return { min: 0, max: 0 }
    }
    if (Array.isArray(statValue)) {
      return { min: statValue[0], max: statValue[1] }
    }
    return { min: statValue, max: statValue }
  }

  function getPrimaryStat(statIndex: number): number {
    const { min, max } = getStatRange(hero.stats[statIndex])
    return useNewPrinting ? min : max
  }

  async function cropCardBackground(image: HTMLImageElement): Promise<HTMLImageElement> {
    const sourceWidth = Math.min(744, image.width)
    const sourceHeight = Math.min(1039, image.height)
    const sourceX = (image.width - sourceWidth) / 2
    const sourceY = (image.height - sourceHeight) / 2

    const croppedCanvas = document.createElement("canvas")
    croppedCanvas.width = sourceWidth
    croppedCanvas.height = sourceHeight
    const croppedContext = croppedCanvas.getContext("2d")
    if (croppedContext == null) return image

    croppedContext.drawImage(image, sourceX, sourceY, sourceWidth, sourceHeight, 0, 0, sourceWidth, sourceHeight)

    const croppedImage = new Image()
    croppedImage.src = croppedCanvas.toDataURL()
    return await new Promise((resolve) => {
      croppedImage.onload = () => resolve(croppedImage)
      croppedImage.onerror = () => resolve(image)
    })
  }

  async function loadCardBackground(card: string): Promise<HTMLImageElement | undefined> {
    await importCardImage(heroName, card)
    const image = images.get(card)
    if (!(image instanceof HTMLImageElement)) return undefined
    return await cropCardBackground(image)
  }

  function updateCard(canvas: HTMLCanvasElement, context: CanvasRenderingContext2D, card: any, image: HTMLImageElement) {
    updateCanvas(
      canvas,
      context,
      [],
      image,
      card.color ?? Color.GOLD,
      card.handicapped ?? false,
      card.extra ?? false,
      card.name ?? "",
      card.description ?? "",
      "i".repeat(card.level ?? 1),
      card.item ?? Item.ATTACK,
      card.initiative ?? 0,
      card.primaryAction ?? Type.ATTACK,
      card.primaryValue ?? 0,
      card.primaryValueSign ?? ValueSign.NONE,
      card.modifier ?? Modifier.NONE,
      card.modifierValue ?? 0,
      card.modifierValueSign ?? ValueSign.NONE,
      card.secondaryMovement ?? 0,
      card.secondaryDefense ?? 0,
      card.secondaryAttack ?? null,
      initiativeBonus,
      attackBonus,
      defenseBonus,
      areaBonus,
      rangeBonus,
      movementBonus,
      showNumbers,
      getPrimaryStat(0),
      getPrimaryStat(1),
      getPrimaryStat(2),
      getPrimaryStat(3),
    )
  }

  let banner: any

  function getBannerImage(hero: string) {
    return bannerImageModules[`../../lib/images/avatars_full/${hero}.webp`] ?? emptyImage
  }

  function getStatImage(stat: string) {
    return statImageModules[`../../lib/images/stat_icons/${stat}_white.png`] ?? emptyImage
  }

  onMount(async () => {
    banner = getBannerImage(heroName)

    goldCtx = gold.getContext('2d')!
    silverCtx = silver.getContext('2d')!
    purpleCtx = purple.getContext('2d')!
    blueIaCtx = blueIa.getContext('2d')!
    redIaCtx = redIa.getContext('2d')!
    greenIaCtx = greenIa.getContext('2d')!
    blueIIaCtx = blueIIa.getContext('2d')!
    blueIIbCtx = blueIIb.getContext('2d')!
    redIIaCtx = redIIa.getContext('2d')!
    redIIbCtx = redIIb.getContext('2d')!
    greenIIaCtx = greenIIa.getContext('2d')!
    greenIIbCtx = greenIIb.getContext('2d')!
    blueIIIaCtx = blueIIIa.getContext('2d')!
    blueIIIbCtx = blueIIIb.getContext('2d')!
    redIIIaCtx = redIIIa.getContext('2d')!
    redIIIbCtx = redIIIb.getContext('2d')!
    greenIIIaCtx = greenIIIa.getContext('2d')!
    greenIIIbCtx = greenIIIb.getContext('2d')!

    Promise.all([
      document.fonts.ready,
      preloadImages(),
    ])
      .then(() => {
        imagesLoaded = true

        const cardInfo = (useNewPrinting ? newHeroInfo : oldHeroInfo)[heroName as keyof typeof oldHeroInfo] as {
          name?: string,
          description?: string,
          color?: Color,
          handicapped?: boolean,
          extra?: boolean,
          level?: number,
          variant?: { first: number, second: number },
          initiative?: number,
          primaryAction?: Type,
          primaryValue?: number,
          primaryValueSign?: ValueSign,
          modifier?: Modifier,
          modifierValue?: number,
          modifierValueSign?: ValueSign,
          secondaryMovement?: number,
          secondaryDefense?: number,
          secondaryAttack?: number,
          item?: Item,
        }[]
        goldCard = cardInfo.find((card) => card.color == Color.GOLD.toUpperCase())!
        goldHandicapCard = cardInfo.find((card) => card.color == Color.GOLD.toUpperCase() && card.handicapped)!
        silverCard = cardInfo.find((card) => card.color == Color.SILVER.toUpperCase())!
        silverHandicapCard = cardInfo.find((card) => card.color == Color.SILVER.toUpperCase() && card.handicapped)
        purpleCard = cardInfo.find((card) => card.color == Color.PURPLE.toUpperCase())!
        blueIaCard = cardInfo.find((card) => card.color == Color.BLUE.toUpperCase() && card.level == 1)!
        redIaCard = cardInfo.find((card) => card.color == Color.RED.toUpperCase() && card.level == 1)!
        greenIaCard = cardInfo.find((card) => card.color == Color.GREEN.toUpperCase() && card.level == 1)!
        blueIIaCard = cardInfo.find((card) => card.color == Color.BLUE.toUpperCase() && card.level == 2 && card.variant?.first == 1)!
        redIIaCard = cardInfo.find((card) => card.color == Color.RED.toUpperCase() && card.level == 2 && card.variant?.first == 1)!
        greenIIaCard = cardInfo.find((card) => card.color == Color.GREEN.toUpperCase() && card.level == 2 && card.variant?.first == 1)!
        blueIIbCard = cardInfo.find((card) => card.color == Color.BLUE.toUpperCase() && card.level == 2 && card.variant?.first == 2)!
        redIIbCard = cardInfo.find((card) => card.color == Color.RED.toUpperCase() && card.level == 2 && card.variant?.first == 2)!
        greenIIbCard = cardInfo.find((card) => card.color == Color.GREEN.toUpperCase() && card.level == 2 && card.variant?.first == 2)!
        blueIIIaCard = cardInfo.find((card) => card.color == Color.BLUE.toUpperCase() && card.level == 3 && card.variant?.first == 1)!
        redIIIaCard = cardInfo.find((card) => card.color == Color.RED.toUpperCase() && card.level == 3 && card.variant?.first == 1)!
        greenIIIaCard = cardInfo.find((card) => card.color == Color.GREEN.toUpperCase() && card.level == 3 && card.variant?.first == 1)!
        blueIIIbCard = cardInfo.find((card) => card.color == Color.BLUE.toUpperCase() && card.level == 3 && card.variant?.first == 2)!
        redIIIbCard = cardInfo.find((card) => card.color == Color.RED.toUpperCase() && card.level == 3 && card.variant?.first == 2)!
        greenIIIbCard = cardInfo.find((card) => card.color == Color.GREEN.toUpperCase() && card.level == 3 && card.variant?.first == 2)!
        extraCards = cardInfo
          .filter((card) => card.extra)
          .sort((firstCard, secondCard) => (firstCard.variant?.first ?? 0) - (secondCard.variant?.first ?? 0))
        extraCardCanvases = extraCards.map(() => undefined)
        extraCardContexts = extraCards.map(() => undefined)
        extraCardBackgrounds = extraCards.map(() => undefined)
        extraCardsLoaded = extraCards.map(() => false)
        tick().then(() => {
          extraCardContexts = extraCardCanvases.map((canvas) => canvas?.getContext("2d") ?? undefined)
        })
        extraCards.forEach((_, index) => {
          loadCardBackground(`Extra${index + 1}`).then((image) => {
            extraCardBackgrounds[index] = image
            extraCardsLoaded[index] = true
            extraCardsLoaded = [...extraCardsLoaded]
          })
        })

        if (goldLoaded || (showHandicap && goldHandicapLoaded))
          updateCard(
            gold,
            goldCtx,
            showHandicap && goldHandicapCard ? goldHandicapCard : goldCard,
            showHandicap && goldHandicapCard ? handicapBg! : goldBg!,
          )
        if (silverLoaded || (showHandicap && silverHandicapCard))
          updateCard(
            silver,
            silverCtx,
            showHandicap && silverHandicapCard ? silverHandicapCard : silverCard,
            showHandicap && silverHandicapCard ? handicapBg! : silverBg!,
          )
        if (purpleLoaded)
          updateCard(
            purple,
            purpleCtx,
            purpleCard,
            purpleBg!,
          )
        if (blueIaLoaded)
          updateCard(
            blueIa,
            blueIaCtx,
            blueIaCard,
            blueIaBg!,
          )
        if (redIaLoaded)
          updateCard(
            redIa,
            redIaCtx,
            redIaCard,
            redIaBg!,
          )
        if (greenIaLoaded)
          updateCard(
            greenIa,
            greenIaCtx,
            greenIaCard,
            greenIaBg!,
          )
        if (blueIIaLoaded)
          updateCard(
            blueIIa,
            blueIIaCtx,
            blueIIaCard,
            blueIIaBg!,
          )
        if (redIIaLoaded)
          updateCard(
            redIIa,
            redIIaCtx,
            redIIaCard,
            redIIaBg!,
          )
        if (greenIIaLoaded)
          updateCard(
            greenIIa,
            greenIIaCtx,
            greenIIaCard,
            greenIIaBg!,
          )
        if (blueIIbLoaded)
          updateCard(
            blueIIb,
            blueIIbCtx,
            blueIIbCard,
            blueIIbBg!,
          )
        if (redIIbLoaded)
          updateCard(
            redIIb,
            redIIbCtx,
            redIIbCard,
            redIIbBg!,
          )
        if (greenIIbLoaded)
          updateCard(
            greenIIb,
            greenIIbCtx,
            greenIIbCard,
            greenIIbBg!,
          )
        if (blueIIIaLoaded)
          updateCard(
            blueIIIa,
            blueIIIaCtx,
            blueIIIaCard,
            blueIIIaBg!,
          )
        if (redIIIaLoaded)
          updateCard(
            redIIIa,
            redIIIaCtx,
            redIIIaCard,
            redIIIaBg!,
          )
        if (greenIIIaLoaded)
          updateCard(
            greenIIIa,
            greenIIIaCtx,
            greenIIIaCard,
            greenIIIaBg!,
          )
        if (blueIIIbLoaded)
          updateCard(
            blueIIIb,
            blueIIIbCtx,
            blueIIIbCard,
            blueIIIbBg!,
          )
        if (redIIIbLoaded)
          updateCard(
            redIIIb,
            redIIIbCtx,
            redIIIbCard,
            redIIIbBg!,
          )
        if (greenIIIbLoaded)
          updateCard(
            greenIIIb,
            greenIIIbCtx,
            greenIIIbCard,
            greenIIIbBg!,
          )
      })

    loadCardBackground("BlueIA").then((image) => {
      blueIaBg = image
      blueIaLoaded = true
    })

    loadCardBackground("BlueIIA").then((image) => {
      blueIIaBg = image
      blueIIaLoaded = true
    })

    loadCardBackground("BlueIIB").then((image) => {
      blueIIbBg = image
      blueIIbLoaded = true
    })

    loadCardBackground("BlueIIIA").then((image) => {
      blueIIIaBg = image
      blueIIIaLoaded = true
    })

    loadCardBackground("BlueIIIB").then((image) => {
      blueIIIbBg = image
      blueIIIbLoaded = true
    })

    loadCardBackground("Gold").then((image) => {
      goldBg = image
      goldLoaded = true
    })

    loadCardBackground("GreenIA").then((image) => {
      greenIaBg = image
      greenIaLoaded = true
    })

    loadCardBackground("GreenIIA").then((image) => {
      greenIIaBg = image
      greenIIaLoaded = true
    })

    loadCardBackground("GreenIIB").then((image) => {
      greenIIbBg = image
      greenIIbLoaded = true
    })

    loadCardBackground("GreenIIIA").then((image) => {
      greenIIIaBg = image
      greenIIIaLoaded = true
    })

    loadCardBackground("GreenIIIB").then((image) => {
      greenIIIbBg = image
      greenIIIbLoaded = true
    })

    loadCardBackground("Handicap").then((image) => {
      handicapBg = image
      if (silverHandicapCard != null)
        silverHandicapLoaded = true
      else
        goldHandicapLoaded = true
    })

    loadCardBackground("RedIA").then((image) => {
      redIaBg = image
      redIaLoaded = true
    })

    loadCardBackground("RedIIA").then((image) => {
      redIIaBg = image
      redIIaLoaded = true
    })

    loadCardBackground("RedIIB").then((image) => {
      redIIbBg = image
      redIIbLoaded = true
    })

    loadCardBackground("RedIIIA").then((image) => {
      redIIIaBg = image
      redIIIaLoaded = true
    })

    loadCardBackground("RedIIIB").then((image) => {
      redIIIbBg = image
      redIIIbLoaded = true
    })

    loadCardBackground("Silver").then((image) => {
      silverBg = image
      silverLoaded = true
    })

    loadCardBackground("Ultimate").then((image) => {
      purpleBg = image
      purpleLoaded = true
    })

  })

  function blueIImainPointerEnter() {
    if (blueIIalt)
      hoverOverBlueII = true
  }

  function blueIImainPointerLeave() {
    if (blueIIalt)
      hoverOverBlueII = false
  }

  function blueIIaltPointerEnter() {
    if (!blueIIalt)
      hoverOverBlueII = true
  }

  function blueIIaltPointerLeave() {
    if (!blueIIalt)
      hoverOverBlueII = false
  }

  function blueIImainClick() {
    hoverOverBlueII = false
    blueIIalt = !blueIIalt
  }

  function blueIIaltClick() {
    hoverOverBlueII = false
    blueIIalt = !blueIIalt
  }

  function redIImainPointerEnter() {
    if (redIIalt)
      hoverOverRedII = true
  }

  function redIImainPointerLeave() {
    if (redIIalt)
      hoverOverRedII = false
  }

  function redIIaltPointerEnter() {
    if (!redIIalt)
      hoverOverRedII = true
  }

  function redIIaltPointerLeave() {
    if (!redIIalt)
      hoverOverRedII = false
  }

  function redIImainClick() {
    hoverOverRedII = false
    redIIalt = !redIIalt
  }

  function redIIaltClick() {
    hoverOverRedII = false
    redIIalt = !redIIalt
  }

  function greenIImainPointerEnter() {
    if (greenIIalt)
      hoverOverGreenII = true
  }

  function greenIImainPointerLeave() {
    if (greenIIalt)
      hoverOverGreenII = false
  }

  function greenIIaltPointerEnter() {
    if (!greenIIalt)
      hoverOverGreenII = true
  }

  function greenIIaltPointerLeave() {
    if (!greenIIalt)
      hoverOverGreenII = false
  }

  function greenIImainClick() {
    hoverOverGreenII = false
    greenIIalt = !greenIIalt
  }

  function greenIIaltClick() {
    hoverOverGreenII = false
    greenIIalt = !greenIIalt
  }
  
  function blueIIImainPointerEnter() {
    if (blueIIIalt)
      hoverOverBlueIII = true
  }

  function blueIIImainPointerLeave() {
    if (blueIIIalt)
      hoverOverBlueIII = false
  }

  function blueIIIaltPointerEnter() {
    if (!blueIIIalt)
      hoverOverBlueIII = true
  }

  function blueIIIaltPointerLeave() {
    if (!blueIIIalt)
      hoverOverBlueIII = false
  }

  function blueIIImainClick() {
    hoverOverBlueIII = false
    blueIIIalt = !blueIIIalt
  }

  function blueIIIaltClick() {
    hoverOverBlueIII = false
    blueIIIalt = !blueIIIalt
  }
  
  function redIIImainPointerEnter() {
    if (redIIIalt)
      hoverOverRedIII = true
  }

  function redIIImainPointerLeave() {
    if (redIIIalt)
      hoverOverRedIII = false
  }

  function redIIIaltPointerEnter() {
    if (!redIIIalt)
      hoverOverRedIII = true
  }

  function redIIIaltPointerLeave() {
    if (!redIIIalt)
      hoverOverRedIII = false
  }

  function redIIImainClick() {
    hoverOverRedIII = false
    redIIIalt = !redIIIalt
  }

  function redIIIaltClick() {
    hoverOverRedIII = false
    redIIIalt = !redIIIalt
  }
  
  function greenIIImainPointerEnter() {
    if (greenIIIalt)
      hoverOverGreenIII = true
  }

  function greenIIImainPointerLeave() {
    if (greenIIIalt)
      hoverOverGreenIII = false
  }

  function greenIIIaltPointerEnter() {
    if (!greenIIIalt)
      hoverOverGreenIII = true
  }

  function greenIIIaltPointerLeave() {
    if (!greenIIIalt)
      hoverOverGreenIII = false
  }

  function greenIIImainClick() {
    hoverOverGreenIII = false
    greenIIIalt = !greenIIIalt
  }

  function greenIIIaltClick() {
    hoverOverGreenIII = false
    greenIIIalt = !greenIIIalt
  }

  let avatarClickCounter = 0

  function onAvatarClick() {
    avatarClickCounter++
    if (avatarClickCounter >= 10) disableShowNumbers = false
  }

</script>

<div class="flex md:mt-20 mt-16 mb-52">
  <div class="grid grid-cols-12 m-auto">
    <div class="col-span-12 w-78 xs:w-96 sm:w-157 lg:w-239 h-[155px] xs:h-[190px] sm:h-[313px] lg:h-[473px] mt-4 xs:mt-5 sm:mt-7.5 lg:mt-10 relative">
      <div class="border border-dark-600 rounded-lg sm:rounded-xl lg:rounded-3xl left-0.25 xs:left-0.5 sm:left-0.5 lg:left-1 w-77.5 xs:w-95 sm:w-156 lg:w-237 absolute" on:click={onAvatarClick}>
        <Img src={banner} class="rounded-lg sm:rounded-xl lg:rounded-3xl"/>
        <p class="absolute text-black xs:text-xl sm:text-3xl lg:text-5xl -top-[14px] sm:-top-[19px] lg:-top-[24px] left-[10px] sm:left-[22px] lg:left-[34px] font-modesto">{fullName}</p>
        <p class="absolute text-black xs:text-xl sm:text-3xl lg:text-5xl -top-[10px] sm:-top-[13px] lg:-top-[16px] left-[6px] sm:left-[16px] lg:left-[26px] font-modesto">{fullName}</p>
        <p class="absolute text-black xs:text-xl sm:text-3xl lg:text-5xl -top-[14px] sm:-top-[19px] lg:-top-[24px] left-[6px] sm:left-[16px] lg:left-[26px] font-modesto">{fullName}</p>
        <p class="absolute text-black xs:text-xl sm:text-3xl lg:text-5xl -top-[10px] sm:-top-[13px] lg:-top-[16px] left-[10px] sm:left-[22px] lg:left-[34px] font-modesto">{fullName}</p>
        <p class="absolute text-white xs:text-xl sm:text-3xl lg:text-5xl -top-[12px] sm:-top-[16px] lg:-top-[20px] left-[8px] sm:left-[19px] lg:left-[30px] font-modesto">{fullName}</p>
      </div>
    </div>

    {#each activeStats as stat, stat_index (stat_index)}
      {@const range = getStatRange(hero.stats[stat_index])}
      <div id="{stat}" class="col-span-3 h-3 xs:h-4 sm:h-5.5 lg:h-7 z-20 relative">
        <div class="left-0.25 xs:left-0.5 sm:left-0.5 lg:left-1 top-0.25 xs:top-0.5 sm:top-0.5 lg:top-1 h-2.5 xs:h-3 sm:h-4 lg:h-5 border border-dark-600 bg-transparent hover:bg-transparent rounded sm:rounded-lg lg:rounded-xl bg-dark-900 absolute">
          <div class="m-0.5 sm:m-0.5 lg:m-1 relative h-full">
            <Img src={getStatImage(stat)} class="absolute w-2 xs:w-2.5 sm:w-3.75 lg:w-5 z-30 -top-0.5 sm:-top-0.75 lg:-top-1.25 xs:left-0.5 sm:left-0.75 lg:left-1" />
            <div class="float-left w-2 xs:w-3.5 sm:w-6 lg:w-7 h-full bg-transparent" />
            {#each Array(8) as _, color_index (color_index)}
              <div class="float-left w-0.5 sm:w-0.75 lg:w-1 h-1" />
              {#if range.min > color_index}
                <div class="z-40 float-left w-[5.6px] xs:w-[7px] sm:w-[12px] lg:w-5 h-1 xs:h-1.5 sm:h-2 lg:h-2.5 rounded-sm sm:rounded lg:rounded-md bg-{heroName}" />
              {:else if range.max > color_index}
                <div class="z-40 float-left w-[5.6px] xs:w-[7px] sm:w-[12px] lg:w-5 h-1 xs:h-1.5 sm:h-2 lg:h-2.5 rounded-sm sm:rounded lg:rounded-md bg-{heroName} opacity-50" />
              {:else}
                <div class="float-left w-[5.6px] xs:w-[7px] sm:w-[12px] lg:w-5 h-1 bg-transparent" />
              {/if}
            {/each}
          </div>
        </div>
      </div>
      <Tooltip triggeredBy="#{stat}" placement="top" class="z-50">{stat.charAt(0).toUpperCase() + stat.slice(1)}</Tooltip>
    {/each}

    <div class="col-span-4 w-26 xs:w-32 sm:w-52 lg:w-80 h-36 xs:h-44 sm:h-73 lg:h-111 relative">
      <div class="border border-dark-600 bg-transparent hover:bg-transparent rounded-lg sm:rounded-xl lg:rounded-3xl w-25.5 xs:w-31 sm:w-51.5 lg:w-78 left-0.25 xs:left-0.5 sm:left-0.5 lg:left-1 top-0.25 xs:top-0.5 sm:top-0.5 lg:top-1 absolute">
        <canvas id="goldCanvas" width="1192" height="1664" class="w-full rounded-lg sm:rounded-xl lg:rounded-3xl" bind:this={gold}/>
      </div>
    </div>
    <div class="col-span-4 w-26 xs:w-32 sm:w-52 lg:w-80 h-36 xs:h-44 sm:h-73 lg:h-111 relative">
      <div class="border border-dark-600 bg-transparent hover:bg-transparent rounded-lg sm:rounded-xl lg:rounded-3xl w-25.5 xs:w-31 sm:w-51.5 lg:w-78 left-0.25 xs:left-0.5 sm:left-0.5 lg:left-1 top-0.25 xs:top-0.5 sm:top-0.5 lg:top-1 absolute">
        <canvas id="silverCanvas" width="1192" height="1664" class="w-full rounded-lg sm:rounded-xl lg:rounded-3xl" bind:this={silver}/>
      </div>
    </div>
    <div class="col-span-4 w-26 xs:w-32 sm:w-52 lg:w-80 h-36 xs:h-44 sm:h-73 lg:h-111 relative">
      <div class="border border-dark-600 bg-transparent hover:bg-transparent rounded-lg sm:rounded-xl lg:rounded-3xl w-25.5 xs:w-31 sm:w-51.5 lg:w-78 left-0.25 xs:left-0.5 sm:left-0.5 lg:left-1 top-0.25 xs:top-0.5 sm:top-0.5 lg:top-1 absolute">
        <canvas id="purpleCanvas" width="1192" height="1664" class="w-full rounded-lg sm:rounded-xl lg:rounded-3xl" bind:this={purple}/>
      </div>
    </div>

    <div class="col-span-4 w-26 xs:w-32 sm:w-52 lg:w-80 h-35 xs:h-44 sm:h-73 lg:h-111 relative">
      <div class="border border-dark-600 bg-transparent hover:bg-transparent rounded-lg sm:rounded-xl lg:rounded-3xl w-25.5 xs:w-31 sm:w-51.5 lg:w-78 left-0.25 xs:left-0.5 sm:left-0.5 lg:left-1 top-0.25 xs:top-0.5 sm:top-0.5 lg:top-1 absolute">
        <canvas id="blueICanvas" width="1192" height="1664" class="w-full rounded-lg sm:rounded-xl lg:rounded-3xl" bind:this={blueIa}/>
      </div>
    </div>
    <div class="col-span-4 w-26 xs:w-32 sm:w-52 lg:w-80 h-35 xs:h-44 sm:h-73 lg:h-111 relative">
      <div class="border border-dark-600 bg-transparent hover:bg-transparent rounded-lg sm:rounded-xl lg:rounded-3xl w-25.5 xs:w-31 sm:w-51.5 lg:w-78 left-0.25 xs:left-0.5 sm:left-0.5 lg:left-1 top-0.25 xs:top-0.5 sm:top-0.5 lg:top-1 absolute">
        <canvas id="redICanvas" width="1192" height="1664" class="w-full rounded-lg sm:rounded-xl lg:rounded-3xl" bind:this={redIa}/>
      </div>
    </div>
    <div class="col-span-4 w-26 xs:w-32 sm:w-52 lg:w-80 h-35 xs:h-44 sm:h-73 lg:h-111 relative">
      <div class="border border-dark-600 bg-transparent hover:bg-transparent rounded-lg sm:rounded-xl lg:rounded-3xl w-25.5 xs:w-31 sm:w-51.5 lg:w-78 left-0.25 xs:left-0.5 sm:left-0.5 lg:left-1 top-0.25 xs:top-0.5 sm:top-0.5 lg:top-1 absolute">
        <canvas id="greenICanvas" width="1192" height="1664" class="w-full rounded-lg sm:rounded-xl lg:rounded-3xl" bind:this={greenIa}/>
      </div>
    </div>

    <div class="col-span-4 w-26 xs:w-32 sm:w-52 lg:w-80 h-40 xs:h-49 sm:h-81 lg:h-124 relative z-10">
      <div class="border border-dark-600 bg-transparent hover:bg-transparent rounded-lg sm:rounded-xl lg:rounded-3xl w-25.5 xs:w-31 sm:w-51.5 lg:w-78 left-0.25 xs:left-0.5 sm:left-0.5 lg:left-1 absolute duration-500 {blueIIalt ? 'mainCardII' : hoverOverBlueII ? 'downCardII' : 'altCardII'}">
        <canvas id="blueIIaltCanvas" width="1192" height="1664" class="w-full rounded-lg sm:rounded-xl lg:rounded-3xl" bind:this={blueIIb} on:click={blueIIaltClick} on:pointerleave={blueIIaltPointerLeave} on:pointerenter={blueIIaltPointerEnter}/>
        <Checkbox class="absolute top-[3px] xs:top-[3.9px] sm:top-[6.5px] lg:top-[10px] right-[4px] xs:right-[4.6px] sm:right-[8px] lg:right-[12px] w-2 xs:w-2.5 sm:w-4 lg:w-6 h-2 xs:h-2.5 sm:h-4 lg:h-6 rounded-full" bind:checked={blueIIaltChecked} on:change={checkBlueIIalt}></Checkbox>
      </div>
      <div class="border border-dark-600 bg-transparent hover:bg-transparent rounded-lg sm:rounded-xl lg:rounded-3xl w-25.5 xs:w-31 sm:w-51.5 lg:w-78 left-0.25 xs:left-0.5 sm:left-0.5 lg:left-1 absolute duration-500 {!blueIIalt ? 'mainCardII' : hoverOverBlueII ? 'downCardII' : 'altCardII'}">
        <canvas id="blueIImainCanvas" width="1192" height="1664" class="w-full rounded-lg sm:rounded-xl lg:rounded-3xl" bind:this={blueIIa} on:click={blueIImainClick} on:pointerleave={blueIImainPointerLeave} on:pointerenter={blueIImainPointerEnter}/>
        <Checkbox class="absolute top-[3px] xs:top-[3.9px] sm:top-[6.5px] lg:top-[10px] right-[4px] xs:right-[4.6px] sm:right-[8px] lg:right-[12px] w-2 xs:w-2.5 sm:w-4 lg:w-6 h-2 xs:h-2.5 sm:h-4 lg:h-6 rounded-full" bind:checked={blueIImainChecked} on:change={checkBlueIImain}></Checkbox>
      </div>
    </div>
    <div class="col-span-4 w-26 xs:w-32 sm:w-52 lg:w-80 h-40 xs:h-49 sm:h-81 lg:h-124 relative z-10">
      <div class="border border-dark-600 bg-transparent hover:bg-transparent rounded-lg sm:rounded-xl lg:rounded-3xl w-25.5 xs:w-31 sm:w-51.5 lg:w-78 left-0.25 xs:left-0.5 sm:left-0.5 lg:left-1 absolute duration-500 {redIIalt ? 'mainCardII' : hoverOverRedII ? 'downCardII' : 'altCardII'}">
        <canvas id="redIIaltCanvas" width="1192" height="1664" class="w-full rounded-lg sm:rounded-xl lg:rounded-3xl" bind:this={redIIb} on:click={redIIaltClick} on:pointerleave={redIIaltPointerLeave} on:pointerenter={redIIaltPointerEnter}/>
        <Checkbox class="absolute top-[3px] xs:top-[3.9px] sm:top-[6.5px] lg:top-[10px] right-[4px] xs:right-[4.6px] sm:right-[8px] lg:right-[12px] w-2 xs:w-2.5 sm:w-4 lg:w-6 h-2 xs:h-2.5 sm:h-4 lg:h-6 rounded-full" bind:checked={redIIaltChecked} on:change={checkRedIIalt}></Checkbox>
      </div>
      <div class="border border-dark-600 bg-transparent hover:bg-transparent rounded-lg sm:rounded-xl lg:rounded-3xl w-25.5 xs:w-31 sm:w-51.5 lg:w-78 left-0.25 xs:left-0.5 sm:left-0.5 lg:left-1 absolute duration-500 {!redIIalt ? 'mainCardII' : hoverOverRedII ? 'downCardII' : 'altCardII'}">
        <canvas id="redIImainCanvas" width="1192" height="1664" class="w-full rounded-lg sm:rounded-xl lg:rounded-3xl" bind:this={redIIa} on:click={redIImainClick} on:pointerleave={redIImainPointerLeave} on:pointerenter={redIImainPointerEnter}/>
        <Checkbox class="absolute top-[3px] xs:top-[3.9px] sm:top-[6.5px] lg:top-[10px] right-[4px] xs:right-[4.6px] sm:right-[8px] lg:right-[12px] w-2 xs:w-2.5 sm:w-4 lg:w-6 h-2 xs:h-2.5 sm:h-4 lg:h-6 rounded-full" bind:checked={redIImainChecked} on:change={checkRedIImain}></Checkbox>
      </div>
    </div>
    <div class="col-span-4 w-26 xs:w-32 sm:w-52 lg:w-80 h-40 xs:h-49 sm:h-81 lg:h-124 relative z-10">
      <div class="border border-dark-600 bg-transparent hover:bg-transparent rounded-lg sm:rounded-xl lg:rounded-3xl w-25.5 xs:w-31 sm:w-51.5 lg:w-78 left-0.25 xs:left-0.5 sm:left-0.5 lg:left-1 absolute duration-500 {greenIIalt ? 'mainCardII' : hoverOverGreenII ? 'downCardII' : 'altCardII'}">
        <canvas id="greenIIaltCanvas" width="1192" height="1664" class="w-full rounded-lg sm:rounded-xl lg:rounded-3xl" bind:this={greenIIb} on:click={greenIIaltClick} on:pointerleave={greenIIaltPointerLeave} on:pointerenter={greenIIaltPointerEnter}/>
        <Checkbox class="absolute top-[3px] xs:top-[3.9px] sm:top-[6.5px] lg:top-[10px] right-[4px] xs:right-[4.6px] sm:right-[8px] lg:right-[12px] w-2 xs:w-2.5 sm:w-4 lg:w-6 h-2 xs:h-2.5 sm:h-4 lg:h-6 rounded-full" bind:checked={greenIIaltChecked} on:change={checkGreenIIalt}></Checkbox>
      </div>
      <div class="border border-dark-600 bg-transparent hover:bg-transparent rounded-lg sm:rounded-xl lg:rounded-3xl w-25.5 xs:w-31 sm:w-51.5 lg:w-78 left-0.25 xs:left-0.5 sm:left-0.5 lg:left-1 absolute duration-500 {!greenIIalt ? 'mainCardII' : hoverOverGreenII ? 'downCardII' : 'altCardII'}">
        <canvas id="greenIImainCanvas" width="1192" height="1664" class="w-full rounded-lg sm:rounded-xl lg:rounded-3xl" bind:this={greenIIa} on:click={greenIImainClick} on:pointerleave={greenIImainPointerLeave} on:pointerenter={greenIImainPointerEnter}/>
        <Checkbox class="absolute top-[3px] xs:top-[3.9px] sm:top-[6.5px] lg:top-[10px] right-[4px] xs:right-[4.6px] sm:right-[8px] lg:right-[12px] w-2 xs:w-2.5 sm:w-4 lg:w-6 h-2 xs:h-2.5 sm:h-4 lg:h-6 rounded-full" bind:checked={greenIImainChecked} on:change={checkGreenIImain}></Checkbox>
      </div>
    </div>

    <div class="col-span-4 w-26 xs:w-32 sm:w-52 lg:w-80 h-40 xs:h-49 sm:h-81 lg:h-124 relative">
      <div class="border border-dark-600 bg-transparent hover:bg-transparent rounded-lg sm:rounded-xl lg:rounded-3xl w-25.5 xs:w-31 sm:w-51.5 lg:w-78 left-0.25 xs:left-0.5 sm:left-0.5 lg:left-1 absolute duration-500 {blueIIIalt ? 'mainCardIII' : hoverOverBlueIII ? 'downCardIII' : 'altCardIII'}">
        <canvas id="blueIIIaltCanvas" width="1192" height="1664" class="w-full rounded-lg sm:rounded-xl lg:rounded-3xl" bind:this={blueIIIb} on:click={blueIIIaltClick} on:pointerleave={blueIIIaltPointerLeave} on:pointerenter={blueIIIaltPointerEnter}/>
        <Checkbox class="absolute top-[3px] xs:top-[3.9px] sm:top-[6.5px] lg:top-[10px] right-[4px] xs:right-[4.6px] sm:right-[8px] lg:right-[12px] w-2 xs:w-2.5 sm:w-4 lg:w-6 h-2 xs:h-2.5 sm:h-4 lg:h-6 rounded-full" bind:checked={blueIIIaltChecked} on:change={checkBlueIIIalt}></Checkbox>
      </div>
      <div class="border border-dark-600 bg-transparent hover:bg-transparent rounded-lg sm:rounded-xl lg:rounded-3xl w-25.5 xs:w-31 sm:w-51.5 lg:w-78 left-0.25 xs:left-0.5 sm:left-0.5 lg:left-1 absolute duration-500 {!blueIIIalt ? 'mainCardIII' : hoverOverBlueIII ? 'downCardIII' : 'altCardIII'}">
        <canvas id="blueIIImainCanvas" width="1192" height="1664" class="w-full rounded-lg sm:rounded-xl lg:rounded-3xl" bind:this={blueIIIa} on:click={blueIIImainClick} on:pointerleave={blueIIImainPointerLeave} on:pointerenter={blueIIImainPointerEnter}/>
        <Checkbox class="absolute top-[3px] xs:top-[3.9px] sm:top-[6.5px] lg:top-[10px] right-[4px] xs:right-[4.6px] sm:right-[8px] lg:right-[12px] w-2 xs:w-2.5 sm:w-4 lg:w-6 h-2 xs:h-2.5 sm:h-4 lg:h-6 rounded-full" bind:checked={blueIIImainChecked} on:change={checkBlueIIImain}></Checkbox>
      </div>
    </div>
    <div class="col-span-4 w-26 xs:w-32 sm:w-52 lg:w-80 h-40 xs:h-49 sm:h-81 lg:h-124 relative">
      <div class="border border-dark-600 bg-transparent hover:bg-transparent rounded-lg sm:rounded-xl lg:rounded-3xl w-25.5 xs:w-31 sm:w-51.5 lg:w-78 left-0.25 xs:left-0.5 sm:left-0.5 lg:left-1 absolute duration-500 {redIIIalt ? 'mainCardIII' : hoverOverRedIII ? 'downCardIII' : 'altCardIII'}">
        <canvas id="redIIIaltCanvas" width="1192" height="1664" class="w-full rounded-lg sm:rounded-xl lg:rounded-3xl" bind:this={redIIIb} on:click={redIIIaltClick} on:pointerleave={redIIIaltPointerLeave} on:pointerenter={redIIIaltPointerEnter}/>
        <Checkbox class="absolute top-[3px] xs:top-[3.9px] sm:top-[6.5px] lg:top-[10px] right-[4px] xs:right-[4.6px] sm:right-[8px] lg:right-[12px] w-2 xs:w-2.5 sm:w-4 lg:w-6 h-2 xs:h-2.5 sm:h-4 lg:h-6 rounded-full" bind:checked={redIIIaltChecked} on:change={checkRedIIIalt}></Checkbox>
      </div>
      <div class="border border-dark-600 bg-transparent hover:bg-transparent rounded-lg sm:rounded-xl lg:rounded-3xl w-25.5 xs:w-31 sm:w-51.5 lg:w-78 left-0.25 xs:left-0.5 sm:left-0.5 lg:left-1 absolute duration-500 {!redIIIalt ? 'mainCardIII' : hoverOverRedIII ? 'downCardIII' : 'altCardIII'}">
        <canvas id="redIIImainCanvas" width="1192" height="1664" class="w-full rounded-lg sm:rounded-xl lg:rounded-3xl" bind:this={redIIIa} on:click={redIIImainClick} on:pointerleave={redIIImainPointerLeave} on:pointerenter={redIIImainPointerEnter}/>
        <Checkbox class="absolute top-[3px] xs:top-[3.9px] sm:top-[6.5px] lg:top-[10px] right-[4px] xs:right-[4.6px] sm:right-[8px] lg:right-[12px] w-2 xs:w-2.5 sm:w-4 lg:w-6 h-2 xs:h-2.5 sm:h-4 lg:h-6 rounded-full" bind:checked={redIIImainChecked} on:change={checkRedIIImain}></Checkbox>
      </div>
    </div>
    <div class="col-span-4 w-26 xs:w-32 sm:w-52 lg:w-80 h-40 xs:h-49 sm:h-81 lg:h-124 relative">
      <div class="border border-dark-600 bg-transparent hover:bg-transparent rounded-lg sm:rounded-xl lg:rounded-3xl w-25.5 xs:w-31 sm:w-51.5 lg:w-78 left-0.25 xs:left-0.5 sm:left-0.5 lg:left-1 absolute duration-500 {greenIIIalt ? 'mainCardIII' : hoverOverGreenIII ? 'downCardIII' : 'altCardIII'}">
        <canvas id="greenIIIaltCanvas" width="1192" height="1664" class="w-full rounded-lg sm:rounded-xl lg:rounded-3xl" bind:this={greenIIIb} on:click={greenIIIaltClick} on:pointerleave={greenIIIaltPointerLeave} on:pointerenter={greenIIIaltPointerEnter}/>
        <Checkbox class="absolute top-[3px] xs:top-[3.9px] sm:top-[6.5px] lg:top-[10px] right-[4px] xs:right-[4.6px] sm:right-[8px] lg:right-[12px] w-2 xs:w-2.5 sm:w-4 lg:w-6 h-2 xs:h-2.5 sm:h-4 lg:h-6 rounded-full" bind:checked={greenIIIaltChecked} on:change={checkGreenIIIalt}></Checkbox>
      </div>
      <div class="border border-dark-600 bg-transparent hover:bg-transparent rounded-lg sm:rounded-xl lg:rounded-3xl w-25.5 xs:w-31 sm:w-51.5 lg:w-78 left-0.25 xs:left-0.5 sm:left-0.5 lg:left-1 absolute duration-500 {!greenIIIalt ? 'mainCardIII' : hoverOverGreenIII ? 'downCardIII' : 'altCardIII'}">
        <canvas id="greenIIImainCanvas" width="1192" height="1664" class="w-full rounded-lg sm:rounded-xl lg:rounded-3xl" bind:this={greenIIIa} on:click={greenIIImainClick} on:pointerleave={greenIIImainPointerLeave} on:pointerenter={greenIIImainPointerEnter}/>
        <Checkbox class="absolute top-[3px] xs:top-[3.9px] sm:top-[6.5px] lg:top-[10px] right-[4px] xs:right-[4.6px] sm:right-[8px] lg:right-[12px] w-2 xs:w-2.5 sm:w-4 lg:w-6 h-2 xs:h-2.5 sm:h-4 lg:h-6 rounded-full" bind:checked={greenIIImainChecked} on:change={checkGreenIIImain}></Checkbox>
      </div>
    </div>
    {#if extraCards.length > 0}
      <div class="col-span-12 mt-[3px] xs:mt-[2px] sm:mt-[2px] lg:mt-[0px] flex justify-center gap-2 xs:gap-3 sm:gap-4 lg:gap-6 relative z-0">
        {#each extraCards as _, index (index)}
          <div class="w-26 xs:w-32 sm:w-52 lg:w-80 h-35 xs:h-44 sm:h-73 lg:h-111 relative">
            <div class="border border-dark-600 bg-transparent hover:bg-transparent rounded-lg sm:rounded-xl lg:rounded-3xl w-25.5 xs:w-31 sm:w-51.5 lg:w-78 left-0.25 xs:left-0.5 sm:left-0.5 lg:left-1 top-0.25 xs:top-0.5 sm:top-0.5 lg:top-1 absolute">
              <canvas width="1192" height="1664" class="w-full rounded-lg sm:rounded-xl lg:rounded-3xl" bind:this={extraCardCanvases[index]}/>
            </div>
          </div>
        {/each}
      </div>
    {/if}
    <div id="showNumbers" class="col-span-6 flex-col content-center mt-8 xs:mt-10 sm:mt-14 flex items-center">
      <Checkbox bind:checked={showNumbers} disabled={disableShowNumbers}>
        <div style="color: {labelColor(disableShowNumbers)}">
          Show Numbers
        </div>
      </Checkbox>
      <Tooltip triggeredBy="#showNumbers" placement="bottom" class="z-50">Disabled by the developer's request</Tooltip>
    </div>
    <div class="col-span-6 flex-col content-center mt-8 xs:mt-10 sm:mt-14 flex items-center">
      <Checkbox bind:checked={showHandicap}>
        <div style="color: white">
          Show Handicap
        </div>
      </Checkbox>
    </div>
  </div>

  <p class="absolute font-modesto"></p>
</div>

<style>
  .mainCardII {
      top: 0.25rem;
      z-index: 30;
  }
  .altCardII {
      top: 21px;
      @media (min-width: 400px) {
          top: 1.5rem;
      }
      @media (min-width: 640px) {
          top: 36px;
      }
      @media (min-width: 1024px) {
          top: 3.5rem;
      }
      z-index: 20;
  }
  .downCardII {
      top: 2.5rem;
      @media (min-width: 400px) {
          top: 3rem;
      }
      @media (min-width: 640px) {
          top: 4.6rem;
      }
      @media (min-width: 1024px) {
          top: 7rem;
      }
      z-index: 20;
  }
  .mainCardIII {
      top: 0.25rem;
      z-index: 10;
  }
  .altCardIII {
      top: 21px;
      @media (min-width: 400px) {
          top: 1.5rem;
      }
      @media (min-width: 640px) {
          top: 36px;
      }
      @media (min-width: 1024px) {
          top: 3.5rem;
      }
      z-index: 0;
  }
  .downCardIII {
      top: 2.5rem;
      @media (min-width: 400px) {
          top: 3rem;
      }
      @media (min-width: 640px) {
          top: 4.6rem;
      }
      @media (min-width: 1024px) {
          top: 7rem;
      }
      z-index: 0;
  }

   .font-modesto {
       font-family: "Modesto Poster", serif;
   }

  @font-face{
      font-family: "Modesto Poster";
      src: url("../../lib/fonts/modesto_poster.woff") format("woff");
  }

</style>
