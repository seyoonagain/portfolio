'use client';

import { useIconZIndexContext } from '@/contexts/useIconZIndexContext';
import { useWindowContext } from '@/contexts/useWindowContext';
import { useWindowZIndexContext } from '@/contexts/useWindowZIndexContext';
import useDraggable from '@/hooks/useDraggable';
import { IconProps } from '@/types/props';
import { Title } from '@/types/type';
import Image from 'next/image';

const Icon = ({ title, file, top, left }: IconProps) => {
  const { elRef } = useDraggable();
  const { openWindow } = useWindowContext();
  const { setActiveIcon, activateIcon, isIconClicked, getZIndex } =
    useIconZIndexContext();
  const { activateWindow } = useWindowZIndexContext();

  const handleDbClick = (title: Title) => {
    openWindow(title);
    activateWindow(title);
    setActiveIcon(null);
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
        zIndex: `${getZIndex(title)}`,
      }}
    >
      <Image
        className={isIconClicked(title) ? 'invert' : 'invert-0'}
        src={file}
        alt={title}
        width={48}
        quality={100}
        unoptimized={true}
        draggable='false'
      />
      <div
        className={`font-geneva text-2xl px-1 flex items-center h-4 ${
          isIconClicked(title)
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
