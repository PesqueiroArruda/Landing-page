export interface Evento {
  id: string;
  artista: string;
  /** Data no formato YYYY-MM-DD (horário de Brasília). */
  data: string;
  horario: string;
  destaque?: string;
  cartaz: { src: string; alt: string };
}

// Para incluir um show novo: adicione um objeto aqui e o cartaz em public/images.
// Eventos com data passada saem da página sozinhos.
export const EVENTOS: Evento[] = [
  {
    id: "jackie-tequilas-2026-10-04",
    artista: "Jackie Tequila's",
    data: "2026-10-04",
    horario: "12h30",
    destaque: "Pela primeira vez no Arruda's",
    cartaz: {
      src: "/images/evento-jackie-tequilas.webp",
      alt: "Cartaz do show de Jackie Tequila's no Arruda's, domingo 04/10/2026, a partir das 12h30",
    },
  },
  {
    id: "danillo-gomes-2026-10-11",
    artista: "Danillo Gomes",
    data: "2026-10-11",
    horario: "12h30",
    destaque: "Véspera de feriado",
    cartaz: {
      src: "/images/evento-danillo-gomes.webp",
      alt: "Cartaz do show de Danillo Gomes no Arruda's, domingo 11/10/2026, a partir das 12h30",
    },
  },
];

const TIMEZONE = "America/Sao_Paulo";

function hojeEmSaoPaulo(): string {
  // en-CA formata como YYYY-MM-DD.
  return new Intl.DateTimeFormat("en-CA", { timeZone: TIMEZONE }).format(
    new Date()
  );
}

export function getProximosEventos(): Evento[] {
  const hoje = hojeEmSaoPaulo();
  return EVENTOS.filter((evento) => evento.data >= hoje).sort((a, b) =>
    a.data.localeCompare(b.data)
  );
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
