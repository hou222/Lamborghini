/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    screens: {
      ss: "500px",
      sm: "600px",
      md: "768px",
      ll: "980px",
      lg: "1024px",
      xl: "1365px",
    },
  },
  plugins: [],
};
