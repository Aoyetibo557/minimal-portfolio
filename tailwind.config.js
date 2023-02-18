/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      sans: ["Inter", "sans-serif"],
    },
    extend: {
      fontSize: {
        h1: "48px",
        h2: "40px",
        h3: "32px",
        "p-lg": "16px",
      },
      fontWeight: {
        medium: "500",
      },
      lineHeight: {
        140: "140%",
      },
      colors: {
        "minimal-red": "#E5453D",
        "minimal-black": "#0D1717",
        "light-black": "#292C2E",
        "minimal-blue": "#1E53AF",
        "minimal-white": "#FFFFFF",
        "light-white": "#FFF6F6",
        "light-red": "rgba(229, 69, 61, 0.26)",
      },
    },
  },
  safelist: [{ pattern: /w-./ }, { pattern: /grid-cols-./ }],
  plugins: [require("@tailwindcss/typography"), require("@tailwindcss/forms")],
};
