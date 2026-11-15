import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./lib/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#101B34",
        cobalt: "#2B50F0",
        sun: "#FFC53D",
        paper: "#F6F8FC",
        muted: "#5B6579",
        line: "#DDE3EF",
        wa: "#1FAF55",
        pink: "#FF7AA8",
        mint: "#37D7A3",
      },
      fontFamily: {
        display: ['"Bricolage Grotesque"', "system-ui", "sans-serif"],
        body: ['"DM Sans"', "system-ui", "sans-serif"],
      },
      maxWidth: { site: "1080px" },
    },
  },
  plugins: [],
};
export default config;
