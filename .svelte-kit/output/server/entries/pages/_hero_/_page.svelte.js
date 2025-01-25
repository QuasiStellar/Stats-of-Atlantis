import { c as create_ssr_component, v as validate_component, f as escape, k as each, h as add_attribute } from "../../../chunks/ssr.js";
import { h as heroes, I as Item, s as stats } from "../../../chunks/states.js";
import { C as Checkbox } from "../../../chunks/Checkbox.js";
import { T as Tooltip } from "../../../chunks/Tooltip.js";
import { I as Img } from "../../../chunks/Img.js";
import { e as error } from "../../../chunks/index.js";
globalThis.matchMedia?.(
  "(prefers-reduced-motion: reduce)"
).matches;
const biggerPicture = "";
const CardGrid_svelte_svelte_type_style_lang = "";
const css = {
  code: '.mainCardII.svelte-ud6bd6{top:0.25rem;z-index:30}.altCardII.svelte-ud6bd6{top:21px;@media (min-width: 400px) {\r\n          top: 1.5rem;\r\n      };@media (min-width: 640px) {\r\n          top: 36px;\r\n      };@media (min-width: 1024px) {\r\n          top: 3.5rem;\r\n      };z-index:20}.downCardII.svelte-ud6bd6{top:2.5rem;@media (min-width: 400px) {\r\n          top: 3rem;\r\n      };@media (min-width: 640px) {\r\n          top: 4.6rem;\r\n      };@media (min-width: 1024px) {\r\n          top: 7rem;\r\n      };z-index:20}.mainCardIII.svelte-ud6bd6{top:0.25rem;z-index:10}.altCardIII.svelte-ud6bd6{top:21px;@media (min-width: 400px) {\r\n          top: 1.5rem;\r\n      };@media (min-width: 640px) {\r\n          top: 36px;\r\n      };@media (min-width: 1024px) {\r\n          top: 3.5rem;\r\n      };z-index:0}.downCardIII.svelte-ud6bd6{top:2.5rem;@media (min-width: 400px) {\r\n          top: 3rem;\r\n      };@media (min-width: 640px) {\r\n          top: 4.6rem;\r\n      };@media (min-width: 1024px) {\r\n          top: 7rem;\r\n      };z-index:0}.font-modesto.svelte-ud6bd6{font-family:"Modesto Poster", serif}@font-face{font-family:"Modesto Poster";src:url("../../lib/fonts/modesto_poster.woff") format("woff")}',
  map: null
};
const CardGrid = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let hoverOverBlueII;
  let hoverOverRedII;
  let hoverOverGreenII;
  let hoverOverBlueIII;
  let hoverOverRedIII;
  let hoverOverGreenIII;
  let showNumbers;
  let showHandicap;
  let disableShowNumbers;
  let statImages;
  let { heroName } = $$props;
  let gold;
  let silver;
  let purple;
  let blueIa;
  let redIa;
  let greenIa;
  let blueIIa;
  let blueIIb;
  let redIIa;
  let redIIb;
  let greenIIa;
  let greenIIb;
  let blueIIIa;
  let blueIIIb;
  let redIIIa;
  let redIIIb;
  let greenIIIa;
  let greenIIIb;
  let blueIIaCard;
  let redIIaCard;
  let greenIIaCard;
  let blueIIbCard;
  let redIIbCard;
  let greenIIbCard;
  let blueIIIaCard;
  let redIIIaCard;
  let greenIIIaCard;
  let blueIIIbCard;
  let redIIIbCard;
  let greenIIIbCard;
  let blueIIaltChecked = false;
  let blueIImainChecked = false;
  let redIIaltChecked = false;
  let redIImainChecked = false;
  let greenIIaltChecked = false;
  let greenIImainChecked = false;
  let blueIIIaltChecked = false;
  let blueIIImainChecked = false;
  let redIIIaltChecked = false;
  let redIIImainChecked = false;
  let greenIIIaltChecked = false;
  let greenIIImainChecked = false;
  const labelColor = (disabled) => disabled ? "gray" : "white";
  const hero = heroes[heroName];
  const fullName = hero.name + " " + hero.title;
  let banner;
  if ($$props.heroName === void 0 && $$bindings.heroName && heroName !== void 0)
    $$bindings.heroName(heroName);
  $$result.css.add(css);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    hoverOverBlueII = false;
    hoverOverRedII = false;
    hoverOverGreenII = false;
    hoverOverBlueIII = false;
    hoverOverRedIII = false;
    hoverOverGreenIII = false;
    showNumbers = false;
    showHandicap = false;
    {
      {
        let blueIIselection = blueIImainChecked ? true : blueIIaltChecked ? false : null;
        let redIIselection = redIImainChecked ? true : redIIaltChecked ? false : null;
        let greenIIselection = greenIImainChecked ? true : greenIIaltChecked ? false : null;
        let blueIIIselection = blueIIImainChecked ? true : blueIIIaltChecked ? false : null;
        let redIIIselection = redIIImainChecked ? true : redIIIaltChecked ? false : null;
        let greenIIIselection = greenIIImainChecked ? true : greenIIIaltChecked ? false : null;
        const bonuses = {};
        bonuses[Item.INITIATIVE] = 0;
        bonuses[Item.ATTACK] = 0;
        bonuses[Item.DEFENSE] = 0;
        bonuses[Item.AREA] = 0;
        bonuses[Item.RANGE] = 0;
        bonuses[Item.MOVEMENT] = 0;
        if (blueIIselection === true) {
          bonuses[blueIIbCard.item] += 1;
        }
        if (blueIIselection === false) {
          bonuses[blueIIaCard.item] += 1;
        }
        if (redIIselection === true) {
          bonuses[redIIbCard.item] += 1;
        }
        if (redIIselection === false) {
          bonuses[redIIaCard.item] += 1;
        }
        if (greenIIselection === true) {
          bonuses[greenIIbCard.item] += 1;
        }
        if (greenIIselection === false) {
          bonuses[greenIIaCard.item] += 1;
        }
        if (blueIIIselection === true) {
          bonuses[blueIIIbCard.item] += 1;
        }
        if (blueIIIselection === false) {
          bonuses[blueIIIaCard.item] += 1;
        }
        if (redIIIselection === true) {
          bonuses[redIIIbCard.item] += 1;
        }
        if (redIIIselection === false) {
          bonuses[redIIIaCard.item] += 1;
        }
        if (greenIIIselection === true) {
          bonuses[greenIIIbCard.item] += 1;
        }
        if (greenIIIselection === false) {
          bonuses[greenIIIaCard.item] += 1;
        }
        bonuses[Item.INITIATIVE];
        bonuses[Item.ATTACK];
        bonuses[Item.DEFENSE];
        bonuses[Item.AREA];
        bonuses[Item.RANGE];
        bonuses[Item.MOVEMENT];
      }
    }
    disableShowNumbers = true;
    statImages = /* @__PURE__ */ new Map();
    $$rendered = `<div class="flex md:mt-20 mt-16 mb-52"><div class="grid grid-cols-12 m-auto"><div class="col-span-12 w-78 xs:w-96 sm:w-157 lg:w-239 h-41 xs:h-50 sm:h-82 lg:h-125 mt-4 xs:mt-5 sm:mt-7.5 lg:mt-10 relative"><div class="border border-dark-600 rounded-lg sm:rounded-xl lg:rounded-3xl left-0.25 xs:left-0.5 sm:left-0.5 lg:left-1 w-77.5 xs:w-95 sm:w-156 lg:w-237 absolute">${validate_component(Img, "Img").$$render(
      $$result,
      {
        src: banner,
        class: "rounded-lg sm:rounded-xl lg:rounded-3xl"
      },
      {},
      {}
    )} <p class="absolute text-black xs:text-xl sm:text-3xl lg:text-5xl -top-[14px] sm:-top-[19px] lg:-top-[24px] left-[10px] sm:left-[22px] lg:left-[34px] font-modesto svelte-ud6bd6">${escape(fullName)}</p> <p class="absolute text-black xs:text-xl sm:text-3xl lg:text-5xl -top-[10px] sm:-top-[13px] lg:-top-[16px] left-[6px] sm:left-[16px] lg:left-[26px] font-modesto svelte-ud6bd6">${escape(fullName)}</p> <p class="absolute text-black xs:text-xl sm:text-3xl lg:text-5xl -top-[14px] sm:-top-[19px] lg:-top-[24px] left-[6px] sm:left-[16px] lg:left-[26px] font-modesto svelte-ud6bd6">${escape(fullName)}</p> <p class="absolute text-black xs:text-xl sm:text-3xl lg:text-5xl -top-[10px] sm:-top-[13px] lg:-top-[16px] left-[10px] sm:left-[22px] lg:left-[34px] font-modesto svelte-ud6bd6">${escape(fullName)}</p> <p class="absolute text-white xs:text-xl sm:text-3xl lg:text-5xl -top-[12px] sm:-top-[16px] lg:-top-[20px] left-[8px] sm:left-[19px] lg:left-[30px] font-modesto svelte-ud6bd6">${escape(fullName)}</p></div></div> ${each(stats, (stat, stat_index) => {
      return `<div${add_attribute("id", stat, 0)} class="col-span-3 h-3 xs:h-4 sm:h-5.5 lg:h-7 z-20 relative"><div class="left-0.25 xs:left-0.5 sm:left-0.5 lg:left-1 top-0.25 xs:top-0.5 sm:top-0.5 lg:top-1 h-2.5 xs:h-3 sm:h-4 lg:h-5 border border-dark-600 bg-transparent hover:bg-transparent rounded sm:rounded-lg lg:rounded-xl bg-dark-900 absolute"><div class="m-0.5 sm:m-0.5 lg:m-1 relative h-full">${validate_component(Img, "Img").$$render(
        $$result,
        {
          src: statImages.get(stat),
          class: "absolute w-2 xs:w-2.5 sm:w-3.75 lg:w-5 z-30 -top-0.5 sm:-top-0.75 lg:-top-1.25 xs:left-0.5 sm:left-0.75 lg:left-1"
        },
        {},
        {}
      )} <div class="float-left w-2 xs:w-3.5 sm:w-6 lg:w-7 h-full bg-transparent"></div> ${each(Array(8), (_, color_index) => {
        return `<div class="float-left w-0.5 sm:w-0.75 lg:w-1 h-1"></div> ${hero.stats[stat_index] > color_index ? `<div class="${"z-40 float-left w-[5.6px] xs:w-[7px] sm:w-[12px] lg:w-5 h-1 xs:h-1.5 sm:h-2 lg:h-2.5 rounded-sm sm:rounded lg:rounded-md bg-" + escape(heroName, true) + " svelte-ud6bd6"}"></div>` : `<div class="float-left w-[5.6px] xs:w-[7px] sm:w-[12px] lg:w-5 h-1 bg-transparent"></div>`}`;
      })}</div> </div></div> ${validate_component(Tooltip, "Tooltip").$$render(
        $$result,
        {
          triggeredBy: "#" + stat,
          placement: "top",
          class: "z-50"
        },
        {},
        {
          default: () => {
            return `${escape(stat.charAt(0).toUpperCase() + stat.slice(1))}`;
          }
        }
      )}`;
    })} <div class="col-span-4 w-26 xs:w-32 sm:w-52 lg:w-80 h-36 xs:h-44 sm:h-73 lg:h-111 relative"><div class="border border-dark-600 bg-transparent hover:bg-transparent rounded-lg sm:rounded-xl lg:rounded-3xl w-25.5 xs:w-31 sm:w-51.5 lg:w-78 left-0.25 xs:left-0.5 sm:left-0.5 lg:left-1 top-0.25 xs:top-0.5 sm:top-0.5 lg:top-1 absolute"><canvas id="goldCanvas" width="1192" height="1664" class="w-full rounded-lg sm:rounded-xl lg:rounded-3xl"${add_attribute("this", gold, 0)}></canvas></div></div> <div class="col-span-4 w-26 xs:w-32 sm:w-52 lg:w-80 h-36 xs:h-44 sm:h-73 lg:h-111 relative"><div class="border border-dark-600 bg-transparent hover:bg-transparent rounded-lg sm:rounded-xl lg:rounded-3xl w-25.5 xs:w-31 sm:w-51.5 lg:w-78 left-0.25 xs:left-0.5 sm:left-0.5 lg:left-1 top-0.25 xs:top-0.5 sm:top-0.5 lg:top-1 absolute"><canvas id="silverCanvas" width="1192" height="1664" class="w-full rounded-lg sm:rounded-xl lg:rounded-3xl"${add_attribute("this", silver, 0)}></canvas></div></div> <div class="col-span-4 w-26 xs:w-32 sm:w-52 lg:w-80 h-36 xs:h-44 sm:h-73 lg:h-111 relative"><div class="border border-dark-600 bg-transparent hover:bg-transparent rounded-lg sm:rounded-xl lg:rounded-3xl w-25.5 xs:w-31 sm:w-51.5 lg:w-78 left-0.25 xs:left-0.5 sm:left-0.5 lg:left-1 top-0.25 xs:top-0.5 sm:top-0.5 lg:top-1 absolute"><canvas id="purpleCanvas" width="1192" height="1664" class="w-full rounded-lg sm:rounded-xl lg:rounded-3xl"${add_attribute("this", purple, 0)}></canvas></div></div> <div class="col-span-4 w-26 xs:w-32 sm:w-52 lg:w-80 h-35 xs:h-44 sm:h-73 lg:h-111 relative"><div class="border border-dark-600 bg-transparent hover:bg-transparent rounded-lg sm:rounded-xl lg:rounded-3xl w-25.5 xs:w-31 sm:w-51.5 lg:w-78 left-0.25 xs:left-0.5 sm:left-0.5 lg:left-1 top-0.25 xs:top-0.5 sm:top-0.5 lg:top-1 absolute"><canvas id="blueICanvas" width="1192" height="1664" class="w-full rounded-lg sm:rounded-xl lg:rounded-3xl"${add_attribute("this", blueIa, 0)}></canvas></div></div> <div class="col-span-4 w-26 xs:w-32 sm:w-52 lg:w-80 h-35 xs:h-44 sm:h-73 lg:h-111 relative"><div class="border border-dark-600 bg-transparent hover:bg-transparent rounded-lg sm:rounded-xl lg:rounded-3xl w-25.5 xs:w-31 sm:w-51.5 lg:w-78 left-0.25 xs:left-0.5 sm:left-0.5 lg:left-1 top-0.25 xs:top-0.5 sm:top-0.5 lg:top-1 absolute"><canvas id="redICanvas" width="1192" height="1664" class="w-full rounded-lg sm:rounded-xl lg:rounded-3xl"${add_attribute("this", redIa, 0)}></canvas></div></div> <div class="col-span-4 w-26 xs:w-32 sm:w-52 lg:w-80 h-35 xs:h-44 sm:h-73 lg:h-111 relative"><div class="border border-dark-600 bg-transparent hover:bg-transparent rounded-lg sm:rounded-xl lg:rounded-3xl w-25.5 xs:w-31 sm:w-51.5 lg:w-78 left-0.25 xs:left-0.5 sm:left-0.5 lg:left-1 top-0.25 xs:top-0.5 sm:top-0.5 lg:top-1 absolute"><canvas id="greenICanvas" width="1192" height="1664" class="w-full rounded-lg sm:rounded-xl lg:rounded-3xl"${add_attribute("this", greenIa, 0)}></canvas></div></div> <div class="col-span-4 w-26 xs:w-32 sm:w-52 lg:w-80 h-40 xs:h-49 sm:h-81 lg:h-124 relative"><div class="${"border border-dark-600 bg-transparent hover:bg-transparent rounded-lg sm:rounded-xl lg:rounded-3xl w-25.5 xs:w-31 sm:w-51.5 lg:w-78 left-0.25 xs:left-0.5 sm:left-0.5 lg:left-1 absolute duration-500 " + escape(
      hoverOverBlueII ? "downCardII" : "altCardII",
      true
    ) + " svelte-ud6bd6"}"><canvas id="blueIIaltCanvas" width="1192" height="1664" class="w-full rounded-lg sm:rounded-xl lg:rounded-3xl"${add_attribute("this", blueIIb, 0)}></canvas> ${validate_component(Checkbox, "Checkbox").$$render(
      $$result,
      {
        class: "absolute top-[3px] xs:top-[4px] sm:top-[7px] lg:top-[11px] right-0 xs:right-[1px] sm:right-[5px] lg:right-[9px] w-2 sm:w-3.5 lg:w-5 h-2 sm:h-3.5 lg:h-5",
        checked: blueIIaltChecked
      },
      {
        checked: ($$value) => {
          blueIIaltChecked = $$value;
          $$settled = false;
        }
      },
      {}
    )}</div> <div class="${"border border-dark-600 bg-transparent hover:bg-transparent rounded-lg sm:rounded-xl lg:rounded-3xl w-25.5 xs:w-31 sm:w-51.5 lg:w-78 left-0.25 xs:left-0.5 sm:left-0.5 lg:left-1 absolute duration-500 " + escape(
      "mainCardII",
      true
    ) + " svelte-ud6bd6"}"><canvas id="blueIImainCanvas" width="1192" height="1664" class="w-full rounded-lg sm:rounded-xl lg:rounded-3xl"${add_attribute("this", blueIIa, 0)}></canvas> ${validate_component(Checkbox, "Checkbox").$$render(
      $$result,
      {
        class: "absolute top-[3px] xs:top-[4px] sm:top-[7px] lg:top-[11px] right-0 xs:right-[1px] sm:right-[5px] lg:right-[9px] w-2 sm:w-3.5 lg:w-5 h-2 sm:h-3.5 lg:h-5",
        checked: blueIImainChecked
      },
      {
        checked: ($$value) => {
          blueIImainChecked = $$value;
          $$settled = false;
        }
      },
      {}
    )}</div></div> <div class="col-span-4 w-26 xs:w-32 sm:w-52 lg:w-80 h-40 xs:h-49 sm:h-81 lg:h-124 relative"><div class="${"border border-dark-600 bg-transparent hover:bg-transparent rounded-lg sm:rounded-xl lg:rounded-3xl w-25.5 xs:w-31 sm:w-51.5 lg:w-78 left-0.25 xs:left-0.5 sm:left-0.5 lg:left-1 absolute duration-500 " + escape(
      hoverOverRedII ? "downCardII" : "altCardII",
      true
    ) + " svelte-ud6bd6"}"><canvas id="redIIaltCanvas" width="1192" height="1664" class="w-full rounded-lg sm:rounded-xl lg:rounded-3xl"${add_attribute("this", redIIb, 0)}></canvas> ${validate_component(Checkbox, "Checkbox").$$render(
      $$result,
      {
        class: "absolute top-[3px] xs:top-[4px] sm:top-[7px] lg:top-[11px] right-0 xs:right-[1px] sm:right-[5px] lg:right-[9px] w-2 sm:w-3.5 lg:w-5 h-2 sm:h-3.5 lg:h-5",
        checked: redIIaltChecked
      },
      {
        checked: ($$value) => {
          redIIaltChecked = $$value;
          $$settled = false;
        }
      },
      {}
    )}</div> <div class="${"border border-dark-600 bg-transparent hover:bg-transparent rounded-lg sm:rounded-xl lg:rounded-3xl w-25.5 xs:w-31 sm:w-51.5 lg:w-78 left-0.25 xs:left-0.5 sm:left-0.5 lg:left-1 absolute duration-500 " + escape(
      "mainCardII",
      true
    ) + " svelte-ud6bd6"}"><canvas id="redIImainCanvas" width="1192" height="1664" class="w-full rounded-lg sm:rounded-xl lg:rounded-3xl"${add_attribute("this", redIIa, 0)}></canvas> ${validate_component(Checkbox, "Checkbox").$$render(
      $$result,
      {
        class: "absolute top-[3px] xs:top-[4px] sm:top-[7px] lg:top-[11px] right-0 xs:right-[1px] sm:right-[5px] lg:right-[9px] w-2 sm:w-3.5 lg:w-5 h-2 sm:h-3.5 lg:h-5",
        checked: redIImainChecked
      },
      {
        checked: ($$value) => {
          redIImainChecked = $$value;
          $$settled = false;
        }
      },
      {}
    )}</div></div> <div class="col-span-4 w-26 xs:w-32 sm:w-52 lg:w-80 h-40 xs:h-49 sm:h-81 lg:h-124 relative"><div class="${"border border-dark-600 bg-transparent hover:bg-transparent rounded-lg sm:rounded-xl lg:rounded-3xl w-25.5 xs:w-31 sm:w-51.5 lg:w-78 left-0.25 xs:left-0.5 sm:left-0.5 lg:left-1 absolute duration-500 " + escape(
      hoverOverGreenII ? "downCardII" : "altCardII",
      true
    ) + " svelte-ud6bd6"}"><canvas id="greenIIaltCanvas" width="1192" height="1664" class="w-full rounded-lg sm:rounded-xl lg:rounded-3xl"${add_attribute("this", greenIIb, 0)}></canvas> ${validate_component(Checkbox, "Checkbox").$$render(
      $$result,
      {
        class: "absolute top-[3px] xs:top-[4px] sm:top-[7px] lg:top-[11px] right-0 xs:right-[1px] sm:right-[5px] lg:right-[9px] w-2 sm:w-3.5 lg:w-5 h-2 sm:h-3.5 lg:h-5",
        checked: greenIIaltChecked
      },
      {
        checked: ($$value) => {
          greenIIaltChecked = $$value;
          $$settled = false;
        }
      },
      {}
    )}</div> <div class="${"border border-dark-600 bg-transparent hover:bg-transparent rounded-lg sm:rounded-xl lg:rounded-3xl w-25.5 xs:w-31 sm:w-51.5 lg:w-78 left-0.25 xs:left-0.5 sm:left-0.5 lg:left-1 absolute duration-500 " + escape(
      "mainCardII",
      true
    ) + " svelte-ud6bd6"}"><canvas id="greenIImainCanvas" width="1192" height="1664" class="w-full rounded-lg sm:rounded-xl lg:rounded-3xl"${add_attribute("this", greenIIa, 0)}></canvas> ${validate_component(Checkbox, "Checkbox").$$render(
      $$result,
      {
        class: "absolute top-[3px] xs:top-[4px] sm:top-[7px] lg:top-[11px] right-0 xs:right-[1px] sm:right-[5px] lg:right-[9px] w-2 sm:w-3.5 lg:w-5 h-2 sm:h-3.5 lg:h-5",
        checked: greenIImainChecked
      },
      {
        checked: ($$value) => {
          greenIImainChecked = $$value;
          $$settled = false;
        }
      },
      {}
    )}</div></div> <div class="col-span-4 w-26 xs:w-32 sm:w-52 lg:w-80 h-40 xs:h-49 sm:h-81 lg:h-124 relative"><div class="${"border border-dark-600 bg-transparent hover:bg-transparent rounded-lg sm:rounded-xl lg:rounded-3xl w-25.5 xs:w-31 sm:w-51.5 lg:w-78 left-0.25 xs:left-0.5 sm:left-0.5 lg:left-1 absolute duration-500 " + escape(
      hoverOverBlueIII ? "downCardIII" : "altCardIII",
      true
    ) + " svelte-ud6bd6"}"><canvas id="blueIIIaltCanvas" width="1192" height="1664" class="w-full rounded-lg sm:rounded-xl lg:rounded-3xl"${add_attribute("this", blueIIIb, 0)}></canvas> ${validate_component(Checkbox, "Checkbox").$$render(
      $$result,
      {
        class: "absolute top-[3px] xs:top-[4px] sm:top-[7px] lg:top-[11px] right-0 xs:right-[1px] sm:right-[5px] lg:right-[9px] w-2 sm:w-3.5 lg:w-5 h-2 sm:h-3.5 lg:h-5",
        checked: blueIIIaltChecked
      },
      {
        checked: ($$value) => {
          blueIIIaltChecked = $$value;
          $$settled = false;
        }
      },
      {}
    )}</div> <div class="${"border border-dark-600 bg-transparent hover:bg-transparent rounded-lg sm:rounded-xl lg:rounded-3xl w-25.5 xs:w-31 sm:w-51.5 lg:w-78 left-0.25 xs:left-0.5 sm:left-0.5 lg:left-1 absolute duration-500 " + escape(
      "mainCardIII",
      true
    ) + " svelte-ud6bd6"}"><canvas id="blueIIImainCanvas" width="1192" height="1664" class="w-full rounded-lg sm:rounded-xl lg:rounded-3xl"${add_attribute("this", blueIIIa, 0)}></canvas> ${validate_component(Checkbox, "Checkbox").$$render(
      $$result,
      {
        class: "absolute top-[3px] xs:top-[4px] sm:top-[7px] lg:top-[11px] right-0 xs:right-[1px] sm:right-[5px] lg:right-[9px] w-2 sm:w-3.5 lg:w-5 h-2 sm:h-3.5 lg:h-5",
        checked: blueIIImainChecked
      },
      {
        checked: ($$value) => {
          blueIIImainChecked = $$value;
          $$settled = false;
        }
      },
      {}
    )}</div></div> <div class="col-span-4 w-26 xs:w-32 sm:w-52 lg:w-80 h-40 xs:h-49 sm:h-81 lg:h-124 relative"><div class="${"border border-dark-600 bg-transparent hover:bg-transparent rounded-lg sm:rounded-xl lg:rounded-3xl w-25.5 xs:w-31 sm:w-51.5 lg:w-78 left-0.25 xs:left-0.5 sm:left-0.5 lg:left-1 absolute duration-500 " + escape(
      hoverOverRedIII ? "downCardIII" : "altCardIII",
      true
    ) + " svelte-ud6bd6"}"><canvas id="redIIIaltCanvas" width="1192" height="1664" class="w-full rounded-lg sm:rounded-xl lg:rounded-3xl"${add_attribute("this", redIIIb, 0)}></canvas> ${validate_component(Checkbox, "Checkbox").$$render(
      $$result,
      {
        class: "absolute top-[3px] xs:top-[4px] sm:top-[7px] lg:top-[11px] right-0 xs:right-[1px] sm:right-[5px] lg:right-[9px] w-2 sm:w-3.5 lg:w-5 h-2 sm:h-3.5 lg:h-5",
        checked: redIIIaltChecked
      },
      {
        checked: ($$value) => {
          redIIIaltChecked = $$value;
          $$settled = false;
        }
      },
      {}
    )}</div> <div class="${"border border-dark-600 bg-transparent hover:bg-transparent rounded-lg sm:rounded-xl lg:rounded-3xl w-25.5 xs:w-31 sm:w-51.5 lg:w-78 left-0.25 xs:left-0.5 sm:left-0.5 lg:left-1 absolute duration-500 " + escape(
      "mainCardIII",
      true
    ) + " svelte-ud6bd6"}"><canvas id="redIIImainCanvas" width="1192" height="1664" class="w-full rounded-lg sm:rounded-xl lg:rounded-3xl"${add_attribute("this", redIIIa, 0)}></canvas> ${validate_component(Checkbox, "Checkbox").$$render(
      $$result,
      {
        class: "absolute top-[3px] xs:top-[4px] sm:top-[7px] lg:top-[11px] right-0 xs:right-[1px] sm:right-[5px] lg:right-[9px] w-2 sm:w-3.5 lg:w-5 h-2 sm:h-3.5 lg:h-5",
        checked: redIIImainChecked
      },
      {
        checked: ($$value) => {
          redIIImainChecked = $$value;
          $$settled = false;
        }
      },
      {}
    )}</div></div> <div class="col-span-4 w-26 xs:w-32 sm:w-52 lg:w-80 h-40 xs:h-49 sm:h-81 lg:h-124 relative"><div class="${"border border-dark-600 bg-transparent hover:bg-transparent rounded-lg sm:rounded-xl lg:rounded-3xl w-25.5 xs:w-31 sm:w-51.5 lg:w-78 left-0.25 xs:left-0.5 sm:left-0.5 lg:left-1 absolute duration-500 " + escape(
      hoverOverGreenIII ? "downCardIII" : "altCardIII",
      true
    ) + " svelte-ud6bd6"}"><canvas id="greenIIIaltCanvas" width="1192" height="1664" class="w-full rounded-lg sm:rounded-xl lg:rounded-3xl"${add_attribute("this", greenIIIb, 0)}></canvas> ${validate_component(Checkbox, "Checkbox").$$render(
      $$result,
      {
        class: "absolute top-[3px] xs:top-[4px] sm:top-[7px] lg:top-[11px] right-0 xs:right-[1px] sm:right-[5px] lg:right-[9px] w-2 sm:w-3.5 lg:w-5 h-2 sm:h-3.5 lg:h-5",
        checked: greenIIIaltChecked
      },
      {
        checked: ($$value) => {
          greenIIIaltChecked = $$value;
          $$settled = false;
        }
      },
      {}
    )}</div> <div class="${"border border-dark-600 bg-transparent hover:bg-transparent rounded-lg sm:rounded-xl lg:rounded-3xl w-25.5 xs:w-31 sm:w-51.5 lg:w-78 left-0.25 xs:left-0.5 sm:left-0.5 lg:left-1 absolute duration-500 " + escape(
      "mainCardIII",
      true
    ) + " svelte-ud6bd6"}"><canvas id="greenIIImainCanvas" width="1192" height="1664" class="w-full rounded-lg sm:rounded-xl lg:rounded-3xl"${add_attribute("this", greenIIIa, 0)}></canvas> ${validate_component(Checkbox, "Checkbox").$$render(
      $$result,
      {
        class: "absolute top-[3px] xs:top-[4px] sm:top-[7px] lg:top-[11px] right-0 xs:right-[1px] sm:right-[5px] lg:right-[9px] w-2 sm:w-3.5 lg:w-5 h-2 sm:h-3.5 lg:h-5",
        checked: greenIIImainChecked
      },
      {
        checked: ($$value) => {
          greenIIImainChecked = $$value;
          $$settled = false;
        }
      },
      {}
    )}</div></div> <div id="showNumbers" class="col-span-6 flex-col content-center mt-8 xs:mt-10 sm:mt-14 flex items-center">${validate_component(Checkbox, "Checkbox").$$render(
      $$result,
      {
        disabled: disableShowNumbers,
        checked: showNumbers
      },
      {
        checked: ($$value) => {
          showNumbers = $$value;
          $$settled = false;
        }
      },
      {
        default: () => {
          return `<div style="${"color: " + escape(labelColor(disableShowNumbers), true)}">Show Numbers</div>`;
        }
      }
    )} ${validate_component(Tooltip, "Tooltip").$$render(
      $$result,
      {
        triggeredBy: "#showNumbers",
        placement: "bottom",
        class: "z-50"
      },
      {},
      {
        default: () => {
          return `Disabled by the developer&#39;s request`;
        }
      }
    )}</div> <div class="col-span-6 flex-col content-center mt-8 xs:mt-10 sm:mt-14 flex items-center">${validate_component(Checkbox, "Checkbox").$$render(
      $$result,
      { checked: showHandicap },
      {
        checked: ($$value) => {
          showHandicap = $$value;
          $$settled = false;
        }
      },
      {
        default: () => {
          return `<div style="color: white" data-svelte-h="svelte-1t50ps5">Show Handicap</div>`;
        }
      }
    )}</div></div> <p class="absolute font-modesto svelte-ud6bd6"></p> </div>`;
  } while (!$$settled);
  return $$rendered;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  if (!(data.url.substring(1) in heroes)) {
    throw error(404);
  }
  const hero = data.url.substring(1);
  const heroName = heroes[hero].name;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  return `${$$result.head += `<!-- HEAD_svelte-1t7fryr_START -->${$$result.title = `<title>${escape(heroName)}</title>`, ""}<meta name="description" content="${"Guards of Atlantis II card collection for " + escape(heroName, true) + "."}"><!-- HEAD_svelte-1t7fryr_END -->`, ""} ${validate_component(CardGrid, "CardGrid").$$render($$result, { heroName: hero }, {}, {})}`;
});
export {
  Page as default
};
