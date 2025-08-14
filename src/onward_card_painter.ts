import heroInfo from "./onward_heroes.json"

export function updateCanvas(
	canvas: HTMLCanvasElement,
	context: CanvasRenderingContext2D,
	background: HTMLImageElement | undefined,
	name: string,
	description: string,
	isQuick: boolean = false,
	isTimed: boolean = false,
  color: HeroColor,
  range: AttackRange,
  type: CardType,
	isLowQuality: boolean = false,
): number {
	clear(canvas, context);

	if (background instanceof HTMLImageElement) {
		context.drawImage(background, 0, 0, 750, 1050);
	}

  const descHeight = addDescription(context, description, 89)
  addImage(context, type == 'ultimate' ? (isLowQuality ? 'frame_ult_light' : 'frame_ult') : (isLowQuality ? 'frame_light' : 'frame'), 0, 0);
  addImage(context, getName(color), 25, 925);
  addImage(context, getPlan(type, range, color), 50, 47);
  if (type != 'ultimate') {
    addImage(context, getDamageImage(type), 600, 60);
  }
  addTitle(context, name, 375, 993, isQuick, isTimed, 46, 32.5, true);
  return descHeight + 163
}

export function updateHeroCanvas(
  canvas: HTMLCanvasElement,
  context: CanvasRenderingContext2D,
  background: HTMLImageElement | undefined,
  heroIcon: HTMLImageElement | undefined,
  name: string,
  fraction: Fraction,
  role: HeroRole,
  title: string,
  attackRange: AttackRange,
  abilityName: string,
  abilityDescription: string,
  isUpgraded: boolean,
	isLowQuality: boolean = false,
): number {
  clear(canvas, context);

  if (background instanceof HTMLImageElement) {
    context.drawImage(background, 0, 0, 1407, 1407);
  }

  const descHeight = addAbility(context, abilityName, abilityDescription, 105)

  if (heroIcon instanceof HTMLImageElement) {
    context.save()
    context.beginPath()
    context.arc(1115 + 208 / 2, 1133 + 208 / 2, 208 / 2, 0, Math.PI * 2)
    context.closePath()
    context.clip()
    context.drawImage(heroIcon, 1115, 1133, 208, 208)
    context.restore()
  }

  const color = getColor(role)

  addImage(context, isUpgraded ? (isLowQuality ? 'hero_frame_upgraded_light' : 'hero_frame_upgraded') : (isLowQuality ? 'hero_frame_light' : 'hero_frame'), 0, 0);
  addImage(context, getBottomPanel(color), 18, 1238);
  addImage(context, getSidePanel(color), 1250, 61);
  addImage(context, getFallbackPlan(attackRange, color, isUpgraded), 56, 63);
  addHeroTitle(context, name, fraction, role, title, 566, 1337);
  return descHeight + 320
}

import { onwardHeavyImageNames, onwardImageNames, onwardLightImageNames } from './states';

export const images: Map<string, HTMLImageElement> = new Map();

export function importImages(isLowQuality: boolean = false) {
	const names = onwardImageNames.concat(isLowQuality ? onwardLightImageNames : onwardHeavyImageNames)
  return Promise.all(
		names.map(async (imageName: string) => {
      const path = (await import(`./lib/images/onward/${imageName}.png`)).default
      const image = new Image()
      image.src = path
      images.set(imageName, image)
      await new Promise(resolve => image.onload = resolve)
    })
  )
}

function getDamageImage(type: CardType): string {
	switch (type) {
		case 'flash':
		case 'zeroThree':
		case 'fourOne':
      return "damage_two"
    case 'threeOne':
      return 'damage_three'
    case 'twoTwo':
      return 'damage_one_plus'
    default:
      return ''
  }
}

function getName(color: HeroColor): string {
  return 'name_' + color
}

function getBottomPanel(color: HeroColor): string {
  return 'bottom_panel_' + color
}

function getSidePanel(color: HeroColor): string {
  return 'side_panel_' + color
}

function getColor(role: HeroRole): HeroColor {
  switch (role) {
    case "Slayer":
    case "Marksman":
      return 'red'
    case "Tank":
    case "Controller":
      return 'blue'
    case "Mage":
    case "Laner":
      return 'green'
    case "Jungler":
    case "Warrior":
      return 'yellow'
  }
}

