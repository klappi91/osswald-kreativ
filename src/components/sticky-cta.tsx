"use client";

import { useEffect, useState } from "react";
import { Phone } from "lucide-react";

export function StickyCta() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    let heroThreshold = 0;
    let contactVisible = false;
    let menuOpen = false;

    const update = () => {
      setVisible(!menuOpen && !contactVisible && window.scrollY > heroThreshold);
    };

    // Calculate hero height threshold (80vh)
    heroThreshold = window.innerHeight * 0.8;

    // Scroll listener
    const onScroll = () => {
      update();
    };
    window.addEventListener("scroll", onScroll, { passive: true });

    // IntersectionObserver for contact section
    const contactEl = document.getElementById("contact-cta");
    let contactObs: IntersectionObserver | undefined;
    if (contactEl) {
      contactObs = new IntersectionObserver(
        ([entry]) => {
          contactVisible = entry.isIntersecting;
          update();
        },
        { threshold: 0 }
      );
      contactObs.observe(contactEl);
    }

    // MutationObserver for mobile menu (body overflow hidden)
    const bodyObs = new MutationObserver(() => {
      menuOpen = document.body.style.overflow === "hidden";
      update();
    });
    bodyObs.observe(document.body, {
      attributes: true,
      attributeFilter: ["style"],
    });

    return () => {
      window.removeEventListener("scroll", onScroll);
      contactObs?.disconnect();
      bodyObs.disconnect();
    };
  }, []);

  return (
    <div
      className={`fixed bottom-6 left-1/2 z-30 -translate-x-1/2 lg:hidden transition-all duration-300 ${
        visible
          ? "translate-y-0 opacity-100"
          : "translate-y-16 opacity-0 pointer-events-none"
      }`}
    >
      <a
        href="tel:+495441975551"
        className="flex items-center gap-3 rounded-full bg-[#f28627] px-6 py-3 text-base font-bold text-white shadow-xl shadow-[#f28627]/30"
      >
        <Phone className="size-5" />
        Jetzt anrufen
      </a>
    </div>
  );
}
