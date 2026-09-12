import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

export const alt =
  "Pesqueiro Arruda's — Pesca esportiva e restaurante em Santana de Parnaíba";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const logoData = await readFile(join(process.cwd(), "public/logo.jpeg"), "base64");
const logoSrc = `data:image/jpeg;base64,${logoData}`;

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
          height: "100%",
          background: "linear-gradient(135deg, #0d1938 0%, #14235c 55%, #142925 100%)",
          padding: 64,
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element -- next/og precisa de <img> nativo */}
        <img
          src={logoSrc}
          alt=""
          width={168}
          height={168}
          style={{
            borderRadius: "50%",
            objectFit: "cover",
            border: "6px solid #e8a722",
          }}
        />
        <div
          style={{
            marginTop: 36,
            fontSize: 68,
            fontWeight: 700,
            color: "#f6efdc",
            textAlign: "center",
          }}
        >
          Pesqueiro Arruda&apos;s
        </div>
        <div
          style={{
            marginTop: 18,
            fontSize: 30,
            color: "#e8a722",
            textAlign: "center",
          }}
        >
          Mais que um pesqueiro, lugar de memórias
        </div>
        <div
          style={{
            marginTop: 24,
            fontSize: 24,
            color: "rgba(246, 239, 220, 0.75)",
            textAlign: "center",
          }}
        >
          Pesca esportiva • Restaurante à beira do lago • Santana de Parnaíba, SP
        </div>
      </div>
    ),
    { ...size }
  );
}
