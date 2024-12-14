'use client';

import Icon from '@/ui/Icon';
import { useState } from 'react';
import WindowFrame from '@/components/WindowFrame/WindowFrame';
import { WINDOW_CONTENT } from '@/lib/constants/window';
import { ICON_INFO } from '@/lib/constants/icon';

const Home = () => {
  const [clickedIcon, setClickedIcon] = useState<string>('');
  const [showWindows, setShowWindows] = useState<string[]>([]);

  const handleDbClick = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>,
    title: string
  ) => {
    setShowWindows((prev) => {
      if (prev.includes(title)) {
        return [...prev];
      } else {
        return [...prev, title];
      }
    });
    setClickedIcon('');
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
          isClicked={clickedIcon === icon.title}
          onDoubleClick={(e) => handleDbClick(e, icon.title)}
          onMouseDown={() => setClickedIcon(icon.title)}
        />
      ))}

      {showWindows.map((title) => {
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
