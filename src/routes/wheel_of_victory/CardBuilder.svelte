<script lang="ts">
  import { onMount } from "svelte"
  import {
    Button,
    Fileupload,
    Input,
    Kbd,
    Label,
    Textarea,
  } from "flowbite-svelte"
  import { importImages, updateCanvas } from "./card_painter"
  import { TSMap } from "typescript-map"

  let name = ""
  let description = ""
  let life = 0
  let fire = 0
  let water = 0
  let death = 0

  let imagesLoaded = false

  let background: HTMLImageElement | undefined

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

  const onJsonSelected = (event: Event) => {
    const file = (event.target as HTMLInputElement).files![0]
    const reader = new FileReader()
    reader.readAsText(file)
    reader.onload = event => {
      const info = new TSMap().fromJSON(JSON.parse(event.target!.result), true)
      name = info.get("name")
      description = info.get("description")
      life = info.get("life")
      fire = info.get("fire")
      water = info.get("water")
      death = info.get("death")
    }
  }

  $: {
    name
    description
    life
    fire
    water
    death
    background

    if (imagesLoaded) {
      update()
    }
  }

  let canvas: HTMLCanvasElement
  let context: CanvasRenderingContext2D

  onMount(async () => {
    context = canvas.getContext("2d")!

    Promise.all([
      document.fonts.ready,
      importImages(),
    ])
      .then(() => {
        imagesLoaded = true
      })
  })

  const update = () => {
    updateCanvas(
      canvas,
      context,
      background,
      name,
      description,
      life,
      fire,
      water,
      death,
    )
  }

  const descriptionProps = {
    rows: 4,
  }

  function downloadCard() {
    downloadCanvas(canvas, "card.png")
  }

  // function downloadEverything() {
  //   const heroCanvas = document.createElement("canvas")
  //   heroCanvas.width = 2814
  //   heroCanvas.height = 3507
  //   const heroContext = heroCanvas.getContext("2d")!
  //
  //   let tempCanvas = document.createElement("canvas")
  //   tempCanvas.width = 750
  //   tempCanvas.height = 1050
  //   let tempContext = tempCanvas.getContext("2d")!
  //
  //   const cards = [
  //     "ultimate", "zeroThree", "twoTwo",
  //     "threeOne", "fourOne", "flash"
  //   ]
  //
  //   for (let i = 0; i < 6; i++) {
  //     updateCanvas(
  //       tempCanvas,
  //       tempContext,
  //       cardValues.get(cards[i])!.get("background"),
  //       cardValues.get(cards[i])!.get("name"),
  //       cardValues.get(cards[i])!.get("description"),
  //       cardValues.get(cards[i])!.get("isQuick"),
  //       color,
  //       attackRange,
  //       cards[i] as CardType,
  //     )
  //     heroContext.drawImage(tempCanvas, 0, 0, 750, 1050, 282 + 750 * (i % 3), 1407 + 1050 * Math.floor(i / 3), 750, 1050)
  //     tempContext.clearRect(0, 0, tempCanvas.width, tempCanvas.height)
  //   }
  //
  //   tempCanvas = document.createElement("canvas")
  //   tempCanvas.width = 1407
  //   tempCanvas.height = 1407
  //   tempContext = tempCanvas.getContext("2d")!
  //
  //   updateHeroCanvas(
  //     tempCanvas,
  //     tempContext,
  //     cardValues.get("hero")!.get("background"),
  //     cardValues.get("hero")!.get("heroIcon"),
  //     heroName,
  //     heroFraction,
  //     heroRole,
  //     heroTitle,
  //     attackRange,
  //     heroAbilityName,
  //     heroAbilityDescription,
  //     false,
  //   )
  //   heroContext.drawImage(tempCanvas, 0, 0, 1407, 1407, 0, 0, 1407, 1407)
  //   tempContext.clearRect(0, 0, tempCanvas.width, tempCanvas.height)
  //
  //   updateHeroCanvas(
  //     tempCanvas,
  //     tempContext,
  //     cardValues.get("hero")!.get("background"),
  //     cardValues.get("hero")!.get("heroIcon"),
  //     heroName,
  //     heroFraction,
  //     heroRole,
  //     heroTitle,
  //     attackRange,
  //     heroUpgradedAbilityName,
  //     heroUpgradedAbilityDescription,
  //     true,
  //   )
  //   heroContext.drawImage(tempCanvas, 0, 0, 1407, 1407, 1407, 0, 1407, 1407)
  //
  //   downloadCanvas(heroCanvas, "hero.png")
  // }

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
      ["name", name],
      ["description", description],
      ["life", life],
      ["fire", fire],
      ["water", water],
      ["death", death],
    ])
    const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(json.toJSON()))
    const anchor = document.createElement("a")
    anchor.setAttribute("href", dataStr)
    anchor.setAttribute("download", "card.json")
    document.body.appendChild(anchor)
    anchor.click()
    anchor.remove()
  }

  function loadFromJson() {
    document.getElementById("inputJson").click()
  }

  function convertFromCsv() {
    document.getElementById('inputCsv').click();
  }

  function onCsvSelected(event) {
    const file = event.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = function(e) {
      const text = e.target.result;
      const rows = parseCSV(text);
      const dataRows = [];

      // Process each row and validate
      for (let i = 0; i < rows.length; i++) {
        if (rows[i].length === 0) continue; // Skip empty rows

        if (rows[i].length !== 6) {
          console.error(`Row ${i+1} has ${rows[i].length} columns, expected 6`);
          continue;
        }

        // Convert last 4 columns to numbers
        const numCols = rows[i].slice(2).map(Number);
        if (numCols.some(isNaN)) {
          console.error(`Invalid number in row ${i+1}`);
          continue;
        }

        dataRows.push([rows[i][0], rows[i][1], ...numCols]);
      }

      // Process in groups of 9
      for (let i = 0; i < dataRows.length; i += 9) {
        const group = dataRows.slice(i, i + 9);

        const cardCanvas = document.createElement("canvas")
        cardCanvas.width = 2824
        cardCanvas.height = 3995
        const heroContext = cardCanvas.getContext("2d")!

        const tempCanvas = document.createElement("canvas")
        tempCanvas.width = 808
        tempCanvas.height = 1226
        const tempContext = tempCanvas.getContext("2d")!

        for (const [index, row] of group.entries()) {
          updateCanvas(
            tempCanvas,
            tempContext,
            undefined,
            row[0],
            row[1],
            row[2],
            row[3],
            row[4],
            row[5],
          )
          heroContext.drawImage(tempCanvas, 0, 0, 808, 1226, 100 + (100 + 808) * (index % 3), 79 + (79 + 1226) * Math.floor(index / 3), 808, 1226)
          tempContext.clearRect(0, 0, tempCanvas.width, tempCanvas.height)
        }

        downloadCanvas(cardCanvas, "cards4print.png")
      }
    };
    reader.readAsText(file);
  }

  function parseCSV(text) {
    const rows = [];
    let currentRow = [];
    let currentField = '';
    let inQuotes = false;
    let quoteEscaped = false;
    let lineEnding = null;

    for (let i = 0; i < text.length; i++) {
      const char = text[i];

      // Handle line endings detection
      if (!lineEnding && (char === '\n' || char === '\r')) {
        lineEnding = char === '\r' && text[i+1] === '\n' ? '\r\n' : char;
      }

      // Handle quoted fields
      if (char === '"') {
        if (inQuotes && text[i+1] === '"') {
          // Escaped quote inside quotes
          currentField += '"';
          i++; // Skip next quote
        } else if (inQuotes) {
          // End of quoted field
          inQuotes = false;
        } else {
          // Start of quoted field
          inQuotes = true;
        }
        continue;
      }

      // Handle field/row separators
      if (!inQuotes) {
        // Check for row delimiter
        if (lineEnding && text.substring(i, i + lineEnding.length) === lineEnding) {
          currentRow.push(currentField);
          currentField = '';
          rows.push(currentRow);
          currentRow = [];
          i += lineEnding.length - 1;
          continue;
        }

        // Check for field separator
        if (char === ',') {
          currentRow.push(currentField);
          currentField = '';
          continue;
        }
      }

      // Regular character
      currentField += char;
    }

    // Add last field and row
    if (currentField !== '' || text[text.length-1] === ',') {
      currentRow.push(currentField);
    }
    if (currentRow.length > 0) {
      rows.push(currentRow);
    }

    return rows;
  }
