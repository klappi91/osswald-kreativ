import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Phone,
  Car,
  ShieldCheck,
  Zap,
  Bus,
  ClipboardList,
  KeyRound,
  RotateCcw,
  Fuel,
  CreditCard,
  Info,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Ersatzwagen",
  description:
    "Ersatzwagen zu gunstigen Konditionen bei Autohaus Osswald in Diepholz. Bleiben Sie mobil wahrend Ihr Auto in der Werkstatt ist.",
};

const warumErsatzwagen = [
  {
    icon: Car,
    title: "Mobil bleiben",
    text: "Wahrend der Reparatur oder Inspektion mussen Sie auf nichts verzichten — mit einem Ersatzwagen bleiben Sie uneingeschrankt mobil.",
  },
  {
    icon: ShieldCheck,
    title: "Langere Werkstattaufenthalte",
    text: "Ideal bei mehrtägigen Reparaturen oder wenn Ersatzteile bestellt werden mussen. Kein Warten, keine Einschrankungen.",
  },
  {
    icon: Bus,
    title: "Kein Stress mit OPNV",
    text: "Sparen Sie sich die Suche nach Busverbindungen oder Mitfahrgelegenheiten. Fahren Sie einfach wie gewohnt weiter.",
  },
];

const schritte = [
  {
    nr: "01",
    icon: ClipboardList,
    title: "Ersatzwagen anfragen",
    text: "Bei der Auftragserteilung einfach Ihren Bedarf an einem Ersatzwagen angeben — wir kummern uns um alles Weitere.",
  },
  {
    nr: "02",
    icon: KeyRound,
    title: "Fahrzeug ubernehmen",
    text: "Bei Abgabe Ihres Wagens ubernehmen Sie direkt den Ersatzwagen. Schnell, unkompliziert und ohne zusatzlichen Aufwand.",
  },
  {
    nr: "03",
    icon: RotateCcw,
    title: "Ersatzwagen zuruckgeben",
    text: "Sobald Ihr repariertes Fahrzeug fertig ist, bringen Sie den Ersatzwagen einfach bei Abholung wieder mit.",
  },
];

const gutZuWissen = [
  {
    icon: CreditCard,
    title: "Gultiger Fuhrerschein",
    text: "Fur die Ubernahme eines Ersatzwagens benotigen Sie einen gultigen Fuhrerschein.",
  },
  {
    icon: Fuel,
    title: "Vollgetankt & vollgetankt",
    text: "Sie ubernehmen den Ersatzwagen vollgetankt und geben ihn ebenso vollgetankt zuruck.",
  },
  {
    icon: Phone,
    title: "Fragen zur Verfugbarkeit?",
    text: "Rufen Sie uns einfach an unter +49 5441 / 975551 — wir helfen Ihnen gerne weiter.",
  },
];

const otherSubServices = [
  { label: "Inspektion", href: "/leistungen/inspektion" },
  { label: "24-Stunden-Annahme", href: "/leistungen/24-stunden-annahme" },
  {
    label: "Reifen- und Winterservice",
    href: "/leistungen/reifen-und-winterservice",
  },
];

