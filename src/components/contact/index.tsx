'use client';

import { useEffect, useRef } from 'react';

import useContactStore from '@/stores/contactStore';
import usePopupStore from '@/stores/popupStore';

import { CONTACT_INFO } from './constants';
import ContactMethod from './contactMethod';

const Contact = () => {
  const { unselectContactItem } = useContactStore();
  const { isPoppedUp } = usePopupStore();
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!isPoppedUp && ref.current) {
      ref.current.focus();
    }
  }, [isPoppedUp]);

  return (
    <div ref={ref} className="w-full h-full overflow-hidden" onClick={() => unselectContactItem()}>
      <table className="w-full">
        <tbody>
          <tr className="h-6 border-b-[3px] border-double border-zinc-950 font-chicago leading-none">
            <td className="">Method</td>
            <td className="">Details</td>
          </tr>
          {CONTACT_INFO.map(contact => (
            <ContactMethod key={contact.value} label={contact.label} value={contact.value} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Contact;
