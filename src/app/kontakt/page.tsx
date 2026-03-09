import type { Metadata } from "next";
import Link from "next/link";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Send,
  Instagram,
  Facebook,
  Building,
  Printer,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Kontakt",
};

const OPENING_HOURS = [
  { days: "Mo \u2013 Fr", hours: "8:00 \u2013 17:00 Uhr", open: true },
  { days: "Sa", hours: "9:00 \u2013 12:00 Uhr", open: true },
  { days: "So", hours: "geschlossen", open: false },
];

export default function KontaktPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[40vh] min-h-[360px] overflow-hidden bg-[#1a1a1a]">
        {/* Abstract decorative shapes */}
        <div
          className="absolute right-0 top-0 h-full w-2/3 bg-[#f28627]/5"
          style={{ clipPath: "polygon(40% 0, 100% 0, 100% 100%, 20% 100%)" }}
        />
        <div className="pointer-events-none absolute -right-20 bottom-0 select-none font-[var(--font-display)] text-[16rem] font-bold uppercase leading-none text-white/[0.03]">
          Kontakt
        </div>

        {/* Decorative diagonal */}
        <div
          className="absolute -bottom-1 left-0 right-0 h-24 bg-white"
          style={{ clipPath: "polygon(0 100%, 100% 60%, 100% 100%)" }}
        />

        <div className="relative z-10 mx-auto flex h-full max-w-7xl items-end px-6 pb-20 lg:px-10">
          <div>
            <span className="mb-3 inline-block font-[var(--font-display)] text-xs font-medium uppercase tracking-[0.3em] text-[#f28627]">
              Wir sind für Sie da
            </span>
            <h1 className="font-[var(--font-display)] text-5xl font-bold uppercase tracking-tight text-white sm:text-6xl md:text-7xl lg:text-8xl">
              <span className="text-gradient">Kontakt</span>
            </h1>
          </div>
        </div>
      </section>

      {/* Main Content - Two Column */}
      <section className="relative overflow-hidden bg-white py-24 lg:py-32">
        {/* Decorative large text */}
        <div className="pointer-events-none absolute -right-10 top-20 select-none font-[var(--font-display)] text-[12rem] font-bold uppercase leading-none text-black/[0.02] sm:text-[16rem]">
          Schreiben
        </div>

        <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
          <div className="grid gap-16 lg:grid-cols-12 lg:gap-12">
            {/* Left Column - Contact Form */}
            <div className="lg:col-span-7">
              <span className="mb-3 inline-block font-[var(--font-display)] text-xs font-medium uppercase tracking-[0.3em] text-[#f28627]">
                Nachricht senden
              </span>
              <h2 className="mb-10 font-[var(--font-display)] text-4xl font-bold uppercase tracking-tight text-[#1a1a1a] sm:text-5xl">
                Schreiben Sie <span className="text-gradient">uns</span>
              </h2>

              <form className="space-y-6">
                {/* Name + Firma Row */}
                <div className="grid gap-6 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="name"
                      className="mb-2 block font-[var(--font-display)] text-xs font-semibold uppercase tracking-widest text-[#474747]"
                    >
                      Name <span className="text-[#f28627]">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      className="w-full border-b-2 border-[#e5e5e5] bg-transparent px-1 py-3 text-[#1a1a1a] outline-none transition-colors focus:border-[#f28627]"
                      placeholder="Ihr Name"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="firma"
                      className="mb-2 block font-[var(--font-display)] text-xs font-semibold uppercase tracking-widest text-[#474747]"
                    >
                      Firma
                    </label>
                    <input
                      type="text"
                      id="firma"
                      name="firma"
                      className="w-full border-b-2 border-[#e5e5e5] bg-transparent px-1 py-3 text-[#1a1a1a] outline-none transition-colors focus:border-[#f28627]"
                      placeholder="Ihre Firma (optional)"
                    />
                  </div>
                </div>

                {/* Email + Telefon Row */}
                <div className="grid gap-6 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="email"
                      className="mb-2 block font-[var(--font-display)] text-xs font-semibold uppercase tracking-widest text-[#474747]"
                    >
                      E-Mail <span className="text-[#f28627]">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="w-full border-b-2 border-[#e5e5e5] bg-transparent px-1 py-3 text-[#1a1a1a] outline-none transition-colors focus:border-[#f28627]"
                      placeholder="ihre@email.de"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="telefon"
                      className="mb-2 block font-[var(--font-display)] text-xs font-semibold uppercase tracking-widest text-[#474747]"
                    >
                      Telefon
                    </label>
                    <input
                      type="tel"
                      id="telefon"
                      name="telefon"
                      className="w-full border-b-2 border-[#e5e5e5] bg-transparent px-1 py-3 text-[#1a1a1a] outline-none transition-colors focus:border-[#f28627]"
                      placeholder="Ihre Telefonnummer (optional)"
                    />
                  </div>
                </div>

                {/* Nachricht */}
                <div>
                  <label
                    htmlFor="nachricht"
                    className="mb-2 block font-[var(--font-display)] text-xs font-semibold uppercase tracking-widest text-[#474747]"
                  >
                    Nachricht <span className="text-[#f28627]">*</span>
                  </label>
                  <textarea
                    id="nachricht"
                    name="nachricht"
                    required
                    rows={5}
                    className="w-full resize-none border-b-2 border-[#e5e5e5] bg-transparent px-1 py-3 text-[#1a1a1a] outline-none transition-colors focus:border-[#f28627]"
                    placeholder="Wie können wir Ihnen helfen?"
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="group inline-flex items-center gap-3 bg-[#f28627] px-10 py-4 font-[var(--font-display)] text-sm font-bold uppercase tracking-widest text-white transition-all duration-300 hover:bg-[#d4710e] hover:shadow-lg hover:shadow-[#f28627]/30 -skew-x-6"
                >
                  <span className="inline-flex items-center gap-3 skew-x-6">
                    Nachricht senden
                    <Send className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </button>
              </form>
            </div>

            {/* Right Column - Contact Info */}
            <div className="lg:col-span-5">
              {/* Contact Details Card */}
              <div className="mb-8 overflow-hidden border border-[#e5e5e5] bg-white">
                <div className="h-1 w-full bg-gradient-to-r from-[#f28627] to-[#d4710e]" />
                <div className="p-8">
                  <h3 className="mb-6 font-[var(--font-display)] text-lg font-bold uppercase tracking-widest text-[#1a1a1a]">
                    Kontaktdaten
                  </h3>

                  <address className="space-y-5 not-italic">
                    <div className="group flex items-start gap-4">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center bg-[#f28627]/10 transition-colors group-hover:bg-[#f28627]/20">
                        <Building className="h-5 w-5 text-[#f28627]" />
                      </div>
                      <div>
                        <p className="text-xs uppercase tracking-wider text-[#474747]/60">
                          Firma
                        </p>
                        <p className="text-sm font-medium text-[#1a1a1a]">
                          Autohaus O&szlig;wald GmbH &amp; Co. KG
                        </p>
                      </div>
                    </div>

                    <div className="group flex items-start gap-4">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center bg-[#f28627]/10 transition-colors group-hover:bg-[#f28627]/20">
                        <MapPin className="h-5 w-5 text-[#f28627]" />
                      </div>
                      <div>
                        <p className="text-xs uppercase tracking-wider text-[#474747]/60">
                          Adresse
                        </p>
                        <p className="text-sm text-[#474747]">
                          Auf dem Esch 21
                          <br />
                          49356 Diepholz
                        </p>
                      </div>
                    </div>

                    <a
                      href="tel:+495441975551"
                      className="group flex items-start gap-4 transition-colors"
                    >
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center bg-[#f28627]/10 transition-colors group-hover:bg-[#f28627]/20">
                        <Phone className="h-5 w-5 text-[#f28627]" />
                      </div>
                      <div>
                        <p className="text-xs uppercase tracking-wider text-[#474747]/60">
                          Telefon
                        </p>
                        <p className="text-sm text-[#474747] transition-colors group-hover:text-[#f28627]">
                          +49 5441 / 975551
                        </p>
                      </div>
                    </a>

                    <div className="group flex items-start gap-4">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center bg-[#f28627]/10 transition-colors group-hover:bg-[#f28627]/20">
                        <Printer className="h-5 w-5 text-[#f28627]" />
                      </div>
                      <div>
                        <p className="text-xs uppercase tracking-wider text-[#474747]/60">
                          Fax
                        </p>
                        <p className="text-sm text-[#474747]">
                          +49 5441 / 592487
                        </p>
                      </div>
                    </div>

                    <a
                      href="mailto:autohaus-osswald@web.de"
                      className="group flex items-start gap-4 transition-colors"
                    >
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center bg-[#f28627]/10 transition-colors group-hover:bg-[#f28627]/20">
                        <Mail className="h-5 w-5 text-[#f28627]" />
                      </div>
                      <div>
                        <p className="text-xs uppercase tracking-wider text-[#474747]/60">
                          E-Mail
                        </p>
                        <p className="text-sm text-[#474747] transition-colors group-hover:text-[#f28627]">
                          autohaus-osswald@web.de
                        </p>
                      </div>
                    </a>
                  </address>
                </div>
              </div>

              {/* Social Media Links */}
              <div className="mb-8 flex gap-3">
                <a
                  href="https://www.instagram.com/autohaus.osswald/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex flex-1 items-center justify-center gap-3 border border-[#e5e5e5] px-5 py-4 transition-all hover:border-[#f28627]/30 hover:bg-[#f28627]/5"
                >
                  <Instagram className="h-5 w-5 text-[#474747] transition-colors group-hover:text-[#f28627]" />
                  <span className="font-[var(--font-display)] text-xs font-semibold uppercase tracking-wider text-[#474747] transition-colors group-hover:text-[#f28627]">
                    Instagram
                  </span>
                </a>
                <a
                  href="https://www.facebook.com/108136126529912/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex flex-1 items-center justify-center gap-3 border border-[#e5e5e5] px-5 py-4 transition-all hover:border-[#f28627]/30 hover:bg-[#f28627]/5"
                >
                  <Facebook className="h-5 w-5 text-[#474747] transition-colors group-hover:text-[#f28627]" />
                  <span className="font-[var(--font-display)] text-xs font-semibold uppercase tracking-wider text-[#474747] transition-colors group-hover:text-[#f28627]">
                    Facebook
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Opening Hours Section */}
      <section className="relative overflow-hidden bg-[#f7f7f7] py-20 lg:py-24">
        <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <span className="mb-3 inline-block font-[var(--font-display)] text-xs font-medium uppercase tracking-[0.3em] text-[#f28627]">
                Wann Sie uns erreichen
              </span>
              <h2 className="mb-8 font-[var(--font-display)] text-4xl font-bold uppercase tracking-tight text-[#1a1a1a] sm:text-5xl">
                Öffnungs-
                <span className="text-gradient">zeiten</span>
              </h2>

              <div className="space-y-4">
                <div className="mb-6 flex items-center gap-3">
                  <Clock className="h-5 w-5 text-[#f28627]" />
                  <span className="font-[var(--font-display)] text-xs font-semibold uppercase tracking-widest text-[#474747]/60">
                    Werkstatt &amp; Verkauf
                  </span>
                </div>
                {OPENING_HOURS.map((row) => (
                  <div
                    key={row.days}
                    className="flex items-center justify-between border-b border-[#1a1a1a]/5 pb-4"
                  >
                    <span className="font-[var(--font-display)] text-lg font-semibold uppercase tracking-wider text-[#1a1a1a]">
                      {row.days}
                    </span>
                    <span
                      className={`text-lg ${
                        row.open
                          ? "font-medium text-[#474747]"
                          : "text-[#474747]/40"
                      }`}
                    >
                      {row.hours}
                    </span>
                  </div>
                ))}

                {/* Sofortservice badge */}
                <div className="mt-8 inline-flex items-center gap-2 bg-[#f28627]/10 px-5 py-3 -skew-x-3">
                  <span className="skew-x-3 font-[var(--font-display)] text-sm font-bold uppercase tracking-wider text-[#f28627]">
                    Sofortservice ohne Termin
                  </span>
                </div>
              </div>
            </div>

            {/* Map placeholder */}
            <div className="relative">
              <div className="absolute -right-3 -top-3 h-full w-full bg-[#f28627]/10" />
              <div className="relative aspect-[4/3] overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2442.5!2d8.37!3d52.61!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNTLCsDM2JzM2LjAiTiA4wrAyMicxMi4wIkU!5e0!3m2!1sde!2sde!4v1"
                  className="h-full w-full border-0"
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Standort Autohaus Oßwald in Diepholz"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative overflow-hidden bg-[#1a1a1a] py-20 lg:py-24">
        <div className="pointer-events-none absolute -right-10 -top-10 select-none font-[var(--font-display)] text-[14rem] font-bold uppercase leading-none text-white/[0.02]">
          Anruf
        </div>

        <div className="relative mx-auto max-w-7xl px-6 text-center lg:px-10">
          <h2 className="mb-4 font-[var(--font-display)] text-3xl font-bold uppercase tracking-tight text-white sm:text-4xl lg:text-5xl">
            Lieber <span className="text-gradient">persönlich?</span>
          </h2>
          <p className="mx-auto mb-10 max-w-lg text-lg leading-relaxed text-white/60">
            Rufen Sie uns einfach an - wir sind für Sie da.
          </p>
          <a
            href="tel:+495441975551"
            className="group inline-flex items-center gap-3 bg-[#f28627] px-10 py-4 font-[var(--font-display)] text-sm font-bold uppercase tracking-widest text-white transition-all duration-300 hover:bg-[#d4710e] hover:shadow-lg hover:shadow-[#f28627]/30 -skew-x-6"
          >
            <span className="inline-flex items-center gap-3 skew-x-6">
              <Phone className="h-5 w-5" />
              +49 5441 / 975551
            </span>
          </a>
        </div>
      </section>
    </>
  );
}
