import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Termos e Condições | Pesqueiro Arruda's",
  description:
    "Regras de uso do site, das reservas online e do pagamento do sinal do Pesqueiro Arruda's, em Santana de Parnaíba, SP.",
};

const h2Class = "mt-10 text-xl font-semibold text-ink sm:text-2xl";
const pClass = "mt-3 text-base leading-relaxed text-bark/80";
const ulClass = "mt-3 list-disc space-y-2 pl-5 text-base leading-relaxed text-bark/80";

export default function TermosPage() {
  return (
    <article>
      <p className="font-script text-2xl leading-none text-lake">Legal</p>
      <h1 className="mt-3 text-3xl font-semibold text-ink sm:text-4xl">
        Termos e Condições
      </h1>
      <p className="mt-4 text-sm text-bark/60">Última atualização: 12 de setembro de 2026.</p>

      <p className={pClass}>
        Estes Termos e Condições regulam o uso deste site e o serviço de
        reserva online do Pesqueiro Arruda&apos;s, em Santana de Parnaíba,
        SP. Ao usar o site ou fazer uma reserva, você concorda com estas
        regras.
      </p>

      <h2 className={h2Class}>1. Funcionamento e reservas</h2>
      <p className={pClass}>
        Funcionamos de terça a domingo, das 8h às 17h (fechado às
        segundas-feiras, exceto feriados). Você pode reservar mesa pelo site,
        escolhendo dia, horário, quantidade de pessoas e ambiente
        (interno ou externo).
      </p>

      <h2 className={h2Class}>2. Sinal e pagamento</h2>
      <ul className={ulClass}>
        <li>
          Toda reserva feita pelo site exige o pagamento de um sinal, via Pix
          ou cartão, através do checkout seguro da InfinitePay.
        </li>
        <li>O restante do valor é pago no local, no dia da visita.</li>
        <li>
          <strong className="text-ink">Cancelamento:</strong> em caso de
          cancelamento, o valor do sinal não é reembolsado, mas fica
          disponível para uso em uma nova reserva dentro de 30 dias a partir
          da data originalmente reservada.
        </li>
        <li>
          O pagamento é processado por um terceiro (InfinitePay). Não nos
          responsabilizamos por instabilidades no serviço de pagamento do
          parceiro, mas ajudaremos a resolver qualquer problema relatado pelo
          WhatsApp.
        </li>
      </ul>

      <h2 className={h2Class}>3. Cardápio completo (login com Google)</h2>
      <p className={pClass}>
        Parte do cardápio fica disponível publicamente. Para ver o cardápio
        completo, com todos os pratos e preços, é preciso entrar com sua
        conta Google. Preços, disponibilidade e itens do cardápio podem
        mudar sem aviso prévio.
      </p>

      <h2 className={h2Class}>4. Uso do site</h2>
      <ul className={ulClass}>
        <li>
          Você se compromete a fornecer informações verdadeiras ao fazer uma
          reserva (nome, telefone e demais dados solicitados).
        </li>
        <li>
          É proibido usar o site para fins ilícitos ou para tentar burlar seu
          funcionamento normal (por exemplo, envio automatizado de reservas
          falsas).
        </li>
        <li>
          Todo o conteúdo do site — textos, logotipo, fotos e identidade
          visual — pertence ao Pesqueiro Arruda&apos;s e não pode ser
          reproduzido sem autorização.
        </li>
      </ul>

      <h2 className={h2Class}>5. Disponibilidade do site</h2>
      <p className={pClass}>
        Fazemos o possível para manter o site e o sistema de reservas
        sempre disponíveis, mas não garantimos operação ininterrupta.
        Em caso de indisponibilidade, você pode fazer sua reserva
        diretamente pelo WhatsApp.
      </p>

      <h2 className={h2Class}>6. Alterações destes termos</h2>
      <p className={pClass}>
        Podemos atualizar estes termos de tempos em tempos. A data no topo
        desta página indica a última atualização. O uso contínuo do site
        após uma alteração representa sua concordância com os novos termos.
      </p>

      <h2 className={h2Class}>7. Legislação aplicável</h2>
      <p className={pClass}>
        Estes termos são regidos pela legislação brasileira. Fica eleito o
        foro da comarca de Santana de Parnaíba, SP, para dirimir eventuais
        controvérsias.
      </p>

      <h2 className={h2Class}>8. Contato</h2>
      <p className={pClass}>
        Dúvidas sobre estes termos podem ser tiradas pelo WhatsApp{" "}
        <a href="tel:+5511972311736" className="font-semibold text-lake hover:underline">
          (11) 97231-1736
        </a>
        .
      </p>
    </article>
  );
}
