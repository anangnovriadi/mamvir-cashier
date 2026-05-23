import { useTheme } from "../../context/ThemeContext";
import { HugeiconsIcon } from "@hugeicons/react";
import { Moon02Icon, Sun01Icon } from "@hugeicons/core-free-icons";

export const ThemeToggleButton: React.FC = () => {
  const { toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="flex h-9 w-9 items-center justify-center rounded-full border border-gray-200 bg-white text-gray-500 transition-colors duration-200 ease-out hover:bg-gray-100/80 dark:border-gray-800 dark:bg-gray-900 dark:text-gray-400 dark:hover:bg-gray-800/70"
    >
      <HugeiconsIcon
        icon={Sun01Icon}
        className="hidden dark:block"
        size={20}
        strokeWidth={1.8}
      />
      <HugeiconsIcon
        icon={Moon02Icon}
        className="dark:hidden"
        size={20}
        strokeWidth={1.8}
      />
    </button>
  );
};
