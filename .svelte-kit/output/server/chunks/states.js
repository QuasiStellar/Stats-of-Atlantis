var Color = /* @__PURE__ */ ((Color2) => {
  Color2["GOLD"] = "GOLD";
  Color2["SILVER"] = "SILVER";
  Color2["RED"] = "RED";
  Color2["BLUE"] = "BLUE";
  Color2["GREEN"] = "GREEN";
  Color2["PURPLE"] = "PURPLE";
  return Color2;
})(Color || {});
var Type = /* @__PURE__ */ ((Type2) => {
  Type2["SKILL"] = "SKILL";
  Type2["ATTACK"] = "ATTACK";
  Type2["MOVEMENT"] = "MOVEMENT";
  Type2["DEFENSE"] = "DEFENSE";
  Type2["DEFENSE_SKILL"] = "DEFENSE_SKILL";
  return Type2;
})(Type || {});
var ValueSign = /* @__PURE__ */ ((ValueSign2) => {
  ValueSign2["NONE"] = "NONE";
  ValueSign2["PLUS"] = "PLUS";
  ValueSign2["MINUS"] = "MINUS";
  ValueSign2["EXCLAMATION"] = "EXCLAMATION";
  return ValueSign2;
})(ValueSign || {});
var Modifier = /* @__PURE__ */ ((Modifier2) => {
  Modifier2["NONE"] = "NONE";
  Modifier2["RANGE"] = "RANGE";
  Modifier2["AREA"] = "AREA";
  return Modifier2;
})(Modifier || {});
var Item = /* @__PURE__ */ ((Item2) => {
  Item2["ATTACK"] = "ATTACK";
  Item2["DEFENSE"] = "DEFENSE";
  Item2["INITIATIVE"] = "INITIATIVE";
  Item2["RANGE"] = "RANGE";
  Item2["AREA"] = "AREA";
  Item2["MOVEMENT"] = "MOVEMENT";
  return Item2;
})(Item || {});
var Stat = /* @__PURE__ */ ((Stat2) => {
  Stat2["ATTACK"] = "ATTACK";
  Stat2["DEFENSE"] = "DEFENSE";
  Stat2["INITIATIVE"] = "INITIATIVE";
  Stat2["MOVEMENT"] = "MOVEMENT";
  return Stat2;
})(Stat || {});
class Hero {
  name;
  stats;
  title;
  stars;
  constructor(name, stats2, title, stars) {
    this.name = name;
    this.stats = stats2;
    this.title = title;
    this.stars = stars;
  }
}
const heroes = {
  "arien": new Hero("Arien", [8, 5, 4, 4, 2, 6, 5, 5], "the Tidemaster", 1),
  "bain": new Hero("Bain", [6, 4, 4, 4, 7, 3, 3, 6], "the Bounty Hunter", 2),
  "brogan": new Hero("Brogan", [6, 8, 2, 2, 1, 7, 6, 6], "the Destroyer", 1),
  "cutter": new Hero("Cutter", [5, 3, 6, 4, 5, 4, 3, 2], "the Skycaptain", 2),
  "dodger": new Hero("Dodger", [4, 2, 7, 6, 6, 4, 8, 1], "the Warlock", 1),
  "garrus": new Hero("Garrus", [7, 7, 3, 4, 4, 7, 1, 3], "the Gladiator", 2),
  "hanu": new Hero("Hanu", [1, 1, 8, 8, 7, 2, 4, 8], "the Trickster", 3),
  "ignatia": new Hero("Ignatia", [5, 6, 2, 2, 3, 3, 6, 4], "the Mad", 3),
  "min": new Hero("Min", [1, 3, 8, 4, 6, 3, 2, 4], "the Dragonmonk", 2),
  "misa": new Hero("Misa", [8, 5, 7, 7, 4, 5, 6, 5], "the Sky Ronin", 2),
  "nebkher": new Hero("NebKher", [3, 8, 1, 1, 2, 4, 4, 3], "the Harbinger", 3),
  "sabina": new Hero("Sabina", [5, 3, 5, 4, 5, 4, 7, 3], "the Gunslinger", 1),
  "silverarrow": new Hero("Silverarrow", [2, 1, 7, 7, 7, 1, 5, 6], "the Pathfinder", 2),
  "swift": new Hero("Swift", [7, 3, 4, 6, 4, 2, 5, 1], "the Sharpshooter", 3),
  "tali": new Hero("Tali", [3, 4, 5, 4, 5, 6, 7, 7], "the Spiritcaller", 3),
  "tigerclaw": new Hero("Tigerclaw", [2, 2, 8, 8, 6, 3, 3, 2], "the Cutpurse", 1),
  "trinkets": new Hero("Trinkets", [4, 2, 6, 8, 5, 1, 4, 4], "the Scavenger", 3),
  "ursafar": new Hero("Ursafar", [8, 6, 5, 1, 4, 8, 2, 1], "the Savage", 2),
  "wasp": new Hero("Wasp", [4, 4, 5, 4, 3, 5, 4, 5], "the Warmaiden", 1),
  "whisper": new Hero("Whisper", [4, 4, 7, 2, 8, 5, 2, 2], "the Outcast", 2),
  "wuk": new Hero("Wuk", [7, 7, 1, 2, 1, 7, 6, 7], "the Grovekeeper", 3),
  "xargatha": new Hero("Xargatha", [4, 6, 3, 6, 3, 6, 5, 4], "the Changed", 1)
};
const cardStats = /* @__PURE__ */ new Map([
  ["RED", /* @__PURE__ */ new Map([
    ["MOVEMENT", /* @__PURE__ */ new Map([
      ["i", [3, 4, 4, 4, 5, 5, 5, 5]],
      ["ii", [3, 4, 4, 4, 5, 5, 5, 5]],
      ["iii", [3, 4, 4, 4, 5, 5, 5, 5]]
    ])],
    ["INITIATIVE", /* @__PURE__ */ new Map([
      ["i", [7, 7, 7, 8, 8, 8, 9, 9]],
      ["ii", [7, 7, 8, 8, 9, 9, 9, 9]],
      ["iii", [8, 8, 8, 9, 9, 9, 10, 10]]
    ])],
    ["ATTACK", /* @__PURE__ */ new Map([
      ["i", [4, 4, 5, 5, 5, 6, 6, 6]],
      ["ii", [4, 5, 5, 5, 6, 6, 6, 7]],
      ["iii", [5, 5, 6, 6, 6, 7, 7, 7]]
    ])],
    ["DEFENSE", /* @__PURE__ */ new Map([
      ["i", [5, 5, 6, 6, 6, 7, 7, 7]],
      ["ii", [5, 6, 6, 6, 7, 7, 7, 8]],
      ["iii", [6, 6, 7, 7, 7, 8, 8, 8]]
    ])]
  ])],
  ["GOLD", /* @__PURE__ */ new Map([
    ["MOVEMENT", /* @__PURE__ */ new Map([
      ["i", [1, 1, 1, 1, 1, 1, 2, 2]]
    ])],
    ["INITIATIVE", /* @__PURE__ */ new Map([
      ["i", [11, 11, 11, 11, 12, 12, 12, 13]]
    ])],
    ["ATTACK", /* @__PURE__ */ new Map([
      ["i", [1, 2, 2, 3, 3, 3, 4, 4]]
    ])],
    ["DEFENSE", /* @__PURE__ */ new Map([
      ["i", [1, 1, 2, 2, 2, 2, 3, 3]]
    ])]
  ])],
  ["SILVER", /* @__PURE__ */ new Map([
    ["DEFENSE", /* @__PURE__ */ new Map([
      ["i", [1, 2, 2, 2, 3, 3, 3, 4]]
    ])]
  ])],
  ["BLUE", /* @__PURE__ */ new Map([
    ["MOVEMENT", /* @__PURE__ */ new Map([
      ["i", [2, 2, 3, 3, 3, 3, 3, 3]],
      ["ii", [2, 2, 3, 3, 3, 3, 3, 3]],
      ["iii", [2, 2, 3, 3, 3, 3, 3, 3]]
    ])],
    ["INITIATIVE", /* @__PURE__ */ new Map([
      ["i", [8, 9, 9, 9, 9, 10, 10, 10]],
      ["ii", [9, 9, 10, 10, 10, 10, 10, 11]],
      ["iii", [9, 10, 10, 10, 10, 11, 11, 11]]
    ])],
    ["DEFENSE", /* @__PURE__ */ new Map([
      ["i", [4, 4, 4, 5, 5, 5, 6, 6]],
      ["ii", [4, 5, 5, 5, 6, 6, 6, 7]],
      ["iii", [5, 5, 5, 6, 6, 6, 7, 7]]
    ])]
  ])],
  ["GREEN", /* @__PURE__ */ new Map([
    ["MOVEMENT", /* @__PURE__ */ new Map([
      ["i", [2, 2, 2, 2, 2, 2, 2, 3]],
      ["ii", [2, 2, 2, 2, 2, 2, 2, 3]],
      ["iii", [2, 2, 2, 2, 2, 2, 2, 3]]
    ])],
    ["INITIATIVE", /* @__PURE__ */ new Map([
      ["i", [6, 5, 5, 4, 4, 3, 3, 2]],
      ["ii", [5, 5, 4, 4, 3, 3, 2, 2]],
      ["iii", [5, 4, 4, 3, 3, 2, 2, 1]]
    ])],
    ["DEFENSE", /* @__PURE__ */ new Map([
      ["i", [1, 2, 2, 3, 3, 3, 3, 4]],
      ["ii", [2, 2, 3, 3, 3, 4, 4, 4]],
      ["iii", [2, 3, 3, 4, 4, 4, 4, 5]]
    ])]
  ])]
]);
const stats = [
  "attack",
  "defense",
  "initiative",
  "movement",
  "initiator",
  "brawler",
  "pusher",
  "support"
];
const defaultEmoji = [
  "area_blue",
  "area_gold",
  "area_green",
  "area_purple",
  "area_red",
  "area_silver",
  "attack_blue",
  "attack_gold",
  "attack_green",
  "attack_red",
  "attack_silver",
  "defense_blue",
  "defense_gold",
  "defense_green",
  "defense_red",
  "defense_silver",
  "defense_skill_blue",
  "defense_skill_gold",
  "defense_skill_green",
  "defense_skill_red",
  "defense_skill_silver",
  "initiative",
  "life_counters",
  "marker_bounty",
  "marker_poison",
  "movement_blue",
  "movement_gold",
  "movement_green",
  "movement_red",
  "movement_silver",
  "range_blue",
  "range_gold",
  "range_green",
  "range_purple",
  "range_red",
  "range_silver",
  "skill_blue",
  "skill_gold",
  "skill_green",
  "skill_red",
  "skill_silver",
  "tiebreaker_blue",
  "tiebreaker_orange",
  "token_magma",
  "token_smoke_bomb",
  "token_blast",
  "token_dud",
  "token_grenade",
  "token_illusion",
  "token_ice",
  "token_totem",
  "token_barrier",
  "token_tree"
];
export {
  Color as C,
  Item as I,
  Modifier as M,
  Stat as S,
  Type as T,
  ValueSign as V,
  cardStats as c,
  defaultEmoji as d,
  heroes as h,
  stats as s
};
