import { c as create_ssr_component, a as compute_rest_props, g as getContext, h as add_attribute, v as validate_component, s as setContext, f as escape, b as spread, d as escape_object, e as escape_attribute_value, i as subscribe, k as each } from "../../chunks/ssr.js";
import { p as page } from "../../chunks/stores.js";
import { C as Card } from "../../chunks/Card.js";
import { twMerge } from "tailwind-merge";
import { B as Button } from "../../chunks/Button.js";
import { P as Popper, T as Tooltip } from "../../chunks/Tooltip.js";
import { I as Img } from "../../chunks/Img.js";
import { h as heroes, s as stats } from "../../chunks/states.js";
const GradientButton = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["color", "shadow"]);
  const group = getContext("group");
  let { color = "blue" } = $$props;
  let { shadow = false } = $$props;
  const gradientClasses = {
    blue: "text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-blue-300 dark:focus:ring-blue-800 ",
    green: "text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-green-300 dark:focus:ring-green-800",
    cyan: "text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-cyan-300 dark:focus:ring-cyan-800",
    teal: "text-white bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 hover:bg-gradient-to-br focus:ring-teal-300 dark:focus:ring-teal-800",
    lime: "text-gray-900 bg-gradient-to-r from-lime-200 via-lime-400 to-lime-500 hover:bg-gradient-to-br focus:ring-lime-300 dark:focus:ring-lime-800",
    red: "text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-red-300 dark:focus:ring-red-800",
    pink: "text-white bg-gradient-to-r from-pink-400 via-pink-500 to-pink-600 hover:bg-gradient-to-br focus:ring-pink-300 dark:focus:ring-pink-800",
    purple: "text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-purple-300 dark:focus:ring-purple-800",
    purpleToBlue: "text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-blue-300 dark:focus:ring-blue-800",
    cyanToBlue: "text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-cyan-300 dark:focus:ring-cyan-800",
    greenToBlue: "text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-green-200 dark:focus:ring-green-800",
    purpleToPink: "text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-purple-200 dark:focus:ring-purple-800",
    pinkToOrange: "text-white bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-pink-200 dark:focus:ring-pink-800",
    tealToLime: "text-gray-900 bg-gradient-to-r from-teal-200 to-lime-200 hover:bg-gradient-to-l focus:ring-lime-200 dark:focus:ring-teal-700",
    redToYellow: "text-gray-900 bg-gradient-to-r from-red-200 via-red-300 to-yellow-200 hover:bg-gradient-to-bl focus:ring-red-100 dark:focus:ring-red-400"
  };
  const coloredShadowClasses = {
    blue: "shadow-blue-500/50 dark:shadow-blue-800/80",
    green: "shadow-green-500/50 dark:shadow-green-800/80",
    cyan: "shadow-cyan-500/50 dark:shadow-cyan-800/80",
    teal: "shadow-teal-500/50 dark:shadow-teal-800/80 ",
    lime: "shadow-lime-500/50 dark:shadow-lime-800/80",
    red: "shadow-red-500/50 dark:shadow-red-800/80 ",
    pink: "shadow-pink-500/50 dark:shadow-pink-800/80",
    purple: "shadow-purple-500/50 dark:shadow-purple-800/80",
    purpleToBlue: "shadow-blue-500/50 dark:shadow-blue-800/80",
    cyanToBlue: "shadow-cyan-500/50 dark:shadow-cyan-800/80",
    greenToBlue: "shadow-green-500/50 dark:shadow-green-800/80",
    purpleToPink: "shadow-purple-500/50 dark:shadow-purple-800/80",
    pinkToOrange: "shadow-pink-500/50 dark:shadow-pink-800/80",
    tealToLime: "shadow-lime-500/50 dark:shadow-teal-800/80",
    redToYellow: "shadow-red-500/50 dark:shadow-red-800/80"
  };
  let gradientOutlineClass;
  let divClass;
  if ($$props.color === void 0 && $$bindings.color && color !== void 0)
    $$bindings.color(color);
  if ($$props.shadow === void 0 && $$bindings.shadow && shadow !== void 0)
    $$bindings.shadow(shadow);
  gradientOutlineClass = twMerge(
    "inline-flex items-center justify-center w-full  !border-0",
    $$props.pill || "!rounded-md",
    "bg-white !text-gray-900 dark:bg-gray-900 dark:!text-white",
    // this is limitation - no transparency
    "hover:bg-transparent hover:!text-inherit",
    "transition-all duration-75 ease-in group-hover:!bg-opacity-0 group-hover:!text-inherit"
  );
  divClass = twMerge(
    $$props.outline && "p-0.5",
    gradientClasses[color],
    shadow && "shadow-lg",
    shadow && coloredShadowClasses[color],
    group ? $$props.pill && "first:rounded-l-full last:rounded-r-full" || "first:rounded-l-lg last:rounded-r-lg" : $$props.pill && "rounded-full" || "rounded-lg",
    $$props.class
  );
  return `${$$props.outline ? `<div${add_attribute("class", divClass, 0)}> ${validate_component(Button, "Button").$$render($$result, Object.assign({}, $$restProps, { color: "none" }, { class: gradientOutlineClass }), {}, {
    default: () => {
      return `${slots.default ? slots.default({}) : ``}`;
    }
  })}</div>` : `${validate_component(Button, "Button").$$render($$result, Object.assign({}, $$restProps, { color: "none" }, { class: divClass }), {}, {
    default: () => {
      return `${slots.default ? slots.default({}) : ``}`;
    }
  })}`} `;
});
let n = Date.now();
function generateId() {
  return (++n).toString(36);
}
const SpeedDial = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, [
    "defaultClass",
    "popperDefaultClass",
    "placement",
    "pill",
    "tooltip",
    "trigger",
    "textOutside",
    "id",
    "name",
    "gradient",
    "open"
  ]);
  let { defaultClass = "fixed right-6 bottom-6" } = $$props;
  let { popperDefaultClass = "flex items-center mb-4 gap-2" } = $$props;
  let { placement = "top" } = $$props;
  let { pill = true } = $$props;
  let { tooltip = "left" } = $$props;
  let { trigger = "hover" } = $$props;
  let { textOutside = false } = $$props;
  let { id = generateId() } = $$props;
  let { name = "Open actions menu" } = $$props;
  let { gradient = false } = $$props;
  let { open = false } = $$props;
  setContext("speed-dial", { pill, tooltip, textOutside });
  let divClass;
  let poperClass;
  if ($$props.defaultClass === void 0 && $$bindings.defaultClass && defaultClass !== void 0)
    $$bindings.defaultClass(defaultClass);
  if ($$props.popperDefaultClass === void 0 && $$bindings.popperDefaultClass && popperDefaultClass !== void 0)
    $$bindings.popperDefaultClass(popperDefaultClass);
  if ($$props.placement === void 0 && $$bindings.placement && placement !== void 0)
    $$bindings.placement(placement);
  if ($$props.pill === void 0 && $$bindings.pill && pill !== void 0)
    $$bindings.pill(pill);
  if ($$props.tooltip === void 0 && $$bindings.tooltip && tooltip !== void 0)
    $$bindings.tooltip(tooltip);
  if ($$props.trigger === void 0 && $$bindings.trigger && trigger !== void 0)
    $$bindings.trigger(trigger);
  if ($$props.textOutside === void 0 && $$bindings.textOutside && textOutside !== void 0)
    $$bindings.textOutside(textOutside);
  if ($$props.id === void 0 && $$bindings.id && id !== void 0)
    $$bindings.id(id);
  if ($$props.name === void 0 && $$bindings.name && name !== void 0)
    $$bindings.name(name);
  if ($$props.gradient === void 0 && $$bindings.gradient && gradient !== void 0)
    $$bindings.gradient(gradient);
  if ($$props.open === void 0 && $$bindings.open && open !== void 0)
    $$bindings.open(open);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    divClass = twMerge(defaultClass, "group", $$props.class);
    poperClass = twMerge(popperDefaultClass, ["top", "bottom"].includes(placement.split("-")[0]) && "flex-col");
    $$rendered = `<div${add_attribute("class", divClass, 0)}>${gradient ? `${validate_component(GradientButton, "GradientButton").$$render($$result, Object.assign({}, { pill }, { name }, { "aria-controls": id }, { "aria-expanded": open }, $$restProps, { class: "!p-3" }), {}, {
      default: () => {
        return `${slots.icon ? slots.icon({}) : ` <svg aria-hidden="true" class="w-8 h-8 transition-transform group-hover:rotate-45" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path></svg> `} <span class="sr-only">${escape(name)}</span>`;
      }
    })}` : `${validate_component(Button, "Button").$$render($$result, Object.assign({}, { pill }, { name }, { "aria-controls": id }, { "aria-expanded": open }, $$restProps, { class: "!p-3" }), {}, {
      default: () => {
        return `${slots.icon ? slots.icon({}) : ` <svg aria-hidden="true" class="w-8 h-8 transition-transform group-hover:rotate-45" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path></svg> `} <span class="sr-only">${escape(name)}</span>`;
      }
    })}`} ${validate_component(Popper, "Popper").$$render(
      $$result,
      {
        id,
        trigger,
        arrow: false,
        color: "none",
        activeContent: true,
        placement,
        class: poperClass,
        open
      },
      {
        open: ($$value) => {
          open = $$value;
          $$settled = false;
        }
      },
      {
        default: () => {
          return `${slots.default ? slots.default({}) : ``}`;
        }
      }
    )}</div> `;
  } while (!$$settled);
  return $$rendered;
});
const SpeedDialButton = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, [
    "btnDefaultClass",
    "name",
    "tooltip",
    "pill",
    "textOutside",
    "textOutsideClass",
    "textDefaultClass"
  ]);
  const context = getContext("speed-dial");
  let { btnDefaultClass = "w-[52px] h-[52px] shadow-sm !p-2" } = $$props;
  let { name = "" } = $$props;
  let { tooltip = context.tooltip } = $$props;
  let { pill = context.pill } = $$props;
  let { textOutside = context.textOutside } = $$props;
  let { textOutsideClass = "block absolute -left-14 top-1/2 mb-px text-sm font-medium -translate-y-1/2" } = $$props;
  let { textDefaultClass = "block mb-px text-xs font-medium" } = $$props;
  let btnClass;
  if ($$props.btnDefaultClass === void 0 && $$bindings.btnDefaultClass && btnDefaultClass !== void 0)
    $$bindings.btnDefaultClass(btnDefaultClass);
  if ($$props.name === void 0 && $$bindings.name && name !== void 0)
    $$bindings.name(name);
  if ($$props.tooltip === void 0 && $$bindings.tooltip && tooltip !== void 0)
    $$bindings.tooltip(tooltip);
  if ($$props.pill === void 0 && $$bindings.pill && pill !== void 0)
    $$bindings.pill(pill);
  if ($$props.textOutside === void 0 && $$bindings.textOutside && textOutside !== void 0)
    $$bindings.textOutside(textOutside);
  if ($$props.textOutsideClass === void 0 && $$bindings.textOutsideClass && textOutsideClass !== void 0)
    $$bindings.textOutsideClass(textOutsideClass);
  if ($$props.textDefaultClass === void 0 && $$bindings.textDefaultClass && textDefaultClass !== void 0)
    $$bindings.textDefaultClass(textDefaultClass);
  btnClass = twMerge(btnDefaultClass, tooltip === "none" && "flex-col", textOutside && "relative", $$props.class);
  return `${validate_component(Button, "Button").$$render($$result, Object.assign({}, { pill }, { outline: true }, { color: "light" }, $$restProps, { class: btnClass }), {}, {
    default: () => {
      return `${slots.default ? slots.default({}) : ``} ${tooltip !== "none" ? `<span class="sr-only">${escape(name)}</span>` : `${textOutside ? `<span${add_attribute("class", textOutsideClass, 0)}>${escape(name)}</span>` : `<span${add_attribute("class", textDefaultClass, 0)}>${escape(name)}</span>`}`}`;
    }
  })} ${tooltip !== "none" ? `${validate_component(Tooltip, "Tooltip").$$render($$result, { placement: tooltip, style: "dark" }, {}, {
    default: () => {
      return `${escape(name)}`;
    }
  })}` : ``} `;
});
const SortOutline = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["size", "role", "strokeLinecap", "strokeLinejoin", "strokeWidth", "ariaLabel"]);
  const ctx = getContext("iconCtx") ?? {};
  const sizes = {
    xs: "w-3 h-3",
    sm: "w-4 h-4",
    md: "w-5 h-5",
    lg: "w-6 h-6",
    xl: "w-8 h-8"
  };
  let { size = ctx.size || "md" } = $$props;
  let { role = ctx.role || "img" } = $$props;
  let { strokeLinecap = ctx.strokeLinecap || "round" } = $$props;
  let { strokeLinejoin = ctx.strokeLinejoin || "round" } = $$props;
  let { strokeWidth = ctx.strokeWidth || "2" } = $$props;
  let { ariaLabel = "sort outline" } = $$props;
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.role === void 0 && $$bindings.role && role !== void 0)
    $$bindings.role(role);
  if ($$props.strokeLinecap === void 0 && $$bindings.strokeLinecap && strokeLinecap !== void 0)
    $$bindings.strokeLinecap(strokeLinecap);
  if ($$props.strokeLinejoin === void 0 && $$bindings.strokeLinejoin && strokeLinejoin !== void 0)
    $$bindings.strokeLinejoin(strokeLinejoin);
  if ($$props.strokeWidth === void 0 && $$bindings.strokeWidth && strokeWidth !== void 0)
    $$bindings.strokeWidth(strokeWidth);
  if ($$props.ariaLabel === void 0 && $$bindings.ariaLabel && ariaLabel !== void 0)
    $$bindings.ariaLabel(ariaLabel);
  return `<svg${spread(
    [
      { xmlns: "http://www.w3.org/2000/svg" },
      { fill: "none" },
      escape_object($$restProps),
      {
        class: escape_attribute_value(twMerge("shrink-0", sizes[size], $$props.class))
      },
      { role: escape_attribute_value(role) },
      {
        "aria-label": escape_attribute_value(ariaLabel)
      },
      { viewBox: "0 0 14 20" }
    ],
    {}
  )}><path stroke="currentColor"${add_attribute("stroke-linecap", strokeLinecap, 0)}${add_attribute("stroke-linejoin", strokeLinejoin, 0)}${add_attribute("stroke-width", strokeWidth, 0)} d="M4 8.693v9.477m0 0 3-2.843M4 18.17l-3-2.843m9-4.739V1.111m0 0L7 3.954m3-2.843 3 2.843"></path></svg> `;
});
const starImage = "/_app/immutable/assets/star.95464613.png";
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: '.font-modesto.svelte-1fb4yn4{font-family:"Modesto Poster", serif}@font-face{font-family:"Modesto Poster";src:url("../lib/fonts/modesto_poster.woff") format("woff")}',
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let heroImages;
  let statImages;
  let logoImages;
  let $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => value);
  let heroList = Object.entries(heroes);
  {
    sortByComplexity();
  }
  function sortByComplexity() {
    heroList = [...heroList.sort((first, second) => first[1].stars - second[1].stars)];
  }
  $$result.css.add(css);
  heroImages = /* @__PURE__ */ new Map();
  statImages = /* @__PURE__ */ new Map();
  logoImages = /* @__PURE__ */ new Map();
  $$unsubscribe_page();
  return `${$$result.head += `<!-- HEAD_svelte-17ydq51_START -->${$$result.title = `<title>Stats of Atlantis</title>`, ""}<meta name="description" content="Guards of Atlantis II card builder and catalogue."><!-- HEAD_svelte-17ydq51_END -->`, ""} <div class="flex md:mt-20 mt-16"><ul class="max-w-full m-auto">${each(heroList, ([name, desc]) => {
    return `<li class="px-3 py-1.5"><a href="${"/" + escape(name, true)}"><div class="border border-dark-600 rounded-lg sm:rounded-2xl relative w-[300px] xs:w-[360px] sm:w-[560px] md:w-[720px] h-[151px] xs:h-[181px] sm:h-[281px] md:h-[361px]">${validate_component(Img, "Img").$$render(
      $$result,
      {
        src: heroImages.get(name),
        class: "absolute z-0 rounded-lg sm:rounded-2xl transition-all duration-300 cursor-pointer filter md:saturate-50 hover:saturate-150",
        alt: ""
      },
      {},
      {}
    )} <ul class="absolute top-1 sm:top-2 left-1 sm:left-2 space-y-0.5 sm:space-y-1">${each(stats, (stat, stat_index) => {
      return `<li>${validate_component(Card, "Card").$$render(
        $$result,
        {
          id: name + "_" + stat,
          padding: "none",
          class: "h-2.5 sm:h-5 z-20 border-dark-600 bg-dark-900"
        },
        {},
        {
          default: () => {
            return `<div class="m-0.5 sm:m-1 relative h-full">${validate_component(Img, "Img").$$render(
              $$result,
              {
                src: statImages.get(stat),
                class: "absolute w-3 sm:w-5 z-30 -top-1 sm:-top-1.25"
              },
              {},
              {}
            )} <div class="float-left w-3 sm:w-5 h-full bg-transparent"></div> ${each(Array(8), (_, color_index) => {
              return `<div class="float-left w-0.5 sm:w-1 h-1"></div> ${desc.stats[stat_index] > color_index ? `<div class="${"z-40 float-left w-0.5 sm:w-1 h-full bg-" + escape(name, true) + " svelte-1fb4yn4"}"></div>` : `<div class="float-left w-0.5 sm:w-1 h-1 bg-transparent"></div>`}`;
            })} <div class="float-left w-0.5 h-1"></div></div> `;
          }
        }
      )}</li> ${validate_component(Tooltip, "Tooltip").$$render(
        $$result,
        {
          triggeredBy: "#" + name + "_" + stat,
          placement: "left"
        },
        {},
        {
          default: () => {
            return `${escape(stat.charAt(0).toUpperCase() + stat.slice(1))}`;
          }
        }
      )}`;
    })}</ul> <div class="absolute left-15 sm:left-28 top-0 sm:top-1">${each(Array(desc.stars), (_, star_index) => {
      return `<div class="w-1 h-1"></div> ${validate_component(Img, "Img").$$render($$result, { src: starImage, size: "w-4 sm:w-8" }, {}, {})}`;
    })}</div> ${validate_component(Img, "Img").$$render(
      $$result,
      {
        src: logoImages.get(name),
        size: "w-10 sm:w-20",
        class: "absolute bottom-[3px] left-[5px]"
      },
      {},
      {}
    )} <p class="absolute text-black text-lg sm:text-4xl bottom-[14px] sm:bottom-[34px] left-[40px] sm:left-[74px] font-modesto svelte-1fb4yn4">${escape(desc.name)}</p> <p class="absolute text-black text-xs sm:text-2xl bottom-[7px] sm:bottom-[12px] left-[39px] sm:left-[72px] font-modesto svelte-1fb4yn4">${escape(desc.title)}</p> <p class="absolute text-black text-lg sm:text-4xl bottom-[10px] sm:bottom-[26px] left-[36px] sm:left-[66px] font-modesto svelte-1fb4yn4">${escape(desc.name)}</p> <p class="absolute text-black text-xs sm:text-2xl bottom-[5px] sm:bottom-[8px] left-[37px] sm:left-[68px] font-modesto svelte-1fb4yn4">${escape(desc.title)}</p> <p class="absolute text-black text-lg sm:text-4xl bottom-[14px] sm:bottom-[34px] left-[36px] sm:left-[66px] font-modesto svelte-1fb4yn4">${escape(desc.name)}</p> <p class="absolute text-black text-xs sm:text-2xl bottom-[7px] sm:bottom-[12px] left-[37px] sm:left-[68px] font-modesto svelte-1fb4yn4">${escape(desc.title)}</p> <p class="absolute text-black text-lg sm:text-4xl bottom-[10px] sm:bottom-[26px] left-[40px] sm:left-[74px] font-modesto svelte-1fb4yn4">${escape(desc.name)}</p> <p class="absolute text-black text-xs sm:text-2xl bottom-[5px] sm:bottom-[8px] left-[39px] sm:left-[72px] font-modesto svelte-1fb4yn4">${escape(desc.title)}</p> <p class="absolute text-white text-lg sm:text-4xl bottom-[12px] sm:bottom-[30px] left-[38px] sm:left-[70px] font-modesto svelte-1fb4yn4">${escape(desc.name)}</p> <p class="absolute text-white text-xs sm:text-2xl bottom-[6px] sm:bottom-[10px] left-[38px] sm:left-[70px] font-modesto svelte-1fb4yn4">${escape(desc.title)}</p> </div></a> </li>`;
  })}</ul></div> ${validate_component(SpeedDial, "SpeedDial").$$render(
    $$result,
    {
      pill: false,
      tooltip: "none",
      textOutside: true
    },
    {},
    {
      icon: () => {
        return `${validate_component(SortOutline, "SortOutline").$$render($$result, { slot: "icon", class: "w-8 h-8" }, {}, {})}`;
      },
      default: () => {
        return `${validate_component(SpeedDialButton, "SpeedDialButton").$$render(
          $$result,
          {
            id: "complexity",
            class: "w-10 sm:w-auto h-10 sm:h-auto bg-dark-700 hover:bg-dark-800 border-dark-600"
          },
          {},
          {
            default: () => {
              return `${validate_component(Img, "Img").$$render($$result, { src: starImage, class: "w-10 h-10" }, {}, {})}`;
            }
          }
        )} ${validate_component(Tooltip, "Tooltip").$$render(
          $$result,
          {
            triggeredBy: "#complexity",
            placement: "left"
          },
          {},
          {
            default: () => {
              return `Complexity`;
            }
          }
        )} ${each(stats, (stat, index) => {
          return `${validate_component(SpeedDialButton, "SpeedDialButton").$$render(
            $$result,
            {
              id: stat,
              class: "w-10 sm:w-auto h-10 sm:h-auto bg-dark-700 hover:bg-dark-800 border-dark-600"
            },
            {},
            {
              default: () => {
                return `${validate_component(Img, "Img").$$render(
                  $$result,
                  {
                    src: statImages.get(stat),
                    class: "w-10 h-10"
                  },
                  {},
                  {}
                )} `;
              }
            }
          )} ${validate_component(Tooltip, "Tooltip").$$render(
            $$result,
            {
              triggeredBy: "#" + stat,
              placement: "left"
            },
            {},
            {
              default: () => {
                return `${escape(stat[0].toUpperCase() + stat.slice(1))}`;
              }
            }
          )}`;
        })}`;
      }
    }
  )}`;
});
export {
  Page as default
};
