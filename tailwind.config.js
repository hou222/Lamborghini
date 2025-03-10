/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "hexa-black": "url('/src/assets/rightBigBlack.png')",
        "hexa-white": "url('/src/assets/rightBigWhite.png')",
        "lambo-1": "url('/src/assets/Lambo1.jpg')",
      },
      content: {
        temerario: "url('/src/assets/TEMERARIO.png')",
      },
    },
    screens: {
      ss: "500px",
      sm: "600px",
      md: "768px",
      ll: "980px",
      lg: "1024px",
      xl: "1365px",
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        ".h-screen-minus-90": {
          height: "calc(100vh - 90px)",
        },
      });
    },
  ],
};
