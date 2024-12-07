/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Scan all files in the `src` directory
  ],
  theme: {
    extend: {
      colors: {
        primary: "#4A90E2", 
        secondary: "#f4f5f7", 
        accent: "#f56b2a", 
      },
      fontFamily: {
        sans: ["Inter", "Arial", "sans-serif"],
      },
      animation: {
        fadeIn: "fadeIn 0.5s ease-in-out",
        slideDown: "slideDown 0.5s ease-in-out",
        popIn: "popIn 0.3s ease-out",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
        slideDown: {
          "0%": { transform: "translateY(-10px)", opacity: 0 },
          "100%": { transform: "translateY(0)", opacity: 1 },
        },
        popIn: {
          "0%": { transform: "scale(0.9)", opacity: 0 },
          "100%": { transform: "scale(1)", opacity: 1 },
        },
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
