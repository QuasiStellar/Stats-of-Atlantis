export function updateCanvas(
	canvas: HTMLCanvasElement,
	context: CanvasRenderingContext2D,
	customEmoji: Array<[string, HTMLImageElement]>,
	background: HTMLImageElement | undefined,
	color: Color,
	handicap: boolean,
	name: string,
	description: string,
	level: string,
	item: Item,
	initiative: number,
	primaryActionType: Type,
	primaryActionValue: number,
	primaryActionValueSign: ValueSign,
	modifier: Modifier,
	modifierValue: number,
	modifierValueSign: ValueSign,
	secondaryMovementValue: number,
	secondaryDefenseValue: number,
	initiativeBonus: number = 0,
	attackBonus: number = 0,
	defenseBonus: number = 0,
	areaBonus: number = 0,
	rangeBonus: number = 0,
	movementBonus: number = 0,
	showNumbers: boolean = true,
	attackStat: number = 0,
	defenseStat: number = 0,
	initiativeStat: number = 0,
	movementStat: number = 0
): void {
	clear(canvas, context);

	if (background != undefined) {
		context.drawImage(background, 0, 0, 1192, 1664);
	}

	if (color == Color.PURPLE) {
		addImage(context, 'title_ultimate', 0, 0);
		addTitle(context, name, 594, 140, 760);
	} else {
		addImage(context, 'title', 0, 0);
		addTitle(context, name, 632, 140, 710);
	}

	const descriptionLines = description.split(/\r\n|\r|\n/);
	const descriptionHeight = descriptionLines.length;
	context.font = '49px Arial';

	function placeSecondary(inset: number) {
		if (primaryActionType == Type.DEFENSE || primaryActionType == Type.DEFENSE_SKILL) {
			addImage(context, 'movement', 64, inset);
			addSecondaryValue(
				context,
				secondaryMovementValue + movementBonus,
				143,
				inset + 121,
				movementBonus,
				showNumbers,
				color,
				level,
				Stat.MOVEMENT,
				movementStat,
			);
		} else if (primaryActionType == Type.MOVEMENT) {
			addImage(context, 'defense', 70, inset);
			addSecondaryValue(
				context,
				secondaryDefenseValue + defenseBonus,
				143,
				inset + 131,
				defenseBonus,
				showNumbers,
				color,
				level,
				Stat.DEFENSE,
				defenseStat,
			);
		} else {
			addImage(context, 'movement', 64, inset);
			addImage(context, 'defense', 70, inset - 209);
			addSecondaryValue(
				context,
				secondaryMovementValue + movementBonus,
				143,
				inset + 121,
				movementBonus,
				showNumbers,
				color,
				level,
				Stat.MOVEMENT,
				movementStat,
			);
			addSecondaryValue(
				context,
				secondaryDefenseValue + defenseBonus,
				143,
				inset - 79,
				defenseBonus,
				showNumbers,
				color,
				level,
				Stat.DEFENSE,
				defenseStat,
			);
		}
	}

	function placeSecondaryOnSilver(inset: number) {
		if (primaryActionType != Type.DEFENSE && primaryActionType != Type.DEFENSE_SKILL) {
			addImage(context, 'defense', 70, inset);
			addSecondaryValue(
				context,
				secondaryDefenseValue + defenseBonus,
				143,
				inset + 131,
				defenseBonus,
				showNumbers,
				color,
				level,
				Stat.DEFENSE,
				defenseStat,
			);
		}
	}

	switch (color) {
		case Color.GOLD:
			switch (descriptionHeight) {
				case 1:
				case 2:
				case 3:
				case 4:
				case 5:
				case 6:
					addImage(context, 'banner_gold_bottom', 50, 278);
					addImage(context, 'banner_gold_top', 50, 0);
					placeSecondary(645);
					break;
				case 7:
					addImage(context, 'banner_gold_bottom', 50, 219);
					addImage(context, 'banner_gold_top', 50, 0);
					placeSecondary(586);
					break;
				default:
					addImage(context, 'banner_gold_bottom', 50, 158);
					addImage(context, 'banner_gold_top', 50, 0);
					placeSecondary(525);
					break;
			}
			break;
		case Color.SILVER:
			switch (descriptionHeight) {
				case 1:
				case 2:
				case 3:
				case 4:
				case 5:
				case 6:
					addImage(context, 'banner_silver_bottom', 50, 318);
					addImage(context, 'banner_silver_top', 50, 0);
					placeSecondaryOnSilver(637);
					break;
				case 7:
					addImage(context, 'banner_silver_bottom', 50, 259);
					addImage(context, 'banner_silver_top', 50, 0);
					placeSecondaryOnSilver(578);
					break;
				default:
					addImage(context, 'banner_silver_bottom', 50, 198);
					addImage(context, 'banner_silver_top', 50, 0);
					placeSecondaryOnSilver(517);
					break;
			}
			break;
		case Color.RED:
			if (level == 'ii' || level == 'iii') {
				switch (descriptionHeight) {
					case 1:
					case 2:
					case 3:
					case 4:
						addImage(context, 'banner_red_bottom', 50, 330);
						addImage(context, 'banner_red_top', 50, 0);
						placeSecondary(645);
						break;
					case 5:
						addImage(context, 'banner_red_bottom', 50, 271);
						addImage(context, 'banner_red_top', 50, 0);
						placeSecondary(586);
						break;
					case 6:
						addImage(context, 'banner_red_bottom', 50, 210);
						addImage(context, 'banner_red_top', 50, 0);
						placeSecondary(525);
						break;
					default:
						addImage(context, 'banner_red_bottom', 50, 150);
						addImage(context, 'banner_red_top', 50, 0);
						placeSecondary(465);
						break;
				}
			} else {
				switch (descriptionHeight) {
					case 1:
					case 2:
					case 3:
					case 4:
					case 5:
					case 6:
						addImage(context, 'banner_red_bottom', 50, 330);
						addImage(context, 'banner_red_top', 50, 0);
						placeSecondary(645);
						break;
					case 7:
						addImage(context, 'banner_red_bottom', 50, 271);
						addImage(context, 'banner_red_top', 50, 0);
						placeSecondary(586);
						break;
					default:
						addImage(context, 'banner_red_bottom', 50, 210);
						addImage(context, 'banner_red_top', 50, 0);
						placeSecondary(525);
						break;
				}
			}
			break;
		case Color.BLUE:
			if (level == 'ii' || level == 'iii') {
				switch (descriptionHeight) {
					case 1:
					case 2:
					case 3:
					case 4:
						addImage(context, 'banner_blue_bottom', 50, 318);
						addImage(context, 'banner_blue_top', 50, 0);
						placeSecondary(645);
						break;
					case 5:
						addImage(context, 'banner_blue_bottom', 50, 259);
						addImage(context, 'banner_blue_top', 50, 0);
						placeSecondary(586);
						break;
					case 6:
						addImage(context, 'banner_blue_bottom', 50, 198);
						addImage(context, 'banner_blue_top', 50, 0);
						placeSecondary(525);
						break;
					default:
						addImage(context, 'banner_blue_bottom', 50, 138);
						addImage(context, 'banner_blue_top', 50, 0);
						placeSecondary(465);
						break;
				}
			} else {
				switch (descriptionHeight) {
					case 1:
					case 2:
					case 3:
					case 4:
					case 5:
					case 6:
						addImage(context, 'banner_blue_bottom', 50, 318);
						addImage(context, 'banner_blue_top', 50, 0);
						placeSecondary(645);
						break;
					case 7:
						addImage(context, 'banner_blue_bottom', 50, 259);
						addImage(context, 'banner_blue_top', 50, 0);
						placeSecondary(586);
						break;
					default:
						addImage(context, 'banner_blue_bottom', 50, 198);
						addImage(context, 'banner_blue_top', 50, 0);
						placeSecondary(525);
						break;
				}
			}
			break;
		case Color.GREEN:
			if (level == 'ii' || level == 'iii') {
				switch (descriptionHeight) {
					case 1:
					case 2:
					case 3:
					case 4:
						addImage(context, 'banner_green_bottom', 50, 325);
						addImage(context, 'banner_green_top', 50, 0);
						placeSecondary(645);
						break;
					case 5:
						addImage(context, 'banner_green_bottom', 50, 266);
						addImage(context, 'banner_green_top', 50, 0);
						placeSecondary(586);
						break;
					case 6:
						addImage(context, 'banner_green_bottom', 50, 205);
						addImage(context, 'banner_green_top', 50, 0);
						placeSecondary(525);
						break;
					default:
						addImage(context, 'banner_green_bottom', 50, 145);
						addImage(context, 'banner_green_top', 50, 0);
						placeSecondary(465);
						break;
				}
			} else {
				switch (descriptionHeight) {
					case 1:
					case 2:
					case 3:
					case 4:
					case 5:
					case 6:
						addImage(context, 'banner_green_bottom', 50, 325);
						addImage(context, 'banner_green_top', 50, 0);
						placeSecondary(645);
						break;
					case 7:
						addImage(context, 'banner_green_bottom', 50, 266);
						addImage(context, 'banner_green_top', 50, 0);
						placeSecondary(586);
						break;
					default:
						addImage(context, 'banner_green_bottom', 50, 205);
						addImage(context, 'banner_green_top', 50, 0);
						placeSecondary(525);
						break;
				}
			}
			break;
	}

	if (color != Color.PURPLE) {
		addImage(context, 'initiative', 26, 13);
		addInitiative(
			context,
			initiative + initiativeBonus,
			143,
			192,
			initiativeBonus,
			showNumbers,
			color,
			level,
			initiativeStat
		);
	}

	let cardType = '';
	cardType += color == Color.GOLD || color == Color.SILVER ? 'Basic ' : '';
	if (color == Color.PURPLE) {
		cardType += 'Ultimate';
	} else {
		switch (primaryActionType) {
			case Type.SKILL:
				cardType += 'Skill';
				break;
			case Type.ATTACK:
				cardType += 'Attack';
				break;
			case Type.MOVEMENT:
				cardType += 'Movement';
				break;
			case Type.DEFENSE:
				cardType += 'Defense';
				break;
			case Type.DEFENSE_SKILL:
				if ((color == Color.GOLD || color == Color.SILVER) && modifier != Modifier.NONE)
					cardType += 'Defense/Skill';
				else cardType += 'Defense / Skill';
				break;
		}
	}
	switch (modifier) {
		case Modifier.RANGE:
			cardType += ' - Ranged';
			break;
		case Modifier.AREA:
			cardType += ' - Area';
			break;
	}

	let primaryActionHeight;

	const lowerColor = color.toLowerCase();

	if (
		(level == 'ii' || level == 'iii') &&
		(color == Color.RED || color == Color.BLUE || color == Color.GREEN)
	) {
		addImage(context, 'bottom_long', 0, 1412);

		switch (descriptionHeight) {
			case 1:
				addImage(context, 'frame_' + lowerColor + '_bottom', 56, 1415);
				addImage(context, 'frame_' + lowerColor + '_middle', 56, 1249);
				addImage(context, 'frame_' + lowerColor + '_top', 56, 1137);
				addCardDescription(context, customEmoji, description, 596, 1358);
				addCardType(context, cardType, 596, 1200);
				primaryActionHeight = 1137;
				break;
			case 2:
				addImage(context, 'frame_' + lowerColor + '_bottom', 56, 1415);
				addImage(context, 'frame_' + lowerColor + '_middle', 56, 1249);
				addImage(context, 'frame_' + lowerColor + '_top', 56, 1098);
				addCardDescription(context, customEmoji, descriptionLines[0], 596, 1311);
				addCardDescription(context, customEmoji, descriptionLines[1], 596, 1372);
				addCardType(context, cardType, 596, 1161);
				primaryActionHeight = 1098;
				break;
			case 3:
				addImage(context, 'frame_' + lowerColor + '_bottom', 56, 1415);
				addImage(context, 'frame_' + lowerColor + '_middle', 56, 1249);
				addImage(context, 'frame_' + lowerColor + '_middle', 56, 1216);
				addImage(context, 'frame_' + lowerColor + '_top', 56, 1065);
				addCardDescription(context, customEmoji, descriptionLines[0], 596, 1262);
				addCardDescription(context, customEmoji, descriptionLines[1], 596, 1323);
				addCardDescription(context, customEmoji, descriptionLines[2], 596, 1387);
				addCardType(context, cardType, 596, 1128);
				primaryActionHeight = 1065;
				break;
			case 4:
				addImage(context, 'frame_' + lowerColor + '_bottom', 56, 1415);
				addImage(context, 'frame_' + lowerColor + '_middle', 56, 1249);
				addImage(context, 'frame_' + lowerColor + '_middle', 56, 1083);
				addImage(context, 'frame_' + lowerColor + '_top', 56, 1002);
				addCardDescription(context, customEmoji, descriptionLines[0], 596, 1198);
				addCardDescription(context, customEmoji, descriptionLines[1], 596, 1259);
				addCardDescription(context, customEmoji, descriptionLines[2], 596, 1323);
				addCardDescription(context, customEmoji, descriptionLines[3], 596, 1387);
				addCardType(context, cardType, 596, 1065);
				primaryActionHeight = 1002;
				break;
			case 5:
				addImage(context, 'frame_' + lowerColor + '_bottom', 56, 1415);
				addImage(context, 'frame_' + lowerColor + '_middle', 56, 1249);
				addImage(context, 'frame_' + lowerColor + '_middle', 56, 1083);
				addImage(context, 'frame_' + lowerColor + '_top', 56, 937);
				addCardDescription(context, customEmoji, descriptionLines[0], 596, 1134);
				addCardDescription(context, customEmoji, descriptionLines[1], 596, 1198);
				addCardDescription(context, customEmoji, descriptionLines[2], 596, 1259);
				addCardDescription(context, customEmoji, descriptionLines[3], 596, 1323);
				addCardDescription(context, customEmoji, descriptionLines[4], 596, 1387);
				addCardType(context, cardType, 596, 1000);
				primaryActionHeight = 937;
				break;
			case 6:
				addImage(context, 'frame_' + lowerColor + '_bottom', 56, 1415);
				addImage(context, 'frame_' + lowerColor + '_middle', 56, 1249);
				addImage(context, 'frame_' + lowerColor + '_middle', 56, 1083);
				addImage(context, 'frame_' + lowerColor + '_middle', 56, 1015);
				addImage(context, 'frame_' + lowerColor + '_top', 56, 864);
				addCardDescription(context, customEmoji, descriptionLines[0], 596, 1064);
				addCardDescription(context, customEmoji, descriptionLines[1], 596, 1128);
				addCardDescription(context, customEmoji, descriptionLines[2], 596, 1189);
				addCardDescription(context, customEmoji, descriptionLines[3], 596, 1253);
				addCardDescription(context, customEmoji, descriptionLines[4], 596, 1314);
				addCardDescription(context, customEmoji, descriptionLines[5], 596, 1378);
				addCardType(context, cardType, 596, 927);
				primaryActionHeight = 864;
				break;
			default:
				addImage(context, 'frame_' + lowerColor + '_bottom', 56, 1415);
				addImage(context, 'frame_' + lowerColor + '_middle', 56, 1249);
				addImage(context, 'frame_' + lowerColor + '_middle', 56, 1083);
				addImage(context, 'frame_' + lowerColor + '_middle', 56, 1015);
				addImage(context, 'frame_' + lowerColor + '_middle', 56, 987);
				addImage(context, 'frame_' + lowerColor + '_top', 56, 836);
				addCardDescription(context, customEmoji, descriptionLines[0], 596, 1019);
				addCardDescription(context, customEmoji, descriptionLines[1], 596, 1083);
				addCardDescription(context, customEmoji, descriptionLines[2], 596, 1144);
				addCardDescription(context, customEmoji, descriptionLines[3], 596, 1208);
				addCardDescription(context, customEmoji, descriptionLines[4], 596, 1269);
				addCardDescription(context, customEmoji, descriptionLines[5], 596, 1333);
				addCardDescription(context, customEmoji, descriptionLines[6], 596, 1397);
				addCardType(context, cardType, 596, 899);
				primaryActionHeight = 836;
				break;
		}
	} else {
		addImage(context, 'bottom_short', 0, 1413);

		switch (descriptionHeight) {
			case 1:
				addImage(context, 'frame_' + lowerColor + '_bottom', 56, 1522);
				addImage(context, 'frame_' + lowerColor + '_middle', 56, 1356);
				addImage(context, 'frame_' + lowerColor + '_top', 56, 1244);
				addCardDescription(context, customEmoji, description, 596, 1465);
				addCardType(context, cardType, 596, 1307);
				primaryActionHeight = 1244;
				break;
			case 2:
				addImage(context, 'frame_' + lowerColor + '_bottom', 56, 1522);
				addImage(context, 'frame_' + lowerColor + '_middle', 56, 1356);
				addImage(context, 'frame_' + lowerColor + '_top', 56, 1205);
				addCardDescription(context, customEmoji, descriptionLines[0], 596, 1418);
				addCardDescription(context, customEmoji, descriptionLines[1], 596, 1479);
				addCardType(context, cardType, 596, 1268);
				primaryActionHeight = 1205;
				break;
			case 3:
				addImage(context, 'frame_' + lowerColor + '_bottom', 56, 1522);
				addImage(context, 'frame_' + lowerColor + '_middle', 56, 1356);
				addImage(context, 'frame_' + lowerColor + '_middle', 56, 1323);
				addImage(context, 'frame_' + lowerColor + '_top', 56, 1172);
				addCardDescription(context, customEmoji, descriptionLines[0], 596, 1369);
				addCardDescription(context, customEmoji, descriptionLines[1], 596, 1430);
				addCardDescription(context, customEmoji, descriptionLines[2], 596, 1494);
				addCardType(context, cardType, 596, 1235);
				primaryActionHeight = 1172;
				break;
			case 4:
				addImage(context, 'frame_' + lowerColor + '_bottom', 56, 1522);
				addImage(context, 'frame_' + lowerColor + '_middle', 56, 1356);
				addImage(context, 'frame_' + lowerColor + '_middle', 56, 1190);
				addImage(context, 'frame_' + lowerColor + '_top', 56, 1109);
				addCardDescription(context, customEmoji, descriptionLines[0], 596, 1305);
				addCardDescription(context, customEmoji, descriptionLines[1], 596, 1366);
				addCardDescription(context, customEmoji, descriptionLines[2], 596, 1430);
				addCardDescription(context, customEmoji, descriptionLines[3], 596, 1494);
				addCardType(context, cardType, 596, 1172);
				primaryActionHeight = 1109;
				break;
			case 5:
				addImage(context, 'frame_' + lowerColor + '_bottom', 56, 1522);
				addImage(context, 'frame_' + lowerColor + '_middle', 56, 1356);
				addImage(context, 'frame_' + lowerColor + '_middle', 56, 1190);
				addImage(context, 'frame_' + lowerColor + '_top', 56, 1044);
				addCardDescription(context, customEmoji, descriptionLines[0], 596, 1241);
				addCardDescription(context, customEmoji, descriptionLines[1], 596, 1305);
				addCardDescription(context, customEmoji, descriptionLines[2], 596, 1366);
				addCardDescription(context, customEmoji, descriptionLines[3], 596, 1430);
				addCardDescription(context, customEmoji, descriptionLines[4], 596, 1494);
				addCardType(context, cardType, 596, 1107);
				primaryActionHeight = 1044;
				break;
			case 6:
				addImage(context, 'frame_' + lowerColor + '_bottom', 56, 1522);
				addImage(context, 'frame_' + lowerColor + '_middle', 56, 1356);
				addImage(context, 'frame_' + lowerColor + '_middle', 56, 1190);
				addImage(context, 'frame_' + lowerColor + '_middle', 56, 1122);
				addImage(context, 'frame_' + lowerColor + '_top', 56, 971);
				addCardDescription(context, customEmoji, descriptionLines[0], 596, 1171);
				addCardDescription(context, customEmoji, descriptionLines[1], 596, 1235);
				addCardDescription(context, customEmoji, descriptionLines[2], 596, 1296);
				addCardDescription(context, customEmoji, descriptionLines[3], 596, 1360);
				addCardDescription(context, customEmoji, descriptionLines[4], 596, 1421);
				addCardDescription(context, customEmoji, descriptionLines[5], 596, 1485);
				addCardType(context, cardType, 596, 1034);
				primaryActionHeight = 971;
				break;
			case 7:
				addImage(context, 'frame_' + lowerColor + '_bottom', 56, 1522);
				addImage(context, 'frame_' + lowerColor + '_middle', 56, 1356);
				addImage(context, 'frame_' + lowerColor + '_middle', 56, 1190);
				addImage(context, 'frame_' + lowerColor + '_middle', 56, 1122);
				addImage(context, 'frame_' + lowerColor + '_middle', 56, 1094);
				addImage(context, 'frame_' + lowerColor + '_top', 56, 943);
				addCardDescription(context, customEmoji, descriptionLines[0], 596, 1126);
				addCardDescription(context, customEmoji, descriptionLines[1], 596, 1190);
				addCardDescription(context, customEmoji, descriptionLines[2], 596, 1251);
				addCardDescription(context, customEmoji, descriptionLines[3], 596, 1315);
				addCardDescription(context, customEmoji, descriptionLines[4], 596, 1376);
				addCardDescription(context, customEmoji, descriptionLines[5], 596, 1440);
				addCardDescription(context, customEmoji, descriptionLines[6], 596, 1504);
				addCardType(context, cardType, 596, 1006);
				primaryActionHeight = 943;
				break;
			default:
				addImage(context, 'frame_' + lowerColor + '_bottom', 56, 1552);
				addImage(context, 'frame_' + lowerColor + '_middle', 56, 1386);
				addImage(context, 'frame_' + lowerColor + '_middle', 56, 1326);
				addImage(context, 'frame_' + lowerColor + '_middle', 56, 1190);
				addImage(context, 'frame_' + lowerColor + '_middle', 56, 1122);
				addImage(context, 'frame_' + lowerColor + '_middle', 56, 1074);
				addImage(context, 'frame_' + lowerColor + '_top', 56, 923);
				addCardDescription(context, customEmoji, descriptionLines[0], 596, 1098);
				addCardDescription(context, customEmoji, descriptionLines[1], 596, 1159);
				addCardDescription(context, customEmoji, descriptionLines[2], 596, 1222);
				addCardDescription(context, customEmoji, descriptionLines[3], 596, 1286);
				addCardDescription(context, customEmoji, descriptionLines[4], 596, 1347);
				addCardDescription(context, customEmoji, descriptionLines[5], 596, 1411);
				addCardDescription(context, customEmoji, descriptionLines[6], 596, 1472);
				addCardDescription(context, customEmoji, descriptionLines[7], 596, 1536);
				addCardType(context, cardType, 596, 986);
				primaryActionHeight = 923;
				break;
		}
	}

	let modifierValueWidth = 0;
	switch (modifier) {
		case Modifier.AREA:
			addImage(context, `area_${lowerColor}`, 921, primaryActionHeight - 20);
			modifierValueWidth = addModifierValue(
				context,
				modifierValue + areaBonus,
				1052,
				primaryActionHeight + 82,
				areaBonus
			);
			break;
		case Modifier.RANGE:
			addImage(context, `range_${lowerColor}`, 936, primaryActionHeight - 77);
			modifierValueWidth = addModifierValue(
				context,
				modifierValue + rangeBonus,
				1052,
				primaryActionHeight + 82,
				rangeBonus
			);
			break;
	}
	if (
		(modifier == Modifier.AREA || modifier == Modifier.RANGE) &&
		(modifierValueSign == ValueSign.PLUS || modifierValueSign == ValueSign.MINUS)
	) {
		addSign(
			context,
			modifierValueSign == ValueSign.PLUS ? '+' : '-',
			1052 + modifierValueWidth / 2,
			primaryActionHeight + 82
		);
	}

	addImage(context, `colorblind_${lowerColor}`, 1116, 46);

	if (color == Color.RED || color == Color.BLUE || color == Color.GREEN) {
		addImage(context, `level_${level}`, 1006, 85);

		if (level == 'ii' || level == 'iii') addImage(context, `item_${item.toLowerCase()}`, 476, 1484);
	}

	if (color == Color.GOLD && handicap) {
		addImage(context, 'level_h', 1008, 85);
	}

	if (color == Color.PURPLE) {
		addImage(context, 'level_iv', 1008, 85);
	} else {
		let primaryValueWidth = 0;
		switch (primaryActionType) {
			case Type.SKILL:
				addImage(context, `skill_${lowerColor}`, 22, primaryActionHeight - 79);
				break;
			case Type.ATTACK:
				addImage(context, `attack_${lowerColor}`, 19, primaryActionHeight - 82);
				if (primaryActionValueSign != ValueSign.EXCLAMATION)
					primaryValueWidth = addPrimaryValue(
						context,
						primaryActionValue + attackBonus,
						142,
						primaryActionHeight + 82,
						attackBonus,
						showNumbers,
						color,
						level,
						Stat.ATTACK,
						attackStat
					);
				break;
			case Type.MOVEMENT:
				addImage(context, `movement_${lowerColor}`, 43, primaryActionHeight - 68);
				if (primaryActionValueSign != ValueSign.EXCLAMATION)
					primaryValueWidth = addPrimaryValue(
						context,
						primaryActionValue + movementBonus,
						142,
						primaryActionHeight + 82,
						movementBonus,
						showNumbers,
						color,
						level,
						Stat.MOVEMENT,
						movementStat
					);
				break;
			case Type.DEFENSE:
				addImage(context, `defense_${lowerColor}`, 51, primaryActionHeight - 74);
				if (primaryActionValueSign != ValueSign.EXCLAMATION)
					primaryValueWidth = addPrimaryValue(
						context,
						primaryActionValue + defenseBonus,
						142,
						primaryActionHeight + 82,
						defenseBonus,
						showNumbers,
						color,
						level,
						Stat.DEFENSE,
						defenseStat
					);
				break;
			case Type.DEFENSE_SKILL:
				addImage(context, `defense_skill_${lowerColor}`, 51, primaryActionHeight - 74);
				if (primaryActionValueSign != ValueSign.EXCLAMATION)
					primaryValueWidth = addPrimaryValue(
						context,
						primaryActionValue + defenseBonus,
						142,
						primaryActionHeight + 82,
						defenseBonus,
						showNumbers,
						color,
						level,
						Stat.DEFENSE,
						defenseStat
					);
				break;
		}

		if (primaryActionType != Type.SKILL && primaryActionValueSign != ValueSign.NONE) {
			if (primaryActionValueSign == ValueSign.EXCLAMATION)
				addBlockValue(context, '!', 142, primaryActionHeight + 82);
			else
				addSign(
					context,
					primaryActionValueSign == ValueSign.PLUS ? '+' : '-',
					142 + primaryValueWidth / 2,
					primaryActionHeight + 82
				);
		}
	}
}

