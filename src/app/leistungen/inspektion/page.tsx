import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Phone, ClipboardCheck } from "lucide-react";

export const metadata: Metadata = {
  title: "Inspektion",
  description:
    "Inspektion zum attraktiven Komplettpreis bei Autohaus Osswald in Diepholz. Rufen Sie uns an!",
};

const otherSubServices = [
  { label: "24-Stunden-Annahme", href: "/leistungen/24-stunden-annahme" },
  { label: "Ersatzwagen", href: "/leistungen/ersatzwagen" },
  {
    label: "Reifen- und Winterservice",
    href: "/leistungen/reifen-und-winterservice",
  },
];

export default function InspektionPage() {
  return (
    <>
      {/* ── Hero Banner ── */}
      <section className="relative flex h-[40vh] min-h-[320px] items-end overflow-hidden bg-[#1a1a1a]">
        <div className="absolute inset-0 bg-gradient-to-br from-[#1a1a1a] via-[#2a2a2a] to-[#1a1a1a]" />

        {/* Decorative elements */}
        <div className="absolute bottom-0 left-0 h-1 w-1/3 bg-[#f28627]" />
        <div className="absolute left-[6vw] top-0 h-full w-[2px] bg-gradient-to-b from-transparent via-[#f28627]/40 to-transparent" />
        <div
          className="absolute right-0 top-0 h-full w-1/4 bg-[#f28627]/[0.04]"
          style={{ clipPath: "polygon(100% 0, 0 0, 100% 100%)" }}
        />
        {/* Large decorative letter */}
        <div className="pointer-events-none absolute -right-10 bottom-0 select-none font-[var(--font-display)] text-[18rem] font-bold leading-none text-white/[0.03]">
          I
        </div>

        <div className="relative z-10 mx-auto w-full max-w-7xl px-6 pb-12 sm:px-10 lg:px-16">
          <Link
            href="/leistungen"
            className="mb-4 inline-flex items-center gap-2 font-[var(--font-display)] text-sm font-medium uppercase tracking-[0.3em] text-[#f28627] transition-colors hover:text-white"
          >
            Leistungen
            <span className="text-white/40">/</span>
          </Link>
          <h1 className="font-[var(--font-display)] text-[clamp(3rem,7vw,7rem)] font-bold uppercase leading-[0.9] tracking-tight text-white">
            Inspektion
          </h1>
        </div>
      </section>

      {/* ── Content Section ── */}
      <section className="relative overflow-hidden bg-white py-20 sm:py-28">
        <div className="pointer-events-none absolute -right-16 -top-10 select-none font-[var(--font-display)] text-[20rem] font-bold leading-none text-[#f28627]/[0.04]">
          &euro;
        </div>

        <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-16">
          <div className="mx-auto max-w-3xl">
            <div className="mb-8 flex items-center gap-4">
              <ClipboardCheck className="h-10 w-10 shrink-0 text-[#f28627]" />
              <div className="h-1 w-16 bg-[#f28627]" />
            </div>

            <h2 className="font-[var(--font-display)] text-3xl font-bold uppercase leading-tight tracking-tight text-[#1a1a1a] sm:text-4xl">
              Inspektion zum{" "}
              <span className="text-[#f28627]">Komplettpreis</span>
            </h2>

            <p className="mt-8 text-xl leading-relaxed text-[#474747]">
              Wir fuhren Ihre Inspektion zum besonders attraktiven Komplettpreis
              durch! Rufen Sie uns an und informieren Sie sich!
            </p>

            <div className="mt-12">
              <Link
                href="/kontakt"
                className="group inline-flex items-center gap-3 bg-[#f28627] px-8 py-4 font-[var(--font-display)] text-lg font-bold uppercase tracking-wider text-white transition-all duration-300 hover:bg-[#d4710e] hover:shadow-xl hover:shadow-[#f28627]/30 -skew-x-6"
              >
                <span className="inline-flex items-center gap-3 skew-x-6">
                  <Phone className="h-5 w-5" />
                  Jetzt anrufen
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
