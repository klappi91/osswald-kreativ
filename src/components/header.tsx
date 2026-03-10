"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, ChevronDown } from "lucide-react";

const NAV_ITEMS = [
  { label: "Home", href: "/" },
  { label: "Verkauf", href: "/verkauf" },
  { label: "Unser Betrieb", href: "/unser-betrieb" },
  {
    label: "Leistungen",
    href: "/leistungen",
    children: [
      { label: "Inspektion", href: "/leistungen/inspektion" },
      { label: "24-Stunden-Annahme", href: "/leistungen/24-stunden-annahme" },
      { label: "Ersatzwagen", href: "/leistungen/ersatzwagen" },
      {
        label: "Reifen- und Winterservice",
        href: "/leistungen/reifen-und-winterservice",
      },
    ],
  },
  { label: "Kontakt", href: "/kontakt" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target as Node)
      ) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const closeMobile = useCallback(() => {
    setMobileOpen(false);
    setMobileDropdownOpen(false);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 z-50 w-full transition-all duration-500 ${
          scrolled
            ? "bg-dark/95 shadow-lg shadow-black/20 backdrop-blur-md py-3"
            : "bg-transparent py-5"
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 lg:px-10">
          {/* Logo */}
          <Link href="/" className="relative z-50 shrink-0">
            <div
              className={`relative overflow-hidden rounded-lg transition-all duration-500 ${
                scrolled ? "h-10 w-28" : "h-12 w-32"
              }`}
            >
              <Image
                src="/images/logo.jpg"
                alt="Autohaus Oßwald"
                fill
                className="object-contain object-left"
                priority
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden items-center gap-1 lg:flex">
            {NAV_ITEMS.map((item) =>
              item.children ? (
                <div key={item.label} className="relative" ref={dropdownRef}>
                  <button
                    onClick={() => setDropdownOpen(!dropdownOpen)}
                    className={`group flex items-center gap-1 px-4 py-2 font-display text-sm font-medium uppercase tracking-widest transition-colors ${
                      scrolled
                        ? "text-white hover:text-orange"
                        : "text-white hover:text-orange"
                    }`}
                  >
                    {item.label}
                    <ChevronDown
                      className={`h-4 w-4 transition-transform duration-300 ${
                        dropdownOpen ? "rotate-180" : ""
                      }`}
                    />
                    <span className="absolute bottom-0 left-4 right-4 h-0.5 origin-left scale-x-0 bg-orange transition-transform duration-300 group-hover:scale-x-100" />
                  </button>

                  {/* Dropdown */}
                  <div
                    className={`absolute left-0 top-full mt-2 min-w-[260px] origin-top transition-all duration-300 ${
                      dropdownOpen
                        ? "scale-y-100 opacity-100"
                        : "pointer-events-none scale-y-95 opacity-0"
                    }`}
                  >
                    <div className="overflow-hidden rounded-lg border border-white/10 bg-dark-lighter shadow-2xl shadow-black/40">
                      {/* Orange top accent bar */}
                      <div className="h-1 w-full bg-orange" />
                      <div className="py-2">
                        {item.children.map((child) => (
                          <Link
                            key={child.href}
                            href={child.href}
                            onClick={() => setDropdownOpen(false)}
                            className="group/item flex items-center gap-3 px-5 py-3 text-sm text-white/80 transition-all hover:bg-white/5 hover:text-orange"
                          >
                            <span className="h-1.5 w-1.5 rounded-full bg-orange opacity-0 transition-opacity group-hover/item:opacity-100" />
                            <span className="font-display uppercase tracking-wider">
                              {child.label}
                            </span>
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                <Link
                  key={item.label}
                  href={item.href}
                  className={`group relative px-4 py-2 font-display text-sm font-medium uppercase tracking-widest transition-colors ${
                    scrolled
                      ? "text-white hover:text-orange"
                      : "text-white hover:text-orange"
                  }`}
                >
                  {item.label}
                  <span className="absolute bottom-0 left-4 right-4 h-0.5 origin-left scale-x-0 bg-orange transition-transform duration-300 group-hover:scale-x-100" />
                </Link>
              )
            )}

            {/* CTA Button */}
            <Link
              href="/kontakt"
              className="ml-4 rounded-none bg-orange px-6 py-2.5 font-display text-sm font-semibold uppercase tracking-widest text-white transition-all duration-300 hover:bg-orange-dark hover:shadow-lg hover:shadow-orange/30 -skew-x-6"
            >
              <span className="inline-block skew-x-6">Termin</span>
            </Link>
          </nav>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="relative z-50 flex h-11 w-11 items-center justify-center lg:hidden"
            aria-label={mobileOpen ? "Menü schließen" : "Menü öffnen"}
          >
            <div className="relative h-6 w-6">
              <Menu
                className={`absolute inset-0 h-6 w-6 text-white transition-all duration-300 ${
                  mobileOpen ? "rotate-90 scale-0 opacity-0" : "opacity-100"
                }`}
              />
              <X
                className={`absolute inset-0 h-6 w-6 text-white transition-all duration-300 ${
                  mobileOpen ? "opacity-100" : "-rotate-90 scale-0 opacity-0"
                }`}
              />
            </div>
          </button>
        </div>
      </header>

      {/* Mobile Full-Screen Overlay */}
      <div
        className={`fixed inset-0 z-40 flex flex-col transition-all duration-500 lg:hidden ${
          mobileOpen
            ? "visible opacity-100"
            : "invisible opacity-0"
        }`}
      >
        {/* Background */}
        <div className="absolute inset-0 bg-dark" />

        {/* Diagonal orange accent */}
        <div
          className="absolute right-0 top-0 h-full w-1/3 bg-orange/5"
          style={{ clipPath: "polygon(100% 0, 0 0, 100% 100%)" }}
        />

        {/* Large decorative number */}
        <div className="pointer-events-none absolute -right-8 bottom-20 font-display text-[20rem] font-bold leading-none text-white/[0.03]">
          O
        </div>

        {/* Navigation Content */}
        <nav className="relative flex flex-1 flex-col justify-center px-10 pt-24">
          {NAV_ITEMS.map((item, index) =>
            item.children ? (
              <div key={item.label}>
                <button
                  onClick={() => setMobileDropdownOpen(!mobileDropdownOpen)}
                  className={`group flex w-full items-center justify-between border-b border-white/10 py-4 transition-all duration-500 ${
                    mobileOpen
                      ? "translate-x-0 opacity-100"
                      : "-translate-x-10 opacity-0"
                  }`}
                  style={{ transitionDelay: mobileOpen ? `${index * 80}ms` : "0ms" }}
                >
                  <span className="mr-4 font-display text-sm text-orange/60">
                    0{index + 1}
                  </span>
                  <span className="font-display text-3xl font-bold uppercase tracking-wider text-white">
                    {item.label}
                  </span>
                  <ChevronDown
                    className={`h-6 w-6 text-orange transition-transform duration-300 ${
                      mobileDropdownOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {/* Mobile Dropdown Items */}
                <div
                  className={`overflow-hidden transition-all duration-400 ${
                    mobileDropdownOpen ? "max-h-80" : "max-h-0"
                  }`}
                >
                  <div className="border-b border-white/10 py-2 pl-6">
                    {item.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        onClick={closeMobile}
                        className="flex items-center gap-3 py-3 text-lg text-white/60 transition-colors hover:text-orange"
                      >
                        <span className="h-1.5 w-1.5 rounded-full bg-orange" />
                        <span className="font-display uppercase tracking-wider">
                          {child.label}
                        </span>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              <Link
                key={item.label}
                href={item.href}
                onClick={closeMobile}
                className={`group flex items-center border-b border-white/10 py-4 transition-all duration-500 ${
                  mobileOpen
                    ? "translate-x-0 opacity-100"
                    : "-translate-x-10 opacity-0"
                }`}
                style={{ transitionDelay: mobileOpen ? `${index * 80}ms` : "0ms" }}
              >
                <span className="mr-4 font-display text-sm text-orange/60">
                  0{index + 1}
                </span>
                <span className="font-display text-3xl font-bold uppercase tracking-wider text-white transition-colors group-hover:text-orange">
                  {item.label}
                </span>
              </Link>
            )
          )}

          {/* Mobile CTA */}
          <div
            className={`mt-10 transition-all duration-500 ${
              mobileOpen
                ? "translate-y-0 opacity-100"
                : "translate-y-6 opacity-0"
            }`}
            style={{ transitionDelay: mobileOpen ? "500ms" : "0ms" }}
          >
            <Link
              href="/kontakt"
              onClick={closeMobile}
              className="inline-block bg-orange px-10 py-4 font-display text-lg font-bold uppercase tracking-widest text-white -skew-x-6 transition-all hover:bg-orange-dark"
            >
              <span className="inline-block skew-x-6">Termin vereinbaren</span>
            </Link>
          </div>
        </nav>
      </div>
    </>
  );
}
