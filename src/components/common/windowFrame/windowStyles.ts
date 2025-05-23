import { cva } from 'class-variance-authority';

const windowStyles = cva(
  'flex flex-col absolute w-full bg-white box-content outline outline-1 outline-zinc-950 drop-shadow-frameShadow',
  {
    variants: {
      title: {
        'About me': 'sm:max-w-xl h-[612px]',
        Contact: 'sm:max-w-md h-[202px]',
        Projects: 'sm:max-w-xl h-[612px] sm:h-[712px] md:max-w-2xl lg:max-w-4xl',
        Email: 'sm:max-w-lg h-[480px]',
      },
    },
  },
);

export default windowStyles;
