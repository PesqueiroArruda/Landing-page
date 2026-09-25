import type { Metadata } from "next";
import { Nunito, Permanent_Marker, Fragment_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import CookieConsentBanner from "@/components/CookieConsentBanner";
import { getSiteUrl } from "@/lib/site-url";
import "./globals.css";

const nunito = Nunito({
  variable: "--font-nunito",
  subsets: ["latin"],
});

const permanentMarker = Permanent_Marker({
  variable: "--font-marker",
  subsets: ["latin"],
  weight: "400",
});

const fragmentMono = Fragment_Mono({
  variable: "--font-fragment-mono",
  subsets: ["latin"],
  weight: "400",
});

const siteUrl = getSiteUrl();

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Pesqueiro Arruda's | Pesca Esportiva e Restaurante em Santana de Parnaíba",
  description:
    "Mais que um pesqueiro, lugar de memórias. Pesca esportiva e restaurante à beira do lago no Pesqueiro Arruda's, em Santana de Parnaíba, SP. Tilápia na chapa, espaço kids e deck com vista pro lago.",
  keywords: [
    "pesqueiro Santana de Parnaíba",
    "pesca esportiva",
    "restaurante de peixe",
    "Pesqueiro Arruda's",
  ],
  openGraph: {
    title: "Pesqueiro Arruda's — Mais que um pesqueiro, lugar de memórias",
    description:
      "Nossa família servindo a sua! Pesca, restaurante à beira do lago e lazer para a família toda, em Santana de Parnaíba, SP.",
    locale: "pt_BR",
    type: "website",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="pt-BR"
      className={`${nunito.variable} ${permanentMarker.variable} ${fragmentMono.variable}`}
    >
      <body className="min-h-screen antialiased">
        {children}
        <CookieConsentBanner />
        <Analytics />
      </body>
    </html>
  );
}
