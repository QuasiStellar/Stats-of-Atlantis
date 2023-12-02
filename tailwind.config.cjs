/** @type {import("tailwindcss").Config}*/
const config = {
  content: ["./src/**/*.{html,js,svelte,ts}", "./node_modules/flowbite-svelte/**/*.{html,js,svelte,ts}"],

  safelist: [
    {
      pattern: /top-.+/
    },
    {
      pattern: /bg-.+/
    }
  ],

  plugins: [require("flowbite/plugin")],

  darkMode: "class",

  theme: {
    extend: {
      colors: {
        primary: {
          "50": "#fffbeb",
          "100": "#fef3c7",
          "200": "#fde68a",
          "300": "#fcd34d",
          "400": "#fbbf24",
          "500": "#f59e0b",
          "600": "#d97706",
          "700": "#b45309",
          "800": "#92400e",
          "900": "#78350f"
        },
        dark: {
          "50": "#f9fafb",
          "100": "#f3f4f6",
          "200": "#e5e7eb",
          "300": "#d1d5db",
          "400": "#9ca3af",
          "500": "#6b7280",
          "600": "#4b5563",
          "700": "#374151",
          "800": "#1f2937",
          "900": "#111827"
        },
        bain: "#BD56A5",
        brogan: "#E6A839",
        cutter: "#68C8C7",
        misa: "#F96935",
        nebkher: "#76D6EE",
        silverarrow: "#66CAC8",
        tali: "#69C4F1",
        trinkets: "#479CD5",
        ursafar: "#8AD14F",
        wasp: "#6FC9EE",
      },
      saturate: {
        25: ".25",
        75: ".75"
      },
      spacing: {
        1.25: "5px",
        13: "3.25rem",
        15: "3.75rem",
        18: "4.5rem",
        19: "4.75rem",
        22: "5.5rem",
        23: "5.75rem",
        26: "6.5rem",
        30: "7.5rem",
        31: "7.75rem",
        34: "8.5rem",
        38: "9.5rem",
        46: "11.5rem",
        49: "12.25rem",
        50: "12.5rem",
        76: "19rem",
        78: "19.5rem",
        111: "27.75rem",
        112: "28rem",
        124: "31rem",
        156: "39rem",
      },
    },
  }
};

module.exports = config;
