import { c as create_ssr_component, a as compute_rest_props, b as spread, d as escape_object, g as getContext, v as validate_component, f as escape, e as escape_attribute_value, h as add_attribute, l as compute_slots, k as each } from "../../../chunks/ssr.js";
import { B as Button } from "../../../chunks/Button.js";
import { L as Label, C as Checkbox } from "../../../chunks/Checkbox.js";
import { twMerge } from "tailwind-merge";
import { i as is_void } from "../../../chunks/names.js";
import { I as Img } from "../../../chunks/Img.js";
import { C as Color, I as Item, T as Type, V as ValueSign, M as Modifier, c as cardStats, S as Stat, d as defaultEmoji } from "../../../chunks/states.js";
import { TSMap } from "typescript-map";
const Wrapper = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["tag", "show", "use"]);
  let { tag = "div" } = $$props;
  let { show } = $$props;
  let { use = () => {
  } } = $$props;
  if ($$props.tag === void 0 && $$bindings.tag && tag !== void 0)
    $$bindings.tag(tag);
  if ($$props.show === void 0 && $$bindings.show && show !== void 0)
    $$bindings.show(show);
  if ($$props.use === void 0 && $$bindings.use && use !== void 0)
    $$bindings.use(use);
  return `${show ? `${((tag$1) => {
    return tag$1 ? `<${tag}${spread([escape_object($$restProps)], {})}>${is_void(tag$1) ? "" : `${slots.default ? slots.default({}) : ``}`}${is_void(tag$1) ? "" : `</${tag$1}>`}` : "";
  })(tag)}` : `${slots.default ? slots.default({}) : ``}`} `;
});
function clampSize(s) {
  return s && s === "xs" ? "sm" : s === "xl" ? "lg" : s;
}
const Input = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let _size;
  let $$restProps = compute_rest_props($$props, ["type", "value", "size", "defaultClass", "color", "floatClass"]);
  let $$slots = compute_slots(slots);
  let { type = "text" } = $$props;
  let { value = void 0 } = $$props;
  let { size = void 0 } = $$props;
  let { defaultClass = "block w-full disabled:cursor-not-allowed disabled:opacity-50" } = $$props;
  let { color = "base" } = $$props;
  let { floatClass = "flex absolute inset-y-0 items-center text-gray-500 dark:text-gray-400" } = $$props;
  const borderClasses = {
    base: "border-gray-300 dark:border-gray-600",
    tinted: "border-gray-300 dark:border-gray-500",
    green: "border-green-500 dark:border-green-400",
    red: "border-red-500 dark:border-red-400"
  };
  const ringClasses = {
    base: "focus:border-primary-500 focus:ring-primary-500 dark:focus:border-primary-500 dark:focus:ring-primary-500",
    green: "focus:ring-green-500 focus:border-green-500 dark:focus:border-green-500 dark:focus:ring-green-500",
    red: "focus:ring-red-500 focus:border-red-500 dark:focus:ring-red-500 dark:focus:border-red-500"
  };
  const colorClasses = {
    base: "bg-gray-50 text-gray-900 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400",
    tinted: "bg-gray-50 text-gray-900 dark:bg-gray-600 dark:text-white dark:placeholder-gray-400",
    green: "bg-green-50 text-green-900 placeholder-green-700 dark:text-green-400 dark:placeholder-green-500 dark:bg-gray-700",
    red: "bg-red-50 text-red-900 placeholder-red-700 dark:text-red-500 dark:placeholder-red-500 dark:bg-gray-700"
  };
  let background = getContext("background");
  let group = getContext("group");
  const textSizes = {
    sm: "sm:text-xs",
    md: "text-sm",
    lg: "sm:text-base"
  };
  const leftPadding = { sm: "pl-9", md: "pl-10", lg: "pl-11" };
  const rightPadding = { sm: "pr-9", md: "pr-10", lg: "pr-11" };
  const inputPadding = { sm: "p-2", md: "p-2.5", lg: "p-3" };
  let inputClass;
  if ($$props.type === void 0 && $$bindings.type && type !== void 0)
    $$bindings.type(type);
  if ($$props.value === void 0 && $$bindings.value && value !== void 0)
    $$bindings.value(value);
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.defaultClass === void 0 && $$bindings.defaultClass && defaultClass !== void 0)
    $$bindings.defaultClass(defaultClass);
  if ($$props.color === void 0 && $$bindings.color && color !== void 0)
    $$bindings.color(color);
  if ($$props.floatClass === void 0 && $$bindings.floatClass && floatClass !== void 0)
    $$bindings.floatClass(floatClass);
  _size = size || clampSize(group?.size) || "md";
  {
    {
      const _color = color === "base" && background ? "tinted" : color;
      inputClass = twMerge([
        defaultClass,
        $$slots.left && leftPadding[_size] || $$slots.right && rightPadding[_size] || inputPadding[_size],
        ringClasses[color],
        colorClasses[_color],
        borderClasses[_color],
        textSizes[_size],
        group || "rounded-lg",
        group && "first:rounded-l-lg last:rounded-r-lg",
        group && "border-l-0 first:border-l last:border-r",
        $$props.class
      ]);
    }
  }
  return `${validate_component(Wrapper, "Wrapper").$$render(
    $$result,
    {
      class: "relative w-full",
      show: $$slots.left || $$slots.right
    },
    {},
    {
      default: () => {
        return `${$$slots.left ? `<div class="${escape(twMerge(floatClass, $$props.classLeft), true) + " left-0 pl-2.5 pointer-events-none"}">${slots.left ? slots.left({}) : ``}</div>` : ``} ${slots.default ? slots.default({
          props: { ...$$restProps, class: inputClass }
        }) : ` <input${spread(
          [
            escape_object($$restProps),
            escape_object({ type }),
            {
              class: escape_attribute_value(inputClass)
            }
          ],
          {}
        )}${add_attribute("value", value, 0)}> `} ${$$slots.right ? `<div class="${escape(twMerge(floatClass, $$props.classRight), true) + " right-0 pr-2.5"}">${slots.right ? slots.right({}) : ``}</div>` : ``}`;
      }
    }
  )} `;
});
const Fileupload = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["value", "files", "inputClass"]);
  let { value = "" } = $$props;
  let { files = void 0 } = $$props;
  let { inputClass = "border !p-0 dark:text-gray-400" } = $$props;
  if ($$props.value === void 0 && $$bindings.value && value !== void 0)
    $$bindings.value(value);
  if ($$props.files === void 0 && $$bindings.files && files !== void 0)
    $$bindings.files(files);
  if ($$props.inputClass === void 0 && $$bindings.inputClass && inputClass !== void 0)
    $$bindings.inputClass(inputClass);
  return `${validate_component(Input, "Input").$$render(
    $$result,
    Object.assign({}, $$restProps, {
      class: twMerge(inputClass, $$props.class)
    }),
    {},
    {
      default: ({ props }) => {
        return `<input${spread([{ type: "file" }, escape_object(props)], {})}>`;
      }
    }
  )} `;
});
const common = "block w-full";
const Select = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, [
    "items",
    "value",
    "placeholder",
    "underline",
    "size",
    "defaultClass",
    "underlineClass"
  ]);
  let { items = [] } = $$props;
  let { value = void 0 } = $$props;
  let { placeholder = "Choose option ..." } = $$props;
  let { underline = false } = $$props;
  let { size = "md" } = $$props;
  let { defaultClass = "text-gray-900 bg-gray-50 border border-gray-300 rounded-lg focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" } = $$props;
  let { underlineClass = "text-gray-500 bg-transparent border-0 border-b-2 border-gray-200 appearance-none dark:text-gray-400 dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-200 peer" } = $$props;
  const sizes = {
    sm: "text-sm p-2",
    md: "text-sm p-2.5",
    lg: "text-base py-3 px-4"
  };
  let selectClass;
  if ($$props.items === void 0 && $$bindings.items && items !== void 0)
    $$bindings.items(items);
  if ($$props.value === void 0 && $$bindings.value && value !== void 0)
    $$bindings.value(value);
  if ($$props.placeholder === void 0 && $$bindings.placeholder && placeholder !== void 0)
    $$bindings.placeholder(placeholder);
  if ($$props.underline === void 0 && $$bindings.underline && underline !== void 0)
    $$bindings.underline(underline);
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.defaultClass === void 0 && $$bindings.defaultClass && defaultClass !== void 0)
    $$bindings.defaultClass(defaultClass);
  if ($$props.underlineClass === void 0 && $$bindings.underlineClass && underlineClass !== void 0)
    $$bindings.underlineClass(underlineClass);
  selectClass = twMerge(common, underline ? underlineClass : defaultClass, sizes[size], underline && "!px-0", $$props.class);
  return `<select${spread(
    [
      escape_object($$restProps),
      {
        class: escape_attribute_value(selectClass)
      }
    ],
    {}
  )}>${placeholder ? `<option disabled selected value="">${escape(placeholder)}</option>` : ``}${items.length ? each(items, ({ value: value2, name }) => {
    return `<option${add_attribute("value", value2, 0)}>${escape(name)}</option>`;
  }) : `${slots.default ? slots.default({}) : ``}`}</select> `;
});
const Textarea = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["value", "wrappedClass", "unWrappedClass", "innerWrappedClass"]);
  let $$slots = compute_slots(slots);
  const background = getContext("background");
  let { value = void 0 } = $$props;
  let { wrappedClass = "block w-full text-sm border-0 px-0 bg-inherit dark:bg-inherit focus:outline-none focus:ring-0" } = $$props;
  let { unWrappedClass = "p-2.5 text-sm focus:ring-primary-500 focus:border-primary-500 dark:focus:ring-primary-500 dark:focus:border-primary-500" } = $$props;
  let { innerWrappedClass = "py-2 px-4 bg-white dark:bg-gray-800" } = $$props;
  let wrapped;
  let wrapperClass;
  let textareaClass;
  const headerClass = (header) => twMerge(header ? "border-b" : "border-t", "py-2 px-3 border-gray-200 dark:border-gray-600");
  let innerWrapperClass;
  if ($$props.value === void 0 && $$bindings.value && value !== void 0)
    $$bindings.value(value);
  if ($$props.wrappedClass === void 0 && $$bindings.wrappedClass && wrappedClass !== void 0)
    $$bindings.wrappedClass(wrappedClass);
  if ($$props.unWrappedClass === void 0 && $$bindings.unWrappedClass && unWrappedClass !== void 0)
    $$bindings.unWrappedClass(unWrappedClass);
  if ($$props.innerWrappedClass === void 0 && $$bindings.innerWrappedClass && innerWrappedClass !== void 0)
    $$bindings.innerWrappedClass(innerWrappedClass);
  wrapped = $$slots.header || $$slots.footer;
  wrapperClass = twMerge(
    "w-full rounded-lg",
    background ? "bg-white dark:bg-gray-800" : "bg-gray-50 dark:bg-gray-700",
    "text-gray-900 dark:placeholder-gray-400 dark:text-white ",
    "border border-gray-200 dark:border-gray-600",
    $$props.class
  );
  textareaClass = wrapped ? wrappedClass : twMerge(wrapperClass, unWrappedClass);
  innerWrapperClass = twMerge(innerWrappedClass, $$slots.footer ? "rounded-b-lg" : "", $$slots.header ? "rounded-t-lg" : "");
  return `${validate_component(Wrapper, "Wrapper").$$render($$result, { show: wrapped, class: wrapperClass }, {}, {
    default: () => {
      return `${$$slots.header ? `<div${add_attribute("class", headerClass(true), 0)}>${slots.header ? slots.header({}) : ``}</div>` : ``} ${validate_component(Wrapper, "Wrapper").$$render($$result, { show: wrapped, class: innerWrapperClass }, {}, {
        default: () => {
          return `<textarea${spread(
            [
              escape_object($$restProps),
              {
                class: escape_attribute_value(textareaClass)
              }
            ],
            {}
          )}>${escape(value || "")}</textarea>`;
        }
      })} ${$$slots.footer ? `<div${add_attribute("class", headerClass(false), 0)}>${slots.footer ? slots.footer({}) : ``}</div>` : ``}`;
    }
  })} `;
});
const Kbd = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { kbdClass = "text-xs font-semibold text-gray-800 bg-gray-100 border border-gray-200 rounded-lg dark:bg-gray-600 dark:text-gray-100 dark:border-gray-500" } = $$props;
  if ($$props.kbdClass === void 0 && $$bindings.kbdClass && kbdClass !== void 0)
    $$bindings.kbdClass(kbdClass);
  return `<kbd${add_attribute("class", twMerge(kbdClass, $$props.class), 0)}>${slots.default ? slots.default({}) : ``}</kbd> `;
});
const Li = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["icon", "liClass"]);
  let { icon = false } = $$props;
  let { liClass = "" } = $$props;
  let classLi = twMerge(liClass, icon && "flex items-center", $$props.class);
  if ($$props.icon === void 0 && $$bindings.icon && icon !== void 0)
    $$bindings.icon(icon);
  if ($$props.liClass === void 0 && $$bindings.liClass && liClass !== void 0)
    $$bindings.liClass(liClass);
  return `<li${spread([escape_object($$restProps), { class: escape_attribute_value(classLi) }], {})}>${slots.default ? slots.default({}) : ``}</li> `;
});
const List = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["tag", "list", "position"]);
  let { tag = "ul" } = $$props;
  let { list = void 0 } = $$props;
  let { position = "inside" } = $$props;
  let lists = {
    disc: "list-disc",
    none: "list-none",
    decimal: "list-decimal"
  };
  let positions = {
    inside: "list-inside",
    outside: "list-outside"
  };
  let classList = twMerge(lists[list ?? (tag === "ul" ? "disc" : "decimal")], positions[position], $$props.class);
  if ($$props.tag === void 0 && $$bindings.tag && tag !== void 0)
    $$bindings.tag(tag);
  if ($$props.list === void 0 && $$bindings.list && list !== void 0)
    $$bindings.list(list);
  if ($$props.position === void 0 && $$bindings.position && position !== void 0)
    $$bindings.position(position);
  return `${((tag$1) => {
    return tag$1 ? `<${tag}${spread([escape_object($$restProps), { class: escape_attribute_value(classList) }], {})}>${is_void(tag$1) ? "" : `${slots.default ? slots.default({}) : ``}`}${is_void(tag$1) ? "" : `</${tag$1}>`}` : "";
  })(tag)} `;
});
const CardBuilder_svelte_svelte_type_style_lang = "";
const css = {
  code: '.font-modesto.svelte-1i1hmvt{font-family:"Modesto Poster", serif}@font-face{font-family:"Modesto Poster";src:url("../../lib/fonts/modesto_poster.woff") format("woff")}',
  map: null
};
function fieldToNumber(field) {
  return +field.replace(/[^0-9]/, "");
}
const CardBuilder = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let initiative;
  let primaryActionValue;
  let secondaryDefenseValue;
  let secondaryMovementValue;
  let minAttackStatLevelValue;
  let maxAttackStatLevelValue;
  let minDefenseStatLevelValue;
  let maxDefenseStatLevelValue;
  let minInitiativeStatLevelValue;
  let maxInitiativeStatLevelValue;
  let minMovementStatLevelValue;
  let maxMovementStatLevelValue;
  let statImages;
  let disableHandicap;
  let disableItem;
  let disableInitiative;
  let disablePrimaryActionType;
  let disablePrimaryActionValue;
  let disableValueSign;
  let disableModifierValue;
  let disableModifierValueSign;
  let disableSecondaryDefenseValue;
  let disableSecondaryMovementValue;
  let activeBorderGold;
  let activeBorderSilver;
  let activeBorderPurple;
  let activeBorderBlueIa;
  let activeBorderBlueIIa;
  let activeBorderBlueIIb;
  let activeBorderBlueIIIa;
  let activeBorderBlueIIIb;
  let activeBorderRedIa;
  let activeBorderRedIIa;
  let activeBorderRedIIb;
  let activeBorderRedIIIa;
  let activeBorderRedIIIb;
  let activeBorderGreenIa;
  let activeBorderGreenIIa;
  let activeBorderGreenIIb;
  let activeBorderGreenIIIa;
  let activeBorderGreenIIIb;
  let cardValues = new TSMap([
    [
      "gold",
      new TSMap([
        ["color", Color.GOLD],
        ["name", ""],
        ["description", ""],
        ["level", "i"],
        ["handicap", false],
        ["item", Item.ATTACK],
        ["initiativeField", "0"],
        ["primaryActionType", Type.ATTACK],
        ["primaryActionValueField", "0"],
        ["primaryActionValueSign", ValueSign.NONE],
        ["modifier", Modifier.NONE],
        ["modifierValueField", "0"],
        ["modifierValueSign", ValueSign.NONE],
        ["secondaryDefenseValueField", "0"],
        ["secondaryMovementValueField", "0"],
        ["background", void 0]
      ])
    ],
    [
      "silver",
      new TSMap([
        ["color", Color.SILVER],
        ["name", ""],
        ["description", ""],
        ["level", "i"],
        ["handicap", false],
        ["item", Item.ATTACK],
        ["initiativeField", "0"],
        ["primaryActionType", Type.SKILL],
        ["primaryActionValueField", "0"],
        ["primaryActionValueSign", ValueSign.NONE],
        ["modifier", Modifier.NONE],
        ["modifierValueField", "0"],
        ["modifierValueSign", ValueSign.NONE],
        ["secondaryDefenseValueField", "0"],
        ["secondaryMovementValueField", "0"],
        ["background", void 0]
      ])
    ],
    [
      "purple",
      new TSMap([
        ["color", Color.PURPLE],
        ["name", ""],
        ["description", ""],
        ["level", "i"],
        ["handicap", false],
        ["item", Item.ATTACK],
        ["initiativeField", "0"],
        ["primaryActionType", Type.ATTACK],
        ["primaryActionValueField", "0"],
        ["primaryActionValueSign", ValueSign.NONE],
        ["modifier", Modifier.NONE],
        ["modifierValueField", "0"],
        ["modifierValueSign", ValueSign.NONE],
        ["secondaryDefenseValueField", "0"],
        ["secondaryMovementValueField", "0"],
        ["background", void 0]
      ])
    ],
    [
      "blueIa",
      new TSMap([
        ["color", Color.BLUE],
        ["name", ""],
        ["description", ""],
        ["level", "i"],
        ["handicap", false],
        ["item", Item.ATTACK],
        ["initiativeField", "0"],
        ["primaryActionType", Type.SKILL],
        ["primaryActionValueField", "0"],
        ["primaryActionValueSign", ValueSign.NONE],
        ["modifier", Modifier.NONE],
        ["modifierValueField", "0"],
        ["modifierValueSign", ValueSign.NONE],
        ["secondaryDefenseValueField", "0"],
        ["secondaryMovementValueField", "0"],
        ["background", void 0]
      ])
    ],
    [
      "blueIIa",
      new TSMap([
        ["color", Color.BLUE],
        ["name", ""],
        ["description", ""],
        ["level", "ii"],
        ["handicap", false],
        ["item", Item.ATTACK],
        ["initiativeField", "0"],
        ["primaryActionType", Type.SKILL],
        ["primaryActionValueField", "0"],
        ["primaryActionValueSign", ValueSign.NONE],
        ["modifier", Modifier.NONE],
        ["modifierValueField", "0"],
        ["modifierValueSign", ValueSign.NONE],
        ["secondaryDefenseValueField", "0"],
        ["secondaryMovementValueField", "0"],
        ["background", void 0]
      ])
    ],
    [
      "blueIIb",
      new TSMap([
        ["color", Color.BLUE],
        ["name", ""],
        ["description", ""],
        ["level", "ii"],
        ["handicap", false],
        ["item", Item.ATTACK],
        ["initiativeField", "0"],
        ["primaryActionType", Type.SKILL],
        ["primaryActionValueField", "0"],
        ["primaryActionValueSign", ValueSign.NONE],
        ["modifier", Modifier.NONE],
        ["modifierValueField", "0"],
        ["modifierValueSign", ValueSign.NONE],
        ["secondaryDefenseValueField", "0"],
        ["secondaryMovementValueField", "0"],
        ["background", void 0]
      ])
    ],
    [
      "blueIIIa",
      new TSMap([
        ["color", Color.BLUE],
        ["name", ""],
        ["description", ""],
        ["level", "iii"],
        ["handicap", false],
        ["item", Item.ATTACK],
        ["initiativeField", "0"],
        ["primaryActionType", Type.SKILL],
        ["primaryActionValueField", "0"],
        ["primaryActionValueSign", ValueSign.NONE],
        ["modifier", Modifier.NONE],
        ["modifierValueField", "0"],
        ["modifierValueSign", ValueSign.NONE],
        ["secondaryDefenseValueField", "0"],
        ["secondaryMovementValueField", "0"],
        ["background", void 0]
      ])
    ],
    [
      "blueIIIb",
      new TSMap([
        ["color", Color.BLUE],
        ["name", ""],
        ["description", ""],
        ["level", "iii"],
        ["handicap", false],
        ["item", Item.ATTACK],
        ["initiativeField", "0"],
        ["primaryActionType", Type.SKILL],
        ["primaryActionValueField", "0"],
        ["primaryActionValueSign", ValueSign.NONE],
        ["modifier", Modifier.NONE],
        ["modifierValueField", "0"],
        ["modifierValueSign", ValueSign.NONE],
        ["secondaryDefenseValueField", "0"],
        ["secondaryMovementValueField", "0"],
        ["background", void 0]
      ])
    ],
    [
      "redIa",
      new TSMap([
        ["color", Color.RED],
        ["name", ""],
        ["description", ""],
        ["level", "i"],
        ["handicap", false],
        ["item", Item.ATTACK],
        ["initiativeField", "0"],
        ["primaryActionType", Type.ATTACK],
        ["primaryActionValueField", "0"],
        ["primaryActionValueSign", ValueSign.NONE],
        ["modifier", Modifier.NONE],
        ["modifierValueField", "0"],
        ["modifierValueSign", ValueSign.NONE],
        ["secondaryDefenseValueField", "0"],
        ["secondaryMovementValueField", "0"],
        ["background", void 0]
      ])
    ],
    [
      "redIIa",
      new TSMap([
        ["color", Color.RED],
        ["name", ""],
        ["description", ""],
        ["level", "ii"],
        ["handicap", false],
        ["item", Item.ATTACK],
        ["initiativeField", "0"],
        ["primaryActionType", Type.ATTACK],
        ["primaryActionValueField", "0"],
        ["primaryActionValueSign", ValueSign.NONE],
        ["modifier", Modifier.NONE],
        ["modifierValueField", "0"],
        ["modifierValueSign", ValueSign.NONE],
        ["secondaryDefenseValueField", "0"],
        ["secondaryMovementValueField", "0"],
        ["background", void 0]
      ])
    ],
    [
      "redIIb",
      new TSMap([
        ["color", Color.RED],
        ["name", ""],
        ["description", ""],
        ["level", "ii"],
        ["handicap", false],
        ["item", Item.ATTACK],
        ["initiativeField", "0"],
        ["primaryActionType", Type.ATTACK],
        ["primaryActionValueField", "0"],
        ["primaryActionValueSign", ValueSign.NONE],
        ["modifier", Modifier.NONE],
        ["modifierValueField", "0"],
        ["modifierValueSign", ValueSign.NONE],
        ["secondaryDefenseValueField", "0"],
        ["secondaryMovementValueField", "0"],
        ["background", void 0]
      ])
    ],
    [
      "redIIIa",
      new TSMap([
        ["color", Color.RED],
        ["name", ""],
        ["description", ""],
        ["level", "iii"],
        ["handicap", false],
        ["item", Item.ATTACK],
        ["initiativeField", "0"],
        ["primaryActionType", Type.ATTACK],
        ["primaryActionValueField", "0"],
        ["primaryActionValueSign", ValueSign.NONE],
        ["modifier", Modifier.NONE],
        ["modifierValueField", "0"],
        ["modifierValueSign", ValueSign.NONE],
        ["secondaryDefenseValueField", "0"],
        ["secondaryMovementValueField", "0"],
        ["background", void 0]
      ])
    ],
    [
      "redIIIb",
      new TSMap([
        ["color", Color.RED],
        ["name", ""],
        ["description", ""],
        ["level", "iii"],
        ["handicap", false],
        ["item", Item.ATTACK],
        ["initiativeField", "0"],
        ["primaryActionType", Type.ATTACK],
        ["primaryActionValueField", "0"],
        ["primaryActionValueSign", ValueSign.NONE],
        ["modifier", Modifier.NONE],
        ["modifierValueField", "0"],
        ["modifierValueSign", ValueSign.NONE],
        ["secondaryDefenseValueField", "0"],
        ["secondaryMovementValueField", "0"],
        ["background", void 0]
      ])
    ],
    [
      "greenIa",
      new TSMap([
        ["color", Color.GREEN],
        ["name", ""],
        ["description", ""],
        ["level", "i"],
        ["handicap", false],
        ["item", Item.ATTACK],
        ["initiativeField", "0"],
        ["primaryActionType", Type.SKILL],
        ["primaryActionValueField", "0"],
        ["primaryActionValueSign", ValueSign.NONE],
        ["modifier", Modifier.NONE],
        ["modifierValueField", "0"],
        ["modifierValueSign", ValueSign.NONE],
        ["secondaryDefenseValueField", "0"],
        ["secondaryMovementValueField", "0"],
        ["background", void 0]
      ])
    ],
    [
      "greenIIa",
      new TSMap([
        ["color", Color.GREEN],
        ["name", ""],
        ["description", ""],
        ["level", "ii"],
        ["handicap", false],
        ["item", Item.ATTACK],
        ["initiativeField", "0"],
        ["primaryActionType", Type.SKILL],
        ["primaryActionValueField", "0"],
        ["primaryActionValueSign", ValueSign.NONE],
        ["modifier", Modifier.NONE],
        ["modifierValueField", "0"],
        ["modifierValueSign", ValueSign.NONE],
        ["secondaryDefenseValueField", "0"],
        ["secondaryMovementValueField", "0"],
        ["background", void 0]
      ])
    ],
    [
      "greenIIb",
      new TSMap([
        ["color", Color.GREEN],
        ["name", ""],
        ["description", ""],
        ["level", "ii"],
        ["handicap", false],
        ["item", Item.ATTACK],
        ["initiativeField", "0"],
        ["primaryActionType", Type.SKILL],
        ["primaryActionValueField", "0"],
        ["primaryActionValueSign", ValueSign.NONE],
        ["modifier", Modifier.NONE],
        ["modifierValueField", "0"],
        ["modifierValueSign", ValueSign.NONE],
        ["secondaryDefenseValueField", "0"],
        ["secondaryMovementValueField", "0"],
        ["background", void 0]
      ])
    ],
    [
      "greenIIIa",
      new TSMap([
        ["color", Color.GREEN],
        ["name", ""],
        ["description", ""],
        ["level", "iii"],
        ["handicap", false],
        ["item", Item.ATTACK],
        ["initiativeField", "0"],
        ["primaryActionType", Type.SKILL],
        ["primaryActionValueField", "0"],
        ["primaryActionValueSign", ValueSign.NONE],
        ["modifier", Modifier.NONE],
        ["modifierValueField", "0"],
        ["modifierValueSign", ValueSign.NONE],
        ["secondaryDefenseValueField", "0"],
        ["secondaryMovementValueField", "0"],
        ["background", void 0]
      ])
    ],
    [
      "greenIIIb",
      new TSMap([
        ["color", Color.GREEN],
        ["name", ""],
        ["description", ""],
        ["level", "iii"],
        ["handicap", false],
        ["item", Item.ATTACK],
        ["initiativeField", "0"],
        ["primaryActionType", Type.SKILL],
        ["primaryActionValueField", "0"],
        ["primaryActionValueSign", ValueSign.NONE],
        ["modifier", Modifier.NONE],
        ["modifierValueField", "0"],
        ["modifierValueSign", ValueSign.NONE],
        ["secondaryDefenseValueField", "0"],
        ["secondaryMovementValueField", "0"],
        ["background", void 0]
      ])
    ]
  ]);
  let currentCard = "gold";
  function updateCurrentCard() {
    cardValues.get(currentCard).set("color", color);
    cardValues.get(currentCard).set("name", name);
    cardValues.get(currentCard).set("description", description);
    cardValues.get(currentCard).set("level", level);
    cardValues.get(currentCard).set("handicap", handicap);
    cardValues.get(currentCard).set("item", item);
    cardValues.get(currentCard).set("initiativeField", initiativeField);
    cardValues.get(currentCard).set("primaryActionType", primaryActionType);
    cardValues.get(currentCard).set("primaryActionValueField", primaryActionValueField);
    cardValues.get(currentCard).set("primaryActionValueSign", primaryActionValueSign);
    cardValues.get(currentCard).set("modifier", modifier);
    cardValues.get(currentCard).set("modifierValueField", modifierValueField);
    cardValues.get(currentCard).set("modifierValueSign", modifierValueSign);
    cardValues.get(currentCard).set("secondaryDefenseValueField", secondaryDefenseValueField);
    cardValues.get(currentCard).set("secondaryMovementValueField", secondaryMovementValueField);
    cardValues.get(currentCard).set("background", background);
  }
  let oldAttackStat = 0;
  let oldDefenseStat = 0;
  let oldInitiativeStat = 0;
  let oldMovementStat = 0;
  let attackStat = 4;
  let defenseStat = 4;
  let initiativeStat = 4;
  let movementStat = 4;
  let color = Color.GOLD;
  let name = "";
  let description = "";
  let level = "i";
  let handicap = false;
  let item = Item.ATTACK;
  let initiativeField = "0";
  let primaryActionType = Type.ATTACK;
  let primaryActionValueField = "0";
  let primaryActionValueSign = ValueSign.NONE;
  let modifier = Modifier.NONE;
  let modifierValueField = "0";
  let modifierValueSign = ValueSign.NONE;
  let secondaryDefenseValueField = "0";
  let secondaryMovementValueField = "0";
  let background;
  let customEmoji = [];
  let tempCustomEmoji;
  let canvas;
  const descriptionProps = { rows: 4 };
  const items = [
    { value: Item.ATTACK, name: "Attack" },
    { value: Item.DEFENSE, name: "Defense" },
    {
      value: Item.INITIATIVE,
      name: "Initiative"
    },
    { value: Item.RANGE, name: "Range" },
    { value: Item.AREA, name: "Area" },
    { value: Item.MOVEMENT, name: "Movement" }
  ];
  const actionTypes = [
    { value: Type.SKILL, name: "Skill" },
    { value: Type.ATTACK, name: "Attack" },
    { value: Type.MOVEMENT, name: "Movement" },
    { value: Type.DEFENSE, name: "Defense" },
    {
      value: Type.DEFENSE_SKILL,
      name: "Defense / Skill"
    }
  ];
  const valueSigns = [
    { value: ValueSign.NONE, name: "" },
    { value: ValueSign.PLUS, name: "+" },
    { value: ValueSign.MINUS, name: "-" },
    { value: ValueSign.EXCLAMATION, name: "!" }
  ];
  const modifierValueSigns = [
    { value: ValueSign.NONE, name: "" },
    { value: ValueSign.PLUS, name: "+" },
    { value: ValueSign.MINUS, name: "-" }
  ];
  const modifiers = [
    { value: Modifier.NONE, name: "" },
    { value: Modifier.RANGE, name: "Range" },
    { value: Modifier.AREA, name: "Area" }
  ];
  const statValues = [
    { value: 1, name: "1" },
    { value: 2, name: "2" },
    { value: 3, name: "3" },
    { value: 4, name: "4" },
    { value: 5, name: "5" },
    { value: 6, name: "6" },
    { value: 7, name: "7" },
    { value: 8, name: "8" }
  ];
  const labelColor = (disabled) => disabled ? "gray" : "white";
  function minAttackStatLevel() {
    if (primaryActionType == Type.ATTACK)
      return cardStats.get(color)?.get(Stat.ATTACK)?.get(level)?.findIndex((number) => number == primaryActionValue) ?? -1;
    return -1;
  }
  function maxAttackStatLevel() {
    if (primaryActionType == Type.ATTACK) {
      let maxAttack = cardStats.get(color)?.get(Stat.ATTACK)?.get(level)?.findLastIndex((number) => number == primaryActionValue) ?? 8;
      if (maxAttack == -1)
        return 8;
      return maxAttack;
    }
    return 8;
  }
  function minDefenseStatLevel() {
    if (primaryActionType == Type.DEFENSE || primaryActionType == Type.DEFENSE_SKILL)
      return cardStats.get(color)?.get(Stat.DEFENSE)?.get(level)?.findIndex((number) => number == primaryActionValue) ?? -1;
    if (secondaryDefenseValue != 0)
      return cardStats.get(color)?.get(Stat.DEFENSE)?.get(level)?.findIndex((number) => number == secondaryDefenseValue) ?? -1;
    return -1;
  }
  function maxDefenseStatLevel() {
    if (primaryActionType == Type.DEFENSE || primaryActionType == Type.DEFENSE_SKILL) {
      let maxDefense = cardStats.get(color)?.get(Stat.DEFENSE)?.get(level)?.findLastIndex((number) => number == primaryActionValue) ?? 8;
      if (maxDefense == -1)
        return 8;
      return maxDefense;
    }
    if (secondaryDefenseValue != 0) {
      let maxDefense = cardStats.get(color)?.get(Stat.DEFENSE)?.get(level)?.findLastIndex((number) => number == secondaryDefenseValue) ?? 8;
      if (maxDefense == -1)
        return 8;
      return maxDefense;
    }
    return 8;
  }
  function minInitiativeStatLevel() {
    return cardStats.get(color)?.get(Stat.INITIATIVE)?.get(level)?.findIndex((number) => number == initiative) ?? -1;
  }
  function maxInitiativeStatLevel() {
    let maxIni = cardStats.get(color)?.get(Stat.INITIATIVE)?.get(level)?.findLastIndex((number) => number == initiative) ?? 8;
    if (maxIni == -1)
      return 8;
    return maxIni;
  }
  function minMovementStatLevel() {
    if (primaryActionType == Type.MOVEMENT)
      return cardStats.get(color)?.get(Stat.MOVEMENT)?.get(level)?.findIndex((number) => number == primaryActionValue) ?? -1;
    if (secondaryMovementValue != 0)
      return cardStats.get(color)?.get(Stat.MOVEMENT)?.get(level)?.findIndex((number) => number == secondaryMovementValue) ?? -1;
    return -1;
  }
  function maxMovementStatLevel() {
    if (primaryActionType == Type.MOVEMENT) {
      let maxMovement = cardStats.get(color)?.get(Stat.MOVEMENT)?.get(level)?.findLastIndex((number) => number == primaryActionValue) ?? 8;
      if (maxMovement == -1)
        return 8;
      return maxMovement;
    }
    if (secondaryMovementValue != 0) {
      let maxMovement = cardStats.get(color)?.get(Stat.MOVEMENT)?.get(level)?.findLastIndex((number) => number == secondaryMovementValue) ?? 8;
      if (maxMovement == -1)
        return 8;
      return maxMovement;
    }
    return 8;
  }
  function getStatPointWidth() {
    return 0;
  }
  $$result.css.add(css);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    {
      {
        if (initiativeStat != oldInitiativeStat) {
          oldInitiativeStat = initiativeStat;
          cardValues.get("gold").set("initiativeField", cardStats.get(Color.GOLD).get(Stat.INITIATIVE).get("i")[initiativeStat - 1].toString());
          cardValues.get("blueIa").set("initiativeField", cardStats.get(Color.BLUE).get(Stat.INITIATIVE).get("i")[initiativeStat - 1].toString());
          cardValues.get("blueIIa").set("initiativeField", cardStats.get(Color.BLUE).get(Stat.INITIATIVE).get("ii")[initiativeStat - 1].toString());
          cardValues.get("blueIIb").set("initiativeField", cardStats.get(Color.BLUE).get(Stat.INITIATIVE).get("ii")[initiativeStat - 1].toString());
          cardValues.get("blueIIIa").set("initiativeField", cardStats.get(Color.BLUE).get(Stat.INITIATIVE).get("iii")[initiativeStat - 1].toString());
          cardValues.get("blueIIIb").set("initiativeField", cardStats.get(Color.BLUE).get(Stat.INITIATIVE).get("iii")[initiativeStat - 1].toString());
          cardValues.get("redIa").set("initiativeField", cardStats.get(Color.RED).get(Stat.INITIATIVE).get("i")[initiativeStat - 1].toString());
          cardValues.get("redIIa").set("initiativeField", cardStats.get(Color.RED).get(Stat.INITIATIVE).get("ii")[initiativeStat - 1].toString());
          cardValues.get("redIIb").set("initiativeField", cardStats.get(Color.RED).get(Stat.INITIATIVE).get("ii")[initiativeStat - 1].toString());
          cardValues.get("redIIIa").set("initiativeField", cardStats.get(Color.RED).get(Stat.INITIATIVE).get("iii")[initiativeStat - 1].toString());
          cardValues.get("redIIIb").set("initiativeField", cardStats.get(Color.RED).get(Stat.INITIATIVE).get("iii")[initiativeStat - 1].toString());
          cardValues.get("greenIa").set("initiativeField", cardStats.get(Color.GREEN).get(Stat.INITIATIVE).get("i")[initiativeStat - 1].toString());
          cardValues.get("greenIIa").set("initiativeField", cardStats.get(Color.GREEN).get(Stat.INITIATIVE).get("ii")[initiativeStat - 1].toString());
          cardValues.get("greenIIb").set("initiativeField", cardStats.get(Color.GREEN).get(Stat.INITIATIVE).get("ii")[initiativeStat - 1].toString());
          cardValues.get("greenIIIa").set("initiativeField", cardStats.get(Color.GREEN).get(Stat.INITIATIVE).get("iii")[initiativeStat - 1].toString());
          cardValues.get("greenIIIb").set("initiativeField", cardStats.get(Color.GREEN).get(Stat.INITIATIVE).get("iii")[initiativeStat - 1].toString());
          initiativeField = cardValues.get(currentCard).get("initiativeField");
        }
      }
    }
    initiative = fieldToNumber(initiativeField);
    {
      {
        if (attackStat != oldAttackStat) {
          oldAttackStat = attackStat;
          if (cardValues.get("gold").get("primaryActionType") == Type.ATTACK)
            cardValues.get("gold").set("primaryActionValueField", cardStats.get(Color.GOLD).get(Stat.ATTACK).get("i")[attackStat - 1].toString());
          if (cardValues.get("redIa").get("primaryActionType") == Type.ATTACK)
            cardValues.get("redIa").set("primaryActionValueField", cardStats.get(Color.RED).get(Stat.ATTACK).get("i")[attackStat - 1].toString());
          if (cardValues.get("redIIa").get("primaryActionType") == Type.ATTACK)
            cardValues.get("redIIa").set("primaryActionValueField", cardStats.get(Color.RED).get(Stat.ATTACK).get("ii")[attackStat - 1].toString());
          if (cardValues.get("redIIb").get("primaryActionType") == Type.ATTACK)
            cardValues.get("redIIb").set("primaryActionValueField", cardStats.get(Color.RED).get(Stat.ATTACK).get("ii")[attackStat - 1].toString());
          if (cardValues.get("redIIIa").get("primaryActionType") == Type.ATTACK)
            cardValues.get("redIIIa").set("primaryActionValueField", cardStats.get(Color.RED).get(Stat.ATTACK).get("iii")[attackStat - 1].toString());
          if (cardValues.get("redIIIb").get("primaryActionType") == Type.ATTACK)
            cardValues.get("redIIIb").set("primaryActionValueField", cardStats.get(Color.RED).get(Stat.ATTACK).get("iii")[attackStat - 1].toString());
          primaryActionValueField = cardValues.get(currentCard).get("primaryActionValueField");
        }
      }
    }
    {
      {
        if (defenseStat != oldDefenseStat) {
          oldDefenseStat = defenseStat;
          if ([Type.DEFENSE, Type.DEFENSE_SKILL].includes(cardValues.get("gold").get("primaryActionType")))
            cardValues.get("gold").set("primaryActionValueField", cardStats.get(Color.GOLD).get(Stat.DEFENSE).get("i")[defenseStat - 1].toString());
          else
            cardValues.get("gold").set("secondaryDefenseValueField", cardStats.get(Color.GOLD).get(Stat.DEFENSE).get("i")[defenseStat - 1].toString());
          if ([Type.DEFENSE, Type.DEFENSE_SKILL].includes(cardValues.get("silver").get("primaryActionType")))
            cardValues.get("silver").set("primaryActionValueField", cardStats.get(Color.SILVER).get(Stat.DEFENSE).get("i")[defenseStat - 1].toString());
          else
            cardValues.get("silver").set("secondaryDefenseValueField", cardStats.get(Color.SILVER).get(Stat.DEFENSE).get("i")[defenseStat - 1].toString());
          if ([Type.DEFENSE, Type.DEFENSE_SKILL].includes(cardValues.get("blueIa").get("primaryActionType")))
            cardValues.get("blueIa").set("primaryActionValueField", cardStats.get(Color.BLUE).get(Stat.DEFENSE).get("i")[defenseStat - 1].toString());
          else
            cardValues.get("blueIa").set("secondaryDefenseValueField", cardStats.get(Color.BLUE).get(Stat.DEFENSE).get("i")[defenseStat - 1].toString());
          if ([Type.DEFENSE, Type.DEFENSE_SKILL].includes(cardValues.get("blueIIa").get("primaryActionType")))
            cardValues.get("blueIIa").set("primaryActionValueField", cardStats.get(Color.BLUE).get(Stat.DEFENSE).get("ii")[defenseStat - 1].toString());
          else
            cardValues.get("blueIIa").set("secondaryDefenseValueField", cardStats.get(Color.BLUE).get(Stat.DEFENSE).get("ii")[defenseStat - 1].toString());
          if ([Type.DEFENSE, Type.DEFENSE_SKILL].includes(cardValues.get("blueIIb").get("primaryActionType")))
            cardValues.get("blueIIb").set("primaryActionValueField", cardStats.get(Color.BLUE).get(Stat.DEFENSE).get("ii")[defenseStat - 1].toString());
          else
            cardValues.get("blueIIb").set("secondaryDefenseValueField", cardStats.get(Color.BLUE).get(Stat.DEFENSE).get("ii")[defenseStat - 1].toString());
          if ([Type.DEFENSE, Type.DEFENSE_SKILL].includes(cardValues.get("blueIIIa").get("primaryActionType")))
            cardValues.get("blueIIIa").set("primaryActionValueField", cardStats.get(Color.BLUE).get(Stat.DEFENSE).get("iii")[defenseStat - 1].toString());
          else
            cardValues.get("blueIIIa").set("secondaryDefenseValueField", cardStats.get(Color.BLUE).get(Stat.DEFENSE).get("iii")[defenseStat - 1].toString());
          if ([Type.DEFENSE, Type.DEFENSE_SKILL].includes(cardValues.get("blueIIIb").get("primaryActionType")))
            cardValues.get("blueIIIb").set("primaryActionValueField", cardStats.get(Color.BLUE).get(Stat.DEFENSE).get("iii")[defenseStat - 1].toString());
          else
            cardValues.get("blueIIIb").set("secondaryDefenseValueField", cardStats.get(Color.BLUE).get(Stat.DEFENSE).get("iii")[defenseStat - 1].toString());
          if ([Type.DEFENSE, Type.DEFENSE_SKILL].includes(cardValues.get("redIa").get("primaryActionType")))
            cardValues.get("redIa").set("primaryActionValueField", cardStats.get(Color.RED).get(Stat.DEFENSE).get("i")[defenseStat - 1].toString());
          else
            cardValues.get("redIa").set("secondaryDefenseValueField", cardStats.get(Color.RED).get(Stat.DEFENSE).get("i")[defenseStat - 1].toString());
          if ([Type.DEFENSE, Type.DEFENSE_SKILL].includes(cardValues.get("redIIa").get("primaryActionType")))
            cardValues.get("redIIa").set("primaryActionValueField", cardStats.get(Color.RED).get(Stat.DEFENSE).get("ii")[defenseStat - 1].toString());
          else
            cardValues.get("redIIa").set("secondaryDefenseValueField", cardStats.get(Color.RED).get(Stat.DEFENSE).get("ii")[defenseStat - 1].toString());
          if ([Type.DEFENSE, Type.DEFENSE_SKILL].includes(cardValues.get("redIIb").get("primaryActionType")))
            cardValues.get("redIIb").set("primaryActionValueField", cardStats.get(Color.RED).get(Stat.DEFENSE).get("ii")[defenseStat - 1].toString());
          else
            cardValues.get("redIIb").set("secondaryDefenseValueField", cardStats.get(Color.RED).get(Stat.DEFENSE).get("ii")[defenseStat - 1].toString());
          if ([Type.DEFENSE, Type.DEFENSE_SKILL].includes(cardValues.get("redIIIa").get("primaryActionType")))
            cardValues.get("redIIIa").set("primaryActionValueField", cardStats.get(Color.RED).get(Stat.DEFENSE).get("iii")[defenseStat - 1].toString());
          else
            cardValues.get("redIIIa").set("secondaryDefenseValueField", cardStats.get(Color.RED).get(Stat.DEFENSE).get("iii")[defenseStat - 1].toString());
          if ([Type.DEFENSE, Type.DEFENSE_SKILL].includes(cardValues.get("redIIIb").get("primaryActionType")))
            cardValues.get("redIIIb").set("primaryActionValueField", cardStats.get(Color.RED).get(Stat.DEFENSE).get("iii")[defenseStat - 1].toString());
          else
            cardValues.get("redIIIb").set("secondaryDefenseValueField", cardStats.get(Color.RED).get(Stat.DEFENSE).get("iii")[defenseStat - 1].toString());
          if ([Type.DEFENSE, Type.DEFENSE_SKILL].includes(cardValues.get("greenIa").get("primaryActionType")))
            cardValues.get("greenIa").set("primaryActionValueField", cardStats.get(Color.GREEN).get(Stat.DEFENSE).get("i")[defenseStat - 1].toString());
          else
            cardValues.get("greenIa").set("secondaryDefenseValueField", cardStats.get(Color.GREEN).get(Stat.DEFENSE).get("i")[defenseStat - 1].toString());
          if ([Type.DEFENSE, Type.DEFENSE_SKILL].includes(cardValues.get("greenIIa").get("primaryActionType")))
            cardValues.get("greenIIa").set("primaryActionValueField", cardStats.get(Color.GREEN).get(Stat.DEFENSE).get("ii")[defenseStat - 1].toString());
          else
            cardValues.get("greenIIa").set("secondaryDefenseValueField", cardStats.get(Color.GREEN).get(Stat.DEFENSE).get("ii")[defenseStat - 1].toString());
          if ([Type.DEFENSE, Type.DEFENSE_SKILL].includes(cardValues.get("greenIIb").get("primaryActionType")))
            cardValues.get("greenIIb").set("primaryActionValueField", cardStats.get(Color.GREEN).get(Stat.DEFENSE).get("ii")[defenseStat - 1].toString());
          else
            cardValues.get("greenIIb").set("secondaryDefenseValueField", cardStats.get(Color.GREEN).get(Stat.DEFENSE).get("ii")[defenseStat - 1].toString());
          if ([Type.DEFENSE, Type.DEFENSE_SKILL].includes(cardValues.get("greenIIIa").get("primaryActionType")))
            cardValues.get("greenIIIa").set("primaryActionValueField", cardStats.get(Color.GREEN).get(Stat.DEFENSE).get("iii")[defenseStat - 1].toString());
          else
            cardValues.get("greenIIIa").set("secondaryDefenseValueField", cardStats.get(Color.GREEN).get(Stat.DEFENSE).get("iii")[defenseStat - 1].toString());
          if (cardValues.get("greenIIIb").get("primaryActionType") == Type.DEFENSE)
            cardValues.get("greenIIIb").set("primaryActionValueField", cardStats.get(Color.GREEN).get(Stat.DEFENSE).get("iii")[defenseStat - 1].toString());
          else
            cardValues.get("greenIIIb").set("secondaryDefenseValueField", cardStats.get(Color.GREEN).get(Stat.DEFENSE).get("iii")[defenseStat - 1].toString());
          primaryActionValueField = cardValues.get(currentCard).get("primaryActionValueField");
          secondaryDefenseValueField = cardValues.get(currentCard).get("secondaryDefenseValueField");
        }
      }
    }
    {
      {
        if (movementStat != oldMovementStat) {
          oldMovementStat = movementStat;
          if (cardValues.get("gold").get("primaryActionType") == Type.MOVEMENT)
            cardValues.get("gold").set("primaryActionValueField", cardStats.get(Color.GOLD).get(Stat.MOVEMENT).get("i")[movementStat - 1].toString());
          else
            cardValues.get("gold").set("secondaryMovementValueField", cardStats.get(Color.GOLD).get(Stat.MOVEMENT).get("i")[movementStat - 1].toString());
          if (cardValues.get("blueIa").get("primaryActionType") == Type.MOVEMENT)
            cardValues.get("blueIa").set("primaryActionValueField", cardStats.get(Color.BLUE).get(Stat.MOVEMENT).get("i")[movementStat - 1].toString());
          else
            cardValues.get("blueIa").set("secondaryMovementValueField", cardStats.get(Color.BLUE).get(Stat.MOVEMENT).get("i")[movementStat - 1].toString());
          if (cardValues.get("blueIIa").get("primaryActionType") == Type.MOVEMENT)
            cardValues.get("blueIIa").set("primaryActionValueField", cardStats.get(Color.BLUE).get(Stat.MOVEMENT).get("ii")[movementStat - 1].toString());
          else
            cardValues.get("blueIIa").set("secondaryMovementValueField", cardStats.get(Color.BLUE).get(Stat.MOVEMENT).get("ii")[movementStat - 1].toString());
          if (cardValues.get("blueIIb").get("primaryActionType") == Type.MOVEMENT)
            cardValues.get("blueIIb").set("primaryActionValueField", cardStats.get(Color.BLUE).get(Stat.MOVEMENT).get("ii")[movementStat - 1].toString());
          else
            cardValues.get("blueIIb").set("secondaryMovementValueField", cardStats.get(Color.BLUE).get(Stat.MOVEMENT).get("ii")[movementStat - 1].toString());
          if (cardValues.get("blueIIIa").get("primaryActionType") == Type.MOVEMENT)
            cardValues.get("blueIIIa").set("primaryActionValueField", cardStats.get(Color.BLUE).get(Stat.MOVEMENT).get("iii")[movementStat - 1].toString());
          else
            cardValues.get("blueIIIa").set("secondaryMovementValueField", cardStats.get(Color.BLUE).get(Stat.MOVEMENT).get("iii")[movementStat - 1].toString());
          if (cardValues.get("blueIIIb").get("primaryActionType") == Type.MOVEMENT)
            cardValues.get("blueIIIb").set("primaryActionValueField", cardStats.get(Color.BLUE).get(Stat.MOVEMENT).get("iii")[movementStat - 1].toString());
          else
            cardValues.get("blueIIIb").set("secondaryMovementValueField", cardStats.get(Color.BLUE).get(Stat.MOVEMENT).get("iii")[movementStat - 1].toString());
          if (cardValues.get("redIa").get("primaryActionType") == Type.MOVEMENT)
            cardValues.get("redIa").set("primaryActionValueField", cardStats.get(Color.RED).get(Stat.MOVEMENT).get("i")[movementStat - 1].toString());
          else
            cardValues.get("redIa").set("secondaryMovementValueField", cardStats.get(Color.RED).get(Stat.MOVEMENT).get("i")[movementStat - 1].toString());
          if (cardValues.get("redIIa").get("primaryActionType") == Type.MOVEMENT)
            cardValues.get("redIIa").set("primaryActionValueField", cardStats.get(Color.RED).get(Stat.MOVEMENT).get("ii")[movementStat - 1].toString());
          else
            cardValues.get("redIIa").set("secondaryMovementValueField", cardStats.get(Color.RED).get(Stat.MOVEMENT).get("ii")[movementStat - 1].toString());
          if (cardValues.get("redIIb").get("primaryActionType") == Type.MOVEMENT)
            cardValues.get("redIIb").set("primaryActionValueField", cardStats.get(Color.RED).get(Stat.MOVEMENT).get("ii")[movementStat - 1].toString());
          else
            cardValues.get("redIIb").set("secondaryMovementValueField", cardStats.get(Color.RED).get(Stat.MOVEMENT).get("ii")[movementStat - 1].toString());
          if (cardValues.get("redIIIa").get("primaryActionType") == Type.MOVEMENT)
            cardValues.get("redIIIa").set("primaryActionValueField", cardStats.get(Color.RED).get(Stat.MOVEMENT).get("iii")[movementStat - 1].toString());
          else
            cardValues.get("redIIIa").set("secondaryMovementValueField", cardStats.get(Color.RED).get(Stat.MOVEMENT).get("iii")[movementStat - 1].toString());
          if (cardValues.get("redIIIb").get("primaryActionType") == Type.MOVEMENT)
            cardValues.get("redIIIb").set("primaryActionValueField", cardStats.get(Color.RED).get(Stat.MOVEMENT).get("iii")[movementStat - 1].toString());
          else
            cardValues.get("redIIIb").set("secondaryMovementValueField", cardStats.get(Color.RED).get(Stat.MOVEMENT).get("iii")[movementStat - 1].toString());
          if (cardValues.get("greenIa").get("primaryActionType") == Type.MOVEMENT)
            cardValues.get("greenIa").set("primaryActionValueField", cardStats.get(Color.GREEN).get(Stat.MOVEMENT).get("i")[movementStat - 1].toString());
          else
            cardValues.get("greenIa").set("secondaryMovementValueField", cardStats.get(Color.GREEN).get(Stat.MOVEMENT).get("i")[movementStat - 1].toString());
          if (cardValues.get("greenIIa").get("primaryActionType") == Type.MOVEMENT)
            cardValues.get("greenIIa").set("primaryActionValueField", cardStats.get(Color.GREEN).get(Stat.MOVEMENT).get("ii")[movementStat - 1].toString());
          else
            cardValues.get("greenIIa").set("secondaryMovementValueField", cardStats.get(Color.GREEN).get(Stat.MOVEMENT).get("ii")[movementStat - 1].toString());
          if (cardValues.get("greenIIb").get("primaryActionType") == Type.MOVEMENT)
            cardValues.get("greenIIb").set("primaryActionValueField", cardStats.get(Color.GREEN).get(Stat.MOVEMENT).get("ii")[movementStat - 1].toString());
          else
            cardValues.get("greenIIb").set("secondaryMovementValueField", cardStats.get(Color.GREEN).get(Stat.MOVEMENT).get("ii")[movementStat - 1].toString());
          if (cardValues.get("greenIIIa").get("primaryActionType") == Type.MOVEMENT)
            cardValues.get("greenIIIa").set("primaryActionValueField", cardStats.get(Color.GREEN).get(Stat.MOVEMENT).get("iii")[movementStat - 1].toString());
          else
            cardValues.get("greenIIIa").set("secondaryMovementValueField", cardStats.get(Color.GREEN).get(Stat.MOVEMENT).get("iii")[movementStat - 1].toString());
          if (cardValues.get("greenIIIb").get("primaryActionType") == Type.MOVEMENT)
            cardValues.get("greenIIIb").set("primaryActionValueField", cardStats.get(Color.GREEN).get(Stat.MOVEMENT).get("iii")[movementStat - 1].toString());
          else
            cardValues.get("greenIIIb").set("secondaryMovementValueField", cardStats.get(Color.GREEN).get(Stat.MOVEMENT).get("iii")[movementStat - 1].toString());
          primaryActionValueField = cardValues.get(currentCard).get("primaryActionValueField");
          secondaryMovementValueField = cardValues.get(currentCard).get("secondaryMovementValueField");
        }
      }
    }
    primaryActionValue = fieldToNumber(primaryActionValueField);
    fieldToNumber(modifierValueField);
    secondaryDefenseValue = fieldToNumber(secondaryDefenseValueField);
    secondaryMovementValue = fieldToNumber(secondaryMovementValueField);
    minAttackStatLevelValue = 0;
    maxAttackStatLevelValue = 0;
    minDefenseStatLevelValue = 0;
    maxDefenseStatLevelValue = 0;
    minInitiativeStatLevelValue = 0;
    maxInitiativeStatLevelValue = 0;
    minMovementStatLevelValue = 0;
    maxMovementStatLevelValue = 0;
    {
      {
        updateCurrentCard();
        minAttackStatLevelValue = minAttackStatLevel();
        maxAttackStatLevelValue = maxAttackStatLevel();
        minDefenseStatLevelValue = minDefenseStatLevel();
        maxDefenseStatLevelValue = maxDefenseStatLevel();
        minInitiativeStatLevelValue = minInitiativeStatLevel();
        maxInitiativeStatLevelValue = maxInitiativeStatLevel();
        minMovementStatLevelValue = minMovementStatLevel();
        maxMovementStatLevelValue = maxMovementStatLevel();
      }
    }
    statImages = /* @__PURE__ */ new Map();
    disableHandicap = color !== Color.GOLD;
    disableItem = level !== "iii";
    disableInitiative = color === Color.PURPLE;
    disablePrimaryActionType = color === Color.PURPLE;
    disablePrimaryActionValue = color === Color.PURPLE || primaryActionType === Type.SKILL;
    disableValueSign = color === Color.PURPLE || primaryActionType === Type.SKILL;
    disableModifierValue = modifier === Modifier.NONE;
    disableModifierValueSign = modifier === Modifier.NONE;
    disableSecondaryDefenseValue = color === Color.PURPLE || primaryActionType === Type.DEFENSE || primaryActionType === Type.DEFENSE_SKILL;
    disableSecondaryMovementValue = color === Color.PURPLE || primaryActionType === Type.MOVEMENT || color === Color.SILVER;
    activeBorderGold = "bg-yellow-600";
    activeBorderSilver = "bg-gray-500";
    activeBorderPurple = "bg-purple-600";
    activeBorderBlueIa = "bg-blue-600";
    activeBorderBlueIIa = "bg-blue-600";
    activeBorderBlueIIb = "bg-blue-600";
    activeBorderBlueIIIa = "bg-blue-600";
    activeBorderBlueIIIb = "bg-blue-600";
    activeBorderRedIa = "bg-red-600";
    activeBorderRedIIa = "bg-red-600";
    activeBorderRedIIb = "bg-red-600";
    activeBorderRedIIIa = "bg-red-600";
    activeBorderRedIIIb = "bg-red-600";
    activeBorderGreenIa = "bg-green-600";
    activeBorderGreenIIa = "bg-green-600";
    activeBorderGreenIIb = "bg-green-600";
    activeBorderGreenIIIa = "bg-green-600";
    activeBorderGreenIIIb = "bg-green-600";
    $$rendered = `<div class="pt-18 md:pt-22"><div class="flex items-center flex-col"><div class="lg:grid lg:grid-cols-2 lg:gap-6 px-3 lg:px-0"><div class="col-span-1"><div class="grid grid-cols-2 gap-1 lg:gap-2 w-full"><div class="col-span-1 h-7 z-20 relative"><div class="h-5 border border-dark-600 bg-transparent hover:bg-transparent rounded-xl bg-dark-900 absolute"><div class="m-1 relative h-full">${validate_component(Img, "Img").$$render(
      $$result,
      {
        src: statImages.get("attack"),
        class: "absolute w-5 z-30 -top-1.25"
      },
      {},
      {}
    )} <div class="float-left w-4.5 h-full bg-transparent"></div> ${each(Array(8), (_, color_index) => {
      return `<div class="float-left w-1 h-1"></div> ${minAttackStatLevelValue >= color_index ? `<div class="z-40 float-left h-2.5 rounded-md bg-amber-600" style="${"width: " + escape(getStatPointWidth(), true) + "px"}"></div>` : `${maxAttackStatLevelValue >= color_index ? `<div class="z-40 float-left h-2.5 rounded-md bg-amber-800" style="${"width: " + escape(getStatPointWidth(), true) + "px"}"></div>` : `<div class="float-left h-1 bg-transparent" style="${"width: " + escape(getStatPointWidth(), true) + "px"}"></div>`}`}`;
    })}</div></div></div> <div class="col-span-1 h-7 z-20 relative"><div class="h-5 border border-dark-600 bg-transparent hover:bg-transparent rounded-xl bg-dark-900 absolute"><div class="m-1 relative h-full">${validate_component(Img, "Img").$$render(
      $$result,
      {
        src: statImages.get("defense"),
        class: "absolute w-5 z-30 -top-1.25"
      },
      {},
      {}
    )} <div class="float-left w-4.5 h-full bg-transparent"></div> ${each(Array(8), (_, color_index) => {
      return `<div class="float-left w-1 h-1"></div> ${minDefenseStatLevelValue >= color_index ? `<div class="z-40 float-left h-2.5 rounded-md bg-amber-600" style="${"width: " + escape(getStatPointWidth(), true) + "px"}"></div>` : `${maxDefenseStatLevelValue >= color_index ? `<div class="z-40 float-left h-2.5 rounded-md bg-amber-800" style="${"width: " + escape(getStatPointWidth(), true) + "px"}"></div>` : `<div class="float-left h-1 bg-transparent" style="${"width: " + escape(getStatPointWidth(), true) + "px"}"></div>`}`}`;
    })}</div></div></div> <div class="col-span-1 h-7 z-20 relative"><div class="h-5 border border-dark-600 bg-transparent hover:bg-transparent rounded-xl bg-dark-900 absolute"><div class="m-1 relative h-full">${validate_component(Img, "Img").$$render(
      $$result,
      {
        src: statImages.get("initiative"),
        class: "absolute w-5 z-30 -top-1.25"
      },
      {},
      {}
    )} <div class="float-left w-4.5 h-full bg-transparent"></div> ${each(Array(8), (_, color_index) => {
      return `<div class="float-left w-1 h-1"></div> ${minInitiativeStatLevelValue >= color_index ? `<div class="z-40 float-left h-2.5 rounded-md bg-amber-600" style="${"width: " + escape(getStatPointWidth(), true) + "px"}"></div>` : `${maxInitiativeStatLevelValue >= color_index ? `<div class="z-40 float-left h-2.5 rounded-md bg-amber-800" style="${"width: " + escape(getStatPointWidth(), true) + "px"}"></div>` : `<div class="float-left h-1 bg-transparent" style="${"width: " + escape(getStatPointWidth(), true) + "px"}"></div>`}`}`;
    })}</div></div></div> <div class="col-span-1 h-7 z-20 relative"><div class="h-5 border border-dark-600 bg-transparent hover:bg-transparent rounded-xl bg-dark-900 absolute"><div class="m-1 relative h-full">${validate_component(Img, "Img").$$render(
      $$result,
      {
        src: statImages.get("movement"),
        class: "absolute w-5 z-30 -top-1.25"
      },
      {},
      {}
    )} <div class="float-left w-4.5 h-full bg-transparent"></div> ${each(Array(8), (_, color_index) => {
      return `<div class="float-left w-1 h-1"></div> ${minMovementStatLevelValue >= color_index ? `<div class="z-40 float-left h-2.5 rounded-md bg-amber-600" style="${"width: " + escape(getStatPointWidth(), true) + "px"}"></div>` : `${maxMovementStatLevelValue >= color_index ? `<div class="z-40 float-left h-2.5 rounded-md bg-amber-800" style="${"width: " + escape(getStatPointWidth(), true) + "px"}"></div>` : `<div class="float-left h-1 bg-transparent" style="${"width: " + escape(getStatPointWidth(), true) + "px"}"></div>`}`}`;
    })}</div></div></div></div> <div class="grid grid-cols-6 gap-3 lg:gap-6 max-w-md mt-4"><div class="col-span-6">${validate_component(Label, "Label").$$render($$result, { style: "color: white" }, {}, {
      default: () => {
        return `Name
              ${validate_component(Input, "Input").$$render(
          $$result,
          {
            type: "text",
            class: "bg-dark-800 border-dark-600 text-white disabled:bg-dark-900",
            value: name
          },
          {
            value: ($$value) => {
              name = $$value;
              $$settled = false;
            }
          },
          {}
        )}`;
      }
    })}</div> <div class="col-span-6">${validate_component(Label, "Label").$$render($$result, { style: "color: white" }, {}, {
      default: () => {
        return `Description
              ${validate_component(Textarea, "Textarea").$$render(
          $$result,
          Object.assign(
            {},
            descriptionProps,
            {
              class: "bg-dark-800 border-dark-600 text-white disabled:bg-dark-900"
            },
            { value: description }
          ),
          {
            value: ($$value) => {
              description = $$value;
              $$settled = false;
            }
          },
          {}
        )}`;
      }
    })}</div> <div class="col-span-4">${validate_component(Label, "Label").$$render(
      $$result,
      {
        style: "color: " + labelColor(disableItem)
      },
      {},
      {
        default: () => {
          return `Item
              ${validate_component(Select, "Select").$$render(
            $$result,
            {
              items,
              class: "bg-dark-800 border-dark-600 disabled:border-dark-700 text-white disabled:text-dark-500 disabled:bg-dark-900",
              disabled: disableItem,
              value: item
            },
            {
              value: ($$value) => {
                item = $$value;
                $$settled = false;
              }
            },
            {}
          )}`;
        }
      }
    )}</div> <div class="col-span-2 flex"><div class="m-auto">${validate_component(Checkbox, "Checkbox").$$render(
      $$result,
      {
        disabled: disableHandicap,
        checked: handicap
      },
      {
        checked: ($$value) => {
          handicap = $$value;
          $$settled = false;
        }
      },
      {
        default: () => {
          return `<div style="${"color: " + escape(labelColor(disableHandicap), true)}">Handicap</div>`;
        }
      }
    )}</div></div> <div class="col-span-6">${validate_component(Label, "Label").$$render(
      $$result,
      {
        style: "color: " + labelColor(disableInitiative)
      },
      {},
      {
        default: () => {
          return `Initiative
              ${validate_component(Input, "Input").$$render(
            $$result,
            {
              type: "text",
              class: "bg-dark-800 border-dark-600 text-white disabled:text-dark-500 disabled:bg-dark-900",
              disabled: disableInitiative,
              value: initiativeField
            },
            {
              value: ($$value) => {
                initiativeField = $$value;
                $$settled = false;
              }
            },
            {}
          )}`;
        }
      }
    )}</div> <div class="col-span-2">${validate_component(Label, "Label").$$render(
      $$result,
      {
        style: "color: " + labelColor(disablePrimaryActionType)
      },
      {},
      {
        default: () => {
          return `Action
              ${validate_component(Select, "Select").$$render(
            $$result,
            {
              items: actionTypes,
              class: "bg-dark-800 border-dark-600 disabled:border-dark-700 text-white disabled:text-dark-500 disabled:bg-dark-900",
              disabled: disablePrimaryActionType,
              value: primaryActionType
            },
            {
              value: ($$value) => {
                primaryActionType = $$value;
                $$settled = false;
              }
            },
            {}
          )}`;
        }
      }
    )}</div> <div class="col-span-2">${validate_component(Label, "Label").$$render(
      $$result,
      {
        style: "color: " + labelColor(disablePrimaryActionValue)
      },
      {},
      {
        default: () => {
          return `Action value
              ${validate_component(Input, "Input").$$render(
            $$result,
            {
              type: "text",
              class: "bg-dark-800 border-dark-600 text-white disabled:text-dark-500 disabled:bg-dark-900",
              disabled: disablePrimaryActionValue,
              value: primaryActionValueField
            },
            {
              value: ($$value) => {
                primaryActionValueField = $$value;
                $$settled = false;
              }
            },
            {}
          )}`;
        }
      }
    )}</div> <div class="col-span-2">${validate_component(Label, "Label").$$render(
      $$result,
      {
        style: "color: " + labelColor(disableValueSign)
      },
      {},
      {
        default: () => {
          return `Action sign
              ${validate_component(Select, "Select").$$render(
            $$result,
            {
              items: valueSigns,
              class: "bg-dark-800 border-dark-600 disabled:border-dark-700 text-white disabled:text-dark-500 disabled:bg-dark-900",
              disabled: disableValueSign,
              value: primaryActionValueSign
            },
            {
              value: ($$value) => {
                primaryActionValueSign = $$value;
                $$settled = false;
              }
            },
            {}
          )}`;
        }
      }
    )}</div> <div class="col-span-2">${validate_component(Label, "Label").$$render($$result, { style: "color: white" }, {}, {
      default: () => {
        return `Modifier
              ${validate_component(Select, "Select").$$render(
          $$result,
          {
            items: modifiers,
            class: "bg-dark-800 border-dark-600 text-white disabled:bg-dark-900",
            value: modifier
          },
          {
            value: ($$value) => {
              modifier = $$value;
              $$settled = false;
            }
          },
          {}
        )}`;
      }
    })}</div> <div class="col-span-2">${validate_component(Label, "Label").$$render(
      $$result,
      {
        style: "color: " + labelColor(disableModifierValue)
      },
      {},
      {
        default: () => {
          return `Modifier value
              ${validate_component(Input, "Input").$$render(
            $$result,
            {
              type: "text",
              class: "bg-dark-800 border-dark-600 text-white disabled:text-dark-500 disabled:bg-dark-900",
              disabled: disableModifierValue,
              value: modifierValueField
            },
            {
              value: ($$value) => {
                modifierValueField = $$value;
                $$settled = false;
              }
            },
            {}
          )}`;
        }
      }
    )}</div> <div class="col-span-2">${validate_component(Label, "Label").$$render(
      $$result,
      {
        style: "color: " + labelColor(disableModifierValueSign)
      },
      {},
      {
        default: () => {
          return `Modifier sign
              ${validate_component(Select, "Select").$$render(
            $$result,
            {
              items: modifierValueSigns,
              class: "bg-dark-800 border-dark-600 disabled:border-dark-700 text-white disabled:text-dark-500 disabled:bg-dark-900",
              disabled: disableModifierValueSign,
              value: modifierValueSign
            },
            {
              value: ($$value) => {
                modifierValueSign = $$value;
                $$settled = false;
              }
            },
            {}
          )}`;
        }
      }
    )}</div> <div class="col-span-3">${validate_component(Label, "Label").$$render(
      $$result,
      {
        style: "color: " + labelColor(disableSecondaryDefenseValue)
      },
      {},
      {
        default: () => {
          return `Defense value
              ${validate_component(Input, "Input").$$render(
            $$result,
            {
              type: "text",
              class: "bg-dark-800 border-dark-600 text-white disabled:text-dark-500 disabled:bg-dark-900",
              disabled: disableSecondaryDefenseValue,
              value: secondaryDefenseValueField
            },
            {
              value: ($$value) => {
                secondaryDefenseValueField = $$value;
                $$settled = false;
              }
            },
            {}
          )}`;
        }
      }
    )}</div> <div class="col-span-3">${validate_component(Label, "Label").$$render(
      $$result,
      {
        style: "color: " + labelColor(disableSecondaryMovementValue)
      },
      {},
      {
        default: () => {
          return `Movement value
              ${validate_component(Input, "Input").$$render(
            $$result,
            {
              type: "text",
              class: "bg-dark-800 border-dark-600 text-white disabled:text-dark-500 disabled:bg-dark-900",
              disabled: disableSecondaryMovementValue,
              value: secondaryMovementValueField
            },
            {
              value: ($$value) => {
                secondaryMovementValueField = $$value;
                $$settled = false;
              }
            },
            {}
          )}`;
        }
      }
    )}</div> <div class="col-span-6">${validate_component(Label, "Label").$$render($$result, { style: "color: white" }, {}, {
      default: () => {
        return `Background (1192×1664)
              ${validate_component(Fileupload, "Fileupload").$$render(
          $$result,
          {
            class: "bg-dark-800 border-dark-600 text-white"
          },
          {},
          {}
        )}`;
      }
    })}</div> ${validate_component(Label, "Label").$$render(
      $$result,
      {
        class: "col-span-6",
        style: "color: white"
      },
      {},
      {
        default: () => {
          return `Custom emoji
            <div class="col-span-6 border border-dark-600 rounded-2xl p-3 grid grid-cols-3 gap-3 lg:gap-6">${each(customEmoji, (_, i) => {
            return `<div class="col-span-2">${validate_component(Input, "Input").$$render(
              $$result,
              {
                id: "customEmoji",
                type: "text",
                class: "bg-dark-800 border-dark-600 text-white",
                value: customEmoji[i][0]
              },
              {
                value: ($$value) => {
                  customEmoji[i][0] = $$value;
                  $$settled = false;
                }
              },
              {}
            )}</div> <div class="col-span-1">${validate_component(Fileupload, "Fileupload").$$render(
              $$result,
              {
                accept: "image/*",
                class: "bg-dark-800 border-dark-600 text-white"
              },
              {},
              {}
            )} </div>`;
          })} <div class="col-span-2">${validate_component(Input, "Input").$$render(
            $$result,
            {
              type: "text",
              class: "bg-dark-800 border-dark-600 text-white",
              value: tempCustomEmoji
            },
            {
              value: ($$value) => {
                tempCustomEmoji = $$value;
                $$settled = false;
              }
            },
            {}
          )}</div> <div class="col-span-1">${validate_component(Fileupload, "Fileupload").$$render(
            $$result,
            {
              accept: "image/*",
              class: "bg-dark-800 border-dark-600 text-white"
            },
            {},
            {}
          )}</div></div>`;
        }
      }
    )}</div></div> <div class="col-span-1 max-w-md pt-8 lg:pt-0 flex flex-col items-center justify-center"><div class="grid grid-cols-6 gap-1">${validate_component(Button, "Button").$$render(
      $$result,
      {
        class: "col-span-1 p-1 hover:bg-yellow-500 " + activeBorderGold
      },
      {},
      {
        default: () => {
          return `D`;
        }
      }
    )} ${validate_component(Button, "Button").$$render(
      $$result,
      {
        class: "col-span-1 p-1 hover:bg-blue-700 " + activeBorderBlueIa
      },
      {},
      {
        default: () => {
          return `B1`;
        }
      }
    )} ${validate_component(Button, "Button").$$render(
      $$result,
      {
        class: "col-span-1 p-1 hover:bg-blue-700 " + activeBorderBlueIIa
      },
      {},
      {
        default: () => {
          return `B2A`;
        }
      }
    )} ${validate_component(Button, "Button").$$render(
      $$result,
      {
        class: "col-span-1 p-1 hover:bg-blue-700 " + activeBorderBlueIIb
      },
      {},
      {
        default: () => {
          return `B2B`;
        }
      }
    )} ${validate_component(Button, "Button").$$render(
      $$result,
      {
        class: "col-span-1 p-1 hover:bg-blue-700 " + activeBorderBlueIIIa
      },
      {},
      {
        default: () => {
          return `B3A`;
        }
      }
    )} ${validate_component(Button, "Button").$$render(
      $$result,
      {
        class: "col-span-1 p-1 hover:bg-blue-700 " + activeBorderBlueIIIb
      },
      {},
      {
        default: () => {
          return `B3B`;
        }
      }
    )} ${validate_component(Button, "Button").$$render(
      $$result,
      {
        class: "col-span-1 p-1 hover:bg-gray-600 " + activeBorderSilver
      },
      {},
      {
        default: () => {
          return `S`;
        }
      }
    )} ${validate_component(Button, "Button").$$render(
      $$result,
      {
        class: "col-span-1 p-1 hover:bg-red-700 " + activeBorderRedIa
      },
      {},
      {
        default: () => {
          return `R1`;
        }
      }
    )} ${validate_component(Button, "Button").$$render(
      $$result,
      {
        class: "col-span-1 p-1 hover:bg-red-700 " + activeBorderRedIIa
      },
      {},
      {
        default: () => {
          return `R2A`;
        }
      }
    )} ${validate_component(Button, "Button").$$render(
      $$result,
      {
        class: "col-span-1 p-1 hover:bg-red-700 " + activeBorderRedIIb
      },
      {},
      {
        default: () => {
          return `R2B`;
        }
      }
    )} ${validate_component(Button, "Button").$$render(
      $$result,
      {
        class: "col-span-1 p-1 hover:bg-red-700 " + activeBorderRedIIIa
      },
      {},
      {
        default: () => {
          return `R3A`;
        }
      }
    )} ${validate_component(Button, "Button").$$render(
      $$result,
      {
        class: "col-span-1 p-1 hover:bg-red-700 " + activeBorderRedIIIb
      },
      {},
      {
        default: () => {
          return `R3B`;
        }
      }
    )} ${validate_component(Button, "Button").$$render(
      $$result,
      {
        class: "col-span-1 p-1 hover:bg-purple-700 " + activeBorderPurple
      },
      {},
      {
        default: () => {
          return `P`;
        }
      }
    )} ${validate_component(Button, "Button").$$render(
      $$result,
      {
        class: "col-span-1 p-1 hover:bg-green-700 " + activeBorderGreenIa
      },
      {},
      {
        default: () => {
          return `G1`;
        }
      }
    )} ${validate_component(Button, "Button").$$render(
      $$result,
      {
        class: "col-span-1 p-1 hover:bg-green-700 " + activeBorderGreenIIa
      },
      {},
      {
        default: () => {
          return `G2A`;
        }
      }
    )} ${validate_component(Button, "Button").$$render(
      $$result,
      {
        class: "col-span-1 p-1 hover:bg-green-700 " + activeBorderGreenIIb
      },
      {},
      {
        default: () => {
          return `G2B`;
        }
      }
    )} ${validate_component(Button, "Button").$$render(
      $$result,
      {
        class: "col-span-1 p-1 hover:bg-green-700 " + activeBorderGreenIIIa
      },
      {},
      {
        default: () => {
          return `G3A`;
        }
      }
    )} ${validate_component(Button, "Button").$$render(
      $$result,
      {
        class: "col-span-1 p-1 hover:bg-green-700 " + activeBorderGreenIIIb
      },
      {},
      {
        default: () => {
          return `G3B`;
        }
      }
    )}</div> ${validate_component(Label, "Label").$$render(
      $$result,
      {
        class: "col-span-6 mt-4",
        style: "color: white"
      },
      {},
      {
        default: () => {
          return `Hero Stats
          <div class="grid grid-cols-4 gap-1 lg:gap-2 w-full border border-dark-600 rounded-2xl p-3"><div class="col-span-1">${validate_component(Label, "Label").$$render($$result, { style: "color: white" }, {}, {
            default: () => {
              return `Attack
                ${validate_component(Select, "Select").$$render(
                $$result,
                {
                  items: statValues,
                  class: "bg-dark-800 border-dark-600 text-white",
                  value: attackStat
                },
                {
                  value: ($$value) => {
                    attackStat = $$value;
                    $$settled = false;
                  }
                },
                {}
              )}`;
            }
          })}</div> <div class="col-span-1">${validate_component(Label, "Label").$$render($$result, { style: "color: white" }, {}, {
            default: () => {
              return `Defense
                ${validate_component(Select, "Select").$$render(
                $$result,
                {
                  items: statValues,
                  class: "bg-dark-800 border-dark-600 text-white",
                  value: defenseStat
                },
                {
                  value: ($$value) => {
                    defenseStat = $$value;
                    $$settled = false;
                  }
                },
                {}
              )}`;
            }
          })}</div> <div class="col-span-1">${validate_component(Label, "Label").$$render($$result, { style: "color: white" }, {}, {
            default: () => {
              return `Initiative
                ${validate_component(Select, "Select").$$render(
                $$result,
                {
                  items: statValues,
                  class: "bg-dark-800 border-dark-600 text-white",
                  value: initiativeStat
                },
                {
                  value: ($$value) => {
                    initiativeStat = $$value;
                    $$settled = false;
                  }
                },
                {}
              )}`;
            }
          })}</div> <div class="col-span-1">${validate_component(Label, "Label").$$render($$result, { style: "color: white" }, {}, {
            default: () => {
              return `Movement
                ${validate_component(Select, "Select").$$render(
                $$result,
                {
                  items: statValues,
                  class: "bg-dark-800 border-dark-600 text-white",
                  value: movementStat
                },
                {
                  value: ($$value) => {
                    movementStat = $$value;
                    $$settled = false;
                  }
                },
                {}
              )}`;
            }
          })}</div></div>`;
        }
      }
    )} <div class="w-full border border-dark-600 rounded-3xl mt-2 md:mt-4"><canvas width="1192" height="1664" class="w-full rounded-3xl"${add_attribute("this", canvas, 0)}></canvas></div> <div class="grid grid-cols-2 gap-4 mt-4 mb-4"><div class="col-span-1 flex justify-center">${validate_component(Button, "Button").$$render($$result, { class: "w-40" }, {}, {
      default: () => {
        return `Download Card`;
      }
    })}</div> <div class="col-span-1 flex justify-center">${validate_component(Button, "Button").$$render($$result, { class: "w-40" }, {}, {
      default: () => {
        return `Download Full Set`;
      }
    })}</div> <div class="col-span-1 flex justify-center">${validate_component(Button, "Button").$$render($$result, { class: "w-40" }, {}, {
      default: () => {
        return `Export into JSON`;
      }
    })}</div> <div class="col-span-1 flex justify-center">${validate_component(Button, "Button").$$render($$result, { class: "w-40" }, {}, {
      default: () => {
        return `Load from JSON`;
      }
    })} <input id="inputJson" class="absolute w-0" type="file"></div> <div class="col-span-1 flex justify-center">${validate_component(Button, "Button").$$render($$result, { class: "w-40" }, {}, {
      default: () => {
        return `Download for Print (Part 1)`;
      }
    })}</div> <div class="col-span-1 flex justify-center">${validate_component(Button, "Button").$$render($$result, { class: "w-40" }, {}, {
      default: () => {
        return `Download for Print (Part 2)`;
      }
    })}</div></div></div> ${validate_component(Label, "Label").$$render(
      $$result,
      {
        class: "col-span-2",
        style: "color: white"
      },
      {},
      {
        default: () => {
          return `Formatting rules
        <div class="max-w-md lg:max-w-4xl border border-dark-600 rounded-2xl p-3"><p class="text-white">${validate_component(Kbd, "Kbd").$$render(
            $$result,
            {
              class: "px-1 py-0 text-white bg-dark-700 border-dark-600"
            },
            {},
            {
              default: () => {
                return `**bold**`;
              }
            }
          )} - use this for important info
            such as time conditions
            <br> ${validate_component(Kbd, "Kbd").$$render(
            $$result,
            {
              class: "px-1 py-0 text-white bg-dark-700 border-dark-600"
            },
            {},
            {
              default: () => {
                return `~italic`;
              }
            }
          )} - use this for notes at the
            bottom (only works at the start of the line)
            <br> ${validate_component(Kbd, "Kbd").$$render(
            $$result,
            {
              class: "px-1 py-0 text-white bg-dark-700 border-dark-600"
            },
            {},
            {
              default: () => {
                return `&gt;&gt;List option`;
              }
            }
          )} - use this after &quot;Choose
            one:&quot; or similar conditions (only works at the start of the line)
            <br> ${validate_component(Kbd, "Kbd").$$render(
            $$result,
            {
              class: "px-1 py-0 text-white bg-dark-700 border-dark-600"
            },
            {},
            {
              default: () => {
                return `&gt;option continuation`;
              }
            }
          )} - use this after a
            &gt;&gt;List option to avoid creating an extra bullet (only works at the start of the line)
            <br> ${validate_component(Kbd, "Kbd").$$render(
            $$result,
            {
              class: "px-1 py-0 text-white bg-dark-700 border-dark-600"
            },
            {},
            {
              default: () => {
                return `---`;
              }
            }
          )} - horizontal line - use this to
            split options where no choice is provided (only works at the start of the line)
            <br> ${validate_component(Kbd, "Kbd").$$render(
            $$result,
            {
              class: "px-1 py-0 text-white bg-dark-700 border-dark-600"
            },
            {},
            {
              default: () => {
                return `::emoji_name::`;
              }
            }
          )} - insert an emoji (add
            custom emoji via the form above or use default ones listed below)</p></div>`;
        }
      }
    )} ${validate_component(Label, "Label").$$render(
      $$result,
      {
        class: "col-span-2",
        style: "color: white"
      },
      {},
      {
        default: () => {
          return `Default emoji
        <div class="max-w-md lg:max-w-4xl border border-dark-600 rounded-2xl p-3"><p class="text-white text-center">${each(defaultEmoji, (emoji) => {
            return `${validate_component(Kbd, "Kbd").$$render(
              $$result,
              {
                class: "px-1 py-0 text-white bg-dark-700 border-dark-600"
              },
              {},
              {
                default: () => {
                  return `::${escape(emoji)}::`;
                }
              }
            )} <wbr>`;
          })}</p></div>`;
        }
      }
    )} ${validate_component(Label, "Label").$$render(
      $$result,
      {
        class: "col-span-2",
        style: "color: white"
      },
      {},
      {
        default: () => {
          return `Guidelines
        <div class="max-w-md lg:max-w-4xl border border-dark-600 rounded-2xl p-3 mb-3">${validate_component(Label, "Label").$$render($$result, { style: "color: white" }, {}, {
            default: () => {
              return `General recommendations <a class="text-primary-500" target="_blank" rel="noopener noreferrer" href="https://docs.google.com/spreadsheets/d/1VdgZRXgKdgy0lmWf3k3qkzda1GCQalQY51u7NGNAuYc/edit?usp=sharing" data-svelte-h="svelte-yylaoa">[source]</a> <div class="max-w-full border border-dark-600 rounded-2xl p-3 mb-3">${validate_component(List, "List").$$render($$result, { tag: "ul", class: "space-y-2 text-white" }, {}, {
                default: () => {
                  return `${validate_component(Li, "Li").$$render($$result, {}, {}, {
                    default: () => {
                      return `Keep it simple. While it&#39;s tempting to fit a bunch of concepts into a character, this rarely flies
                  without some practice. Start small and build up.`;
                    }
                  })} ${validate_component(Li, "Li").$$render($$result, {}, {}, {
                    default: () => {
                      return `The perfect challenge for your first character would be to design a complexity 1 hero.`;
                    }
                  })} ${validate_component(Li, "Li").$$render($$result, {}, {}, {
                    default: () => {
                      return `Break the rules when there is a strong reason to break the rules. Don&#39;t break the rules purely in
                  pursuit of making as unique mechanism as possible. It needs to be coherent with the rest of the game.`;
                    }
                  })} ${validate_component(Li, "Li").$$render($$result, {}, {}, {
                    default: () => {
                      return `Try to minimize overlaps. Check if similar effects already exist in the game and avoid copying them
                  1:1. This is especially true for gold and silver effects.`;
                    }
                  })} ${validate_component(Li, "Li").$$render($$result, {}, {}, {
                    default: () => {
                      return `Find the theme. Every card should resonate with the rest. Both mechanism-wise and theme-wise.`;
                    }
                  })} ${validate_component(Li, "Li").$$render($$result, {}, {}, {
                    default: () => {
                      return `Know how well your character is at each of the 4 roles (Brawler/Initiator/Pusher/Support etc.) and
                  design cards that support that vision.`;
                    }
                  })} ${validate_component(Li, "Li").$$render($$result, {}, {}, {
                    default: () => {
                      return `It should be possible to build a character to perform several different roles but not all of them,
                  nor be locked in just one.`;
                    }
                  })} ${validate_component(Li, "Li").$$render($$result, {}, {}, {
                    default: () => {
                      return `Try to not make the two branches in the same slot too similar. Otherwise the hero will feel
                  one-dimensional.`;
                    }
                  })} ${validate_component(Li, "Li").$$render($$result, {}, {}, {
                    default: () => {
                      return `Keep wording as short as possible. Character should not have 3 lines of text on every card. If you
                  have several cards with lots of text, balance it with the others that don&#39;t. Ideally on the same
                  color/tier slot.`;
                    }
                  })} ${validate_component(Li, "Li").$$render($$result, {}, {}, {
                    default: () => {
                      return `Minimize the use of tokens and markers.`;
                    }
                  })} ${validate_component(Li, "Li").$$render($$result, {}, {}, {
                    default: () => {
                      return `Miniminze the use of pure defense cards.`;
                    }
                  })} ${validate_component(Li, "Li").$$render($$result, {}, {}, {
                    default: () => {
                      return `Do not overload the character with active effects.`;
                    }
                  })}`;
                }
              })}</div>`;
            }
          })} ${validate_component(Label, "Label").$$render($$result, { style: "color: white" }, {}, {
            default: () => {
              return `Balancing rules and restrictions <a class="text-primary-500" target="_blank" rel="noopener noreferrer" href="https://docs.google.com/spreadsheets/d/1VdgZRXgKdgy0lmWf3k3qkzda1GCQalQY51u7NGNAuYc/edit?usp=sharing" data-svelte-h="svelte-xl88wg">[source]</a> <div class="max-w-full border border-dark-600 rounded-2xl p-3 mb-3">${validate_component(List, "List").$$render($$result, { tag: "ul", class: "space-y-2 text-white" }, {}, {
                default: () => {
                  return `${validate_component(Li, "Li").$$render($$result, {}, {}, {
                    default: () => {
                      return `Primary restriction - no character should be able to defeat 2 minions on round 1 on their own (this
                  does not include major screw-ups or multi-character combos).`;
                    }
                  })} ${validate_component(Li, "Li").$$render($$result, {}, {}, {
                    default: () => {
                      return `No double attacks directed at minions until Tier III.`;
                    }
                  })} ${validate_component(Li, "Li").$$render($$result, {}, {}, {
                    default: () => {
                      return `Default range for a gold ranged attack is 1. Range 2 requires it to be situational, or both reds to
                  be melee. Range 3 requires it to have severe restriction.`;
                    }
                  })} ${validate_component(Li, "Li").$$render($$result, {}, {}, {
                    default: () => {
                      return `No true stuns (complete skip turns effects or equivalents)`;
                    }
                  })} ${validate_component(Li, "Li").$$render($$result, {}, {}, {
                    default: () => {
                      return `Maximum possible coin gain at Tier II = 6 and at Tier III = 8. Average gold income should be around
                  3 coins per round.`;
                    }
                  })} ${validate_component(Li, "Li").$$render($$result, {}, {}, {
                    default: () => {
                      return `Maximum possible coin gain at Round 1 = 2. (without other hero&#39;s assistance).`;
                    }
                  })} ${validate_component(Li, "Li").$$render($$result, {}, {}, {
                    default: () => {
                      return `Potential minimum coin income at Tier I is 4`;
                    }
                  })} ${validate_component(Li, "Li").$$render($$result, {}, {}, {
                    default: () => {
                      return `Card text must fit into the existing text box with existing text font and size.`;
                    }
                  })} ${validate_component(Li, "Li").$$render($$result, {}, {}, {
                    default: () => {
                      return `Silver, Gold, Ultimate and Tier I cards can fit 8 lines of text max. All other cards - 7 lines of
                  text max. These are lines of text, not full sentences. If you are afraid that your wording is too long
                  - it probably is.`;
                    }
                  })}`;
                }
              })}</div>`;
            }
          })} ${validate_component(Label, "Label").$$render($$result, { style: "color: white" }, {}, {
            default: () => {
              return `Card overview
            <div class="max-w-full border border-dark-600 rounded-2xl p-3">${validate_component(List, "List").$$render($$result, { tag: "ul", class: "space-y-2 text-white" }, {}, {
                default: () => {
                  return `${validate_component(Li, "Li").$$render($$result, {}, {}, {
                    default: () => {
                      return `Defense, initiative and movement values of each hero in GoA II depend on their
                  <a class="text-primary-500" target="_blank" rel="noopener noreferrer" href="https://docs.google.com/spreadsheets/d/1Mvm7YbZ3r5HyocOt3h4iypdrSohEAaa6Omc_WXoBSJc/edit?usp=sharing" data-svelte-h="svelte-41ik9">corresponding
                    stats</a>.
                  Two heroes with the same movement stat will <i data-svelte-h="svelte-rdzcrx">generally</i> have the same movement on all of their
                  respective cards.`;
                    }
                  })} ${validate_component(Li, "Li").$$render($$result, {}, {}, {
                    default: () => {
                      return `Gold card -
                  Highest initiative,
                  lowest defense,
                  lowest movement,
                  a low-damage attack with a twist or (for some higher-complexity heroes) a skill that provides an
                  option to discard a card or defeat a minion.
                  The Gold card is usually used to land a hit before the enemy can escape, or dodge such a hit.
                  The Gold card doesn&#39;t receive any direct upgrades throughout the game and doesn&#39;t have an alternative.
                  It is your hero&#39;s signature attack.`;
                    }
                  })} ${validate_component(Li, "Li").$$render($$result, {}, {}, {
                    default: () => {
                      return `Silver card -
                  Any initiative,
                  low defense,
                  no movement,
                  a skill or (for some higher-complexity heroes) a defense/skill that can do a lot in some situations
                  and nothing in others, due to its conditional nature and no secondary movement.
                  Movement is sometimes present in some form but is always conditional.
                  The Silver cards almost always require some setup in order to bring any value, but when this happens,
                  they
                  can change the situation drastically.
                  The Silver card doesn&#39;t receive any direct upgrades throughout the game and doesn&#39;t have an
                  alternative.
                  It is you hero&#39;s signature skill.`;
                    }
                  })} ${validate_component(Li, "Li").$$render($$result, {}, {}, {
                    default: () => {
                      return `Blue card -
                  High initiative,
                  high defense,
                  high movement,
                  a skill, a movement, or a defense.
                  The Blue card is often used for movement, be it evading the red attack or just a reposition.
                  It can also restrict enemies&#39; actions, discard a card, place tokens or apply an effect.`;
                    }
                  })} ${validate_component(Li, "Li").$$render($$result, {}, {}, {
                    default: () => {
                      return `Red card -
                  Medium initiative,
                  highest defense,
                  highest movement,
                  a high-damage attack, the main way to strike through enemies&#39; defenses.
                  The easier it is to land a hit with an attack the weaker the damage is. Extra range is usually
                  compensated by lower defense value.`;
                    }
                  })} ${validate_component(Li, "Li").$$render($$result, {}, {}, {
                    default: () => {
                      return `Green card -
                  Lowest initiative,
                  medium defense or a block,
                  medium movement,
                  a skill, a movement, or a block that acts as a control tool, due to its low initiative, allowing you
                  to react to the situation: run away from a potential attack, set up an attack, heal or prepare for the
                  next turn in other ways.`;
                    }
                  })} ${validate_component(Li, "Li").$$render($$result, {}, {}, {
                    default: () => {
                      return `Initiative, attack and defense on blue, red and green cards increases by 1 either on level II or on
                  level III (same level for both variants).`;
                    }
                  })}`;
                }
              })}</div>`;
            }
          })}</div>`;
        }
      }
    )}</div></div> <p class="absolute font-modesto svelte-1i1hmvt"></p> </div>`;
  } while (!$$settled);
  return $$rendered;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${$$result.head += `<!-- HEAD_svelte-xq9rrc_START -->${$$result.title = `<title>Card Builder</title>`, ""}<meta name="description" content="Guards of Atlantis II card builder."><!-- HEAD_svelte-xq9rrc_END -->`, ""} ${validate_component(CardBuilder, "CardBuilder").$$render($$result, {}, {}, {})}`;
});
export {
  Page as default
};
