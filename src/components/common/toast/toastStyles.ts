import { cva } from 'class-variance-authority';

export const toastStyles = cva(
  'content-center w-72 h-20 px-4 bg-balloon bg-contain bg-center bg-no-repeat font-galmuri9 text-sm transition-all ease-in-out duration-300',
  {
    variants: {
      isVisible: {
        true: 'opacity-100 translate-x-0 translate-y-0',
        false: 'opacity-0 translate-x-80 translate-y-0',
      },
      type: {
        success: '',
        fail: 'text-red-700',
      },
    },
  },
);
