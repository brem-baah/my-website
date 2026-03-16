import { skillGroups } from '../data';

export default function Skills() {
  return (
    <section id="skills" className="section">
      <div className="container">
        <div className="skills-container">
          {/* Sidebar */}
          <div className="skills-sidebar-inner reveal">
            <div className="skills-vertical-text">Skills</div>
            <div>
              <span className="section-label">Tech Stack</span>
              <h2 className="section-title" style={{ fontSize: '1.6rem' }}>
                My Technical <span>Toolkit</span>
              </h2>
              <p className="skills-sidebar-desc">
                Technologies and tools I use daily to build high-performance web applications and scalable digital systems.
              </p>
            </div>
          </div>

          {/* Skills grid */}
          <div className="reveal reveal-delay-1">
            {skillGroups.map((group) => (
              <div key={group.title} className="skill-group">
                <div className="skill-group-label">{group.title}</div>
                <div className="skills-grid">
                  {group.skills.map((sk) => (
                    <div key={sk.label} className="skill-card">
                      <i className={sk.icon} style={{ color: sk.color }} />
                      <span>{sk.label}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
