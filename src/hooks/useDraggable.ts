'use client';

import { useEffect, useRef } from 'react';

interface UseDraggableReturn {
  grabRef: React.RefObject<HTMLDivElement | null>;
  elRef: React.RefObject<HTMLDivElement | null>;
}

const useDraggable = (): UseDraggableReturn => {
  const grabRef = useRef<HTMLDivElement>(null);
  const elRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const grab = grabRef.current;
    const el = elRef.current;
    if (!el) return;

    let offsetX: number, offsetY: number;

    const dragCalculator = (e: MouseEvent) => {
      const minY = 28;
      const maxY = window.innerHeight - el.offsetHeight;

      const top = Math.max(minY, Math.min(e.clientY - offsetY, maxY));

      el.style.left = `${e.clientX - offsetX}px`;
      el.style.top = `${top}px`;
    };

    const onMouseDown = (e: MouseEvent) => {
      if ((e.target as HTMLElement).closest('button')) return;

      offsetX = e.clientX - el.getBoundingClientRect().left;
      offsetY = e.clientY - el.getBoundingClientRect().top;

      document.addEventListener('mousemove', dragCalculator);
      document.addEventListener(
        'mouseup',
        () => {
          document.removeEventListener('mousemove', dragCalculator);
        },
        { once: true },
      );
    };

    const grabbed = grab ?? el;
    grabbed.addEventListener('mousedown', onMouseDown);

    return () => {
      grabbed.removeEventListener('mousedown', onMouseDown);
    };
  }, []);

  return { grabRef, elRef };
};

export default useDraggable;