import {
	cardImageNames,
	cardStats,
	Color,
	defaultEmoji,
	imageNames,
	Item,
	Modifier,
	Stat,
	Type,
	ValueSign
} from './states';

export const images: Map<string, HTMLImageElement> = new Map();

export function importImages() {
  return Promise.all(
    imageNames.map(async (imageName: string) => {
      const path = (await import(`./lib/images/${imageName}.png`)).default
      const image = new Image()
      image.src = path
      images.set(imageName, image)
      await new Promise(resolve => image.onload = resolve)
    })
  )
}

export function importCardImages(name: string) {
  return Promise.all(
    cardImageNames.map(async (imageName: string) => {
      const path = (await import(`./lib/images/cards/${name}/${imageName}.png`)).default
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

function addEmoji(context: CanvasRenderingContext2D, name: string, x: number, y: number): void {
  context.drawImage(<CanvasImageSource>images.get(name), x, y, 64 * (<HTMLImageElement>images.get(name)).width / (<HTMLImageElement>images.get(name)).height, 64)
}

function addCustomEmoji(context: CanvasRenderingContext2D, customEmoji: Array<[string, HTMLImageElement]>, name: string, x: number, y: number): void {
  const img = customEmoji.find(item => item[0] == name)![1]
  context.drawImage(img, x, y, 64 * img.width / img.height, 64)
}

function addCardDescription(context: CanvasRenderingContext2D, customEmoji: Array<[string, HTMLImageElement]>, text: string, x: number, y: number): void {
  if (text == "---") {
    context.beginPath()
    context.moveTo(x - 381, y - 11)
    context.lineTo(x + 381, y - 11)
    context.lineWidth = 2
    context.stroke()
  } else if (text.startsWith("~")) {
    addTextItalic(context, text.substring(1), x, y)
  } else if (text.startsWith(">>")) {
    addTextWithBold(context, customEmoji, "•  " + text.substring(2), x - 490, y, true)
  } else if (text.startsWith(">")) {
    addTextWithBold(context, customEmoji, text.substring(1), x - 445, y, true)
  } else
    addTextWithBold(context, customEmoji, text, x, y)
}

function addTextWithBold(context: CanvasRenderingContext2D, customEmoji: Array<[string, HTMLImageElement]>, text: string, x: number, y: number, left: boolean = false): void {
  context.font = "49px Arial"
  context.textAlign = "left"
  const tempText = "@" + text + "@"
  const parts = tempText.split("**")
  const fullTextWidth = context.measureText(text.replaceAll("**", "").split("::").reduce((sum, val, i) => i % 2 == 0 ? sum + val : sum, "")).width
    + text.replaceAll("**", "").split("::").reduce((sum, _, i) => i % 2 ? sum + 64 : sum, 0)
  let indent = 0
  parts.forEach((part, index) => {
    part = part.replaceAll("@", "")
    if (index % 2)
      context.font = "bold 49px Arial"
    else
      context.font = "49px Arial"
    const emojiParts = ("@" + part + "@").split("::")
    emojiParts.forEach((emojiPart, i) => {
      emojiPart = emojiPart.replaceAll("@", "")
      if (i % 2) {
        if (defaultEmoji.includes(emojiPart))
          addEmoji(context, emojiPart, x - (left ? 0 : (fullTextWidth / 2)) + indent, y - 50)
        if (customEmoji.find((item => item[0] == emojiPart)))
          addCustomEmoji(context, customEmoji, emojiPart, x - (left ? 0 : (fullTextWidth / 2)) + indent, y - 50)
        indent += 64
      } else {
        const partWidth = context.measureText(emojiPart).width
        context.fillText(emojiPart, x - (left ? 0 : (fullTextWidth / 2)) + indent, y)
        indent += partWidth
      }
    })
  })
  context.textAlign = "center"
}

function addTextItalic(context: CanvasRenderingContext2D, text: string, x: number, y: number): void {
  context.font = "italic 36px Arial"
  context.fillText(text, x, y)
}

function addCardType(context: CanvasRenderingContext2D, text: string, x: number, y: number): void {
  addOutlinedText(context, text, x, y, 54, 6, 604)
}

function addOutlinedText(context: CanvasRenderingContext2D, text: string, x: number, y: number, fontSize: number, outlineSize: number, widthLimit?: number) {
  context.font = `${fontSize}px Modesto Poster`
  context.lineWidth = outlineSize
  context.strokeText(text, x, y, widthLimit)
  context.fillStyle = "white"
  context.fillText(text, x, y, widthLimit)
  context.fillStyle = "black"
}

function addTitle(context: CanvasRenderingContext2D, text: string, x: number, y: number, widthLimit?: number) {
  context.textAlign = "center"
  context.font = "66px Modesto Poster"
  context.fillText(text, x, y, widthLimit)
}

function addInitiative(context: CanvasRenderingContext2D, value: number, x: number, y: number, bonus: number, showNumbers: boolean, color: Color, level: string, initiativeStat: number) {
  if (showNumbers || color == Color.SILVER)
    addSquishedOutlinedText(context, value.toString(), x, y, 197, 14, 0.92, false, bonus)
  else {
    const supposedValue = cardStats.get(color)!.get(Stat.INITIATIVE)!.get(level)![initiativeStat - 1]
    const difference = value - supposedValue
    let symbol = ""
    if (difference == 1) symbol = "›"
    if (difference > 1) symbol = "»"
    if (difference == -1) symbol = "‹"
    if (difference < -1) symbol = "«"
    addSquishedOutlinedText(context, symbol, x, y + 25, 296, 14, 0.92, false, bonus, false)
  }
}

function addModifierValue(context: CanvasRenderingContext2D, value: number, x: number, y: number, bonus: number = 0): number {
	return addSquishedOutlinedText(context, value.toString(), x, y, 156, 14, 0.875, false, bonus)
}

function addBlockValue(context: CanvasRenderingContext2D, value: string, x: number, y: number, bonus: number = 0): number {
	return addSquishedOutlinedText(context, value, x, y, 156, 14, 0.875, false, bonus)
}

function addPrimaryValue(context: CanvasRenderingContext2D, value: number, x: number, y: number, bonus: number = 0, showNumbers: boolean, color: Color, level: string, stat: Stat, statNumber: number): number {
	if (showNumbers)
  	return addSquishedOutlinedText(context, value.toString(), x, y, 156, 14, 0.875, false, bonus)
	else {
		const supposedValue = cardStats.get(color)!.get(stat)!.get(level)![statNumber - 1]
		const difference = value - supposedValue
		let symbol = ""
		if (difference == 1) symbol = "›"
		if (difference > 1) symbol = "»"
		if (difference == -1) symbol = "‹"
		if (difference < -1) symbol = "«"
		return addSquishedOutlinedText(context, symbol, x, y + 18, 244, 14, 0.875, false, bonus, false)
	}
}

function addSign(context: CanvasRenderingContext2D, text: string, x: number, y: number) {
  addSquishedOutlinedText(context, text, x, y, 156, 14, 0.875, true)
}

function addSecondaryValue(context: CanvasRenderingContext2D, value: number, x: number, y: number, bonus: number = 0, showNumbers: boolean, color: Color, level: string, stat: Stat, statNumber: number) {
	if (showNumbers)
  	addSquishedOutlinedText(context, value.toString(), x, y, 136, 14, 0.875, false, bonus)
	else {
		const supposedValue = cardStats.get(color)!.get(stat)!.get(level)![statNumber - 1]
		const difference = value - supposedValue
		let symbol = ""
		if (difference == 1) symbol = "›"
		if (difference > 1) symbol = "»"
		if (difference == -1) symbol = "‹"
		if (difference < -1) symbol = "«"
		return addSquishedOutlinedText(context, symbol, x, y + 10, 204, 14, 0.875, false, bonus, false)
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
  left: boolean = false,
  bonus: number = 0,
	showNumbers: boolean = true,
): number {
  const tempCanvas = document.createElement('canvas')
  tempCanvas.width = 400
  tempCanvas.height = 400
  const tempContext = tempCanvas.getContext('2d')!
  tempContext.textAlign = left ? "left" : "center"
  tempContext.font = `${fontSize}px Modesto Poster`
  tempContext.lineWidth = outlineSize
  tempContext.strokeText(text, 200, 200)
  switch (bonus) {
    case 0:
      tempContext.fillStyle = "white"
      break
    case 1:
      tempContext.fillStyle = "palegreen"
      break
    case 2:
      tempContext.fillStyle = "powderblue"
      break
    case 3:
      tempContext.fillStyle = "plum"
      break
  }
  tempContext.fillText(text, 200, 200)
  tempContext.fillStyle = "black"

	if (!showNumbers) {
		const tempCanvas2 = document.createElement('canvas')
		tempCanvas2.width = 400
		tempCanvas2.height = 400
		const tempContext2 = tempCanvas2.getContext('2d')!
		tempContext2.rotate(-Math.PI / 2)
		tempContext2.drawImage(tempCanvas, -400, 0)

		context.drawImage(tempCanvas2, 0, 0, 400, 400, x - 200 + 0.3 * fontSize, y - 200 - 0.3 * fontSize, 400, 400)
		return fontSize * 0.4
	} else {
		context.drawImage(tempCanvas, 0, 0, 400, 400, x - 200 * squishness, y - 200, 400 * squishness, 400)
		return tempContext.measureText(text).width * squishness
	}
}
