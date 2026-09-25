# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Primary: famílias da região de Santana de Parnaíba, SP (e arredores) que querem passar o dia inteiro em um só lugar, entre pesca esportiva à beira do lago e refeição em restaurante, com estrutura pra levar crianças (área kids).

Secundário: grupos e eventos (aniversários, confraternizações) que usam o espaço para ocasiões maiores — atendidos pelas seções Eventos e pelo campo de tamanho de grupo (até 60 pessoas; acima disso, atendimento vai pelo WhatsApp).

## Product Purpose

Site institucional e transacional do Pesqueiro Arruda's: apresenta o pesqueiro/restaurante e permite reservar visita online com sinal pago pelo site (Pix ou cartão), além de expor o cardápio. Sucesso é o visitante decidir vir passar o dia e completar a reserva com o mínimo de fricção, sem abandono por falta de informação (endereço, horário, preço, política de cancelamento).

## Positioning

Não é "só um pesqueiro pra pescar e ir embora": é gerido pela própria família Arruda, que atende no salão, com comida feita na hora com receita da casa e estrutura completa pra ficar o dia todo (pesca + restaurante + área kids + eventos). O diferencial declarado é a presença da família no atendimento, não só a pesca em si.

## Operating Context

- Funcionamento: terça a domingo, 8h às 17h; fechado às segundas (exceto feriados).
- Reserva online: escolha de horário (slots de hora em hora, 8h–17h), ambiente (interno ou externo), tamanho do grupo (1–60 pessoas), com sinal obrigatório pago no site via Pix ou cartão; o restante é pago no local, no dia.
- Cancelamento: sinal não é reembolsado, mas fica disponível para nova reserva em até 30 dias.
- Canal alternativo: reserva também pode ser feita por WhatsApp (link direto no site), inclusive para grupos maiores que 60 pessoas.
- Cardápio: exibido no site com pratos, porções, executivo etc.; ramo em desenvolvimento no momento é a ordenação por categoria do cardápio.
- Presença em redes: Instagram @pesqueiroarrudas.
- Endereço físico: Rua Anna Moraes de Faria, 112, Santana de Parnaíba, SP (com mapa incorporado no site).

## Capabilities and Constraints

- Stack já definido (projeto existente): Next.js + React + TypeScript, Tailwind CSS, Supabase, NextAuth (auth), Resend (e-mail), integração de pagamento com webhook próprio (`/api/payments/webhook`).
- Reservas: formulário com validação (zod), estado de sucesso redireciona para `checkoutUrl` de pagamento.
- Consentimento de cookies/marketing: banner de cookies e toggle de consentimento de marketing já implementados.
- Analytics: Vercel Analytics ativo.
- Idioma: pt-BR, único idioma no momento (sem i18n confirmado).
- Acessibilidade física real: rampa de acesso em toda a extensão do pesqueiro para cadeirantes — fato do local, não só do site.

## Brand Commitments

- Nome: "Pesqueiro Arruda's".
- Voz: calorosa, familiar, em primeira pessoa do plural ("nossa família servindo a sua"), português informal-mas-cuidado, sem jargão corporativo.
- Diferenciais que a marca sempre reforça: comida feita na hora com receita da casa; a própria família no salão; estrutura pra passar o dia; cardápio que vai além do peixe.
- Instagram oficial: @pesqueiroarrudas.
- Paleta de cores fixada (confirmado pelo usuário no pedido de redesign de 2026-09-25): navy ink `#14235c`/`#0d1938`, verde-lago `#1f3b33`/`#142925`, dourado `#e8a722`/`#c1860f`, creme/paper `#f6efdc`/`#fbf7ec`, bark `#16130e`. Preservar em qualquer redesign; a tipografia atual (Fraunces/Nunito/Permanent Marker) NÃO é fixada e pode ser repensada.

## Evidence on Hand

- Fotos reais já existentes em `public/images/`: 13 fotos da pesca (carrossel da seção Pesca) e 1 foto da área kids — mostram famílias, crianças e pescadores reais no local.
- Fotos ainda pendentes (seções usam `ImagePlaceholder` porque o arquivo real não existe ainda): foto da família na seção Sobre (`sobre-familia.jpg`) e fotos dos pratos do cardápio (`cardapio-tilapia-espalmada.jpg`, `cardapio-isca-tilapia.jpg`, `cardapio-porcoes-ra.jpg`, `cardapio-executivo.jpg`). Trabalho futuro não deve inventar imagens nem tratá-las como se já existissem — usar placeholder até serem fornecidas.
- Endereço, telefone/WhatsApp, horário e Instagram são reais e conferidos no código (`Contato.tsx`).
- Não há depoimentos, avaliações, prêmios ou dados de clientes documentados no projeto — não inventar até serem fornecidos.

## Product Principles

- A família à frente do atendimento é o argumento central, não um detalhe decorativo — toda comunicação deve refletir isso, não apenas mencionar.
- O produto vende um dia inteiro de experiência, não uma pescaria isolada — pesca, restaurante, kids e eventos formam um conjunto, não itens soltos.
- Sinal pago no ato da reserva existe pra reduzir no-show; qualquer mudança no fluxo de reserva precisa preservar essa garantia sem tornar o processo pesado.
- Evidência real (fotos, endereço, telefone) tem prioridade sobre qualquer conteúdo genérico ou inventado — na ausência de material real, usar placeholder e sinalizar a lacuna, nunca fabricar.

## Accessibility & Inclusion

O local físico tem rampa de acesso em toda a extensão do pesqueiro para cadeirantes. Nenhum outro requisito formal de acessibilidade foi confirmado até agora (ex: leitor de tela, alto contraste) — não presumir exigências além dessa.
