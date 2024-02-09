/** @type {import('tailwindcss').Config} */
module.exports = {
   content: ["./src/**/*.{js,ts,jsx,tsx}"],
   theme: {
      extend: {
         spacing: {
            15: "3.75rem",
         },
         fontFamily: {
            nexusbold: ["Nexusbold", "serif"],
         },
         colors: {
            primary: "#171417",
            main: {
               primary: "#161b21",
               gray: "#44403C",
               orange: "#c2410c",
               gold: "#ca8a04",
               white: "#e5e7eb",
            },
         },
      },
   },
   plugins: [],
};