function getPlan(type: CardType, attackRange: AttackRange, color: HeroColor): string {
  switch (type) {
    case "ultimate":
      if (attackRange == 'melee') {
        return 'plan_' + color + '_three_two'
      } else {
        return 'plan_' + color + '_one_three'
      }
    case "zeroThree":
      return 'plan_' + color + '_zero_three'
    case "twoTwo":
      return 'plan_' + color + '_two_two'
    case "threeOne":
      return 'plan_' + color + '_three_one'
    case "fourOne":
      return 'plan_' + color + '_four_one'
    case "flash":
      return 'plan_' + color + '_one_two'
  }
}

function getFallbackPlan(attackRange: AttackRange, color: HeroColor, isUpgraded: boolean): string {
  return "fallback_plan_" + color + "_" + attackRange + (isUpgraded ? "_three_one" : "_two_one")
}

function clear(canvas: HTMLCanvasElement, context: CanvasRenderingContext2D): void {
  context.clearRect(0, 0, canvas.width, canvas.height)
}

function addImage(context: CanvasRenderingContext2D, name: string, x: number, y: number): void {
  context.drawImage(<CanvasImageSource>images.get(name), x, y)
}

function addTitle(context: CanvasRenderingContext2D, text: string, x: number, y: number, isQuick: boolean, isTimed: boolean, uppercaseSize: number, lowercaseSize: number, shouldCenter: boolean) {
  const textParts = splitCapitalized(text, uppercaseSize, lowercaseSize)

  const startX = x;
  const startY = y;

  context.textBaseline = 'alphabetic';
  context.textAlign = 'left'
  context.lineJoin = 'round'

  let width = isQuick || isTimed ? 53 : 0

  textParts.forEach(segment => {
    context.font = `${segment.size}px Atlantis Regular`;
    width += context.measureText(segment.text).width;
  })

  let currentX = shouldCenter ? startX - width / 2 : startX;

  if (isQuick) {
    context.drawImage(<CanvasImageSource>images.get("quick"), currentX, startY - 36, 28, 45)
    currentX += 53;
  } else if (isTimed) {
		context.drawImage(<CanvasImageSource>images.get("timed"), currentX, startY - 36, 39, 45)
		currentX += 64;
	}

  textParts.forEach(segment => {
    context.font = `${segment.size}px Atlantis Regular`;
    const metrics = context.measureText(segment.text);

    // Outline
    context.strokeStyle = 'black';
    context.lineWidth = 6;
    context.strokeText(segment.text, currentX, startY);

    // Inner fill
    context.fillStyle = '#FEFAC6';
    context.fillText(segment.text, currentX, startY);

    currentX += metrics.width;
  });
}

function addHeroTitle(context: CanvasRenderingContext2D, name: string, fraction: Fraction, role: HeroRole, title: string, x: number, y: number) {
  const fullTitle = title.substring(0, 2) == 'of' ? role + ' ' + title : (title.length == 0 ? role : title + ' ' + role)

  const nameParts = splitCapitalized(name, 66, 48)
  const fullTitleParts = splitCapitalized(fullTitle, 43, 32)

  const startX = x;
  const startY = y;

  context.textBaseline = 'alphabetic';
  context.textAlign = 'left'
  context.lineJoin = 'round'

  let width = 100

  nameParts.forEach(segment => {
    context.font = `${segment.size}px Atlantis Regular`;
    width += context.measureText(segment.text).width;
  })
  fullTitleParts.forEach(segment => {
    context.font = `${segment.size}px Atlantis Regular`;
    width += context.measureText(segment.text).width;
  })

  let currentX = startX - width / 2;

  nameParts.forEach(segment => {
    context.font = `${segment.size}px Atlantis Regular`;
    const metrics = context.measureText(segment.text);

    // Outline
    context.strokeStyle = 'black';
    context.lineWidth = 6;
    context.strokeText(segment.text, currentX, startY);

    // Inner fill
    context.fillStyle = '#FEFAC6';
    context.fillText(segment.text, currentX, startY);

    currentX += metrics.width;
  });

  currentX += 27
  context.drawImage(<CanvasImageSource>images.get(fraction.toLowerCase()), currentX, startY - 39, 50, 50)
  currentX += 79;

  fullTitleParts.forEach(segment => {
    context.font = `${segment.size}px Atlantis Regular`;
    const metrics = context.measureText(segment.text);

    // Outline
    context.strokeStyle = 'black';
    context.lineWidth = 6;
    context.strokeText(segment.text, currentX, startY - 5);

    // Inner fill
    context.fillStyle = '#FEFAC6';
    context.fillText(segment.text, currentX, startY - 5);

    currentX += metrics.width;
  });
}

