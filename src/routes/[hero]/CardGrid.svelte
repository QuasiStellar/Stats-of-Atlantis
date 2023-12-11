<script lang="ts">
  import { onMount } from "svelte"
  import { Color, Hero, heroes, Item, Modifier, stats, Type, ValueSign } from "../../states"
  import { images, importCardImages, importImages, updateCanvas } from "../../card_painter"
  import heroInfo from "../../heroes.json"
  import BiggerPicture from "bigger-picture/svelte"
  import "bigger-picture/css"
  import GoaCard from "./GoaCard.svelte"
  import type { BiggerPictureInstance } from "bigger-picture"
  import { Card, Checkbox, Img, Tooltip } from "flowbite-svelte"

  export let heroName: string

  let gold: HTMLCanvasElement
  let goldCtx: CanvasRenderingContext2D
  let goldBg: HTMLImageElement | undefined

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

  let imagesLoaded = false

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

    if (blueIIselection === true) {
      bonuses[blueIIbCard.item] += 1
    }

    if (blueIIselection === false) {
      bonuses[blueIIaCard.item] += 1
    }

    if (redIIselection === true) {
      bonuses[redIIbCard.item] += 1
    }

    if (redIIselection === false) {
      bonuses[redIIaCard.item] += 1
    }

    if (greenIIselection === true) {
      bonuses[greenIIbCard.item] += 1
    }

    if (greenIIselection === false) {
      bonuses[greenIIaCard.item] += 1
    }
    
    if (blueIIIselection === true) {
      bonuses[blueIIIbCard.item] += 1
    }

    if (blueIIIselection === false) {
      bonuses[blueIIIaCard.item] += 1
    }
    
    if (redIIIselection === true) {
      bonuses[redIIIbCard.item] += 1
    }

    if (redIIIselection === false) {
      bonuses[redIIIaCard.item] += 1
    }

    if (greenIIIselection === true) {
      bonuses[greenIIIbCard.item] += 1
    }

    if (greenIIIselection === false) {
      bonuses[greenIIIaCard.item] += 1
    }

    initiativeBonus = bonuses[Item.INITIATIVE]
    attackBonus = bonuses[Item.ATTACK]
    defenseBonus = bonuses[Item.DEFENSE]
    areaBonus = bonuses[Item.AREA]
    rangeBonus = bonuses[Item.RANGE]
    movementBonus = bonuses[Item.MOVEMENT]

    if (imagesLoaded) {
      updateCard(
        gold,
        goldCtx,
        showHandicap ? goldHandicapCard : goldCard,
        goldBg!,
      )
      updateCard(
        silver,
        silverCtx,
        silverCard,
        silverBg!,
      )
      updateCard(
        purple,
        purpleCtx,
        purpleCard,
        purpleBg!,
      )
      updateCard(
        blueIa,
        blueIaCtx,
        blueIaCard,
        blueIaBg!,
      )
      updateCard(
        redIa,
        redIaCtx,
        redIaCard,
        redIaBg!,
      )
      updateCard(
        greenIa,
        greenIaCtx,
        greenIaCard,
        greenIaBg!,
      )
      updateCard(
        blueIIa,
        blueIIaCtx,
        blueIIaCard,
        blueIIaBg!,
      )
      updateCard(
        redIIa,
        redIIaCtx,
        redIIaCard,
        redIIaBg!,
      )
      updateCard(
        greenIIa,
        greenIIaCtx,
        greenIIaCard,
        greenIIaBg!,
      )
      updateCard(
        blueIIb,
        blueIIbCtx,
        blueIIbCard,
        blueIIbBg!,
      )
      updateCard(
        redIIb,
        redIIbCtx,
        redIIbCard,
        redIIbBg!,
      )
      updateCard(
        greenIIb,
        greenIIbCtx,
        greenIIbCard,
        greenIIbBg!,
      )
      updateCard(
        blueIIIa,
        blueIIIaCtx,
        blueIIIaCard,
        blueIIIaBg!,
      )
      updateCard(
        redIIIa,
        redIIIaCtx,
        redIIIaCard,
        redIIIaBg!,
      )
      updateCard(
        greenIIIa,
        greenIIIaCtx,
        greenIIIaCard,
        greenIIIaBg!,
      )
      updateCard(
        blueIIIb,
        blueIIIbCtx,
        blueIIIbCard,
        blueIIIbBg!,
      )
      updateCard(
        redIIIb,
        redIIIbCtx,
        redIIIbCard,
        redIIIbBg!,
      )
      updateCard(
        greenIIIb,
        greenIIIbCtx,
        greenIIIbCard,
        greenIIIbBg!,
      )
    }
  }

  $: showNumbers = false
  $: showHandicap = false

  const labelColor = (disabled: boolean): string => disabled ? "gray" : "white"

  $: disableShowNumbers = true

  const hero = heroes[heroName] as Hero
  const fullName = hero.name + " " + hero.title

  function updateCard(canvas: HTMLCanvasElement, context: CanvasRenderingContext2D, card: any, image: HTMLImageElement) {
    updateCanvas(
      canvas,
      context,
      [],
      image,
      card.color ?? Color.GOLD,
      card.handicapped ?? false,
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
      initiativeBonus,
      attackBonus,
      defenseBonus,
      areaBonus,
      rangeBonus,
      movementBonus,
      showNumbers,
      hero.stats[0],
      hero.stats[1],
      hero.stats[2],
      hero.stats[3],
    )
  }

  let bp: BiggerPictureInstance

  let banner: any

  $: statImages = new Map()

  onMount(async () => {
    banner = (await import(`../../lib/images/avatars_full/${heroName}.png`)).default

    for (const stat of stats) {
      statImages.set(stat, (await import(`../../lib/images/stat_icons/${stat}_white.png`)).default)
    }
    statImages = statImages

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
      importImages(),
      importCardImages(heroName),
    ])
      .then(() => {
        imagesLoaded = true

        blueIaBg = images.get("BlueIA")
        blueIIaBg = images.get("BlueIIA")
        blueIIbBg = images.get("BlueIIB")
        blueIIIaBg = images.get("BlueIIIA")
        blueIIIbBg = images.get("BlueIIIB")
        goldBg = images.get("Gold")
        greenIaBg = images.get("GreenIA")
        greenIIaBg = images.get("GreenIIA")
        greenIIbBg = images.get("GreenIIB")
        greenIIIaBg = images.get("GreenIIIA")
        greenIIIbBg = images.get("GreenIIIB")
        // handicapBg = images.get("Handicap")
        redIaBg = images.get("RedIA")
        redIIaBg = images.get("RedIIA")
        redIIbBg = images.get("RedIIB")
        redIIIaBg = images.get("RedIIIA")
        redIIIbBg = images.get("RedIIIB")
        silverBg = images.get("Silver")
        purpleBg = images.get("Ultimate")

        const hero = heroInfo[heroName as keyof typeof heroInfo] as {
          name?: string,
          description?: string,
          color?: Color,
          handicapped?: boolean,
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
          item?: Item,
        }[]
        goldCard = hero.find((card) => card.color == Color.GOLD.toUpperCase())!
        goldHandicapCard = hero.find((card) => card.color == Color.GOLD.toUpperCase() && card.handicapped)!
        silverCard = hero.find((card) => card.color == Color.SILVER.toUpperCase())!
        purpleCard = hero.find((card) => card.color == Color.PURPLE.toUpperCase())!
        blueIaCard = hero.find((card) => card.color == Color.BLUE.toUpperCase() && card.level == 1)!
        redIaCard = hero.find((card) => card.color == Color.RED.toUpperCase() && card.level == 1)!
        greenIaCard = hero.find((card) => card.color == Color.GREEN.toUpperCase() && card.level == 1)!
        blueIIaCard = hero.find((card) => card.color == Color.BLUE.toUpperCase() && card.level == 2 && card.variant?.first == 1)!
        redIIaCard = hero.find((card) => card.color == Color.RED.toUpperCase() && card.level == 2 && card.variant?.first == 1)!
        greenIIaCard = hero.find((card) => card.color == Color.GREEN.toUpperCase() && card.level == 2 && card.variant?.first == 1)!
        blueIIbCard = hero.find((card) => card.color == Color.BLUE.toUpperCase() && card.level == 2 && card.variant?.first == 2)!
        redIIbCard = hero.find((card) => card.color == Color.RED.toUpperCase() && card.level == 2 && card.variant?.first == 2)!
        greenIIbCard = hero.find((card) => card.color == Color.GREEN.toUpperCase() && card.level == 2 && card.variant?.first == 2)!
        blueIIIaCard = hero.find((card) => card.color == Color.BLUE.toUpperCase() && card.level == 3 && card.variant?.first == 1)!
        redIIIaCard = hero.find((card) => card.color == Color.RED.toUpperCase() && card.level == 3 && card.variant?.first == 1)!
        greenIIIaCard = hero.find((card) => card.color == Color.GREEN.toUpperCase() && card.level == 3 && card.variant?.first == 1)!
        blueIIIbCard = hero.find((card) => card.color == Color.BLUE.toUpperCase() && card.level == 3 && card.variant?.first == 2)!
        redIIIbCard = hero.find((card) => card.color == Color.RED.toUpperCase() && card.level == 3 && card.variant?.first == 2)!
        greenIIIbCard = hero.find((card) => card.color == Color.GREEN.toUpperCase() && card.level == 3 && card.variant?.first == 2)!

        updateCard(
          gold,
          goldCtx,
          showHandicap ? goldHandicapCard : goldCard,
          goldBg!,
        )
        updateCard(
          silver,
          silverCtx,
          silverCard,
          silverBg!,
        )
        updateCard(
          purple,
          purpleCtx,
          purpleCard,
          purpleBg!,
        )
        updateCard(
          blueIa,
          blueIaCtx,
          blueIaCard,
          blueIaBg!,
        )
        updateCard(
          redIa,
          redIaCtx,
          redIaCard,
          redIaBg!,
        )
        updateCard(
          greenIa,
          greenIaCtx,
          greenIaCard,
          greenIaBg!,
        )
        updateCard(
          blueIIa,
          blueIIaCtx,
          blueIIaCard,
          blueIIaBg!,
        )
        updateCard(
          redIIa,
          redIIaCtx,
          redIIaCard,
          redIIaBg!,
        )
        updateCard(
          greenIIa,
          greenIIaCtx,
          greenIIaCard,
          greenIIaBg!,
        )
        updateCard(
          blueIIb,
          blueIIbCtx,
          blueIIbCard,
          blueIIbBg!,
        )
        updateCard(
          redIIb,
          redIIbCtx,
          redIIbCard,
          redIIbBg!,
        )
        updateCard(
          greenIIb,
          greenIIbCtx,
          greenIIbCard,
          greenIIbBg!,
        )
        updateCard(
          blueIIIa,
          blueIIIaCtx,
          blueIIIaCard,
          blueIIIaBg!,
        )
        updateCard(
          redIIIa,
          redIIIaCtx,
          redIIIaCard,
          redIIIaBg!,
        )
        updateCard(
          greenIIIa,
          greenIIIaCtx,
          greenIIIaCard,
          greenIIIaBg!,
        )
        updateCard(
          blueIIIb,
          blueIIIbCtx,
          blueIIIbCard,
          blueIIIbBg!,
        )
        updateCard(
          redIIIb,
          redIIIbCtx,
          redIIIbCard,
          redIIIbBg!,
        )
        updateCard(
          greenIIIb,
          greenIIIbCtx,
          greenIIIbCard,
          greenIIIbBg!,
        )
      })

    bp = BiggerPicture({
      target: document.body
    })
  })

  function goldClick() {
    bp.open({
      intro: "fadeup",
      items: [{ html: "" }],
      onOpen: (container) => {
        container.querySelector(".bp-x")!!.remove()
        let card = new GoaCard({
          target: container.querySelector(".bp-html") as Element,
          props: { bp }
        });
        card.drawCard(document.getElementById("goldCanvas")!! as HTMLCanvasElement)
      },
    })
  }

  function silverClick() {
    bp.open({
      intro: "fadeup",
      items: [{ html: "" }],
      onOpen: (container) => {
        container.querySelector(".bp-x")!!.remove()
        let card = new GoaCard({
          target: container.querySelector(".bp-html") as Element,
          props: { bp }
        });
        card.drawCard(document.getElementById("silverCanvas")!! as HTMLCanvasElement)
      },
    })
  }

  function purpleClick() {
    bp.open({
      intro: "fadeup",
      items: [{ html: "" }],
      onOpen: (container) => {
        container.querySelector(".bp-x")!!.remove()
        let card = new GoaCard({
          target: container.querySelector(".bp-html") as Element,
          props: { bp }
        });
        card.drawCard(document.getElementById("purpleCanvas")!! as HTMLCanvasElement)
      },
    })
  }

  function blueIClick() {
    bp.open({
      intro: "fadeup",
      items: [{ html: "" }],
      onOpen: (container) => {
        container.querySelector(".bp-x")!!.remove()
        let card = new GoaCard({
          target: container.querySelector(".bp-html") as Element,
          props: { bp }
        });
        card.drawCard(document.getElementById("blueICanvas")!! as HTMLCanvasElement)
      },
    })
  }

  function redIClick() {
    bp.open({
      intro: "fadeup",
      items: [{ html: "" }],
      onOpen: (container) => {
        container.querySelector(".bp-x")!!.remove()
        let card = new GoaCard({
          target: container.querySelector(".bp-html") as Element,
          props: { bp }
        });
        card.drawCard(document.getElementById("redICanvas")!! as HTMLCanvasElement)
      },
    })
  }

  function greenIClick() {
    bp.open({
      intro: "fadeup",
      items: [{ html: "" }],
      onOpen: (container) => {
        container.querySelector(".bp-x")!!.remove()
        let card = new GoaCard({
          target: container.querySelector(".bp-html") as Element,
          props: { bp }
        });
        card.drawCard(document.getElementById("greenICanvas")!! as HTMLCanvasElement)
      },
    })
  }

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
    if (blueIIalt)
      blueIIalt = !blueIIalt
    else
      bp.open({
        intro: "fadeup",
        items: [{ html: "" }],
        onOpen: (container) => {
          container.querySelector(".bp-x")!!.remove()
          let card = new GoaCard({
            target: container.querySelector(".bp-html") as Element,
            props: { bp }
          });
          card.drawCard(document.getElementById("blueIImainCanvas")!! as HTMLCanvasElement)
        },
      })
  }

  function blueIIaltClick() {
    hoverOverBlueII = false
    if (blueIIalt)
      bp.open({
        intro: "fadeup",
        items: [{ html: "" }],
        onOpen: (container) => {
          container.querySelector(".bp-x")!!.remove()
          let card = new GoaCard({
            target: container.querySelector(".bp-html") as Element,
            props: { bp }
          });
          card.drawCard(document.getElementById("blueIIaltCanvas")!! as HTMLCanvasElement)
        },
      })
    else
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
    if (redIIalt)
      redIIalt = !redIIalt
    else
      bp.open({
        intro: "fadeup",
        items: [{ html: "" }],
        onOpen: (container) => {
          container.querySelector(".bp-x")!!.remove()
          let card = new GoaCard({
            target: container.querySelector(".bp-html") as Element,
            props: { bp }
          });
          card.drawCard(document.getElementById("redIImainCanvas")!! as HTMLCanvasElement)
        },
      })
  }

  function redIIaltClick() {
    hoverOverRedII = false
    if (redIIalt)
      bp.open({
        intro: "fadeup",
        items: [{ html: "" }],
        onOpen: (container) => {
          container.querySelector(".bp-x")!!.remove()
          let card = new GoaCard({
            target: container.querySelector(".bp-html") as Element,
            props: { bp }
          });
          card.drawCard(document.getElementById("redIIaltCanvas")!! as HTMLCanvasElement)
        },
      })
    else
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
    if (greenIIalt)
      greenIIalt = !greenIIalt
    else
      bp.open({
        intro: "fadeup",
        items: [{ html: "" }],
        onOpen: (container) => {
          container.querySelector(".bp-x")!!.remove()
          let card = new GoaCard({
            target: container.querySelector(".bp-html") as Element,
            props: { bp }
          });
          card.drawCard(document.getElementById("greenIImainCanvas")!! as HTMLCanvasElement)
        },
      })
  }

  function greenIIaltClick() {
    hoverOverGreenII = false
    if (greenIIalt)
      bp.open({
        intro: "fadeup",
        items: [{ html: "" }],
        onOpen: (container) => {
          container.querySelector(".bp-x")!!.remove()
          let card = new GoaCard({
            target: container.querySelector(".bp-html") as Element,
            props: { bp }
          });
          card.drawCard(document.getElementById("greenIIaltCanvas")!! as HTMLCanvasElement)
        },
      })
    else
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
    if (blueIIIalt)
      blueIIIalt = !blueIIIalt
    else
      bp.open({
        intro: "fadeup",
        items: [{ html: "" }],
        onOpen: (container) => {
          container.querySelector(".bp-x")!!.remove()
          let card = new GoaCard({
            target: container.querySelector(".bp-html") as Element,
            props: { bp }
          });
          card.drawCard(document.getElementById("blueIIImainCanvas")!! as HTMLCanvasElement)
        },
      })
  }

  function blueIIIaltClick() {
    hoverOverBlueIII = false
    if (blueIIIalt)
      bp.open({
        intro: "fadeup",
        items: [{ html: "" }],
        onOpen: (container) => {
          container.querySelector(".bp-x")!!.remove()
          let card = new GoaCard({
            target: container.querySelector(".bp-html") as Element,
            props: { bp }
          });
          card.drawCard(document.getElementById("blueIIIaltCanvas")!! as HTMLCanvasElement)
        },
      })
    else
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
    if (redIIIalt)
      redIIIalt = !redIIIalt
    else
      bp.open({
        intro: "fadeup",
        items: [{ html: "" }],
        onOpen: (container) => {
          container.querySelector(".bp-x")!!.remove()
          let card = new GoaCard({
            target: container.querySelector(".bp-html") as Element,
            props: { bp }
          });
          card.drawCard(document.getElementById("redIIImainCanvas")!! as HTMLCanvasElement)
        },
      })
  }

  function redIIIaltClick() {
    hoverOverRedIII = false
    if (redIIIalt)
      bp.open({
        intro: "fadeup",
        items: [{ html: "" }],
        onOpen: (container) => {
          container.querySelector(".bp-x")!!.remove()
          let card = new GoaCard({
            target: container.querySelector(".bp-html") as Element,
            props: { bp }
          });
          card.drawCard(document.getElementById("redIIIaltCanvas")!! as HTMLCanvasElement)
        },
      })
    else
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
    if (greenIIIalt)
      greenIIIalt = !greenIIIalt
    else
      bp.open({
        intro: "fadeup",
        items: [{ html: "" }],
        onOpen: (container) => {
          container.querySelector(".bp-x")!!.remove()
          let card = new GoaCard({
            target: container.querySelector(".bp-html") as Element,
            props: { bp }
          });
          card.drawCard(document.getElementById("greenIIImainCanvas")!! as HTMLCanvasElement)
        },
      })
  }

  function greenIIIaltClick() {
    hoverOverGreenIII = false
    if (greenIIIalt)
      bp.open({
        intro: "fadeup",
        items: [{ html: "" }],
        onOpen: (container) => {
          container.querySelector(".bp-x")!!.remove()
          let card = new GoaCard({
            target: container.querySelector(".bp-html") as Element,
            props: { bp }
          });
          card.drawCard(document.getElementById("greenIIIaltCanvas")!! as HTMLCanvasElement)
        },
      })
    else
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
    <div class="col-span-12 w-96 sm:w-157 lg:w-239 h-50 sm:h-82 lg:h-125 mt-5 sm:mt-7.5 lg:mt-10 relative">
      <div class="border border-dark-600 bg-transparent hover:bg-transparent rounded-lg sm:rounded-xl lg:rounded-3xl left-0.5 sm:left-0.5 lg:left-1 w-95 sm:w-156 lg:w-237 absolute" on:click={onAvatarClick}>
        <Img src={banner} class="rounded-lg sm:rounded-xl lg:rounded-3xl"/>
        <p class="absolute text-black text-xl sm:text-3xl lg:text-5xl -top-[14px] sm:-top-[19px] lg:-top-[24px] left-[10px] sm:left-[22px] lg:left-[34px] font-modesto">{fullName}</p>
        <p class="absolute text-black text-xl sm:text-3xl lg:text-5xl -top-[10px] sm:-top-[13px] lg:-top-[16px] left-[6px] sm:left-[16px] lg:left-[26px] font-modesto">{fullName}</p>
        <p class="absolute text-black text-xl sm:text-3xl lg:text-5xl -top-[14px] sm:-top-[19px] lg:-top-[24px] left-[6px] sm:left-[16px] lg:left-[26px] font-modesto">{fullName}</p>
        <p class="absolute text-black text-xl sm:text-3xl lg:text-5xl -top-[10px] sm:-top-[13px] lg:-top-[16px] left-[10px] sm:left-[22px] lg:left-[34px] font-modesto">{fullName}</p>
        <p class="absolute text-white text-xl sm:text-3xl lg:text-5xl -top-[12px] sm:-top-[16px] lg:-top-[20px] left-[8px] sm:left-[19px] lg:left-[30px] font-modesto">{fullName}</p>
      </div>
    </div>

    {#each stats as stat, stat_index (stat_index)}
      <div id="{stat}" class="col-span-3 h-4 sm:h-5.5 lg:h-7 z-20 relative">
        <div class="left-0.5 sm:left-0.5 lg:left-1 top-0.5 sm:top-0.5 lg:top-1 h-3 sm:h-4 lg:h-5 border border-dark-600 bg-transparent hover:bg-transparent rounded sm:rounded-lg lg:rounded-xl bg-dark-900 absolute">
          <div class="m-0.5 sm:m-0.5 lg:m-1 relative h-full">
            <Img src={statImages.get(stat)} class="absolute w-2.5 sm:w-3.75 lg:w-5 z-30 -top-0.5 sm:-top-0.75 lg:-top-1.25 left-0.5 sm:left-0.75 lg:left-1" />
            <div class="float-left w-3.5 sm:w-6 lg:w-7 h-full bg-transparent" />
            {#each Array(8) as _, color_index (color_index)}
              <div class="float-left w-0.5 sm:w-0.75 lg:w-1 h-1" />
              {#if hero.stats[stat_index] > color_index}
                <div class="z-40 float-left w-[7px] sm:w-[12px] lg:w-5 h-1.5 sm:h-2 lg:h-2.5 rounded-sm sm:rounded lg:rounded-md bg-{heroName}" />
              {:else}
                <div class="float-left w-[7px] sm:w-[12px] lg:w-5 h-1 bg-transparent" />
              {/if}
            {/each}
          </div>
        </div>
      </div>
      <Tooltip triggeredBy="#{stat}" placement="top" class="z-50">{stat.charAt(0).toUpperCase() + stat.slice(1)}</Tooltip>
    {/each}

    <div class="col-span-4 w-32 sm:w-52 lg:w-80 h-44 sm:h-73 lg:h-111 relative">
      <div class="border border-dark-600 bg-transparent hover:bg-transparent rounded-lg sm:rounded-xl lg:rounded-3xl w-31 sm:w-51 lg:w-78 left-0.5 sm:left-0.5 lg:left-1 top-0.5 sm:top-0.5 lg:top-1 absolute">
        <canvas id="goldCanvas" width="1192" height="1664" class="w-full rounded-lg sm:rounded-xl lg:rounded-3xl" bind:this={gold} on:click={goldClick}/>
      </div>
    </div>
    <div class="col-span-4 w-32 sm:w-52 lg:w-80 h-44 sm:h-73 lg:h-111 relative">
      <div class="border border-dark-600 bg-transparent hover:bg-transparent rounded-lg sm:rounded-xl lg:rounded-3xl w-31 sm:w-51 lg:w-78 left-0.5 sm:left-0.5 lg:left-1 top-0.5 sm:top-0.5 lg:top-1 absolute">
        <canvas id="silverCanvas" width="1192" height="1664" class="w-full rounded-lg sm:rounded-xl lg:rounded-3xl" bind:this={silver} on:click={silverClick}/>
      </div>
    </div>
    <div class="col-span-4 w-32 sm:w-52 lg:w-80 h-44 sm:h-73 lg:h-111 relative">
      <div class="border border-dark-600 bg-transparent hover:bg-transparent rounded-lg sm:rounded-xl lg:rounded-3xl w-31 sm:w-51 lg:w-78 left-0.5 sm:left-0.5 lg:left-1 top-0.5 sm:top-0.5 lg:top-1 absolute">
        <canvas id="purpleCanvas" width="1192" height="1664" class="w-full rounded-lg sm:rounded-xl lg:rounded-3xl" bind:this={purple} on:click={purpleClick}/>
      </div>
    </div>

    <div class="col-span-4 w-32 sm:w-52 lg:w-80 h-44 sm:h-73 lg:h-111 relative">
      <div class="border border-dark-600 bg-transparent hover:bg-transparent rounded-lg sm:rounded-xl lg:rounded-3xl w-31 sm:w-51 lg:w-78 left-0.5 sm:left-0.5 lg:left-1 top-0.5 sm:top-0.5 lg:top-1 absolute">
        <canvas id="blueICanvas" width="1192" height="1664" class="w-full rounded-lg sm:rounded-xl lg:rounded-3xl" bind:this={blueIa} on:click={blueIClick}/>
      </div>
    </div>
    <div class="col-span-4 w-32 sm:w-52 lg:w-80 h-44 sm:h-73 lg:h-111 relative">
      <div class="border border-dark-600 bg-transparent hover:bg-transparent rounded-lg sm:rounded-xl lg:rounded-3xl w-31 sm:w-51 lg:w-78 left-0.5 sm:left-0.5 lg:left-1 top-0.5 sm:top-0.5 lg:top-1 absolute">
        <canvas id="redICanvas" width="1192" height="1664" class="w-full rounded-lg sm:rounded-xl lg:rounded-3xl" bind:this={redIa} on:click={redIClick}/>
      </div>
    </div>
    <div class="col-span-4 w-32 sm:w-52 lg:w-80 h-44 sm:h-73 lg:h-111 relative">
      <div class="border border-dark-600 bg-transparent hover:bg-transparent rounded-lg sm:rounded-xl lg:rounded-3xl w-31 sm:w-51 lg:w-78 left-0.5 sm:left-0.5 lg:left-1 top-0.5 sm:top-0.5 lg:top-1 absolute">
        <canvas id="greenICanvas" width="1192" height="1664" class="w-full rounded-lg sm:rounded-xl lg:rounded-3xl" bind:this={greenIa} on:click={greenIClick}/>
      </div>
    </div>

    <div class="col-span-4 w-32 sm:w-52 lg:w-80 h-49 sm:h-81 lg:h-124 relative">
      <div class="border border-dark-600 bg-transparent hover:bg-transparent rounded-lg sm:rounded-xl lg:rounded-3xl w-31 sm:w-51 lg:w-78 left-0.5 sm:left-0.5 lg:left-1 absolute duration-500 {blueIIalt ? 'mainCardII' : hoverOverBlueII ? 'downCardII' : 'altCardII'}">
        <canvas id="blueIIaltCanvas" width="1192" height="1664" class="w-full rounded-lg sm:rounded-xl lg:rounded-3xl" bind:this={blueIIb} on:click={blueIIaltClick} on:pointerleave={blueIIaltPointerLeave} on:pointerenter={blueIIaltPointerEnter}/>
        <Checkbox class="absolute top-[4px] sm:top-[7px] lg:top-[11px] right-[1px] sm:right-[5px] lg:right-[9px] w-2 sm:w-3.5 lg:w-5 h-2 sm:h-3.5 lg:h-5" bind:checked={blueIIaltChecked} on:change={checkBlueIIalt}></Checkbox>
      </div>
      <div class="border border-dark-600 bg-transparent hover:bg-transparent rounded-lg sm:rounded-xl lg:rounded-3xl w-31 sm:w-51 lg:w-78 left-0.5 sm:left-0.5 lg:left-1 absolute duration-500 {!blueIIalt ? 'mainCardII' : hoverOverBlueII ? 'downCardII' : 'altCardII'}">
        <canvas id="blueIImainCanvas" width="1192" height="1664" class="w-full rounded-lg sm:rounded-xl lg:rounded-3xl" bind:this={blueIIa} on:click={blueIImainClick} on:pointerleave={blueIImainPointerLeave} on:pointerenter={blueIImainPointerEnter}/>
        <Checkbox class="absolute top-[4px] sm:top-[7px] lg:top-[11px] right-[1px] sm:right-[5px] lg:right-[9px] w-2 sm:w-3.5 lg:w-5 h-2 sm:h-3.5 lg:h-5" bind:checked={blueIImainChecked} on:change={checkBlueIImain}></Checkbox>
      </div>
    </div>
    <div class="col-span-4 w-32 sm:w-52 lg:w-80 h-49 sm:h-81 lg:h-124 relative">
      <div class="border border-dark-600 bg-transparent hover:bg-transparent rounded-lg sm:rounded-xl lg:rounded-3xl w-31 sm:w-51 lg:w-78 left-0.5 sm:left-0.5 lg:left-1 absolute duration-500 {redIIalt ? 'mainCardII' : hoverOverRedII ? 'downCardII' : 'altCardII'}">
        <canvas id="redIIaltCanvas" width="1192" height="1664" class="w-full rounded-lg sm:rounded-xl lg:rounded-3xl" bind:this={redIIb} on:click={redIIaltClick} on:pointerleave={redIIaltPointerLeave} on:pointerenter={redIIaltPointerEnter}/>
        <Checkbox class="absolute top-[4px] sm:top-[7px] lg:top-[11px] right-[1px] sm:right-[5px] lg:right-[9px] w-2 sm:w-3.5 lg:w-5 h-2 sm:h-3.5 lg:h-5" bind:checked={redIIaltChecked} on:change={checkRedIIalt}></Checkbox>
      </div>
      <div class="border border-dark-600 bg-transparent hover:bg-transparent rounded-lg sm:rounded-xl lg:rounded-3xl w-31 sm:w-51 lg:w-78 left-0.5 sm:left-0.5 lg:left-1 absolute duration-500 {!redIIalt ? 'mainCardII' : hoverOverRedII ? 'downCardII' : 'altCardII'}">
        <canvas id="redIImainCanvas" width="1192" height="1664" class="w-full rounded-lg sm:rounded-xl lg:rounded-3xl" bind:this={redIIa} on:click={redIImainClick} on:pointerleave={redIImainPointerLeave} on:pointerenter={redIImainPointerEnter}/>
        <Checkbox class="absolute top-[4px] sm:top-[7px] lg:top-[11px] right-[1px] sm:right-[5px] lg:right-[9px] w-2 sm:w-3.5 lg:w-5 h-2 sm:h-3.5 lg:h-5" bind:checked={redIImainChecked} on:change={checkRedIImain}></Checkbox>
      </div>
    </div>
    <div class="col-span-4 w-32 sm:w-52 lg:w-80 h-49 sm:h-81 lg:h-124 relative">
      <div class="border border-dark-600 bg-transparent hover:bg-transparent rounded-lg sm:rounded-xl lg:rounded-3xl w-31 sm:w-51 lg:w-78 left-0.5 sm:left-0.5 lg:left-1 absolute duration-500 {greenIIalt ? 'mainCardII' : hoverOverGreenII ? 'downCardII' : 'altCardII'}">
        <canvas id="greenIIaltCanvas" width="1192" height="1664" class="w-full rounded-lg sm:rounded-3xl" bind:this={greenIIb} on:click={greenIIaltClick} on:pointerleave={greenIIaltPointerLeave} on:pointerenter={greenIIaltPointerEnter}/>
        <Checkbox class="absolute top-[4px] sm:top-[7px] lg:top-[11px] right-[1px] sm:right-[5px] lg:right-[9px] w-2 sm:w-3.5 lg:w-5 h-2 sm:h-3.5 lg:h-5" bind:checked={greenIIaltChecked} on:change={checkGreenIIalt}></Checkbox>
      </div>
      <div class="border border-dark-600 bg-transparent hover:bg-transparent rounded-lg sm:rounded-xl lg:rounded-3xl w-31 sm:w-51 lg:w-78 left-0.5 sm:left-0.5 lg:left-1 absolute duration-500 {!greenIIalt ? 'mainCardII' : hoverOverGreenII ? 'downCardII' : 'altCardII'}">
        <canvas id="greenIImainCanvas" width="1192" height="1664" class="w-full rounded-lg sm:rounded-xl lg:rounded-3xl" bind:this={greenIIa} on:click={greenIImainClick} on:pointerleave={greenIImainPointerLeave} on:pointerenter={greenIImainPointerEnter}/>
        <Checkbox class="absolute top-[4px] sm:top-[7px] lg:top-[11px] right-[1px] sm:right-[5px] lg:right-[9px] w-2 sm:w-3.5 lg:w-5 h-2 sm:h-3.5 lg:h-5" bind:checked={greenIImainChecked} on:change={checkGreenIImain}></Checkbox>
      </div>
    </div>

    <div class="col-span-4 w-32 sm:w-52 lg:w-80 h-49 sm:h-81 lg:h-124 relative">
      <div class="border border-dark-600 bg-transparent hover:bg-transparent rounded-lg sm:rounded-xl lg:rounded-3xl w-31 sm:w-51 lg:w-78 left-0.5 sm:left-0.5 lg:left-1 absolute duration-500 {blueIIIalt ? 'mainCardIII' : hoverOverBlueIII ? 'downCardIII' : 'altCardIII'}">
        <canvas id="blueIIIaltCanvas" width="1192" height="1664" class="w-full rounded-lg sm:rounded-xl lg:rounded-3xl" bind:this={blueIIIb} on:click={blueIIIaltClick} on:pointerleave={blueIIIaltPointerLeave} on:pointerenter={blueIIIaltPointerEnter}/>
        <Checkbox class="absolute top-[4px] sm:top-[7px] lg:top-[11px] right-[1px] sm:right-[5px] lg:right-[9px] w-2 sm:w-3.5 lg:w-5 h-2 sm:h-3.5 lg:h-5" bind:checked={blueIIIaltChecked} on:change={checkBlueIIIalt}></Checkbox>
      </div>
      <div class="border border-dark-600 bg-transparent hover:bg-transparent rounded-lg sm:rounded-xl lg:rounded-3xl w-31 sm:w-51 lg:w-78 left-0.5 sm:left-0.5 lg:left-1 absolute duration-500 {!blueIIIalt ? 'mainCardIII' : hoverOverBlueIII ? 'downCardIII' : 'altCardIII'}">
        <canvas id="blueIIImainCanvas" width="1192" height="1664" class="w-full rounded-lg sm:rounded-xl lg:rounded-3xl" bind:this={blueIIIa} on:click={blueIIImainClick} on:pointerleave={blueIIImainPointerLeave} on:pointerenter={blueIIImainPointerEnter}/>
        <Checkbox class="absolute top-[4px] sm:top-[7px] lg:top-[11px] right-[1px] sm:right-[5px] lg:right-[9px] w-2 sm:w-3.5 lg:w-5 h-2 sm:h-3.5 lg:h-5" bind:checked={blueIIImainChecked} on:change={checkBlueIIImain}></Checkbox>
      </div>
    </div>
    <div class="col-span-4 w-32 sm:w-52 lg:w-80 h-49 sm:h-81 lg:h-124 relative">
      <div class="border border-dark-600 bg-transparent hover:bg-transparent rounded-lg sm:rounded-xl lg:rounded-3xl w-31 sm:w-51 lg:w-78 left-0.5 sm:left-0.5 lg:left-1 absolute duration-500 {redIIIalt ? 'mainCardIII' : hoverOverRedIII ? 'downCardIII' : 'altCardIII'}">
        <canvas id="redIIIaltCanvas" width="1192" height="1664" class="w-full rounded-lg sm:rounded-xl lg:rounded-3xl" bind:this={redIIIb} on:click={redIIIaltClick} on:pointerleave={redIIIaltPointerLeave} on:pointerenter={redIIIaltPointerEnter}/>
        <Checkbox class="absolute top-[4px] sm:top-[7px] lg:top-[11px] right-[1px] sm:right-[5px] lg:right-[9px] w-2 sm:w-3.5 lg:w-5 h-2 sm:h-3.5 lg:h-5" bind:checked={redIIIaltChecked} on:change={checkRedIIIalt}></Checkbox>
      </div>
      <div class="border border-dark-600 bg-transparent hover:bg-transparent rounded-lg sm:rounded-xl lg:rounded-3xl w-31 sm:w-51 lg:w-78 left-0.5 sm:left-0.5 lg:left-1 absolute duration-500 {!redIIIalt ? 'mainCardIII' : hoverOverRedIII ? 'downCardIII' : 'altCardIII'}">
        <canvas id="redIIImainCanvas" width="1192" height="1664" class="w-full rounded-lg sm:rounded-xl lg:rounded-3xl" bind:this={redIIIa} on:click={redIIImainClick} on:pointerleave={redIIImainPointerLeave} on:pointerenter={redIIImainPointerEnter}/>
        <Checkbox class="absolute top-[4px] sm:top-[7px] lg:top-[11px] right-[1px] sm:right-[5px] lg:right-[9px] w-2 sm:w-3.5 lg:w-5 h-2 sm:h-3.5 lg:h-5" bind:checked={redIIImainChecked} on:change={checkRedIIImain}></Checkbox>
      </div>
    </div>
    <div class="col-span-4 w-32 sm:w-52 lg:w-80 h-49 sm:h-81 lg:h-124 relative">
      <div class="border border-dark-600 bg-transparent hover:bg-transparent rounded-lg sm:rounded-xl lg:rounded-3xl w-31 sm:w-51 lg:w-78 left-0.5 sm:left-0.5 lg:left-1 absolute duration-500 {greenIIIalt ? 'mainCardIII' : hoverOverGreenIII ? 'downCardIII' : 'altCardIII'}">
        <canvas id="greenIIIaltCanvas" width="1192" height="1664" class="w-full rounded-lg sm:rounded-xl lg:rounded-3xl" bind:this={greenIIIb} on:click={greenIIIaltClick} on:pointerleave={greenIIIaltPointerLeave} on:pointerenter={greenIIIaltPointerEnter}/>
        <Checkbox class="absolute top-[4px] sm:top-[7px] lg:top-[11px] right-[1px] sm:right-[5px] lg:right-[9px] w-2 sm:w-3.5 lg:w-5 h-2 sm:h-3.5 lg:h-5" bind:checked={greenIIIaltChecked} on:change={checkGreenIIIalt}></Checkbox>
      </div>
      <div class="border border-dark-600 bg-transparent hover:bg-transparent rounded-lg sm:rounded-xl lg:rounded-3xl w-31 sm:w-51 lg:w-78 left-0.5 sm:left-0.5 lg:left-1 absolute duration-500 {!greenIIIalt ? 'mainCardIII' : hoverOverGreenIII ? 'downCardIII' : 'altCardIII'}">
        <canvas id="greenIIImainCanvas" width="1192" height="1664" class="w-full rounded-lg sm:rounded-xl lg:rounded-3xl" bind:this={greenIIIa} on:click={greenIIImainClick} on:pointerleave={greenIIImainPointerLeave} on:pointerenter={greenIIImainPointerEnter}/>
        <Checkbox class="absolute top-[4px] sm:top-[7px] lg:top-[11px] right-[1px] sm:right-[5px] lg:right-[9px] w-2 sm:w-3.5 lg:w-5 h-2 sm:h-3.5 lg:h-5" bind:checked={greenIIImainChecked} on:change={checkGreenIIImain}></Checkbox>
      </div>
    </div>
    <div id="showNumbers" class="col-span-6 flex-col content-center mt-14 flex items-center">
      <Checkbox bind:checked={showNumbers} disabled={disableShowNumbers}>
        <div style="color: {labelColor(disableShowNumbers)}">
          Show Numbers
        </div>
      </Checkbox>
      <Tooltip triggeredBy="#showNumbers" placement="bottom" class="z-50">Disabled by the developer's request</Tooltip>
    </div>
    <div class="col-span-6 flex-col content-center mt-14 flex items-center">
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
      top: 1.5rem;
      @media (min-width: 640px) {
          top: 36px;
      }
      @media (min-width: 1024px) {
          top: 3.5rem;
      }
      z-index: 20;
  }
  .downCardII {
      top: 3rem;
      @media (min-width: 640px) {
          top: 5rem;
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
      top: 1.5rem;
      @media (min-width: 640px) {
          top: 36px;
      }
      @media (min-width: 1024px) {
          top: 3.5rem;
      }
      z-index: 0;
  }
  .downCardIII {
      top: 3rem;
      @media (min-width: 640px) {
          top: 5rem;
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
