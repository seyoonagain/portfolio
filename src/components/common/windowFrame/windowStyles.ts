import { cva } from 'class-variance-authority';

const windowStyles = cva(
  'flex flex-col absolute w-full bg-white box-content outline outline-1 outline-zinc-950 drop-shadow-frameShadow',
  {
    variants: {
      title: {
        'About me': 'top-7 sm:top-auto sm:max-w-xl md:max-w-3xl h-[calc(100%-28px)] sm:h-[712px]',
        Contact: 'max-w-md h-[202px]',
        Projects:
          'top-7 sm:top-auto sm:max-w-xl md:max-w-3xl lg:max-w-6xl h-[calc(100%-28px)] sm:h-[712px]',
        Skills:
          'top-7 sm:top-auto sm:max-w-xl md:max-w-2xl lg:max-w-4xl h-[calc(100%-28px)] sm:h-[724px] lg:h-[572px]',
        Email: 'sm:max-w-lg h-[480px]',
      },
    },
  },
);

export default windowStyles;
