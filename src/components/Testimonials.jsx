import { useEffect, useState } from 'react';
import { testimonials } from '../data';

export default function Testimonials() {
  const [pageIndex, setPageIndex] = useState(0);
  const [isWide, setIsWide] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia('(min-width: 1024px)');
    const update = () => setIsWide(mq.matches);
    update();
    mq.addEventListener('change', update);
    return () => mq.removeEventListener('change', update);
  }, []);

  const pageSize = isWide ? 2 : 1;
  const maxStart = Math.max(0, testimonials.length - pageSize);
  const totalPages = maxStart + 1;

  const next = () => setPageIndex((prev) => (prev + 1) % totalPages);
  const prev = () => setPageIndex((prev) => (prev - 1 + totalPages) % totalPages);

  const start = pageIndex;
  const visible = testimonials.slice(start, start + pageSize);

  return (
    <section id="testimonials" className="section">
      <div className="container">
        <div className="section-header center reveal">
          <span className="section-label">Social Proof</span>
          <h2 className="section-title">What <span>Clients Say</span></h2>
        </div>

        <div className="testimonials-grid testimonials-slider">
          {visible.map((t, i) => (
            <div key={i} className="testimonial-card reveal">
              <div className="testimonial-quote-icon">
                <i className="fa-solid fa-quote-left" />
              </div>
              <p className="testimonial-text">"{t.quote}"</p>
              <div className="testimonial-author">
                <div className="testimonial-avatar">
                  {t.name.charAt(0)}
                </div>
                <div>
                  <div className="testimonial-name">{t.name}</div>
                  <div className="testimonial-role">{t.role}</div>
                </div>
                <div style={{ marginLeft: 'auto', display: 'flex', gap: 3 }}>
                  {[...Array(5)].map((_, j) => (
                    <i key={j} className="fa-solid fa-star" style={{ fontSize: '0.7rem', color: '#d97706' }} />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="testimonial-controls">
          <button type="button" className="btn btn-outline" onClick={prev} aria-label="Previous testimonial">
            <i className="fa-solid fa-arrow-left" />
          </button>
          <div className="testimonial-dots">
            {Array.from({ length: totalPages }).map((_, i) => (
              <button
                key={i}
                type="button"
                className={`testimonial-dot${i === pageIndex ? ' active' : ''}`}
                onClick={() => setPageIndex(i)}
                aria-label={`Go to testimonial ${i + 1}`}
              />
            ))}
          </div>
          <button type="button" className="btn btn-outline" onClick={next} aria-label="Next testimonial">
            <i className="fa-solid fa-arrow-right" />
          </button>
        </div>
      </div>
    </section>
  );
}
