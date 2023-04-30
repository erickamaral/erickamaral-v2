'use client';

import { HTMLAttributes } from 'react';

export const Chevron = (props: HTMLAttributes<HTMLOrSVGElement>) => (
  <svg {...props} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fillRule="evenodd" clipRule="evenodd" d="M49.6374 0L63.5735 13.8269L27.8722 49.2483L63.5735 84.6697L49.6374 98.4965L0 49.2483L49.6374 0Z" fill="currentColor" />
  </svg>
)