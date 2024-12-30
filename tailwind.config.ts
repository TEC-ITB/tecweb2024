import type { Config } from "tailwindcss";
import textShadowPlugin from 'tailwindcss-textshadow';

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
      },
      textShadow: {
        'glow': '0 0 10px rgba(255, 255, 255, 0.7), 0 0 20px rgba(255, 255, 255, 0.5), 0 0 30px rgba(255, 255, 255, 0.3)',
        'glow-light': '0 0 30px rgba(255, 255, 255, 0.5), 0 0 5px rgba(255, 255, 255, 0.3), 0 0 5px rgba(255, 255, 255, 0.2)',
      },
    },
  },
  plugins: [
    textShadowPlugin,
  ],
} satisfies Config;