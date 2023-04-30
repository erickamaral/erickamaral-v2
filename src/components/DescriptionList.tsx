'use client';

import { HTMLAttributes } from 'react';
import { clsx } from 'clsx';

import { Chevron } from '@/components';

type DescriptionDataProps = {
  title: string;
  description: string;
} & HTMLAttributes<HTMLDataListElement>;

export const DescriptionList = ({ className, ...props }: HTMLAttributes<HTMLDListElement>) => (
  <ul className={clsx('flex flex-col  gap-6', className)} {...props} />
)

export const DescriptionData = ({ title, description }: DescriptionDataProps) => (
  <li className="flex items-start">
    <div className={clsx('w-32 flex-none gap-2 flex items-center')}>
      <Chevron className="w-3 text-lime-500" />
      <span className="text-white">{title}</span>
    </div>
    <div className={clsx('flex-1')}>{description}</div>
  </li>
)