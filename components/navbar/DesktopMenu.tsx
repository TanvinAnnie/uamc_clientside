"use client";

import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { ChevronDown } from "lucide-react";
import { motion } from "framer-motion";

import DesktopDropdown from "./DesktopDropdown";
import { menuItems } from "./menu";

export default function DesktopMenu() {
  const pathname = usePathname();

  const [openMenu, setOpenMenu] =
    useState<string | null>(null);

  return (
    <nav
      className="
        hidden
        xl:flex
        items-center
        justify-center
        gap-1
      "
    >
      {menuItems.map((item) => {
        const active =
          item.href === "/"
            ? pathname === "/"
            : item.href
            ? pathname.startsWith(item.href)
            : false;

        return (
          <div
            key={item.label}
            className="relative"
            onMouseEnter={() =>
              setOpenMenu(item.label)
            }
            onMouseLeave={() =>
              setOpenMenu(null)
            }
          >
            {/* Normal Link */}

            {item.href ? (
              <Link
                href={item.href}
                className={`
                  relative
                  flex
                  items-center
                  px-4
                  py-8
                  text-[15px]
                  font-semibold
                  uppercase
                  tracking-wide
                  transition-colors
                  duration-300

                  ${
                    active
                      ? "text-emerald-600"
                      : "text-slate-800 hover:text-emerald-600"
                  }
                `}
              >
                {item.label}

                {active && (
                  <motion.div
                    layoutId="nav-indicator"
                    className="
                      absolute
                      bottom-0
                      left-0
                      h-[3px]
                      w-full
                      rounded-full
                      bg-emerald-600
                    "
                    transition={{
                      type: "spring",
                      stiffness: 400,
                      damping: 35,
                    }}
                  />
                )}
              </Link>
            ) : (
              <button
                type="button"
                className="
                  relative
                  flex
                  items-center
                  gap-1
                  px-4
                  py-8
                  text-[15px]
                  font-semibold
                  uppercase
                  tracking-wide
                  text-slate-800
                  transition-colors
                  duration-300
                  hover:text-emerald-600
                "
              >
                {item.label}

                <ChevronDown
                  size={16}
                  className={`transition-transform duration-300 ${
                    openMenu === item.label
                      ? "rotate-180"
                      : ""
                  }`}
                />

                {openMenu === item.label && (
                  <motion.div
                    layoutId="nav-indicator"
                    className="
                      absolute
                      bottom-0
                      left-0
                      h-[3px]
                      w-full
                      rounded-full
                      bg-emerald-600
                    "
                    transition={{
                      type: "spring",
                      stiffness: 400,
                      damping: 35,
                    }}
                  />
                )}
              </button>
            )}

            {/* Dropdown */}

            {item.children && (
              <DesktopDropdown
                open={openMenu === item.label}
                items={item.children}
              />
            )}
          </div>
        );
      })}
    </nav>
  );
}