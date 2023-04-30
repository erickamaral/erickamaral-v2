import { HTMLAttributes, MouseEvent, Ref, forwardRef } from 'react';
import { motion, useMotionTemplate, useMotionValue } from 'framer-motion';
import { clsx } from 'clsx';

export const Box = forwardRef(({ children, className, ...props }: HTMLAttributes<HTMLDivElement>, ref: Ref<HTMLDivElement>) => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const handleMouseMove = ({ clientX, clientY, currentTarget }: MouseEvent) => {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <div className={clsx('relative flex border border-gray-700/60 bg-gray-900/60 group', className)} {...props} ref={ref} onMouseMove={handleMouseMove}>
      <motion.div
        className="absolute transition duration-300 opacity-0 pointer-events-none -inset-px group-hover:opacity-100"
        style={{
          background: useMotionTemplate`
            radial-gradient(500px circle at ${mouseX}px ${mouseY}px, rgb(14 165 233 / 0.15), transparent 80%)
          `
        }}
      />
      {children}
    </div>
  );
});
