'use client';

import { KeyboardEvent, useRef, useState } from 'react';
import clsx from 'clsx';

import { CONTACT_CONFIRM_MESSAGES, CONTACT_INFO } from '@/components/contact/constants';
import useToast from '@/hooks/useToast';
import useContactStore from '@/stores/contactStore';
import usePopupStore from '@/stores/popupStore';
import useWindowStore from '@/stores/windowStore';

import { ContactItemProps } from './types';

const ContactMethod = ({ label, value }: ContactItemProps) => {
  const { activeWindow, closeWindow, openWindow, activateWindow } = useWindowStore();
  const { selectContactItem, selectedContactItem } = useContactStore();
  const { showPopup, isPoppedUp } = usePopupStore();

  const { toast } = useToast();

  const itemRef = useRef<HTMLTableRowElement | null>(null);
  const [nextItem, setNextItem] = useState<HTMLTableRowElement | null>(null);

  const handleClickContactItem = (e: React.MouseEvent<HTMLTableRowElement, MouseEvent>) => {
    e.stopPropagation();
    selectContactItem(label);

    showPopup({
      text: CONTACT_CONFIRM_MESSAGES[label],

      confirm: () => {
        if (label === 'Mobile') {
          new Promise<void>((resolve, reject) => {
            try {
              navigator.clipboard.writeText('01075672005');
              resolve();
            } catch (error) {
              reject(error);
            }
          })
            .then(() => toast({ message: '번호가 클립보드에 복사되었습니다.' }))
            .catch(() => toast({ type: 'fail', message: '번호 복사에 실패하였습니다.' }));
        }

        if (label === 'Blog' || label === 'GitHub' || label === 'LinkedIn') {
          window.open(CONTACT_INFO.find(contact => contact.label === label)?.value, '_blank');
        }

        if (label === 'Email') {
          openWindow('Email');
          activateWindow('Email');
        }
      },
    });
  };

  const handleKeyDown = (e: KeyboardEvent) => {
    switch (e.key) {
      case 'Escape':
        e.preventDefault();
        closeWindow('Contact');
        selectContactItem(null);
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
      onFocus={() => selectContactItem(label)}
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

export default ContactMethod;
