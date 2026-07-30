"use client";
import { useState } from "react";

const questions = [
  "Perché questa posizione è interessante per te, proprio adesso?",
  "Raccontami una situazione caotica: come hai deciso cosa fare prima?",
  "Qual è una competenza difficile che hai imparato nell’ultimo anno?",
  "Immagina che il responsabile sia fuori sede e arrivino due urgenze insieme. Come ti muovi?",
  "Che cosa dovrebbe succedere nei prossimi tre anni per considerare questa esperienza un successo?"
];

export default function InterviewClient({ applicationId }: { applicationId: string }) {
  const [index,setIndex]=useState(0); const [answer,setAnswer]=useState(""); const [messages,setMessages]=useState<{role:"ai"|"user";text:string}[]>([{role:"ai",text:questions[0]}]); const [done,setDone]=useState(false);
  async function send(){ if(!answer.trim()) return; const next=[...messages,{role:"user" as const,text:answer.trim()}]; if(index+1<questions.length){next.push({role:"ai",text:questions[index+1]});setIndex(index+1);}else{next.push({role:"ai",text:"Grazie. La tua candidatura è completa e sarà valutata dal nostro team umano.");setDone(true); await fetch('/api/interview',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({applicationId,messages:next})});} setMessages(next);setAnswer(""); }
  return <div className="stack"><div className="chat">{messages.map((m,i)=><div key={i} className={`bubble ${m.role}`}>{m.text}</div>)}</div>{!done&&<><textarea value={answer} onChange={e=>setAnswer(e.target.value)} placeholder="Scrivi qui la tua risposta"/><button className="button" onClick={send}>Invia risposta</button></>}{done&&<a className="button" href="/">Torna alle posizioni</a>}</div>;
}
