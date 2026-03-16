import { services } from '../data';

export default function Services() {
  return (
    <section id="services" className="section">
      <div className="container">
        <div className="section-header center reveal">
          <span className="section-label">My Services</span>
          <h2 className="section-title">Creative Solutions for <span>Your Business</span></h2>
          <p className="section-desc">
            From concept to deployment — I deliver complete digital solutions tailored to the Ghanaian and global market.
          </p>
        </div>

        <div className="services-grid">
          {services.map((svc, i) => (
            <div
              key={svc.title}
              className="service-card reveal"
              style={{ '--card-accent': svc.color, transitionDelay: `${i * 0.08}s` }}
            >
              <div className="service-icon" style={{ background: `${svc.color}18`, color: svc.color }}>
                <i className={svc.icon} />
              </div>
              <h3 className="service-title">{svc.title}</h3>
              <p className="service-desc">{svc.desc}</p>
              <div style={{
                marginTop: 20, paddingTop: 16,
                borderTop: '1px solid rgba(255,255,255,0.04)',
                display: 'flex', alignItems: 'center', gap: 6,
                fontSize: '0.8rem', fontWeight: 600, color: svc.color,
                cursor: 'pointer',
              }}
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Get a Quote <i className="fa-solid fa-arrow-right" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
