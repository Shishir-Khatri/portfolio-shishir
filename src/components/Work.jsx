import React from 'react';

const PROJECTS = [
  {
    tag: 'Automation',
    n: '01',
    t: 'Workflow Automation System',
    d: 'Automated workflows using n8n connecting Gmail, Google Sheets, and Slack — eliminating repetitive tasks through scheduled and event-driven automation with third-party API integrations.',
    stack: ['n8n', 'Gmail API', 'Google Sheets', 'Slack']
  },
  {
    tag: 'Full-Stack Web',
    n: '02',
    t: 'Event Management System',
    d: 'Full-stack event management platform with voice-powered search, user authentication, and dynamic event CRUD operations built on a Node.js backend.',
    stack: ['Node.js', 'Express.js', 'EJS', 'Web Speech API', 'MongoDB']
  },
  {
    tag: 'Backend & Database',
    n: '03',
    t: 'Student Record Management System',
    d: 'Comprehensive student record management application featuring full CRUD operations with a relational database backend for efficient data handling.',
    stack: ['PHP', 'Twig', 'MySQL', 'CRUD']
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
