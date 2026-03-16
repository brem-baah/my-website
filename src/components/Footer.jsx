import { useEffect, useRef } from 'react';
import { personal } from '../data';

export default function Footer() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d', { alpha: true });
    let animId;
    let W, H;

    const resize = () => {
      const rect = canvas.parentNode.getBoundingClientRect();
      W = canvas.width = rect.width;
      H = canvas.height = rect.height;
    };
    window.addEventListener('resize', resize);
    resize();

    class FireParticle {
      constructor() { this.reset(); }
      reset() {
        this.x = Math.random() * W;
        this.y = H + Math.random() * 30;
        this.vx = (Math.random() - 0.5) * 1.2;
        this.vy = -(Math.random() * 1.5 + 0.8);
        this.life = Math.random() * 50 + 20;
        this.maxLife = this.life;
        this.size = Math.random() * 22 + 12;
        this.g = Math.floor(Math.random() * 100 + 50);
      }
      update() {
        this.x += this.vx;
        this.y += this.vy;
        this.life--;
        this.vx += Math.sin(this.y * 0.05) * 0.05;
        if (this.life <= 0) this.reset();
      }
      draw() {
        const r = this.life / this.maxLife;
        const size = this.size * r;
        const g = ctx.createRadialGradient(this.x, this.y, 0, this.x, this.y, size);
        g.addColorStop(0, `rgba(255,${this.g + 100},50,${r * 0.45})`);
        g.addColorStop(0.5, `rgba(255,${this.g},0,${r * 0.25})`);
        g.addColorStop(1, `rgba(200,30,0,0)`);
        ctx.beginPath();
        ctx.fillStyle = g;
        ctx.arc(this.x, this.y, size, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    class Spark {
      constructor() { this.reset(); }
      reset() {
        this.x = Math.random() * W;
        this.y = H;
        this.vx = (Math.random() - 0.5) * 3;
        this.vy = -(Math.random() * 3 + 2);
        this.life = Math.random() * 80 + 40;
        this.maxLife = this.life;
      }
      update() {
        this.x += this.vx;
        this.y += this.vy;
        this.life--;
        if (this.life <= 0 || this.y < 0) this.reset();
      }
      draw() {
        const op = this.life / this.maxLife;
        ctx.fillStyle = `rgba(255,200,50,${op * 0.8})`;
        ctx.fillRect(this.x, this.y, 2, 2);
      }
    }

    const particles = [
      ...Array.from({ length: 60 }, () => new FireParticle()),
      ...Array.from({ length: 20 }, () => new Spark()),
    ];

    const animate = () => {
      ctx.clearRect(0, 0, W, H);
      ctx.globalCompositeOperation = 'screen';
      particles.forEach((p) => { p.update(); p.draw(); });
      animId = requestAnimationFrame(animate);
    };
    animate();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', resize);
    };
  }, []);

  const footerLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About Me', href: '#about' },
    { label: 'My Work', href: '#projects' },
    { label: 'Services', href: '#services' },
    { label: 'Blog', href: '#blog' },
  ];

  const expertise = [
    { label: 'React Development', href: '#skills' },
    { label: 'WordPress & Woo', href: '#skills' },
    { label: 'PHP Backend', href: '#skills' },
    { label: 'AI Integration', href: '#skills' },
    { label: 'UI/UX Design', href: '#skills' },
  ];

  const handleNavClick = (e, href) => {
    e.preventDefault();
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="footer">
      <div className="footer-fire">
        <canvas ref={canvasRef} id="fireCanvas" />
      </div>

      <div className="footer-inner">
        <div className="container">
          <div className="footer-grid">
            {/* Brand */}
            <div>
              <div className="footer-logo">
                <img src="/images/my-logo.png" alt="Baah Isaac Brem" />
              </div>
              <p className="footer-desc">
                Full-Stack Web &amp; Software Developer specializing in React, WordPress, and AI-enhanced solutions. Building high-performance assets for the Ghanaian and global market.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="footer-col-title">Quick Links</h4>
              <ul className="footer-links">
                {footerLinks.map((l) => (
                  <li key={l.href}>
                    <a href={l.href} onClick={(e) => handleNavClick(e, l.href)}>
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Expertise */}
            <div>
              <h4 className="footer-col-title">Expertise</h4>
              <ul className="footer-links">
                {expertise.map((l) => (
                  <li key={l.label}>
                    <a href={l.href} onClick={(e) => handleNavClick(e, l.href)}>
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Connect */}
            <div className="footer-connect">
              <h4 className="footer-col-title">Let's Connect</h4>
              <p><i className="fa-solid fa-phone" /><a href={`tel:${personal.phone1.replace(/\s/g,'')}`} style={{ color: '#4d4d66', textDecoration: 'none' }}>{personal.phone1}</a></p>
              <p><i className="fa-solid fa-envelope" /><a href={`mailto:${personal.email}`} style={{ color: '#4d4d66', textDecoration: 'none' }}>{personal.email}</a></p>
              <p><i className="fa-solid fa-location-dot" />{personal.location}</p>
              <div className="footer-social-icons">
                {personal.socials.map((s) => (
                  <a key={s.label} href={s.url} target="_blank" rel="noreferrer" className="footer-social-icon" aria-label={s.label}>
                    <i className={s.icon} />
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="footer-bottom">
            <p>&copy; 2026 Baah Isaac Brem &mdash; Crafted with <i className="fa-solid fa-heart" /> in Accra, Ghana</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
