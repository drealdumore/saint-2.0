import type { Config } from "tailwindcss";

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
      },
    },
  },
  plugins: [],
};
export default config;
