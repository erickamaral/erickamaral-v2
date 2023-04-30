import { useEffect, useRef } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

import { clamp } from '@/helpers';

const spring = {
  damping: 3,
  stiffness: 1,
  restDelta: 0.001,
  bounce: 0.25,
  duration: 200,
};

const offset = (event: MouseEvent, element: HTMLDivElement) => {
  return [
    event.clientX - element.offsetLeft - element.offsetWidth / 2,
    event.clientY - element.offsetTop - element.offsetHeight / 2,
  ];
}

const useMotionSprint = () => {
  const motionX = useMotionValue(0);
  const stringX = useSpring(motionX, spring);
  const motionY = useMotionValue(0);
  const stringY = useSpring(motionY, spring);
  return [motionX, motionY, stringX, stringY];
}

export const Background = () => {
  const left = useRef<HTMLDivElement | null>(null);
  const right = useRef<HTMLDivElement | null>(null);

  const [leftMotionX, leftMotionY, leftX, leftY] = useMotionSprint();
  const [rightMotionX, rightMotionY, rightX, rightY] = useMotionSprint();

  useEffect(() => {
    const onMouseMove = (event: MouseEvent) => {
      const leftE = left?.current;
      const rightE = right?.current;

      if (leftE) {
        const [leftX, leftY] = offset(event, leftE);
        leftMotionX.set(clamp(-leftX, -100, 100));
        leftMotionY.set(clamp(leftY, -100, 100));
      }

      if (rightE) {
        const [rightX, rightY] = offset(event, rightE);
        rightMotionX.set(clamp(rightX, -100, 100));
        rightMotionY.set(clamp(-rightY, -100, 100));
      }
    }

    document.addEventListener('mousemove', onMouseMove, false);

    return () => document.removeEventListener('mousemove', onMouseMove, false);
  }, []);

  return (
    <div className="fixed top-0 bottom-0 left-0 right-0 overflow-hidden -z-10">
      <div className="flex items-center justify-center w-full h-full">
        <motion.div
          ref={left}
          className="bg-sky-500 w-1/2 aspect-square blur-[90px] rounded-full mix-blend-overlay opacity-10 -mr-32"
          style={{ x: leftX, y: leftY }}
        />
        <motion.div
          ref={right}
          className="bg-violet-500 w-1/2 aspect-square blur-[90px] rounded-full mix-blend-overlay opacity-10 -ml-32"
          style={{ x: rightX, y: rightY }}
        />
      </div>
    </div>
  )
}