import { type Config } from "tailwindcss";
import colors from "tailwindcss/colors";

export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        display: ["var(--font-display)", "system-ui", "sans-serif"],
      },
      colors: {
        primary: colors.blue,
        neutral: colors.gray,
      },
      screens: {
        xs: "350px",
      },
    },
  },
  plugins: [],
} satisfies Config;
