import { jobs } from "@/lib/jobs";

export default function HomePage() {
  return <main>
    <section className="container hero">
      <span className="tag">Benvenuto in IF Group</span>
      <h1>Il posto giusto per costruire qualcosa di grande.</h1>
      <p>Scopri le posizioni aperte, raccontaci chi sei e completa un breve colloquio con Jarvis. Il nostro team umano riceverà una scheda completa per conoscerti meglio.</p>
      <div className="row"><a className="button" href="#posizioni">Vedi le posizioni</a><span className="muted">Non è un test: vogliamo conoscerti.</span></div>
    </section>
    <section id="posizioni" className="container page">
      <div className="row" style={{justifyContent:"space-between"}}><div><span className="tag">Opportunità</span><h2>Posizioni aperte</h2></div></div>
      <div className="grid">{jobs.map(job => <article className="card" key={job.slug}>
        <div className="row"><span className="tag">{job.area}</span><span className="muted">{job.location}</span></div>
        <h3>{job.title}</h3><p className="muted">{job.summary}</p>
        <a className="button" href={`/jobs/${job.slug}`}>Scopri e candidati</a>
      </article>)}</div>
    </section>
  </main>;
}
