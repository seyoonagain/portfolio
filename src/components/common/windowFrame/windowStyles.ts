import { cva } from 'class-variance-authority';

const windowStyles = cva(
  'flex flex-col absolute w-full bg-white box-content outline outline-1 outline-zinc-950 drop-shadow-frameShadow',
  {
    variants: {
      title: {
        'About me': 'top-7 sm:top-auto sm:max-w-xl h-[calc(100%-28px)] sm:h-[712px]',
        Contact: 'max-w-md h-[202px]',
        Projects:
          'top-7 sm:top-auto sm:max-w-xl md:max-w-3xl lg:max-w-6xl h-[calc(100%-28px)] sm:h-[712px] lg:h-[896px]',
        Email: 'sm:max-w-lg h-[480px]',
      },
    },
  },
);

export default windowStyles;