</script>

<div class="pt-18 md:pt-22">
  <div class="flex items-center flex-col">
    <div class="lg:grid lg:grid-cols-2 lg:gap-6 px-3 lg:px-0">
      <div class="col-span-1">
        <div class="grid grid-cols-4 gap-3 lg:gap-6 max-w-md mt-4">
          <div class="col-span-4">
            <Label style="color: white">
              Name
              <Input type="text" class="bg-dark-800 border-dark-600 text-white disabled:bg-dark-900"
                     bind:value={name} />
            </Label>
          </div>

          <div class="col-span-4">
            <Label style="color: white">
              Description
              <Textarea {...descriptionProps} class="bg-dark-800 border-dark-600 text-white disabled:bg-dark-900"
                        bind:value={description} />
            </Label>
          </div>

          <div class="col-span-1 flex">
            <Label style="color: white">
              Life 🍃
              <Input type="text" class="bg-dark-800 border-dark-600 text-white disabled:bg-dark-900"
                     bind:value={life} />
            </Label>
          </div>

          <div class="col-span-1 flex">
            <Label style="color: white">
              Fire 🔥
              <Input type="text" class="bg-dark-800 border-dark-600 text-white disabled:bg-dark-900"
                     bind:value={fire} />
            </Label>
          </div>

          <div class="col-span-1 flex">
            <Label style="color: white">
              Water 💦
              <Input type="text" class="bg-dark-800 border-dark-600 text-white disabled:bg-dark-900"
                     bind:value={water} />
            </Label>
          </div>

          <div class="col-span-1 flex">
            <Label style="color: white">
              Death 💀
              <Input type="text" class="bg-dark-800 border-dark-600 text-white disabled:bg-dark-900"
                     bind:value={death} />
            </Label>
          </div>

          <div class="col-span-4">
            <Label style="color: white">
              Background (808×1226)
              <Fileupload class="bg-dark-800 border-dark-600 text-white" on:change={event => onBgSelected(event)} />
            </Label>
          </div>
        </div>
      </div>
      <div class="col-span-1 max-w-md pt-8 lg:pt-0 flex flex-col items-center justify-center">
        <div class="w-full border border-dark-600 rounded-3xl mt-2 md:mt-4">
          <canvas width="808" height="1226" class="w-full rounded-3xl" bind:this={canvas} />
        </div>

        <div class="grid grid-cols-2 gap-4 mt-4 mb-4">
          <div class="col-span-1 flex justify-center">
            <Button class="w-40" on:click={downloadCard}>Download Card</Button>
          </div>
