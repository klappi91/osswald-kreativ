"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const items = [
  { value: "25+", label: "Jahre Erfahrung" },
  { value: "Alle", label: "Marken" },
  { value: "Sofort", label: "Service" },
  { value: "Meister", label: "Qualität" },
];

export function TrustBar() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const el = ref.current;
    if (!el) return;

    const ctx = gsap.context(() => {
      gsap.from(el.querySelectorAll(".trust-item"), {
        y: 30,
        opacity: 0,
        duration: 0.6,
        stagger: 0.1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: el,
          start: "top 90%",
          toggleActions: "play none none none",
        },
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <section ref={ref} className="bg-[#1a1a1a] py-8 md:py-10">
      <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-16">
        <div className="grid grid-cols-2 gap-6 md:grid-cols-4 md:gap-8">
          {items.map((item) => (
            <div
              key={item.label}
              className="trust-item text-center"
            >
              <p className="font-[var(--font-display)] text-3xl font-bold text-[#f28627] md:text-4xl">
                {item.value}
              </p>
              <p className="mt-1 text-sm font-semibold uppercase tracking-wider text-white/60">
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
