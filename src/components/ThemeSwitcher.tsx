import { IconMoon, IconSun } from "@tabler/icons-react";
import { useLocalStorage } from "@mantine/hooks";
import { type ColorScheme } from "~/types/global.types";
import { useEffect } from "react";

const ThemeSwitcher = () => {
  let userPrefersDarkColorScheme: boolean | undefined;

  if (typeof window !== "undefined") {
    userPrefersDarkColorScheme = window?.matchMedia(
      "(prefers-color-scheme: dark)"
    )?.matches;
  }

  const [colorScheme, setColorScheme] = useLocalStorage<ColorScheme>({
    key: "color-scheme",
    defaultValue: userPrefersDarkColorScheme === false ? "light" : "dark",
  });

  const isDarkColorScheme = colorScheme === "dark";

  const toggleColorScheme = () => {
    setColorScheme(isDarkColorScheme ? "light" : "dark");
  };

  useEffect(() => {
    document.documentElement.classList.remove("light", "dark");
    document.documentElement.classList.add(colorScheme);
  }, [colorScheme]);

  return (
    <button
      onClick={toggleColorScheme}
      title={`Switch to ${colorScheme} mode`}
      aria-label="Toggle color scheme"
    >
      {isDarkColorScheme ? <IconSun size={24} /> : <IconMoon size={24} />}
    </button>
  );
};

export default ThemeSwitcher;
