"use client";
import Link from "next/link";
import { navItems, person } from "@/content/site";
import { useRef } from "react";

export function SiteHeader() {
  const menu = useRef<HTMLDetailsElement>(null);
  function closeMenu() {
    if (menu.current) menu.current.open = false;
  }
  return (
    <header className="site-header">
      <div className="container header-inner">
        <Link
          className="wordmark"
          href="/#home"
          aria-label={person.name + ", home"}
        >
          <span className="wordmark-symbol" aria-hidden="true">
            j<span>c</span>
          </span>
          {person.name}
        </Link>
        <nav className="desktop-nav" aria-label="Main navigation">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href}>
              {item.label}
            </Link>
          ))}
        </nav>
        <details
          className="mobile-menu"
          ref={menu}
          onKeyDown={(e) => {
            if (e.key === "Escape" && menu.current?.open) {
              closeMenu();
              menu.current.querySelector("summary")?.focus();
            }
          }}
        >
          <summary>
            Menu <span aria-hidden="true">+</span>
          </summary>
          <nav aria-label="Mobile navigation">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href} onClick={closeMenu}>
                {item.label}
              </Link>
            ))}
          </nav>
        </details>
      </div>
    </header>
  );
}
