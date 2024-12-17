import { TitleBarProps } from '@/types/props';
import useWindowStore from '@/stores/windowStore';
import useContactStore from '@/stores/contactStore';

const TitleBar = ({ title, width, ref }: TitleBarProps) => {
  const { closeWindow } = useWindowStore();
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
      className='fixed bg-[url(/images/titleBar.png)] h-6 bg-center bg-white border-b border-zinc-950 flex items-center pl-2 cursor-default'
      style={{ width: `${width}px` }}
    >
      <div
        onClick={handleCloseWindow}
        className='size-[15px] bg-white border border-zinc-950 outline outline-2 outline-white cursor-pointer'
      ></div>
      <div className='h-4 bg-white px-1.5 flex items-center absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2'>
        <span className='font-chicago text-xl'>{title}</span>
      </div>
    </div>
  );
};

export default TitleBar;
