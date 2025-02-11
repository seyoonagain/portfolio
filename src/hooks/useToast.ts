import { v4 as uuid } from 'uuid';

import ToastProps from '@/components/common/toast/types';
import useToastStore from '@/stores/toastStore';

const useToast = () => {
  const { addToast, showToast, hideToast, removeToast } = useToastStore();

  const toast = ({ type = 'success', message }: ToastProps) => {
    const id = uuid();

    addToast({ id, type, message, isVisible: false });

    setTimeout(() => showToast(id), 300);
    setTimeout(() => hideToast(id), 3000);
    setTimeout(() => removeToast(id), 3300);
  };

  return { toast };
};
export default useToast;
