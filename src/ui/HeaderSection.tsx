'use client';

import { useEffect } from 'react';
import { motion, useMotionValue, useScroll, useTransform } from 'framer-motion';

import { clamp } from '@/helpers';
import { Bar, Chevron, Container, Logo } from '@/components';

export const HeaderSection = () => {
  const { scrollY } = useScroll();

  const scrolled = useMotionValue(0);

  const height = useTransform(scrolled, [0, 200], [128, 80]);

  useEffect(() => {
    return scrollY.on('change', (current) => {
      const value = scrolled.get() + (current - scrollY.getPrevious());
      scrolled.set(clamp(value, 0, 200));
    });
  }, [scrollY, scrolled]);

  return (
    <motion.header style={{ height }} className="fixed top-0 left-0 right-0 z-30 transition bg-gray-900/50 backdrop-blur-md">
      <Container className="flex items-center justify-between h-full">
        <a href="#">
          <Logo className="w-16 h-auto" />
        </a>
        <nav className="flex items-center gap-3">
          <Chevron className="w-auto h-3 text-lime-500" />
          <a href="#" className="px-3 py-2 transition text-lime-500 hover:text-lime-500">Principal</a>
          <Bar className="w-auto h-4 text-lime-500" />
          <a href="#" className="px-3 py-2 text-white transition hover:text-lime-500">Sobre</a>
          <Bar className="w-auto h-4 text-lime-500" />
          <a href="#" className="px-3 py-2 text-white transition hover:text-lime-500">Experiências</a>
          <Bar className="w-auto h-4 text-lime-500" />
          <a href="#" className="px-3 py-2 text-white transition hover:text-lime-500">Projetos</a>
          <Bar className="w-auto h-4 text-lime-500" />
          <a href="#" className="px-3 py-2 text-white transition hover:text-lime-500">Contato</a>
          <Chevron className="w-auto h-3 rotate-180 text-lime-500" />
        </nav>
      </Container>
    </motion.header>
  )
};
