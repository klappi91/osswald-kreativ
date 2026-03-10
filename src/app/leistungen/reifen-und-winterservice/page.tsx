import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Phone, Snowflake, Check, Calendar, ShieldCheck, RefreshCw } from "lucide-react";

export const metadata: Metadata = {
  title: "Reifen- und Winterservice",
  description:
    "Umfassender Reifen- und Winterservice bei Autohaus Osswald in Diepholz. Wintercheck, Raderwechsel und gunstige Winterreifen.",
};

const checklist = [
  "Abgasanlage",
  "Batterie",
  "Beleuchtung und Warn- und Blinkanlagen",
  "Bremsanlage, Bremsbelagen und Bremsflussigkeit",
  "Zustand der Reifen, inklusive Reserverad",
  "Reifendruck",
  "Olstand",
  "Scheibenwisch-Waschanlage, inklusive frostsicherem Scheibenwischwasser",
  "Turschlosser und Schliesszylinder",
];

const otherSubServices = [
  { label: "Inspektion", href: "/leistungen/inspektion" },
  { label: "24-Stunden-Annahme", href: "/leistungen/24-stunden-annahme" },
  { label: "Ersatzwagen", href: "/leistungen/ersatzwagen" },
];

export default function ReifenWinterservicePage() {
  return (
    <>
      {/* ── Hero Banner ── */}
      <section className="relative flex h-[40vh] min-h-[320px] items-end overflow-hidden bg-[#1a1a1a]">
        {/* Background image */}
        <div className="absolute inset-0">
          <Image
            src="/images/service-winterservice.webp"
            alt="Reifen- und Winterservice bei Autohaus Osswald"
            fill
            className="object-cover object-center"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#1a1a1a]/90 via-[#1a1a1a]/70 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a] via-[#1a1a1a]/30 to-transparent" />
        </div>

        {/* Decorative elements */}
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
          <h1 className="font-[var(--font-display)] text-[clamp(2.2rem,5.5vw,5.5rem)] font-bold uppercase leading-[0.9] tracking-tight text-white">
            Reifen- &amp;
            <br />
            <span className="text-[#f28627]">Winterservice</span>
          </h1>
        </div>
      </section>

      {/* ── Content Section ── */}
      <section className="relative overflow-hidden bg-white py-20 sm:py-28">
        <div className="pointer-events-none absolute -right-16 -top-10 select-none font-[var(--font-display)] text-[20rem] font-bold leading-none text-[#f28627]/[0.04]">
          *
        </div>

        <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-16">
          <div className="mx-auto max-w-3xl">
            <div className="mb-8 flex items-center gap-4">
              <Snowflake className="h-10 w-10 shrink-0 text-[#f28627]" />
              <div className="h-1 w-16 bg-[#f28627]" />
            </div>

            <h2 className="font-[var(--font-display)] text-3xl font-bold uppercase leading-tight tracking-tight text-[#1a1a1a] sm:text-4xl">
              Fit fur{" "}
              <span className="text-[#f28627]">Eis und Schnee</span>
            </h2>

            <p className="mt-8 text-xl leading-relaxed text-[#474747]">
              Wenn die kalte Jahreszeit ansteht, bieten wir Ihnen speziell fur
              Ihr Fahrzeug einen umfassenden Reifen- und Winterservice, der Ihr
              Auto fit macht fur Eis und Schnee. Zusatzlich zu dem Servicepaket
              bieten wir Ihnen ausserdem Reifen zu super Preisen an.
            </p>
          </div>
        </div>
      </section>

      {/* ── Checklist Section (Dark) ── */}
      <section className="relative overflow-hidden bg-[#1a1a1a] py-20 sm:py-28">
        <div
          className="absolute left-0 top-0 h-full w-1/4 bg-[#f28627]/[0.04]"
          style={{ clipPath: "polygon(0 0, 100% 0, 0 100%)" }}
        />

        <div className="relative mx-auto max-w-7xl px-6 sm:px-10 lg:px-16">
          <div className="mb-12">
            <div className="mb-4 h-1 w-16 bg-[#f28627]" />
            <h3 className="font-[var(--font-display)] text-3xl font-bold uppercase tracking-tight text-white sm:text-4xl">
              Unser <span className="text-[#f28627]">Winter-Check</span>
            </h3>
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            {checklist.map((item, i) => (
              <div
                key={i}
                className="group flex items-start gap-4 border border-white/10 bg-white/[0.03] p-5 transition-all duration-300 hover:border-[#f28627]/40 hover:bg-white/[0.06]"
              >
                <div className="flex h-7 w-7 shrink-0 items-center justify-center bg-[#f28627]">
                  <Check className="h-4 w-4 text-white" />
                </div>
                <p className="text-base leading-relaxed text-white/80">
                  {item}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Reifenservice ganzjährig ── */}
      <section className="bg-white py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-16">
          <div className="mx-auto max-w-3xl">
            <div className="mb-8 flex items-center gap-4">
              <RefreshCw className="h-10 w-10 shrink-0 text-[#f28627]" />
              <div className="h-1 w-16 bg-[#f28627]" />
            </div>

            <h2 className="font-[var(--font-display)] text-3xl font-bold uppercase leading-tight tracking-tight text-[#1a1a1a] sm:text-4xl">
              Reifenservice{" "}
              <span className="text-[#f28627]">ganzjahrig</span>
            </h2>

            <p className="mt-8 text-xl leading-relaxed text-[#474747]">
              Nicht nur im Winter sind wir fur Sie da — unser Reifenservice
              begleitet Sie durch das ganze Jahr. Ob saisonaler Wechsel oder
              Beratung zu neuen Reifen: Wir kummern uns darum.
            </p>

            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              {[
                "Reifenwechsel Sommer \u2194 Winter",
                "Einlagerung von Sommerreifen",
                "Gunstige Winterreifen namhafter Hersteller",
                "Reifendruckkontrolle",
              ].map((item, i) => (
                <div
                  key={i}
                  className="flex items-start gap-4 border border-[#1a1a1a]/10 bg-[#f8f8f8] p-5 transition-all duration-300 hover:border-[#f28627]/40"
                >
                  <div className="flex h-7 w-7 shrink-0 items-center justify-center bg-[#f28627]">
                    <Check className="h-4 w-4 text-white" />
                  </div>
                  <p className="text-base leading-relaxed text-[#474747]">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Wann sollten Sie kommen? ── */}
      <section className="relative overflow-hidden bg-[#1a1a1a] py-20 sm:py-28">
        <div
          className="absolute right-0 top-0 h-full w-1/4 bg-[#f28627]/[0.04]"
          style={{ clipPath: "polygon(100% 0, 100% 100%, 0 0)" }}
        />

        <div className="relative mx-auto max-w-7xl px-6 sm:px-10 lg:px-16">
          <div className="mx-auto max-w-3xl">
            <div className="mb-8 flex items-center gap-4">
              <Calendar className="h-10 w-10 shrink-0 text-[#f28627]" />
              <div className="h-1 w-16 bg-[#f28627]" />
            </div>

            <h2 className="font-[var(--font-display)] text-3xl font-bold uppercase leading-tight tracking-tight text-white sm:text-4xl">
              Wann sollten{" "}
              <span className="text-[#f28627]">Sie kommen?</span>
            </h2>

            <div className="mt-10 space-y-6">
              <div className="border-l-4 border-[#f28627] bg-white/[0.05] p-6">
                <p className="font-[var(--font-display)] text-lg font-bold uppercase tracking-wider text-[#f28627]">
                  Faustregel: &quot;Von O bis O&quot;
                </p>
                <p className="mt-2 text-base leading-relaxed text-white/80">
                  Von Oktober bis Ostern sollten Winterreifen aufgezogen sein.
                  Kommen Sie rechtzeitig vor dem ersten Frost, um lange
                  Wartezeiten zu vermeiden.
                </p>
              </div>

              <p className="text-lg leading-relaxed text-white/70">
                Sie sind unsicher, ob Ganzjahresreifen fur Sie in Frage kommen?
                Wir beraten Sie gerne — individuell und unverbindlich.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Garantie & Qualität ── */}
      <section className="bg-white py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-16">
          <div className="mx-auto max-w-3xl">
            <div className="flex items-start gap-6 border-2 border-[#f28627]/20 bg-[#f28627]/[0.04] p-8">
              <ShieldCheck className="h-10 w-10 shrink-0 text-[#f28627]" />
              <div>
                <h3 className="font-[var(--font-display)] text-xl font-bold uppercase tracking-wider text-[#1a1a1a]">
                  Garantie &amp; Qualitat
                </h3>
                <p className="mt-3 text-base leading-relaxed text-[#474747]">
                  Alle Arbeiten werden von unseren geschulten Mechanikern
                  durchgefuhrt. Auf verbaute Neuteile gewahren wir Garantie.
                </p>
              </div>
            </div>

            <div className="mt-12">
              <Link
                href="/kontakt"
                className="group inline-flex items-center gap-3 bg-[#f28627] px-8 py-4 font-[var(--font-display)] text-lg font-bold uppercase tracking-wider text-white transition-all duration-300 hover:bg-[#d4710e] hover:shadow-xl hover:shadow-[#f28627]/30 -skew-x-6"
              >
                <span className="inline-flex items-center gap-3 skew-x-6">
                  <Phone className="h-5 w-5" />
                  Jetzt informieren
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
