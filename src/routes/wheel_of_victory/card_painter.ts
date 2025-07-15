
export function updateCanvas(
	canvas: HTMLCanvasElement,
	context: CanvasRenderingContext2D,
	background: HTMLImageElement | undefined,
	name: string,
	description: string,
	life: number = 0,
  fire: number = 0,
  water: number = 0,
  death: number = 0,
) {
	clear(canvas, context);

	addImage(context, "frame", 0, 0);

  addDescription(context, description, 89)

	addTitle(context, name, 404, 95, 420);

	if (life > 0) {
		addSquishedOutlinedText(context, life.toString(), 82, 123, 100, 10, 0.92);
	}
	if (fire > 0) {
		addSquishedOutlinedText(context, fire.toString(), 725, 123, 100, 10, 0.92);
	}
	if (water > 0) {
		addSquishedOutlinedText(context, water.toString(), 77, 1183, 100, 10, 0.92);
	}
	if (death > 0) {
		addSquishedOutlinedText(context, death.toString(), 733, 1183, 100, 10, 0.92);
	}

	if (background instanceof HTMLImageElement) {
		const descHeight = description.split(/\r\n|\r|\n/).length
		const shift = descHeight > 4 ? (descHeight - 4) * 67 : 0;
		context.drawImage(background, 50, 120, 708, 700 - shift);
	}
}

export const images: Map<string, HTMLImageElement> = new Map();

export function importImages() {
  return Promise.all(
		imageNames.map(async (imageName: string) => {
      const path = (await import(`../../lib/images/wheel_of_victory/${imageName}.png`)).default
      const image = new Image()
      image.src = path
      images.set(imageName, image)
      await new Promise(resolve => image.onload = resolve)
    })
  )
}

function clear(canvas: HTMLCanvasElement, context: CanvasRenderingContext2D): void {
  context.clearRect(0, 0, canvas.width, canvas.height)
}

function addImage(context: CanvasRenderingContext2D, name: string, x: number, y: number): void {
  context.drawImage(<CanvasImageSource>images.get(name), x, y)
}

function addTitle(context: CanvasRenderingContext2D, text: string, x: number, y: number, widthLimit?: number) {
	context.textAlign = "center"
	context.font = "66px Modesto Poster"
	context.fillText(text, x, y, widthLimit)
}

