import { useEffect, useState } from "react";

const useTheme = () => {
  const prefersDarkMode = window.matchMedia(
    "(prefers-color-scheme: dark)",
  ).matches;
  const [darkMode, setDarkMode] = useState(prefersDarkMode);

  useEffect(() => {
    const root = document.documentElement;
    if (darkMode) {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
  }, [darkMode]);

  return {
    darkMode,
    setDarkMode,
  };
};

export default useTheme;
