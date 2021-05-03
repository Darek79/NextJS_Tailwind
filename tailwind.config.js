module.exports = {
  purge: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      screens: {
        sm: {min: "360px", max: "600px"},
        md: {min: "600px", max: "1224px"},
        xl: "1224px",
      },
      gridTemplateRows: {
        layout: "auto 1fr auto",
      },
      gridTemplateColumns: {
        xl: "repeat(10,1fr)",
        md: "repeat(6,1fr)",
        sm: "1fr",
      },
      backgroundImage: (theme) => ({
        logo: "url('/logo.png')",
      }),
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
