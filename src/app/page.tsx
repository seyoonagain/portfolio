'use client';

import useContactStore from '@/stores/contactStore';
import useWindowStore from '@/stores/windowStore';
import { ICON_INFO } from '@common/icon/constants';
import { WINDOW_CONTENT } from '@common/windowFrame/constants';
import Icon from '@common/icon';
import WindowFrame from '@common/windowFrame';
import Confirm from '@common/confirm';

const Home = () => {
  const { isPoppedUp, selectedContactItem } = useContactStore();
  const { windowsOpen } = useWindowStore();

  return (
    <div className='w-full h-full flex justify-center items-center'>
      <div
        className={`flex justify-center items-center ${
          isPoppedUp && 'pointer-events-none'
        }`}
      >
        {ICON_INFO.map(({ title, file, top, left }) => (
          <Icon key={title} file={file} title={title} top={top} left={left} />
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
      {selectedContactItem && isPoppedUp && (
        <Confirm method={selectedContactItem} />
      )}
    </div>
  );
};

export default Home;
