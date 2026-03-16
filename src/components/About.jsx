import { useRef } from 'react';
import { personal } from '../data';

const chips = [
  { icon: 'fa-solid fa-location-dot', text: 'Accra, Ghana' },
  { icon: 'fa-brands fa-react', text: 'React Developer' },
  { icon: 'fa-solid fa-language', text: 'English · Twi · French' },
  { icon: 'fa-solid fa-robot', text: 'AI-Enhanced Builds' },
  { icon: 'fa-solid fa-briefcase', text: 'Open to Remote' },
];

export default function About() {
  const wrapRef = useRef(null);

  const handleMouseMove = (e) => {
    const wrap = wrapRef.current;
    if (!wrap || window.innerWidth < 769) return;
    const { left, top, width, height } = wrap.getBoundingClientRect();
    const x = (e.clientX - left) / width;
    const y = (e.clientY - top) / height;
    const rotY = (x - 0.5) * 28;
    const rotX = (y - 0.5) * -28;
    wrap.style.transform = `perspective(1000px) rotateX(${rotX}deg) rotateY(${rotY}deg) scale3d(1.03,1.03,1.03)`;
    wrap.style.boxShadow = `${(x - 0.5) * -16}px ${(y - 0.5) * -16}px 48px rgba(0,0,0,0.55)`;
  };

  const handleMouseLeave = () => {
    const wrap = wrapRef.current;
    if (!wrap) return;
    wrap.style.transform = 'perspective(1000px) rotateY(6deg) rotateX(3deg)';
    wrap.style.boxShadow = '16px 16px 48px rgba(0,0,0,0.4)';
    wrap.style.transition = 'transform 0.6s ease, box-shadow 0.6s ease';
    setTimeout(() => { if (wrap) wrap.style.transition = ''; }, 650);
  };

  return (
    <section id="about" className="section section-alt">
      <div className="container">
        <div className="about-grid reveal">
          {/* ── Image ── */}
          <div
            ref={wrapRef}
            className="about-img-wrapper reveal reveal-delay-1"
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{
              transform: 'perspective(1000px) rotateY(6deg) rotateX(3deg)',
              transition: 'transform 0.1s ease',
              willChange: 'transform',
              borderRadius: 20,
              cursor: 'default',
            }}
          >
            <img src="/images/about-img.jpg" alt="Baah Isaac Brem" className="about-img" />
            <div className="about-img-decoration" />

            {/* Floating card */}
            <div style={{
              position: 'absolute', bottom: 24, left: -20,
              background: 'rgba(13,13,26,0.96)',
              border: '1px solid rgba(255,255,255,0.08)',
              borderRadius: 14, padding: '14px 18px',
              backdropFilter: 'blur(12px)',
              display: 'flex', alignItems: 'center', gap: 12,
              boxShadow: '0 12px 40px rgba(0,0,0,0.5)',
              zIndex: 4,
            }}>
              <div style={{
                width: 42, height: 42, borderRadius: 10,
                background: 'rgba(34,211,238,0.1)', color: '#22d3ee',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: '1.1rem', flexShrink: 0,
              }}>
                <i className="fa-solid fa-code" />
              </div>
              <div>
                <div style={{ fontWeight: 700, fontSize: '0.9rem', color: '#e8e8f0', marginBottom: 2 }}>
                  Creative Developer
                </div>
                <div style={{ fontSize: '0.75rem', color: '#6b6b8a' }}>Accra, Ghana 🇬🇭</div>
              </div>
            </div>
          </div>

          {/* ── Text ── */}
          <div className="reveal reveal-delay-2">
            <span className="section-label">About Me</span>
            <h2 className="section-title">
              Crafting Digital Experiences That <span>Drive Growth</span>
            </h2>
            <div className="line-divider" />

            {personal.bio.map((para, i) => (
              <p key={i} style={{ color: '#7c7c9a', marginBottom: 16, fontSize: '0.94rem', lineHeight: 1.85 }}>
                {para}
              </p>
            ))}

            <div className="about-chips">
              {chips.map((c) => (
                <span key={c.text} className="about-chip">
                  <i className={c.icon} />
                  {c.text}
                </span>
              ))}
            </div>

            <div style={{ marginTop: 28, display: 'flex', gap: 12, flexWrap: 'wrap' }}>
              <a href="/images/CV-Baah-Isaac-Brem.pdf" download className="btn btn-primary">
                <i className="fa-solid fa-file-pdf" /> Download CV
              </a>
              <button
                className="btn btn-outline"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                <i className="fa-solid fa-paper-plane" /> Let's Talk
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
