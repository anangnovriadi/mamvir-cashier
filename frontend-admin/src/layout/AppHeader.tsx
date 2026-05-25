import { useState } from "react";

import { Link } from "react-router";
import { HugeiconsIcon } from "@hugeicons/react";
import {
  Cancel01Icon,
  MoreHorizontalIcon,
  PanelLeftIcon,
} from "@hugeicons/core-free-icons";
import { useSidebar } from "../context/SidebarContext";
import { ThemeToggleButton } from "../components/common/ThemeToggleButton";
import UserDropdown from "../components/header/UserDropdown";
import { useLanguage } from "../context/LanguageContext";

const AppHeader: React.FC = () => {
  const [isApplicationMenuOpen, setApplicationMenuOpen] = useState(false);

  const { isMobileOpen, toggleSidebar, toggleMobileSidebar } = useSidebar();
  const { locale, toggleLanguage } = useLanguage();

  const handleToggle = () => {
    if (window.innerWidth >= 1024) {
      toggleSidebar();
    } else {
      toggleMobileSidebar();
    }
  };

  const toggleApplicationMenu = () => {
    setApplicationMenuOpen(!isApplicationMenuOpen);
  };

  return (
    <header className="sticky top-0 flex w-full bg-white border-gray-200 z-99999 dark:border-gray-800 dark:bg-gray-900 lg:border-b">
      <div className="flex flex-col items-center justify-between grow lg:flex-row lg:px-6">
        <div className="flex items-center justify-between w-full gap-2 px-3 py-3 border-b border-gray-200 dark:border-gray-800 sm:gap-4 lg:justify-normal lg:border-b-0 lg:px-0 lg:py-4">
          <button
            className="z-99999 flex h-9 w-9 items-center justify-center rounded-lg border border-gray-200 bg-white text-gray-500 transition-colors duration-200 ease-out hover:bg-gray-100/80 dark:border-gray-800 dark:bg-gray-900 dark:text-gray-400 dark:hover:bg-gray-800/70"
            onClick={handleToggle}
            aria-label="Toggle Sidebar"
          >
            {isMobileOpen ? (
              <HugeiconsIcon icon={Cancel01Icon} size={20} strokeWidth={1.8} />
            ) : (
              <HugeiconsIcon icon={PanelLeftIcon} size={20} strokeWidth={1.8} />
            )}
          </button>

          <Link to="/" className="lg:hidden">
            <img
              className="dark:hidden"
              src="./images/logo/logo-mamvir.svg"
              alt="Logo"
            />
            <img
              className="hidden dark:block"
              src="./images/logo/logo-mamvir-white.svg"
              alt="Logo"
            />
          </Link>

          <button
            onClick={toggleApplicationMenu}
            className="flex items-center justify-center w-10 h-10 text-gray-700 rounded-lg z-99999 transition-colors hover:rounded-lg hover:bg-gray-100 dark:text-gray-400 dark:hover:rounded-lg dark:hover:bg-gray-800 lg:hidden"
          >
            <HugeiconsIcon
              icon={MoreHorizontalIcon}
              size={24}
              strokeWidth={1.8}
            />
          </button>

        </div>
        <div
          className={`${
            isApplicationMenuOpen ? "flex" : "hidden"
          } items-center justify-between w-full gap-4 px-5 py-4 lg:flex shadow-theme-md lg:justify-end lg:px-0 lg:shadow-none`}
        >
          <div className="flex items-center gap-2 2xsm:gap-3">
            <ThemeToggleButton />
            <button
              type="button"
              aria-label="Change Language"
              onClick={toggleLanguage}
              className="flex h-9 w-9 items-center justify-center overflow-hidden rounded-full border border-gray-200 bg-white transition-colors duration-200 ease-out hover:bg-gray-100/80 dark:border-gray-800 dark:bg-gray-900 dark:hover:bg-gray-800/70"
            >
              <img
                src={
                  locale === "id"
                    ? "/images/indonesia.png"
                    : "/images/united-kingdom.png"
                }
                alt={locale === "id" ? "Indonesia" : "English"}
                className="h-5 w-5 rounded-full object-cover"
              />
            </button>
          </div>
          <UserDropdown />
        </div>
      </div>
    </header>
  );
};

export default AppHeader;
