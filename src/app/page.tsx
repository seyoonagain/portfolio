'use client';

import Icon from '@/components/Icon';
import WindowFrame from '@/components/WindowFrame/WindowFrame';
import { WINDOW_CONTENT } from '@/lib/constants/window';
import { ICON_INFO } from '@/lib/constants/icon';
import { useWindowContext } from '@/contexts/useWindowContext';

const Home = () => {
  const { windowsOpen } = useWindowContext();

  return (
    <section>
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
    </section>
  );
};

export default Home;
