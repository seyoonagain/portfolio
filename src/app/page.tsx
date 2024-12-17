'use client';

import Icon from '@/components/Icon';
import WindowFrame from '@/components/WindowFrame/WindowFrame';
import { WINDOW_CONTENT } from '@/lib/constants/window';
import { ICON_INFO } from '@/lib/constants/icon';
import Confirm from '@/components/Confirm/Confirm';
import useContactStore from '@/stores/contactStore';
import useWindowStore from '@/stores/windowStore';

const Home = () => {
  const { isPoppedUp, selectedContactItem } = useContactStore();
  const { windowsOpen } = useWindowStore();

  return (
    <section className='w-full h-full flex justify-center items-center'>
      <div
        className={`flex justify-center items-center ${
          isPoppedUp && 'pointer-events-none'
        }`}
      >
        {ICON_INFO.map((icon) => (
          <Icon
            key={icon.title}
            file={icon.file}
            title={icon.title}
            top={icon.top}
            left={icon.left}
          />
        ))}
        {windowsOpen.map((title) => {
          const content = WINDOW_CONTENT[title];
          return (
            content && (
              <WindowFrame
                key={title}
                title={content.title}
                width={content.width}
                height={content.height}
                content={content.content}
              />
            )
          );
        })}
      </div>
      {selectedContactItem && <Confirm method={selectedContactItem} />}
    </section>
  );
};

export default Home;
