'use client';

import { KeyboardEvent, useRef, useState } from 'react';
import clsx from 'clsx';

import useContactStore from '@/stores/contactStore';
import useWindowStore from '@/stores/windowStore';

import { ContactItemProps } from './types';

const ContactItem = ({ label, value }: ContactItemProps) => {
  const { activeWindow, closeWindow } = useWindowStore();
  const { selectContactItem, selectedContactItem, setContactItem, isPoppedUp } = useContactStore();

  const itemRef = useRef<HTMLTableRowElement | null>(null);
  const [nextItem, setNextItem] = useState<HTMLTableRowElement | null>(null);

  const handleClickContactItem = (e: React.MouseEvent<HTMLTableRowElement, MouseEvent>) => {
    e.stopPropagation();
    selectContactItem(label);
  };

  const handleKeyDown = (e: KeyboardEvent) => {
    switch (e.key) {
      case 'Escape':
        e.preventDefault();
        closeWindow('Contact');
        setContactItem(null);
        break;

      case 'Enter':
        e.preventDefault();
        selectContactItem(label);
        break;

      case 'Tab':
        e.preventDefault();

        if (!isPoppedUp && itemRef.current) {
          setNextItem(
            e.shiftKey
              ? (itemRef.current.previousElementSibling as HTMLTableRowElement)
              : (itemRef.current.nextElementSibling as HTMLTableRowElement) ||
                  itemRef.current.parentElement?.children[1],
          );

          if (nextItem && nextItem instanceof HTMLTableRowElement) nextItem.focus();
        }

        break;
    }
  };

  return (
    <tr
      ref={itemRef}
      tabIndex={activeWindow === 'Contact' && !isPoppedUp ? 0 : -1}
      onKeyDown={handleKeyDown}
      onFocus={() => setContactItem(label)}
      className={clsx(
        'h-8',
        selectedContactItem === label ? 'bg-zinc-950 text-white' : 'bg-white text-zinc-950',
      )}
      onClick={handleClickContactItem}
    >
      <td className="font-chicago">{label}</td>
      <td className="font-chicago cursor-pointer">{value}</td>
    </tr>
  );
};

export default ContactItem;
