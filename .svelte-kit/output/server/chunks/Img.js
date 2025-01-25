import { c as create_ssr_component, a as compute_rest_props, h as add_attribute, b as spread, d as escape_object, e as escape_attribute_value } from "./ssr.js";
import { twMerge } from "tailwind-merge";
const Img = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, [
    "caption",
    "src",
    "srcset",
    "size",
    "alignment",
    "imgClass",
    "figClass",
    "alt",
    "effect",
    "captionClass"
  ]);
  let { caption = void 0 } = $$props;
  let { src = void 0 } = $$props;
  let { srcset = void 0 } = $$props;
  let { size = "max-w-full" } = $$props;
  let { alignment = "" } = $$props;
  let { imgClass = "h-auto" } = $$props;
  let { figClass = "max-w-lg" } = $$props;
  let { alt = "" } = $$props;
  let { effect = "" } = $$props;
  let { captionClass = "mt-2 text-sm text-center text-gray-500 dark:text-gray-400" } = $$props;
  if ($$props.caption === void 0 && $$bindings.caption && caption !== void 0)
    $$bindings.caption(caption);
  if ($$props.src === void 0 && $$bindings.src && src !== void 0)
    $$bindings.src(src);
  if ($$props.srcset === void 0 && $$bindings.srcset && srcset !== void 0)
    $$bindings.srcset(srcset);
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.alignment === void 0 && $$bindings.alignment && alignment !== void 0)
    $$bindings.alignment(alignment);
  if ($$props.imgClass === void 0 && $$bindings.imgClass && imgClass !== void 0)
    $$bindings.imgClass(imgClass);
  if ($$props.figClass === void 0 && $$bindings.figClass && figClass !== void 0)
    $$bindings.figClass(figClass);
  if ($$props.alt === void 0 && $$bindings.alt && alt !== void 0)
    $$bindings.alt(alt);
  if ($$props.effect === void 0 && $$bindings.effect && effect !== void 0)
    $$bindings.effect(effect);
  if ($$props.captionClass === void 0 && $$bindings.captionClass && captionClass !== void 0)
    $$bindings.captionClass(captionClass);
  return `${caption ? `<figure${add_attribute("class", figClass, 0)}><img${add_attribute("class", twMerge(imgClass, size, alignment, effect, $$props.class), 0)}${add_attribute("src", src, 0)}${add_attribute("srcset", srcset, 0)}${add_attribute("alt", alt, 0)}> <figcaption${add_attribute("class", captionClass, 0)}><!-- HTML_TAG_START -->${caption}<!-- HTML_TAG_END --></figcaption></figure>` : `<img${spread(
    [
      escape_object($$restProps),
      {
        class: escape_attribute_value(twMerge(imgClass, size, alignment, effect, $$props.class))
      },
      { src: escape_attribute_value(src) },
      { srcset: escape_attribute_value(srcset) },
      { alt: escape_attribute_value(alt) }
    ],
    {}
  )}>`} `;
});
export {
  Img as I
};
