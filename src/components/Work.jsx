import React from 'react';

const PROJECTS = [
  {
    tag: 'AI Automation',
    n: '01',
    t: 'AutoFlow AI Engine',
    d: 'Autonomous multi-agent workflow pipeline integrating n8n, OpenAI API, and webhooks for real-time task orchestration.',
    stack: ['n8n', 'Python', 'OpenAI API', 'Webhooks']
  },
  {
    tag: 'Full-Stack AI',
    n: '02',
    t: 'Sajilo Notes AI',
    d: 'Collaborative student note-taking platform empowered by real-time AI summarization and semantic RAG search.',
    stack: ['React', 'Node.js', 'MongoDB', 'RAG AI']
  },
  {
    tag: 'Data & ML',
    n: '03',
    t: 'Himal Climate ML',
    d: 'Interactive dashboard visualising climate patterns across Nepal using automated data scrapers and ML forecasting.',
    stack: ['Python', 'TensorFlow', 'Chart.js', 'REST']
  },
  {
    tag: 'Full-Stack Web',
    n: '04',
    t: 'AgentOps Dashboard',
    d: 'Futuristic glassmorphic web interface for monitoring live AI agent executions, workflow logs, and API health.',
    stack: ['React', 'Tailwind CSS', 'Three.js', 'Node.js']
  }
];

export default function Work() {
  return (
    <section className="section work" id="work">
      <div className="section-head reveal in">
        <span className="eyebrow">03 — Selected Work</span>
        <h2>Things I've built</h2>
      </div>

      <div className="work-grid" id="workGrid">
        {PROJECTS.map((p, idx) => (
          <article className="work-card tilt reveal in" key={idx}>
            <span className="work-num">{p.n}</span>
            <span className="work-tag">{p.tag}</span>
            <h3>{p.t}</h3>
            <p>{p.d}</p>
            <div className="work-stack">
              {p.stack.map((s, i) => (
                <span key={i}>{s}</span>
              ))}
            </div>
            <a href="#" className="work-link" onClick={(e) => e.preventDefault()}>
              View project <i className="fa-solid fa-arrow-up-right-from-square" />
            </a>
          </article>
        ))}
      </div>
    </section>
  );
}
