-- Rode manualmente no SQL editor do Supabase (o projeto não usa um sistema
-- de migrations; a tabela `reservations` também foi criada assim).

-- Adiciona o ambiente "quiosque" ao enum reservation_environment (hoje só
-- aceita 'interno' e 'externo'). Precisa rodar isso pra reserva com ambiente
-- "quiosque" não falhar no insert. ALTER TYPE ... ADD VALUE não pode rodar
-- dentro de uma transação com outros comandos, então roda sozinho:
alter type public.reservation_environment add value if not exists 'quiosque';

create table menu_users (
  id uuid primary key default gen_random_uuid(),
  google_id text unique not null,
  name text,
  email text not null,
  avatar_url text,
  source text not null default 'menu_google_login',
  marketing_consent boolean not null default false,
  created_at timestamptz not null default now(),
  last_access_at timestamptz not null default now()
);

-- RLS habilitado sem policies (deny-all): o acesso a essa tabela é sempre
-- feito pelo backend com a service role key, nunca diretamente pelo client.
alter table menu_users enable row level security;
