'use client';

import useToastStore from '@/stores/toastStore';
import { toastStyles } from './toastStyles';

const Toast = () => {
  const { toasts } = useToastStore();
  return (
    <div className='flex flex-col gap-2 fixed right-5 top-12 h-full'>
      {toasts &&
        toasts.map(({ id, type, message, isVisible }) => (
          <div key={id} className={toastStyles({ isVisible, type })}>
            {message}
          </div>
        ))}
    </div>
  );
};

export default Toast;
