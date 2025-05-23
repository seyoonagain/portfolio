import type { StaticImport } from 'next/dist/shared/lib/get-img-props';

type AboutMeItem = {
  heading: string;
  icon: StaticImport;
  content: string;
};

export default AboutMeItem;