function splitCapitalized(s: string, uppercaseSize: number, lowercaseNumber: number): Array<{ text: string; size: number }> {
  if (s.length === 0) return [];

  const result: string[] = [];
  let currentSub = s[0];
  let currentType = isUpperCase(currentSub) ? 'upper' : 'other';

  for (let i = 1; i < s.length; i++) {
    const char = s[i];
    const charType = isUpperCase(char) ? 'upper' : 'other';

    if (charType === currentType) {
      currentSub += char;
    } else {
      result.push(currentSub);
      currentSub = char;
      currentType = charType;
    }
  }

  result.push(currentSub);
  return result.map(part => ({
    text: part.toUpperCase(),
    size: /^[A-Z ]+$/.test(part) ? uppercaseSize : lowercaseNumber
  }));
}

function isUpperCase(c: string): boolean {
  return /^[A-Z ]$/.test(c)
}

function addDescription(context: CanvasRenderingContext2D, text: string, x: number): number {
  const lineHeight = 38
  const extraParagraphSpacing = 12
  const maxLineWidth = 574
  const specialWords = ['BURN', 'DISARM', 'STUN', 'FREEZE', 'SILENCE']
  const targetImage = <CanvasImageSource>images.get("target") as HTMLImageElement
  const targetItalicsImage = <CanvasImageSource>images.get("target_italics") as HTMLImageElement
  const fontSize = '30px'
  const spaceFontSize = '18px'
  const fontName = 'ITC Charter'

  const tempCanvas = document.createElement("canvas")
  tempCanvas.width = 750
  tempCanvas.height = 1050
  const ctx = tempCanvas.getContext("2d")!

  ctx.font = fontSize + ' ' + fontName
  ctx.textBaseline = 'top'

  const paragraphs = text.split('\n')
  let currentY = 0;

  for (const paragraph of paragraphs) {
    currentY = processParagraph(paragraph, x, currentY)
    if (paragraph.length == 0 || paragraph[0] != '-') {
      currentY += extraParagraphSpacing
    }
  }

  const descHeight = currentY

  const gradient = ctx.createLinearGradient(0, 920 - currentY, 0, 920 - currentY - 70)
  gradient.addColorStop(0, 'rgba(36, 26, 25, 0.827)')
  gradient.addColorStop(1, 'rgba(0, 0, 0, 0)')
  context.fillStyle = gradient
  context.fillRect(0, 920 - currentY - 70, 750, 920 - currentY)
  context.drawImage(tempCanvas, 0, 0, 750, 1050, 0, 920 - currentY, 750, 1050)
  
  return descHeight

  function processParagraph(text: string, x: number, y: number): number {
    const tokens = tokenize(text);
    const lines = splitLines(tokens);
    const startsWithTilde = lines[0]?.tokens[0]?.type === 'text' && lines[0].tokens[0].value.startsWith('~');
    let currentY = y;

    for (const line of lines) {
      currentY = drawLine(line, x, currentY, startsWithTilde);
    }

    return currentY;
  }

  function tokenize(text: string): Token[] {
    const tokens: Token[] = [];
    const regex = /(::target::|\b(BURN|DISARM|STUN|FREEZE|SILENCE)\b|\s+|\S+)/gi;

    let match;
    while ((match = regex.exec(text)) !== null) {
      const [fullMatch] = match;

      if (fullMatch.match(/::target::/gi)) {
        tokens.push({ type: 'image' });
      }
      else if (specialWords.includes(fullMatch.toUpperCase())) {
        tokens.push({ type: 'keyword', value: fullMatch });
      }
      else if (fullMatch.trim() === '') {
        // Handle whitespace as separate token
        tokens.push({ type: 'text', value: fullMatch });
      }
      else {
        tokens.push({ type: 'text', value: fullMatch });
      }
    }

    return tokens;
  }

  function splitLines(tokens: Token[]): Line[] {
    const lines: Line[] = [];
    let currentLine: Token[] = [];
    let currentWidth = 0;

    for (const token of tokens) {
      const width = measureToken(token, false);

      if (currentWidth + width > maxLineWidth && (token.type === 'image' || token.value != ' ')) {
        lines.push({ tokens: currentLine });
        currentLine = [];
        currentWidth = 0;
      }

      currentLine.push(token);
      currentWidth += width;
    }

    if (currentLine.length > 0) {
      lines.push({ tokens: currentLine });
    }

    return lines;
  }

  function measureToken(token: Token, isItalic: boolean): number {
    if (token.type === 'image') return targetImage.width;

    ctx.save();
    const isSpace = token.value == ' '
    const fontSizeAdjusted = isSpace ? spaceFontSize : fontSize
    ctx.font = isItalic ? 'italic ' + fontSizeAdjusted + ' ' + fontName : fontSizeAdjusted + ' ' + fontName;
    const width = ctx.measureText(token.value.replace(/~/g, '')).width;
    ctx.restore();
    return width;
  }

  function drawLine(line: Line, x: number, y: number, startsWithTilde: boolean): number {
    if (line.tokens[0]?.type === 'text') {
      line.tokens[0].value = line.tokens[0].value.replace(/~/g, '')
    }
    let currentX = x;

    for (const token of line.tokens) {
      if (token.type === 'image') {
        if (startsWithTilde) {
          ctx.drawImage(targetItalicsImage, currentX, y);
        } else {
          ctx.drawImage(targetImage, currentX, y - 1);
        }
        currentX += targetImage.width;
        continue;
      }

      const isKeyword = token.type === 'keyword';
      const isSpecialWord = specialWords.includes(token.value.toUpperCase());
      const useHighlight = startsWithTilde || isKeyword || isSpecialWord;

      const isSpace = token.value == ' '
      const fontSizeAdjusted = isSpace ? spaceFontSize : fontSize

      ctx.font = startsWithTilde ? 'italic ' + fontSizeAdjusted + ' ' + fontName : fontSizeAdjusted + ' ' + fontName;
      ctx.strokeStyle = 'black';
      ctx.lineWidth = 1;

      // Draw outline
      ctx.strokeText(token.value, currentX, y);

      // Draw fill
      ctx.fillStyle = useHighlight ? '#FEFAC6' : 'white';
      ctx.fillText(token.value, currentX, y);

      currentX += measureToken(token, startsWithTilde);
    }

    return y + lineHeight;
  }
}

