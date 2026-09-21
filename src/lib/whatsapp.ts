const WHATSAPP_NUMBER = "5511919214978";

function buildWhatsappLink(message: string): string {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

export const whatsappReservaLink = buildWhatsappLink(
  "Olá! Vim pelo site e gostaria de fazer uma reserva no Pesqueiro Arruda's."
);

export const whatsappEventosLink = buildWhatsappLink(
  "Olá! Vim pelo site e gostaria de saber mais sobre como organizar um evento (aniversário ou confraternização de empresa) no Pesqueiro Arruda's."
);

export const whatsappContatoLink = buildWhatsappLink(
  "Olá! Vim pelo site do Pesqueiro Arruda's e gostaria de mais informações."
);
