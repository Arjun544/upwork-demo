const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      // Insert the custom font families at the beginning of the array
      fontFamily: {
        sans: ["Montserrat", ...defaultTheme.fontFamily.sans],
      },
      screens: {
        laptop: { raw: "(max-height: 1234px)" },
        // => @media (max-height: 1234px) { ... }
      },
      backgroundImage: {
        "hero-pattern": "url('background.png')",
      },
    },
  },
  plugins: [],
};
