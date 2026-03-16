import { useState } from 'react';
import { projects } from '../data';

const FILTERS = ['All', 'Real Estate', 'E-commerce', 'Management System', 'Institutional', 'Digital Marketing', 'Branding'];

export default function Projects() {
  const [filter, setFilter] = useState('All');

  const filtered = filter === 'All'
    ? projects
    : projects.filter((p) => p.category === filter);

  return (
    <section id="projects" className="section">
      <div className="container">
        <div className="section-header center reveal">
          <span className="section-label">Case Studies</span>
          <h2 className="section-title">Featured <span>Work</span></h2>
          <p className="section-desc">
            Real-world projects built for real clients — from real estate portals to e-commerce stores.
          </p>
        </div>

        {/* Filter pills */}
        <div className="reveal" style={{ display: 'flex', gap: 8, flexWrap: 'wrap', marginBottom: 40, justifyContent: 'center' }}>
          {FILTERS.map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              style={{
                padding: '7px 16px',
                borderRadius: 100,
                fontSize: '0.8rem',
                fontWeight: 600,
                border: '1px solid',
                cursor: 'pointer',
                transition: 'all 0.2s ease',
                borderColor: filter === f ? '#d97706' : 'rgba(255,255,255,0.07)',
                background: filter === f ? 'rgba(217,119,6,0.12)' : 'transparent',
                color: filter === f ? '#f59e0b' : '#6b6b8a',
              }}
            >
              {f}
            </button>
          ))}
        </div>

        <div className="projects-grid">
          {filtered.map((proj, i) => (
            <div key={proj.title} className="project-card" style={{ transitionDelay: `${i * 0.07}s` }}>
              <div className="project-img-wrap">
                <img src={proj.img} alt={proj.title} loading="lazy" />
                <div className="project-img-overlay" />
              </div>
              <div className="project-body">
                <div className="project-category">
                  <i className={proj.categoryIcon} />
                  {proj.category}
                </div>
                <h3 className="project-title">{proj.title}</h3>
                <p className="project-desc">{proj.desc}</p>
                <div className="project-tech">
                  {proj.tech.map((t) => <span key={t}>{t}</span>)}
                </div>
                <div className="project-links">
                  {proj.link ? (
                    <a href={proj.link} target="_blank" rel="noreferrer" className="project-link">
                      {proj.linkText} <i className="fa-solid fa-arrow-up-right-from-square" style={{ fontSize: '0.75rem' }} />
                    </a>
                  ) : (
                    <span className="project-link-disabled">{proj.linkText}</span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
