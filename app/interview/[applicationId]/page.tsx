import InterviewClient from "@/components/interview-client";

export default async function InterviewPage({ params }: { params: Promise<{ applicationId: string }> }) {
  const { applicationId } = await params;
  return <main className="container page"><div className="card stack">
    <span className="tag">Colloquio con Jarvis</span><h1>Solo qualche domanda.</h1>
    <p className="muted">Non ci sono risposte perfette. Rispondi in modo concreto e spontaneo.</p>
    <InterviewClient applicationId={applicationId}/>
  </div></main>;
}
