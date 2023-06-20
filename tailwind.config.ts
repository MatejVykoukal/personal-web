import { type Config } from "tailwindcss";
import colors from "tailwindcss/colors";

export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
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
