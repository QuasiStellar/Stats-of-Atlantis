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
  import Switch from "svelte-switch";
  import { importImages, updateCanvas, updateHeroCanvas } from "../../../onward_card_painter"
  import type { HeroColor, AttackRange, CardType, Fraction, HeroRole } from "../../../onward_card_painter"
  import { TSMap } from "typescript-map"

  let cardValues = new TSMap<string, TSMap<string, any>>([
    ["hero", new TSMap<string, any>([
      ["heroName", ""],
      ["heroRole", ""],
      ["heroTitle", ""],
      ["heroFraction", ""],
      ["heroAbilityName", ""],
      ["heroAbilityDescription", ""],
      ["heroUpgradedAbilityName", ""],
      ["heroUpgradedAbilityDescription", ""],
      ["background", undefined],
      ["heroIcon", undefined],
    ])],
    ["ultimate", new TSMap<string, any>([
      ["name", ""],
      ["description", ""],
      ["isQuick", false],
      ["background", undefined],
    ])],
    ["zeroThree", new TSMap<string, any>([
      ["name", ""],
      ["description", ""],
      ["isQuick", false],
      ["background", undefined],
    ])],
    ["twoTwo", new TSMap<string, any>([
      ["name", ""],
      ["description", ""],
      ["isQuick", false],
      ["background", undefined],
    ])],
    ["threeOne", new TSMap<string, any>([
      ["name", ""],
      ["description", ""],
      ["isQuick", false],
      ["background", undefined],
    ])],
    ["fourOne", new TSMap<string, any>([
      ["name", ""],
      ["description", ""],
      ["isQuick", false],
      ["background", undefined],
    ])],
    ["flash", new TSMap<string, any>([
      ["name", "Flash"],
      ["description", "Move to ::target::1 adjacent area."],
      ["isQuick", true],
      ["background", undefined],
    ])],
  ])

  let currentCard = "hero"

  let heroCanvasVisibility = true
  let canvasVisibility = false

  function switchCurrentCard(newCard: string) {
    if (currentCard != 'hero' && currentCard != 'heroUpgraded') {
      updateCurrentCard()
    } else {
      updateHero()
    }
    if (newCard != 'hero' && newCard != 'heroUpgraded') {
      heroCanvasVisibility = false
      canvasVisibility = true
      cardType = newCard as CardType
      currentCard = newCard
      getCurrentCard()
    } else {
      heroCanvasVisibility = true
      canvasVisibility = false
      currentCard = newCard
      background = cardValues.get("hero")!.get("background")!
    }
  }

  function updateCurrentCard() {
    cardValues.get(currentCard)!.set("name", name)
    cardValues.get(currentCard)!.set("description", description)
    cardValues.get(currentCard)!.set("isQuick", isQuick)
    cardValues.get(currentCard)!.set("background", background)
  }

  function updateHero() {
    cardValues.get("hero")!.set("heroName", heroName)
    cardValues.get("hero")!.set("heroRole", heroRole)
    cardValues.get("hero")!.set("heroTitle", heroTitle)
    cardValues.get("hero")!.set("heroFraction", heroFraction)
    cardValues.get("hero")!.set("heroAbilityName", heroAbilityName)
    cardValues.get("hero")!.set("heroAbilityDescription", heroAbilityDescription)
    cardValues.get("hero")!.set("heroUpgradedAbilityName", heroUpgradedAbilityName)
    cardValues.get("hero")!.set("heroUpgradedAbilityDescription", heroUpgradedAbilityDescription)
    cardValues.get("hero")!.set("background", background)
    cardValues.get("hero")!.set("heroIcon", heroIcon)
  }

  function getCurrentCard() {
    name = cardValues.get(currentCard)!.get("name")!
    description = cardValues.get(currentCard)!.get("description")!
    isQuick = cardValues.get(currentCard)!.get("isQuick")!
    background = cardValues.get(currentCard)!.get("background")!
  }

  function getHero() {
    heroName = cardValues.get("hero")!.get("heroName")!
    heroRole = cardValues.get("hero")!.get("heroRole")!
    heroTitle = cardValues.get("hero")!.get("heroTitle")!
    heroFraction = cardValues.get("hero")!.get("heroFraction")!
    heroAbilityName = cardValues.get("hero")!.get("heroAbilityName")!
    heroAbilityDescription = cardValues.get("hero")!.get("heroAbilityDescription")!
    heroUpgradedAbilityName = cardValues.get("hero")!.get("heroUpgradedAbilityName")!
    heroUpgradedAbilityDescription = cardValues.get("hero")!.get("heroUpgradedAbilityDescription")!
    background = cardValues.get("hero")!.get("background")!
    heroIcon = cardValues.get("hero")!.get("heroIcon")!
  }

  let name = ""
  let description = ""
  let isQuick = false
  let cardType = "ultimate" as CardType
  let color = "red" as HeroColor
  let isRanged = false
  let attackRange = "melee" as AttackRange
  let heroName = ""
  let heroRole = "Slayer" as HeroRole
  let heroTitle = ""
  let heroFraction = "Kurumo" as Fraction
  let heroAbilityName = ""
  let heroAbilityDescription = ""
  let heroUpgradedAbilityName = ""
  let heroUpgradedAbilityDescription = ""

  $: {
    heroRole

    switch (heroRole) {
      case "Slayer":
      case "Marksman":
        color = 'red'
        break;
      case "Tank":
      case "Controller":
        color = 'blue'
        break;
      case "Mage":
      case "Laner":
        color = 'green'
        break;
      case "Jungler":
      case "Warrior":
        color = 'yellow'
        break;
    }
  }

  let imagesLoaded = false

  let background: HTMLImageElement | undefined
  let heroIcon: HTMLImageElement | undefined

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

  const onHeroIconSelected = (event: Event) => {
    const file = (event.target as HTMLInputElement).files![0]
    const reader = new FileReader()
    reader.readAsDataURL(file)
    reader.onload = event => {
      const image = new Image()
      image.src = event.target!.result! as string
      image.onload = () => {
        heroIcon = image
      }
    }
  }

  const onJsonSelected = (event: Event) => {
    const file = (event.target as HTMLInputElement).files![0]
    const reader = new FileReader()
    reader.readAsText(file)
    reader.onload = event => {
      const info = new TSMap().fromJSON(JSON.parse(event.target!.result), true)
      cardValues = info.get("cardValues")

      if (currentCard != 'hero' && currentCard != 'heroUpgraded') {
        getCurrentCard()
      } else {
        getHero()
      }
    }
  }

  $: {
    name
    description
    isQuick
    background
    heroIcon
    color
    attackRange
    cardType
    heroName
    heroRole
    heroTitle
    heroFraction
    heroAbilityName
    heroAbilityDescription
    heroUpgradedAbilityName
    heroUpgradedAbilityDescription

    if (imagesLoaded) {
      update()
    }

    if (currentCard == 'hero' || currentCard == 'heroUpgraded') {
      updateHero()
    } else {
      updateCurrentCard()
    }
  }

  let canvas: HTMLCanvasElement
  let context: CanvasRenderingContext2D

  let canvasHero: HTMLCanvasElement
  let contextHero: CanvasRenderingContext2D

  onMount(async () => {
    context = canvas.getContext("2d")!
    contextHero = canvasHero.getContext("2d")!

    Promise.all([
      document.fonts.ready,
      importImages(),
    ])
      .then(() => {
        imagesLoaded = true
      })
  })

  const update = () => {
    if (currentCard == "hero" || currentCard == "heroUpgraded") {
      updateHeroCanvas(
        canvasHero,
        contextHero,
        background,
        heroIcon,
        heroName,
        heroFraction,
        heroRole,
        heroTitle,
        attackRange,
        currentCard == 'heroUpgraded' ? heroUpgradedAbilityName : heroAbilityName,
        currentCard == 'heroUpgraded' ? heroUpgradedAbilityDescription : heroAbilityDescription,
        currentCard == 'heroUpgraded',
      )
    } else {
      updateCanvas(
        canvas,
        context,
        background,
        name,
        description,
        isQuick,
        color,
        attackRange,
        cardType,
      )
    }
  }

  const descriptionProps = {
    rows: 4,
  }

  function downloadCard() {
    if (currentCard == 'hero' || currentCard == 'heroUpgraded') {
      downloadCanvas(canvasHero, "card.png")
    } else {
      downloadCanvas(canvas, "card.png")
    }
  }

  function downloadEverything() {
    const heroCanvas = document.createElement("canvas")
    heroCanvas.width = 2814
    heroCanvas.height = 3507
    const heroContext = heroCanvas.getContext("2d")!

    let tempCanvas = document.createElement("canvas")
    tempCanvas.width = 750
    tempCanvas.height = 1050
    let tempContext = tempCanvas.getContext("2d")!

    const cards = [
      "ultimate", "zeroThree", "twoTwo",
      "threeOne", "fourOne", "flash"
    ]

    for (let i = 0; i < 6; i++) {
      updateCanvas(
        tempCanvas,
        tempContext,
        cardValues.get(cards[i])!.get("background"),
        cardValues.get(cards[i])!.get("name"),
        cardValues.get(cards[i])!.get("description"),
        cardValues.get(cards[i])!.get("isQuick"),
        color,
        attackRange,
        cards[i] as CardType,
      )
      heroContext.drawImage(tempCanvas, 0, 0, 750, 1050, 282 + 750 * (i % 3), 1407 + 1050 * Math.floor(i / 3), 750, 1050)
      tempContext.clearRect(0, 0, tempCanvas.width, tempCanvas.height)
    }

    tempCanvas = document.createElement("canvas")
    tempCanvas.width = 1407
    tempCanvas.height = 1407
    tempContext = tempCanvas.getContext("2d")!

    updateHeroCanvas(
      tempCanvas,
      tempContext,
      cardValues.get("hero")!.get("background"),
      cardValues.get("hero")!.get("heroIcon"),
      heroName,
      heroFraction,
      heroRole,
      heroTitle,
      attackRange,
      heroAbilityName,
      heroAbilityDescription,
      false,
    )
    heroContext.drawImage(tempCanvas, 0, 0, 1407, 1407, 0, 0, 1407, 1407)
    tempContext.clearRect(0, 0, tempCanvas.width, tempCanvas.height)

    updateHeroCanvas(
      tempCanvas,
      tempContext,
      cardValues.get("hero")!.get("background"),
      cardValues.get("hero")!.get("heroIcon"),
      heroName,
      heroFraction,
      heroRole,
      heroTitle,
      attackRange,
      heroUpgradedAbilityName,
      heroUpgradedAbilityDescription,
      true,
    )
    heroContext.drawImage(tempCanvas, 0, 0, 1407, 1407, 1407, 0, 1407, 1407)

    downloadCanvas(heroCanvas, "hero.png")
  }

  // function downloadForPrintPt1() {
  //   const heroCanvas = document.createElement("canvas")
  //   heroCanvas.width = 3975
  //   heroCanvas.height = 5622
  //   const heroContext = heroCanvas.getContext("2d")!
  //
  //   const tempCanvas = document.createElement("canvas")
  //   tempCanvas.width = 750
  //   tempCanvas.height = 1050
  //   const tempContext = tempCanvas.getContext("2d")!
  //
  //   const cards = [
  //     "ultimate", "zeroThree", "twoTwo",
  //     "threeOne", "fourOne", "flash"
  //   ]
  //
  //   for (let i = 0; i < 9; i++) {
  //     updateCanvas(
  //       tempCanvas,
  //       tempContext,
  //       cardValues.get(cards[i])!.get("background"),
  //       cardValues.get(cards[i])!.get("name"),
  //       cardValues.get(cards[i])!.get("description"),
  //       cardValues.get(cards[i])!.get("isQuick"),
  //       color,
  //       attackRange,
  //       cardType,
  //     )
  //     heroContext.drawImage(tempCanvas, 0, 0, 750, 1050, 100 + (100 + 750) * (i % 3), 100 + (210 + 1050) * Math.floor(i / 3), 750, 1050)
  //     tempContext.clearRect(0, 0, tempCanvas.width, tempCanvas.height)
  //   }
  //
  //   downloadCanvas(heroCanvas, "hero4print_1.png")
  // }
  //
  // function downloadForPrintPt2() {
  //   const heroCanvas = document.createElement("canvas")
  //   heroCanvas.width = 3975
  //   heroCanvas.height = 5622
  //   const heroContext = heroCanvas.getContext("2d")!
  //
  //   const tempCanvas = document.createElement("canvas")
  //   tempCanvas.width = 750
  //   tempCanvas.height = 1050
  //   const tempContext = tempCanvas.getContext("2d")!
  //
  //   const cards = [
  //     "ultimate", "zeroThree", "twoTwo",
  //     "threeOne", "fourOne", "flash"
  //   ]
  //
  //   for (let i = 0; i < 9; i++) {
  //     updateCanvas(
  //       tempCanvas,
  //       tempContext,
  //       cardValues.get(cards[i])!.get("background"),
  //       cardValues.get(cards[i])!.get("name"),
  //       cardValues.get(cards[i])!.get("description"),
  //       cardValues.get(cards[i])!.get("isQuick"),
  //       color,
  //       attackRange,
  //       cardType,
  //     )
  //     heroContext.drawImage(tempCanvas, 0, 0, 750, 1050, (100 + 750) * (i % 3), (210 + 1050) * Math.floor(i / 3), 750, 1050)
  //     tempContext.clearRect(0, 0, tempCanvas.width, tempCanvas.height)
  //   }
  //
  //   downloadCanvas(heroCanvas, "hero4print_2.png")
  // }

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
    ])
    const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(json.toJSON()))
    const anchor = document.createElement("a")
    anchor.setAttribute("href", dataStr)
    anchor.setAttribute("download", (heroName.length != 0 ? heroName : "hero") + ".json")
    document.body.appendChild(anchor)
    anchor.click()
    anchor.remove()
  }

  function loadFromJson() {
    document.getElementById("inputJson").click()
  }

  function handleChange(e) {
    const { checked } = e.detail;
    isRanged = checked;
    attackRange = isRanged ? 'ranged' : 'melee'
  }

  const fractions = [
    { value: "Kurumo", name: "Kurumo" },
    { value: "Liothan", name: "Liothan" },
    { value: "Taulot", name: "Taulot" },
    { value: "Nupten", name: "Nupten" },
  ]

  const roles = [
    { value: "Slayer", name: "Slayer" },
    { value: "Marksman", name: "Marksman" },
    { value: "Tank", name: "Tank" },
    { value: "Controller", name: "Controller" },
    { value: "Mage", name: "Mage" },
    { value: "Laner", name: "Laner" },
    { value: "Jungler", name: "Jungler" },
    { value: "Warrior", name: "Warrior" },
  ]

  $: activeBorderHero = currentCard == "hero" ? "bg-blue-800" : "bg-blue-600"
  $: activeBorderHeroUpgraded = currentCard == "heroUpgraded" ? "bg-blue-800" : "bg-blue-600"
  $: activeBorderUltimate = currentCard == "ultimate" ? "bg-yellow-600" : "bg-yellow-400"
  $: activeBorderZeroThree = currentCard == "zeroThree" ? "bg-gray-700" : "bg-gray-500"
  $: activeBorderTwoTwo = currentCard == "twoTwo" ? "bg-gray-700" : "bg-gray-500"
  $: activeBorderThreeOne = currentCard == "threeOne" ? "bg-gray-700" : "bg-gray-500"
  $: activeBorderFourOne = currentCard == "fourOne" ? "bg-gray-700" : "bg-gray-500"
  $: activeBorderFlash = currentCard == "flash" ? "bg-gray-700" : "bg-gray-500"
