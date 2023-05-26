/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans - serif"],
      },
      colors: {
        customColor: "rgb(16, 25, 45)",
        customColor2: "rgb(30, 41, 59)",
      },
      width: {
        customWidth: "80%",
      },
    },
  },
  plugins: [],
};
