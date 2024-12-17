import TitleBar from '@/components/WindowFrame/TitleBar';
import useDraggable from '@/hooks/useDraggable';
import { WINDOW_STYLE } from '@/lib/constants/window';
import { WindowFrameProps } from '@/types/props';
import useWindowStore from '@/stores/windowStore';

const WindowFrame = ({
  title,
  width,
  height,
  content: Content,
}: WindowFrameProps) => {
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
      <section className='relative top-6'>
        <Content />
      </section>
    </div>
  );
};

export default WindowFrame;
