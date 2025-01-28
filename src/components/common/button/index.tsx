import { forwardRef } from 'react';
import ButtonProps from './types';
import { twMerge } from 'tailwind-merge';

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ text, className, type = 'button', ...props }, ref) => {
    return (
      <button
        ref={ref}
        type={type}
        {...props}
        className={twMerge(
          'w-20 h-6 rounded-md border border-zinc-950 active:border-t-2 active:border-l-2 font-galmuri9 text-sm outline outline-2 outline-offset-1 outline-zinc-950 focus:outline-[3px]',
          className
        )}
      >
        {text}
      </button>
    );
  }
);

Button.displayName = 'Button';

export default Button;
