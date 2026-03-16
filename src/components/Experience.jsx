import { experience } from '../data';

export default function Experience() {
  return (
    <section id="experience" className="section section-alt">
      <div className="container">
        <div className="section-header reveal">
          <span className="section-label">Work History</span>
          <h2 className="section-title">
            Professional <span>Experience</span>
          </h2>
          <div className="line-divider" />
        </div>

        <div className="timeline reveal reveal-delay-1">
          {experience.map((job, i) => (
            <div key={i} className="timeline-item">
              <div className="timeline-dot" />
              <div className="timeline-date">{job.date}</div>
              <h3 className="timeline-role">{job.role}</h3>
              <div className="timeline-company">
                <i className="fa-solid fa-building" style={{ fontSize: '0.8rem', marginRight: 6 }} />
                {job.company}
              </div>
              <div className="timeline-location">
                <i className="fa-solid fa-location-dot" />
                {job.location}
              </div>
              {job.points && (
                <div className="timeline-points">
                  {job.points.map((point, j) => (
                    <div key={j} className="timeline-point">{point}</div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
