"use client";

import { Search } from "lucide-react";

interface SearchButtonProps {
  onClick?: () => void;
}

export default function SearchButton({
  onClick,
}: SearchButtonProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label="Search"
      className="
        flex
        h-11
        w-11
        items-center
        justify-center

        rounded-full

        border
        border-slate-200

        bg-white

        text-slate-700

        transition-all
        duration-300

        hover:border-emerald-600
        hover:bg-emerald-600
        hover:text-white

        active:scale-95
      "
    >
      <Search
        size={20}
        strokeWidth={2.2}
      />
    </button>
  );
}