import { useEffect, useState } from 'react';

export default function Preloader({ onDone }) {
  const [progress, setProgress] = useState(0);
  const [hiding, setHiding] = useState(false);

  useEffect(() => {
    let current = 0;
    const interval = setInterval(() => {
      current += Math.random() * 18 + 8;
      if (current >= 100) {
        current = 100;
        clearInterval(interval);
        setProgress(100);
        setTimeout(() => {
          setHiding(true);
          setTimeout(onDone, 600);
        }, 300);
      }
      setProgress(Math.min(current, 100));
    }, 80);
    return () => clearInterval(interval);
  }, [onDone]);

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 9999,
        background: '#07070f',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 32,
        transition: 'opacity 0.6s ease, transform 0.6s ease',
        opacity: hiding ? 0 : 1,
        transform: hiding ? 'scale(1.04)' : 'scale(1)',
        pointerEvents: hiding ? 'none' : 'all',
      }}
    >
      {/* Logo / Name */}
      <div style={{ textAlign: 'center' }}>
        <div
          style={{
            fontFamily: 'Bricolage Grotesque, sans-serif',
            fontSize: 'clamp(1.8rem, 4vw, 2.8rem)',
            fontWeight: 800,
            letterSpacing: '-0.02em',
            background: 'linear-gradient(135deg, #f59e0b 0%, #22d3ee 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            marginBottom: 6,
          }}
        >
          Baah Isaac Brem
        </div>
        <div
          style={{
            fontSize: '0.82rem',
            fontWeight: 500,
            color: '#3d3d55',
            letterSpacing: '0.18em',
            textTransform: 'uppercase',
          }}
        >
          Web Developer &amp; Software Engineer
        </div>
      </div>

      {/* Progress bar */}
      <div
        style={{
          width: 220,
          height: 2,
          background: 'rgba(255,255,255,0.05)',
          borderRadius: 2,
          overflow: 'hidden',
        }}
      >
        <div
          style={{
            height: '100%',
            width: `${progress}%`,
            background: 'linear-gradient(90deg, #d97706, #22d3ee)',
            borderRadius: 2,
            transition: 'width 0.1s ease',
          }}
        />
      </div>

      {/* Percentage */}
      <div
        style={{
          fontSize: '0.75rem',
          color: '#3d3d55',
          letterSpacing: '0.1em',
          fontWeight: 600,
          marginTop: -16,
        }}
      >
        {Math.round(progress)}%
      </div>

      {/* Decorative dots */}
      <div style={{ display: 'flex', gap: 8, position: 'absolute', bottom: 40 }}>
        {[0, 1, 2].map((i) => (
          <div
            key={i}
            style={{
              width: 6,
              height: 6,
              borderRadius: '50%',
              background: '#d97706',
              opacity: 0.3,
              animation: `dotPulse 1.4s ease-in-out ${i * 0.2}s infinite`,
            }}
          />
        ))}
      </div>

      <style>{`
        @keyframes dotPulse {
          0%, 100% { opacity: 0.2; transform: scale(1); }
          50% { opacity: 1; transform: scale(1.4); }
        }
      `}</style>
    </div>
  );
}
