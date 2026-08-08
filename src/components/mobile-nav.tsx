"use client";

import { useState, useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { navItems } from "@/lib/site-data";

export function MobileMenuToggle({ currentPath }: { currentPath: string }) {
  const [open, setOpen] = useState(false);
  const [headerHeight, setHeaderHeight] = useState(92);
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!open) return;

    document.body.style.overflow = "hidden";

    const header = buttonRef.current?.closest(".site-header");
    const measure = () => {
      if (header) setHeaderHeight(header.getBoundingClientRect().height);
    };
    measure();

    window.addEventListener("resize", measure);
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("resize", measure);
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  return (
    <>
      <button
        ref={buttonRef}
        className="menu-button"
        aria-label={open ? "Close navigation menu" : "Open navigation menu"}
        aria-expanded={open}
        aria-controls="mobile-nav"
        onClick={() => setOpen((prev) => !prev)}
      >
        {open ? <X size={18} /> : <Menu size={18} />}
      </button>

      {open &&
        createPortal(
          <>
            <div
              className="mobile-overlay"
              aria-hidden="true"
              onClick={() => setOpen(false)}
            />
            <nav
              id="mobile-nav"
              className="mobile-nav"
              aria-label="Mobile navigation"
              style={{ paddingTop: headerHeight + 20 }}
            >
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`mobile-nav-link${currentPath === item.href ? " active" : ""}`}
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </>,
          document.body
        )}
    </>
  );
}
