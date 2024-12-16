import useDraggable from '@/hooks/useDraggable';
import Button from '../Button';
import { Contacts } from '@/types/type';
import { CONTACT_CONFIRM } from '@/lib/constants/contacts';
import alert from '@public/images/alert.png';
import Image from 'next/image';

const Confirm = ({ method }: { method: Contacts }) => {
  const { elRef } = useDraggable();

  return (
    <article
      ref={elRef}
      className='absolute z-50 w-96 h-44 bg-white outline outline-1 outline-offset-2 outline-zinc-950 border-2 border-zinc-950 flex flex-col justify-between p-5'
      style={{ boxShadow: '0 0 0 2px white' }}
    >
      <div className='flex gap-3'>
        <Image src={alert} alt={CONTACT_CONFIRM[method].text} width={48} />
        <p className='font-galmuri9 text-sm'>{CONTACT_CONFIRM[method].text}</p>
      </div>
      <div className='self-end flex gap-5'>
        <Button text='확인' action={CONTACT_CONFIRM[method].action} />
        <Button text='취소' />
      </div>
    </article>
  );
};

export default Confirm;
