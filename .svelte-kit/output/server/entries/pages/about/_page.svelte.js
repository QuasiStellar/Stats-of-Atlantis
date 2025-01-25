import { c as create_ssr_component, a as compute_rest_props, b as spread, d as escape_object, e as escape_attribute_value, v as validate_component } from "../../../chunks/ssr.js";
import { I as Img } from "../../../chunks/Img.js";
import { twMerge } from "tailwind-merge";
const P = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, [
    "color",
    "height",
    "align",
    "justify",
    "italic",
    "firstupper",
    "upperClass",
    "opacity",
    "whitespace",
    "size",
    "space",
    "weight"
  ]);
  let { color = "text-gray-900 dark:text-white" } = $$props;
  let { height = "normal" } = $$props;
  let { align = "left" } = $$props;
  let { justify = false } = $$props;
  let { italic = false } = $$props;
  let { firstupper = false } = $$props;
  let { upperClass = "first-line:uppercase first-line:tracking-widest first-letter:text-7xl first-letter:font-bold first-letter:text-gray-900 dark:first-letter:text-gray-100 first-letter:mr-3 first-letter:float-left" } = $$props;
  let { opacity = void 0 } = $$props;
  let { whitespace = "normal" } = $$props;
  let { size = "base" } = $$props;
  let { space = void 0 } = $$props;
  let { weight = "normal" } = $$props;
  const sizes = {
    xs: "text-xs",
    sm: "text-sm",
    base: "text-base",
    lg: "text-lg",
    xl: "text-xl",
    "2xl": "text-2xl",
    "3xl": "text-3xl",
    "4xl": "text-4xl",
    "5xl": "text-5xl",
    "6xl": "text-6xl",
    "7xl": "text-7xl",
    "8xl": "text-8xl",
    "9xl": "text-9xl"
  };
  const weights = {
    thin: "font-thin",
    extralight: "font-extralight",
    light: "font-light",
    normal: "font-normal",
    medium: "font-medium",
    semibold: "font-semibold",
    bold: "font-bold",
    extrabold: "font-extrabold",
    black: "font-black"
  };
  const spaces = {
    tighter: "tracking-tighter",
    tight: "tracking-tight",
    normal: "tracking-normal",
    wide: "tracking-wide",
    wider: "tracking-wider",
    widest: "tracking-widest"
  };
  const heights = {
    normal: "leading-normal",
    relaxed: "leading-relaxed",
    loose: "leading-loose"
  };
  const aligns = {
    left: "text-left",
    center: "text-center",
    right: "text-right"
  };
  const whitespaces = {
    normal: "whitespace-normal",
    nowrap: "whitespace-nowrap",
    pre: "whitespace-pre",
    preline: "whitespace-pre-line",
    prewrap: "whitespace-pre-wrap"
  };
  let colorAndopacity = color.split(" ").map((element) => element.trim()).map((element) => element + "/" + String(opacity)).join(" ");
  let classP = twMerge(size && sizes[size], opacity && colorAndopacity || color && color, height && heights[height], weight && weights[weight], space && spaces[space], align && aligns[align], justify && "text-justify", italic && "italic", firstupper && upperClass, whitespace && whitespaces[whitespace], $$props.class);
  if ($$props.color === void 0 && $$bindings.color && color !== void 0)
    $$bindings.color(color);
  if ($$props.height === void 0 && $$bindings.height && height !== void 0)
    $$bindings.height(height);
  if ($$props.align === void 0 && $$bindings.align && align !== void 0)
    $$bindings.align(align);
  if ($$props.justify === void 0 && $$bindings.justify && justify !== void 0)
    $$bindings.justify(justify);
  if ($$props.italic === void 0 && $$bindings.italic && italic !== void 0)
    $$bindings.italic(italic);
  if ($$props.firstupper === void 0 && $$bindings.firstupper && firstupper !== void 0)
    $$bindings.firstupper(firstupper);
  if ($$props.upperClass === void 0 && $$bindings.upperClass && upperClass !== void 0)
    $$bindings.upperClass(upperClass);
  if ($$props.opacity === void 0 && $$bindings.opacity && opacity !== void 0)
    $$bindings.opacity(opacity);
  if ($$props.whitespace === void 0 && $$bindings.whitespace && whitespace !== void 0)
    $$bindings.whitespace(whitespace);
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.space === void 0 && $$bindings.space && space !== void 0)
    $$bindings.space(space);
  if ($$props.weight === void 0 && $$bindings.weight && weight !== void 0)
    $$bindings.weight(weight);
  return `<p${spread([escape_object($$restProps), { class: escape_attribute_value(classP) }], {})}>${slots.default ? slots.default({}) : ``}</p> `;
});
const discardImage = "/_app/immutable/assets/discord.44d09cc5.png";
const logoImage = "/_app/immutable/assets/logo.a972e7b6.png";
const About = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div class="flex items-center flex-col md:mt-20 mt-16"><div class="max-w-3xl flex items-center flex-col">${validate_component(Img, "Img").$$render($$result, { src: logoImage }, {}, {})} ${validate_component(P, "P").$$render(
    $$result,
    {
      align: "center",
      color: "text-white",
      class: "text-2xl md:text-4xl mb-4"
    },
    {},
    {
      default: () => {
        return `Guards of Atlantis II card builder and catalogue made by
      <a href="https://quasistellar.xyz/" target="_blank" rel="noopener noreferrer" class="text-primary-500" data-svelte-h="svelte-h4kay1">QuasiStellar</a>`;
      }
    }
  )} ${validate_component(P, "P").$$render(
    $$result,
    {
      align: "center",
      color: "text-white",
      class: "text-base md:text-2xl"
    },
    {},
    {
      default: () => {
        return `<a href="https://gamefound.com/en/projects/wolffdesigna/guardsofatlantis2new" target="_blank" rel="noopener noreferrer" class="text-primary-500" data-svelte-h="svelte-s0rzec">Guards of Atlantis II</a>
      is a board game by
      <a href="https://wolffdesigna.com/" target="_blank" rel="noopener noreferrer" class="text-primary-500" data-svelte-h="svelte-rfrofz">Wolffdesigna®</a>`;
      }
    }
  )} <a href="https://discord.gg/kYnkefHSEh" target="_blank" rel="noopener noreferrer"><div class="flex items-center flex-row my-8">${validate_component(P, "P").$$render(
    $$result,
    {
      weight: "black",
      align: "center",
      class: "text-[#5865F2] text-base md:text-2xl"
    },
    {},
    {
      default: () => {
        return `Join Discord`;
      }
    }
  )} <div class="w-3"></div> ${validate_component(Img, "Img").$$render($$result, { src: discardImage, size: "w-20" }, {}, {})} <div class="w-3"></div> ${validate_component(P, "P").$$render(
    $$result,
    {
      color: "text-white",
      align: "center",
      class: "text-base md:text-2xl"
    },
    {},
    {
      default: () => {
        return `or be defeated.`;
      }
    }
  )}</div></a> ${validate_component(P, "P").$$render(
    $$result,
    {
      align: "center",
      color: "text-white",
      class: "text-base md:text-2xl"
    },
    {},
    {
      default: () => {
        return `If something doesn&#39;t work properly or you have a suggestion, open an issue on
      <a href="https://github.com/QuasiStellar/Stats-of-Atlantis/issues" target="_blank" rel="noopener noreferrer" class="text-primary-500" data-svelte-h="svelte-1aj7ys3">Github</a>`;
      }
    }
  )} ${validate_component(P, "P").$$render(
    $$result,
    {
      size: "xs",
      color: "text-white",
      class: "mt-14"
    },
    {},
    {
      default: () => {
        return `Card design and artwork belong to Wolffdesigna®`;
      }
    }
  )} ${validate_component(P, "P").$$render($$result, { size: "xs", color: "text-white" }, {}, {
    default: () => {
      return `&quot;Stats of Atlantis&quot; is in no way affiliated with Wolffdesigna®`;
    }
  })}</div></div>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${$$result.head += `<!-- HEAD_svelte-1pyqeuj_START -->${$$result.title = `<title>Stats of Atlantis</title>`, ""}<meta name="description" content="Guards of Atlantis II card builder and catalogue."><!-- HEAD_svelte-1pyqeuj_END -->`, ""} ${validate_component(About, "About").$$render($$result, {}, {}, {})}`;
});
export {
  Page as default
};
