import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Users, Phone, Wrench, Star } from "lucide-react";

export const metadata: Metadata = {
  title: "Unser Betrieb",
};

const TEAM_MEMBERS = [
  {
    name: "Bernd Oßwald",
    role: "Kfz-Meister und Firmeninhaber",
    lead: true,
  },
  {
    name: "Marcel Oßwald",
    role: "Kfz-Mechatroniker",
    lead: false,
  },
  {
    name: "Katharina Lang",
    role: "Bürokauffrau",
    lead: false,
  },
  {
    name: "Raphael-Leon Göttmann",
    role: "Auszubildender 4. Lehrjahr, KFZ-Mechatroniker",
    lead: false,
  },
  {
    name: "Ben Oßwald",
    role: "Auszubildender 1. Lehrjahr, KFZ-Mechatroniker",
    lead: false,
  },
  {
    name: "Dawid Kuziemski",
    role: "Auszubildender 1. Lehrjahr, KFZ-Mechatroniker",
    lead: false,
  },
];

export default function UnserBetriebPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[40vh] min-h-[360px] overflow-hidden">
        <Image
          src="/images/cache_2447478028.jpg"
          alt="Autohaus Oßwald Werkstatt"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-dark/90 via-dark/70 to-dark/50" />

        {/* Decorative diagonal */}
        <div className="absolute -bottom-1 left-0 right-0 h-24 bg-white" style={{ clipPath: "polygon(0 100%, 100% 60%, 100% 100%)" }} />

        <div className="relative z-10 mx-auto flex h-full max-w-7xl items-end px-6 pb-20 lg:px-10">
          <div>
            <span className="mb-3 inline-block font-[var(--font-display)] text-xs font-medium uppercase tracking-[0.3em] text-[#f28627]">
              Seit Generationen
            </span>
            <h1 className="font-[var(--font-display)] text-5xl font-bold uppercase tracking-tight text-white sm:text-6xl md:text-7xl lg:text-8xl">
              Unser
              <br />
              <span className="text-gradient">Betrieb</span>
            </h1>
          </div>
        </div>
      </section>

      {/* About Section - Asymmetric Layout */}
      <section className="relative overflow-hidden bg-white py-24 lg:py-32">
        {/* Decorative large text */}
        <div className="pointer-events-none absolute -right-20 top-10 select-none font-[var(--font-display)] text-[12rem] font-bold uppercase leading-none text-black/[0.02] sm:text-[18rem]">
          Werkstatt
        </div>

        <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
          <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-8">
            {/* Text Column - wider */}
            <div className="lg:col-span-7">
              <span className="mb-4 inline-block font-[var(--font-display)] text-xs font-medium uppercase tracking-[0.3em] text-[#f28627]">
                Ihre Kfz-Werkstatt in Diepholz
              </span>
              <h2 className="mb-8 font-[var(--font-display)] text-4xl font-bold uppercase tracking-tight text-[#1a1a1a] sm:text-5xl">
                Vertrauen durch
                <br />
                <span className="text-gradient">Qualität</span>
              </h2>

              <div className="space-y-5 text-base leading-relaxed text-[#474747]">
                <p>
                  Unsere Kfz-Reparaturwerkstatt in Diepholz ist ein vertrauensvoller
                  Ansprechpartner für Reparaturen aller Art. Ihre Sicherheit in Ihrem
                  Fahrzeug ist dann gegeben, wenn das Auto ohne Mängel auf den Straßen
                  unterwegs ist. Daher übernehmen wir neben der umfassenden Beratung
                  auch wichtige Sicherheitschecks für Sie.
                </p>
                <p>
                  In unserer Werkstatt wird Ihr Fahrzeug ausschließlich von
                  qualifiziertem Fachpersonal repariert. Inspektionen werden von
                  speziell ausgebildeten Prüfern durchgeführt, damit auch der TÜV kein
                  Problem für Sie wird.
                </p>
                <p>
                  Direkt vor Ort übernehmen wir die Ausbesserung von Blechschäden, die
                  beispielsweise durch Hagel entstanden sind. Auch ohne vorher
                  vereinbarten Termin können Sie Ihr Fahrzeug bei uns prüfen und Mängel
                  beseitigen lassen.
                </p>
                <p>
                  Unsere Werkstatt arbeitet mit der neuesten Technik und aktuellsten
                  Erkenntnissen unseres Berufstands.
                </p>
                <p>
                  Wir legen Wert auf individuelle Kundenbetreuung, faire und
                  transparente Preise sowie die hohe Qualität unserer Arbeit. Wir
                  beraten Sie jederzeit gerne und sorgen verantwortungsbewusst für
                  Ihren Komfort sowie Ihre Sicherheit in Ihrem Fahrzeug.
                </p>
              </div>

              {/* Accent badges */}
              <div className="mt-10 flex flex-wrap gap-4">
                <div className="flex items-center gap-3 bg-[#f28627]/10 px-5 py-3 -skew-x-3">
                  <Wrench className="h-5 w-5 skew-x-3 text-[#f28627]" />
                  <span className="skew-x-3 font-[var(--font-display)] text-sm font-semibold uppercase tracking-wider text-[#1a1a1a]">
                    Meisterqualität
                  </span>
                </div>
                <div className="flex items-center gap-3 bg-[#f28627]/10 px-5 py-3 -skew-x-3">
                  <Star className="h-5 w-5 skew-x-3 text-[#f28627]" />
                  <span className="skew-x-3 font-[var(--font-display)] text-sm font-semibold uppercase tracking-wider text-[#1a1a1a]">
                    Faire Preise
                  </span>
                </div>
              </div>
            </div>

            {/* Image Column - overlapping effect */}
            <div className="relative lg:col-span-5">
              <div className="relative">
                {/* Orange accent block behind image */}
                <div className="absolute -right-4 -top-4 h-full w-full bg-[#f28627]/20" />
                <div className="relative aspect-[4/5] overflow-hidden">
                  <Image
                    src="/images/cache_2447480223.jpg"
                    alt="Werkstatt Autohaus Oßwald"
                    fill
                    className="object-cover"
                  />
                </div>
                {/* Overlapping label */}
                <div className="absolute -bottom-6 -left-6 bg-[#1a1a1a] px-8 py-4">
                  <span className="font-[var(--font-display)] text-lg font-bold uppercase tracking-wider text-white">
                    Diepholz
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="relative overflow-hidden bg-[#f7f7f7] py-24 lg:py-32">
        {/* Diagonal top accent */}
        <div className="absolute left-0 right-0 top-0 h-24 bg-white" style={{ clipPath: "polygon(0 0, 100% 0, 100% 0%, 0 100%)" }} />

        <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
          <div className="mb-16 max-w-2xl">
            <span className="mb-3 inline-block font-[var(--font-display)] text-xs font-medium uppercase tracking-[0.3em] text-[#f28627]">
              Die Menschen hinter der Marke
            </span>
            <h2 className="font-[var(--font-display)] text-4xl font-bold uppercase tracking-tight text-[#1a1a1a] sm:text-5xl lg:text-6xl">
              Unser <span className="text-gradient">Team</span>
            </h2>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {TEAM_MEMBERS.map((member) => (
              <div
                key={member.name}
                className={`group relative overflow-hidden border transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ${
                  member.lead
                    ? "border-[#f28627]/30 bg-white sm:col-span-2 lg:col-span-1 lg:row-span-1"
                    : "border-transparent bg-white"
                }`}
              >
                {/* Orange top bar for lead */}
                {member.lead && (
                  <div className="h-1 w-full bg-gradient-to-r from-[#f28627] to-[#d4710e]" />
                )}

                <div className="flex flex-col items-center px-6 py-10 text-center">
                  {/* Avatar placeholder */}
                  <div
                    className={`mb-6 flex h-20 w-20 items-center justify-center rounded-full transition-all duration-300 group-hover:scale-110 ${
                      member.lead
                        ? "bg-[#f28627] text-white"
                        : "bg-[#1a1a1a]/5 text-[#474747] group-hover:bg-[#f28627]/10 group-hover:text-[#f28627]"
                    }`}
                  >
                    <Users className="h-8 w-8" />
                  </div>

                  {/* Name */}
                  <h3
                    className={`mb-2 font-[var(--font-display)] text-xl font-bold uppercase tracking-wider ${
                      member.lead ? "text-[#f28627]" : "text-[#1a1a1a]"
                    }`}
                  >
                    {member.name}
                  </h3>

                  {/* Role */}
                  <p className="text-sm leading-relaxed text-[#474747]">
                    {member.role}
                  </p>

                  {/* Lead badge */}
                  {member.lead && (
                    <div className="mt-4 inline-flex items-center gap-2 bg-[#f28627]/10 px-4 py-1.5 -skew-x-3">
                      <Star className="h-3.5 w-3.5 skew-x-3 text-[#f28627]" />
                      <span className="skew-x-3 text-xs font-bold uppercase tracking-wider text-[#f28627]">
                        Geschäftsführer
                      </span>
                    </div>
                  )}
                </div>

                {/* Hover accent line at bottom */}
                <div className="h-0.5 w-0 bg-[#f28627] transition-all duration-500 group-hover:w-full" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative overflow-hidden bg-[#1a1a1a] py-24 lg:py-32">
        {/* Decorative */}
        <div className="pointer-events-none absolute -right-10 -top-10 select-none font-[var(--font-display)] text-[16rem] font-bold uppercase leading-none text-white/[0.02]">
          Kontakt
        </div>

        <div className="relative mx-auto max-w-7xl px-6 text-center lg:px-10">
          <h2 className="mb-6 font-[var(--font-display)] text-4xl font-bold uppercase tracking-tight text-white sm:text-5xl lg:text-6xl">
            Überzeugen Sie sich <span className="text-gradient">selbst</span>
          </h2>
          <p className="mx-auto mb-10 max-w-xl text-lg leading-relaxed text-white/60">
            Besuchen Sie uns in Diepholz oder rufen Sie uns an.
            Wir freuen uns auf Sie.
          </p>
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/kontakt"
              className="inline-block bg-[#f28627] px-10 py-4 font-[var(--font-display)] text-sm font-bold uppercase tracking-widest text-white transition-all duration-300 hover:bg-[#d4710e] hover:shadow-lg hover:shadow-[#f28627]/30 -skew-x-6"
            >
              <span className="inline-block skew-x-6">Kontakt aufnehmen</span>
            </Link>
            <a
              href="tel:+495441975551"
              className="group inline-flex items-center gap-3 px-8 py-4 font-[var(--font-display)] text-sm font-semibold uppercase tracking-widest text-white/70 transition-colors hover:text-[#f28627]"
            >
              <Phone className="h-5 w-5 text-[#f28627]" />
              +49 5441 / 975551
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
