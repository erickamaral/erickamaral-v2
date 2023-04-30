'use client';

import { HTMLAttributes } from 'react';

export const Logo = (props: HTMLAttributes<HTMLOrSVGElement>) => (
  <svg viewBox="0 0 240 240" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path fillRule="evenodd" clipRule="evenodd" d="M88.6783 32.017L113.575 56.719L49.7944 120L113.575 183.281L88.6783 207.983L0 120L88.6783 32.017Z" fill="#84CC16" />
    <path fillRule="evenodd" clipRule="evenodd" d="M23.241 191.298L191.861 24L216.758 48.702L48.1381 216L23.241 191.298Z" fill="#65A30D" />
    <path fillRule="evenodd" clipRule="evenodd" d="M151.322 32.017L126.425 56.719L190.206 120L126.425 183.281L151.322 207.983L240 120L151.322 32.017Z" fill="#84CC16" />
  </svg>
);