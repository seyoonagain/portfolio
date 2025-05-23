'use client';

import Confirm from '@common/confirm';
import Icon, { IconTitle } from '@/components/home/icon';
import { ICON_INFO } from '@/components/home/constants';
import WindowFrame from '@common/windowFrame';

import useContactStore from '@/stores/contactStore';
import useWindowStore from '@/stores/windowStore';
import { WINDOW_CONTENT } from '@/components/common/windowFrame/constants';

const Home = ({ serverWindow }: { serverWindow: Record<string, React.ReactNode> }) => {
  const { isPoppedUp, selectedContactItem } = useContactStore();
  const { windowsOpen } = useWindowStore();

  return (
    <div className="flex justify-center items-center w-full h-full">
      <div className={`flex justify-center items-center ${isPoppedUp && 'pointer-events-none'}`}>
        {ICON_INFO.map(({ title, file, top, left }) => (
          <Icon key={title} file={file} title={title} top={top} left={left} />
        ))}

        {windowsOpen.map((title: IconTitle) => {
          const window = WINDOW_CONTENT[title];
          const content = serverWindow[title];

          return (
            content && (
              <WindowFrame
                key={title}
                title={window.title}
                width={window.width}
                height={window.height}
                content={content}
              />
            )
          );
        })}
      </div>
      {selectedContactItem && isPoppedUp && <Confirm method={selectedContactItem} />}
    </div>
  );
};

export default Home;
