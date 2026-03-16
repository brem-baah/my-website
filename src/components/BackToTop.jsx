import { useEffect, useState } from 'react';

export default function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 500);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <button
      onClick={scrollTop}
      aria-label="Back to top"
      style={{
        position: 'fixed',
        bottom: 92,
        right: 28,
        zIndex: 998,
        width: 44,
        height: 44,
        borderRadius: '50%',
        background: 'rgba(13,13,26,0.95)',
        border: '1px solid rgba(217,119,6,0.3)',
        color: '#f59e0b',
        fontSize: '0.9rem',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        cursor: 'pointer',
        backdropFilter: 'blur(12px)',
        boxShadow: '0 4px 20px rgba(0,0,0,0.4)',
        transition: 'all 0.3s ease',
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0)' : 'translateY(16px)',
        pointerEvents: visible ? 'all' : 'none',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.background = 'rgba(217,119,6,0.15)';
        e.currentTarget.style.borderColor = '#d97706';
        e.currentTarget.style.transform = 'translateY(-3px)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.background = 'rgba(13,13,26,0.95)';
        e.currentTarget.style.borderColor = 'rgba(217,119,6,0.3)';
        e.currentTarget.style.transform = 'translateY(0)';
      }}
    >
      <i className="fa-solid fa-chevron-up" />
    </button>
  );
}
