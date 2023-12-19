<script lang="ts">
  import { onMount } from "svelte"
  import {
    Button,
    Checkbox,
    Fileupload,
    Img,
    Input,
    Kbd,
    Label,
    Li,
    List,
    Select,
    Textarea,
  } from "flowbite-svelte"
  import { cardStats, Color, defaultEmoji, Item, Modifier, Stat, stats, Type, ValueSign } from "../../states"
  import { importImages, updateCanvas } from "../../card_painter"
  import { browser } from "$app/environment"
  import { TSMap } from "typescript-map"

  let cardValues = new TSMap<string, TSMap<string, any>>([
    ["gold", new TSMap<string, any>([
      ["color", Color.GOLD],
      ["name", ""],
      ["description", ""],
      ["level", "i"],
      ["handicap", false],
      ["item", Item.ATTACK],
      ["initiativeField", "0"],
      ["primaryActionType", Type.ATTACK],
      ["primaryActionValueField", "0"],
      ["primaryActionValueSign", ValueSign.NONE],
      ["modifier", Modifier.NONE],
      ["modifierValueField", "0"],
      ["modifierValueSign", ValueSign.NONE],
      ["secondaryDefenseValueField", "0"],
      ["secondaryMovementValueField", "0"],
      ["background", undefined],
    ])],
    ["silver", new TSMap<string, any>([
      ["color", Color.SILVER],
      ["name", ""],
      ["description", ""],
      ["level", "i"],
      ["handicap", false],
      ["item", Item.ATTACK],
      ["initiativeField", "0"],
      ["primaryActionType", Type.SKILL],
      ["primaryActionValueField", "0"],
      ["primaryActionValueSign", ValueSign.NONE],
      ["modifier", Modifier.NONE],
      ["modifierValueField", "0"],
      ["modifierValueSign", ValueSign.NONE],
      ["secondaryDefenseValueField", "0"],
      ["secondaryMovementValueField", "0"],
      ["background", undefined],
    ])],
    ["purple", new TSMap<string, any>([
      ["color", Color.PURPLE],
      ["name", ""],
      ["description", ""],
      ["level", "i"],
      ["handicap", false],
      ["item", Item.ATTACK],
      ["initiativeField", "0"],
      ["primaryActionType", Type.ATTACK],
      ["primaryActionValueField", "0"],
      ["primaryActionValueSign", ValueSign.NONE],
      ["modifier", Modifier.NONE],
      ["modifierValueField", "0"],
      ["modifierValueSign", ValueSign.NONE],
      ["secondaryDefenseValueField", "0"],
      ["secondaryMovementValueField", "0"],
      ["background", undefined],
    ])],
    ["blueIa", new TSMap<string, any>([
      ["color", Color.BLUE],
      ["name", ""],
      ["description", ""],
      ["level", "i"],
      ["handicap", false],
      ["item", Item.ATTACK],
      ["initiativeField", "0"],
      ["primaryActionType", Type.SKILL],
      ["primaryActionValueField", "0"],
      ["primaryActionValueSign", ValueSign.NONE],
      ["modifier", Modifier.NONE],
      ["modifierValueField", "0"],
      ["modifierValueSign", ValueSign.NONE],
      ["secondaryDefenseValueField", "0"],
      ["secondaryMovementValueField", "0"],
      ["background", undefined],
    ])],
    ["blueIIa", new TSMap<string, any>([
      ["color", Color.BLUE],
      ["name", ""],
      ["description", ""],
      ["level", "ii"],
      ["handicap", false],
      ["item", Item.ATTACK],
      ["initiativeField", "0"],
      ["primaryActionType", Type.SKILL],
      ["primaryActionValueField", "0"],
      ["primaryActionValueSign", ValueSign.NONE],
      ["modifier", Modifier.NONE],
      ["modifierValueField", "0"],
      ["modifierValueSign", ValueSign.NONE],
      ["secondaryDefenseValueField", "0"],
      ["secondaryMovementValueField", "0"],
      ["background", undefined],
    ])],
    ["blueIIb", new TSMap<string, any>([
      ["color", Color.BLUE],
      ["name", ""],
      ["description", ""],
      ["level", "ii"],
      ["handicap", false],
      ["item", Item.ATTACK],
      ["initiativeField", "0"],
      ["primaryActionType", Type.SKILL],
      ["primaryActionValueField", "0"],
      ["primaryActionValueSign", ValueSign.NONE],
      ["modifier", Modifier.NONE],
      ["modifierValueField", "0"],
      ["modifierValueSign", ValueSign.NONE],
      ["secondaryDefenseValueField", "0"],
      ["secondaryMovementValueField", "0"],
      ["background", undefined],
    ])],
    ["blueIIIa", new TSMap<string, any>([
      ["color", Color.BLUE],
      ["name", ""],
      ["description", ""],
      ["level", "iii"],
      ["handicap", false],
      ["item", Item.ATTACK],
      ["initiativeField", "0"],
      ["primaryActionType", Type.SKILL],
      ["primaryActionValueField", "0"],
      ["primaryActionValueSign", ValueSign.NONE],
      ["modifier", Modifier.NONE],
      ["modifierValueField", "0"],
      ["modifierValueSign", ValueSign.NONE],
      ["secondaryDefenseValueField", "0"],
      ["secondaryMovementValueField", "0"],
      ["background", undefined],
    ])],
    ["blueIIIb", new TSMap<string, any>([
      ["color", Color.BLUE],
      ["name", ""],
      ["description", ""],
      ["level", "iii"],
      ["handicap", false],
      ["item", Item.ATTACK],
      ["initiativeField", "0"],
      ["primaryActionType", Type.SKILL],
      ["primaryActionValueField", "0"],
      ["primaryActionValueSign", ValueSign.NONE],
      ["modifier", Modifier.NONE],
      ["modifierValueField", "0"],
      ["modifierValueSign", ValueSign.NONE],
      ["secondaryDefenseValueField", "0"],
      ["secondaryMovementValueField", "0"],
      ["background", undefined],
    ])],
    ["redIa", new TSMap<string, any>([
      ["color", Color.RED],
      ["name", ""],
      ["description", ""],
      ["level", "i"],
      ["handicap", false],
      ["item", Item.ATTACK],
      ["initiativeField", "0"],
      ["primaryActionType", Type.ATTACK],
      ["primaryActionValueField", "0"],
      ["primaryActionValueSign", ValueSign.NONE],
      ["modifier", Modifier.NONE],
      ["modifierValueField", "0"],
      ["modifierValueSign", ValueSign.NONE],
      ["secondaryDefenseValueField", "0"],
      ["secondaryMovementValueField", "0"],
      ["background", undefined],
    ])],
    ["redIIa", new TSMap<string, any>([
      ["color", Color.RED],
      ["name", ""],
      ["description", ""],
      ["level", "ii"],
      ["handicap", false],
      ["item", Item.ATTACK],
      ["initiativeField", "0"],
      ["primaryActionType", Type.ATTACK],
      ["primaryActionValueField", "0"],
      ["primaryActionValueSign", ValueSign.NONE],
      ["modifier", Modifier.NONE],
      ["modifierValueField", "0"],
      ["modifierValueSign", ValueSign.NONE],
      ["secondaryDefenseValueField", "0"],
      ["secondaryMovementValueField", "0"],
      ["background", undefined],
    ])],
    ["redIIb", new TSMap<string, any>([
      ["color", Color.RED],
      ["name", ""],
      ["description", ""],
      ["level", "ii"],
      ["handicap", false],
      ["item", Item.ATTACK],
      ["initiativeField", "0"],
      ["primaryActionType", Type.ATTACK],
      ["primaryActionValueField", "0"],
      ["primaryActionValueSign", ValueSign.NONE],
      ["modifier", Modifier.NONE],
      ["modifierValueField", "0"],
      ["modifierValueSign", ValueSign.NONE],
      ["secondaryDefenseValueField", "0"],
      ["secondaryMovementValueField", "0"],
      ["background", undefined],
    ])],
    ["redIIIa", new TSMap<string, any>([
      ["color", Color.RED],
      ["name", ""],
      ["description", ""],
      ["level", "iii"],
      ["handicap", false],
      ["item", Item.ATTACK],
      ["initiativeField", "0"],
      ["primaryActionType", Type.ATTACK],
      ["primaryActionValueField", "0"],
      ["primaryActionValueSign", ValueSign.NONE],
      ["modifier", Modifier.NONE],
      ["modifierValueField", "0"],
      ["modifierValueSign", ValueSign.NONE],
      ["secondaryDefenseValueField", "0"],
      ["secondaryMovementValueField", "0"],
      ["background", undefined],
    ])],
    ["redIIIb", new TSMap<string, any>([
      ["color", Color.RED],
      ["name", ""],
      ["description", ""],
      ["level", "iii"],
      ["handicap", false],
      ["item", Item.ATTACK],
      ["initiativeField", "0"],
      ["primaryActionType", Type.ATTACK],
      ["primaryActionValueField", "0"],
      ["primaryActionValueSign", ValueSign.NONE],
      ["modifier", Modifier.NONE],
      ["modifierValueField", "0"],
      ["modifierValueSign", ValueSign.NONE],
      ["secondaryDefenseValueField", "0"],
      ["secondaryMovementValueField", "0"],
      ["background", undefined],
    ])],
    ["greenIa", new TSMap<string, any>([
      ["color", Color.GREEN],
      ["name", ""],
      ["description", ""],
      ["level", "i"],
      ["handicap", false],
      ["item", Item.ATTACK],
      ["initiativeField", "0"],
      ["primaryActionType", Type.SKILL],
      ["primaryActionValueField", "0"],
      ["primaryActionValueSign", ValueSign.NONE],
      ["modifier", Modifier.NONE],
      ["modifierValueField", "0"],
      ["modifierValueSign", ValueSign.NONE],
      ["secondaryDefenseValueField", "0"],
      ["secondaryMovementValueField", "0"],
      ["background", undefined],
    ])],
    ["greenIIa", new TSMap<string, any>([
      ["color", Color.GREEN],
      ["name", ""],
      ["description", ""],
      ["level", "ii"],
      ["handicap", false],
      ["item", Item.ATTACK],
      ["initiativeField", "0"],
      ["primaryActionType", Type.SKILL],
      ["primaryActionValueField", "0"],
      ["primaryActionValueSign", ValueSign.NONE],
      ["modifier", Modifier.NONE],
      ["modifierValueField", "0"],
      ["modifierValueSign", ValueSign.NONE],
      ["secondaryDefenseValueField", "0"],
      ["secondaryMovementValueField", "0"],
      ["background", undefined],
    ])],
    ["greenIIb", new TSMap<string, any>([
      ["color", Color.GREEN],
      ["name", ""],
      ["description", ""],
      ["level", "ii"],
      ["handicap", false],
      ["item", Item.ATTACK],
      ["initiativeField", "0"],
      ["primaryActionType", Type.SKILL],
      ["primaryActionValueField", "0"],
      ["primaryActionValueSign", ValueSign.NONE],
      ["modifier", Modifier.NONE],
      ["modifierValueField", "0"],
      ["modifierValueSign", ValueSign.NONE],
      ["secondaryDefenseValueField", "0"],
      ["secondaryMovementValueField", "0"],
      ["background", undefined],
    ])],
    ["greenIIIa", new TSMap<string, any>([
      ["color", Color.GREEN],
      ["name", ""],
      ["description", ""],
      ["level", "iii"],
      ["handicap", false],
      ["item", Item.ATTACK],
      ["initiativeField", "0"],
      ["primaryActionType", Type.SKILL],
      ["primaryActionValueField", "0"],
      ["primaryActionValueSign", ValueSign.NONE],
      ["modifier", Modifier.NONE],
      ["modifierValueField", "0"],
      ["modifierValueSign", ValueSign.NONE],
      ["secondaryDefenseValueField", "0"],
      ["secondaryMovementValueField", "0"],
      ["background", undefined],
    ])],
    ["greenIIIb", new TSMap<string, any>([
      ["color", Color.GREEN],
      ["name", ""],
      ["description", ""],
      ["level", "iii"],
      ["handicap", false],
      ["item", Item.ATTACK],
      ["initiativeField", "0"],
      ["primaryActionType", Type.SKILL],
      ["primaryActionValueField", "0"],
      ["primaryActionValueSign", ValueSign.NONE],
      ["modifier", Modifier.NONE],
      ["modifierValueField", "0"],
      ["modifierValueSign", ValueSign.NONE],
      ["secondaryDefenseValueField", "0"],
      ["secondaryMovementValueField", "0"],
      ["background", undefined],
    ])],
  ])

  let currentCard = "gold"

  function switchCurrentCard(newCard: string) {
    updateCurrentCard()
    currentCard = newCard
    getCurrentCard()
  }

  function updateCurrentCard() {
    cardValues.get(currentCard)!.set("color", color)
    cardValues.get(currentCard)!.set("name", name)
    cardValues.get(currentCard)!.set("description", description)
    cardValues.get(currentCard)!.set("level", level)
    cardValues.get(currentCard)!.set("handicap", handicap)
    cardValues.get(currentCard)!.set("item", item)
    cardValues.get(currentCard)!.set("initiativeField", initiativeField)
    cardValues.get(currentCard)!.set("primaryActionType", primaryActionType)
    cardValues.get(currentCard)!.set("primaryActionValueField", primaryActionValueField)
    cardValues.get(currentCard)!.set("primaryActionValueSign", primaryActionValueSign)
    cardValues.get(currentCard)!.set("modifier", modifier)
    cardValues.get(currentCard)!.set("modifierValueField", modifierValueField)
    cardValues.get(currentCard)!.set("modifierValueSign", modifierValueSign)
    cardValues.get(currentCard)!.set("secondaryDefenseValueField", secondaryDefenseValueField)
    cardValues.get(currentCard)!.set("secondaryMovementValueField", secondaryMovementValueField)
    cardValues.get(currentCard)!.set("background", background)
  }

  function getCurrentCard() {
    color = cardValues.get(currentCard)!.get("color")!
    name = cardValues.get(currentCard)!.get("name")!
    description = cardValues.get(currentCard)!.get("description")!
    level = cardValues.get(currentCard)!.get("level")!
    handicap = cardValues.get(currentCard)!.get("handicap")!
    item = cardValues.get(currentCard)!.get("item")!
    initiativeField = cardValues.get(currentCard)!.get("initiativeField")!
    primaryActionType = cardValues.get(currentCard)!.get("primaryActionType")!
    primaryActionValueField = cardValues.get(currentCard)!.get("primaryActionValueField")!
    primaryActionValueSign = cardValues.get(currentCard)!.get("primaryActionValueSign")!
    modifier = cardValues.get(currentCard)!.get("modifier")!
    modifierValueField = cardValues.get(currentCard)!.get("modifierValueField")!
    modifierValueSign = cardValues.get(currentCard)!.get("modifierValueSign")!
    secondaryDefenseValueField = cardValues.get(currentCard)!.get("secondaryDefenseValueField")!
    secondaryMovementValueField = cardValues.get(currentCard)!.get("secondaryMovementValueField")!
    background = cardValues.get(currentCard)!.get("background")!
  }

  let oldAttackStat = 0
  let oldDefenseStat = 0
  let oldInitiativeStat = 0
  let oldMovementStat = 0

  let attackStat = 4
  let defenseStat = 4
  let initiativeStat = 4
  let movementStat = 4

  let color = Color.GOLD
  let name = ""
  let description = ""
  let level = "i"
  let handicap = false
  let item = Item.ATTACK
  let initiativeField = "0"
  let primaryActionType = Type.ATTACK
  let primaryActionValueField = "0"
  let primaryActionValueSign = ValueSign.NONE
  let modifier = Modifier.NONE
  let modifierValueField = "0"
  let modifierValueSign = ValueSign.NONE
  let secondaryDefenseValueField = "0"
  let secondaryMovementValueField = "0"

  $: initiative = fieldToNumber(initiativeField)
  $: primaryActionValue = fieldToNumber(primaryActionValueField)
  $: modifierValue = fieldToNumber(modifierValueField)
  $: secondaryDefenseValue = fieldToNumber(secondaryDefenseValueField)
  $: secondaryMovementValue = fieldToNumber(secondaryMovementValueField)

  function fieldToNumber(field: string) {
    return +field.replace(/[^0-9]/, "")
  }

  let imagesLoaded = false

  let background: HTMLImageElement | undefined

  let customEmoji: Array<[string, HTMLImageElement]> = []
  let tempCustomEmoji: string | null

  $: minAttackStatLevelValue = 0
  $: maxAttackStatLevelValue = 0
  $: minDefenseStatLevelValue = 0
  $: maxDefenseStatLevelValue = 0
  $: minInitiativeStatLevelValue = 0
  $: maxInitiativeStatLevelValue = 0
  $: minMovementStatLevelValue = 0
  $: maxMovementStatLevelValue = 0

  const onBgSelected = (event: Event) => {
    const file = (event.target as HTMLInputElement).files![0]
    const reader = new FileReader()
    reader.readAsDataURL(file)
    reader.onload = event => {
      const image = new Image()
      image.src = event.target!.result! as string
      image.onload = () => {
        background = image
      }
    }
  }

  const onEmojiSelected = (event: Event, i: number) => {
    const file = (event.target as HTMLInputElement).files![0]
    const reader = new FileReader()
    reader.readAsDataURL(file)
    reader.onload = event => {
      const image = new Image()
      image.src = event.target!.result! as string
      image.onload = () => {
        if (i == customEmoji.length)
          customEmoji = [...customEmoji, [tempCustomEmoji!, image]]
        else
          customEmoji[i][1] = image
        tempCustomEmoji = null
      }
    }
  }

  const onJsonSelected = (event: Event) => {
    const file = (event.target as HTMLInputElement).files![0]
    const reader = new FileReader()
    reader.readAsText(file)
    reader.onload = event => {
      const info = new TSMap().fromJSON(JSON.parse(event.target!.result), true)

      oldAttackStat = info.get("attackStat")
      oldDefenseStat = info.get("defenseStat")
      oldInitiativeStat = info.get("initiativeStat")
      oldMovementStat = info.get("movementStat")
      attackStat = oldAttackStat
      defenseStat = oldDefenseStat
      initiativeStat = oldInitiativeStat
      movementStat = oldMovementStat

      cardValues = info.get("cardValues")

      getCurrentCard()
    }
  }

  $: {
    attackStat

    if (attackStat != oldAttackStat) {

      oldAttackStat = attackStat

      if (cardValues.get("gold")!.get("primaryActionType") == Type.ATTACK)
        cardValues.get("gold")!.set("primaryActionValueField", cardStats.get(Color.GOLD)!.get(Stat.ATTACK)!.get("i")![attackStat - 1].toString())
      if (cardValues.get("redIa")!.get("primaryActionType") == Type.ATTACK)
        cardValues.get("redIa")!.set("primaryActionValueField", cardStats.get(Color.RED)!.get(Stat.ATTACK)!.get("i")![attackStat - 1].toString())
      if (cardValues.get("redIIa")!.get("primaryActionType") == Type.ATTACK)
        cardValues.get("redIIa")!.set("primaryActionValueField", cardStats.get(Color.RED)!.get(Stat.ATTACK)!.get("ii")![attackStat - 1].toString())
      if (cardValues.get("redIIb")!.get("primaryActionType") == Type.ATTACK)
        cardValues.get("redIIb")!.set("primaryActionValueField", cardStats.get(Color.RED)!.get(Stat.ATTACK)!.get("ii")![attackStat - 1].toString())
      if (cardValues.get("redIIIa")!.get("primaryActionType") == Type.ATTACK)
        cardValues.get("redIIIa")!.set("primaryActionValueField", cardStats.get(Color.RED)!.get(Stat.ATTACK)!.get("iii")![attackStat - 1].toString())
      if (cardValues.get("redIIIb")!.get("primaryActionType") == Type.ATTACK)
        cardValues.get("redIIIb")!.set("primaryActionValueField", cardStats.get(Color.RED)!.get(Stat.ATTACK)!.get("iii")![attackStat - 1].toString())

      primaryActionValueField = cardValues.get(currentCard)!.get("primaryActionValueField")!
    }
  }

  $: {
    defenseStat

    if (defenseStat != oldDefenseStat) {

      oldDefenseStat = defenseStat

      if ([Type.DEFENSE, Type.DEFENSE_SKILL].includes(cardValues.get("gold")!.get("primaryActionType")))
        cardValues.get("gold")!.set("primaryActionValueField", cardStats.get(Color.GOLD)!.get(Stat.DEFENSE)!.get("i")![defenseStat - 1].toString())
      else
        cardValues.get("gold")!.set("secondaryDefenseValueField", cardStats.get(Color.GOLD)!.get(Stat.DEFENSE)!.get("i")![defenseStat - 1].toString())
      if ([Type.DEFENSE, Type.DEFENSE_SKILL].includes(cardValues.get("silver")!.get("primaryActionType")))
        cardValues.get("silver")!.set("primaryActionValueField", cardStats.get(Color.SILVER)!.get(Stat.DEFENSE)!.get("i")![defenseStat - 1].toString())
      else
        cardValues.get("silver")!.set("secondaryDefenseValueField", cardStats.get(Color.SILVER)!.get(Stat.DEFENSE)!.get("i")![defenseStat - 1].toString())
      if ([Type.DEFENSE, Type.DEFENSE_SKILL].includes(cardValues.get("blueIa")!.get("primaryActionType")))
        cardValues.get("blueIa")!.set("primaryActionValueField", cardStats.get(Color.BLUE)!.get(Stat.DEFENSE)!.get("i")![defenseStat - 1].toString())
      else
        cardValues.get("blueIa")!.set("secondaryDefenseValueField", cardStats.get(Color.BLUE)!.get(Stat.DEFENSE)!.get("i")![defenseStat - 1].toString())
      if ([Type.DEFENSE, Type.DEFENSE_SKILL].includes(cardValues.get("blueIIa")!.get("primaryActionType")))
        cardValues.get("blueIIa")!.set("primaryActionValueField", cardStats.get(Color.BLUE)!.get(Stat.DEFENSE)!.get("ii")![defenseStat - 1].toString())
      else
        cardValues.get("blueIIa")!.set("secondaryDefenseValueField", cardStats.get(Color.BLUE)!.get(Stat.DEFENSE)!.get("ii")![defenseStat - 1].toString())
      if ([Type.DEFENSE, Type.DEFENSE_SKILL].includes(cardValues.get("blueIIb")!.get("primaryActionType")))
        cardValues.get("blueIIb")!.set("primaryActionValueField", cardStats.get(Color.BLUE)!.get(Stat.DEFENSE)!.get("ii")![defenseStat - 1].toString())
      else
        cardValues.get("blueIIb")!.set("secondaryDefenseValueField", cardStats.get(Color.BLUE)!.get(Stat.DEFENSE)!.get("ii")![defenseStat - 1].toString())
      if ([Type.DEFENSE, Type.DEFENSE_SKILL].includes(cardValues.get("blueIIIa")!.get("primaryActionType")))
        cardValues.get("blueIIIa")!.set("primaryActionValueField", cardStats.get(Color.BLUE)!.get(Stat.DEFENSE)!.get("iii")![defenseStat - 1].toString())
      else
        cardValues.get("blueIIIa")!.set("secondaryDefenseValueField", cardStats.get(Color.BLUE)!.get(Stat.DEFENSE)!.get("iii")![defenseStat - 1].toString())
      if ([Type.DEFENSE, Type.DEFENSE_SKILL].includes(cardValues.get("blueIIIb")!.get("primaryActionType")))
        cardValues.get("blueIIIb")!.set("primaryActionValueField", cardStats.get(Color.BLUE)!.get(Stat.DEFENSE)!.get("iii")![defenseStat - 1].toString())
      else
        cardValues.get("blueIIIb")!.set("secondaryDefenseValueField", cardStats.get(Color.BLUE)!.get(Stat.DEFENSE)!.get("iii")![defenseStat - 1].toString())
      if ([Type.DEFENSE, Type.DEFENSE_SKILL].includes(cardValues.get("redIa")!.get("primaryActionType")))
        cardValues.get("redIa")!.set("primaryActionValueField", cardStats.get(Color.RED)!.get(Stat.DEFENSE)!.get("i")![defenseStat - 1].toString())
      else
        cardValues.get("redIa")!.set("secondaryDefenseValueField", cardStats.get(Color.RED)!.get(Stat.DEFENSE)!.get("i")![defenseStat - 1].toString())
      if ([Type.DEFENSE, Type.DEFENSE_SKILL].includes(cardValues.get("redIIa")!.get("primaryActionType")))
        cardValues.get("redIIa")!.set("primaryActionValueField", cardStats.get(Color.RED)!.get(Stat.DEFENSE)!.get("ii")![defenseStat - 1].toString())
      else
        cardValues.get("redIIa")!.set("secondaryDefenseValueField", cardStats.get(Color.RED)!.get(Stat.DEFENSE)!.get("ii")![defenseStat - 1].toString())
      if ([Type.DEFENSE, Type.DEFENSE_SKILL].includes(cardValues.get("redIIb")!.get("primaryActionType")))
        cardValues.get("redIIb")!.set("primaryActionValueField", cardStats.get(Color.RED)!.get(Stat.DEFENSE)!.get("ii")![defenseStat - 1].toString())
      else
        cardValues.get("redIIb")!.set("secondaryDefenseValueField", cardStats.get(Color.RED)!.get(Stat.DEFENSE)!.get("ii")![defenseStat - 1].toString())
      if ([Type.DEFENSE, Type.DEFENSE_SKILL].includes(cardValues.get("redIIIa")!.get("primaryActionType")))
        cardValues.get("redIIIa")!.set("primaryActionValueField", cardStats.get(Color.RED)!.get(Stat.DEFENSE)!.get("iii")![defenseStat - 1].toString())
      else
        cardValues.get("redIIIa")!.set("secondaryDefenseValueField", cardStats.get(Color.RED)!.get(Stat.DEFENSE)!.get("iii")![defenseStat - 1].toString())
      if ([Type.DEFENSE, Type.DEFENSE_SKILL].includes(cardValues.get("redIIIb")!.get("primaryActionType")))
        cardValues.get("redIIIb")!.set("primaryActionValueField", cardStats.get(Color.RED)!.get(Stat.DEFENSE)!.get("iii")![defenseStat - 1].toString())
      else
        cardValues.get("redIIIb")!.set("secondaryDefenseValueField", cardStats.get(Color.RED)!.get(Stat.DEFENSE)!.get("iii")![defenseStat - 1].toString())
      if ([Type.DEFENSE, Type.DEFENSE_SKILL].includes(cardValues.get("greenIa")!.get("primaryActionType")))
        cardValues.get("greenIa")!.set("primaryActionValueField", cardStats.get(Color.GREEN)!.get(Stat.DEFENSE)!.get("i")![defenseStat - 1].toString())
      else
        cardValues.get("greenIa")!.set("secondaryDefenseValueField", cardStats.get(Color.GREEN)!.get(Stat.DEFENSE)!.get("i")![defenseStat - 1].toString())
      if ([Type.DEFENSE, Type.DEFENSE_SKILL].includes(cardValues.get("greenIIa")!.get("primaryActionType")))
        cardValues.get("greenIIa")!.set("primaryActionValueField", cardStats.get(Color.GREEN)!.get(Stat.DEFENSE)!.get("ii")![defenseStat - 1].toString())
      else
        cardValues.get("greenIIa")!.set("secondaryDefenseValueField", cardStats.get(Color.GREEN)!.get(Stat.DEFENSE)!.get("ii")![defenseStat - 1].toString())
      if ([Type.DEFENSE, Type.DEFENSE_SKILL].includes(cardValues.get("greenIIb")!.get("primaryActionType")))
        cardValues.get("greenIIb")!.set("primaryActionValueField", cardStats.get(Color.GREEN)!.get(Stat.DEFENSE)!.get("ii")![defenseStat - 1].toString())
      else
        cardValues.get("greenIIb")!.set("secondaryDefenseValueField", cardStats.get(Color.GREEN)!.get(Stat.DEFENSE)!.get("ii")![defenseStat - 1].toString())
      if ([Type.DEFENSE, Type.DEFENSE_SKILL].includes(cardValues.get("greenIIIa")!.get("primaryActionType")))
        cardValues.get("greenIIIa")!.set("primaryActionValueField", cardStats.get(Color.GREEN)!.get(Stat.DEFENSE)!.get("iii")![defenseStat - 1].toString())
      else
        cardValues.get("greenIIIa")!.set("secondaryDefenseValueField", cardStats.get(Color.GREEN)!.get(Stat.DEFENSE)!.get("iii")![defenseStat - 1].toString())
      if (cardValues.get("greenIIIb")!.get("primaryActionType") == Type.DEFENSE)
        cardValues.get("greenIIIb")!.set("primaryActionValueField", cardStats.get(Color.GREEN)!.get(Stat.DEFENSE)!.get("iii")![defenseStat - 1].toString())
      else
        cardValues.get("greenIIIb")!.set("secondaryDefenseValueField", cardStats.get(Color.GREEN)!.get(Stat.DEFENSE)!.get("iii")![defenseStat - 1].toString())

      primaryActionValueField = cardValues.get(currentCard)!.get("primaryActionValueField")!
      secondaryDefenseValueField = cardValues.get(currentCard)!.get("secondaryDefenseValueField")!
    }
  }

  $: {
    initiativeStat

    if (initiativeStat != oldInitiativeStat) {

      oldInitiativeStat = initiativeStat

      cardValues.get("gold")!.set("initiativeField", cardStats.get(Color.GOLD)!.get(Stat.INITIATIVE)!.get("i")![initiativeStat - 1].toString())
      cardValues.get("blueIa")!.set("initiativeField", cardStats.get(Color.BLUE)!.get(Stat.INITIATIVE)!.get("i")![initiativeStat - 1].toString())
      cardValues.get("blueIIa")!.set("initiativeField", cardStats.get(Color.BLUE)!.get(Stat.INITIATIVE)!.get("ii")![initiativeStat - 1].toString())
      cardValues.get("blueIIb")!.set("initiativeField", cardStats.get(Color.BLUE)!.get(Stat.INITIATIVE)!.get("ii")![initiativeStat - 1].toString())
      cardValues.get("blueIIIa")!.set("initiativeField", cardStats.get(Color.BLUE)!.get(Stat.INITIATIVE)!.get("iii")![initiativeStat - 1].toString())
      cardValues.get("blueIIIb")!.set("initiativeField", cardStats.get(Color.BLUE)!.get(Stat.INITIATIVE)!.get("iii")![initiativeStat - 1].toString())
      cardValues.get("redIa")!.set("initiativeField", cardStats.get(Color.RED)!.get(Stat.INITIATIVE)!.get("i")![initiativeStat - 1].toString())
      cardValues.get("redIIa")!.set("initiativeField", cardStats.get(Color.RED)!.get(Stat.INITIATIVE)!.get("ii")![initiativeStat - 1].toString())
      cardValues.get("redIIb")!.set("initiativeField", cardStats.get(Color.RED)!.get(Stat.INITIATIVE)!.get("ii")![initiativeStat - 1].toString())
      cardValues.get("redIIIa")!.set("initiativeField", cardStats.get(Color.RED)!.get(Stat.INITIATIVE)!.get("iii")![initiativeStat - 1].toString())
      cardValues.get("redIIIb")!.set("initiativeField", cardStats.get(Color.RED)!.get(Stat.INITIATIVE)!.get("iii")![initiativeStat - 1].toString())
      cardValues.get("greenIa")!.set("initiativeField", cardStats.get(Color.GREEN)!.get(Stat.INITIATIVE)!.get("i")![initiativeStat - 1].toString())
      cardValues.get("greenIIa")!.set("initiativeField", cardStats.get(Color.GREEN)!.get(Stat.INITIATIVE)!.get("ii")![initiativeStat - 1].toString())
      cardValues.get("greenIIb")!.set("initiativeField", cardStats.get(Color.GREEN)!.get(Stat.INITIATIVE)!.get("ii")![initiativeStat - 1].toString())
      cardValues.get("greenIIIa")!.set("initiativeField", cardStats.get(Color.GREEN)!.get(Stat.INITIATIVE)!.get("iii")![initiativeStat - 1].toString())
      cardValues.get("greenIIIb")!.set("initiativeField", cardStats.get(Color.GREEN)!.get(Stat.INITIATIVE)!.get("iii")![initiativeStat - 1].toString())

      initiativeField = cardValues.get(currentCard)!.get("initiativeField")!
    }
  }

  $: {
    movementStat

    if (movementStat != oldMovementStat) {

      oldMovementStat = movementStat

      if (cardValues.get("gold")!.get("primaryActionType") == Type.MOVEMENT)
        cardValues.get("gold")!.set("primaryActionValueField", cardStats.get(Color.GOLD)!.get(Stat.MOVEMENT)!.get("i")![movementStat - 1].toString())
      else
        cardValues.get("gold")!.set("secondaryMovementValueField", cardStats.get(Color.GOLD)!.get(Stat.MOVEMENT)!.get("i")![movementStat - 1].toString())
      if (cardValues.get("blueIa")!.get("primaryActionType") == Type.MOVEMENT)
        cardValues.get("blueIa")!.set("primaryActionValueField", cardStats.get(Color.BLUE)!.get(Stat.MOVEMENT)!.get("i")![movementStat - 1].toString())
      else
        cardValues.get("blueIa")!.set("secondaryMovementValueField", cardStats.get(Color.BLUE)!.get(Stat.MOVEMENT)!.get("i")![movementStat - 1].toString())
      if (cardValues.get("blueIIa")!.get("primaryActionType") == Type.MOVEMENT)
        cardValues.get("blueIIa")!.set("primaryActionValueField", cardStats.get(Color.BLUE)!.get(Stat.MOVEMENT)!.get("ii")![movementStat - 1].toString())
      else
        cardValues.get("blueIIa")!.set("secondaryMovementValueField", cardStats.get(Color.BLUE)!.get(Stat.MOVEMENT)!.get("ii")![movementStat - 1].toString())
      if (cardValues.get("blueIIb")!.get("primaryActionType") == Type.MOVEMENT)
        cardValues.get("blueIIb")!.set("primaryActionValueField", cardStats.get(Color.BLUE)!.get(Stat.MOVEMENT)!.get("ii")![movementStat - 1].toString())
      else
        cardValues.get("blueIIb")!.set("secondaryMovementValueField", cardStats.get(Color.BLUE)!.get(Stat.MOVEMENT)!.get("ii")![movementStat - 1].toString())
      if (cardValues.get("blueIIIa")!.get("primaryActionType") == Type.MOVEMENT)
        cardValues.get("blueIIIa")!.set("primaryActionValueField", cardStats.get(Color.BLUE)!.get(Stat.MOVEMENT)!.get("iii")![movementStat - 1].toString())
      else
        cardValues.get("blueIIIa")!.set("secondaryMovementValueField", cardStats.get(Color.BLUE)!.get(Stat.MOVEMENT)!.get("iii")![movementStat - 1].toString())
      if (cardValues.get("blueIIIb")!.get("primaryActionType") == Type.MOVEMENT)
        cardValues.get("blueIIIb")!.set("primaryActionValueField", cardStats.get(Color.BLUE)!.get(Stat.MOVEMENT)!.get("iii")![movementStat - 1].toString())
      else
        cardValues.get("blueIIIb")!.set("secondaryMovementValueField", cardStats.get(Color.BLUE)!.get(Stat.MOVEMENT)!.get("iii")![movementStat - 1].toString())
      if (cardValues.get("redIa")!.get("primaryActionType") == Type.MOVEMENT)
        cardValues.get("redIa")!.set("primaryActionValueField", cardStats.get(Color.RED)!.get(Stat.MOVEMENT)!.get("i")![movementStat - 1].toString())
      else
        cardValues.get("redIa")!.set("secondaryMovementValueField", cardStats.get(Color.RED)!.get(Stat.MOVEMENT)!.get("i")![movementStat - 1].toString())
      if (cardValues.get("redIIa")!.get("primaryActionType") == Type.MOVEMENT)
        cardValues.get("redIIa")!.set("primaryActionValueField", cardStats.get(Color.RED)!.get(Stat.MOVEMENT)!.get("ii")![movementStat - 1].toString())
      else
        cardValues.get("redIIa")!.set("secondaryMovementValueField", cardStats.get(Color.RED)!.get(Stat.MOVEMENT)!.get("ii")![movementStat - 1].toString())
      if (cardValues.get("redIIb")!.get("primaryActionType") == Type.MOVEMENT)
        cardValues.get("redIIb")!.set("primaryActionValueField", cardStats.get(Color.RED)!.get(Stat.MOVEMENT)!.get("ii")![movementStat - 1].toString())
      else
        cardValues.get("redIIb")!.set("secondaryMovementValueField", cardStats.get(Color.RED)!.get(Stat.MOVEMENT)!.get("ii")![movementStat - 1].toString())
      if (cardValues.get("redIIIa")!.get("primaryActionType") == Type.MOVEMENT)
        cardValues.get("redIIIa")!.set("primaryActionValueField", cardStats.get(Color.RED)!.get(Stat.MOVEMENT)!.get("iii")![movementStat - 1].toString())
      else
        cardValues.get("redIIIa")!.set("secondaryMovementValueField", cardStats.get(Color.RED)!.get(Stat.MOVEMENT)!.get("iii")![movementStat - 1].toString())
      if (cardValues.get("redIIIb")!.get("primaryActionType") == Type.MOVEMENT)
        cardValues.get("redIIIb")!.set("primaryActionValueField", cardStats.get(Color.RED)!.get(Stat.MOVEMENT)!.get("iii")![movementStat - 1].toString())
      else
        cardValues.get("redIIIb")!.set("secondaryMovementValueField", cardStats.get(Color.RED)!.get(Stat.MOVEMENT)!.get("iii")![movementStat - 1].toString())
      if (cardValues.get("greenIa")!.get("primaryActionType") == Type.MOVEMENT)
        cardValues.get("greenIa")!.set("primaryActionValueField", cardStats.get(Color.GREEN)!.get(Stat.MOVEMENT)!.get("i")![movementStat - 1].toString())
      else
        cardValues.get("greenIa")!.set("secondaryMovementValueField", cardStats.get(Color.GREEN)!.get(Stat.MOVEMENT)!.get("i")![movementStat - 1].toString())
      if (cardValues.get("greenIIa")!.get("primaryActionType") == Type.MOVEMENT)
        cardValues.get("greenIIa")!.set("primaryActionValueField", cardStats.get(Color.GREEN)!.get(Stat.MOVEMENT)!.get("ii")![movementStat - 1].toString())
      else
        cardValues.get("greenIIa")!.set("secondaryMovementValueField", cardStats.get(Color.GREEN)!.get(Stat.MOVEMENT)!.get("ii")![movementStat - 1].toString())
      if (cardValues.get("greenIIb")!.get("primaryActionType") == Type.MOVEMENT)
        cardValues.get("greenIIb")!.set("primaryActionValueField", cardStats.get(Color.GREEN)!.get(Stat.MOVEMENT)!.get("ii")![movementStat - 1].toString())
      else
        cardValues.get("greenIIb")!.set("secondaryMovementValueField", cardStats.get(Color.GREEN)!.get(Stat.MOVEMENT)!.get("ii")![movementStat - 1].toString())
      if (cardValues.get("greenIIIa")!.get("primaryActionType") == Type.MOVEMENT)
        cardValues.get("greenIIIa")!.set("primaryActionValueField", cardStats.get(Color.GREEN)!.get(Stat.MOVEMENT)!.get("iii")![movementStat - 1].toString())
      else
        cardValues.get("greenIIIa")!.set("secondaryMovementValueField", cardStats.get(Color.GREEN)!.get(Stat.MOVEMENT)!.get("iii")![movementStat - 1].toString())
      if (cardValues.get("greenIIIb")!.get("primaryActionType") == Type.MOVEMENT)
        cardValues.get("greenIIIb")!.set("primaryActionValueField", cardStats.get(Color.GREEN)!.get(Stat.MOVEMENT)!.get("iii")![movementStat - 1].toString())
      else
        cardValues.get("greenIIIb")!.set("secondaryMovementValueField", cardStats.get(Color.GREEN)!.get(Stat.MOVEMENT)!.get("iii")![movementStat - 1].toString())

      primaryActionValueField = cardValues.get(currentCard)!.get("primaryActionValueField")!
      secondaryMovementValueField = cardValues.get(currentCard)!.get("secondaryMovementValueField")!
    }
  }

  $: {
    color
    name
    description
    level
    handicap
    item
    initiative
    primaryActionType
    primaryActionValue
    primaryActionValueSign
    modifier
    modifierValue
    modifierValueSign
    secondaryDefenseValue
    secondaryMovementValue
    background

    if (imagesLoaded) {
      update()
    }

    updateCurrentCard()

    minAttackStatLevelValue = minAttackStatLevel()
    maxAttackStatLevelValue = maxAttackStatLevel()
    minDefenseStatLevelValue = minDefenseStatLevel()
    maxDefenseStatLevelValue = maxDefenseStatLevel()
    minInitiativeStatLevelValue = minInitiativeStatLevel()
    maxInitiativeStatLevelValue = maxInitiativeStatLevel()
    minMovementStatLevelValue = minMovementStatLevel()
    maxMovementStatLevelValue = maxMovementStatLevel()
  }

  let canvas: HTMLCanvasElement
  let context: CanvasRenderingContext2D

  $: statImages = new Map()

  onMount(async () => {
    context = canvas.getContext("2d")!

    for (const stat of stats) {
      statImages.set(stat, (await import(`../../lib/images/stat_icons/${stat}_white.png`)).default)
    }
    statImages = statImages

    Promise.all([
      document.fonts.ready,
      importImages(),
    ])
      .then(() => {
        imagesLoaded = true
      })
  })

  const update = () => updateCanvas(
    canvas,
    context,
    customEmoji,
    background,
    color,
    handicap,
    name,
    description,
    level,
    item,
    initiative,
    primaryActionType,
    primaryActionValue,
    primaryActionValueSign,
    modifier,
    modifierValue,
    modifierValueSign,
    secondaryMovementValue,
    secondaryDefenseValue,
  )

  const descriptionProps = {
    rows: 4,
  }

  // const colors = [
  //   { value: Color.GOLD, name: "Gold" },
  //   { value: Color.SILVER, name: "Silver" },
  //   { value: Color.RED, name: "Red" },
  //   { value: Color.BLUE, name: "Blue" },
  //   { value: Color.GREEN, name: "Green" },
  //   { value: Color.PURPLE, name: "Purple" },
  // ]
  //
  // const levels = [
  //   { value: "i", name: "I" },
  //   { value: "ii", name: "II" },
  //   { value: "iii", name: "III" },
  // ]

  const items = [
    { value: Item.ATTACK, name: "Attack" },
    { value: Item.DEFENSE, name: "Defense" },
    { value: Item.INITIATIVE, name: "Initiative" },
    { value: Item.RANGE, name: "Range" },
    { value: Item.AREA, name: "Area" },
    { value: Item.MOVEMENT, name: "Movement" },
  ]

  const actionTypes = [
    { value: Type.SKILL, name: "Skill" },
    { value: Type.ATTACK, name: "Attack" },
    { value: Type.MOVEMENT, name: "Movement" },
    { value: Type.DEFENSE, name: "Defense" },
    { value: Type.DEFENSE_SKILL, name: "Defense / Skill" },
  ]

  const valueSigns = [
    { value: ValueSign.NONE, name: "" },
    { value: ValueSign.PLUS, name: "+" },
    { value: ValueSign.MINUS, name: "-" },
    { value: ValueSign.EXCLAMATION, name: "!" },
  ]

  const modifierValueSigns = [
    { value: ValueSign.NONE, name: "" },
    { value: ValueSign.PLUS, name: "+" },
    { value: ValueSign.MINUS, name: "-" },
  ]

  const modifiers = [
    { value: Modifier.NONE, name: "" },
    { value: Modifier.RANGE, name: "Range" },
    { value: Modifier.AREA, name: "Area" },
  ]

  const statValues = [
    { value: 1, name: "1" },
    { value: 2, name: "2" },
    { value: 3, name: "3" },
    { value: 4, name: "4" },
    { value: 5, name: "5" },
    { value: 6, name: "6" },
    { value: 7, name: "7" },
    { value: 8, name: "8" },
  ]

  const labelColor = (disabled: boolean): string => disabled ? "gray" : "white"

  $: disableHandicap = color !== Color.GOLD
  // $: disableLevel = color !== Color.RED && color !== Color.BLUE && color !== Color.GREEN
  $: disableItem = (level !== "ii" && level !== "iii") || (color !== Color.RED && color !== Color.BLUE && color !== Color.GREEN)
  $: disableInitiative = color === Color.PURPLE
  $: disablePrimaryActionType = color === Color.PURPLE
  $: disablePrimaryActionValue = color === Color.PURPLE || primaryActionType === Type.SKILL
  $: disableValueSign = color === Color.PURPLE || primaryActionType === Type.SKILL
  $: disableModifierValue = modifier === Modifier.NONE
  $: disableModifierValueSign = modifier === Modifier.NONE
  $: disableSecondaryDefenseValue = color === Color.PURPLE || primaryActionType === Type.DEFENSE || primaryActionType === Type.DEFENSE_SKILL
  $: disableSecondaryMovementValue = color === Color.PURPLE || primaryActionType === Type.MOVEMENT || color === Color.SILVER

  function downloadCard() {
    downloadCanvas(canvas, "card.png")
  }

  function downloadEverything() {
    const heroCanvas = document.createElement("canvas")
    heroCanvas.width = 7152
    heroCanvas.height = 4992
    const heroContext = heroCanvas.getContext("2d")!

    const tempCanvas = document.createElement("canvas")
    tempCanvas.width = 1192
    tempCanvas.height = 1664
    const tempContext = tempCanvas.getContext("2d")!

    const cards = [
      "gold", "blueIa", "blueIIa", "blueIIb", "blueIIIa", "blueIIIb",
      "silver", "redIa", "redIIa", "redIIb", "redIIIa", "redIIIb",
      "purple", "greenIa", "greenIIa", "greenIIb", "greenIIIa", "greenIIIb",
    ]

    for (let i = 0; i < 18; i++) {
      updateCanvas(
        tempCanvas,
        tempContext,
        customEmoji,
        cardValues.get(cards[i])!.get("background"),
        cardValues.get(cards[i])!.get("color"),
        cardValues.get(cards[i])!.get("handicap"),
        cardValues.get(cards[i])!.get("name"),
        cardValues.get(cards[i])!.get("description"),
        cardValues.get(cards[i])!.get("level"),
        cardValues.get(cards[i])!.get("item"),
        fieldToNumber(cardValues.get(cards[i])!.get("initiativeField")),
        cardValues.get(cards[i])!.get("primaryActionType"),
        fieldToNumber(cardValues.get(cards[i])!.get("primaryActionValueField")),
        cardValues.get(cards[i])!.get("primaryActionValueSign"),
        cardValues.get(cards[i])!.get("modifier"),
        fieldToNumber(cardValues.get(cards[i])!.get("modifierValueField")),
        cardValues.get(cards[i])!.get("modifierValueSign"),
        fieldToNumber(cardValues.get(cards[i])!.get("secondaryMovementValueField")),
        fieldToNumber(cardValues.get(cards[i])!.get("secondaryDefenseValueField")),
      )
      heroContext.drawImage(tempCanvas, 0, 0, 1192, 1664, 1192 * (i % 6), 1664 * Math.floor(i / 6), 1192, 1664)
      tempContext.clearRect(0, 0, tempCanvas.width, tempCanvas.height)
    }

    downloadCanvas(heroCanvas, "hero.png")
  }

  function downloadCanvas(canvas: HTMLCanvasElement, filename: string) {
    let anchor = document.createElement("a"), event
    anchor.download = filename
    anchor.href = canvas.toDataURL("image/png;base64")
    if (document.createEvent) {
      event = document.createEvent("MouseEvents")
      // ¯\_(ツ)_/¯
      event.initMouseEvent("click", true, true, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null)
      anchor.dispatchEvent(event)
    }
  }

  function exportIntoJson() {

    const json = new TSMap<string, any>([
      ["cardValues", cardValues],
      ["attackStat", attackStat],
      ["defenseStat", defenseStat],
      ["initiativeStat", initiativeStat],
      ["movementStat", movementStat],
    ])
    const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(json.toJSON()))
    const anchor = document.createElement("a")
    anchor.setAttribute("href", dataStr)
    anchor.setAttribute("download", "hero" + ".json")
    document.body.appendChild(anchor)
    anchor.click()
    anchor.remove()
  }

  function loadFromJson() {
    document.getElementById("inputJson").click()
  }

  function minAttackStatLevel() {
    if (primaryActionType == Type.ATTACK)
      return cardStats.get(color)?.get(Stat.ATTACK)?.get(level)?.findIndex((number) => number == primaryActionValue) ?? -1
    return -1
  }

  function maxAttackStatLevel() {
    if (primaryActionType == Type.ATTACK) {
      let maxAttack = cardStats.get(color)?.get(Stat.ATTACK)?.get(level)?.findLastIndex((number) => number == primaryActionValue) ?? 8
      if (maxAttack == -1) return 8
      return maxAttack
    }
    return 8
  }

  function minDefenseStatLevel() {
    if (primaryActionType == Type.DEFENSE || primaryActionType == Type.DEFENSE_SKILL)
      return cardStats.get(color)?.get(Stat.DEFENSE)?.get(level)?.findIndex((number) => number == primaryActionValue) ?? -1
    if (secondaryDefenseValue != 0)
      return cardStats.get(color)?.get(Stat.DEFENSE)?.get(level)?.findIndex((number) => number == secondaryDefenseValue) ?? -1
    return -1
  }

  function maxDefenseStatLevel() {
    if (primaryActionType == Type.DEFENSE || primaryActionType == Type.DEFENSE_SKILL) {
      let maxDefense = cardStats.get(color)?.get(Stat.DEFENSE)?.get(level)?.findLastIndex((number) => number == primaryActionValue) ?? 8
      if (maxDefense == -1) return 8
      return maxDefense
    }
    if (secondaryDefenseValue != 0) {
      let maxDefense = cardStats.get(color)?.get(Stat.DEFENSE)?.get(level)?.findLastIndex((number) => number == secondaryDefenseValue) ?? 8
      if (maxDefense == -1) return 8
      return maxDefense
    }
    return 8
  }

  function minInitiativeStatLevel() {
    return cardStats.get(color)?.get(Stat.INITIATIVE)?.get(level)?.findIndex((number) => number == initiative) ?? -1
  }

  function maxInitiativeStatLevel() {
    let maxIni = cardStats.get(color)?.get(Stat.INITIATIVE)?.get(level)?.findLastIndex((number) => number == initiative) ?? 8
    if (maxIni == -1) return 8
    return maxIni
  }

  function minMovementStatLevel() {
    if (primaryActionType == Type.MOVEMENT)
      return cardStats.get(color)?.get(Stat.MOVEMENT)?.get(level)?.findIndex((number) => number == primaryActionValue) ?? -1
    if (secondaryMovementValue != 0)
      return cardStats.get(color)?.get(Stat.MOVEMENT)?.get(level)?.findIndex((number) => number == secondaryMovementValue) ?? -1
    return -1
  }

  function maxMovementStatLevel() {
    if (primaryActionType == Type.MOVEMENT) {
      let maxMovement = cardStats.get(color)?.get(Stat.MOVEMENT)?.get(level)?.findLastIndex((number) => number == primaryActionValue) ?? 8
      if (maxMovement == -1) return 8
      return maxMovement
    }
    if (secondaryMovementValue != 0) {
      let maxMovement = cardStats.get(color)?.get(Stat.MOVEMENT)?.get(level)?.findLastIndex((number) => number == secondaryMovementValue) ?? 8
      if (maxMovement == -1) return 8
      return maxMovement
    }
    return 8
  }

  function getStatPointWidth() {
    if (browser) {
      if (window.innerWidth >= 472) return 20
      else return Math.floor(((window.innerWidth - 16) / 2 - 60) / 8 - 1)
    } else return 0
  }

  $: activeBorderGold = currentCard == "gold" ? "bg-yellow-600" : "bg-yellow-400"
  $: activeBorderSilver = currentCard == "silver" ? "bg-gray-700" : "bg-gray-500"
  $: activeBorderPurple = currentCard == "purple" ? "bg-purple-800" : "bg-purple-600"
  $: activeBorderBlueIa = currentCard == "blueIa" ? "bg-blue-800" : "bg-blue-600"
  $: activeBorderBlueIIa = currentCard == "blueIIa" ? "bg-blue-800" : "bg-blue-600"
  $: activeBorderBlueIIb = currentCard == "blueIIb" ? "bg-blue-800" : "bg-blue-600"
  $: activeBorderBlueIIIa = currentCard == "blueIIIa" ? "bg-blue-800" : "bg-blue-600"
  $: activeBorderBlueIIIb = currentCard == "blueIIIb" ? "bg-blue-800" : "bg-blue-600"
  $: activeBorderRedIa = currentCard == "redIa" ? "bg-red-800" : "bg-red-600"
  $: activeBorderRedIIa = currentCard == "redIIa" ? "bg-red-800" : "bg-red-600"
  $: activeBorderRedIIb = currentCard == "redIIb" ? "bg-red-800" : "bg-red-600"
  $: activeBorderRedIIIa = currentCard == "redIIIa" ? "bg-red-800" : "bg-red-600"
  $: activeBorderRedIIIb = currentCard == "redIIIb" ? "bg-red-800" : "bg-red-600"
  $: activeBorderGreenIa = currentCard == "greenIa" ? "bg-green-800" : "bg-green-600"
  $: activeBorderGreenIIa = currentCard == "greenIIa" ? "bg-green-800" : "bg-green-600"
  $: activeBorderGreenIIb = currentCard == "greenIIb" ? "bg-green-800" : "bg-green-600"
  $: activeBorderGreenIIIa = currentCard == "greenIIIa" ? "bg-green-800" : "bg-green-600"
  $: activeBorderGreenIIIb = currentCard == "greenIIIb" ? "bg-green-800" : "bg-green-600"
