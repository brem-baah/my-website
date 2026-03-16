import { useState, useEffect } from 'react';
import { navLinks } from '../data';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState('home');

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50);
      const sections = navLinks.map((l) => l.href.slice(1));
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && window.scrollY >= el.offsetTop - 130) {
          setActive(sections[i]);
          break;
        }
      }
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNav = (href) => {
    setOpen(false);
    const target = document.querySelector(href);
    if (target) target.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className={`navbar${scrolled ? ' scrolled' : ''}`}>
      <div className="container navbar-inner">
        <a href="#home" className="navbar-logo" onClick={(e) => { e.preventDefault(); handleNav('#home'); }}>
          <img src="/images/my-logo.png" alt="Baah Isaac Brem" />
        </a>

        <ul className="navbar-links">
          {navLinks.map(({ href, label }) => (
            <li key={href}>
              <a
                href={href}
                className={`navbar-link${active === href.slice(1) ? ' active' : ''}`}
                onClick={(e) => { e.preventDefault(); handleNav(href); }}
              >
                {label}
                {active === href.slice(1) && <span className="navbar-link-dot" />}
              </a>
            </li>
          ))}
        </ul>

        <a href="/images/CV-Baah-Isaac-Brem.pdf" download className="navbar-cv">
          <i className="fa-solid fa-download" /> CV
        </a>

        <button
          className={`hamburger${open ? ' open' : ''}`}
          onClick={() => setOpen(!open)}
          aria-label="Toggle navigation"
        >
          <span className="hamburger-bar" />
          <span className="hamburger-bar" />
          <span className="hamburger-bar" />
        </button>
      </div>

      <div className={`mobile-menu${open ? ' open' : ''}`}>
        <div className="mobile-menu-inner">
          {navLinks.map(({ href, label }) => (
            <a
              key={href}
              href={href}
              className={`mobile-link${active === href.slice(1) ? ' active' : ''}`}
              onClick={(e) => { e.preventDefault(); handleNav(href); }}
            >
              {label}
            </a>
          ))}
          <a href="/images/CV-Baah-Isaac-Brem.pdf" download className="mobile-cv">
            <i className="fa-solid fa-download" /> Download CV
          </a>
        </div>
      </div>
    </nav>
  );
}
