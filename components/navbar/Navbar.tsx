"use client";

import { useEffect, useState } from "react";

import Container from "@/components/shared/Container";

import Logo from "./Logo";
import DesktopMenu from "./DesktopMenu";
import SearchButton from "./SearchButton";
import MenuButton from "./MenuButton";
import MobileMenu from "./MobileMenu";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] =
    useState(false);

  const [scrolled, setScrolled] =
    useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener(
      "scroll",
      handleScroll
    );

    return () =>
      window.removeEventListener(
        "scroll",
        handleScroll
      );
  }, []);

  return (
    <>
      <header
        className={`
          sticky
          top-0
          z-[999]

          w-full

          border-b
          border-slate-200

          bg-white

          transition-all
          duration-300

          ${
            scrolled
              ? "shadow-lg"
              : "shadow-sm"
          }
        `}
      >
        <Container>
          <div
            className="
              flex
              h-[82px]
              items-center
              justify-between
            "
          >
            {/* ================= Left ================= */}

            <div className="flex flex-shrink-0 items-center">
              <Logo />
            </div>

            {/* ================= Center ================= */}

            <div
              className="
                hidden
                flex-1
                items-center
                justify-center
                xl:flex
              "
            >
              <DesktopMenu />
            </div>

            {/* ================= Right ================= */}

            <div
              className="
                flex
                flex-shrink-0
                items-center
                justify-end
                gap-3
              "
            >
              <SearchButton />

              <div className="xl:hidden">
                <MenuButton
                  open={mobileOpen}
                  onClick={() =>
                    setMobileOpen(
                      !mobileOpen
                    )
                  }
                />
              </div>
            </div>
          </div>
        </Container>
      </header>

      <MobileMenu
        open={mobileOpen}
        onClose={() =>
          setMobileOpen(false)
        }
      />
    </>
  );
}