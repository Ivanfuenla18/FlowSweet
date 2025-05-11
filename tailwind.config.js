/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        greeen: "#84B409",
      },
      fontFamily: {
        fuen: ["'Playfair Display'", "serif"],
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        ".underline-hover": {
          position: "relative",
        },
        ".underline-hover::after": {
          content: "''",
          position: "absolute",
          bottom: "0",
          left: "0",
          width: "0%",
          height: "2px",
          backgroundColor: "currentColor",
          transition: "width 0.3s ease-in-out",
        },
        ".underline-hover:hover::after": {
          width: "100%",
        },
      });
    },
  ],
};
