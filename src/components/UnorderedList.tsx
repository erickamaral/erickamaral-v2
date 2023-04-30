'use client';

import { HTMLAttributes } from 'react';
import clsx from 'clsx';

import { Chevron } from '@/components';

export const UnorderedList = ({ className, ...props }: HTMLAttributes<HTMLUListElement>) => (
  <ul className={clsx('flex flex-col gap-6', className)} {...props} />
);

export const UnorderedItem = ({ className, children, ...props }: HTMLAttributes<HTMLLIElement>) => (
  <li className={clsx('flex items-center gap-2', className)}>
    <Chevron className="w-3 text-lime-500" />
    <span className="text-white">{children}</span>
  </li>
);