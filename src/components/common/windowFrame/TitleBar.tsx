import useWindowStore from '@/stores/windowStore';
import useContactStore from '@/stores/contactStore';
import { TitleBarProps } from './types';
import clsx from 'clsx';

const TitleBar = ({ title, width, ref }: TitleBarProps) => {
  const { closeWindow, activeWindow } = useWindowStore();
  const { unselectContactItem } = useContactStore();

  const handleCloseWindow = () => {
    if (title === 'Contact') {
      unselectContactItem();
    }
    closeWindow(title);
  };

  return (
    <div
      ref={ref}
      className={clsx(
        'flex items-center fixed h-5 pl-2 border-b border-zinc-950 bg-center bg-repeat-x bg-white cursor-default',
        activeWindow === title && 'bg-[url(/images/titleBarBg.svg)]'
      )}
      style={{ width: `${width}px` }}
    >
      {activeWindow === title && (
        <div
          onClick={handleCloseWindow}
          className='size-3 border border-zinc-950 bg-white outline outline-1 outline-white cursor-pointer'
        />
      )}
      <div className='flex items-center absolute top-1/2 left-1/2 h-4 px-2 bg-white -translate-y-1/2 -translate-x-1/2'>
        <span className='font-chicago text-lg'>{title}</span>
      </div>
    </div>
  );
};

export default TitleBar;
