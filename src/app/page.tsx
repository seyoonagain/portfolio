'use client';

import Icon from '@/ui/Icon';
import WindowFrame from '@/components/WindowFrame/WindowFrame';
import { WINDOW_CONTENT } from '@/lib/constants/window';
import { ICON_INFO } from '@/lib/constants/icon';
import { Title } from '@/types/type';
import { useIconZIndexContext } from '@/contexts/useIconZIndexContext';
import { useWindowContext } from '@/contexts/useWindowContext';

const Home = () => {
  const { setActiveIcon } = useIconZIndexContext();
  const { windowsOpen, openWindow } = useWindowContext();

  const handleDbClick = (title: Title) => {
    openWindow(title);
    setActiveIcon(null);
  };

  return (
    <section>
      {ICON_INFO.map((icon) => (
        <Icon
          key={icon.title}
          file={icon.file}
          title={icon.title}
          top={icon.top}
          left={icon.left}
          onDoubleClick={() => handleDbClick(icon.title)}
        />
      ))}

      {windowsOpen.map((title) => {
        const content = WINDOW_CONTENT[title];
        console.log(content);
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
