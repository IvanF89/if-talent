create extension if not exists "pgcrypto";

create type application_status as enum ('da_gestire','da_chiamare','colloquio_fissato','in_valutazione','inserito','non_idoneo','talent_pool');

create table jobs (
  id uuid primary key default gen_random_uuid(),
  slug text unique not null,
  title text not null,
  area text not null,
  location text,
  description text,
  is_active boolean not null default true,
  created_at timestamptz not null default now()
);

create table candidates (
  id uuid primary key default gen_random_uuid(),
  first_name text not null,
  last_name text not null,
  email text not null,
  phone text,
  city text,
  birth_year integer,
  experience text,
  created_at timestamptz not null default now(),
  unique(email)
);

create table applications (
  id uuid primary key default gen_random_uuid(),
  candidate_id uuid not null references candidates(id) on delete cascade,
  job_id uuid not null references jobs(id),
  motivation text,
  status application_status not null default 'da_gestire',
  privacy_accepted_at timestamptz not null default now(),
  ai_score integer check (ai_score between 0 and 100),
  ai_summary text,
  strengths jsonb not null default '[]'::jsonb,
  risks jsonb not null default '[]'::jsonb,
  created_at timestamptz not null default now()
);

create table interview_messages (
  id uuid primary key default gen_random_uuid(),
  application_id uuid not null references applications(id) on delete cascade,
  role text not null check (role in ('assistant','candidate')),
  content text not null,
  created_at timestamptz not null default now()
);

create table recruiter_notes (
  id uuid primary key default gen_random_uuid(),
  application_id uuid not null references applications(id) on delete cascade,
  author_id uuid references auth.users(id),
  note text not null,
  created_at timestamptz not null default now()
);

alter table jobs enable row level security;
alter table candidates enable row level security;
alter table applications enable row level security;
alter table interview_messages enable row level security;
alter table recruiter_notes enable row level security;

insert into jobs (slug,title,area,location,description) values
('assistente-direzione','Assistente di direzione','Operations','Carignano (TO)','Supporto a direzione, amministrazione, recruiting e onboarding proprietari.'),
('commerciale-casaprime','Commerciale CasaPrime','Sales','Italia','Sviluppo commerciale di agenzie e proprietari con metodo CasaPrime.');
