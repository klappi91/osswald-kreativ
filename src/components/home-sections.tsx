"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  Wrench,
  Shield,
  Paintbrush,
  Cog,
  CheckCircle,
  Car,
  Phone,
  Mail,
  MapPin,
  Clock,
  ArrowRight,
  Users,
  Star,
  Lightbulb,
} from "lucide-react";

/* ──────────────────────────────────────────
   Animated wrapper — fades + slides children
   into view when they enter the viewport.
   ────────────────────────────────────────── */
function AnimatedSection({
  children,
  className = "",
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const el = ref.current;
    if (!el) return;

    const ctx = gsap.context(() => {
      gsap.from(el, {
        y: 80,
        opacity: 0,
        duration: 1,
        delay,
        ease: "power3.out",
        scrollTrigger: {
          trigger: el,
          start: "top 85%",
          end: "top 50%",
          toggleActions: "play none none none",
        },
      });
    });

    return () => ctx.revert();
  }, [delay]);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}

/* ──────────────────────────────────────────
   Parallax image — subtle vertical shift on scroll
   ────────────────────────────────────────── */
function ParallaxImage({
  src,
  alt,
  className = "",
}: {
  src: string;
  alt: string;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const el = ref.current;
    if (!el) return;

    const ctx = gsap.context(() => {
      gsap.to(el.querySelector("img"), {
        yPercent: -15,
        ease: "none",
        scrollTrigger: {
          trigger: el,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <div ref={ref} className={`overflow-hidden ${className}`}>
      <Image
        src={src}
        alt={alt}
        fill
        className="object-cover scale-125"
        sizes="(max-width: 768px) 100vw, 50vw"
      />
    </div>
  );
}

/* ══════════════════════════════════════════
   Service card data
   ══════════════════════════════════════════ */
const services = [
  {
    icon: Wrench,
    title: "Reparaturen aller Art",
    desc: "Von Bremsen bis Auspuff — wir reparieren zuverlässig und schnell.",
    href: "/leistungen",
  },
  {
    icon: Shield,
    title: "Steinschlag Reparatur",
    desc: "Schnelle Beseitigung von Steinschlagschäden an der Windschutzscheibe.",
    badge: "NEU",
    href: "/leistungen",
  },
  {
    icon: Paintbrush,
    title: "Karosserie & Lackierung",
    desc: "Professionelle Karosseriearbeit und Lackierung nach höchsten Standards.",
    href: "/leistungen",
  },
  {
    icon: Cog,
    title: "Motor & Getriebe",
    desc: "Diagnose und Reparatur von Motor- und Getriebeproblemen aller Art.",
    href: "/leistungen",
  },
  {
    icon: CheckCircle,
    title: "TÜV / AU",
    desc: "Hauptuntersuchung und Abgasuntersuchung direkt bei uns im Haus.",
    href: "/leistungen",
  },
  {
    icon: Car,
    title: "Oldtimer & US-Cars",
    desc: "Spezialwissen für klassische Fahrzeuge und amerikanische Automobile.",
    href: "/leistungen",
  },
];

/* ══════════════════════════════════════════
   USP data
   ══════════════════════════════════════════ */
const usps = [
  {
    num: "01",
    icon: Lightbulb,
    title: "Problemlöser",
    desc: "Wir finden die Lösung — auch wenn andere Werkstätten aufgeben.",
  },
  {
    num: "02",
    icon: Car,
    title: "24h Annahme",
    desc: "Fahrzeug jederzeit abstellen, auch außerhalb der Öffnungszeiten.",
  },
  {
    num: "03",
    icon: Star,
    title: "Meisterqualität",
    desc: "Kfz-Meister Bernd Oßwald und sein erfahrenes Team.",
  },
  {
    num: "04",
    icon: CheckCircle,
    title: "Faire Preise",
    desc: "Kostenvoranschlag vor Auftrag — keine bösen Überraschungen.",
  },
  {
    num: "05",
    icon: Wrench,
    title: "Alle Marken",
    desc: "Typenoffen — wir betreuen jedes Fahrzeug, ohne Einschränkung.",
  },
  {
    num: "06",
    icon: Car,
    title: "Ersatzwagen",
    desc: "Mobil bleiben, während wir Ihr Fahrzeug reparieren.",
  },
];

/* ══════════════════════════════════════════════════
   HOME SECTIONS — renders everything below the hero
   ══════════════════════════════════════════════════ */
export function HomeSections() {
  const counterRef = useRef<HTMLDivElement>(null);

  /* Animate USP numbers counting up */
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const el = counterRef.current;
    if (!el) return;

    const ctx = gsap.context(() => {
      const nums = el.querySelectorAll(".usp-num");
      nums.forEach((n) => {
        gsap.from(n, {
          textContent: 0,
          duration: 0.6,
          ease: "power1.out",
          scrollTrigger: {
            trigger: n,
            start: "top 85%",
            toggleActions: "play none none none",
          },
        });
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <>
      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
          SECTION 2 — WELCOME / ABOUT
         ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section className="relative overflow-hidden bg-white py-24 md:py-36">
        {/* Background decorative element */}
        <div className="absolute right-0 top-0 h-full w-1/2 bg-[#fafafa] hidden lg:block" />
        <div className="absolute left-[8vw] top-12 h-[200px] w-[3px] bg-gradient-to-b from-[#f28627] to-transparent" />

        <div className="relative mx-auto max-w-7xl px-6 sm:px-10 lg:px-16">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-0">
            {/* Text — left side */}
            <AnimatedSection className="lg:col-span-6 lg:pr-16">
              <span className="mb-4 inline-block font-[var(--font-display)] text-sm font-semibold uppercase tracking-[0.3em] text-[#f28627]">
                Willkommen
              </span>
              <h2 className="font-[var(--font-display)] text-[clamp(2.5rem,5vw,4.5rem)] font-bold uppercase leading-[0.95] tracking-tight text-[#1a1a1a]">
                Ihr Partner{" "}
                <span className="text-gradient">für alle Marken</span>
              </h2>
              <div className="mt-2 h-[3px] w-24 bg-[#f28627]" />
              <blockquote className="mt-8 border-l-4 border-[#f28627] pl-6 text-lg leading-relaxed text-[#474747] md:text-xl">
                &ldquo;Sie suchen einen vertrauensvollen und zuverlässigen
                Ansprechpartner, wenn es um die Wartung oder die Reparatur Ihres
                Autos geht? Dann sind Sie bei uns genau richtig!&rdquo;
              </blockquote>
              <p className="mt-6 text-base leading-relaxed text-[#474747]/80 md:text-lg">
                Mit unserem kompetenten Rundum-Service für alle Marken, bietet
                Ihnen unsere Kfz-Reparaturwerkstatt Meisterqualität zu
                erschwinglichen Preisen. Auf verbaute Neuteile gewähren wir
                selbstverständlich Garantie nach den Bedingungen der Hersteller.
              </p>
              <Link
                href="/leistungen"
                className="group mt-8 inline-flex items-center gap-2 font-[var(--font-display)] text-sm font-semibold uppercase tracking-widest text-[#f28627] transition-colors hover:text-[#d4710e]"
              >
                Mehr erfahren
                <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </AnimatedSection>

            {/* Image — right side, overlapping */}
            <AnimatedSection
              className="relative lg:col-span-6"
              delay={0.2}
            >
              <div className="relative">
                {/* Orange accent box behind image */}
                <div className="absolute -right-4 -top-4 h-full w-full rounded-sm bg-[#f28627]/10 md:-right-8 md:-top-8" />
                <div className="relative aspect-[4/3] w-full overflow-hidden rounded-sm shadow-2xl lg:-ml-12">
                  <ParallaxImage
                    src="/images/cache_2447480172.jpg"
                    alt="Werkstatt Autohaus Oßwald"
                    className="absolute inset-0"
                  />
                </div>
                {/* Floating badge */}
                <div className="absolute -bottom-6 -left-4 rounded-sm bg-[#1a1a1a] px-6 py-4 shadow-xl md:-bottom-8 md:-left-8">
                  <p className="font-[var(--font-display)] text-3xl font-bold text-[#f28627]">
                    25+
                  </p>
                  <p className="text-sm font-semibold uppercase tracking-wider text-white/70">
                    Jahre Erfahrung
                  </p>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
          SECTION 3 — SERVICES (dark background)
         ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section className="relative overflow-hidden bg-[#1a1a1a] py-24 md:py-36">
        {/* Subtle grid background */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
        {/* Accent glow */}
        <div className="absolute -right-32 top-1/4 h-96 w-96 rounded-full bg-[#f28627]/5 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-6 sm:px-10 lg:px-16">
          {/* Section header */}
          <AnimatedSection className="mb-16 max-w-2xl">
            <span className="mb-4 inline-block font-[var(--font-display)] text-sm font-semibold uppercase tracking-[0.3em] text-[#f28627]">
              Leistungen
            </span>
            <h2 className="font-[var(--font-display)] text-[clamp(2.5rem,5vw,4.5rem)] font-bold uppercase leading-[0.95] tracking-tight text-white">
              Was wir{" "}
              <span className="text-[#f28627]">für Sie tun</span>
            </h2>
            <div className="mt-4 h-[3px] w-24 bg-[#f28627]" />
          </AnimatedSection>

          {/* Service cards grid */}
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <AnimatedSection key={service.title}>
                <Link
                  href={service.href}
                  className="group relative block overflow-hidden rounded-sm border border-white/5 bg-[#2a2a2a] p-8 transition-all duration-500 hover:border-[#f28627]/30 hover:bg-[#2a2a2a]/80 hover:shadow-xl hover:shadow-[#f28627]/5"
                >
                  {/* Hover accent line */}
                  <div className="absolute left-0 top-0 h-full w-[3px] scale-y-0 bg-[#f28627] transition-transform duration-500 origin-top group-hover:scale-y-100" />

                  <div className="relative">
                    {service.badge && (
                      <span className="absolute -right-2 -top-2 rounded-sm bg-[#f28627] px-3 py-1 text-xs font-bold uppercase tracking-wider text-white shadow-lg">
                        {service.badge}
                      </span>
                    )}
                    <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-sm bg-[#f28627]/10 text-[#f28627] transition-colors duration-300 group-hover:bg-[#f28627] group-hover:text-white">
                      <service.icon className="size-7" strokeWidth={1.5} />
                    </div>
                    <h3 className="font-[var(--font-display)] text-xl font-semibold uppercase tracking-wide text-white">
                      {service.title}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-white/50 group-hover:text-white/70 transition-colors duration-300">
                      {service.desc}
                    </p>
                    <div className="mt-6 flex items-center gap-2 text-sm font-semibold text-[#f28627] opacity-0 transition-all duration-300 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0">
                      Mehr erfahren
                      <ArrowRight className="size-4" />
                    </div>
                  </div>
                </Link>
              </AnimatedSection>
            ))}
          </div>

          {/* CTA under services */}
          <AnimatedSection className="mt-12 text-center">
            <Link
              href="/leistungen"
              className="group inline-flex items-center gap-3 rounded-sm bg-[#f28627] px-8 py-4 text-lg font-bold text-white shadow-xl shadow-[#f28627]/20 transition-all duration-300 hover:bg-[#d4710e] hover:shadow-2xl hover:shadow-[#f28627]/30 hover:-translate-y-0.5"
            >
              Alle Leistungen ansehen
              <ArrowRight className="size-5 transition-transform group-hover:translate-x-1" />
            </Link>
          </AnimatedSection>
        </div>
      </section>

      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
          SECTION 4 — USPs / WHY CHOOSE US
         ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section ref={counterRef} className="relative overflow-hidden bg-white py-24 md:py-36">
        {/* Large decorative number */}
        <div className="absolute -right-16 top-1/2 -translate-y-1/2 font-[var(--font-display)] text-[20rem] font-bold uppercase leading-none text-[#f28627]/[0.03] pointer-events-none select-none hidden xl:block">
          06
        </div>
        {/* Vertical line accent */}
        <div className="absolute right-[8vw] top-0 h-full w-[2px] bg-gradient-to-b from-transparent via-[#f28627]/20 to-transparent hidden lg:block" />

        <div className="relative mx-auto max-w-7xl px-6 sm:px-10 lg:px-16">
          {/* Section header */}
          <AnimatedSection className="mb-16 text-center">
            <span className="mb-4 inline-block font-[var(--font-display)] text-sm font-semibold uppercase tracking-[0.3em] text-[#f28627]">
              Warum wir
            </span>
            <h2 className="font-[var(--font-display)] text-[clamp(2.5rem,5vw,4.5rem)] font-bold uppercase leading-[0.95] tracking-tight text-[#1a1a1a]">
              Das macht uns{" "}
              <span className="text-gradient">besonders</span>
            </h2>
            <div className="mx-auto mt-4 h-[3px] w-24 bg-[#f28627]" />
          </AnimatedSection>

          {/* USP grid — alternating layout */}
          <div className="grid grid-cols-1 gap-0 md:grid-cols-2 lg:grid-cols-3">
            {usps.map((usp, i) => (
              <AnimatedSection key={usp.title}>
                <div
                  className={`group relative border border-[#e5e5e5]/60 p-8 transition-all duration-500 hover:bg-[#1a1a1a] hover:border-[#1a1a1a] md:p-10 ${
                    i % 2 === 1 ? "md:translate-y-8" : ""
                  }`}
                >
                  {/* Large number background */}
                  <span className="absolute right-4 top-4 font-[var(--font-display)] text-6xl font-bold text-[#f28627]/[0.07] transition-colors duration-500 group-hover:text-[#f28627]/20 md:text-7xl">
                    {usp.num}
                  </span>

                  <div className="relative">
                    <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-full bg-[#f28627]/10 text-[#f28627] transition-all duration-500 group-hover:bg-[#f28627] group-hover:text-white group-hover:scale-110">
                      <usp.icon className="size-6" strokeWidth={1.5} />
                    </div>
                    <h3 className="font-[var(--font-display)] text-xl font-semibold uppercase tracking-wide text-[#1a1a1a] transition-colors duration-500 group-hover:text-white">
                      {usp.title}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-[#474747]/70 transition-colors duration-500 group-hover:text-white/60">
                      {usp.desc}
                    </p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
          SECTION 5 — TEAM TEASER
         ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section className="relative overflow-hidden bg-[#fafafa] py-24 md:py-36">
        <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-16">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12">
            {/* Image — left side with creative overlap */}
            <AnimatedSection className="relative lg:col-span-7">
              <div className="relative">
                {/* Decorative orange block */}
                <div className="absolute -left-6 -bottom-6 h-2/3 w-2/3 bg-[#f28627]/10 rounded-sm md:-left-10 md:-bottom-10" />
                {/* Main image */}
                <div className="relative aspect-[16/10] w-full overflow-hidden rounded-sm shadow-2xl">
                  <ParallaxImage
                    src="/images/cache_2447478022.JPG"
                    alt="Team Autohaus Oßwald"
                    className="absolute inset-0"
                  />
                  {/* Gradient overlay for text readability */}
                  <div className="absolute inset-0 bg-gradient-to-r from-[#1a1a1a]/40 to-transparent" />
                </div>
                {/* Floating element */}
                <div className="absolute -right-4 -top-4 flex h-24 w-24 items-center justify-center rounded-full bg-[#f28627] shadow-xl md:-right-8 md:-top-8 md:h-32 md:w-32">
                  <Users className="size-10 text-white md:size-14" strokeWidth={1.5} />
                </div>
              </div>
            </AnimatedSection>

            {/* Text — right side */}
            <AnimatedSection className="lg:col-span-5 lg:pl-8" delay={0.15}>
              <span className="mb-4 inline-block font-[var(--font-display)] text-sm font-semibold uppercase tracking-[0.3em] text-[#f28627]">
                Unser Team
              </span>
              <h2 className="font-[var(--font-display)] text-[clamp(2rem,4vw,3.5rem)] font-bold uppercase leading-[0.95] tracking-tight text-[#1a1a1a]">
                Ein Familienbetrieb{" "}
                <span className="text-gradient">mit Herz</span>
              </h2>
              <div className="mt-4 h-[3px] w-24 bg-[#f28627]" />
              <p className="mt-6 text-lg leading-relaxed text-[#474747]">
                Lernen Sie unser Team kennen — Menschen, die mit Leidenschaft
                und Fachwissen für Ihr Fahrzeug arbeiten. Bei uns sind Sie nicht
                nur Kunde, sondern Teil der Familie.
              </p>
              <Link
                href="/unser-betrieb"
                className="group mt-8 inline-flex items-center gap-3 rounded-sm bg-[#1a1a1a] px-8 py-4 text-lg font-bold text-white shadow-xl transition-all duration-300 hover:bg-[#f28627] hover:shadow-2xl hover:shadow-[#f28627]/25 hover:-translate-y-0.5"
              >
                Unser Team
                <ArrowRight className="size-5 transition-transform group-hover:translate-x-1" />
              </Link>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
          SECTION 6 — CONTACT CTA (orange bg)
         ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section className="relative overflow-hidden bg-[#f28627]">
        {/* Decorative shapes */}
        <div className="absolute -left-32 -top-32 h-96 w-96 rounded-full bg-white/5" />
        <div className="absolute -right-16 -bottom-16 h-64 w-64 rounded-full bg-[#d4710e]/30" />
        <div className="absolute right-1/4 top-0 h-full w-[2px] bg-white/10 hidden lg:block" />

        <div className="relative mx-auto max-w-7xl px-6 py-24 sm:px-10 md:py-32 lg:px-16">
          <div className="grid grid-cols-1 gap-16 lg:grid-cols-12 lg:items-center">
            {/* Left — headline + CTA */}
            <AnimatedSection className="lg:col-span-7">
              <h2 className="font-[var(--font-display)] text-[clamp(2.5rem,6vw,5rem)] font-bold uppercase leading-[0.9] tracking-tight text-white">
                Bereit für den{" "}
                <span className="relative inline-block">
                  besten Service
                  <span className="absolute -bottom-2 left-0 h-[4px] w-full bg-white/30" />
                </span>
                ?
              </h2>
              <p className="mt-6 max-w-lg text-lg leading-relaxed text-white/80">
                Kommen Sie vorbei oder rufen Sie uns an. Wir freuen uns auf Sie
                und Ihr Fahrzeug!
              </p>
              <Link
                href="/kontakt"
                className="group mt-10 inline-flex items-center gap-3 rounded-sm bg-white px-8 py-4 text-lg font-bold text-[#f28627] shadow-xl transition-all duration-300 hover:bg-[#1a1a1a] hover:text-white hover:shadow-2xl hover:-translate-y-0.5"
              >
                Kontakt aufnehmen
                <ArrowRight className="size-5 transition-transform group-hover:translate-x-1" />
              </Link>
            </AnimatedSection>

            {/* Right — contact info */}
            <AnimatedSection className="lg:col-span-5" delay={0.15}>
              <div className="space-y-6">
                {/* Address */}
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-white/15 backdrop-blur-sm">
                    <MapPin className="size-6 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-white">Adresse</p>
                    <p className="text-white/75">
                      Auf dem Esch 21
                      <br />
                      49356 Diepholz
                    </p>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-white/15 backdrop-blur-sm">
                    <Phone className="size-6 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-white">Telefon</p>
                    <a
                      href="tel:+495441975551"
                      className="text-white/75 transition-colors hover:text-white"
                    >
                      +49 5441 / 975551
                    </a>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-white/15 backdrop-blur-sm">
                    <Mail className="size-6 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-white">E-Mail</p>
                    <a
                      href="mailto:autohaus-osswald@web.de"
                      className="text-white/75 transition-colors hover:text-white"
                    >
                      autohaus-osswald@web.de
                    </a>
                  </div>
                </div>

                {/* Hours */}
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-white/15 backdrop-blur-sm">
                    <Clock className="size-6 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-white">Öffnungszeiten</p>
                    <p className="text-white/75">
                      Mo — Fr: 8:00 — 17:00 Uhr
                      <br />
                      Sa: 9:00 — 12:00 Uhr
                    </p>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </>
  );
}
