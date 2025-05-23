import TitleBar from '@/components/common/windowFrame/TitleBar';
import windowStyles from '@/components/common/windowFrame/windowStyles';
import useDraggable from '@/hooks/useDraggable';
import useWindowStore from '@/stores/windowStore';

import WindowFrameProps from './types';

const WindowFrame = ({ title, content }: WindowFrameProps) => {
  const { elRef, grabRef } = useDraggable();
  const { activateWindow, getWindowZIndex } = useWindowStore();

  return (
    <div
      ref={elRef}
      onMouseDown={() => activateWindow(title)}
      className={windowStyles({ title })}
      style={{ zIndex: `${getWindowZIndex(title)}` }}
    >
      <TitleBar title={title} ref={grabRef} />
      <section className="grow relative w-full h-full overflow-y-auto">{content}</section>
    </div>
  );
};

export default WindowFrame;
