'use client';
import useDraggable from '@/hooks/useDraggable';
import { IconProps } from '@/types/props';
import Image from 'next/image';

const Icon = ({
  url,
  description,
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
        src={url}
        alt={description}
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
        <span className='text-nowrap'>{description}</span>
      </div>
    </div>
  );
};

export default Icon;
