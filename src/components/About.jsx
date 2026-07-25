import React, { useEffect, useRef, useState } from 'react';

function StatCard({ count, label, isStatic }) {
  const [val, setVal] = useState(0);
  const cardRef = useRef(null);

  useEffect(() => {
    if (isStatic) return;
    const el = cardRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const target = parseInt(count, 10);
            let n = 0;
            const step = Math.max(1, Math.ceil(target / 40));
            const iv = setInterval(() => {
              n += step;
              if (n >= target) {
                setVal(target);
                clearInterval(iv);
              } else {
                setVal(n);
              }
            }, 28);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.5 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [count, isStatic]);

  return (
    <div className="stat tilt" ref={cardRef}>
      <span className="num">
        {isStatic ? count : `${val}+`}
      </span>
      <span className="lbl">{label}</span>
    </div>
  );
}

export default function About() {
  return (
    <section className="section about" id="about">
      <div className="section-head reveal in">
        <span className="eyebrow">01 — About</span>
        <h2>
          A student, a builder,<br />a lifelong tinkerer.
        </h2>
      </div>

      <div className="about-grid">
        <div className="about-text reveal in">
          <p>
            I'm <strong>Shishir Khattri</strong>, an undergraduate Computer Science student based in
            Kathmandu, Nepal. I fell for programming the day I realised code could turn an idea
            into something people actually touch and feel.
          </p>
          <p>
            Since then I've been obsessed with the intersection of <strong>logic and beauty</strong> —
            building <strong>AI workflows &amp; automation pipelines</strong> by day and pixel-perfect <strong>full-stack interfaces</strong> by night.
          </p>
          <p>
            When I'm not coding, you'll find me exploring new LLM capabilities, sketching UI ideas,
            or breaking things just to understand how they work.
          </p>
        </div>

        <aside className="about-stats reveal in">
          <StatCard count="15" label="Projects built" />
          <StatCard count="8" label="Technologies" />
          <StatCard count="3" label="Years coding" />
          <StatCard count="∞" label="Curiosity" isStatic />
        </aside>
      </div>
    </section>
  );
}
