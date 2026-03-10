import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Phone,
  ClipboardCheck,
  Check,
  ShieldCheck,
  BadgeEuro,
  GraduationCap,
  Car,
  FileText,
  CalendarCheck,
  Wrench,
  ClipboardList,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Inspektion",
  description:
    "Inspektion zum attraktiven Komplettpreis bei Autohaus Osswald in Diepholz. Alle Marken, nach Herstellervorgaben, keine versteckten Kosten.",
};

const inspektionChecklist = [
  "Motoroel und Oelfilter",
  "Bremsanlage und Bremsfluessigkeit",
  "Beleuchtung und Elektrik",
  "Fahrwerk und Lenkung",
  "Auspuffanlage",
  "Kuehlsystem und Kuehlfluessigkeit",
  "Zahnriemen / Steuerkette (Sichtpruefung)",
  "Batterie und Ladezustand",
  "Reifen und Reifendruck",
  "Scheibenwischer und Waschanlage",
  "Klimaanlage (Funktionstest)",
];

const vorteile = [
  {
    icon: ShieldCheck,
    title: "Herstellervorgaben",
    text: "Inspektion nach Herstellervorgaben — Ihre Garantie bleibt erhalten.",
  },
  {
    icon: BadgeEuro,
    title: "Komplettpreis",
    text: "Attraktiver Komplettpreis ohne versteckte Kosten. Sie wissen vorher, was es kostet.",
  },
  {
    icon: GraduationCap,
    title: "Speziell ausgebildete Pruefer",
    text: "Unsere KFZ-Mechaniker sind speziell geschult und arbeiten gewissenhaft nach Checkliste.",
  },
  {
    icon: Car,
    title: "Alle Marken & Modelle",
    text: "Egal ob VW, BMW, Mercedes oder asiatische Fabrikate — wir pruefen jedes Fahrzeug.",
  },
  {
    icon: FileText,
    title: "Kostenvoranschlag",
    text: "Sollten wir Maengel feststellen, erhalten Sie einen Kostenvoranschlag vor Auftragserteilung.",
  },
];

