import { brands } from '../data';

export default function Brands() {
  return (
    <section id="brands" className="section">
      <div className="container">
        <div className="section-header center reveal">
          <span className="section-label">Trusted Partners</span>
          <h2 className="section-title">Brands I've <span>Worked With</span></h2>
          <p className="section-desc">
            Delivering tailored solutions — website development, branding, social media management, and strategic consultancy.
          </p>
        </div>

        <div className="brands-grid reveal reveal-delay-1">
          {brands.map((brand, i) => (
            <div key={brand} className="brand-card" style={{ animationDelay: `${i * 0.04}s` }}>
              <span className="brand-name">{brand}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
