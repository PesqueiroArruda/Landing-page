import type { Metadata } from "next";
import { Bitter, Manrope } from "next/font/google";
import "./globals.css";

const bitter = Bitter({
  variable: "--font-bitter",
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

const siteUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "http://localhost:3000";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Pesqueiro Arruda's | Pesca Esportiva e Restaurante em Santana de Parnaíba",
  description:
    "Mais que um pesqueiro, lugar de memórias. Pesca esportiva e restaurante à beira do lago no Pesqueiro Arruda's, em Santana de Parnaíba, SP. Peixe fresco, espaço kids e deck com vista pro lago.",
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
    <html lang="pt-BR" className={`${bitter.variable} ${manrope.variable}`}>
      <body className="min-h-screen antialiased">{children}</body>
    </html>
  );
}
