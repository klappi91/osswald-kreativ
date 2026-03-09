import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Impressum",
};

export default function ImpressumPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative flex h-[30vh] min-h-[240px] items-end overflow-hidden bg-[#1a1a1a]">
        <div className="pointer-events-none absolute -right-10 top-10 select-none font-[var(--font-display)] text-[10rem] font-bold uppercase leading-none text-white/[0.03] sm:text-[14rem]">
          Impressum
        </div>
        <div className="absolute -bottom-1 left-0 right-0 h-24 bg-white" style={{ clipPath: "polygon(0 100%, 100% 60%, 100% 100%)" }} />
        <div className="relative z-10 mx-auto w-full max-w-7xl px-6 pb-20 lg:px-10">
          <span className="mb-3 inline-block font-[var(--font-display)] text-xs font-medium uppercase tracking-[0.3em] text-[#f28627]">
            Rechtliches
          </span>
          <h1 className="font-[var(--font-display)] text-5xl font-bold uppercase tracking-tight text-white sm:text-6xl md:text-7xl">
            Impressum
          </h1>
        </div>
      </section>

      {/* Content */}
      <section className="bg-white py-20 lg:py-28">
        <div className="mx-auto max-w-4xl px-6 lg:px-10">
          <div className="space-y-12 text-base leading-relaxed text-[#474747]">

            {/* Verantwortlich */}
            <div>
              <p className="mb-4 font-semibold text-[#1a1a1a]">Verantwortlich:</p>
              <p>
                Autohaus O&szlig;wald GmbH &amp; Co. KG<br />
                Auf dem Esch 21<br />
                49356 Diepholz
              </p>
            </div>

            {/* Kontakt */}
            <div>
              <h2 className="mb-4 font-[var(--font-display)] text-2xl font-bold uppercase tracking-wider text-[#f28627]">
                Kontakt
              </h2>
              <p>
                Telefon: +49 5441/975551<br />
                Fax: +49 5441/592487<br />
                E-Mail: autohaus-osswald@web.de
              </p>
            </div>

            {/* Registereintrag */}
            <div>
              <h2 className="mb-4 font-[var(--font-display)] text-2xl font-bold uppercase tracking-wider text-[#f28627]">
                Registereintrag
              </h2>
              <p>
                Handelsregister A<br />
                Amtsgericht Walsrode<br />
                HRA 202512
              </p>
            </div>

            {/* Umsatzsteuer-ID */}
            <div>
              <h2 className="mb-4 font-[var(--font-display)] text-2xl font-bold uppercase tracking-wider text-[#f28627]">
                Umsatzsteuer-ID
              </h2>
              <p>DE 296140060</p>
            </div>

            {/* Steuernummer */}
            <div>
              <h2 className="mb-4 font-[var(--font-display)] text-2xl font-bold uppercase tracking-wider text-[#f28627]">
                Steuernummer
              </h2>
              <p>45/200/21919</p>
            </div>

            {/* Haftung für Inhalte */}
            <div>
              <h2 className="mb-4 font-[var(--font-display)] text-2xl font-bold uppercase tracking-wider text-[#f28627]">
                Haftung f&uuml;r Inhalte
              </h2>
              <p>
                Als Diensteanbieter sind wir gem&auml;&szlig; &sect; 7 Abs.1 TMG f&uuml;r eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach &sect;&sect; 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht verpflichtet, &uuml;bermittelte oder gespeicherte fremde Informationen zu &uuml;berwachen oder nach Umst&auml;nden zu forschen, die auf eine rechtswidrige T&auml;tigkeit hinweisen. Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen Gesetzen bleiben hiervon unber&uuml;hrt. Eine diesbez&uuml;gliche Haftung ist jedoch erst ab dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung m&ouml;glich. Bei Bekanntwerden von entsprechenden Rechtsverletzungen werden wir diese Inhalte umgehend entfernen.
              </p>
            </div>

            {/* Haftung für Links */}
            <div>
              <h2 className="mb-4 font-[var(--font-display)] text-2xl font-bold uppercase tracking-wider text-[#f28627]">
                Haftung f&uuml;r Links
              </h2>
              <p>
                Unser Angebot enth&auml;lt Links zu externen Webseiten Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb k&ouml;nnen wir f&uuml;r diese fremden Inhalte auch keine Gew&auml;hr &uuml;bernehmen. F&uuml;r die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich. Die verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf m&ouml;gliche Rechtsverst&ouml;&szlig;e &uuml;berpr&uuml;ft. Rechtswidrige Inhalte waren zum Zeitpunkt der Verlinkung nicht erkennbar. Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist jedoch ohne konkrete Anhaltspunkte einer Rechtsverletzung nicht zumutbar. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Links umgehend entfernen.
              </p>
            </div>

            {/* Urheberrecht */}
            <div>
              <h2 className="mb-4 font-[var(--font-display)] text-2xl font-bold uppercase tracking-wider text-[#f28627]">
                Urheberrecht
              </h2>
              <p>
                Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Die Vervielf&auml;ltigung, Bearbeitung, Verbreitung und jede Art der Verwertung au&szlig;erhalb der Grenzen des Urheberrechtes bed&uuml;rfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers. Downloads und Kopien dieser Seite sind nur f&uuml;r den privaten, nicht kommerziellen Gebrauch gestattet. Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt wurden, werden die Urheberrechte Dritter beachtet. Insbesondere werden Inhalte Dritter als solche gekennzeichnet. Sollten Sie trotzdem auf eine Urheberrechtsverletzung aufmerksam werden, bitten wir um einen entsprechenden Hinweis. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Inhalte umgehend entfernen.
              </p>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}
