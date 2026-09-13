import "server-only";

export type MenuItem = {
  id: string;
  name: string;
  description: string;
  price: number;
  category: string;
  image: string | null;
};

// Fonte da verdade é o MongoDB do sistema administrativo — este endpoint só
// lê. Falha de rede/backend fora do ar não deve derrubar a Landing Page,
// por isso qualquer erro aqui volta como lista vazia (o caller decide o
// fallback, ex. manter os pratos estáticos atuais).
export async function getMenu(): Promise<MenuItem[]> {
  try {
    const res = await fetch(`${process.env.BACKEND_API_URL}/menu`, {
      cache: "no-store",
    });

    if (!res.ok) return [];

    return await res.json();
  } catch {
    return [];
  }
}
