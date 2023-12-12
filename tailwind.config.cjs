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
        arien: "#55C9FA",
        bain: "#BD56A5",
        brogan: "#E6A839",
        cutter: "#68C8C7",
        dodger: "#FF1E2C",
        garrus: "#89CA54",
        hanu: "#6CCCBE",
        ignatia: "#FF9B3F",
        min: "#FE7F20",
        misa: "#F96935",
        nebkher: "#76D6EE",
        sabina: "#6FD6FF",
        silverarrow: "#66CAC8",
        swift: "#F3F436",
        tali: "#69C4F1",
        tigerclaw: "#EB2441",
        trinkets: "#479CD5",
        ursafar: "#8AD14F",
        wasp: "#6FC9EE",
        whisper: "#DD1B23",
        wuk: "#93C64D",
        xargatha: "#BBD832",
      },
      saturate: {
        25: ".25",
        75: ".75",
      },
      spacing: {
        0.25: "1px",
        0.75: "3px",
        1.25: "5px",
        3.75: "15px",
        4.5: "1.125rem",
        5.5: "1.375rem",
        7.5: "1.875rem",
        13: "3.25rem",
        15: "3.75rem",
        18: "4.5rem",
        19: "4.75rem",
        22: "5.5rem",
        22.5: "5.625rem",
        23: "5.75rem",
        25.5: "6.375rem",
        26: "6.5rem",
        30: "7.5rem",
        31: "7.75rem",
        34: "8.5rem",
        35: "8.75rem",
        38: "9.5rem",
        41: "10.25rem",
        42: "10.5rem",
        46: "11.5rem",
        49: "12.25rem",
        50: "12.5rem",
        50.5: "12.625rem",
        51: "12.75rem",
        51.5: "12.875rem",
        59: "14.75rem",
        73: "18.25rem",
        75: "18.75rem",
        76: "19rem",
        77.5: "19.375rem",
        78: "19.5rem",
        81: "20.25rem",
        82: "20.5rem",
        83: "20.75rem",
        94: "23.5rem",
        94.5: "23.625rem",
        95: "23.75rem",
        95.5: "23.875rem",
        111: "27.75rem",
        112: "28rem",
        124: "31rem",
        125: "31.25rem",
        156: "39rem",
        157: "39.25rem",
        158: "39.5rem",
        159: "39.75rem",
        160: "40rem",
        237: "59.25rem",
        239: "59.75rem",
      },
      screens: {
        'xs': '400px',
      },
    },
  }
};

module.exports = config;
