import Clock from './Clock';
import { MENU_LIST } from './constants';

const MenuBar = () => {
  return (
    <header className='flex items-center justify-between fixed top-0 left-0 w-full h-7 px-5 bg-white border-b border-zinc-950 font-chicago text-zinc-950 text-xl'>
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
