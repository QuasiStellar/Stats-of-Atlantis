<script lang="ts">
  import { onMount } from "svelte"
  import { Button, Checkbox, Fileupload, Input, Kbd, Label, Li, List, Select, Textarea } from "flowbite-svelte"
  import { Color, defaultEmoji, Item, Modifier, Type, ValueSign } from "../../states"
  import { importImages, updateCanvas } from "../../card_painter"

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

  $: initiative = +initiativeField.replace(/[^0-9]/, "")
  $: primaryActionValue = +primaryActionValueField.replace(/[^0-9]/, "")
  $: modifierValue = +modifierValueField.replace(/[^0-9]/, "")
  $: secondaryDefenseValue = +secondaryDefenseValueField.replace(/[^0-9]/, "")
  $: secondaryMovementValue = +secondaryMovementValueField.replace(/[^0-9]/, "")

  let imagesLoaded = false

  let background: HTMLImageElement | undefined

  let customEmoji: Array<[string, HTMLImageElement]> = []
  let tempCustomEmoji: string | null

  const onFileSelected = (event: Event) => {
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
  }

  let canvas: HTMLCanvasElement
  let context: CanvasRenderingContext2D

  onMount(() => {
    context = canvas.getContext("2d")!

    importImages()
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

  const colors = [
    { value: Color.GOLD, name: "Gold" },
    { value: Color.SILVER, name: "Silver" },
    { value: Color.RED, name: "Red" },
    { value: Color.BLUE, name: "Blue" },
    { value: Color.GREEN, name: "Green" },
    { value: Color.PURPLE, name: "Purple" },
  ]

  const levels = [
    { value: "i", name: "I" },
    { value: "ii", name: "II" },
    { value: "iii", name: "III" },
  ]

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

  const labelColor = (disabled: boolean): string => disabled ? "gray" : "white"

  $: disableHandicap = color !== Color.GOLD
  $: disableLevel = color !== Color.RED && color !== Color.BLUE && color !== Color.GREEN
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
    const filename = "card.png"
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

</script>

<div class="pt-18 md:pt-22">
  <div class="flex items-center flex-col">
    <div class="lg:grid lg:grid-cols-2 lg:gap-6 px-3 lg:px-0">
      <div class="col-span-1 grid grid-cols-6 gap-3 lg:gap-6 max-w-md">
        <div class="col-span-4">
          <Label style="color: white">
            Color
            <Select items={colors} class="bg-dark-800 border-dark-600 text-white disabled:bg-dark-900"
                    bind:value={color} />
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
          <Label style="color: white">
            Name
            <Input type="text" class="bg-dark-800 border-dark-600 text-white disabled:bg-dark-900" bind:value={name} />
          </Label>
        </div>

        <div class="col-span-6">
          <Label style="color: white">
            Description
            <Textarea {...descriptionProps} class="bg-dark-800 border-dark-600 text-white disabled:bg-dark-900"
                      bind:value={description} />
          </Label>
        </div>

        <div class="col-span-3">
          <Label style="color: {labelColor(disableLevel)}">
            Level
            <Select items={levels}
                    class="bg-dark-800 border-dark-600 disabled:border-dark-700 text-white disabled:text-dark-500 disabled:bg-dark-900"
                    bind:value={level} disabled={disableLevel} />
          </Label>
        </div>

        <div class="col-span-3">
          <Label style="color: {labelColor(disableItem)}">
            Item
            <Select items={items}
                    class="bg-dark-800 border-dark-600 disabled:border-dark-700 text-white disabled:text-dark-500 disabled:bg-dark-900"
                    bind:value={item} disabled={disableItem} />
          </Label>
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
            <Fileupload class="bg-dark-800 border-dark-600 text-white" on:change={event => onFileSelected(event)} />
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
                            on:change={event => onFileSelected(event)} />
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
      <div class="col-span-1 max-w-md pt-8 lg:pt-0 flex flex-col items-center justify-center">
        <div class="w-full border border-dark-600 bg-transparent hover:bg-transparent rounded-3xl">
          <canvas width="1192" height="1664" class="w-full rounded-3xl" bind:this={canvas} />
        </div>
        <div class="flex justify-center">
          <Button class="m-5" on:click={downloadCard}>Download</Button>
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
                  Highest initiative (1-4 -> 11, 5-7 -> 12, 8 -> 13),
                  lowest defense (1-2 -> 1, 3-6 -> 2, 7-8 -> 3),
                  lowest movement (1-6 -> 1, 7-8 -> 2),
                  a low-damage attack with a twist or (for some higher-complexity heroes) a skill that provides an
                  option to discard a card or defeat a minion.
                  Gold card is usually used to land a hit before the enemy can escape, or dodge such a hit.
                  Gold card doesn't receive any direct upgrades throughout the game and doesn't have an alternative.
                  It is your hero's signature attack.
                </Li>
                <Li>
                  Silver card -
                  Any initiative,
                  low defense (1 -> 1, 2-4 -> 2, 5-7 -> 3, 8 -> 4),
                  no movement,
                  a skill or (for some higher-complexity heroes) a defense/skill that can do a lot in some situations
                  and nothing in others, due to its conditional nature and no secondary movement.
                  Silver cards almost always require some setup in order to bring any value, but when this happens, they
                  can change the situation drastically.
                  Silver card doesn't receive any direct upgrades throughout the game and doesn't have an alternative.
                  It is you hero's signature skill.
                </Li>
                <Li>
                  Blue card -
                  High initiative (1 -> 8.5, 2 -> 9, 3-5 -> 9.5, 6-7 -> 10, 8 -> 10.5),
                  high defense (2.5 + stat / 2),
                  high movement (1-3 -> 2, 4-8 -> 3),
                  a skill, a movement, or a defense.
                  Blue card is often used for movement, be it evading the red attack or just a reposition.
                  It can also restrict enemies' actions, discard a card, place tokens or apply an effect.
                </Li>
                <Li>
                  Red card -
                  Medium initiative (1 -> 6, 2 -> 7, 3 -> 7.5, 4 -> 8, 5-6 -> 8.5, 7-8 -> 9),
                  highest defense,
                  highest movement (1 -> 3, 2-4 -> 4, 6-8 -> 5),
                  a high-damage attack, the main way to strike through enemies' defenses.
                  The easier it is to land a hit with an attack the weaker the damage is. Extra range is usually
                  compensated by lower defense value.
                </Li>
                <Li>
                  Green card -
                  Lowest initiative (6 - stat / 2),
                  medium defense (1 -> 1.5, 2 -> 2, 3 -> 2.5, 4-5 -> 3, 6-7 -> 3.5, 8 -> 4) or a block,
                  medium movement (1-7 -> 2, 8 -> 3),
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
</div>
