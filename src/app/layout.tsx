import type { Metadata } from "next";
import { Poppins, Playfair_Display } from "next/font/google";
import "./globals.css";
import AnimatedLayout from "@/components/AnimatedLayout";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "MOGO Meble na Wymiar | Twoje wymarzone wnętrze",
  description:
    "Tworzymy ekskluzywne meble na wymiar, dostosowane do Twoich potrzeb. Specjalizujemy się w projektowaniu i wykonawstwie mebli kuchennych, szaf wnękowych, garderób oraz mebli łazienkowych. Realizujemy projekty na terenie całej Polski.",
  keywords:
    "meble na wymiar, meble kuchenne, szafy wnękowe, garderoby, meble łazienkowe, meble do sypialni, meble na zamówienie",
  authors: [{ name: "MOGO" }],
  openGraph: {
    title: "MOGO Meble na Wymiar | Twoje wymarzone wnętrze",
    description:
      "Tworzymy ekskluzywne meble na wymiar, dostosowane do Twoich potrzeb.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pl">
      <body className={`${poppins.variable} ${playfair.variable} antialiased`}>
        <AnimatedLayout>{children}</AnimatedLayout>
      </body>
    </html>
  );
}
