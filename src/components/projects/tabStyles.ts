import { cva } from 'class-variance-authority';

const tabStyles = cva(
  'tab px-2 pt-0.5 mt-1 border border-b-0 border-zinc-950 rounded-t-md font-galmuri11 text-sm cursor-pointer',
  {
    variants: {
      isSelected: {
        true: 'h-[25px] bg-white',
        false: 'bg-zinc-200',
      },
    },
  },
);

export default tabStyles;
