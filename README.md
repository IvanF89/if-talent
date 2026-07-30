# IF Talent — V1

Funnel di recruiting IF Group: posizioni → candidatura → colloquio Jarvis → dashboard “Da gestire”.

## Avvio locale

1. Installa Node.js 20+
2. Copia `.env.example` in `.env.local`
3. Compila le variabili Supabase e OpenAI
4. Esegui:

```bash
npm install
npm run dev
```

## Collegamento Supabase

Apri Supabase → SQL Editor → New query → incolla `supabase/schema.sql` → Run.

## Deploy su Vercel

Carica questi file nella repository già collegata a Vercel. In Vercel aggiungi le variabili presenti in `.env.example`, quindi avvia un nuovo deploy.

## Stato V1

Già navigabile:
- landing
- elenco posizioni
- scheda posizione
- form candidatura
- colloquio guidato
- dashboard demo

Da collegare nella seconda iterazione:
- persistenza Supabase
- autenticazione recruiter
- upload CV
- valutazione OpenAI strutturata
- email/notifiche
