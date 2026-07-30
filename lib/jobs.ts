export const jobs = [
  {
    slug: "assistente-direzione",
    title: "Assistente di direzione",
    area: "Operations",
    location: "Carignano (TO)",
    type: "Inserimento junior",
    summary: "Supporta direzione, amministrazione, recruiting e onboarding proprietari.",
    description: "Cerchiamo una persona organizzata, affidabile e curiosa, capace di diventare il punto di raccordo operativo tra direzione, amministrazione e team.",
  },
  {
    slug: "commerciale-casaprime",
    title: "Commerciale CasaPrime",
    area: "Sales",
    location: "Italia",
    type: "Collaborazione commerciale",
    summary: "Sviluppa agenzie e proprietari applicando il metodo commerciale CasaPrime.",
    description: "Cerchiamo persone concrete, disciplinate e orientate al risultato, pronte a lavorare con obiettivi e metodo misurabile.",
  }
];

export function getJob(slug: string) { return jobs.find((job) => job.slug === slug); }
