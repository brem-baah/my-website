import { useEffect, useRef, useState } from 'react';
import { personal } from '../data';

const ROLES = [
  'Web Developer',
  'Software Engineer',
  'React Specialist',
  'WordPress Expert',
  'UI/UX Designer',
];

function useTypewriter(words, speed = 80, pause = 2000) {
  const [displayed, setDisplayed] = useState('');
  const [wordIdx, setWordIdx] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const current = words[wordIdx];
    let timeout;

    if (!isDeleting && displayed === current) {
      timeout = setTimeout(() => setIsDeleting(true), pause);
    } else if (isDeleting && displayed === '') {
      setIsDeleting(false);
      setWordIdx((i) => (i + 1) % words.length);
    } else {
      const next = isDeleting
        ? current.slice(0, displayed.length - 1)
        : current.slice(0, displayed.length + 1);
      timeout = setTimeout(() => setDisplayed(next), isDeleting ? speed / 2 : speed);
    }
    return () => clearTimeout(timeout);
  }, [displayed, isDeleting, wordIdx, words, speed, pause]);

  return displayed;
}

export default function Hero() {
  const canvasRef = useRef(null);
  const role = useTypewriter(ROLES);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animId;
    let W = (canvas.width = window.innerWidth);
    let H = (canvas.height = window.innerHeight);

    const onResize = () => {
      W = canvas.width = window.innerWidth;
      H = canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', onResize);

    const particles = Array.from({ length: 55 }, () => ({
      x: Math.random() * W,
      y: Math.random() * H,
      r: Math.random() * 1.4 + 0.3,
      vx: (Math.random() - 0.5) * 0.28,
      vy: (Math.random() - 0.5) * 0.28,
      alpha: Math.random() * 0.35 + 0.05,
      color: Math.random() > 0.5 ? '#d97706' : '#22d3ee',
    }));

    const draw = () => {
      ctx.clearRect(0, 0, W, H);
      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0) p.x = W;
        if (p.x > W) p.x = 0;
        if (p.y < 0) p.y = H;
        if (p.y > H) p.y = 0;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.globalAlpha = p.alpha;
        ctx.fill();
      });
      ctx.globalAlpha = 1;
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 100) {
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = '#d97706';
            ctx.globalAlpha = (1 - dist / 100) * 0.04;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      }
      ctx.globalAlpha = 1;
      animId = requestAnimationFrame(draw);
    };
    draw();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', onResize);
    };
  }, []);

  return (
    <section id="home" className="hero">
      <canvas
        ref={canvasRef}
        style={{
          position: 'absolute', inset: 0,
          width: '100%', height: '100%',
          pointerEvents: 'none', zIndex: 0,
        }}
      />

      {/* Glow blobs */}
      <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none', zIndex: 0, overflow: 'hidden' }}>
        <div style={{
          position: 'absolute', top: '15%', left: '0%',
          width: 600, height: 600, borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(217,119,6,0.055) 0%, transparent 68%)',
        }} />
        <div style={{
          position: 'absolute', bottom: '5%', right: '0%',
          width: 500, height: 500, borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(34,211,238,0.045) 0%, transparent 68%)',
        }} />
      </div>

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <div className="hero-grid">
          {/* ── LEFT ── */}
          <div>
            {/* Available badge */}
            <div className="hero-tag">
              <span className="hero-tag-dot" />
              Available for Freelance &amp; Remote
            </div>

            {/* Name */}
            <h1 className="hero-name">
              Hello, I'm<br />
              <span>Baah Isaac Brem</span>
            </h1>

            {/* Typewriter role */}
            <p className="hero-role">
              <span style={{ color: '#e8e8f0' }}>{role}</span>
              <span style={{
                display: 'inline-block', width: 2, height: '1em',
                background: '#d97706', marginLeft: 3,
                verticalAlign: 'text-bottom',
                animation: 'cursorBlink 0.9s steps(1) infinite',
              }} />
            </p>

            <p className="hero-desc">
              Full-Stack Developer crafting high-performance digital experiences with React, PHP, WordPress, and AI-enhanced workflows. Based in Accra, Ghana.
            </p>

            <div className="hero-btns">
              <button
                className="btn btn-primary"
                onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              >
                <i className="fa-solid fa-eye" /> View Projects
              </button>
              <button
                className="btn btn-outline"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                <i className="fa-solid fa-paper-plane" /> Hire Me
              </button>
            </div>

            <div className="hero-socials" style={{ marginBottom: 36 }}>
              {personal.socials.map((s) => (
                <a key={s.label} href={s.url} target="_blank" rel="noreferrer"
                  className="hero-social-link" aria-label={s.label}>
                  <i className={s.icon} />
                </a>
              ))}
            </div>

            <div className="hero-stats">
              {personal.stats.map((st) => (
                <div key={st.label}>
                  <div className="hero-stat-value">{st.value}</div>
                  <div className="hero-stat-label">{st.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* ── RIGHT ── */}
          <div className="hero-visual">
            <div className="hero-img-ring">
              <img src="/images/hero-img.jpg" alt="Baah Isaac Brem" className="hero-img" />
            </div>

            <div className="hero-badge hero-badge-1">
              <div className="hero-badge-icon gold">
                <i className="fa-solid fa-code-branch" />
              </div>
              <div>
                <strong className="hero-badge-strong">2+ Years</strong>
                <span className="hero-badge-sub">Experience</span>
              </div>
            </div>

            <div className="hero-badge hero-badge-2">
              <div className="hero-badge-icon cyan">
                <i className="fa-solid fa-check-double" />
              </div>
              <div>
                <strong className="hero-badge-strong">15+ Projects</strong>
                <span className="hero-badge-sub">Completed</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="scroll-indicator">
        <span>Scroll</span>
        <i className="fa-solid fa-chevron-down" />
      </div>

      <style>{`
        @keyframes cursorBlink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
      `}</style>
    </section>
  );
}
