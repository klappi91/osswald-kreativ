import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  Wrench,
  Shield,
  Car,
  Cog,
  Gauge,
  Thermometer,
  Clock,
  Sparkles,
  ArrowRight,
  Check,
  Phone,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Leistungen",
  description:
    "Kfz-Reparaturen aller Art, Inspektionen, Karosserieinstandsetzung, Oldtimer Restauration und mehr. Autohaus Osswald in Diepholz.",
};

const services = [
  { label: "Reparaturen aller Art und Modellvarianten", icon: Wrench },
  { label: "Steinschlag Reparatur", icon: Shield },
  { label: "Unfall- und Karosserieinstandsetzung", icon: Car },
  { label: "Lackierung", icon: Sparkles },
  { label: "Motorinstandsetzung", icon: Cog },
  { label: "Getriebeinstandsetzung", icon: Cog },
  { label: "Wartung und Inspektionen", icon: Gauge },
  { label: "Ölwechsel", icon: Gauge },
  { label: "Computergestützte Motordiagnose", icon: Gauge },
  { label: "Klimaanlagenservice", icon: Thermometer },
  { label: "Oldtimer Restauration", icon: Clock },
  { label: "Restauration/Umbauten von US-Cars", icon: Car },
  { label: "TÜV / AU", icon: Shield },
  { label: "Ersatzteilverkauf", icon: Wrench },
];

const subServices = [
  { label: "Inspektion", href: "/leistungen/inspektion" },
  { label: "24-Stunden-Annahme", href: "/leistungen/24-stunden-annahme" },
  { label: "Ersatzwagen", href: "/leistungen/ersatzwagen" },
  {
    label: "Reifen- und Winterservice",
    href: "/leistungen/reifen-und-winterservice",
  },
];