const ablaufSchritte = [
  {
    step: "01",
    icon: CalendarCheck,
    title: "Termin & Abgabe",
    text: "Vereinbaren Sie telefonisch oder online Ihren Wunschtermin. Bringen Sie Ihr Fahrzeug zum vereinbarten Zeitpunkt vorbei — oder nutzen Sie unsere 24-Stunden-Annahme.",
  },
  {
    step: "02",
    icon: Wrench,
    title: "Inspektion",
    text: "Unsere Pruefer arbeiten die komplette Checkliste nach Herstellervorgaben ab. Alle Pruefpunkte werden dokumentiert, eventuelle Maengel sofort festgehalten.",
  },
  {
    step: "03",
    icon: ClipboardList,
    title: "Abholung mit Protokoll",
    text: "Sie erhalten ein ausfuehrliches Pruefprotokoll. Bei Auffaelligkeiten besprechen wir das weitere Vorgehen persoenlich mit Ihnen — transparent und fair.",
  },
];

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
        {/* Background image */}
        <div className="absolute inset-0">
          <Image
            src="/images/service-inspektion.webp"
            alt="KFZ-Inspektion bei Autohaus Osswald"
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
          <h1 className="font-[var(--font-display)] text-[clamp(3rem,7vw,7rem)] font-bold uppercase leading-[0.9] tracking-tight text-white">
            Inspektion
          </h1>
        </div>
      </section>

      {/* ── Intro Section ── */}
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
              Wir fuehren Ihre Inspektion zum besonders attraktiven Komplettpreis
              durch! Eine regelmaessige Inspektion schuetzt vor teuren
              Folgereparaturen, haelt den Wert Ihres Fahrzeugs und sorgt fuer
              Sicherheit im Strassenverkehr. Bei Autohaus Osswald pruefen wir
              gruendlich nach Herstellervorgaben — damit Ihre Garantie erhalten
              bleibt und Sie sorgenfrei unterwegs sind.
            </p>
          </div>
        </div>
      </section>

      {/* ── Was wird geprueft? (Dark Checklist) ── */}
      <section className="relative overflow-hidden bg-[#1a1a1a] py-20 sm:py-28">
        <div
          className="absolute left-0 top-0 h-full w-1/4 bg-[#f28627]/[0.04]"
          style={{ clipPath: "polygon(0 0, 100% 0, 0 100%)" }}
        />

        <div className="relative mx-auto max-w-7xl px-6 sm:px-10 lg:px-16">
          <div className="mb-12">
            <div className="mb-4 h-1 w-16 bg-[#f28627]" />
            <h3 className="font-[var(--font-display)] text-3xl font-bold uppercase tracking-tight text-white sm:text-4xl">
              Was wird{" "}
              <span className="text-[#f28627]">geprueft?</span>
            </h3>
            <p className="mt-4 max-w-2xl text-lg leading-relaxed text-white/60">
              Bei unserer Inspektion gehen wir systematisch alle sicherheits- und
              wartungsrelevanten Punkte Ihres Fahrzeugs durch.
            </p>
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            {inspektionChecklist.map((item, i) => (
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

      {/* ── Warum Inspektion bei uns? ── */}
      <section className="relative overflow-hidden bg-white py-20 sm:py-28">
        <div className="pointer-events-none absolute -left-20 bottom-0 select-none font-[var(--font-display)] text-[18rem] font-bold leading-none text-[#f28627]/[0.04]">
          &#10003;
        </div>

        <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-16">
          <div className="mb-12">
            <div className="mb-4 h-1 w-16 bg-[#f28627]" />
            <h3 className="font-[var(--font-display)] text-3xl font-bold uppercase tracking-tight text-[#1a1a1a] sm:text-4xl">
              Warum Inspektion{" "}
              <span className="text-[#f28627]">bei uns?</span>
            </h3>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {vorteile.map((v, i) => (
              <div
                key={i}
                className="group relative border-2 border-[#1a1a1a]/10 p-8 transition-all duration-300 hover:border-[#f28627] hover:shadow-lg hover:shadow-[#f28627]/10"
              >
                <v.icon className="mb-5 h-9 w-9 text-[#f28627] transition-transform duration-300 group-hover:scale-110" />
                <h4 className="mb-3 font-[var(--font-display)] text-lg font-bold uppercase tracking-wider text-[#1a1a1a]">
                  {v.title}
                </h4>
                <p className="text-base leading-relaxed text-[#474747]">
                  {v.text}
                </p>
                <div className="absolute bottom-0 left-0 h-1 w-0 bg-[#f28627] transition-all duration-500 group-hover:w-full" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Ablauf in 3 Schritten (Dark) ── */}
      <section className="relative overflow-hidden bg-[#1a1a1a] py-20 sm:py-28">
        <div className="pointer-events-none absolute -right-10 top-1/2 -translate-y-1/2 select-none font-[var(--font-display)] text-[22rem] font-bold leading-none text-white/[0.02]">
          1-2-3
        </div>

        <div className="relative mx-auto max-w-7xl px-6 sm:px-10 lg:px-16">
          <div className="mb-12">
            <div className="mb-4 h-1 w-16 bg-[#f28627]" />
            <h3 className="font-[var(--font-display)] text-3xl font-bold uppercase tracking-tight text-white sm:text-4xl">
              So laeuft Ihre{" "}
              <span className="text-[#f28627]">Inspektion</span> ab
            </h3>
          </div>

          <div className="grid gap-8 sm:grid-cols-3">
            {ablaufSchritte.map((s, i) => (
              <div key={i} className="relative">
                {/* Step number */}
                <div className="mb-6 font-[var(--font-display)] text-6xl font-bold leading-none text-[#f28627]/20">
                  {s.step}
                </div>
                <div className="mb-4 flex items-center gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center bg-[#f28627]">
                    <s.icon className="h-6 w-6 text-white" />
                  </div>
                  <h4 className="font-[var(--font-display)] text-lg font-bold uppercase tracking-wider text-white">
                    {s.title}
                  </h4>
                </div>
                <p className="text-base leading-relaxed text-white/70">
                  {s.text}
                </p>
                {/* Connector line (not on last item) */}
                {i < ablaufSchritte.length - 1 && (
                  <div className="absolute -right-4 top-10 hidden h-[2px] w-8 bg-[#f28627]/30 sm:block" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA Section ── */}
      <section className="bg-white py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-16">
          <div className="mx-auto max-w-3xl">
            <p className="text-xl leading-relaxed text-[#474747]">
              Vereinbaren Sie jetzt Ihren Inspektionstermin — wir beraten Sie
              gerne und erstellen ein unverbindliches Angebot fuer Ihr Fahrzeug.
            </p>

            <div className="mt-12">
              <Link
                href="/kontakt"
                className="group inline-flex items-center gap-3 bg-[#f28627] px-8 py-4 font-[var(--font-display)] text-lg font-bold uppercase tracking-wider text-white transition-all duration-300 hover:bg-[#d4710e] hover:shadow-xl hover:shadow-[#f28627]/30 -skew-x-6"
              >
                <span className="inline-flex items-center gap-3 skew-x-6">
                  <Phone className="h-5 w-5" />
                  Jetzt Termin vereinbaren
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
