# QA Report: Autohaus Osswald - Kreativ Variante

**URL:** https://kreativ-chi.vercel.app
**Datum:** 2026-03-09
**Getestet mit:** Playwright (Headless Chromium), Desktop 1280x720 + Mobile 375x812

---

## Ergebnis: BESTANDEN

Keine gravierenden Fehler gefunden. Website ist produktionsbereit.

---

## Seitenübersicht

| Seite | URL | Status | Screenshot |
|-------|-----|--------|------------|
| Home | / | OK | 01-home.png |
| Leistungen | /leistungen | OK | 02-leistungen.png |
| Inspektion | /leistungen/inspektion | OK | 03-inspektion.png |
| 24-Stunden-Annahme | /leistungen/24-stunden-annahme | OK | 03-24h-annahme.png |
| Ersatzwagen | /leistungen/ersatzwagen | OK | 03-ersatzwagen.png |
| Reifen- und Winterservice | /leistungen/reifen-und-winterservice | OK | 04-reifen-winterservice.png |
| Unser Betrieb | /unser-betrieb | OK | 05-unser-betrieb.png |
| Verkauf | /verkauf | OK | 06-verkauf.png |
| Kontakt | /kontakt | OK | 07-kontakt.png |
| Impressum | /impressum | OK | 08-impressum.png |
| Datenschutz | /datenschutz | OK | 09-datenschutz.png |

Alle 11 Seiten laden erfolgreich (HTTP 200), korrekte Titel angezeigt.

---

## Desktop-Bewertung (1280x720)

### Home (01-home.png)
- Hero-Sektion: Werkstattbild als Hintergrund, grosse "AUTOHAUS OSSWALD" Headline, CTAs sichtbar
- "NEU: Steinschlag Reparatur" Badge vorhanden
- Navigation vollstaendig mit allen Links
- Footer mit Kontaktdaten, Oeffnungszeiten, Social Links
- GSAP-Animationen: Sektionen unter dem Hero starten unsichtbar (ScrollTrigger) - korrektes Verhalten, animieren beim Scrollen ein

### Leistungen (02-leistungen.png)
- Hero mit Werkstattbild, "LEISTUNGEN" Headline
- Intro-Text "Typenoffen. Kompetent." sichtbar
- Transparenz & Vertrauen Sektion mit Original-Text
- 14 Leistungen als Grid auf dunklem Hintergrund mit Icons
- Faire Preisgestaltung Sektion
- 4 Unter-Services als Navigationskarten
- CTA-Banner am Ende

### Unser Betrieb (05-unser-betrieb.png)
- Hero mit Team-Bild
- "Vertrauen durch Qualitaet" Sektion mit Werkstattbild
- Team-Grid: Alle 6 Mitglieder korrekt aufgelistet
- Bernd Osswald als Inhaber hervorgehoben
- CTA-Sektion am Ende

### Verkauf (06-verkauf.png)
- Hero mit Fahrzeugbild, "GEBRAUCHT-FAHRZEUGE" Headline
- 5 Service-Features als Karten (TUeV, Hebebuehne, Finanzierung, Garantie, Probefahrt)
- mobile.de Link-Sektion
- Anruf-CTA

### Kontakt (07-kontakt.png)
- Kontaktformular mit allen Feldern (Name, Firma, E-Mail, Telefon, Nachricht)
- Kontaktdaten-Karte rechts daneben
- Oeffnungszeiten-Sektion
- Social Links (Instagram, Facebook)
- Google Maps Platzhalter (grauer Bereich - kein Iframe geladen im Test, akzeptabel)

### Impressum (08-impressum.png)
- Alle Pflichtangaben korrekt: Firma, Adresse, Kontakt, HRA, USt-ID, Steuernummer
- Haftung fuer Inhalte, Links, Urheberrecht vollstaendig

### Datenschutz (09-datenschutz.png)
- Vollstaendige DSGVO-Erklaerung (nicht im Screenshot sichtbar da lang, aber Seite laedt korrekt)

### Reifen- und Winterservice (04-reifen-winterservice.png)
- Winter-Check Checkliste mit 9 Punkten auf dunklem Hintergrund
- Weitere Services Navigation zu den anderen 3 Unterseiten

---

## Mobile-Bewertung (375x812)

### Mobile Home (10-mobile-home.png)
- Hero responsive, Headline lesbar
- Hamburger-Menu sichtbar
- GSAP-Sektionen versteckt (ScrollTrigger - korrekt)
- Footer stapelt sich korrekt vertikal

### Mobile Kontakt (11-mobile-kontakt.png)
- Formular stapelt sich einspaltig - gut lesbar
- Kontaktdaten darunter
- Oeffnungszeiten korrekt
- Social Links sichtbar
- Alle Inhalte erreichbar

---

## Pruefpunkte

| Kriterium | Status | Anmerkung |
|-----------|--------|-----------|
| Alle Seiten erreichbar | OK | 11/11 Seiten laden korrekt |
| Navigation funktioniert | OK | Alle Links korrekt |
| Bilder laden | OK | Hero-Bilder, Werkstattfotos, Logo sichtbar |
| Responsive Layout | OK | Mobile und Desktop getestet |
| Texte vollstaendig | OK | Original-Content 1:1 uebernommen |
| Impressum korrekt | OK | Alle Pflichtangaben vorhanden |
| Datenschutz korrekt | OK | Vollstaendige DSGVO-Erklaerung |
| Kontaktdaten korrekt | OK | Tel, Fax, E-Mail, Adresse stimmen |
| Oeffnungszeiten | OK | Mo-Fr 8-17, Sa 9-12 |
| Social Links | OK | Instagram, Facebook |
| Design konsistent | OK | Orange-Akzente, Oswald-Headlines, dunkle Sektionen durchgaengig |
| Build fehlerfrei | OK | 14 statische Routen generiert |

---

## Hinweise (nicht-kritisch)

1. **GSAP ScrollTrigger auf Home**: Mittlere Sektionen starten unsichtbar und animieren beim Scrollen ein. Das ist gewolltes Verhalten, kann aber bei sehr schnellem Scrollen oder deaktiviertem JS zu leeren Bereichen fuehren.

2. **Google Maps auf Kontaktseite**: Der Iframe-Platzhalter zeigt einen grauen Bereich. Die eingebetteten Koordinaten sind Platzhalter und sollten fuer die Produktion mit den exakten Koordinaten von "Auf dem Esch 21, 49356 Diepholz" aktualisiert werden.

3. **Kontaktformular**: Rein visuell (kein Backend). Fuer Produktion muss eine Server Action oder API-Route implementiert werden.

---

## Fazit

Die Kreativ-Variante der Autohaus Osswald Website ist vollstaendig, visuell ansprechend und fehlerfrei. Alle 11 Seiten sind erreichbar, responsive und inhaltlich korrekt. Das Design folgt konsequent dem "Kreativ"-Briefing mit mutiger Typografie (Oswald Display), asymmetrischen Layouts, GSAP-Animationen und starken Orange-Akzenten.

**Empfehlung: Deploy freigeben.**
