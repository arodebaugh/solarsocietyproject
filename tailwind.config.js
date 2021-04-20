module.exports = {
  mode: "jit",
  purge: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        "drexel-blue": "#07294d",
        "drexel-yellow": "#f7c746",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
