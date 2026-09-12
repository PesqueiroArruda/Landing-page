import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Política de Privacidade | Pesqueiro Arruda's",
  description:
    "Como o Pesqueiro Arruda's coleta, usa e protege os dados pessoais de quem visita o site, faz reservas ou acessa o cardápio completo.",
};

const h2Class = "mt-10 text-xl font-semibold text-ink sm:text-2xl";
const pClass = "mt-3 text-base leading-relaxed text-bark/80";
const ulClass = "mt-3 list-disc space-y-2 pl-5 text-base leading-relaxed text-bark/80";

export default function PrivacidadePage() {
  return (
    <article>
      <p className="font-script text-2xl leading-none text-lake">Legal</p>
      <h1 className="mt-3 text-3xl font-semibold text-ink sm:text-4xl">
        Política de Privacidade
      </h1>
      <p className="mt-4 text-sm text-bark/60">Última atualização: 12 de setembro de 2026.</p>

      <p className={pClass}>
        Esta Política de Privacidade explica quais dados pessoais o Pesqueiro
        Arruda&apos;s coleta através deste site, para que servem e como você
        pode exercer seus direitos, em conformidade com a Lei Geral de
        Proteção de Dados (LGPD — Lei nº 13.709/2018).
      </p>

      <h2 className={h2Class}>1. Quais dados coletamos</h2>
      <p className={pClass}>Coletamos dados pessoais nestas situações:</p>
      <ul className={ulClass}>
        <li>
          <strong className="text-ink">Reserva online:</strong> nome
          completo, telefone/WhatsApp, data e horário desejados, quantidade
          de pessoas, ambiente escolhido e observações que você informar no
          formulário de reserva.
        </li>
        <li>
          <strong className="text-ink">Pagamento do sinal:</strong> o
          pagamento é processado diretamente pela InfinitePay, para onde você
          é redirecionado. Não temos acesso a dados de cartão ou Pix — apenas
          à confirmação de que o pagamento foi aprovado.
        </li>
        <li>
          <strong className="text-ink">Login com Google (cardápio
          completo):</strong> ao entrar com sua conta Google para ver o
          cardápio completo, recebemos seu nome, e-mail, foto de perfil e um
          identificador da sua conta Google.
        </li>
        <li>
          <strong className="text-ink">Preferência de marketing:</strong> se
          você marcar a opção &quot;Quero receber novidades e promoções por
          e-mail&quot;, guardamos essa preferência vinculada à sua conta.
        </li>
      </ul>

      <h2 className={h2Class}>2. Para que usamos seus dados</h2>
      <ul className={ulClass}>
        <li>Registrar, confirmar e gerenciar sua reserva no pesqueiro.</li>
        <li>Entrar em contato sobre sua reserva, quando necessário.</li>
        <li>
          Autenticar seu acesso ao cardápio completo e lembrar seu nome nas
          próximas visitas.
        </li>
        <li>
          Enviar novidades e promoções por e-mail, somente se você optar por
          isso — e você pode desativar quando quiser.
        </li>
        <li>Cumprir obrigações legais e fiscais.</li>
      </ul>

      <h2 className={h2Class}>3. Com quem compartilhamos</h2>
      <p className={pClass}>
        Não vendemos seus dados. Compartilhamos apenas o necessário com
        prestadores que nos ajudam a operar o site:
      </p>
      <ul className={ulClass}>
        <li>
          <strong className="text-ink">Supabase</strong> — banco de dados
          onde as reservas e cadastros ficam armazenados.
        </li>
        <li>
          <strong className="text-ink">InfinitePay</strong> — processamento
          do pagamento do sinal da reserva.
        </li>
        <li>
          <strong className="text-ink">Resend</strong> — envio dos e-mails
          transacionais (como a notificação interna de reserva paga).
        </li>
        <li>
          <strong className="text-ink">Google</strong> — autenticação de
          login para acesso ao cardápio completo.
        </li>
        <li>
          <strong className="text-ink">Vercel Analytics</strong> — métricas
          de acesso agregadas e anônimas, sem uso de cookies e sem
          identificar visitantes individualmente.
        </li>
      </ul>

      <h2 className={h2Class}>4. Cookies</h2>
      <p className={pClass}>
        Usamos um cookie estritamente necessário para manter sua sessão
        logada após o login com Google. As métricas de acesso do site são
        coletadas sem cookies. Não usamos cookies de publicidade nem
        rastreamento entre sites.
      </p>

      <h2 className={h2Class}>5. Por quanto tempo guardamos seus dados</h2>
      <p className={pClass}>
        Guardamos os dados de reserva e de cadastro enquanto forem
        necessários para as finalidades descritas acima ou pelo prazo exigido
        por lei (por exemplo, obrigações fiscais). Você pode pedir a exclusão
        a qualquer momento, conforme o item 6.
      </p>

      <h2 className={h2Class}>6. Seus direitos</h2>
      <p className={pClass}>Conforme a LGPD, você pode a qualquer momento:</p>
      <ul className={ulClass}>
        <li>Confirmar se tratamos dados seus e acessá-los;</li>
        <li>Corrigir dados incompletos, inexatos ou desatualizados;</li>
        <li>Pedir a exclusão dos seus dados;</li>
        <li>Revogar seu consentimento para receber e-mails de marketing;</li>
        <li>Solicitar a portabilidade dos seus dados.</li>
      </ul>
      <p className={pClass}>
        Para exercer qualquer um desses direitos, entre em contato pelo
        WhatsApp{" "}
        <a href="tel:+5511972311736" className="font-semibold text-lake hover:underline">
          (11) 97231-1736
        </a>
        .
      </p>

      <h2 className={h2Class}>7. Alterações desta política</h2>
      <p className={pClass}>
        Podemos atualizar esta política de tempos em tempos. A data no topo
        desta página indica a última atualização.
      </p>
    </article>
  );
}
