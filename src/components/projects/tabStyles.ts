import { cva } from 'class-variance-authority';

const tabStyles = cva(
  'px-2 pt-0.5 mt-1 border border-b-0 border-zinc-800 rounded-t-md font-galmuri11 text-sm cursor-pointer',
  {
    variants: {
      isSelected: {
        true: 'h-[25px] bg-white',
        false: 'bg-zinc-300',
      },
    },
  },
);

export default tabStyles;
