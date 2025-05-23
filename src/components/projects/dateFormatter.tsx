'use client';

import { format } from 'date-fns';
import { twMerge } from 'tailwind-merge';

type Props = {
  dateString: string;
  className?: string;
};

const DateFormatter = ({ dateString, className }: Props) => {
  return (
    <time className={twMerge('tracking-tight', className)} dateTime={dateString}>
      {format(dateString, 'yyyy.LL.dd')}
    </time>
  );
};

export default DateFormatter;
