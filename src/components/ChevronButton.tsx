import { HTMLAttributes, Ref, forwardRef } from 'react';
import { clsx } from 'clsx';

import { Chevron } from './Chevron';

export type ChevronButtonProps = {
  iconClassName?: string;
} & HTMLAttributes<HTMLButtonElement>;

export const ChevronButton = forwardRef(({ className, iconClassName, ...props }: ChevronButtonProps, ref: Ref<HTMLButtonElement>) => {
  return (
    <button className={clsx('transition inline-flex items-center justify-center w-8 h-8 transitionhover:scale-105 hover:scale-110 active:scale-100', className)} ref={ref} {...props}>
      <Chevron className={clsx('w-full h-full text-lime-500', iconClassName)} />
    </button>
  )
})