import "server-only";

export interface Evento {
  id: string;
  titulo: string;
  /** Data no formato YYYY-MM-DD (horário de Brasília). */
  data: string;
  /** Ex.: "12h30". Vazio quando o evento não tem horário cadastrado. */
  horario: string | null;
  /** URL pública do cartaz, ou null quando não foi enviado. */
  cartaz: string | null;
}

type EventoDaApi = {
  id: string;
  title: string;
  date: string;
  time: string | null;
  image: string | null;
};

const TIMEZONE = "America/Sao_Paulo";

function hojeEmSaoPaulo(): string {
  // en-CA formata como YYYY-MM-DD.
  return new Intl.DateTimeFormat("en-CA", { timeZone: TIMEZONE }).format(
    new Date()
  );
}

function formatarHorario(time: string | null): string | null {
  const match = time?.match(/^(\d{2}):(\d{2})$/);
  return match ? `${match[1]}h${match[2]}` : null;
}

function valido(item: Partial<EventoDaApi>): item is EventoDaApi {
  return (
    typeof item?.id === "string" &&
    typeof item.title === "string" &&
    typeof item.date === "string"
  );
}

// Fonte da verdade é a Agenda do sistema administrativo. A API só devolve
// eventos confirmados e sem nenhum dado interno. Falha de rede ou backend
// fora do ar vira lista vazia, e a seção mostra o convite pro WhatsApp.
// Atualiza a cada 5 minutos; eventos que já passaram saem da lista na hora.
export async function getProximosEventos(): Promise<Evento[]> {
  try {
    const res = await fetch(`${process.env.BACKEND_API_URL}/agenda`, {
      next: { revalidate: 300 },
    });
    if (!res.ok) return [];

    const lista: unknown = await res.json();
    if (!Array.isArray(lista)) return [];

    const hoje = hojeEmSaoPaulo();
    return lista
      .filter(valido)
      .filter((evento) => evento.date >= hoje)
      .map((evento) => ({
        id: evento.id,
        titulo: evento.title,
        data: evento.date,
        horario: formatarHorario(evento.time),
        cartaz: evento.image,
      }))
      .sort(
        (a, b) =>
          a.data.localeCompare(b.data) ||
          (a.horario ?? "").localeCompare(b.horario ?? "")
      );
  } catch {
    return [];
  }
}

export function formatarData(data: string) {
  // Meio-dia UTC evita que o fuso desloque o dia.
  const date = new Date(`${data}T12:00:00Z`);
  const opts = { timeZone: "UTC" } as const;
  return {
    dia: new Intl.DateTimeFormat("pt-BR", { ...opts, day: "2-digit" }).format(
      date
    ),
    mes: new Intl.DateTimeFormat("pt-BR", { ...opts, month: "short" })
      .format(date)
      .replace(".", ""),
    diaSemana: new Intl.DateTimeFormat("pt-BR", {
      ...opts,
      weekday: "long",
    }).format(date),
    completa: new Intl.DateTimeFormat("pt-BR", {
      ...opts,
      day: "2-digit",
      month: "2-digit",
    }).format(date),
  };
}
