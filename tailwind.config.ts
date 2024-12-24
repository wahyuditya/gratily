import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",

        appColor: {
          "50": "#ffffea",
          "100": "#fffbc5",
          "200": "#fff885",
          "300": "#ffee46",
          "400": "#ffdf1b",
          "500": "#ffc107",
          "600": "#e29400",
          "700": "#bb6902",
          "800": "#985108",
          "900": "#7c420b",
          "950": "#482200",
          text: "#4E4E4E",
          bg: "#F5F5F5",
          border: "#C1C1C1",
          error: "#DA2108",
        },
      },
      fontFamily: {
        playfair: ['"Playfair"', "serif"],
        poppins: ['"Poppins"', "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
