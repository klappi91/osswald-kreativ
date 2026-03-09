import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Datenschutz",
};

export default function DatenschutzPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative flex h-[30vh] min-h-[240px] items-end overflow-hidden bg-[#1a1a1a]">
        <div className="pointer-events-none absolute -right-10 top-10 select-none font-[var(--font-display)] text-[10rem] font-bold uppercase leading-none text-white/[0.03] sm:text-[14rem]">
          Datenschutz
        </div>
        <div className="absolute -bottom-1 left-0 right-0 h-24 bg-white" style={{ clipPath: "polygon(0 100%, 100% 60%, 100% 100%)" }} />
        <div className="relative z-10 mx-auto w-full max-w-7xl px-6 pb-20 lg:px-10">
          <span className="mb-3 inline-block font-[var(--font-display)] text-xs font-medium uppercase tracking-[0.3em] text-[#f28627]">
            Rechtliches
          </span>
          <h1 className="font-[var(--font-display)] text-5xl font-bold uppercase tracking-tight text-white sm:text-6xl md:text-7xl">
            Datenschutz
          </h1>
        </div>
      </section>

      {/* Content */}
      <section className="bg-white py-20 lg:py-28">
        <div className="mx-auto max-w-4xl px-6 lg:px-10">
          <div className="space-y-12 text-base leading-relaxed text-[#474747]">

            {/* 1. Datenschutz auf einen Blick */}
            <div>
              <h2 className="mb-8 font-[var(--font-display)] text-3xl font-bold uppercase tracking-wider text-[#1a1a1a]">
                1. Datenschutz auf einen Blick
              </h2>

              <div className="space-y-8">
                <div>
                  <h3 className="mb-3 font-[var(--font-display)] text-xl font-bold uppercase tracking-wider text-[#f28627]">
                    Allgemeine Hinweise
                  </h3>
                  <p>
                    Die folgenden Hinweise geben einen einfachen &Uuml;berblick dar&uuml;ber, was mit Ihren personenbezogenen Daten passiert, wenn Sie unsere Website besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie pers&ouml;nlich identifiziert werden k&ouml;nnen. Ausf&uuml;hrliche Informationen zum Thema Datenschutz entnehmen Sie unserer unter diesem Text aufgef&uuml;hrten Datenschutzerkl&auml;rung.
                  </p>
                </div>

                <div>
                  <h3 className="mb-3 font-[var(--font-display)] text-xl font-bold uppercase tracking-wider text-[#f28627]">
                    Datenerfassung auf unserer Website
                  </h3>

                  <div className="space-y-4">
                    <div>
                      <p className="mb-1 font-semibold text-[#1a1a1a]">Wer ist verantwortlich f&uuml;r die Datenerfassung auf dieser Website?</p>
                      <p>
                        Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber. Dessen Kontaktdaten k&ouml;nnen Sie dem Impressum dieser Website entnehmen.
                      </p>
                    </div>

                    <div>
                      <p className="mb-1 font-semibold text-[#1a1a1a]">Wie erfassen wir Ihre Daten?</p>
                      <p>
                        Ihre Daten werden zum einen dadurch erhoben, dass Sie uns diese mitteilen. Hierbei kann es sich z.B. um Daten handeln, die Sie in ein Kontaktformular eingeben.
                      </p>
                      <p className="mt-2">
                        Andere Daten werden automatisch beim Besuch der Website durch unsere IT-Systeme erfasst. Das sind vor allem technische Daten (z.B. Internetbrowser, Betriebssystem oder Uhrzeit des Seitenaufrufs). Die Erfassung dieser Daten erfolgt automatisch, sobald Sie unsere Website betreten.
                      </p>
                    </div>

                    <div>
                      <p className="mb-1 font-semibold text-[#1a1a1a]">Wof&uuml;r nutzen wir Ihre Daten?</p>
                      <p>
                        Ein Teil der Daten wird erhoben, um eine fehlerfreie Bereitstellung der Website zu gew&auml;hrleisten. Andere Daten k&ouml;nnen zur Analyse Ihres Nutzerverhaltens verwendet werden.
                      </p>
                    </div>

                    <div>
                      <p className="mb-1 font-semibold text-[#1a1a1a]">Welche Rechte haben Sie bez&uuml;glich Ihrer Daten?</p>
                      <p>
                        Sie haben jederzeit das Recht unentgeltlich Auskunft &uuml;ber Herkunft, Empf&auml;nger und Zweck Ihrer gespeicherten personenbezogenen Daten zu erhalten. Sie haben au&szlig;erdem ein Recht, die Berichtigung, Sperrung oder L&ouml;schung dieser Daten zu verlangen. Hierzu sowie zu weiteren Fragen zum Thema Datenschutz k&ouml;nnen Sie sich jederzeit unter der im Impressum angegebenen Adresse an uns wenden. Des Weiteren steht Ihnen ein Beschwerderecht bei der zust&auml;ndigen Aufsichtsbeh&ouml;rde zu.
                      </p>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="mb-3 font-[var(--font-display)] text-xl font-bold uppercase tracking-wider text-[#f28627]">
                    Analyse-Tools und Tools von Drittanbietern
                  </h3>
                  <p>
                    Beim Besuch unserer Website kann Ihr Surf-Verhalten statistisch ausgewertet werden. Das geschieht vor allem mit Cookies und mit sogenannten Analyseprogrammen. Die Analyse Ihres Surf-Verhaltens erfolgt in der Regel anonym; das Surf-Verhalten kann nicht zu Ihnen zur&uuml;ckverfolgt werden. Sie k&ouml;nnen dieser Analyse widersprechen oder sie durch die Nichtbenutzung bestimmter Tools verhindern. Detaillierte Informationen dazu finden Sie in der folgenden Datenschutzerkl&auml;rung.
                  </p>
                  <p className="mt-2">
                    Sie k&ouml;nnen dieser Analyse widersprechen. &Uuml;ber die Widerspruchsm&ouml;glichkeiten werden wir Sie in dieser Datenschutzerkl&auml;rung informieren.
                  </p>
                </div>
              </div>
            </div>

            {/* 2. Allgemeine Hinweise und Pflichtinformationen */}
            <div>
              <h2 className="mb-8 font-[var(--font-display)] text-3xl font-bold uppercase tracking-wider text-[#1a1a1a]">
                2. Allgemeine Hinweise und Pflichtinformationen
              </h2>

              <div className="space-y-8">
                <div>
                  <h3 className="mb-3 font-[var(--font-display)] text-xl font-bold uppercase tracking-wider text-[#f28627]">
                    Datenschutz
                  </h3>
                  <p>
                    Die Betreiber dieser Seiten nehmen den Schutz Ihrer pers&ouml;nlichen Daten sehr ernst. Wir behandeln Ihre personenbezogenen Daten vertraulich und entsprechend der gesetzlichen Datenschutzvorschriften sowie dieser Datenschutzerkl&auml;rung.
                  </p>
                  <p className="mt-2">
                    Wenn Sie diese Website benutzen, werden verschiedene personenbezogene Daten erhoben. Personenbezogene Daten sind Daten, mit denen Sie pers&ouml;nlich identifiziert werden k&ouml;nnen. Die vorliegende Datenschutzerkl&auml;rung erl&auml;utert, welche Daten wir erheben und wof&uuml;r wir sie nutzen. Sie erl&auml;utert auch, wie und zu welchem Zweck das geschieht.
                  </p>
                  <p className="mt-2">
                    Wir weisen darauf hin, dass die Daten&uuml;bertragung im Internet (z.B. bei der Kommunikation per E-Mail) Sicherheitsl&uuml;cken aufweisen kann. Ein l&uuml;ckenloser Schutz der Daten vor dem Zugriff durch Dritte ist nicht m&ouml;glich.
                  </p>
                </div>

                <div>
                  <h3 className="mb-3 font-[var(--font-display)] text-xl font-bold uppercase tracking-wider text-[#f28627]">
                    Hinweis zur verantwortlichen Stelle
                  </h3>
                  <p>
                    Die verantwortliche Stelle f&uuml;r die Datenverarbeitung auf dieser Website ist:
                  </p>
                  <p className="mt-2">
                    Autohaus O&szlig;wald GmbH &amp; Co.KG<br />
                    Auf dem Esch 21<br />
                    D - 49356 Diepholz
                  </p>
                  <p className="mt-2">
                    Telefon: +49 - (05441) 975551<br />
                    E-Mail: autohaus-osswald(at)web.de
                  </p>
                  <p className="mt-2">
                    Verantwortliche Stelle ist die nat&uuml;rliche oder juristische Person, die allein oder gemeinsam mit anderen &uuml;ber die Zwecke und Mittel der Verarbeitung von personenbezogenen Daten (z.B. Namen, E-Mail-Adressen o. &Auml;.) entscheidet.
                  </p>
                </div>

                <div>
                  <h3 className="mb-3 font-[var(--font-display)] text-xl font-bold uppercase tracking-wider text-[#f28627]">
                    Widerruf Ihrer Einwilligung zur Datenverarbeitung
                  </h3>
                  <p>
                    Viele Datenverarbeitungsvorg&auml;nge sind nur mit Ihrer ausdr&uuml;cklichen Einwilligung m&ouml;glich. Sie k&ouml;nnen eine bereits erteilte Einwilligung jederzeit widerrufen. Dazu reicht eine formlose Mitteilung per E-Mail an uns. Die Rechtm&auml;&szlig;igkeit der bis zum Widerruf erfolgten Datenverarbeitung bleibt vom Widerruf unber&uuml;hrt.
                  </p>
                </div>

                <div>
                  <h3 className="mb-3 font-[var(--font-display)] text-xl font-bold uppercase tracking-wider text-[#f28627]">
                    Beschwerderecht bei der zust&auml;ndigen Aufsichtsbeh&ouml;rde
                  </h3>
                  <p>
                    Im Falle datenschutzrechtlicher Verst&ouml;&szlig;e steht dem Betroffenen ein Beschwerderecht bei der zust&auml;ndigen Aufsichtsbeh&ouml;rde zu. Zust&auml;ndige Aufsichtsbeh&ouml;rde in datenschutzrechtlichen Fragen ist der Landesdatenschutzbeauftragte des Bundeslandes, in dem unser Unternehmen seinen Sitz hat. Eine Liste der Datenschutzbeauftragten sowie deren Kontaktdaten k&ouml;nnen folgendem Link entnommen werden:{" "}
                    <a
                      href="https://www.bfdi.bund.de/DE/Infothek/Anschriften_Links/anschriften_links-node.html"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#f28627] underline underline-offset-2 transition-colors hover:text-[#d4710e]"
                    >
                      https://www.bfdi.bund.de/DE/Infothek/Anschriften_Links/anschriften_links-node.html
                    </a>.
                  </p>
                </div>

                <div>
                  <h3 className="mb-3 font-[var(--font-display)] text-xl font-bold uppercase tracking-wider text-[#f28627]">
                    SSL- bzw. TLS-Verschl&uuml;sselung
                  </h3>
                  <p>
                    Diese Seite nutzt aus Sicherheitsgr&uuml;nden und zum Schutz der &Uuml;bertragung vertraulicher Inhalte, wie zum Beispiel Bestellungen oder Anfragen, die Sie an uns als Seitenbetreiber senden, eine SSL-bzw. TLS-Verschl&uuml;sselung. Eine verschl&uuml;sselte Verbindung erkennen Sie daran, dass die Adresszeile des Browsers von &quot;http://&quot; auf &quot;https://&quot; wechselt und an dem Schloss-Symbol in Ihrer Browserzeile.
                  </p>
                  <p className="mt-2">
                    Wenn die SSL- bzw. TLS-Verschl&uuml;sselung aktiviert ist, k&ouml;nnen die Daten, die Sie an uns &uuml;bermitteln, nicht von Dritten mitgelesen werden.
                  </p>
                </div>

                <div>
                  <h3 className="mb-3 font-[var(--font-display)] text-xl font-bold uppercase tracking-wider text-[#f28627]">
                    Auskunft, Sperrung, L&ouml;schung
                  </h3>
                  <p>
                    Sie haben im Rahmen der geltenden gesetzlichen Bestimmungen jederzeit das Recht auf unentgeltliche Auskunft &uuml;ber Ihre gespeicherten personenbezogenen Daten, deren Herkunft und Empf&auml;nger und den Zweck der Datenverarbeitung und ggf. ein Recht auf Berichtigung, Sperrung oder L&ouml;schung dieser Daten. Hierzu sowie zu weiteren Fragen zum Thema personenbezogene Daten k&ouml;nnen Sie sich jederzeit unter der im Impressum angegebenen Adresse an uns wenden.
                  </p>
                </div>
              </div>
            </div>

            {/* 3. Datenerfassung auf unserer Website */}
            <div>
              <h2 className="mb-8 font-[var(--font-display)] text-3xl font-bold uppercase tracking-wider text-[#1a1a1a]">
                3. Datenerfassung auf unserer Website
              </h2>

              <div className="space-y-8">
                <div>
                  <h3 className="mb-3 font-[var(--font-display)] text-xl font-bold uppercase tracking-wider text-[#f28627]">
                    Cookies
                  </h3>
                  <p>
                    Die Internetseiten verwenden teilweise so genannte Cookies. Cookies richten auf Ihrem Rechner keinen Schaden an und enthalten keine Viren. Cookies dienen dazu, unser Angebot nutzerfreundlicher, effektiver und sicherer zu machen. Cookies sind kleine Textdateien, die auf Ihrem Rechner abgelegt werden und die Ihr Browser speichert.
                  </p>
                  <p className="mt-2">
                    Die meisten der von uns verwendeten Cookies sind so genannte &quot;Session-Cookies&quot;. Sie werden nach Ende Ihres Besuchs automatisch gel&ouml;scht. Andere Cookies bleiben auf Ihrem Endger&auml;t gespeichert bis Sie diese l&ouml;schen. Diese Cookies erm&ouml;glichen es uns, Ihren Browser beim n&auml;chsten Besuch wiederzuerkennen.
                  </p>
                  <p className="mt-2">
                    Sie k&ouml;nnen Ihren Browser so einstellen, dass Sie &uuml;ber das Setzen von Cookies informiert werden und Cookies nur im Einzelfall erlauben, die Annahme von Cookies f&uuml;r bestimmte F&auml;lle oder generell ausschlie&szlig;en sowie das automatische L&ouml;schen der Cookies beim Schlie&szlig;en des Browser aktivieren. Bei der Deaktivierung von Cookies kann die Funktionalit&auml;t dieser Website eingeschr&auml;nkt sein.
                  </p>
                  <p className="mt-2">
                    Cookies, die zur Durchf&uuml;hrung des elektronischen Kommunikationsvorgangs oder zur Bereitstellung bestimmter, von Ihnen erw&uuml;nschter Funktionen (z.B. Warenkorbfunktion) erforderlich sind, werden auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO gespeichert. Der Websitebetreiber hat ein berechtigtes Interesse an der Speicherung von Cookies zur technisch fehlerfreien und optimierten Bereitstellung seiner Dienste. Soweit andere Cookies (z.B. Cookies zur Analyse Ihres Surfverhaltens) gespeichert werden, werden diese in dieser Datenschutzerkl&auml;rung gesondert behandelt.
                  </p>
                </div>

                <div>
                  <h3 className="mb-3 font-[var(--font-display)] text-xl font-bold uppercase tracking-wider text-[#f28627]">
                    Server-Log-Dateien
                  </h3>
                  <p>
                    Der Provider der Seiten erhebt und speichert automatisch Informationen in so genannten Server-Log-Dateien, die Ihr Browser automatisch an uns &uuml;bermittelt. Dies sind:
                  </p>
                  <ul className="mt-3 list-inside list-disc space-y-1 pl-2">
                    <li>Browsertyp und Browserversion</li>
                    <li>verwendetes Betriebssystem</li>
                    <li>Referrer URL</li>
                    <li>Hostname des zugreifenden Rechners</li>
                    <li>Uhrzeit der Serveranfrage</li>
                    <li>IP-Adresse</li>
                  </ul>
                  <p className="mt-3">
                    Eine Zusammenf&uuml;hrung dieser Daten mit anderen Datenquellen wird nicht vorgenommen.
                  </p>
                  <p className="mt-2">
                    Grundlage f&uuml;r die Datenverarbeitung ist Art. 6 Abs. 1 lit. f DSGVO, der die Verarbeitung von Daten zur Erf&uuml;llung eines Vertrags oder vorvertraglicher Ma&szlig;nahmen gestattet.
                  </p>
                </div>

                <div>
                  <h3 className="mb-3 font-[var(--font-display)] text-xl font-bold uppercase tracking-wider text-[#f28627]">
                    Kontaktformular
                  </h3>
                  <p>
                    Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden Ihre Angaben aus dem Anfrageformular inklusive der von Ihnen dort angegebenen Kontaktdaten zwecks Bearbeitung der Anfrage und f&uuml;r den Fall von Anschlussfragen bei uns gespeichert. Diese Daten geben wir nicht ohne Ihre Einwilligung weiter.
                  </p>
                  <p className="mt-2">
                    Die Verarbeitung der in das Kontaktformular eingegebenen Daten erfolgt somit ausschlie&szlig;lich auf Grundlage Ihrer Einwilligung (Art. 6 Abs. 1 lit. a DSGVO). Sie k&ouml;nnen diese Einwilligung jederzeit widerrufen. Dazu reicht eine formlose Mitteilung per E-Mail an uns. Die Rechtm&auml;&szlig;igkeit der bis zum Widerruf erfolgten Datenverarbeitungsvorg&auml;nge bleibt vom Widerruf unber&uuml;hrt.
                  </p>
                  <p className="mt-2">
                    Die von Ihnen im Kontaktformular eingegebenen Daten verbleiben bei uns, bis Sie uns zur L&ouml;schung auffordern, Ihre Einwilligung zur Speicherung widerrufen oder der Zweck f&uuml;r die Datenspeicherung entf&auml;llt (z.B. nach abgeschlossener Bearbeitung Ihrer Anfrage). Zwingende gesetzliche Bestimmungen &ndash; insbesondere Aufbewahrungsfristen &ndash; bleiben unber&uuml;hrt.
                  </p>
                </div>
              </div>
            </div>

            {/* 4. Analyse Tools und Werbung */}
            <div>
              <h2 className="mb-8 font-[var(--font-display)] text-3xl font-bold uppercase tracking-wider text-[#1a1a1a]">
                4. Analyse Tools und Werbung
              </h2>

              <div className="space-y-8">
                <div>
                  <h3 className="mb-3 font-[var(--font-display)] text-xl font-bold uppercase tracking-wider text-[#f28627]">
                    Google Analytics
                  </h3>
                  <p>
                    Diese Website nutzt Funktionen des Webanalysedienstes Google Analytics. Anbieter ist die Google Inc., 1600 Amphitheatre Parkway, Mountain View, CA 94043, USA.
                  </p>
                  <p className="mt-2">
                    Google Analytics verwendet so genannte &quot;Cookies&quot;. Das sind Textdateien, die auf Ihrem Computer gespeichert werden und die eine Analyse der Benutzung der Website durch Sie erm&ouml;glichen. Die durch den Cookie erzeugten Informationen &uuml;ber Ihre Benutzung dieser Website werden in der Regel an einen Server von Google in den USA &uuml;bertragen und dort gespeichert.
                  </p>
                  <p className="mt-2">
                    Die Speicherung von Google-Analytics-Cookies erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO. Der Websitebetreiber hat ein berechtigtes Interesse an der Analyse des Nutzerverhaltens, um sowohl sein Webangebot als auch seine Werbung zu optimieren.
                  </p>
                </div>

                <div>
                  <h3 className="mb-3 font-[var(--font-display)] text-lg font-bold uppercase tracking-wider text-[#1a1a1a]">
                    IP Anonymisierung
                  </h3>
                  <p>
                    Wir haben auf dieser Website die Funktion IP-Anonymisierung aktiviert. Dadurch wird Ihre IP-Adresse von Google innerhalb von Mitgliedstaaten der Europ&auml;ischen Union oder in anderen Vertragsstaaten des Abkommens &uuml;ber den Europ&auml;ischen Wirtschaftsraum vor der &Uuml;bermittlung in die USA gek&uuml;rzt. Nur in Ausnahmef&auml;llen wird die volle IP-Adresse an einen Server von Google in den USA &uuml;bertragen und dort gek&uuml;rzt. Im Auftrag des Betreibers dieser Website wird Google diese Informationen benutzen, um Ihre Nutzung der Website auszuwerten, um Reports &uuml;ber die Websiteaktivit&auml;ten zusammenzustellen und um weitere mit der Websitenutzung und der Internetnutzung verbundene Dienstleistungen gegen&uuml;ber dem Websitebetreiber zu erbringen. Die im Rahmen von Google Analytics von Ihrem Browser &uuml;bermittelte IP-Adresse wird nicht mit anderen Daten von Google zusammengef&uuml;hrt.
                  </p>
                </div>

                <div>
                  <h3 className="mb-3 font-[var(--font-display)] text-lg font-bold uppercase tracking-wider text-[#1a1a1a]">
                    Browser Plugin
                  </h3>
                  <p>
                    Sie k&ouml;nnen die Speicherung der Cookies durch eine entsprechende Einstellung Ihrer Browser-Software verhindern; wir weisen Sie jedoch darauf hin, dass Sie in diesem Fall gegebenenfalls nicht s&auml;mtliche Funktionen dieser Website vollumf&auml;nglich werden nutzen k&ouml;nnen. Sie k&ouml;nnen dar&uuml;ber hinaus die Erfassung der durch den Cookie erzeugten und auf Ihre Nutzung der Website bezogenen Daten (inkl. Ihrer IP-Adresse) an Google sowie die Verarbeitung dieser Daten durch Google verhindern, indem Sie das unter dem folgenden Link verf&uuml;gbare Browser-Plugin herunterladen und installieren:{" "}
                    <a
                      href="https://tools.google.com/dlpage/gaoptout?hl=de"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#f28627] underline underline-offset-2 transition-colors hover:text-[#d4710e]"
                    >
                      https://tools.google.com/dlpage/gaoptout?hl=de
                    </a>.
                  </p>
                </div>

                <div>
                  <h3 className="mb-3 font-[var(--font-display)] text-lg font-bold uppercase tracking-wider text-[#1a1a1a]">
                    Widerspruch gegen Datenerfassung
                  </h3>
                  <p>
                    Sie k&ouml;nnen die Erfassung Ihrer Daten durch Google Analytics verhindern, indem Sie auf folgenden Link klicken. Es wird ein Opt-Out-Cookie gesetzt, der die Erfassung Ihrer Daten bei zuk&uuml;nftigen Besuchen dieser Website verhindert: Google Analytics deaktivieren.
                  </p>
                  <p className="mt-2">
                    Mehr Informationen zum Umgang mit Nutzerdaten bei Google Analytics finden Sie in der Datenschutzerkl&auml;rung von Google:{" "}
                    <a
                      href="https://support.google.com/analytics/answer/6004245?hl=de"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#f28627] underline underline-offset-2 transition-colors hover:text-[#d4710e]"
                    >
                      https://support.google.com/analytics/answer/6004245?hl=de
                    </a>.
                  </p>
                </div>

                <div>
                  <h3 className="mb-3 font-[var(--font-display)] text-lg font-bold uppercase tracking-wider text-[#1a1a1a]">
                    Auftragsdatenverarbeitung
                  </h3>
                  <p>
                    Wir haben mit Google einen Vertrag zur Auftragsdatenverarbeitung abgeschlossen und setzen die strengen Vorgaben der deutschen Datenschutzbeh&ouml;rden bei der Nutzung von Google Analytics vollst&auml;ndig um.
                  </p>
                </div>
              </div>
            </div>

            {/* 5. Plugins und Tools */}
            <div>
              <h2 className="mb-8 font-[var(--font-display)] text-3xl font-bold uppercase tracking-wider text-[#1a1a1a]">
                5. Plugins und Tools
              </h2>

              <div className="space-y-8">
                <div>
                  <h3 className="mb-3 font-[var(--font-display)] text-xl font-bold uppercase tracking-wider text-[#f28627]">
                    Google Web Fonts
                  </h3>
                  <p>
                    Diese Seite nutzt zur einheitlichen Darstellung von Schriftarten so genannte Web Fonts, die von Google bereitgestellt werden. Beim Aufruf einer Seite l&auml;dt Ihr Browser die ben&ouml;tigten Web Fonts in ihren Browsercache, um Texte und Schriftarten korrekt anzuzeigen.
                  </p>
                  <p className="mt-2">
                    Zu diesem Zweck muss der von Ihnen verwendete Browser Verbindung zu den Servern von Google aufnehmen. Hierdurch erlangt Google Kenntnis dar&uuml;ber, dass &uuml;ber Ihre IP-Adresse unsere Website aufgerufen wurde. Die Nutzung von Google Web Fonts erfolgt im Interesse einer einheitlichen und ansprechenden Darstellung unserer Online-Angebote. Dies stellt ein berechtigtes Interesse im Sinne von Art. 6 Abs. 1 lit. f DSGVO dar.
                  </p>
                  <p className="mt-2">
                    Wenn Ihr Browser Web Fonts nicht unterst&uuml;tzt, wird eine Standardschrift von Ihrem Computer genutzt.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}
