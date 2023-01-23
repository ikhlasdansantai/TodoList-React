/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      padding: {
        standart: ".5rem 1.5rem",
        card: "1rem 0 1rem 1.5rem",
      },
    },
  },
  plugins: [],
};
