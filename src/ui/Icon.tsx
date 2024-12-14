'use client';
import { useIconZIndexContext } from '@/contexts/useIconZIndexContext';
import useDraggable from '@/hooks/useDraggable';
import { IconProps } from '@/types/props';
import Image from 'next/image';

const Icon = ({ title, file, top, left, onDoubleClick }: IconProps) => {
  const { elRef } = useDraggable();
  const { activateIcon, isIconClicked, getZIndex } = useIconZIndexContext();

  return (
    <div
      ref={elRef}
      onDoubleClick={onDoubleClick}
      onMouseDown={() => activateIcon(title)}
      className='absolute flex flex-col items-center cursor-pointer'
      style={{
        top: `${top}px`,
        left: `${left}px`,
        zIndex: `${getZIndex(title)}`,
      }}
    >
      <Image
        className={isIconClicked(title) ? 'invert' : ''}
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
            ? 'bg-zinc-950 text-white'
            : 'bg-white text-zinc-950'
        }`}
      >
        <span className='text-nowrap'>{title}</span>
      </div>
    </div>
  );
};

export default Icon;