function addAbility(context: CanvasRenderingContext2D, abilityName: string, abilityDescription: string, x: number): number {
  const lineHeight = 42;
  const extraParagraphSpacing = 12;
  const extraEmptyParagraphSpacing = -12;
  const specialWords = ['BURN', 'DISARM', 'STUN', 'FREEZE', 'SILENCE'];
  const targetImage = <CanvasImageSource>images.get("target_large") as HTMLImageElement
  const targetItalicsImage = <CanvasImageSource>images.get("target_italics") as HTMLImageElement
  const fontSize = '40px'
  const spaceFontSize = '24px'
  const fontName = 'ITC Charter'
  const lowerBorder = 1209

  const tempCanvas = document.createElement("canvas")
  tempCanvas.width = 1407
  tempCanvas.height = 1407
  const ctx = tempCanvas.getContext("2d")!

  ctx.font = fontSize + ' ' + fontName;
  ctx.textBaseline = 'top';

  const paragraphs = abilityDescription.split('\n');
  let currentY = 0;

  for (const paragraph of paragraphs) {
    currentY = processParagraph(paragraph, x, currentY);
    if (paragraph.length == 0) {
      currentY += extraEmptyParagraphSpacing;
    } else {
      currentY += extraParagraphSpacing;
    }
  }
  
  const descHeight = currentY

  const gradient = ctx.createLinearGradient(0, lowerBorder - currentY - 70, 0, lowerBorder - currentY - 270);
  gradient.addColorStop(0, 'rgba(36, 26, 25, 0.927)');
  gradient.addColorStop(1, 'rgba(0, 0, 0, 0)');
  context.fillStyle = gradient;
  context.fillRect(0, lowerBorder - currentY - 270, 1407, lowerBorder - currentY - 70);
  context.drawImage(tempCanvas, 0, 0, 1407, 1407, 0, lowerBorder - currentY, 1407, 1407)

  addTitle(context, abilityName, x, lowerBorder - 47 - currentY, false, false, 55, 38, false)
  
  return descHeight

  function processParagraph(text: string, x: number, y: number): number {
    const tokens = tokenize(text);
    const lines = splitLines(tokens);
    let currentY = y;

    for (const line of lines) {
      currentY = drawLine(line, x, currentY);
    }

    return currentY;
  }

  function tokenize(text: string): Token[] {
    const tokens: Token[] = [];
    const regex = /(::target::|\b(BURN|DISARM|STUN|FREEZE|SILENCE)\b|\s+|\S+)/gi;

    let match;
    while ((match = regex.exec(text)) !== null) {
      const [fullMatch] = match;

      if (fullMatch.match(/::target::/gi)) {
        tokens.push({ type: 'image' });
      }
      else if (specialWords.includes(fullMatch.toUpperCase())) {
        tokens.push({ type: 'keyword', value: fullMatch });
      }
      else if (fullMatch.trim() === '') {
        // Handle whitespace as separate token
        tokens.push({ type: 'text', value: fullMatch });
      }
      else {
        tokens.push({ type: 'text', value: fullMatch });
      }
    }

    return tokens;
  }

  function splitLines(tokens: Token[]): Line[] {
    const lines: Line[] = [];
    lines.push({ tokens: tokens });
    return lines;
  }

  function measureToken(token: Token, isItalic: boolean): number {
    if (token.type === 'image') return targetImage.width;

    ctx.save();
    const isSpace = token.value == ' '
    const fontSizeAdjusted = isSpace ? spaceFontSize : fontSize
    ctx.font = isItalic ? 'italic ' + fontSizeAdjusted + ' ' + fontName : fontSizeAdjusted + ' ' + fontName;
    const width = ctx.measureText(token.value.replace(/~/g, '')).width;
    ctx.restore();
    return width;
  }

  function drawLine(line: Line, x: number, y: number): number {
    const startsWithTilde = line.tokens[0]?.type === 'text' && line.tokens[0].value.startsWith('~');
    if (line.tokens[0]?.type === 'text') {
      line.tokens[0].value = line.tokens[0].value.replace(/~/g, '')
    }
    let currentX = x;

    for (const token of line.tokens) {
      if (token.type === 'image') {
        if (startsWithTilde) {
          ctx.drawImage(targetItalicsImage, currentX, y);
        } else {
          ctx.drawImage(targetImage, currentX, y - 1);
        }
        currentX += targetImage.width;
        continue;
      }

      const isKeyword = token.type === 'keyword';
      const isSpecialWord = specialWords.includes(token.value.toUpperCase());
      const useHighlight = startsWithTilde || isKeyword || isSpecialWord;

      const isSpace = token.value == ' '
      const fontSizeAdjusted = isSpace ? spaceFontSize : fontSize

      ctx.font = startsWithTilde ? 'italic ' + fontSizeAdjusted + ' ' + fontName : fontSizeAdjusted + ' ' + fontName;
      ctx.strokeStyle = 'black';
      ctx.lineWidth = 1;

      // Draw outline
      ctx.strokeText(token.value, currentX, y);

      // Draw fill
      ctx.fillStyle = useHighlight ? '#FEFAC6' : 'white';
      ctx.fillText(token.value, currentX, y);

      currentX += measureToken(token, startsWithTilde);
    }

    return y + lineHeight;
  }
}

