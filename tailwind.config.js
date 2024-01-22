/** @type {import('tailwindcss').Config} */

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx,html}"],
  // content: ['./src/**/*.{js,jsx,ts,tsx,html}', './node_modules/tw-elements/dist/js/**/*.js'],
  corePlugins: { preflight: false },
  theme: {
    // screens: {
    //   xs: "440px",
    //   sm: "640px",
    //   // => @media (min-width: 640px) { ... }

    //   md: "768px",
    //   // => @media (min-width: 768px) { ... }

    //   lg: "1024px",
    //   // => @media (min-width: 1024px) { ... }

    //   xl: "1280px",
    //   // => @media (min-width: 1280px) { ... }

    //   "2xl": "1536px",
    //   // => @media (min-width: 1536px) { ... }
    // },
    extend: {
      colors: {
        eventblue: "#3C8BC7",
        eventblue2: "#33689C",
        // defblue: '#4993E0',
      },
      backgroundImage: {
        // bannerbg: "url('./assets/images/background/bannerbg.png')",
        // bannerbg2: "url('./assets/images/background/bannerbg2.png')",
        // bannerbg3: "url('./assets/images/background/bannerbg3.png')",
      },
    },
    // screens: {
    // 	xs: "440px",
    // },
  },
  plugins: [],
};
