import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Phone, Clock } from "lucide-react";

export const metadata: Metadata = {
  title: "24-Stunden-Annahme",
  description:
    "Fahrzeugabgabe rund um die Uhr bei Autohaus Osswald in Diepholz. Auch ohne Termin ausserhalb der Offnungszeiten.",
};

const otherSubServices = [
  { label: "Inspektion", href: "/leistungen/inspektion" },
  { label: "Ersatzwagen", href: "/leistungen/ersatzwagen" },
  {
    label: "Reifen- und Winterservice",
    href: "/leistungen/reifen-und-winterservice",
  },
];

export default function AnnahmePage() {
  return (
    <>
      {/* ── Hero Banner ── */}
      <section className="relative flex h-[40vh] min-h-[320px] items-end overflow-hidden bg-[#1a1a1a]">
        <div className="absolute inset-0">
          <Image
            src="/images/service-24h-annahme.webp"
            alt="24-Stunden Fahrzeugannahme bei Autohaus Osswald"
            fill
            className="object-cover object-center"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#1a1a1a]/90 via-[#1a1a1a]/70 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a] via-[#1a1a1a]/30 to-transparent" />
        </div>

        <div className="absolute bottom-0 left-0 h-1 w-1/3 bg-[#f28627]" />
        <div className="absolute left-[6vw] top-0 h-full w-[2px] bg-gradient-to-b from-transparent via-[#f28627]/40 to-transparent" />

        <div className="relative z-10 mx-auto w-full max-w-7xl px-6 pb-12 sm:px-10 lg:px-16">
          <Link
            href="/leistungen"
            className="mb-4 inline-flex items-center gap-2 font-[var(--font-display)] text-sm font-medium uppercase tracking-[0.3em] text-[#f28627] transition-colors hover:text-white"
          >
            Leistungen
            <span className="text-white/40">/</span>
          </Link>
          <h1 className="font-[var(--font-display)] text-[clamp(2.5rem,6vw,6rem)] font-bold uppercase leading-[0.9] tracking-tight text-white">
            24-Stunden-
            <br />
            <span className="text-[#f28627]">Annahme</span>
          </h1>
        </div>
      </section>

      {/* ── Content Section ── */}
      <section className="relative overflow-hidden bg-white py-20 sm:py-28">
        <div className="pointer-events-none absolute -left-20 top-10 select-none font-[var(--font-display)] text-[22rem] font-bold leading-none text-[#f28627]/[0.04]">
          24h
        </div>

        <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-16">
          <div className="mx-auto max-w-3xl">
            <div className="mb-8 flex items-center gap-4">
              <Clock className="h-10 w-10 shrink-0 text-[#f28627]" />
              <div className="h-1 w-16 bg-[#f28627]" />
            </div>

            <h2 className="font-[var(--font-display)] text-3xl font-bold uppercase leading-tight tracking-tight text-[#1a1a1a] sm:text-4xl">
              Flexibel abgeben &mdash;{" "}
              <span className="text-[#f28627]">rund um die Uhr</span>
            </h2>

            <p className="mt-8 text-xl leading-relaxed text-[#474747]">
              Ihr Fahrzeug muss zur Inspektion oder es steht eine Reparatur an,
              Sie konnen es jedoch nicht zu unseren ublichen Offnungszeiten
              vorbei bringen?
            </p>

            <p className="mt-4 text-xl leading-relaxed text-[#474747]">
              Bei ATO - Autotechnik Osswald kein Problem: Stellen Sie Ihr Auto
              auch ohne vorige Terminvereinbarung ausserhalb unserer
              Geschaftszeiten einfach auf dem Hof ab.
            </p>

            <div className="mt-12">
              <Link
                href="/kontakt"
                className="group inline-flex items-center gap-3 bg-[#f28627] px-8 py-4 font-[var(--font-display)] text-lg font-bold uppercase tracking-wider text-white transition-all duration-300 hover:bg-[#d4710e] hover:shadow-xl hover:shadow-[#f28627]/30 -skew-x-6"
              >
                <span className="inline-flex items-center gap-3 skew-x-6">
                  <Phone className="h-5 w-5" />
                  Kontakt aufnehmen
                  <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                </span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── Other Sub-Services ── */}
      <section className="bg-[#f8f8f8] py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-16">
          <h3 className="mb-8 font-[var(--font-display)] text-xl font-bold uppercase tracking-wider text-[#1a1a1a]">
            Weitere Services
          </h3>
          <div className="grid gap-4 sm:grid-cols-3">
            {otherSubServices.map((sub) => (
              <Link
                key={sub.href}
                href={sub.href}
                className="group relative overflow-hidden border-2 border-[#1a1a1a]/10 bg-white p-6 transition-all duration-300 hover:border-[#f28627] hover:shadow-lg hover:shadow-[#f28627]/10"
              >
                <h4 className="font-[var(--font-display)] text-lg font-bold uppercase tracking-wider text-[#1a1a1a] transition-colors group-hover:text-[#f28627]">
                  {sub.label}
                </h4>
                <ArrowRight className="mt-3 h-5 w-5 text-[#f28627] transition-transform duration-300 group-hover:translate-x-2" />
                <div className="absolute bottom-0 left-0 h-1 w-0 bg-[#f28627] transition-all duration-500 group-hover:w-full" />
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
