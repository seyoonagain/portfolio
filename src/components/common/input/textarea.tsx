import { forwardRef } from 'react';
import { twMerge } from 'tailwind-merge';

import inputStyles from '@/components/common/input/inputStyles';
import { TextareaProps } from '@/components/common/input/types';

const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ label, id, className, ...props }, ref) => {
    return (
      <div className={inputStyles({ element: 'container' })}>
        <label htmlFor={id} className={inputStyles({ element: 'label' })}>
          {label}
        </label>

        <textarea
          {...props}
          ref={ref}
          id={id}
          required
          className={twMerge(inputStyles({ element: 'textarea' }), className)}
        />
      </div>
    );
  },
);

Textarea.displayName = 'Textarea';

export default Textarea;