</script>

<div class="pt-18 md:pt-22">
  <div class="flex items-center flex-col">
    <div class="lg:grid lg:grid-cols-2 lg:gap-6 px-3 lg:px-0">
      <div class="col-span-1">

        <div class="grid grid-cols-2 gap-1 lg:gap-2 w-full">
          <div class="col-span-1 h-7 z-20 relative">
            <div class="h-5 border border-dark-600 bg-transparent hover:bg-transparent rounded-xl bg-dark-900 absolute">
              <div class="m-1 relative h-full">
                <Img src={statImages.get("attack")} class="absolute w-5 z-30 -top-1.25" />
                <div class="float-left w-4.5 h-full bg-transparent" />
                {#each Array(8) as _, color_index (color_index)}
                  <div class="float-left w-1 h-1" />
                  {#if minAttackStatLevelValue >= color_index}
                    <div class="z-40 float-left h-2.5 rounded-md bg-amber-600" style="width: {getStatPointWidth()}px" />
                  {:else if maxAttackStatLevelValue >= color_index}
                    <div class="z-40 float-left h-2.5 rounded-md bg-amber-800" style="width: {getStatPointWidth()}px" />
                  {:else}
                    <div class="float-left h-1 bg-transparent" style="width: {getStatPointWidth()}px" />
                  {/if}
                {/each}
              </div>
            </div>
          </div>
          <div class="col-span-1 h-7 z-20 relative">
            <div class="h-5 border border-dark-600 bg-transparent hover:bg-transparent rounded-xl bg-dark-900 absolute">
              <div class="m-1 relative h-full">
                <Img src={statImages.get("defense")} class="absolute w-5 z-30 -top-1.25" />
                <div class="float-left w-4.5 h-full bg-transparent" />
                {#each Array(8) as _, color_index (color_index)}
                  <div class="float-left w-1 h-1" />
                  {#if minDefenseStatLevelValue >= color_index}
                    <div class="z-40 float-left h-2.5 rounded-md bg-amber-600" style="width: {getStatPointWidth()}px" />
                  {:else if maxDefenseStatLevelValue >= color_index}
                    <div class="z-40 float-left h-2.5 rounded-md bg-amber-800" style="width: {getStatPointWidth()}px" />
                  {:else}
                    <div class="float-left h-1 bg-transparent" style="width: {getStatPointWidth()}px" />
                  {/if}
                {/each}
              </div>
            </div>
          </div>
          <div class="col-span-1 h-7 z-20 relative">
            <div class="h-5 border border-dark-600 bg-transparent hover:bg-transparent rounded-xl bg-dark-900 absolute">
              <div class="m-1 relative h-full">
                <Img src={statImages.get("initiative")} class="absolute w-5 z-30 -top-1.25" />
                <div class="float-left w-4.5 h-full bg-transparent" />
                {#each Array(8) as _, color_index (color_index)}
                  <div class="float-left w-1 h-1" />
                  {#if minInitiativeStatLevelValue >= color_index}
                    <div class="z-40 float-left h-2.5 rounded-md bg-amber-600" style="width: {getStatPointWidth()}px" />
                  {:else if maxInitiativeStatLevelValue >= color_index}
                    <div class="z-40 float-left h-2.5 rounded-md bg-amber-800" style="width: {getStatPointWidth()}px" />
                  {:else}
                    <div class="float-left h-1 bg-transparent" style="width: {getStatPointWidth()}px" />
                  {/if}
                {/each}
              </div>
            </div>
          </div>
          <div class="col-span-1 h-7 z-20 relative">
            <div class="h-5 border border-dark-600 bg-transparent hover:bg-transparent rounded-xl bg-dark-900 absolute">
              <div class="m-1 relative h-full">
                <Img src={statImages.get("movement")} class="absolute w-5 z-30 -top-1.25" />
                <div class="float-left w-4.5 h-full bg-transparent" />
                {#each Array(8) as _, color_index (color_index)}
                  <div class="float-left w-1 h-1" />
                  {#if minMovementStatLevelValue >= color_index}
                    <div class="z-40 float-left h-2.5 rounded-md bg-amber-600" style="width: {getStatPointWidth()}px" />
                  {:else if maxMovementStatLevelValue >= color_index}
                    <div class="z-40 float-left h-2.5 rounded-md bg-amber-800" style="width: {getStatPointWidth()}px" />
                  {:else}
                    <div class="float-left h-1 bg-transparent" style="width: {getStatPointWidth()}px" />
                  {/if}
                {/each}
              </div>
            </div>
          </div>
        </div>

        <div class="grid grid-cols-6 gap-3 lg:gap-6 max-w-md mt-4">
          <div class="col-span-6">
            <Label style="color: white">
              Name
              <Input type="text" class="bg-dark-800 border-dark-600 text-white disabled:bg-dark-900"
                     bind:value={name} />
            </Label>
          </div>

          <div class="col-span-6">
            <Label style="color: white">
              Description
              <Textarea {...descriptionProps} class="bg-dark-800 border-dark-600 text-white disabled:bg-dark-900"
                        bind:value={description} />
            </Label>
          </div>

          <div class="col-span-4">
            <Label style="color: {labelColor(disableItem)}">
              Item
              <Select items={items}
                      class="bg-dark-800 border-dark-600 disabled:border-dark-700 text-white disabled:text-dark-500 disabled:bg-dark-900"
                      bind:value={item} disabled={disableItem} />
            </Label>
          </div>

          <div class="col-span-2 flex">
            <div class="m-auto">
              <Checkbox bind:checked={handicap} disabled={disableHandicap}>
                <div style="color: {labelColor(disableHandicap)}">
                  Handicap
                </div>
              </Checkbox>
            </div>
          </div>

          <div class="col-span-6">
            <Label style="color: {labelColor(disableInitiative)}">
              Initiative
              <Input type="text"
                     class="bg-dark-800 border-dark-600 text-white disabled:text-dark-500 disabled:bg-dark-900"
                     bind:value={initiativeField} disabled={disableInitiative} />
            </Label>
          </div>

          <div class="col-span-2">
            <Label style="color: {labelColor(disablePrimaryActionType)}">
              Action
              <Select items={actionTypes}
                      class="bg-dark-800 border-dark-600 disabled:border-dark-700 text-white disabled:text-dark-500 disabled:bg-dark-900"
                      bind:value={primaryActionType} disabled={disablePrimaryActionType} />
            </Label>
          </div>

          <div class="col-span-2">
            <Label style="color: {labelColor(disablePrimaryActionValue)}">
              Action value
              <Input type="text"
                     class="bg-dark-800 border-dark-600 text-white disabled:text-dark-500 disabled:bg-dark-900"
                     bind:value={primaryActionValueField} disabled={disablePrimaryActionValue} />
            </Label>
          </div>

          <div class="col-span-2">
            <Label style="color: {labelColor(disableValueSign)}">
              Action sign
              <Select items={valueSigns}
                      class="bg-dark-800 border-dark-600 disabled:border-dark-700 text-white disabled:text-dark-500 disabled:bg-dark-900"
                      bind:value={primaryActionValueSign} disabled={disableValueSign} />
            </Label>
          </div>

          <div class="col-span-2">
            <Label style="color: white">
              Modifier
              <Select items={modifiers} class="bg-dark-800 border-dark-600 text-white disabled:bg-dark-900"
                      bind:value={modifier} />
            </Label>
          </div>

          <div class="col-span-2">
            <Label style="color: {labelColor(disableModifierValue)}">
              Modifier value
              <Input type="text"
                     class="bg-dark-800 border-dark-600 text-white disabled:text-dark-500 disabled:bg-dark-900"
                     bind:value={modifierValueField} disabled={disableModifierValue} />
            </Label>
          </div>

          <div class="col-span-2">
            <Label style="color: {labelColor(disableModifierValueSign)}">
              Modifier sign
              <Select items={modifierValueSigns}
                      class="bg-dark-800 border-dark-600 disabled:border-dark-700 text-white disabled:text-dark-500 disabled:bg-dark-900"
                      bind:value={modifierValueSign} disabled={disableModifierValueSign} />
            </Label>
          </div>

          <div class="col-span-3">
            <Label style="color: {labelColor(disableSecondaryDefenseValue)}">
              Defense value
              <Input type="text"
                     class="bg-dark-800 border-dark-600 text-white disabled:text-dark-500 disabled:bg-dark-900"
                     bind:value={secondaryDefenseValueField} disabled={disableSecondaryDefenseValue} />
            </Label>
          </div>

          <div class="col-span-3">
            <Label style="color: {labelColor(disableSecondaryMovementValue)}">
              Movement value
              <Input type="text"
                     class="bg-dark-800 border-dark-600 text-white disabled:text-dark-500 disabled:bg-dark-900"
                     bind:value={secondaryMovementValueField} disabled={disableSecondaryMovementValue} />
            </Label>
          </div>

          <div class="col-span-6">
            <Label style="color: white">
              Background (1192×1664)
              <Fileupload class="bg-dark-800 border-dark-600 text-white" on:change={event => onBgSelected(event)} />
            </Label>
          </div>

          <Label class="col-span-6" style="color: white">
            Custom emoji
            <div class="col-span-6 border border-dark-600 rounded-2xl p-3 grid grid-cols-3 gap-3 lg:gap-6">
              {#each customEmoji as _, i (_)}
                <div class="col-span-2">
                  <Input id="customEmoji" type="text" class="bg-dark-800 border-dark-600 text-white"
                         bind:value={customEmoji[i][0]} />
                </div>
                <div class="col-span-1">
                  <Fileupload accept="image/*" class="bg-dark-800 border-dark-600 text-white"
                              on:change={event => onEmojiSelected(event, i)} />
                </div>
              {/each}
              <div class="col-span-2">
                <Input type="text" class="bg-dark-800 border-dark-600 text-white" bind:value={tempCustomEmoji} />
              </div>
              <div class="col-span-1">
                <Fileupload accept="image/*" class="bg-dark-800 border-dark-600 text-white"
                            on:change={event => onEmojiSelected(event, customEmoji.length)} />
              </div>
            </div>
          </Label>
        </div>
      </div>
      <div class="col-span-1 max-w-md pt-8 lg:pt-0 flex flex-col items-center justify-center">
        <div class="grid grid-cols-6 gap-1">
          <Button class="col-span-1 p-1 hover:bg-yellow-500 {activeBorderGold}"
                  on:click={() => switchCurrentCard("gold")}>D
          </Button>
          <Button class="col-span-1 p-1 hover:bg-blue-700 {activeBorderBlueIa}"
                  on:click={() => switchCurrentCard("blueIa")}>B1
          </Button>
          <Button class="col-span-1 p-1 hover:bg-blue-700 {activeBorderBlueIIa}"
                  on:click={() => switchCurrentCard("blueIIa")}>B2A
          </Button>
          <Button class="col-span-1 p-1 hover:bg-blue-700 {activeBorderBlueIIb}"
                  on:click={() => switchCurrentCard("blueIIb")}>B2B
          </Button>
          <Button class="col-span-1 p-1 hover:bg-blue-700 {activeBorderBlueIIIa}"
                  on:click={() => switchCurrentCard("blueIIIa")}>B3A
          </Button>
          <Button class="col-span-1 p-1 hover:bg-blue-700 {activeBorderBlueIIIb}"
                  on:click={() => switchCurrentCard("blueIIIb")}>B3B
          </Button>

          <Button class="col-span-1 p-1 hover:bg-gray-600 {activeBorderSilver}"
                  on:click={() => switchCurrentCard("silver")}>S
          </Button>
          <Button class="col-span-1 p-1 hover:bg-red-700 {activeBorderRedIa}"
                  on:click={() => switchCurrentCard("redIa")}>R1
          </Button>
          <Button class="col-span-1 p-1 hover:bg-red-700 {activeBorderRedIIa}"
                  on:click={() => switchCurrentCard("redIIa")}>R2A
          </Button>
          <Button class="col-span-1 p-1 hover:bg-red-700 {activeBorderRedIIb}"
                  on:click={() => switchCurrentCard("redIIb")}>R2B
          </Button>
          <Button class="col-span-1 p-1 hover:bg-red-700 {activeBorderRedIIIa}"
                  on:click={() => switchCurrentCard("redIIIa")}>R3A
          </Button>
          <Button class="col-span-1 p-1 hover:bg-red-700 {activeBorderRedIIIb}"
                  on:click={() => switchCurrentCard("redIIIb")}>R3B
          </Button>

          <Button class="col-span-1 p-1 hover:bg-purple-700 {activeBorderPurple}"
                  on:click={() => switchCurrentCard("purple")}>P
          </Button>
          <Button class="col-span-1 p-1 hover:bg-green-700 {activeBorderGreenIa}"
                  on:click={() => switchCurrentCard("greenIa")}>G1
          </Button>
          <Button class="col-span-1 p-1 hover:bg-green-700 {activeBorderGreenIIa}"
                  on:click={() => switchCurrentCard("greenIIa")}>G2A
          </Button>
          <Button class="col-span-1 p-1 hover:bg-green-700 {activeBorderGreenIIb}"
                  on:click={() => switchCurrentCard("greenIIb")}>G2B
          </Button>
          <Button class="col-span-1 p-1 hover:bg-green-700 {activeBorderGreenIIIa}"
                  on:click={() => switchCurrentCard("greenIIIa")}>G3A
          </Button>
          <Button class="col-span-1 p-1 hover:bg-green-700 {activeBorderGreenIIIb}"
                  on:click={() => switchCurrentCard("greenIIIb")}>G3B
          </Button>
        </div>
        <Label class="col-span-6 mt-4" style="color: white">
          Hero Stats
          <div class="grid grid-cols-4 gap-1 lg:gap-2 w-full border border-dark-600 rounded-2xl p-3">
            <div class="col-span-1">
              <Label style="color: white">
                Attack
                <Select items={statValues}
                        class="bg-dark-800 border-dark-600 text-white"
                        bind:value={attackStat} />
              </Label>
            </div>
            <div class="col-span-1">
              <Label style="color: white">
                Defense
                <Select items={statValues}
                        class="bg-dark-800 border-dark-600 text-white"
                        bind:value={defenseStat} />
              </Label>
            </div>
            <div class="col-span-1">
              <Label style="color: white">
                Initiative
                <Select items={statValues}
                        class="bg-dark-800 border-dark-600 text-white"
                        bind:value={initiativeStat} />
              </Label>
            </div>
            <div class="col-span-1">
              <Label style="color: white">
                Movement
                <Select items={statValues}
                        class="bg-dark-800 border-dark-600 text-white"
                        bind:value={movementStat} />
              </Label>
            </div>
          </div>
        </Label>
        <div class="w-full border border-dark-600 rounded-3xl mt-2 md:mt-4">
          <canvas width="1192" height="1664" class="w-full rounded-3xl" bind:this={canvas} />
        </div>
        <div class="grid grid-cols-2 gap-4 mt-4 mb-4">
          <div class="col-span-1 flex justify-center">
            <Button class="w-40" on:click={downloadCard}>Download Card</Button>
          </div>
          <div class="col-span-1 flex justify-center">
            <Button class="w-40" on:click={downloadEverything}>Download Full Set</Button>
          </div>
          <div class="col-span-1 flex justify-center">
            <Button class="w-40" on:click={exportIntoJson}>Export into JSON</Button>
          </div>
          <div class="col-span-1 flex justify-center">
            <Button class="w-40" on:click={loadFromJson}>Load from JSON</Button>
            <input id="inputJson" class="absolute w-0" type="file" on:change={event => onJsonSelected(event)}>
          </div>
        </div>
      </div>
      <Label class="col-span-2" style="color: white">
        Formatting rules
        <div class="max-w-md lg:max-w-4xl border border-dark-600 rounded-2xl p-3">
          <p class="text-white">
            <Kbd class="px-1 py-0 text-white bg-dark-700 border-dark-600">**bold**</Kbd> - use this for important info
            such as time conditions
            <br>
            <Kbd class="px-1 py-0 text-white bg-dark-700 border-dark-600">~italic</Kbd> - use this for notes at the
            bottom (only works at the start of the line)
            <br>
            <Kbd class="px-1 py-0 text-white bg-dark-700 border-dark-600">>>List option</Kbd> - use this after "Choose
            one:" or similar conditions (only works at the start of the line)
            <br>
            <Kbd class="px-1 py-0 text-white bg-dark-700 border-dark-600">>option continuation</Kbd> - use this after a
            >>List option to avoid creating an extra bullet (only works at the start of the line)
            <br>
            <Kbd class="px-1 py-0 text-white bg-dark-700 border-dark-600">---</Kbd> - horizontal line - use this to
            split options where no choice is provided (only works at the start of the line)
            <br>
            <Kbd class="px-1 py-0 text-white bg-dark-700 border-dark-600">::emoji_name::</Kbd> - insert an emoji (add
            custom emoji via the form above or use default ones listed below)
          </p>
        </div>
      </Label>
      <Label class="col-span-2" style="color: white">
        Default emoji
        <div class="max-w-md lg:max-w-4xl border border-dark-600 rounded-2xl p-3">
          <p class="text-white text-center">
            {#each defaultEmoji as emoji (emoji)}
              <Kbd class="px-1 py-0 text-white bg-dark-700 border-dark-600">::{emoji}::</Kbd>
              <wbr>
            {/each}
          </p>
        </div>
      </Label>
      <Label class="col-span-2" style="color: white">
        Guidelines
        <div class="max-w-md lg:max-w-4xl border border-dark-600 rounded-2xl p-3 mb-3">
          <Label style="color: white">
            General recommendations <a class="text-primary-500" target="_blank" rel="noopener noreferrer"
                                       href="https://docs.google.com/spreadsheets/d/1VdgZRXgKdgy0lmWf3k3qkzda1GCQalQY51u7NGNAuYc/edit?usp=sharing">[source]</a>
            <div class="max-w-full border border-dark-600 rounded-2xl p-3 mb-3">
              <List tag="ul" class="space-y-2 text-white">
                <Li>Keep it simple. While it's tempting to fit a bunch of concepts into a character, this rarely flies
                  without some practice. Start small and build up.
                </Li>
                <Li>The perfect challenge for your first character would be to design a complexity 1 hero.</Li>
                <Li>Break the rules when there is a strong reason to break the rules. Don't break the rules purely in
                  pursuit of making as unique mechanism as possible. It needs to be coherent with the rest of the game.
                </Li>
                <Li>Try to minimize overlaps. Check if similar effects already exist in the game and avoid copying them
                  1:1. This is especially true for gold and silver effects.
                </Li>
                <Li>Find the theme. Every card should resonate with the rest. Both mechanism-wise and theme-wise.</Li>
                <Li>Know how well your character is at each of the 4 roles (Brawler/Initiator/Pusher/Support etc.) and
                  design cards that support that vision.
                </Li>
                <Li>It should be possible to build a character to perform several different roles but not all of them,
                  nor be locked in just one.
                </Li>
                <Li>Try to not make the two branches in the same slot too similar. Otherwise the hero will feel
                  one-dimensional.
                </Li>
                <Li>Keep wording as short as possible. Character should not have 3 lines of text on every card. If you
                  have several cards with lots of text, balance it with the others that don't. Ideally on the same
                  color/tier slot.
                </Li>
                <Li>Minimize the use of tokens and markers.</Li>
                <Li>Miniminze the use of pure defense cards.</Li>
                <Li>Do not overload the character with active effects.</Li>
              </List>
            </div>
          </Label>
          <Label style="color: white">
            Balancing rules and restrictions <a class="text-primary-500" target="_blank" rel="noopener noreferrer"
                                                href="https://docs.google.com/spreadsheets/d/1VdgZRXgKdgy0lmWf3k3qkzda1GCQalQY51u7NGNAuYc/edit?usp=sharing">[source]</a>
            <div class="max-w-full border border-dark-600 rounded-2xl p-3 mb-3">
              <List tag="ul" class="space-y-2 text-white">
                <Li>Primary restriction - no character should be able to defeat 2 minions on round 1 on their own (this
                  does not include major screw-ups or multi-character combos).
                </Li>
                <Li>No double attacks directed at minions until Tier III.</Li>
                <Li>Default range for a gold ranged attack is 1. Range 2 requires it to be situational, or both reds to
                  be melee. Range 3 requires it to have severe restriction.
                </Li>
                <Li>No true stuns (complete skip turns effects or equivalents)</Li>
                <Li>Maximum possible coin gain at Tier II = 6 and at Tier III = 8. Average gold income should be around
                  3 coins per round.
                </Li>
                <Li>Maximum possible coin gain at Round 1 = 2. (without other hero's assistance).</Li>
                <Li>Potential minimum coin income at Tier I is 4</Li>
                <Li>Card text must fit into the existing text box with existing text font and size.</Li>
                <Li>Silver, Gold, Ultimate and Tier I cards can fit 8 lines of text max. All other cards - 7 lines of
                  text max. These are lines of text, not full sentences. If you are afraid that your wording is too long
                  - it probably is.
                </Li>
              </List>
            </div>
          </Label>
          <Label style="color: white">
            Card overview
            <div class="max-w-full border border-dark-600 rounded-2xl p-3">
              <List tag="ul" class="space-y-2 text-white">
                <Li>
                  Defense, initiative and movement values of each hero in GoA II depend on their
                  <a class="text-primary-500" target="_blank" rel="noopener noreferrer"
                     href="https://docs.google.com/spreadsheets/d/1Mvm7YbZ3r5HyocOt3h4iypdrSohEAaa6Omc_WXoBSJc/edit?usp=sharing">corresponding
                    stats</a>.
                  Two heroes with the same movement stat will <i>generally</i> have the same movement on all of their
                  respective cards.
                </Li>
                <Li>
                  Gold card -
                  Highest initiative,
                  lowest defense,
                  lowest movement,
                  a low-damage attack with a twist or (for some higher-complexity heroes) a skill that provides an
                  option to discard a card or defeat a minion.
                  The Gold card is usually used to land a hit before the enemy can escape, or dodge such a hit.
                  The Gold card doesn't receive any direct upgrades throughout the game and doesn't have an alternative.
                  It is your hero's signature attack.
                </Li>
                <Li>
                  Silver card -
                  Any initiative,
                  low defense,
                  no movement,
                  a skill or (for some higher-complexity heroes) a defense/skill that can do a lot in some situations
                  and nothing in others, due to its conditional nature and no secondary movement.
                  Movement is sometimes present in some form but is always conditional.
                  The Silver cards almost always require some setup in order to bring any value, but when this happens,
                  they
                  can change the situation drastically.
                  The Silver card doesn't receive any direct upgrades throughout the game and doesn't have an
                  alternative.
                  It is you hero's signature skill.
                </Li>
                <Li>
                  Blue card -
                  High initiative,
                  high defense,
                  high movement,
                  a skill, a movement, or a defense.
                  The Blue card is often used for movement, be it evading the red attack or just a reposition.
                  It can also restrict enemies' actions, discard a card, place tokens or apply an effect.
                </Li>
                <Li>
                  Red card -
                  Medium initiative,
                  highest defense,
                  highest movement,
                  a high-damage attack, the main way to strike through enemies' defenses.
                  The easier it is to land a hit with an attack the weaker the damage is. Extra range is usually
                  compensated by lower defense value.
                </Li>
                <Li>
                  Green card -
                  Lowest initiative,
                  medium defense or a block,
                  medium movement,
                  a skill, a movement, or a block that acts as a control tool, due to its low initiative, allowing you
                  to react to the situation: run away from a potential attack, set up an attack, heal or prepare for the
                  next turn in other ways.
                </Li>
                <Li>Initiative, attack and defense on blue, red and green cards increases by 1 either on level II or on
                  level III (same level for both variants).
                </Li>
              </List>
            </div>
          </Label>
        </div>
      </Label>
    </div>
  </div>

  <p class="absolute font-modesto"></p>
</div>

<style>
    .font-modesto {
        font-family: "Modesto Poster", serif;
    }

    @font-face {
        font-family: "Modesto Poster";
        src: url("../../lib/fonts/modesto_poster.woff") format("woff");
    }
</style>
