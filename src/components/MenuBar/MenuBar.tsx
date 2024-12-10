import { MENU_LIST } from '@/lib/constants/menuBar';
import Clock from './Clock';

const MenuBar = () => {
  return (
    <header className='fixed top-0 left-0 w-full h-7 px-5 flex items-center justify-between bg-white border-b border-zinc-950 text-zinc-950 text-xl font-chicago'>
      <nav className='flex items-center gap-1'>
        {MENU_LIST.map((menu) => (
          <span
            key={menu}
            className='px-2 hover:bg-zinc-950 hover:text-white cursor-default'
          >
            {menu}
          </span>
        ))}
      </nav>
      <Clock />
    </header>
  );
};

export default MenuBar;
