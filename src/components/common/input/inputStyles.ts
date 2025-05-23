import { cva } from 'class-variance-authority';

const inputStyles = cva('', {
  variants: {
    element: {
      container: 'flex flex-col w-full',
      label: 'font-medium font-chicago text-lg',
      input: 'px-2 py-1 border border-zinc-950 rounded-md outline-zinc-950 font-galmuri11 text-sm',
      textarea:
        'h-36 px-2 py-1 border border-zinc-950 rounded-md outline-zinc-950 font-galmuri11 text-sm resize-none',
    },
  },
});

export default inputStyles;
