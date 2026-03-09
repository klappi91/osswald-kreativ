import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  Car,
  Shield,
  CreditCard,
  BadgeCheck,
  Phone,
  ExternalLink,
  ArrowUpRight,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Gebrauchtfahrzeuge",
};

const SERVICE_POINTS = [
  {
    icon: Shield,
    title: "TÜV Gebrauchtwagencheck",
    description:
      "Jedes Fahrzeug wird vor dem Verkauf umfassend geprüft und aufbereitet.",
  },
  {
    icon: Car,
    title: "Hebebühne",
    description:
      "Professionelle Inspektion von unten - keine versteckten Mängel.",
  },
  {
    icon: CreditCard,
    title: "Finanzierung möglich",
    description:
      "Flexible Finanzierung über die Santander Bank - passend zu Ihrem Budget.",
  },
  {
    icon: BadgeCheck,
    title: "12 Monate Garantie",
    description:
      "Gesonderte Gebrauchtwagen-Garantie für 12 Monate auf unsere Fahrzeuge.",
  },
  {
    icon: Phone,
    title: "Probefahrt vereinbaren",
    description:
      "Rufen Sie uns an und vereinbaren Sie eine unverbindliche Probefahrt.",
  },
];

export default function VerkaufPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[40vh] min-h-[360px] overflow-hidden">
        <Image
          src="/images/emotionheader5810301951.jpg"
          alt="Gebrauchtfahrzeuge Autohaus Oßwald"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-dark/90 via-dark/70 to-dark/40" />

        {/* Decorative diagonal */}
        <div
          className="absolute -bottom-1 left-0 right-0 h-24 bg-white"
          style={{ clipPath: "polygon(0 60%, 100% 100%, 0 100%)" }}
        />

        <div className="relative z-10 mx-auto flex h-full max-w-7xl items-end px-6 pb-20 lg:px-10">
          <div>
            <span className="mb-3 inline-block font-[var(--font-display)] text-xs font-medium uppercase tracking-[0.3em] text-[#f28627]">
              Qualität zum fairen Preis
            </span>
            <h1 className="font-[var(--font-display)] text-5xl font-bold uppercase tracking-tight text-white sm:text-6xl md:text-7xl lg:text-8xl">
              Gebraucht-
              <br />
              <span className="text-gradient">fahrzeuge</span>
            </h1>
          </div>
        </div>
      </section>

      {/* Service Points Section */}
      <section className="relative overflow-hidden bg-white py-24 lg:py-32">
        {/* Decorative large text */}
        <div className="pointer-events-none absolute -left-10 top-20 select-none font-[var(--font-display)] text-[12rem] font-bold uppercase leading-none text-black/[0.02] sm:text-[18rem]">
          Verkauf
        </div>

        <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
          <div className="mb-16 max-w-3xl">
            <span className="mb-3 inline-block font-[var(--font-display)] text-xs font-medium uppercase tracking-[0.3em] text-[#f28627]">
              Unser Service für Sie
            </span>
            <h2 className="font-[var(--font-display)] text-4xl font-bold uppercase tracking-tight text-[#1a1a1a] sm:text-5xl lg:text-6xl">
              Sorglos zum <span className="text-gradient">Traumauto</span>
            </h2>
          </div>

          {/* Service Cards - asymmetric grid */}
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {SERVICE_POINTS.map((point, index) => (
              <div
                key={point.title}
                className={`group relative overflow-hidden border border-transparent bg-[#f7f7f7] transition-all duration-300 hover:-translate-y-1 hover:border-[#f28627]/20 hover:shadow-xl ${
                  index === 0 ? "sm:col-span-2 lg:col-span-1" : ""
                }`}
              >
                {/* Top accent */}
                <div className="h-1 w-0 bg-gradient-to-r from-[#f28627] to-[#d4710e] transition-all duration-500 group-hover:w-full" />

                <div className="p-8">
                  {/* Icon */}
                  <div className="mb-6 flex h-14 w-14 items-center justify-center bg-[#1a1a1a] text-white transition-all duration-300 group-hover:bg-[#f28627] -skew-x-6">
                    <point.icon className="h-6 w-6 skew-x-6" />
                  </div>

                  {/* Content */}
                  <h3 className="mb-3 font-[var(--font-display)] text-xl font-bold uppercase tracking-wider text-[#1a1a1a]">
                    {point.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-[#474747]">
                    {point.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* mobile.de CTA Section */}
      <section className="relative overflow-hidden bg-[#1a1a1a] py-24 lg:py-32">
        {/* Decorative diagonal accent */}
        <div
          className="absolute right-0 top-0 h-full w-1/3 bg-[#f28627]/5"
          style={{ clipPath: "polygon(100% 0, 0 0, 100% 100%)" }}
        />

        {/* Decorative */}
        <div className="pointer-events-none absolute -left-10 bottom-0 select-none font-[var(--font-display)] text-[14rem] font-bold uppercase leading-none text-white/[0.02]">
          mobile.de
        </div>

        <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            {/* Left - Text */}
            <div>
              <span className="mb-3 inline-block font-[var(--font-display)] text-xs font-medium uppercase tracking-[0.3em] text-[#f28627]">
                Unsere aktuellen Angebote
              </span>
              <h2 className="mb-6 font-[var(--font-display)] text-4xl font-bold uppercase tracking-tight text-white sm:text-5xl">
                Fahrzeuge auf
                <br />
                <span className="text-gradient">mobile.de</span>
              </h2>
              <p className="mb-10 max-w-md text-lg leading-relaxed text-white/60">
                Entdecken Sie unser aktuelles Gebrauchtwagen-Angebot auf mobile.de.
                Alle Fahrzeuge geprüft, mit Garantie und zum fairen Preis.
              </p>

              <div className="flex flex-col gap-4 sm:flex-row">
                <a
                  href="https://home.mobile.de/ATOAUTOTECHNIKOSSWALD#ses"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-3 bg-[#f28627] px-10 py-4 font-[var(--font-display)] text-sm font-bold uppercase tracking-widest text-white transition-all duration-300 hover:bg-[#d4710e] hover:shadow-lg hover:shadow-[#f28627]/30 -skew-x-6"
                >
                  <span className="inline-flex items-center gap-3 skew-x-6">
                    Fahrzeuge ansehen
                    <ExternalLink className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </a>
              </div>
            </div>

            {/* Right - Large icon / visual element */}
            <div className="flex items-center justify-center">
              <div className="relative">
                {/* Background shape */}
                <div className="absolute inset-0 scale-110 bg-[#f28627]/5 -skew-x-12" />
                <div className="relative flex h-64 w-64 items-center justify-center">
                  <Car className="h-32 w-32 text-[#f28627]/20" />
                  <ArrowUpRight className="absolute right-8 top-8 h-12 w-12 text-[#f28627]/40" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Phone CTA */}
      <section className="relative overflow-hidden bg-[#f28627] py-16 lg:py-20">
        <div className="relative mx-auto max-w-7xl px-6 text-center lg:px-10">
          <h2 className="mb-4 font-[var(--font-display)] text-3xl font-bold uppercase tracking-tight text-white sm:text-4xl">
            Interesse an einem Fahrzeug?
          </h2>
          <p className="mx-auto mb-8 max-w-lg text-lg text-white/80">
            Rufen Sie uns an und vereinbaren Sie eine unverbindliche Probefahrt.
            Wir beraten Sie gerne.
          </p>
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="tel:+495441975551"
              className="group inline-flex items-center gap-3 bg-white px-10 py-4 font-[var(--font-display)] text-sm font-bold uppercase tracking-widest text-[#1a1a1a] transition-all duration-300 hover:shadow-xl -skew-x-6"
            >
              <span className="inline-flex items-center gap-3 skew-x-6">
                <Phone className="h-5 w-5 text-[#f28627]" />
                +49 5441 / 975551
              </span>
            </a>
            <Link
              href="/kontakt"
              className="inline-block border-2 border-white px-10 py-4 font-[var(--font-display)] text-sm font-bold uppercase tracking-widest text-white transition-all duration-300 hover:bg-white hover:text-[#1a1a1a] -skew-x-6"
            >
              <span className="inline-block skew-x-6">Kontakt</span>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
