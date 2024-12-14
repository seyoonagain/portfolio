import TitleBar from '@/components/WindowFrame/TitleBar';
import useDraggable from '@/hooks/useDraggable';
import { WINDOW_STYLE } from '@/lib/constants/window';
import { useWindowZIndexContext } from '@/contexts/useWindowZIndexContext';
import { WindowFrameProps } from '@/types/props';

const WindowFrame = ({
  title,
  width,
  height,
  content: Content,
}: WindowFrameProps) => {
  const { elRef, grabRef } = useDraggable();
  const { activateWindow, getZIndex } = useWindowZIndexContext();
  return (
    <div
      ref={elRef}
      onMouseDown={() => activateWindow(title)}
      className={WINDOW_STYLE}
      style={{
        width: `${width}px`,
        height: `${height}px`,
        zIndex: `${getZIndex(title)}`,
      }}
    >
      <TitleBar title='About Me' width={width} ref={grabRef} />
      <Content />
    </div>
  );
};

export default WindowFrame;