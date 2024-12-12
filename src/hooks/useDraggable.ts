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
      const left = e.clientX - offsetX;
      const top = e.clientY - offsetY;
      const minX = 0;
      const minY = 28;
      const maxX = window.innerWidth - el.offsetWidth;
      const maxY = window.innerHeight - el.offsetHeight;

      el.style.left = `${left < minX ? minX : left > maxX ? maxX : left}px`;
      el.style.top = `${top < minY ? minY : top > maxY ? maxY : top}px`;
    };

    const onMouseDown = (e: MouseEvent) => {
      offsetX = e.clientX - el.getBoundingClientRect().left;
      offsetY = e.clientY - el.getBoundingClientRect().top;
      document.addEventListener('mousemove', dragCalculator);
      document.addEventListener(
        'mouseup',
        () => {
          document.removeEventListener('mousemove', dragCalculator);
        },
        { once: true }
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
