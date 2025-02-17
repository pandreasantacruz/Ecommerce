import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        color_1: "--color-1",
        color_2: "--color-2",
        color_3: "--color-3",
        color_4: "--color-4",
        color_5: "--color-5",
      },
    },
  },
  plugins: [],
} satisfies Config;
