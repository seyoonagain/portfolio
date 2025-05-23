'use client';

import { useEffect, useRef } from 'react';

import Button from '@common/button';
import useDraggable from '@/hooks/useDraggable';
import usePopupStore from '@/stores/popupStore';

const Confirm = () => {
  const { elRef } = useDraggable();

  const previousFocusRef = useRef<HTMLElement | null>(null);
  const cancelButtonRef = useRef<HTMLButtonElement | null>(null);
  const confirmButtonRef = useRef<HTMLButtonElement | null>(null);

  const { text, confirm, closePopup, isPoppedUp } = usePopupStore();

  const handleConfirm = () => {
    confirm();
    closePopup();
    previousFocusRef.current?.focus();
  };

  const handleCancel = () => {
    closePopup();
    previousFocusRef.current?.focus();
  };

  const handleKeyDown = (e: globalThis.KeyboardEvent) => {
    switch (e.key) {
      case 'Escape':
        e.preventDefault();
        handleCancel();
        break;

      case 'Enter':
        e.preventDefault();
        e.stopPropagation();

        if (document.activeElement === confirmButtonRef.current) {
          handleConfirm();
        } else if (document.activeElement === cancelButtonRef.current) {
          handleCancel();
        }

        break;

      case 'Tab': {
        e.preventDefault();

        const nextItem =
          document.activeElement !== confirmButtonRef.current
            ? confirmButtonRef.current
            : cancelButtonRef.current;

        nextItem?.focus();

        break;
      }
    }
  };

  useEffect(() => {
    if (isPoppedUp) {
      document.body.style.overflow = 'hidden';
      previousFocusRef.current = document.activeElement as HTMLElement;

      document.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.body.style.overflow = '';
      document.removeEventListener('keydown', handleKeyDown);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isPoppedUp, elRef]);

  return (
    <div
      ref={elRef}
      role="dialog"
      aria-modal={true}
      aria-labelledby="confirm-title"
      className="flex flex-col justify-between absolute z-50 w-96 h-44 p-5 border-2 border-zinc-950 bg-white outline outline-1 outline-offset-2 outline-zinc-950"
      style={{ boxShadow: '0 0 0 2px white' }}
    >
      <div className="flex gap-3 w-full">
        <div className="shrink-0 relative size-12 bg-alert bg-center bg-contain bg-no-repeat" />
        <p id="confirm-title" className="font-galmuri9 text-sm">
          {text}
        </p>
      </div>
      <div className="flex gap-5 self-end">
        <Button text="취소" onClick={handleCancel} ref={cancelButtonRef} />
        <Button text="확인" onClick={handleConfirm} ref={confirmButtonRef} />
      </div>
    </div>
  );
};

export default Confirm;
