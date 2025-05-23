import { forwardRef } from 'react';
import { twMerge } from 'tailwind-merge';

import inputStyles from '@/components/common/input/inputStyles';
import { InputProps } from '@/components/common/input/types';

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, id, type = 'text', className, ...props }, ref) => {
    return (
      <div className={inputStyles({ element: 'container' })}>
        <label htmlFor={id} className={inputStyles({ element: 'label' })}>
          {label}
        </label>

        <input
          {...props}
          ref={ref}
          id={id}
          type={type}
          required
          autoComplete="off"
          className={twMerge(inputStyles({ element: 'input' }), className)}
        />
      </div>
    );
  },
);

Input.displayName = 'Input';

export default Input;
