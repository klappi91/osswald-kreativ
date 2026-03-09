"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowRight, ChevronDown } from "lucide-react";

export function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const accentLineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      // ---- Entrance timeline ----
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      // Accent line wipe-in
      tl.fromTo(
        accentLineRef.current,
        { scaleX: 0, transformOrigin: "left center" },
        { scaleX: 1, duration: 0.8 }
      );

      // Badge pop
      tl.fromTo(
        "[data-hero-badge]",
        { opacity: 0, y: 20, scale: 0.9 },
        { opacity: 1, y: 0, scale: 1, duration: 0.5 },
        "-=0.4"
      );

      // Staggered headline words
      const words = headlineRef.current?.querySelectorAll(".hero-word");
      if (words?.length) {
        tl.fromTo(
          words,
          { opacity: 0, y: 80, rotateX: -40 },
          {
            opacity: 1,
            y: 0,
            rotateX: 0,
            duration: 0.7,
            stagger: 0.12,
          },
          "-=0.3"
        );
      }

      // Subline + description slide up
      tl.fromTo(
        "[data-hero-sub]",
        { opacity: 0, y: 40 },
        { opacity: 1, y: 0, duration: 0.6 },
        "-=0.3"
      );

      tl.fromTo(
        "[data-hero-desc]",
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.5 },
        "-=0.3"
      );

      // CTAs
      tl.fromTo(
        "[data-hero-ctas]",
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.5 },
        "-=0.2"
      );

      // Scroll indicator
      tl.fromTo(
        "[data-hero-scroll]",
        { opacity: 0 },
        { opacity: 1, duration: 0.6 },
        "-=0.1"
      );

      // ---- Parallax on background image ----
      gsap.to(bgRef.current, {
        yPercent: 30,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });

      // ---- Content fade-out on scroll ----
      gsap.to(contentRef.current, {
        opacity: 0,
        y: -60,
        ease: "power2.in",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "25% top",
          end: "60% top",
          scrub: true,
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen w-full overflow-hidden"
    >
      {/* Background image with overlay */}
      <div
        ref={bgRef}
        className="absolute inset-0 -top-[15%] h-[130%] w-full"
      >
        <div
          className="absolute inset-0 h-full w-full bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('/images/emotionheader5810301942.jpg')",
          }}
        />
        {/* Gradient overlays for depth */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#1a1a1a]/90 via-[#1a1a1a]/60 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a]/80 via-transparent to-[#1a1a1a]/30" />
      </div>

      {/* Decorative orange accent shape */}
      <div
        ref={accentLineRef}
        className="absolute left-0 top-[38%] z-10 h-[3px] w-[min(35vw,420px)] bg-[#f28627]"
      />
      {/* Vertical accent */}
      <div className="absolute left-[6vw] top-0 z-10 h-full w-[2px] bg-gradient-to-b from-transparent via-[#f28627]/40 to-transparent" />

      {/* Content */}
      <div
        ref={contentRef}
        className="relative z-20 flex min-h-screen items-center"
      >
        <div className="mx-auto w-full max-w-7xl px-6 py-32 sm:px-10 lg:px-16">
          <div className="max-w-3xl">
            {/* Badge */}
            <div data-hero-badge className="mb-8 opacity-0">
              <span className="inline-flex items-center gap-2 rounded-full bg-[#f28627] px-5 py-2 text-sm font-bold uppercase tracking-wider text-white shadow-lg shadow-[#f28627]/30">
                <span className="inline-block h-2 w-2 animate-pulse rounded-full bg-white" />
                NEU: Steinschlag Reparatur!
              </span>
            </div>

            {/* Headline */}
            <h1
              ref={headlineRef}
              className="font-[var(--font-display)] text-[clamp(3.5rem,8vw,8rem)] font-bold uppercase leading-[0.9] tracking-tight text-white"
              style={{ perspective: "600px" }}
            >
              <span className="hero-word inline-block opacity-0">
                Auto
              </span>
              <span className="hero-word inline-block opacity-0">
                haus
              </span>
              <br />
              <span className="hero-word inline-block text-[#f28627] opacity-0">
                O&szlig;wald
              </span>
            </h1>

            {/* Subline */}
            <p
              data-hero-sub
              className="mt-6 font-[var(--font-display)] text-[clamp(1.25rem,2.5vw,2rem)] font-medium uppercase tracking-widest text-white/80 opacity-0"
            >
              Meisterqualit&auml;t f&uuml;r alle Marken
            </p>

            {/* Description */}
            <p
              data-hero-desc
              className="mt-6 max-w-xl text-lg leading-relaxed text-white/70 opacity-0 sm:text-xl"
            >
              Ihr vertrauensvoller Partner f&uuml;r Wartung, Reparatur und
              Service in Diepholz. Sofortservice ohne Termin.
            </p>

            {/* CTAs */}
            <div
              data-hero-ctas
              className="mt-10 flex flex-col gap-4 opacity-0 sm:flex-row sm:items-center"
            >
              <Link
                href="/kontakt"
                className="group inline-flex items-center justify-center gap-3 rounded-lg bg-[#f28627] px-8 py-4 text-lg font-bold text-white shadow-xl shadow-[#f28627]/25 transition-all duration-300 hover:bg-[#d4710e] hover:shadow-2xl hover:shadow-[#f28627]/40 hover:-translate-y-0.5"
              >
                Jetzt Termin vereinbaren
                <ArrowRight className="size-5 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
              <Link
                href="/leistungen"
                className="group inline-flex items-center justify-center gap-3 rounded-lg border-2 border-white/30 px-8 py-4 text-lg font-bold text-white backdrop-blur-sm transition-all duration-300 hover:border-[#f28627] hover:bg-white/5"
              >
                Unsere Leistungen
                <ArrowRight className="size-5 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        data-hero-scroll
        className="absolute bottom-10 left-1/2 z-20 -translate-x-1/2 opacity-0"
      >
        <div className="flex flex-col items-center gap-2 text-white/50">
          <span className="text-xs uppercase tracking-[0.3em]">Scrollen</span>
          <ChevronDown className="size-5 animate-bounce" />
        </div>
      </div>
    </section>
  );
}
