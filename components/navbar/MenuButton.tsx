"use client";

import { Menu, X } from "lucide-react";

interface MenuButtonProps {
  open: boolean;
  onClick: () => void;
}

export default function MenuButton({
  open,
  onClick,
}: MenuButtonProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label="Toggle Menu"
      className="
        flex
        h-10
        w-10
        items-center
        justify-center

        rounded-full

        text-slate-800

        transition-all
        duration-300

        hover:bg-emerald-50
        hover:text-emerald-600
      "
    >
      {open ? (
        <X
          size={24}
          strokeWidth={2}
        />
      ) : (
        <Menu
          size={24}
          strokeWidth={2}
        />
      )}
    </button>
  );
}