function addDescription(context: CanvasRenderingContext2D, text: string, x: number) {
	const paragraphs = text.split(/\r\n|\r|\n/);
  const lifeImage = <CanvasImageSource>images.get("life") as HTMLImageElement
	const fireImage = <CanvasImageSource>images.get("fire") as HTMLImageElement
	const waterImage = <CanvasImageSource>images.get("water") as HTMLImageElement
	const deathImage = <CanvasImageSource>images.get("death") as HTMLImageElement
	const rd4Image = <CanvasImageSource>images.get("rd4") as HTMLImageElement
	const rd6Image = <CanvasImageSource>images.get("rd6") as HTMLImageElement
	const bkd6Image = <CanvasImageSource>images.get("bkd6") as HTMLImageElement
	const wd6Image = <CanvasImageSource>images.get("wd6") as HTMLImageElement
	const bld6Image = <CanvasImageSource>images.get("bld6") as HTMLImageElement
	const gd6Image = <CanvasImageSource>images.get("gd6") as HTMLImageElement
  const fontSize = '45px'
  const spaceFontSize = '27px'
  const fontName = 'ITC Charter'

	if (paragraphs.length > 4) {
		for (let i = 0; i < paragraphs.length - 4; i++) {
			for (let j = 1; j <= 7; j++) {
				addImage(context, "description_frame_inside", 62, 924 - i * 67 - 12 * j)
			}
		}
		addImage(context, "description_frame_top", 62, 809 - 67 * (paragraphs.length - 4))
	}

  const tempCanvas = document.createElement("canvas")
  tempCanvas.width = 808
  tempCanvas.height = 1226
  const ctx = tempCanvas.getContext("2d")!

  ctx.font = fontSize + ' ' + fontName
  ctx.textBaseline = 'top'
	let paragraphYs: number[] = [];
	switch (paragraphs.length) {
		case 0:
			break;
		case 1:
			paragraphYs = [1015];
			break;
		case 2:
			paragraphYs = [975, 1055];
			break;
		case 3:
			paragraphYs = [935, 1015, 1095];
			break;
		default:
			paragraphYs = Array.from({length: paragraphs.length}, (_, i) => 1115 - 67 * (paragraphs.length - 1 - i))
			break;
	}

  for (const [index, paragraph] of paragraphs.entries()) {
    processParagraph(paragraph, x, paragraphYs[index])
  }

  context.drawImage(tempCanvas, 0, 0, 808, 1226, 0, 0, 808, 1226)

  function processParagraph(text: string, x: number, y: number) {
    const tokens = tokenize(text);
    const lines = splitLines(tokens);

    for (const line of lines) {
      drawLine(line, x, y);
    }
	}

  function tokenize(text: string): Token[] {
    const tokens: Token[] = [];
    const regex = /(\b(LIFE|FIRE|WATER|DEATH|RD4|RD6|BKD6|WD6|BLD6|GD6)\b|\s+|\S+)/gi;

    let match;
    while ((match = regex.exec(text)) !== null) {
      const [fullMatch] = match;

      if (fullMatch.match(/Life/gi)) {
				tokens.push({ type: 'image', value: 'life' });
			} else if (fullMatch.match(/Fire/gi)) {
				tokens.push({ type: 'image', value: 'fire' });
			} else if (fullMatch.match(/Water/gi)) {
				tokens.push({ type: 'image', value: 'water' });
			} else if (fullMatch.match(/Death/gi)) {
				tokens.push({ type: 'image', value: 'death' });
			} else if (fullMatch.match(/rd4/gi)) {
				tokens.push({ type: 'image', value: 'rd4' });
			} else if (fullMatch.match(/rd6/gi)) {
				tokens.push({ type: 'image', value: 'rd6' });
			} else if (fullMatch.match(/bkd6/gi)) {
				tokens.push({ type: 'image', value: 'bkd6' });
			} else if (fullMatch.match(/wd6/gi)) {
				tokens.push({ type: 'image', value: 'wd6' });
			} else if (fullMatch.match(/bld6/gi)) {
				tokens.push({ type: 'image', value: 'bld6' });
			} else if (fullMatch.match(/gd6/gi)) {
				tokens.push({ type: 'image', value: 'gd6' });
      } else if (fullMatch.trim() === '') {
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
    const currentLine: Token[] = [];

    for (const token of tokens) {
      currentLine.push(token);
    }

		lines.push({ tokens: currentLine });

    return lines;
  }

  function measureToken(token: Token): number {
    if (token.type === 'image') return lifeImage.width;

    ctx.save();
    const isSpace = token.value == ' '
    const fontSizeAdjusted = isSpace ? spaceFontSize : fontSize
    ctx.font = fontSizeAdjusted + ' ' + fontName;
    const width = ctx.measureText(token.value.replace(/~/g, '')).width;
    ctx.restore();
    return width;
  }

  function drawLine(line: Line, x: number, y: number) {

		const lineCanvas = document.createElement("canvas")
		lineCanvas.width = 808
		lineCanvas.height = 1226
		const lineCtx = lineCanvas.getContext("2d")!

    let currentX = 0;

    for (const token of line.tokens) {
      if (token.type === 'image') {
				let image = lifeImage
				switch (token.value) {
					case "life":
						image = lifeImage;
						break;
					case "fire":
						image = fireImage;
						break;
					case "water":
						image = waterImage;
						break;
					case "death":
						image = deathImage;
						break;
					case "rd4":
						image = rd4Image;
						break;
					case "rd6":
						image = rd6Image;
						break;
					case "bkd6":
						image = bkd6Image;
						break;
					case "wd6":
						image = wd6Image;
						break;
					case "bld6":
						image = bld6Image;
						break;
					case "gd6":
						image = gd6Image;
						break;
				}
				lineCtx.drawImage(image, currentX, y - 35);
        currentX += image.width;
        continue;
      }

      const isSpace = token.value == ' '
      const fontSizeAdjusted = isSpace ? spaceFontSize : fontSize

			lineCtx.font = fontSizeAdjusted + ' ' + fontName;
			// lineCtx.strokeStyle = 'black';
			// lineCtx.lineWidth = 1;

      // Draw outline
			// lineCtx.strokeText(token.value, currentX, 0);

      // Draw fill
			lineCtx.fillStyle = 'black';
			lineCtx.fillText(token.value, currentX, y);

      currentX += measureToken(token);
    }

		if (y > 1090) {
			if (currentX < 500) {
				ctx.drawImage(lineCanvas, 0, 0, 808, 1226, 404 - currentX / 2, 0, 808, 1226)
			} else {
				ctx.drawImage(lineCanvas, 0, 0, 808 / 500 * currentX, 1226, 404 - 250, 0, 808, 1226)
			}
		} else {
			if (currentX < 600) {
				ctx.drawImage(lineCanvas, 0, 0, 808, 1226, 404 - currentX / 2, 0, 808, 1226)
			} else {
				ctx.drawImage(lineCanvas, 0, 0, 808 / 600 * currentX, 1226, 404 - 300, 0, 808, 1226)
			}
		}
  }
}

function addSquishedOutlinedText(
	context: CanvasRenderingContext2D,
	text: string,
	x: number,
	y: number,
	fontSize: number,
	outlineSize: number,
	squishness: number,
): number {
	const tempCanvas = document.createElement('canvas')
	tempCanvas.width = 400
	tempCanvas.height = 400
	const tempContext = tempCanvas.getContext('2d')!
	tempContext.textAlign = "center"
	tempContext.font = `${fontSize}px Modesto Poster`
	tempContext.lineWidth = outlineSize
	tempContext.strokeText(text, 200, 200)
	tempContext.fillStyle = "white"
	tempContext.fillText(text, 200, 200)
	tempContext.fillStyle = "black"

	context.drawImage(tempCanvas, 0, 0, 400, 400, x - 200 * squishness, y - 200, 400 * squishness, 400)
	return tempContext.measureText(text).width * squishness
}

type Token = { type: 'text', value: string } | { type: 'image', value: string };
type Line = { tokens: Token[] };

const imageNames = [
	"frame",
	"life",
	"fire",
	"water",
	"death",
	"rd4",
	"rd6",
	"bkd6",
	"wd6",
	"bld6",
	"gd6",
	"description_frame_top",
	"description_frame_inside",
]
