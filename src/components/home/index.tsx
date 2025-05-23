'use client';

import Confirm from '@common/confirm';
import WindowFrame from '@common/windowFrame';
import { ICON_INFO } from '@/components/home/constants';
import Icon, { IconTitle } from '@/components/home/icon';

import usePopupStore from '@/stores/popupStore';
import useWindowStore from '@/stores/windowStore';

const Home = ({ serverWindow }: { serverWindow: Record<string, React.ReactNode> }) => {
  const { isPoppedUp } = usePopupStore();
  const { windowsOpen } = useWindowStore();

  return (
    <div className="flex justify-center items-center w-full h-full">
      <div className={`flex justify-center items-center ${isPoppedUp && 'pointer-events-none'}`}>
        {ICON_INFO.map(({ title, file, top, left }) => (
          <Icon key={title} file={file} title={title} top={top} left={left} />
        ))}

        {windowsOpen.map((title: IconTitle | 'Email') => {
          const content = serverWindow[title];

          return content && <WindowFrame key={title} title={title} content={content} />;
        })}
      </div>

      {isPoppedUp && <Confirm />}
    </div>
  );
};

export default Home;
