import type { Config } from "tailwindcss";
import defaultTheme from "tailwindcss/defaultTheme";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        cal: ["var(--font-calSans)"],
        bdog: ["var(--font-bdog)"],
        moranga: ["var(--font-moranga)"],
        sans: ["var(--font-geist-sans)", ...defaultTheme.fontFamily.sans],
        mono: ["var(--font-geist-mono)", ...defaultTheme.fontFamily.mono],
      },

      keyframes: {
        reveal: {
          "0%": {
            opacity: "0",
            filter: "brightness(1) blur(15px)",
            scale: "1.0125",
          },
          "10%": { opacity: "1", filter: "brightness(1.25) blur(10px)" },
          "100%": { opacity: "1", filter: "brightness(1) blur(0)", scale: "1" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
