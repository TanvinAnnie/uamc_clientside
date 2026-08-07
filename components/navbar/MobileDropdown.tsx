"use client";

import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

interface MobileDropdownProps {
  open: boolean;
  items: {
    label: string;
    href: string;
  }[];
  onClose: () => void;
}

export default function MobileDropdown({
  open,
  items,
  onClose,
}: MobileDropdownProps) {
  return (
    <AnimatePresence initial={false}>
      {open && (
        <motion.div
          initial={{
            height: 0,
            opacity: 0,
          }}
          animate={{
            height: "auto",
            opacity: 1,
          }}
          exit={{
            height: 0,
            opacity: 0,
          }}
          transition={{
            duration: 0.25,
          }}
          className="overflow-hidden"
        >
          <div className="border-l-2 border-emerald-500/30 pl-4">
            {items.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                onClick={onClose}
                className="
                  block
                  border-b
                  border-slate-200
                  py-3

                  text-sm
                  font-medium
                  text-slate-700

                  transition
                  hover:text-emerald-600
                "
              >
                {item.label}
              </Link>
            ))}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}