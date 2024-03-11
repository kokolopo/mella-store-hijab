/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    colors: {
      base1: "#FFF6BD",
      base2: "#FFD4B2",
    },
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#c000ff",
          secondary: "#fe6400",
          accent: "#0f00ff",
          neutral: "#241005",
          "base-100": "#ffffff",
          info: "#00caff",
          success: "#00a26f",
          warning: "#ff9e00",
          error: "#ff1540",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
