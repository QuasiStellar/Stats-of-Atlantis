import { c as create_ssr_component, v as validate_component } from "../../chunks/ssr.js";
import { C as Card } from "../../chunks/Card.js";
import { I as Img } from "../../chunks/Img.js";
const errorImage = "/_app/immutable/assets/error.f9752b0b.png";
const Error = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div class="flex items-center justify-center flex-col min-h-screen"><div class="md:h-20 h-16"></div> ${validate_component(Card, "Card").$$render(
    $$result,
    {
      href: "/",
      padding: "none",
      class: "border-dark-600 bg-transparent hover:bg-transparent rounded-3xl"
    },
    {},
    {
      default: () => {
        return `${validate_component(Img, "Img").$$render(
          $$result,
          {
            src: errorImage,
            class: "max-w-sm md:max-w-md rounded-3xl"
          },
          {},
          {}
        )}`;
      }
    }
  )}</div>`;
});
export {
  Error as default
};