export default function ErsatzwagenPage() {
  return (
    <>
      {/* ── Hero Banner ── */}
      <section className="relative flex h-[40vh] min-h-[320px] items-end overflow-hidden bg-[#1a1a1a]">
        {/* Background image */}
        <div className="absolute inset-0">
          <Image
            src="/images/service-ersatzwagen.webp"
            alt="Ersatzwagen-Service bei Autohaus Osswald"
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
            Ersatz
            <span className="text-[#f28627]">wagen</span>
          </h1>
        </div>
      </section>

      {/* ── Content Section ── */}
      <section className="relative overflow-hidden bg-white py-20 sm:py-28">
        <div className="pointer-events-none absolute -right-16 -top-10 select-none font-[var(--font-display)] text-[20rem] font-bold leading-none text-[#f28627]/[0.04]">
          &rarr;
        </div>

        <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-16">
          <div className="mx-auto max-w-3xl">
            <div className="mb-8 flex items-center gap-4">
              <Car className="h-10 w-10 shrink-0 text-[#f28627]" />
              <div className="h-1 w-16 bg-[#f28627]" />
            </div>

            <h2 className="font-[var(--font-display)] text-3xl font-bold uppercase leading-tight tracking-tight text-[#1a1a1a] sm:text-4xl">
              Bleiben Sie{" "}
              <span className="text-[#f28627]">mobil</span>
            </h2>

            <p className="mt-8 text-xl leading-relaxed text-[#474747]">
              Wahrend Sie Ihr Auto zur Uberarbeitung in unserer Werkstatt
              lassen, konnen wir Ihnen einen Ersatzwagen anbieten. Zu gunstigen
              Konditionen bleiben Sie so mobil!
            </p>

            <p className="mt-4 text-xl leading-relaxed text-[#474747]">
              Rufen Sie uns an und informieren Sie sich!
            </p>

            {/* Highlight box */}
            <div className="mt-10 border-l-4 border-[#f28627] bg-[#f28627]/5 p-6">
              <p className="font-[var(--font-display)] text-lg font-bold uppercase tracking-wider text-[#1a1a1a]">
                Gunstige Konditionen. Schnelle Verfugbarkeit.
              </p>
            </div>

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

      {/* ── Warum Ersatzwagen? (Dark Section) ── */}
      <section className="relative overflow-hidden bg-[#1a1a1a] py-20 sm:py-28">
        <div
          className="absolute left-0 top-0 h-full w-1/4 bg-[#f28627]/[0.04]"
          style={{ clipPath: "polygon(0 0, 100% 0, 0 100%)" }}
        />

        <div className="relative mx-auto max-w-7xl px-6 sm:px-10 lg:px-16">
          <div className="mb-12">
            <div className="mb-4 h-1 w-16 bg-[#f28627]" />
            <h3 className="font-[var(--font-display)] text-3xl font-bold uppercase tracking-tight text-white sm:text-4xl">
              Warum <span className="text-[#f28627]">Ersatzwagen?</span>
            </h3>
          </div>

          <div className="grid gap-6 sm:grid-cols-3">
            {warumErsatzwagen.map((item, i) => (
              <div
                key={i}
                className="group border border-white/10 bg-white/[0.03] p-8 transition-all duration-300 hover:border-[#f28627]/40 hover:bg-white/[0.06]"
              >
                <div className="mb-6 flex h-14 w-14 items-center justify-center bg-[#f28627]">
                  <item.icon className="h-7 w-7 text-white" />
                </div>
                <h4 className="mb-3 font-[var(--font-display)] text-xl font-bold uppercase tracking-wider text-white">
                  {item.title}
                </h4>
                <p className="text-base leading-relaxed text-white/70">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Unser Angebot (White Section) ── */}
      <section className="relative overflow-hidden bg-white py-20 sm:py-28">
        <div className="pointer-events-none absolute -left-20 bottom-10 select-none font-[var(--font-display)] text-[18rem] font-bold leading-none text-[#f28627]/[0.04]">
          &check;
        </div>

        <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-16">
          <div className="mx-auto max-w-3xl">
            <div className="mb-8 flex items-center gap-4">
              <Zap className="h-10 w-10 shrink-0 text-[#f28627]" />
              <div className="h-1 w-16 bg-[#f28627]" />
            </div>

            <h3 className="font-[var(--font-display)] text-3xl font-bold uppercase leading-tight tracking-tight text-[#1a1a1a] sm:text-4xl">
              Unser <span className="text-[#f28627]">Angebot</span>
            </h3>

            <div className="mt-10 space-y-6">
              <div className="flex items-start gap-5">
                <div className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center bg-[#f28627]">
                  <Car className="h-4 w-4 text-white" />
                </div>
                <div>
                  <p className="text-lg font-semibold text-[#1a1a1a]">
                    Ersatzfahrzeuge zu gunstigen Konditionen
                  </p>
                  <p className="mt-1 text-base leading-relaxed text-[#474747]">
                    Wir bieten Ihnen gepflegte Ersatzfahrzeuge zu fairen Preisen,
                    damit Mobilitat keine Frage des Geldbeutels ist.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-5">
                <div className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center bg-[#f28627]">
                  <Zap className="h-4 w-4 text-white" />
                </div>
                <div>
                  <p className="text-lg font-semibold text-[#1a1a1a]">
                    Schnelle Verfugbarkeit
                  </p>
                  <p className="mt-1 text-base leading-relaxed text-[#474747]">
                    Sprechen Sie uns einfach bei der Auftragserteilung an — wir
                    sorgen dafur, dass ein Fahrzeug fur Sie bereitsteht.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-5">
                <div className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center bg-[#f28627]">
                  <ShieldCheck className="h-4 w-4 text-white" />
                </div>
                <div>
                  <p className="text-lg font-semibold text-[#1a1a1a]">
                    Unkomplizierte Abwicklung
                  </p>
                  <p className="mt-1 text-base leading-relaxed text-[#474747]">
                    Alles aus einer Hand, direkt bei uns im Haus. Kein
                    Papierkram, keine Umwege — einfach einsteigen und losfahren.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── So funktioniert's (Dark Section) ── */}
      <section className="relative overflow-hidden bg-[#1a1a1a] py-20 sm:py-28">
        <div
          className="absolute right-0 top-0 h-full w-1/4 bg-[#f28627]/[0.04]"
          style={{ clipPath: "polygon(100% 0, 0 0, 100% 100%)" }}
        />

        <div className="relative mx-auto max-w-7xl px-6 sm:px-10 lg:px-16">
          <div className="mb-12">
            <div className="mb-4 h-1 w-16 bg-[#f28627]" />
            <h3 className="font-[var(--font-display)] text-3xl font-bold uppercase tracking-tight text-white sm:text-4xl">
              So <span className="text-[#f28627]">funktioniert&apos;s</span>
            </h3>
            <p className="mt-4 text-lg text-white/60">
              In drei einfachen Schritten zu Ihrem Ersatzwagen.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-3">
            {schritte.map((step, i) => (
              <div
                key={i}
                className="group relative border border-white/10 bg-white/[0.03] p-8 transition-all duration-300 hover:border-[#f28627]/40 hover:bg-white/[0.06]"
              >
                <span className="absolute -top-4 right-6 font-[var(--font-display)] text-6xl font-bold text-[#f28627]/20">
                  {step.nr}
                </span>
                <div className="mb-6 flex h-14 w-14 items-center justify-center bg-[#f28627]">
                  <step.icon className="h-7 w-7 text-white" />
                </div>
                <h4 className="mb-3 font-[var(--font-display)] text-xl font-bold uppercase tracking-wider text-white">
                  {step.title}
                </h4>
                <p className="text-base leading-relaxed text-white/70">
                  {step.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Gut zu wissen (White Section) ── */}
      <section className="relative overflow-hidden bg-white py-20 sm:py-28">
        <div className="pointer-events-none absolute -right-10 top-10 select-none font-[var(--font-display)] text-[16rem] font-bold leading-none text-[#f28627]/[0.04]">
          !
        </div>

        <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-16">
          <div className="mb-12">
            <div className="mb-4 flex items-center gap-4">
              <Info className="h-10 w-10 shrink-0 text-[#f28627]" />
              <div className="h-1 w-16 bg-[#f28627]" />
            </div>
            <h3 className="font-[var(--font-display)] text-3xl font-bold uppercase leading-tight tracking-tight text-[#1a1a1a] sm:text-4xl">
              Gut zu <span className="text-[#f28627]">wissen</span>
            </h3>
          </div>

          <div className="grid gap-6 sm:grid-cols-3">
            {gutZuWissen.map((item, i) => (
              <div
                key={i}
                className="group border-2 border-[#1a1a1a]/10 p-8 transition-all duration-300 hover:border-[#f28627] hover:shadow-lg hover:shadow-[#f28627]/10"
              >
                <div className="mb-6 flex h-14 w-14 items-center justify-center bg-[#f28627]">
                  <item.icon className="h-7 w-7 text-white" />
                </div>
                <h4 className="mb-3 font-[var(--font-display)] text-lg font-bold uppercase tracking-wider text-[#1a1a1a]">
                  {item.title}
                </h4>
                <p className="text-base leading-relaxed text-[#474747]">
                  {item.text}
                </p>
              </div>
            ))}
          </div>

          <div className="mx-auto mt-16 max-w-3xl">
            <div className="mt-0">
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
