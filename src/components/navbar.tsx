"use client";

import { useState } from "react";
import { navItems, siteConfig } from "@/lib/content";
import { useActiveSection } from "@/hooks/use-active-section";
import { ThemeToggle } from "@/components/theme-toggle";

const sectionIds = navItems.map((item) => item.id);

export function Navbar() {
  const active = useActiveSection(sectionIds);
  const [menuOpen, setMenuOpen] = useState(false);

  const linkClasses = (isActive: boolean) =>
    `liquid-nav-link rounded-full px-3.5 py-1.5 text-sm transition-all duration-200 active:scale-[0.98] ${
      isActive
        ? "liquid-nav-link-active text-foreground"
        : "text-muted hover:text-foreground"
    }`;

  return (
    <header className="fixed inset-x-0 top-0 z-50 flex flex-col items-center px-4 pt-4">
      <svg
        className="absolute size-0"
        aria-hidden
        focusable="false"
      >
        <filter
          id="liquid-lens-edge"
          x="-20%"
          y="-40%"
          width="140%"
          height="180%"
          colorInterpolationFilters="sRGB"
        >
          <feImage
            href="/liquid-lens-map.svg"
            preserveAspectRatio="none"
            result="map"
          />
          <feDisplacementMap
            in="SourceGraphic"
            in2="map"
            scale="92"
            xChannelSelector="R"
            yChannelSelector="G"
          />
        </filter>
      </svg>
      <nav
        aria-label="Primary"
        className="glass-nav flex h-14 w-full max-w-2xl items-center gap-2 rounded-full pr-2 pl-3"
      >
        <a
          href="#home"
          aria-label="Back to top"
          className="relative z-10 flex size-9 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-brand-a to-brand-b text-[0.68rem] font-bold tracking-wide text-white shadow-sm"
        >
          {siteConfig.initials}
        </a>

        <ul className="relative z-10 hidden flex-1 items-center justify-end gap-1 md:flex">
          {navItems.map((item) => (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                className={linkClasses(active === item.id)}
                aria-current={active === item.id ? "true" : undefined}
              >
                <span className="inline-grid">
                  <span
                    aria-hidden
                    className="invisible col-start-1 row-start-1 font-semibold"
                  >
                    {item.label}
                  </span>
                  <span
                    className={`col-start-1 row-start-1 ${
                      active === item.id ? "font-semibold" : ""
                    }`}
                  >
                    {item.label}
                  </span>
                </span>
              </a>
            </li>
          ))}
        </ul>

        <ThemeToggle />

        <button
          type="button"
          className="relative z-10 flex size-9 items-center justify-center rounded-full text-foreground transition-colors hover:text-accent md:hidden"
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          onClick={() => setMenuOpen((open) => !open)}
        >
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            className="size-5"
            aria-hidden
          >
            {menuOpen ? (
              <path d="M6 6l12 12M18 6L6 18" />
            ) : (
              <path d="M4 7h16M4 12h16M4 17h16" />
            )}
          </svg>
        </button>
      </nav>

      {menuOpen ? (
        <div
          id="mobile-menu"
          className="glass-nav mt-2 w-full max-w-2xl rounded-3xl p-2 md:hidden"
        >
          <ul className="relative z-10 flex flex-col">
            {navItems.map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  className={`liquid-nav-link block rounded-2xl px-4 py-2.5 text-sm transition-colors ${
                    active === item.id
                      ? "liquid-nav-link-active font-semibold text-accent"
                      : "font-medium text-foreground hover:text-accent"
                  }`}
                  aria-current={active === item.id ? "true" : undefined}
                  onClick={() => setMenuOpen(false)}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      ) : null}
    </header>
  );
}
