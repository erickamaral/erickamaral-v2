'use client';

import { HTMLAttributes, forwardRef, Ref, useState, useRef } from 'react';
import clsx from 'clsx';

type BlackBoxContainerProps = HTMLAttributes<HTMLDivElement>;

type BlackBoxProps = HTMLAttributes<HTMLDivElement>;

export const BlackBox = forwardRef(({ children, className, ...props }: BlackBoxProps, ref: Ref<HTMLDivElement>) => {
  const refBox = useRef<HTMLDivElement>(null);

  const [cords, setCords] = useState<[number, number]>([0, 0]);

  const size = 300;

  const handleMouseMove = (event: any) => {
    const el = refBox.current;
    if (el) {
      const rect = el.getBoundingClientRect();

      setCords([
        Math.round(Math.abs(event.clientX - rect.left)),
        Math.round(Math.abs(event.clientY - rect.top)),
      ]);
    }
  };

  return (
    <div ref={ref}>
      <div className="relative overflow-hidden bg-gray-950/30 group" {...props} ref={refBox} onMouseMove={(event) => handleMouseMove(event)}>
        <div className={clsx('relative z-20 h-full w-full', className)}>{children}</div>
        <div
          className="z-10 absolute transition-opacity duration-500 rounded-full opacity-0 bg-lime-200 mix-blend-soft-light blur-[150px] group-hover:opacity-50"
          style={{
            left: cords[0] - (size / 2),
            top: cords[1] - (size / 2),
            width: size,
            height: size,
          }}
        />
      </div>
    </div>
  )
});

export const BlackBoxContainer = forwardRef(({ className, ...props }: BlackBoxContainerProps, ref: Ref<HTMLDivElement>) => (
  <div className={clsx('flex w-full max-w-5xl py-16 mx-auto', className)} {...props} ref={ref} />
));