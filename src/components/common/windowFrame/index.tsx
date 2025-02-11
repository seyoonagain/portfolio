import TitleBar from '@/components/common/windowFrame/TitleBar';
import useDraggable from '@/hooks/useDraggable';
import useWindowStore from '@/stores/windowStore';

import { WINDOW_STYLE } from './constants';
import WindowFrameProps from './types';

const WindowFrame = ({ title, width, height, content: Content }: WindowFrameProps) => {
  const { elRef, grabRef } = useDraggable();
  const { activateWindow, getWindowZIndex } = useWindowStore();

  return (
    <div
      ref={elRef}
      onMouseDown={() => activateWindow(title)}
      className={WINDOW_STYLE}
      style={{
        width: `${width}px`,
        height: `${height}px`,
        zIndex: `${getWindowZIndex(title)}`,
      }}
    >
      <TitleBar title={title} width={width} ref={grabRef} />
      <section className="relative top-5">
        <Content />
      </section>
    </div>
  );
};

export default WindowFrame;
