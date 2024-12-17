'use client';

import useDraggable from '@/hooks/useDraggable';
import { IconProps } from '@/types/props';
import { Title } from '@/types/type';
import useIconStore from '@/stores/iconStore';
import Image from 'next/image';
import useWindowStore from '@/stores/windowStore';

const Icon = ({ title, file, top, left }: IconProps) => {
  const { elRef } = useDraggable();
  const { activeIcon, activateIcon, getIconZIndex } = useIconStore();
  const { openWindow, activateWindow } = useWindowStore();

  const handleDbClick = (title: Title) => {
    openWindow(title);
    activateWindow(title);
    activateIcon(null);
  };

  return (
    <div
      ref={elRef}
      onDoubleClick={() => handleDbClick(title)}
      onMouseDown={() => activateIcon(title)}
      className='absolute flex flex-col items-center cursor-pointer'
      style={{
        top: `${top}px`,
        left: `${left}px`,
        zIndex: `${getIconZIndex(title)}`,
      }}
    >
      <Image
        className={activeIcon === title ? 'invert' : 'invert-0'}
        src={file}
        alt={title}
        width={48}
        quality={100}
        unoptimized={true}
        draggable='false'
      />
      <div
        className={`font-geneva text-2xl px-1 flex items-center h-4 ${
          activeIcon === title
            ? 'bg-zinc-950 text-zinc-100'
            : 'bg-zinc-100 text-zinc-950'
        }`}
      >
        <span className='text-nowrap'>{title}</span>
      </div>
    </div>
  );
};

export default Icon;
