'use client';
import { useEffect, useRef, useState } from 'react';

/**
 * CustomCursor — a glowing dot + ring that follows the mouse.
 * The ring expands and fills when hovering interactive elements.
 */
export default function CustomCursor() {
  const dotRef = useRef(null);
  const ringRef = useRef(null);
  const [hovered, setHovered] = useState(false);
  const mousePosRef = useRef({ x: -200, y: -200 });
  const ringPosRef = useRef({ x: -200, y: -200 });
  const rafRef = useRef(null);

  useEffect(() => {
    // Smooth ring follow
    const animateRing = () => {
      const { x: mx, y: my } = mousePosRef.current;
      const { x: rx, y: ry } = ringPosRef.current;
      ringPosRef.current = {
        x: rx + (mx - rx) * 0.12,
        y: ry + (my - ry) * 0.12,
      };
      if (ringRef.current) {
        ringRef.current.style.left = `${ringPosRef.current.x - 20}px`;
        ringRef.current.style.top = `${ringPosRef.current.y - 20}px`;
      }
      rafRef.current = requestAnimationFrame(animateRing);
    };
    rafRef.current = requestAnimationFrame(animateRing);

    const onMove = (e) => {
      mousePosRef.current = { x: e.clientX, y: e.clientY };
      if (dotRef.current) {
        dotRef.current.style.left = `${e.clientX - 5}px`;
        dotRef.current.style.top = `${e.clientY - 5}px`;
      }
    };

    const onEnter = () => setHovered(true);
    const onLeave = () => setHovered(false);

    document.addEventListener('mousemove', onMove);
    const interactives = document.querySelectorAll('a, button, [data-hover]');
    interactives.forEach(el => {
      el.addEventListener('mouseenter', onEnter);
      el.addEventListener('mouseleave', onLeave);
    });

    return () => {
      cancelAnimationFrame(rafRef.current);
      document.removeEventListener('mousemove', onMove);
    };
  }, []);

  return (
    <>
      {/* Dot */}
      <div
        ref={dotRef}
        style={{
          position: 'fixed',
          width: 10, height: 10,
          borderRadius: '50%',
          background: hovered ? '#06b6d4' : '#a855f7',
          pointerEvents: 'none',
          zIndex: 99999,
          transform: hovered ? 'scale(0)' : 'scale(1)',
          transition: 'transform 0.2s ease, background 0.3s ease',
          boxShadow: `0 0 12px ${hovered ? '#06b6d4' : '#a855f7'}`,
          mixBlendMode: 'normal',
          willChange: 'left, top',
        }}
      />
      {/* Ring */}
      <div
        ref={ringRef}
        style={{
          position: 'fixed',
          width: 40, height: 40,
          borderRadius: '50%',
          border: hovered ? '2px solid #06b6d4' : '1.5px solid rgba(168,85,247,0.6)',
          background: hovered ? 'rgba(6,182,212,0.08)' : 'transparent',
          pointerEvents: 'none',
          zIndex: 99998,
          transform: hovered ? 'scale(1.8)' : 'scale(1)',
          transition: 'transform 0.3s cubic-bezier(0.34,1.56,0.64,1), border 0.3s ease, background 0.3s ease',
          willChange: 'left, top',
        }}
      />
    </>
  );
}