<!--          <div class="col-span-1 flex justify-center">-->
<!--            <Button class="w-40" on:click={downloadEverything}>Download Full Set</Button>-->
<!--          </div>-->
          <div class="col-span-1 flex justify-center">
            <Button class="w-40" on:click={convertFromCsv}>Convert from CSV</Button>
            <input id="inputCsv" class="absolute w-0" type="file" accept=".csv" on:change={event => onCsvSelected(event)}>
          </div>
          <div class="col-span-1 flex justify-center">
            <Button class="w-40" on:click={exportIntoJson}>Export into JSON</Button>
          </div>
          <div class="col-span-1 flex justify-center">
            <Button class="w-40" on:click={loadFromJson}>Load from JSON</Button>
            <input id="inputJson" class="absolute w-0" type="file" on:change={event => onJsonSelected(event)}>
          </div>
<!--          <div class="col-span-1 flex justify-center">-->
<!--            <Button class="w-40" on:click={downloadForPrintPt2}>Download for Print (Part 2)</Button>-->
<!--          </div>-->
        </div>
      </div>
      <Label class="col-span-2 pb-4" style="color: white">
        Formatting rules
        <div class="max-w-md lg:max-w-4xl border border-dark-600 rounded-2xl p-3">
          <p class="text-white">
            <Kbd class="px-1 py-0 text-white bg-dark-700 border-dark-600">life / fire / water / death / rd4 / rd6 / bkd6 / wd6 / bld6 / gd6</Kbd> - insert the corresponding symbol
            <br>
            Line breaks should be set manually.
          </p>
        </div>
      </Label>
      <Label class="col-span-2 pb-4" style="color: white">
        CSV formatting
        <div class="max-w-md lg:max-w-4xl border border-dark-600 rounded-2xl p-3">
          <p class="text-white">
            The first column contains card names.
            <br>
            The second column contains card descriptions. Use Ctrl+Enter to insert a linebreak in Google Sheets.
            <br>
            The 3rd, 4th, 5th and 6th columns contain numbers for life, fire, water and death correspondingly.
          </p>
        </div>
      </Label>
    </div>
  </div>

  <p class="absolute font-atlantis"></p>
  <p class="absolute font-itc"></p>
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

    .font-modesto {
      font-family: "Modesto Poster", serif;
    }

    @font-face{
      font-family: "Modesto Poster";
      src: url("../../lib/fonts/modesto_poster.woff") format("woff");
    }
</style>
