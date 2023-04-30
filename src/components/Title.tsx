'use client';

import React, { HTMLAttributes } from 'react';
import { clsx } from 'clsx';

import { Chevron } from '@/components';

export const Title = ({ className, ...props }: HTMLAttributes<HTMLHeadingElement>) => {
  return (
    <span className="flex items-center gap-2">
      <Chevron className="w-auto h-4 text-lime-500" />
      <h2 className={clsx('text-2xl text-white', className)} {...props} />
    </span>
  )
}
