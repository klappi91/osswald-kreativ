import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Phone,
  Clock,
  MapPin,
  FileText,
  KeyRound,
  CalendarCheck,
  CheckCircle2,
  ShieldCheck,
  ClipboardList,
  Mail,
  CreditCard,
} from "lucide-react";

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
        {/* Background image */}
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

            {/* Highlight box */}
            <div className="mt-10 border-l-4 border-[#f28627] bg-[#f28627]/5 p-6">
              <p className="font-[var(--font-display)] text-lg font-bold uppercase tracking-wider text-[#1a1a1a]">
                Ohne Termin. Ohne Wartezeit. Einfach abstellen.
              </p>
            </div>

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

      {/* ── So funktioniert's ── */}
      <section className="relative overflow-hidden bg-[#1a1a1a] py-20 sm:py-28">
        <div className="pointer-events-none absolute -right-10 bottom-0 select-none font-[var(--font-display)] text-[18rem] font-bold leading-none text-white/[0.03]">
          1-2-3
        </div>

        <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-16">
          <div className="mb-16 flex items-center gap-4">
            <CalendarCheck className="h-10 w-10 shrink-0 text-[#f28627]" />
            <div className="h-1 w-16 bg-[#f28627]" />
          </div>

          <h2 className="font-[var(--font-display)] text-3xl font-bold uppercase leading-tight tracking-tight text-white sm:text-4xl">
            So funktioniert&apos;s &mdash;{" "}
            <span className="text-[#f28627]">in 3 Schritten</span>
          </h2>

          <p className="mt-6 max-w-2xl text-xl leading-relaxed text-white/60">
            Unsere 24-Stunden-Annahme ist unkompliziert. Kein Papierkram, keine
            langen Wartezeiten &mdash; nur drei einfache Schritte.
          </p>

          <div className="mt-16 grid gap-8 sm:grid-cols-3">
            {/* Step 1 */}
            <div className="group relative border-2 border-white/10 bg-white/5 p-8 transition-all duration-300 hover:border-[#f28627]/50 hover:bg-white/[0.08]">
              <div className="absolute -top-5 left-8 flex h-10 w-10 items-center justify-center bg-[#f28627] font-[var(--font-display)] text-lg font-bold text-white -skew-x-6">
                <span className="skew-x-6">1</span>
              </div>
              <MapPin className="mb-6 mt-4 h-8 w-8 text-[#f28627]" />
              <h3 className="font-[var(--font-display)] text-xl font-bold uppercase tracking-wider text-white">
                Fahrzeug abstellen
              </h3>
              <p className="mt-4 leading-relaxed text-white/60">
                Stellen Sie Ihr Fahrzeug jederzeit auf unserem Gelande ab &mdash;
                egal ob fruh morgens, spat abends oder am Wochenende.
              </p>
              <p className="mt-3 text-sm font-medium text-[#f28627]">
                Auf dem Esch 21, 49356 Diepholz
              </p>
              <div className="absolute bottom-0 left-0 h-1 w-0 bg-[#f28627] transition-all duration-500 group-hover:w-full" />
            </div>

            {/* Step 2 */}
            <div className="group relative border-2 border-white/10 bg-white/5 p-8 transition-all duration-300 hover:border-[#f28627]/50 hover:bg-white/[0.08]">
              <div className="absolute -top-5 left-8 flex h-10 w-10 items-center justify-center bg-[#f28627] font-[var(--font-display)] text-lg font-bold text-white -skew-x-6">
                <span className="skew-x-6">2</span>
              </div>
              <KeyRound className="mb-6 mt-4 h-8 w-8 text-[#f28627]" />
              <h3 className="font-[var(--font-display)] text-xl font-bold uppercase tracking-wider text-white">
                Schlussel einwerfen
              </h3>
              <p className="mt-4 leading-relaxed text-white/60">
                Werfen Sie den Fahrzeugschlussel zusammen mit einem kurzen
                Auftragszettel in unseren Briefkasten am Eingang der Werkstatt.
              </p>
              <p className="mt-3 text-sm font-medium text-[#f28627]">
                Auftragszettel liegt vor Ort bereit
              </p>
              <div className="absolute bottom-0 left-0 h-1 w-0 bg-[#f28627] transition-all duration-500 group-hover:w-full" />
            </div>

            {/* Step 3 */}
            <div className="group relative border-2 border-white/10 bg-white/5 p-8 transition-all duration-300 hover:border-[#f28627]/50 hover:bg-white/[0.08]">
              <div className="absolute -top-5 left-8 flex h-10 w-10 items-center justify-center bg-[#f28627] font-[var(--font-display)] text-lg font-bold text-white -skew-x-6">
                <span className="skew-x-6">3</span>
              </div>
              <Phone className="mb-6 mt-4 h-8 w-8 text-[#f28627]" />
              <h3 className="font-[var(--font-display)] text-xl font-bold uppercase tracking-wider text-white">
                Wir melden uns
              </h3>
              <p className="mt-4 leading-relaxed text-white/60">
                Wir kontaktieren Sie am nachsten Werktag zur
                Auftragsbestatigung und Terminabsprache. Kein Aufwand fur Sie.
              </p>
              <p className="mt-3 text-sm font-medium text-[#f28627]">
                Ruckmeldung am nachsten Werktag
              </p>
              <div className="absolute bottom-0 left-0 h-1 w-0 bg-[#f28627] transition-all duration-500 group-hover:w-full" />
            </div>
          </div>
        </div>
      </section>

      {/* ── Was Sie mitbringen sollten ── */}
      <section className="relative overflow-hidden bg-white py-20 sm:py-28">
        <div className="pointer-events-none absolute -left-16 bottom-10 select-none font-[var(--font-display)] text-[18rem] font-bold leading-none text-[#f28627]/[0.04]">
          &#10003;
        </div>

        <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-16">
          <div className="mx-auto max-w-3xl">
            <div className="mb-8 flex items-center gap-4">
              <ClipboardList className="h-10 w-10 shrink-0 text-[#f28627]" />
              <div className="h-1 w-16 bg-[#f28627]" />
            </div>

            <h2 className="font-[var(--font-display)] text-3xl font-bold uppercase leading-tight tracking-tight text-[#1a1a1a] sm:text-4xl">
              Was Sie{" "}
              <span className="text-[#f28627]">mitbringen sollten</span>
            </h2>

            <p className="mt-6 text-xl leading-relaxed text-[#474747]">
              Damit wir Ihr Fahrzeug schnellstmoglich bearbeiten konnen,
              legen Sie bitte folgende Dinge zum Schlussel in den Briefkasten:
            </p>

            <div className="mt-12 space-y-6">
              {[
                {
                  icon: KeyRound,
                  title: "Fahrzeugschlussel",
                  text: "Alle benotigten Schlussel fur Ihr Fahrzeug.",
                },
                {
                  icon: FileText,
                  title: "Problembeschreibung / gewunschter Service",
                  text: "Kurze Beschreibung, was gemacht werden soll — z.\u00A0B. Inspektion, Bremsen prufen, komisches Gerausch etc.",
                },
                {
                  icon: Mail,
                  title: "Ihre Kontaktdaten",
                  text: "Telefonnummer und E-Mail-Adresse, damit wir Sie fur Ruckfragen und die Terminabsprache erreichen.",
                },
                {
                  icon: CreditCard,
                  title: "Fahrzeugschein (bei TUV/AU)",
                  text: "Wird der TUV oder die Abgasuntersuchung fallig, bringen Sie bitte den Fahrzeugschein (Zulassungsbescheinigung Teil I) mit.",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="flex gap-5 border-l-4 border-transparent p-4 transition-all duration-300 hover:border-[#f28627] hover:bg-[#f28627]/5"
                >
                  <item.icon className="mt-1 h-6 w-6 shrink-0 text-[#f28627]" />
                  <div>
                    <h3 className="font-[var(--font-display)] text-lg font-bold uppercase tracking-wider text-[#1a1a1a]">
                      {item.title}
                    </h3>
                    <p className="mt-1 leading-relaxed text-[#474747]">
                      {item.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Tip box */}
            <div className="mt-10 border-l-4 border-[#f28627] bg-[#f28627]/5 p-6">
              <p className="font-[var(--font-display)] text-lg font-bold uppercase tracking-wider text-[#1a1a1a]">
                Tipp:
              </p>
              <p className="mt-2 leading-relaxed text-[#474747]">
                Auftragszettel liegen vor Ort an unserem Briefkasten bereit. Sie
                konnen die Angaben aber auch auf einem eigenen Zettel notieren.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Vorteile der 24h-Annahme ── */}
      <section className="relative overflow-hidden bg-[#1a1a1a] py-20 sm:py-28">
        <div className="pointer-events-none absolute -right-16 top-10 select-none font-[var(--font-display)] text-[20rem] font-bold leading-none text-white/[0.03]">
          24h
        </div>

        <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-16">
          <div className="mb-16 flex items-center gap-4">
            <CheckCircle2 className="h-10 w-10 shrink-0 text-[#f28627]" />
            <div className="h-1 w-16 bg-[#f28627]" />
          </div>

          <h2 className="font-[var(--font-display)] text-3xl font-bold uppercase leading-tight tracking-tight text-white sm:text-4xl">
            Ihre Vorteile &mdash;{" "}
            <span className="text-[#f28627]">auf einen Blick</span>
          </h2>

          <div className="mt-16 grid gap-8 sm:grid-cols-2">
            {[
              {
                icon: Clock,
                title: "Flexibel",
                text: "Geben Sie Ihr Fahrzeug ab, wann es Ihnen passt — auch abends, nachts oder am Wochenende. Unsere Annahme ist rund um die Uhr verfugbar.",
              },
              {
                icon: ArrowRight,
                title: "Ohne Wartezeit",
                text: "Kein Stehen in der Schlange, kein Warten auf einen freien Berater. Schlussel einwerfen und fertig.",
              },
              {
                icon: CalendarCheck,
                title: "Planbar",
                text: "Ihr Fahrzeug steht morgens bereit, wenn unsere Mechaniker den Tag beginnen. So kann der Auftrag schnellstmoglich bearbeitet werden.",
              },
              {
                icon: ShieldCheck,
                title: "Sicher",
                text: "Unser Gelande ist eingezaunt und beleuchtet. Ihr Fahrzeug steht sicher, bis wir uns am nachsten Werktag darum kummern.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="group relative border-2 border-white/10 bg-white/5 p-8 transition-all duration-300 hover:border-[#f28627]/50 hover:bg-white/[0.08]"
              >
                <item.icon className="mb-4 h-8 w-8 text-[#f28627]" />
                <h3 className="font-[var(--font-display)] text-xl font-bold uppercase tracking-wider text-white">
                  {item.title}
                </h3>
                <p className="mt-4 leading-relaxed text-white/60">
                  {item.text}
                </p>
                <div className="absolute bottom-0 left-0 h-1 w-0 bg-[#f28627] transition-all duration-500 group-hover:w-full" />
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-16">
            <Link
              href="/kontakt"
              className="group inline-flex items-center gap-3 bg-[#f28627] px-8 py-4 font-[var(--font-display)] text-lg font-bold uppercase tracking-wider text-white transition-all duration-300 hover:bg-[#d4710e] hover:shadow-xl hover:shadow-[#f28627]/30 -skew-x-6"
            >
              <span className="inline-flex items-center gap-3 skew-x-6">
                <Phone className="h-5 w-5" />
                Fragen? Kontaktieren Sie uns
                <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
              </span>
            </Link>
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
