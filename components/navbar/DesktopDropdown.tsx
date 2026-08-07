"use client";

import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

interface DesktopDropdownProps {
  open: boolean;
  items: {
    label: string;
    href: string;
  }[];
}

export default function DesktopDropdown({
  open,
  items,
}: DesktopDropdownProps) {
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{
            opacity: 0,
            y: 15,
            scale: 0.98,
          }}
          animate={{
            opacity: 1,
            y: 0,
            scale: 1,
          }}
          exit={{
            opacity: 0,
            y: 15,
            scale: 0.98,
          }}
          transition={{
            duration: 0.22,
          }}
          className="
absolute
left-1/2
top-full

z-[99999]

mt-0

w-[330px]

-translate-x-1/2

overflow-hidden

border
border-white/20

bg-white/20

backdrop-blur-2xl

shadow-[0_20px_60px_rgba(0,0,0,0.35)]
"
        >
          {items.map((item, index) => (
           <Link
  key={item.label}
  href={item.href}
  className="
    group

    flex
    items-center
    justify-between

    px-6
    py-4

    text-[15px]
    font-medium

    !text-white

    border-b
    border-[#caa64b]

    transition-all
    duration-300

   hover:bg-white/10
  "
>
             <span className="!text-white">
  {item.label}
</span>

              <ArrowRight
  size={18}
  className="!text-white transition-transform duration-300 group-hover:translate-x-1"
/>
            </Link>
          ))}
        </motion.div>
      )}
    </AnimatePresence>
  );
}