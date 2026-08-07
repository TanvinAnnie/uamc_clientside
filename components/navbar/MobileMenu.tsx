"use client";

import { useState } from "react";
import Link from "next/link";
import { ChevronDown } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

import { menuItems } from "./menu";
import MobileDropdown from "./MobileDropdown";

interface MobileMenuProps {
  open: boolean;
  onClose: () => void;
}

export default function MobileMenu({
  open,
  onClose,
}: MobileMenuProps) {
  const [expanded, setExpanded] =
    useState<string | null>(null);

  return (
    <AnimatePresence>
      {open && (
        <>
          {/* Overlay */}

          <motion.div
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            exit={{
              opacity: 0,
            }}
            onClick={onClose}
            className="fixed inset-0 z-40 bg-black/40 xl:hidden"
          />

          {/* Drawer */}

          <motion.div
            initial={{
              x: "-100%",
            }}
            animate={{
              x: 0,
            }}
            exit={{
              x: "-100%",
            }}
            transition={{
              type: "spring",
              stiffness: 260,
              damping: 30,
            }}
            className="
              fixed
              left-0
              top-0
              z-50

              h-screen
              w-[320px]
              max-w-[90vw]

              overflow-y-auto

              bg-white

              shadow-2xl
            "
          >
            <div className="border-b border-slate-200 p-6">
              <h2 className="text-xl font-bold">
                Menu
              </h2>
            </div>

            <div className="p-4">
              {menuItems.map((item) => (
                <div
                  key={item.label}
                  className="border-b border-slate-100"
                >
                  {item.children ? (
                    <>
                      <button
                        type="button"
                        onClick={() =>
                          setExpanded(
                            expanded === item.label
                              ? null
                              : item.label
                          )
                        }
                        className="
                          flex
                          w-full
                          items-center
                          justify-between

                          py-4

                          text-left

                          font-semibold
                          text-slate-800
                        "
                      >
                        {item.label}

                        <ChevronDown
                          size={18}
                          className={`transition-transform ${
                            expanded === item.label
                              ? "rotate-180"
                              : ""
                          }`}
                        />
                      </button>

                      <MobileDropdown
                        open={
                          expanded === item.label
                        }
                        items={item.children}
                        onClose={onClose}
                      />
                    </>
                  ) : (
                    <Link
                      href={item.href!}
                      onClick={onClose}
                      className="
                        block
                        py-4

                        font-semibold
                        text-slate-800

                        transition
                        hover:text-emerald-600
                      "
                    >
                      {item.label}
                    </Link>
                  )}
                </div>
              ))}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}