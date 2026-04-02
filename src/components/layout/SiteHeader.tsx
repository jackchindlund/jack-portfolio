"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { navItems, person } from "@/content/site";
import { cn } from "@/lib/utils";

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (open) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 transition-[box-shadow,background-color] duration-300",
        scrolled
          ? "border-b border-border bg-background/85 shadow-[0_1px_0_rgba(0,0,0,0.03)] backdrop-blur-md"
          : "border-b border-transparent bg-background/70 backdrop-blur-sm",
      )}
    >
      <div className="mx-auto flex h-14 max-w-[min(100%-2rem,74rem)] items-center justify-between px-5 sm:h-16 sm:px-8 lg:px-12">
        <Link
          href="#home"
          className="text-[0.9375rem] font-semibold tracking-tight text-foreground transition-colors hover:text-accent"
        >
          {person.name}
        </Link>

        <nav
          aria-label="Primary"
          className="hidden items-center gap-1 md:flex md:gap-0.5"
        >
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-full px-3 py-2 text-[0.8125rem] font-medium tracking-tight text-muted transition-colors hover:bg-foreground/[0.04] hover:text-foreground"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center rounded-full text-foreground transition-colors hover:bg-foreground/[0.06] md:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen((v) => !v)}
        >
          <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
          <span className="flex h-3.5 w-5 flex-col justify-between" aria-hidden>
            <span
              className={cn(
                "h-0.5 w-full rounded-full bg-current transition-transform",
                open && "translate-y-1.5 rotate-45",
              )}
            />
            <span
              className={cn(
                "h-0.5 w-full rounded-full bg-current transition-opacity",
                open && "opacity-0",
              )}
            />
            <span
              className={cn(
                "h-0.5 w-full rounded-full bg-current transition-transform",
                open && "-translate-y-1.5 -rotate-45",
              )}
            />
          </span>
        </button>
      </div>

      <div
        id="mobile-nav"
        className={cn(
          "border-t border-border bg-background md:hidden",
          !open && "hidden",
        )}
      >
        <nav aria-label="Mobile" className="flex flex-col px-5 py-4 sm:px-8">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-lg px-3 py-3 text-sm font-medium text-foreground"
              onClick={() => setOpen(false)}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
