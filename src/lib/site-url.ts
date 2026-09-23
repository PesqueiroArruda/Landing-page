// Normaliza a barra final: NEXT_PUBLIC_SITE_URL com "/" no fim (ex.:
// "https://site.com/") quebrava `${siteUrl}/rota` gerando barra dupla
// ("https://site.com//rota"), o que faz o servidor não casar a rota —
// foi assim que o webhook de pagamento e o redirect pós-checkout da
// InfinitePay silenciosamente pararam de funcionar em produção.
export function getSiteUrl(): string {
  const raw = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";
  return raw.replace(/\/+$/, "");
}
