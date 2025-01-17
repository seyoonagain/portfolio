import type { Config } from 'tailwindcss';

export default {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        default: `url('/images/bg.svg')`,
        balloon: `url('/images/balloonBody.svg')`,
      },
      fontFamily: {
        chicago: ['chicago'],
        geneva: ['geneva'],
        monaco: ['monaco'],
        galmuri7: ['Galmuri7'],
        galmuri9: ['Galmuri9'],
        galmuri11: ['Galmuri11'],
        galmuri14: ['Galmuri14'],
      },
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
      },
      dropShadow: {
        frameShadow: '1px 1px 0 black',
      },
    },
  },
  plugins: [],
} satisfies Config;
