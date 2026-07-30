const demo = [
  { name:"Giulia Demo", role:"Assistente di direzione", city:"Torino", score:84, status:"Da gestire", strength:"Organizzazione e chiarezza" },
  { name:"Marco Demo", role:"Commerciale CasaPrime", city:"Milano", score:76, status:"Da chiamare", strength:"Energia commerciale" }
];
export default function DashboardPage(){return <main className="container page"><div className="stack"><div><span className="tag">Area recruiter</span><h1>Da gestire</h1><p className="muted">Candidature ordinate per priorità e completezza.</p></div><div className="card"><table className="table"><thead><tr><th>Candidato</th><th>Posizione</th><th>Città</th><th>Valutazione</th><th>Stato</th></tr></thead><tbody>{demo.map(x=><tr key={x.name}><td><strong>{x.name}</strong><div className="muted">{x.strength}</div></td><td>{x.role}</td><td>{x.city}</td><td className="score">{x.score}</td><td><span className="tag">{x.status}</span></td></tr>)}</tbody></table></div></div></main>}
