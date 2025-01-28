import { StaticImageData } from 'next/image';

type IconProps = {
  title: IconTitle;
  file: StaticImageData;
  top: number;
  left: number;
};

export type IconTitle = 'About me' | 'Contact' | 'Projects';

export default IconProps;