export async function paintHero(heroName: string, canvas: HTMLCanvasElement) {
  const context = canvas.getContext('2d')!
  context.clearRect(0, 0, canvas.width, canvas.height);

  const hero = heroInfo[heroName[0].toUpperCase() + heroName.slice(1).toLowerCase() as keyof typeof heroInfo] as {
    name: string,
    fraction: string,
    role: string,
    title: string,
    range: string,
    abilityName: string,
    abilityDescription: string,
    upgradedAbilityName: string,
    upgradedAbilityDescription: string,
    ultimate: { name: string, description: string, isQuick?: boolean, isTimed?: boolean },
    zeroThreeCard: { name: string, description: string, isQuick?: boolean, isTimed?: boolean },
    twoTwoCard: { name: string, description: string, isQuick?: boolean, isTimed?: boolean },
    threeOneCard: { name: string, description: string, isQuick?: boolean, isTimed?: boolean },
    fourOneCard: { name: string, description: string, isQuick?: boolean, isTimed?: boolean },
  }

  const blackImage = await createPixelImage()

  const heroCanvas = document.createElement("canvas")
  heroCanvas.width = 1407
  heroCanvas.height = 1407
  const heroContext = heroCanvas.getContext("2d")!
  updateHeroCanvas(
    heroCanvas,
    heroContext,
    blackImage,
    blackImage,
    hero.name,
    hero.fraction[0].toUpperCase() + hero.fraction.slice(1).toLowerCase() as Fraction,
    hero.role[0].toUpperCase() + hero.role.slice(1).toLowerCase() as HeroRole,
    hero.title,
    hero.range.toLowerCase() as AttackRange,
    hero.abilityName,
    hero.abilityDescription,
    false,
		true,
  )

  const heroUpgradedCanvas = document.createElement("canvas")
  heroUpgradedCanvas.width = 1407
  heroUpgradedCanvas.height = 1407
  const heroUpgradedContext = heroUpgradedCanvas.getContext("2d")!
  const upgradedHeight = updateHeroCanvas(
    heroUpgradedCanvas,
    heroUpgradedContext,
    blackImage,
    blackImage,
    hero.name,
    hero.fraction[0].toUpperCase() + hero.fraction.slice(1).toLowerCase() as Fraction,
    hero.role[0].toUpperCase() + hero.role.slice(1).toLowerCase() as HeroRole,
    hero.title,
    hero.range.toLowerCase() as AttackRange,
    hero.upgradedAbilityName,
    hero.upgradedAbilityDescription,
    true,
		true,
  )

  const ultimateCanvas = document.createElement("canvas")
  ultimateCanvas.width = 750
  ultimateCanvas.height = 1050
  const ultimateContext = ultimateCanvas.getContext("2d")!
  const ultimateHeight = updateCanvas(
    ultimateCanvas,
    ultimateContext,
    blackImage,
    hero.ultimate.name,
    hero.ultimate.description,
    hero.ultimate.isQuick,
		hero.ultimate.isTimed,
    getColor(hero.role[0].toUpperCase() + hero.role.slice(1).toLowerCase() as HeroRole),
    hero.range.toLowerCase() as AttackRange,
    "ultimate",
		true,
  )

  const zeroThreeCanvas = document.createElement("canvas")
  zeroThreeCanvas.width = 750
  zeroThreeCanvas.height = 1050
  const zeroThreeContext = zeroThreeCanvas.getContext("2d")!
  const zeroThreeHeight = updateCanvas(
    zeroThreeCanvas,
    zeroThreeContext,
    blackImage,
    hero.zeroThreeCard.name,
    hero.zeroThreeCard.description,
    hero.zeroThreeCard.isQuick,
		hero.zeroThreeCard.isTimed,
    getColor(hero.role[0].toUpperCase() + hero.role.slice(1).toLowerCase() as HeroRole),
    hero.range.toLowerCase() as AttackRange,
    "zeroThree",
		true,
  )

  const twoTwoCanvas = document.createElement("canvas")
  twoTwoCanvas.width = 750
  twoTwoCanvas.height = 1050
  const twoTwoContext = twoTwoCanvas.getContext("2d")!
  const twoTwoHeight = updateCanvas(
    twoTwoCanvas,
    twoTwoContext,
    blackImage,
    hero.twoTwoCard.name,
    hero.twoTwoCard.description,
    hero.twoTwoCard.isQuick,
		hero.twoTwoCard.isTimed,
    getColor(hero.role[0].toUpperCase() + hero.role.slice(1).toLowerCase() as HeroRole),
    hero.range.toLowerCase() as AttackRange,
    "twoTwo",
		true,
  )

  const threeOneCanvas = document.createElement("canvas")
  threeOneCanvas.width = 750
  threeOneCanvas.height = 1050
  const threeOneContext = threeOneCanvas.getContext("2d")!
  const threeOneHeight = updateCanvas(
    threeOneCanvas,
    threeOneContext,
    blackImage,
    hero.threeOneCard.name,
    hero.threeOneCard.description,
    hero.threeOneCard.isQuick,
		hero.threeOneCard.isTimed,
    getColor(hero.role[0].toUpperCase() + hero.role.slice(1).toLowerCase() as HeroRole),
    hero.range.toLowerCase() as AttackRange,
    "threeOne",
		true,
  )

  const fourOneCanvas = document.createElement("canvas")
  fourOneCanvas.width = 750
  fourOneCanvas.height = 1050
  const fourOneContext = fourOneCanvas.getContext("2d")!
  const fourOneHeight = updateCanvas(
    fourOneCanvas,
    fourOneContext,
    blackImage,
    hero.fourOneCard.name,
    hero.fourOneCard.description,
    hero.fourOneCard.isQuick,
		hero.fourOneCard.isTimed,
    getColor(hero.role[0].toUpperCase() + hero.role.slice(1).toLowerCase() as HeroRole),
    hero.range.toLowerCase() as AttackRange,
    "fourOne",
		true,
  )

  context.drawImage(fourOneCanvas, 0, 0, 750, 1050, 328, fourOneHeight + threeOneHeight + twoTwoHeight + zeroThreeHeight + ultimateHeight + upgradedHeight + 357, 750, 1050)
  context.drawImage(threeOneCanvas, 0, 0, 750, 1050, 328, threeOneHeight + twoTwoHeight + zeroThreeHeight + ultimateHeight + upgradedHeight + 357, 750, 1050)
  context.drawImage(twoTwoCanvas, 0, 0, 750, 1050, 328, twoTwoHeight + zeroThreeHeight + ultimateHeight + upgradedHeight + 357, 750, 1050)
  context.drawImage(zeroThreeCanvas, 0, 0, 750, 1050, 328, zeroThreeHeight + ultimateHeight + upgradedHeight + 357, 750, 1050)
  context.drawImage(ultimateCanvas, 0, 0, 750, 1050, 328, ultimateHeight + upgradedHeight + 357, 750, 1050)
  context.drawImage(heroUpgradedCanvas, 0, 0, 1407, 1407, 0, upgradedHeight, 1407, 1407)
  context.drawImage(heroCanvas, 0, 0, 1407, 1407, 0, 0, 1407, 1407)
}

function createPixelImage(): Promise<HTMLImageElement> {
  return new Promise((resolve, reject) => {
    const canvas = document.createElement('canvas')
    canvas.width = 1
    canvas.height = 1

    const ctx = canvas.getContext('2d')
    if (!ctx) {
      reject(new Error('Could not get canvas context'))
      return
    }

    ctx.fillStyle = '#111827'
    ctx.fillRect(0, 0, 1, 1)

    const img = new Image()
    img.onload = () => resolve(img)
    img.onerror = reject

    img.src = canvas.toDataURL()
  })
}

type Token = { type: 'text', value: string } | { type: 'keyword', value: string } | { type: 'image' };
type Line = { tokens: Token[] };

export type HeroColor = "red" | "blue" | "green" | "yellow"
export type AttackRange = "melee" | "ranged"
export type CardType = "ultimate" | "zeroThree" | "twoTwo" | "threeOne" | "fourOne" | "flash"
export type HeroRole = "Slayer" | "Marksman" | "Tank" | "Controller" | "Mage" | "Laner" | "Jungler" | "Warrior"
export type Fraction = "Kurumo" | "Liothan" | "Taulot" | "Nupten"