export default function LeistungenPage() {
  return (
    <>
      {/* ── Hero Banner ── */}
      <section className="relative flex h-[40vh] min-h-[320px] items-end overflow-hidden bg-[#1a1a1a]">
        {/* Background image */}
        <div className="absolute inset-0">
          <Image
            src="/images/cache_2447480195.jpg"
            alt="Werkstatt Autohaus Osswald"
            fill
            className="object-cover object-center"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#1a1a1a]/90 via-[#1a1a1a]/70 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a] via-[#1a1a1a]/30 to-transparent" />
        </div>

        {/* Decorative accent */}
        <div className="absolute bottom-0 left-0 h-1 w-1/3 bg-[#f28627]" />
        <div className="absolute left-[6vw] top-0 hidden h-full w-[2px] bg-gradient-to-b from-transparent via-[#f28627]/40 to-transparent md:block" />

        <div className="relative z-10 mx-auto w-full max-w-7xl px-6 pb-12 sm:px-10 lg:px-16">
          <p className="mb-3 font-[var(--font-display)] text-sm font-medium uppercase tracking-[0.3em] text-[#f28627]">
            Autohaus Osswald
          </p>
          <h1 className="font-[var(--font-display)] text-[clamp(3rem,7vw,7rem)] font-bold uppercase leading-[0.9] tracking-tight text-white">
            Leistungen
          </h1>
        </div>
      </section>

      {/* ── Intro Section ── */}
      <section className="relative overflow-hidden bg-white py-20 sm:py-28">
        {/* Large decorative letter */}
        <div className="pointer-events-none absolute -right-16 -top-10 select-none font-[var(--font-display)] text-[20rem] font-bold leading-none text-[#f28627]/[0.04]">
          L
        </div>

        <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-16">
          <div className="grid gap-12 lg:grid-cols-[1fr_1.2fr] lg:gap-20">
            {/* Left column */}
            <div>
              <div className="mb-6 h-1 w-16 bg-[#f28627]" />
              <h2 className="font-[var(--font-display)] text-3xl font-bold uppercase leading-tight tracking-tight text-[#1a1a1a] sm:text-4xl">
                Typenoffen.
                <br />
                <span className="text-[#f28627]">Kompetent.</span>
              </h2>
              <p className="mt-6 text-lg leading-relaxed text-[#474747]">
                Wir arbeiten typenoffen und reparieren fast jedes Auto, wobei wir
                durch jahrelange Erfahrungen auch unsere Grenzen kennen gelernt
                haben! Egal ob Kupplung, Bremsen, Auspuff, Motor, Getriebe,
                Fahrwerk, Elektrik &ndash; wir können das!!
              </p>
              <p className="mt-4 text-lg leading-relaxed text-[#474747]">
                Für Durchsichten und Wartungen nutzen wir die Servicevorgaben der
                Fahrzeughersteller. Oft kommen Kunden mit Problemen, die andere
                Werkstätten nicht lösen konnten. Wenn wir es nicht schaffen,
                wissen wir fast immer einen Lösungsweg oder kennen Partner, die
                helfen können.
              </p>
            </div>

            {/* Right column — image */}
            <div className="relative">
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src="/images/cache_2447480202.jpg"
                  alt="Werkstatt Arbeit"
                  fill
                  className="object-cover"
                />
                {/* Asymmetric overlay accent */}
                <div className="absolute bottom-0 left-0 h-2 w-2/3 bg-[#f28627]" />
              </div>
              {/* Offset accent block */}
              <div className="absolute -bottom-6 -right-4 -z-10 h-full w-full bg-[#f28627]/10" />
            </div>
          </div>
        </div>
      </section>

      {/* ── Problemlöser USP Callout ── */}
      <section className="relative overflow-hidden bg-[#1a1a1a] py-16 sm:py-20">
        {/* Diagonal accent */}
        <div
          className="absolute left-0 top-0 h-full w-1/4 bg-[#f28627]/[0.06]"
          style={{ clipPath: "polygon(0 0, 100% 0, 0 100%)" }}
        />
        <div className="relative mx-auto max-w-7xl px-6 sm:px-10 lg:px-16">
          <div className="flex flex-col items-center gap-8 md:flex-row md:gap-12">
            {/* Icon block */}
            <div className="flex h-20 w-20 shrink-0 items-center justify-center bg-[#f28627]">
              <Wrench className="h-10 w-10 text-white" />
            </div>
            {/* Text */}
            <div>
              <h2 className="font-[var(--font-display)] text-2xl font-bold uppercase tracking-tight text-white sm:text-3xl">
                Andere geben auf.{" "}
                <span className="text-[#f28627]">Wir finden die Lösung.</span>
              </h2>
              <p className="mt-4 max-w-2xl text-lg leading-relaxed text-white/70">
                Oft kommen Kunden mit Problemen, die andere Werkstätten nicht
                lösen konnten. Wir finden die Lösung &mdash; und wenn wir es
                nicht schaffen, wissen wir fast immer einen Lösungsweg oder
                kennen Partner, die helfen können.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Trust / Transparency Section ── */}
      <section className="relative bg-[#f8f8f8] py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-16">
          <div className="mx-auto max-w-3xl text-center">
            <Shield className="mx-auto mb-6 h-12 w-12 text-[#f28627]" />
            <h2 className="font-[var(--font-display)] text-3xl font-bold uppercase tracking-tight text-[#1a1a1a] sm:text-4xl">
              Transparenz &amp; Vertrauen
            </h2>
            <div className="mx-auto mt-4 h-1 w-16 bg-[#f28627]" />
            <p className="mt-8 text-lg leading-relaxed text-[#474747]">
              Vor Auftragserteilung wird Ihnen ein Kostenvoranschlag unterbreitet
              und ein verbindlicher Fertigstellungstermin genannt. Bei
              auftretenden Problemen während der Reparaturdurchführung werden Sie
              sofort kontaktiert. Unangenehme &bdquo;Überraschungen&ldquo; bei
              der Fahrzeugabholung gibt es bei uns nicht!
            </p>
            <p className="mt-4 text-xl font-bold text-[#1a1a1a]">
              Wir wollen Ihr Vertrauen erringen und durch zufriedene Kunden
              werben.
            </p>
          </div>
        </div>
      </section>

      {/* ── Services Grid ── */}
      <section className="relative overflow-hidden bg-[#1a1a1a] py-20 sm:py-28">
        {/* Diagonal accent */}
        <div
          className="absolute right-0 top-0 h-full w-1/4 bg-[#f28627]/[0.04]"
          style={{ clipPath: "polygon(100% 0, 0 0, 100% 100%)" }}
        />

        <div className="relative mx-auto max-w-7xl px-6 sm:px-10 lg:px-16">
          <div className="mb-14">
            <div className="mb-4 h-1 w-16 bg-[#f28627]" />
            <h2 className="font-[var(--font-display)] text-4xl font-bold uppercase tracking-tight text-white sm:text-5xl">
              Unsere
              <br />
              <span className="text-[#f28627]">Leistungen</span>
            </h2>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {services.map((service, i) => {
              const Icon = service.icon;
              return (
                <div
                  key={i}
                  className="group relative border border-white/10 bg-white/[0.03] p-6 transition-all duration-300 hover:border-[#f28627]/40 hover:bg-white/[0.06]"
                >
                  <Icon className="mb-3 h-6 w-6 text-[#f28627] transition-transform duration-300 group-hover:scale-110" />
                  <p className="font-[var(--font-display)] text-sm font-medium uppercase tracking-wider text-white/90">
                    {service.label}
                  </p>
                  {/* Bottom accent on hover */}
                  <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-[#f28627] transition-all duration-500 group-hover:w-full" />
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Pricing Section (Dark) ── */}
      <section className="relative bg-[#222222] py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-16">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
            <div>
              <div className="mb-4 h-1 w-16 bg-[#f28627]" />
              <h2 className="font-[var(--font-display)] text-3xl font-bold uppercase tracking-tight text-white sm:text-4xl">
                Faire <span className="text-[#f28627]">Preisgestaltung</span>
              </h2>
              <p className="mt-6 text-lg leading-relaxed text-white/70">
                Unsere Preisgestaltung basiert auf Normzeitvorgaben der
                Hersteller und Stundenverrechnungssätzen.
                Festpreisvereinbarungen und Pauschalen werden individuell
                verhandelt und sind grundsätzlich möglich!
              </p>
              <p className="mt-4 text-lg leading-relaxed text-white/70">
                Sie entscheiden über die verwendeten Ersatzteile. Wir bieten
                Originalteile des Fahrzeugherstellers, Teile verschiedenster
                Anbieter vom freien Markt und Gebrauchtteile aus
                Autoverwertungen an.
              </p>
            </div>
            <div className="flex flex-col justify-center gap-5">
              {[
                "Kostenvoranschlag vor Auftragserteilung",
                "Verbindliche Fertigstellungstermine",
                "Festpreise auf Anfrage möglich",
                "Original-, Markt- oder Gebrauchtteile — Sie wählen",
                "Altteile auf Wunsch zurück oder Schadenserklärung",
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-4">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center bg-[#f28627]">
                    <Check className="h-5 w-5 text-white" />
                  </div>
                  <p className="text-lg text-white/80">{item}</p>
                </div>
              ))}

              {/* Garantie-Info */}
              <div className="mt-6 border-l-2 border-[#f28627]/50 pl-5">
                <p className="text-sm uppercase tracking-wider text-[#f28627]">
                  Garantie
                </p>
                <p className="mt-1 text-base leading-relaxed text-white/60">
                  Auf verbaute Neuteile gewähren wir Garantie nach den
                  Garantiebedingungen der Lieferanten oder Hersteller.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Sub-Services / Quick Links ── */}
      <section className="bg-white py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-16">
          <div className="mb-12 text-center">
            <h2 className="font-[var(--font-display)] text-3xl font-bold uppercase tracking-tight text-[#1a1a1a] sm:text-4xl">
              Weitere <span className="text-[#f28627]">Services</span>
            </h2>
            <div className="mx-auto mt-4 h-1 w-16 bg-[#f28627]" />
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {subServices.map((sub) => (
              <Link
                key={sub.href}
                href={sub.href}
                className="group relative overflow-hidden border-2 border-[#1a1a1a]/10 bg-white p-8 transition-all duration-300 hover:border-[#f28627] hover:shadow-xl hover:shadow-[#f28627]/10"
              >
                <h3 className="font-[var(--font-display)] text-xl font-bold uppercase tracking-wider text-[#1a1a1a] transition-colors group-hover:text-[#f28627]">
                  {sub.label}
                </h3>
                <ArrowRight className="mt-4 h-5 w-5 text-[#f28627] transition-transform duration-300 group-hover:translate-x-2" />
                {/* Bottom accent */}
                <div className="absolute bottom-0 left-0 h-1 w-0 bg-[#f28627] transition-all duration-500 group-hover:w-full" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA Banner ── */}
      <section className="relative overflow-hidden bg-[#f28627] py-16">
        <div
          className="absolute left-0 top-0 h-full w-1/3 bg-white/[0.06]"
          style={{ clipPath: "polygon(0 0, 100% 0, 0 100%)" }}
        />
        <div className="relative mx-auto max-w-7xl px-6 text-center sm:px-10 lg:px-16">
          <h2 className="font-[var(--font-display)] text-3xl font-bold uppercase tracking-tight text-white sm:text-4xl">
            Fragen zu unseren Leistungen?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-lg text-white/90">
            Rufen Sie uns an oder kommen Sie vorbei. Wir beraten Sie gerne
            persönlich.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/kontakt"
              className="inline-flex items-center gap-3 bg-[#1a1a1a] px-8 py-4 font-[var(--font-display)] text-lg font-bold uppercase tracking-wider text-white transition-all duration-300 hover:bg-black hover:shadow-xl -skew-x-6"
            >
              <span className="inline-flex items-center gap-3 skew-x-6">
                <Phone className="h-5 w-5" />
                Kontakt aufnehmen
              </span>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
