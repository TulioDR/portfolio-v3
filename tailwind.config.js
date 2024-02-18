/** @type {import('tailwindcss').Config} */
module.exports = {
   content: ["./src/**/*.{js,ts,jsx,tsx}"],
   theme: {
      extend: {
         spacing: {
            15: "3.75rem",
            30: "7.5rem",
            35: "8.75rem",
         },
         fontFamily: {
            nexusbold: ["Nexusbold", "serif"],
            "roboto-mono": ["Roboto Mono", "sans-serif"],
            monserrat: ["Monserrat", "sans-serif"],
         },
         colors: {
            primary: "#171417",
            secondary: "#141B25",
            accent: "#EA580C",
            main: {
               gray: "#44403C",
               gold: "#ca8a04",
               white: "#e5e7eb",
            },
         },
      },
   },
   plugins: [],
};
