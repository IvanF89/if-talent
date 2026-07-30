import { getJob } from "@/lib/jobs";
import { notFound } from "next/navigation";

export default async function ApplyPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params; const job = getJob(slug); if (!job) notFound();
  return <main className="container page"><div className="card stack">
    <span className="tag">Candidatura · {job.title}</span><h1>Conosciamoci</h1>
    <p className="muted">Compila i dati essenziali. Subito dopo parlerai per pochi minuti con Jarvis.</p>
    <form className="stack" action="/api/applications" method="post">
      <input type="hidden" name="jobSlug" value={job.slug}/>
      <div className="grid"><label>Nome<input name="firstName" required/></label><label>Cognome<input name="lastName" required/></label></div>
      <div className="grid"><label>Email<input name="email" type="email" required/></label><label>Telefono<input name="phone" required/></label></div>
      <div className="grid"><label>Città<input name="city" required/></label><label>Anno di nascita<input name="birthYear" type="number" min="1940" max="2010"/></label></div>
      <label>Esperienza principale<textarea name="experience" required placeholder="Raccontaci brevemente cosa hai fatto finora"/></label>
      <label>Perché ti interessa questa posizione?<textarea name="motivation" required/></label>
      <label className="row"><input style={{width:"auto"}} name="privacy" type="checkbox" required/> Acconsento al trattamento dei dati per finalità di selezione.</label>
      <button className="button" type="submit">Continua con Jarvis</button>
    </form>
  </div></main>;
}
