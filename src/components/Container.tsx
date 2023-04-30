'use client';

import { HTMLAttributes } from 'react';
import { clsx } from 'clsx';

export const Container = ({ className, ...props }: HTMLAttributes<HTMLDivElement>) => {
  return (
    <div className={clsx('relative mx-auto max-w-7xl px-4', className)} {...props} />
  )
}
