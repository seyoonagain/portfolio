'use client';
import useDraggable from '@/hooks/useDraggable';
import { IconProps } from '@/types/props';
import Image from 'next/image';

const Icon = ({
  title,
  file,
  top,
  left,
  isClicked,
  onDoubleClick,
  onMouseDown,
}: IconProps) => {
  const { elRef } = useDraggable();
  return (
    <div
      ref={elRef}
      onDoubleClick={onDoubleClick}
      onMouseDown={onMouseDown}
      className='absolute flex flex-col items-center cursor-pointer'
      style={{
        top: `${top}px`,
        left: `${left}px`,
      }}
    >
      <Image
        className={isClicked ? 'invert' : ''}
        src={file}
        alt={title}
        width={48}
        quality={100}
        unoptimized={true}
        draggable='false'
      />
      <div
        className={`font-geneva text-2xl px-1 flex items-center h-4 ${
          isClicked ? 'bg-zinc-950 text-white' : 'bg-white text-zinc-950'
        }`}
      >
        <span className='text-nowrap'>{title}</span>
      </div>
    </div>
  );
};

export default Icon;
