'use client';
import { useRef, useCallback } from 'react';

/**
 * TiltCard — wraps children in a 3D perspective tilt that follows the mouse.
 * Also adds a moving shine/glare effect.
 */
export default function TiltCard({ children, style, className, intensity = 14, glare = true }) {
  const cardRef = useRef(null);
  const shineRef = useRef(null);
  const rafRef = useRef(null);

  const handleMouseMove = useCallback((e) => {
    if (!cardRef.current) return;
    if (rafRef.current) cancelAnimationFrame(rafRef.current);
    rafRef.current = requestAnimationFrame(() => {
      const card = cardRef.current;
      if (!card) return;
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const cx = rect.width / 2;
      const cy = rect.height / 2;
      const rx = ((y - cy) / cy) * -intensity;
      const ry = ((x - cx) / cx) * intensity;
      card.style.transform = `perspective(900px) rotateX(${rx}deg) rotateY(${ry}deg) translateZ(14px) scale(1.02)`;
      card.style.transition = 'transform 0.05s linear';
      if (glare && shineRef.current) {
        const pctX = Math.round((x / rect.width) * 100);
        const pctY = Math.round((y / rect.height) * 100);
        shineRef.current.style.background = `radial-gradient(circle at ${pctX}% ${pctY}%, rgba(255,255,255,0.13) 0%, transparent 65%)`;
        shineRef.current.style.opacity = '1';
      }
    });
  }, [intensity, glare]);

  const handleMouseLeave = useCallback(() => {
    if (!cardRef.current) return;
    const card = cardRef.current;
    card.style.transform = 'perspective(900px) rotateX(0deg) rotateY(0deg) translateZ(0) scale(1)';
    card.style.transition = 'transform 0.6s cubic-bezier(0.23,1,0.32,1)';
    if (shineRef.current) {
      shineRef.current.style.opacity = '0';
    }
  }, []);

  return (
    <div
      ref={cardRef}
      style={{ ...style, position: 'relative', transformStyle: 'preserve-3d' }}
      className={className}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {/* Glare layer */}
      {glare && (
        <div
          ref={shineRef}
          style={{
            position: 'absolute', inset: 0,
            borderRadius: 'inherit',
            pointerEvents: 'none',
            zIndex: 10,
            opacity: 0,
            transition: 'opacity 0.3s ease',
          }}
        />
      )}
      {children}
    </div>
  );
}
