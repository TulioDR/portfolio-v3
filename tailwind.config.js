/** @type {import('tailwindcss').Config} */
module.exports = {
   content: ["./src/**/*.{js,ts,jsx,tsx}"],
   theme: {
      extend: {
         colors: {
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
