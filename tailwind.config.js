/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    fontFamily: {
      ginto: ["'Ginto-Nord'", "sans-serif"],
      ggsans: ["'ggsans'", "sans-serif"],
    },
    animation: {
      slide: "trasform 1s ease-in-out",
    },
    plugins: [],
  },
};
