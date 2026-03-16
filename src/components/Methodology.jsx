import { methodology } from '../data';

export default function Methodology() {
  return (
    <section id="methodology" className="section section-alt">
      <div className="container">
        <div className="section-header center reveal">
          <span className="section-label">My Methodology</span>
          <h2 className="section-title">How I <span>Scale Your Business</span></h2>
          <p className="section-desc">
            A proven 4-step framework for delivering digital products that convert and grow.
          </p>
        </div>

        <div className="method-grid">
          {methodology.map((step, i) => (
            <div key={step.num} className="method-card reveal" style={{ transitionDelay: `${i * 0.1}s` }}>
              <div className="method-num">{step.num}</div>
              <div className="method-icon">
                <i className={step.icon} />
              </div>
              <h3 className="method-title">{step.title}</h3>
              <p className="method-desc">{step.desc}</p>

              {/* connector arrow for non-last items */}
              {i < methodology.length - 1 && (
                <div style={{
                  position: 'absolute', top: '50%', right: -16,
                  transform: 'translateY(-50%)',
                  color: 'rgba(217,119,6,0.25)',
                  fontSize: '1rem',
                  display: 'none',
                }}>
                  <i className="fa-solid fa-chevron-right" />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
