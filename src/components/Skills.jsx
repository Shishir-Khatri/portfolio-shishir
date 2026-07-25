import React, { useRef } from 'react';

const SKILLS_DATA = [
  { ico: 'fa-solid fa-diagram-project', t: 'Automation & Workflows', d: 'n8n, Make.com, Zapier, REST APIs' },
  { ico: 'fa-solid fa-wand-magic-sparkles', t: 'AI Tools', d: 'Claude, ChatGPT, Gemini, Cursor, Perplexity' },
  { ico: 'fa-solid fa-code', t: 'Languages', d: 'Python, C#, C, JavaScript, Java, SQL' },
  { ico: 'fa-brands fa-react', t: 'Full-Stack Web', d: 'React, Tailwind CSS, Node.js, Express' },
  { ico: 'fa-solid fa-database', t: 'Database', d: 'MongoDB, Firebase, SQL' },
  { ico: 'fa-solid fa-brain', t: 'CS Core', d: 'DSA, OOP, OS, Networks' },
  { ico: 'fa-brands fa-git-alt', t: 'Tooling & Ops', d: 'Git, Linux, Figma, Postman' },
  { ico: 'fa-solid fa-rocket', t: 'Currently Learning', d: 'RAG, Three.js, TensorFlow, Webhooks, PyTorch' }
];

function SkillCard({ ico, t, d }) {
  const cardRef = useRef(null);

  const handleMouseMove = (e) => {
    const card = cardRef.current;
    if (!card) return;
    const r = card.getBoundingClientRect();
    const px = ((e.clientX - r.left) / r.width) * 100;
    const py = ((e.clientY - r.top) / r.height) * 100;
    card.style.setProperty('--mx', `${px}%`);
    card.style.setProperty('--my', `${py}%`);
  };

  return (
    <article
      className="skill-card tilt reveal in"
      ref={cardRef}
      onMouseMove={handleMouseMove}
    >
      <div className="skill-ico">
        <i className={ico} />
      </div>
      <h3>{t}</h3>
      <p>{d}</p>
    </article>
  );
}

export default function Skills() {
  return (
    <section className="section skills" id="skills">
      <div className="section-head reveal in">
        <span className="eyebrow">02 — Technical Skills</span>
        <h2>Tools of the craft</h2>
      </div>

      <div className="skills-grid" id="skillsGrid">
        {SKILLS_DATA.map((s, idx) => (
          <SkillCard key={idx} ico={s.ico} t={s.t} d={s.d} />
        ))}
      </div>
    </section>
  );
}
