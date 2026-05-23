import { useState } from "react";
import { DropdownItem } from "../ui/dropdown/DropdownItem";
import { Dropdown } from "../ui/dropdown/Dropdown";
import { HugeiconsIcon } from "@hugeicons/react";
import {
  ArrowDown01Icon,
  Logout02Icon,
  Settings02Icon,
  UserCircleIcon,
  UserIcon,
} from "@hugeicons/core-free-icons";

export default function UserDropdown() {
  const [isOpen, setIsOpen] = useState(false);

  function toggleDropdown() {
    setIsOpen(!isOpen);
  }

  function closeDropdown() {
    setIsOpen(false);
  }
  return (
    <div className="relative">
      <button
        onClick={toggleDropdown}
        className="group flex items-center text-gray-700 dropdown-toggle dark:text-gray-400"
      >
        <span className="mr-3 flex h-9 w-9 items-center justify-center rounded-full border border-gray-200 bg-white text-gray-500 transition-colors duration-200 ease-out group-hover:bg-gray-100/80 dark:border-gray-800 dark:bg-gray-900 dark:text-gray-400 dark:group-hover:bg-gray-800/70">
          <HugeiconsIcon icon={UserIcon} size={20} strokeWidth={1.8} />
        </span>

        <span className="block mr-1 font-medium text-theme-sm">Administrator</span>
        <HugeiconsIcon
          icon={ArrowDown01Icon}
          className={`text-gray-500 dark:text-gray-400 transition-transform duration-200 ${
            isOpen ? "rotate-180" : ""
          }`}
          size={20}
          strokeWidth={1.8}
        />
      </button>

      <Dropdown
        isOpen={isOpen}
        onClose={closeDropdown}
        className="absolute right-0 mt-[17px] flex w-[260px] flex-col rounded-2xl border border-gray-200 bg-white p-3 shadow-theme-lg dark:border-gray-800 dark:bg-gray-dark"
      >
        <ul className="flex flex-col gap-1 pb-3 border-b border-gray-200 dark:border-gray-800">
          <li>
            <DropdownItem
              onItemClick={closeDropdown}
              tag="a"
              to="/profile"
              baseClassName=""
              className="flex items-center gap-3 px-2.5 py-2 font-medium text-gray-700 rounded-lg group text-theme-sm hover:rounded-lg hover:bg-gray-100 hover:text-gray-700 dark:text-gray-400 dark:hover:rounded-lg dark:hover:bg-white/5 dark:hover:text-gray-300"
            >
              <HugeiconsIcon
                icon={UserCircleIcon}
                className="text-gray-500 group-hover:text-gray-700 dark:text-gray-400 dark:group-hover:text-gray-300"
                size={20}
                strokeWidth={1.8}
              />
              Edit Profile
            </DropdownItem>
          </li>
          <li>
            <DropdownItem
              onItemClick={closeDropdown}
              tag="a"
              to="/profile"
              baseClassName=""
              className="flex items-center gap-3 px-2.5 py-2 font-medium text-gray-700 rounded-lg group text-theme-sm hover:rounded-lg hover:bg-gray-100 hover:text-gray-700 dark:text-gray-400 dark:hover:rounded-lg dark:hover:bg-white/5 dark:hover:text-gray-300"
            >
              <HugeiconsIcon
                icon={Settings02Icon}
                className="text-gray-500 group-hover:text-gray-700 dark:text-gray-400 dark:group-hover:text-gray-300"
                size={20}
                strokeWidth={1.8}
              />
              Account Settings
            </DropdownItem>
          </li>
        </ul>
        <DropdownItem
          onItemClick={closeDropdown}
          tag="a"
          to="/signin"
          baseClassName=""
          className="flex items-center gap-3 px-2.5 py-2 mt-3 font-medium text-gray-700 rounded-lg group text-theme-sm hover:rounded-lg hover:bg-gray-100 hover:text-gray-700 dark:text-gray-400 dark:hover:rounded-lg dark:hover:bg-white/5 dark:hover:text-gray-300"
        >
          <HugeiconsIcon
            icon={Logout02Icon}
            className="text-gray-500 group-hover:text-gray-700 dark:text-gray-400 dark:group-hover:text-gray-300"
            size={20}
            strokeWidth={1.8}
          />
          Sign Out
        </DropdownItem>
      </Dropdown>
    </div>
  );
}
