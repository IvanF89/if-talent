import { getJob } from "@/lib/jobs";
import { notFound } from "next/navigation";

export default async function JobPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params; const job = getJob(slug); if (!job) notFound();
  return <main className="container page"><div className="card stack">
    <div className="row"><span className="tag">{job.area}</span><span>{job.location}</span><span>{job.type}</span></div>
    <h1>{job.title}</h1><p className="muted">{job.description}</p>
    <h3>Cosa cerchiamo</h3><ul><li>Organizzazione e precisione</li><li>Comunicazione chiara</li><li>Responsabilità e voglia di crescere</li><li>Disponibilità a lavorare con metodo e obiettivi</li></ul>
    <div><a className="button" href={`/apply/${job.slug}`}>Inizia la candidatura</a></div>
  </div></main>;
}
