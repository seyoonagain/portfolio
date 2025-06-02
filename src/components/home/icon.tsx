'use client';

import { KeyboardEvent } from 'react';
import Image, { StaticImageData } from 'next/image';

import useDraggable from '@/hooks/useDraggable';
import useOutsideClick from '@/hooks/useOutsideClick';
import useIconStore from '@/stores/iconStore';
import useWindowStore from '@/stores/windowStore';

export type IconTitle = 'About me' | 'Contact' | 'Projects' | 'Skills';

export type IconProps = {
  title: IconTitle;
  file: StaticImageData;
  top: number;
  left: number;
};

const Icon = ({ title, file, top, left }: IconProps) => {
  const { elRef: ref } = useDraggable();
  const { activeIcon, activateIcon, getIconZIndex } = useIconStore();
  const { openWindow, activateWindow, activeWindow } = useWindowStore();

  const handleDbClick = () => {
    openWindow(title);
    activateWindow(title);
    activateIcon(null);
  };

  const handleKeyDown = (e: KeyboardEvent) => {
    switch (e.key) {
      case 'Enter':
        e.preventDefault();
        handleDbClick();
        break;
    }
  };

  const handleFocus = () => {
    activateIcon(title);
  };

  useOutsideClick({ ref, callback: () => activateIcon(null) });

  return (
    <div
      ref={ref}
      tabIndex={activeWindow ? -1 : 0}
      role="button"
      aria-labelledby={`icon-${title}`}
      onKeyDown={handleKeyDown}
      onDoubleClick={handleDbClick}
      onMouseDown={handleFocus}
      onFocus={handleFocus}
      className="flex flex-col items-center absolute cursor-pointer"
      style={{
        top: `${top}px`,
        left: `${left}px`,
        zIndex: `${getIconZIndex(title)}`,
      }}
    >
      <Image
        id={`icon-${title}`}
        className={activeIcon === title ? 'invert' : 'invert-0'}
        src={file}
        alt={title}
        width={48}
        quality={100}
        unoptimized={true}
        draggable="false"
        priority
      />
      <div
        className={`flex items-center h-4 px-1 font-geneva text-2xl ${
          activeIcon === title ? 'bg-zinc-950 text-zinc-100' : 'bg-zinc-100 text-zinc-950'
        }`}
      >
        <span id={`icon-${title}`} className="text-nowrap">
          {title}
        </span>
      </div>
    </div>
  );
};

export default Icon;
