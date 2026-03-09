import type { Metadata } from "next";
import { Catamaran, Oswald } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

const catamaran = Catamaran({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["400", "700"],
});

const oswald = Oswald({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: {
    default: "Autohaus Oßwald GmbH & Co. KG | Kfz-Werkstatt Diepholz",
    template: "%s | Autohaus Oßwald",
  },
  description:
    "Ihre Kfz-Reparaturwerkstatt in Diepholz. Rundum-Service für alle Marken, Meisterqualität zu fairen Preisen. Sofortservice ohne Termin.",
  keywords: [
    "Autohaus",
    "Werkstatt",
    "Diepholz",
    "Kfz-Reparatur",
    "alle Marken",
    "TÜV",
    "Inspektion",
    "Oldtimer",
    "US-Cars",
  ],
  openGraph: {
    type: "website",
    locale: "de_DE",
    siteName: "Autohaus Oßwald GmbH & Co. KG",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de">
      <body
        className={`${catamaran.variable} ${oswald.variable} font-sans antialiased`}
      >
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
