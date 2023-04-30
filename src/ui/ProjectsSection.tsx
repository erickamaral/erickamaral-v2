'use client';

import { useEffect, useState } from 'react';
import useMeasure from 'react-use-measure';

import Image from 'next/image';

import { Box, Chevron, Container, Title, ChevronButton } from '@/components';

export const ProjectsSection = () => {
  const [visible, setVisible] = useState(1);
  const [ref, bounds] = useMeasure();
  const [height, setHeight] = useState(0);
  const [reanimate, setReanimate] = useState(false);

  useEffect(() => {
    setHeight(bounds.height);
  }, [bounds.height]);


  const handlePrevious = () => {
    setVisible(visible - 1);
  }

  const handleNext = () => {
    setVisible(visible + 1);
  }

  const handleAnimationComplete = () => {
    console.log('complete');
  }

  return (
    <section>
      <Container className="flex flex-col gap-8">
        <header className="flex items-center justify-between gap-4">
          <div className="flex flex-col gap-4">
            <Title>Projetos</Title>
            <p>Configura alguns dos últimos projetos pessoais construidos por mim.</p>
          </div>
          <div className="flex items-center gap-4">
            <ChevronButton />
            <ChevronButton className="rotate-180" />
          </div>
        </header>
        <div className="flex items-center gap-6">
          <div className="flex-1">
            <figure className="transition hover:scale-[1.02] hover:rotate-[-1deg] hover:shadow-2xl">
              <Image
                src="/abanalysis.jpg"
                alt="Abanalysis"
                width="600"
                height="600"
                className="object-cover w-full border border-gray-600 aspect-[6/4]"
              />
            </figure>
          </div>
          <div className="flex-1">
            <Box className="flex-col gap-4 p-8">
              <h3 className="flex items-center gap-2 text-lg text-white">
                Abanalysis
                <Chevron className="w-4 h-4 rotate-180 text-lime-500" />
              </h3>
              <p>Foram desenvolvidos dois projetos para o Abanalysis, o site e um  aplicativo web que serve para gerenciar atendimentos em terapia ABA (Autistas). Um projeto bastante satisfatório que vai servir para profissionais terem mais cuidados com os alunos.</p>
              <ul className="flex flex-wrap gap-8">
                <li className="inline-flex items-center gap-2 text-sm text-white">
                  <Chevron className="w-3 h-3 text-lime-500" /> Laravel
                </li>
                <li className="inline-flex items-center gap-2 text-sm text-white">
                  <Chevron className="w-3 h-3 text-lime-500" /> TailwindCSS
                </li>
                <li className="inline-flex items-center gap-2 text-sm text-white">
                  <Chevron className="w-3 h-3 text-lime-500" /> AlpineJS
                </li>
              </ul>
              <nav className="flex items-center gap-6 py-3">
                <a href="#" className="text-white transition hover:text-lime-500" title="Ir para o site">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 256 256" className="w-7 h-7">
                    <path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,16a87.5,87.5,0,0,1,48,14.28V74L153.83,99.74,122.36,104l-.31-.22L102.38,90.92A16,16,0,0,0,79.87,95.1L58.93,126.4a16,16,0,0,0-2.7,8.81L56,171.44l-3.27,2.15A88,88,0,0,1,128,40ZM62.29,186.47l2.52-1.65A16,16,0,0,0,72,171.53l.21-36.23L93.17,104a3.62,3.62,0,0,0,.32.22l19.67,12.87a15.94,15.94,0,0,0,11.35,2.77L156,115.59a16,16,0,0,0,10-5.41l22.17-25.76A16,16,0,0,0,192,74V67.67A87.87,87.87,0,0,1,211.77,155l-16.14-14.76a16,16,0,0,0-16.93-3l-30.46,12.65a16.08,16.08,0,0,0-9.68,12.45l-2.39,16.19a16,16,0,0,0,11.77,17.81L169.4,202l2.36,2.37A87.88,87.88,0,0,1,62.29,186.47ZM185,195l-4.3-4.31a16,16,0,0,0-7.26-4.18L152,180.85l2.39-16.19L184.84,152,205,170.48A88.43,88.43,0,0,1,185,195Z"></path>
                  </svg>
                </a>
                <a href="#" className="text-white transition hover:text-lime-500" title="Visitar o Instagram">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 256 256" className="w-7 h-7">
                    <path d="M128,80a48,48,0,1,0,48,48A48.05,48.05,0,0,0,128,80Zm0,80a32,32,0,1,1,32-32A32,32,0,0,1,128,160ZM176,24H80A56.06,56.06,0,0,0,24,80v96a56.06,56.06,0,0,0,56,56h96a56.06,56.06,0,0,0,56-56V80A56.06,56.06,0,0,0,176,24Zm40,152a40,40,0,0,1-40,40H80a40,40,0,0,1-40-40V80A40,40,0,0,1,80,40h96a40,40,0,0,1,40,40ZM192,76a12,12,0,1,1-12-12A12,12,0,0,1,192,76Z"></path>
                  </svg>
                </a>
              </nav>
            </Box>
          </div>
        </div>
      </Container>
    </section>
  )
}