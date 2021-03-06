module.exports = {
  // mode: "jit",
  purge: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      Roboto: ["Roboto", "sans-serif"],
      Rajdhani: ["Rajdhani", "serif"],
      Mansalva: ["Mansalva", "cursive"],
    },

    extend: {
      screens: {
        sm: {min: "360px", max: "740px"},
        md: {min: "600px", max: "980px"},
        xl: "981px",
      },
      gridTemplateRows: {
        layout: "auto 1fr auto",
        splitter: "24rem",
      },
      gridTemplateColumns: {
        default: "auto 1fr auto",
        xl: "50px 1fr 50px",
        md: "repeat(6,1fr)",
        sm: "10px 1fr 10px",
        xlcont: "repeat(4,1fr)",
        mdcont: "repeat(2,1fr)",
        smcont: "repeat(1,1fr)",
        aside: "10px 1fr 10px",
      },
      backgroundImage: (theme) => ({
        logo: "url('/logo.png')",
      }),
      backgroundColor: (theme) => ({
        gold: "#ff9500",
        pink: "#ff0a54",
        red: "#e5383b",
        list: "#CFD8DC",
      }),
      borderColor: (theme) => ({
        gold: "#ff9500",
        pink: "#ff0a54",
        red: "#e5383b",
        list: "#CFD8DC",
      }),
      colors: {
        gold: "#ff9500",
        pink: "#ff0a54",
        red: "#e5383b",
        list: "#CFD8DC",
      },
      spacing: {
        lg: "32rem",
        xl: "36rem",
        row: "40rem",
        h75: "75vh",
      },
      maxHeight: {h75: "75vh"},
      zIndex: {
        ten: "-10",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
