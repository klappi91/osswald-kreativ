import Link from "next/link";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Instagram,
  Facebook,
  ExternalLink,
  Car,
} from "lucide-react";

const OPENING_HOURS = [
  { days: "Mo \u2013 Fr", hours: "8:00 \u2013 17:00 Uhr" },
  { days: "Sa", hours: "9:00 \u2013 12:00 Uhr" },
  { days: "So", hours: "geschlossen" },
];

const SOCIAL_LINKS = [
  {
    label: "Instagram",
    href: "https://www.instagram.com/autohaus.osswald/",
    icon: Instagram,
  },
  {
    label: "Facebook",
    href: "https://www.facebook.com/108136126529912/",
    icon: Facebook,
  },
  {
    label: "mobile.de",
    href: "https://home.mobile.de/ATOAUTOTECHNIKOSSWALD#ses",
    icon: Car,
  },
];

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden bg-dark text-white">
      {/* Top accent line */}
      <div className="h-1.5 w-full bg-gradient-to-r from-orange via-orange-dark to-transparent" />

      {/* Large decorative background text */}
      <div className="pointer-events-none absolute -left-10 top-10 select-none font-display text-[14rem] font-bold uppercase leading-none tracking-tight text-white/[0.02] sm:text-[20rem]">
        O&szlig;wald
      </div>

      {/* Main Footer Content */}
      <div className="relative mx-auto max-w-7xl px-6 pt-20 pb-12 lg:px-10">
        {/* Section Header - asymmetric */}
        <div className="mb-16">
          <span className="mb-2 block font-display text-xs font-medium uppercase tracking-[0.3em] text-orange">
            Ihr Autohaus in Diepholz
          </span>
          <h2 className="font-display text-5xl font-bold uppercase tracking-tight text-white sm:text-6xl lg:text-7xl">
            Kontakt &amp;
            <br />
            <span className="text-gradient">Anfahrt</span>
          </h2>
        </div>

        {/* Grid - deliberately asymmetric widths */}
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-12 lg:gap-8">
          {/* Column 1 - Company Info (wider) */}
          <div className="lg:col-span-5">
            <h3 className="mb-6 font-display text-lg font-semibold uppercase tracking-widest text-white">
              Autohaus O&szlig;wald
            </h3>
            <address className="space-y-4 not-italic">
              <div className="group flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center bg-orange/10 transition-colors group-hover:bg-orange/20">
                  <MapPin className="h-5 w-5 text-orange" />
                </div>
                <div>
                  <p className="text-sm leading-relaxed text-white/70">
                    Autohaus O&szlig;wald GmbH &amp; Co. KG
                    <br />
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
                <div className="flex h-10 w-10 shrink-0 items-center justify-center bg-orange/10 transition-colors group-hover:bg-orange/20">
                  <Phone className="h-5 w-5 text-orange" />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-wider text-white/40">
                    Telefon
                  </p>
                  <p className="text-sm text-white/70 transition-colors group-hover:text-orange">
                    +49 5441 / 975551
                  </p>
                  <p className="mt-1 text-xs text-white/40">
                    Fax: +49 5441 / 592487
                  </p>
                </div>
              </a>

              <a
                href="mailto:autohaus-osswald@web.de"
                className="group flex items-start gap-4 transition-colors"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center bg-orange/10 transition-colors group-hover:bg-orange/20">
                  <Mail className="h-5 w-5 text-orange" />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-wider text-white/40">
                    E-Mail
                  </p>
                  <p className="text-sm text-white/70 transition-colors group-hover:text-orange">
                    autohaus-osswald@web.de
                  </p>
                </div>
              </a>
            </address>
          </div>

          {/* Column 2 - Opening Hours */}
          <div className="lg:col-span-3">
            <h3 className="mb-6 font-display text-lg font-semibold uppercase tracking-widest text-white">
              &Ouml;ffnungszeiten
            </h3>
            <div className="space-y-3">
              <div className="mb-4 flex items-center gap-3">
                <Clock className="h-5 w-5 text-orange" />
                <span className="text-xs uppercase tracking-wider text-white/40">
                  Werkstatt &amp; Verkauf
                </span>
              </div>
              {OPENING_HOURS.map((row) => (
                <div
                  key={row.days}
                  className="flex items-center justify-between border-b border-white/5 pb-3"
                >
                  <span className="text-sm font-medium text-white/70">
                    {row.days}
                  </span>
                  <span
                    className={`text-sm ${
                      row.hours === "geschlossen"
                        ? "text-white/30"
                        : "text-white/70"
                    }`}
                  >
                    {row.hours}
                  </span>
                </div>
              ))}

              {/* Sofortservice badge */}
              <div className="mt-6 inline-flex items-center gap-2 bg-orange/10 px-4 py-2 -skew-x-3">
                <span className="inline-block skew-x-3 text-xs font-bold uppercase tracking-wider text-orange">
                  Sofortservice ohne Termin
                </span>
              </div>
            </div>
          </div>

          {/* Column 3 - Social & Links */}
          <div className="lg:col-span-4">
            <h3 className="mb-6 font-display text-lg font-semibold uppercase tracking-widest text-white">
              Folgen &amp; Finden
            </h3>

            {/* Social Links - large, bold */}
            <div className="mb-8 space-y-3">
              {SOCIAL_LINKS.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-4 rounded-none border border-white/5 px-5 py-4 transition-all hover:border-orange/30 hover:bg-white/[0.03]"
                >
                  <social.icon className="h-5 w-5 text-orange transition-transform group-hover:scale-110" />
                  <span className="flex-1 font-display text-sm uppercase tracking-wider text-white/70 transition-colors group-hover:text-white">
                    {social.label}
                  </span>
                  <ExternalLink className="h-4 w-4 text-white/20 transition-colors group-hover:text-orange" />
                </a>
              ))}
            </div>

            {/* Legal Links */}
            <div className="flex gap-6 border-t border-white/5 pt-6">
              <Link
                href="/impressum"
                className="text-xs uppercase tracking-wider text-white/40 transition-colors hover:text-orange"
              >
                Impressum
              </Link>
              <Link
                href="/datenschutz"
                className="text-xs uppercase tracking-wider text-white/40 transition-colors hover:text-orange"
              >
                Datenschutz
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar - full width, asymmetric */}
      <div className="relative border-t border-white/5">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 py-6 sm:flex-row lg:px-10">
          <p className="text-xs text-white/30">
            &copy; {year} Autohaus O&szlig;wald GmbH &amp; Co. KG. Alle Rechte
            vorbehalten.
          </p>
          <div className="flex items-center gap-2">
            <span className="h-px w-8 bg-orange/40" />
            <span className="text-xs uppercase tracking-[0.2em] text-orange/60">
              Diepholz
            </span>
            <span className="h-px w-8 bg-orange/40" />
          </div>
        </div>
      </div>
    </footer>
  );
}
