import { StaticImageData } from 'next/image';

export interface IconProps {
  url: StaticImageData;
  description: string;
  top: number;
  left: number;
  isClicked: boolean;
  onDoubleClick: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
  onMouseDown: () => void;
}
