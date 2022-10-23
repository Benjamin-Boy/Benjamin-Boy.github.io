/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      keyframes: {
        wiggle: {
          "0%": { transform: "scale(0)" },
          "80%": { transform: "scale(1.2)" },
          "100%": { transform: "scale(1)" },
        },
        langToggle: {
          "0%": { transformOrigin: "left" },
          "70%": { transform: "scale(0.8) " },
          "100%": { transformOrigin: "right" },
        },
        langToggleReverse: {
          "0%": { transformOrigin: "right" },
          "70%": { transform: "scale(0.8) " },
          "100%": { transformOrigin: "left" },
        },
        resumeToggle: {
          "0%": { transform: "translateX(100%)" },
          "100%": { transform: "translateX(0)" },
        },
        resumeToggleReverse: {
          "0%": { transform: "translateX(0) scaleX(1)" },
          "100%": { transform: "translateX(100%) scaleX(0)" },
        },
      },
      animation: {
        wiggle: "wiggle 200ms ease-in-out",
        langToggle: "langToggle 300ms ease-in-out forwards",
        langToggleReverse: "langToggleReverse 300ms ease-in-out forwards",
        resumeToggle: "resumeToggle 300ms ease-in-out forwards",
        resumeToggleReverse: "resumeToggleReverse 300ms ease-in-out forwards",
      },
    },
    light: { "bg-color": "#fff", color: "#181818" },
    dark: { "bg-color": "#181818", color: " #fff" },
    colors: {
      primary: "#fdfaf0",
      secondary: "#181818",
      tertiary: "#97c7ff",
      activeBtn: "#a9a9a9",
    },
  },
  plugins: [],
  darkMode: "class",
};