</script>

<div class="pt-18 md:pt-22">
  <div class="flex items-center flex-col">
    <div class="lg:grid lg:grid-cols-2 lg:gap-6 px-3 lg:px-0">
      <div class="col-span-1">

        <div class="grid grid-cols-6 gap-3 lg:gap-6 max-w-md mt-4">

          {#if currentCard == "hero" || currentCard == "heroUpgraded"}

            <div class="col-span-6">
              <Label style="color: white">
                Name
                <Input type="text" class="bg-dark-800 border-dark-600 text-white disabled:bg-dark-900"
                       bind:value={heroName} />
              </Label>
            </div>

            <div class="col-span-6">
              <Label style="color: white">
                Fraction
                <Select items={fractions}
                        class="bg-dark-800 border-dark-600 disabled:border-dark-700 text-white disabled:text-dark-500 disabled:bg-dark-900"
                        bind:value={heroFraction} />
              </Label>
            </div>

            <div class="col-span-6">
              <Label style="color: white">
                Role
                <Select items={roles}
                        class="bg-dark-800 border-dark-600 disabled:border-dark-700 text-white disabled:text-dark-500 disabled:bg-dark-900"
                        bind:value={heroRole} />
              </Label>
            </div>

            <div class="col-span-6">
              <Label style="color: white">
                Title
                <Input type="text" class="bg-dark-800 border-dark-600 text-white disabled:bg-dark-900"
                       bind:value={heroTitle} />
              </Label>
            </div>

            <div class="row col-span-2" style="display: flex; justify-content: space-between; align-items: center; gap: 10px;">
              <div style="flex: 0 1 auto; color: white; font-size: 14px;">
                Melee
              </div>
              <div style="flex: 0 0 auto;">
                <Switch on:change={handleChange} checked={isRanged} onColor="#555" offColor="#555">
                  <div slot="unCheckedIcon">
                  </div>
                  <div slot="checkedIcon">
                  </div>
                </Switch>
              </div>
              <div style="flex: 0 1 auto; color: white; font-size: 14px;">
                Ranged
              </div>
            </div>

            {#if currentCard == "hero"}
              <div class="col-span-6">
                <Label style="color: white">
                  Ability Name
                  <Input type="text" class="bg-dark-800 border-dark-600 text-white disabled:bg-dark-900"
                         bind:value={heroAbilityName} />
                </Label>
              </div>

              <div class="col-span-6">
                <Label style="color: white">
                  Ability Description
                  <Textarea {...descriptionProps} class="bg-dark-800 border-dark-600 text-white disabled:bg-dark-900"
                            bind:value={heroAbilityDescription} />
                </Label>
              </div>
            {:else}
              <div class="col-span-6">
                <Label style="color: white">
                  Upgraded Ability Name
                  <Input type="text" class="bg-dark-800 border-dark-600 text-white disabled:bg-dark-900"
                         bind:value={heroUpgradedAbilityName} />
                </Label>
              </div>

              <div class="col-span-6">
                <Label style="color: white">
                  Upgraded Ability Description
                  <Textarea {...descriptionProps} class="bg-dark-800 border-dark-600 text-white disabled:bg-dark-900"
                            bind:value={heroUpgradedAbilityDescription} />
                </Label>
              </div>
            {/if}

            <div class="col-span-6">
              <Label style="color: white">
                Background (1407×1407)
                <Fileupload class="bg-dark-800 border-dark-600 text-white" on:change={event => onBgSelected(event)} />
              </Label>
            </div>

            <div class="col-span-6">
              <Label style="color: white">
                Hero Icon (208×208)
                <Fileupload class="bg-dark-800 border-dark-600 text-white" on:change={event => onHeroIconSelected(event)} />
              </Label>
            </div>

          {:else}

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

            <div class="col-span-2 flex">
              <div class="m-auto">
                <Checkbox bind:checked={isQuick}>
                  <div style="color: white">
                    Quick
                  </div>
                </Checkbox>
              </div>
            </div>

            <div class="col-span-6">
              <Label style="color: white">
                Background (750×1050)
                <Fileupload class="bg-dark-800 border-dark-600 text-white" on:change={event => onBgSelected(event)} />
              </Label>
            </div>

          {/if}
        </div>
      </div>
      <div class="col-span-1 max-w-md pt-8 lg:pt-0 flex flex-col items-center justify-center">
        <div class="grid grid-cols-8 gap-1">
          <Button class="col-span-1 p-1 hover:bg-blue-700 {activeBorderHero}"
                  on:click={() => switchCurrentCard("hero")}>⭐
          </Button>
          <Button class="col-span-1 p-1 hover:bg-blue-700 {activeBorderHeroUpgraded}"
                  on:click={() => switchCurrentCard("heroUpgraded")}>🌟
          </Button>
          <Button class="col-span-1 p-1 hover:bg-yellow-500 {activeBorderUltimate}"
                  on:click={() => switchCurrentCard("ultimate")}>ULT
          </Button>
          <Button class="col-span-1 p-1 hover:bg-gray-600 {activeBorderZeroThree}"
                  on:click={() => switchCurrentCard("zeroThree")}>0/3
          </Button>
          <Button class="col-span-1 p-1 hover:bg-gray-600 {activeBorderTwoTwo}"
                  on:click={() => switchCurrentCard("twoTwo")}>2/2
          </Button>
          <Button class="col-span-1 p-1 hover:bg-gray-600 {activeBorderThreeOne}"
                  on:click={() => switchCurrentCard("threeOne")}>3/1
          </Button>
          <Button class="col-span-1 p-1 hover:bg-gray-600 {activeBorderFourOne}"
                  on:click={() => switchCurrentCard("fourOne")}>4/1
          </Button>
          <Button class="col-span-1 p-1 hover:bg-gray-600 {activeBorderFlash}"
                  on:click={() => switchCurrentCard("flash")}>⚡
          </Button>
        </div>

        <div class="w-full border border-dark-600 rounded-3xl mt-2 md:mt-4" style="display: {heroCanvasVisibility ? 'block' : 'none'}">
          <canvas width="1407" height="1407" class="w-full rounded-3xl" bind:this={canvasHero} />
        </div>
        <div class="w-full border border-dark-600 rounded-3xl mt-2 md:mt-4" style="display: {canvasVisibility ? 'block' : 'none'}">
          <canvas width="750" height="1050" class="w-full rounded-3xl" bind:this={canvas} />
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
<!--          <div class="col-span-1 flex justify-center">-->
<!--            <Button class="w-40" on:click={downloadForPrintPt1}>Download for Print (Part 1)</Button>-->
<!--          </div>-->
<!--          <div class="col-span-1 flex justify-center">-->
<!--            <Button class="w-40" on:click={downloadForPrintPt2}>Download for Print (Part 2)</Button>-->
<!--          </div>-->
        </div>
      </div>
      <Label class="col-span-2 pb-4" style="color: white">
        Formatting rules
        <div class="max-w-md lg:max-w-4xl border border-dark-600 rounded-2xl p-3">
          <p class="text-white">
            <Kbd class="px-1 py-0 text-white bg-dark-700 border-dark-600">~italic</Kbd> - use this for extra spell conditions (only works at the start of the line)
            <br>
            <Kbd class="px-1 py-0 text-white bg-dark-700 border-dark-600">::target::</Kbd> - insert the target symbol
            <br>
            Hero title goes before the role unless it starts with "of"
            <br>
            Line breaks should be set manually in the hero ability description
          </p>
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
        src: url("../../../lib/fonts/modesto_poster.woff") format("woff");
    }
</style>
