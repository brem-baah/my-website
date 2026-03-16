import React from 'react';

export default function RainEffect({ dropCount = 80 }) {
  const drops = React.useMemo(
    () => Array.from({ length: dropCount }, (_, i) => i),
    [dropCount],
  );

  return (
    <div className="rain-effect-wrapper" aria-hidden="true">
      {drops.map((i) => {
        const duration = Math.random() * 2 + 1; // 1–3s
        const delay = Math.random() * 5;
        const left = Math.random() * 100;
        const opacity = Math.random() * 0.3 + 0.1;

        return (
          <div
            key={i}
            className="rain-drop"
            style={{
              left: `${left}%`,
              animationDuration: `${duration}s`,
              animationDelay: `${delay}s`,
              opacity,
            }}
          />
        );
      })}
    </div>
  );
}

