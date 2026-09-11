import type { Metadata } from "next";
import { Fraunces, Nunito, Permanent_Marker } from "next/font/google";
import "./globals.css";

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  axes: ["opsz", "SOFT", "WONK"],
});

const nunito = Nunito({
  variable: "--font-nunito",
  subsets: ["latin"],
});

const permanentMarker = Permanent_Marker({
  variable: "--font-marker",
  subsets: ["latin"],
  weight: "400",
});

const siteUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "http://localhost:3000";

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
    images: [{ url: "/logo.jpeg", width: 864, height: 1536, alt: "Logo Pesqueiro Arruda's" }],
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="pt-BR"
      className={`${fraunces.variable} ${nunito.variable} ${permanentMarker.variable}`}
    >
      <body className="min-h-screen antialiased">{children}</body>
    </html>
  );
}
