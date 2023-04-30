'use client';

import { Bar, Chevron, Container } from '@/components'

export const IntroSection = () => {
  return (
    <section>
      <Container className="flex flex-col gap-3 pt-64">
        <h3 className="text-xl text-lime-500">Olá, meu nome é</h3>
        <h1 className="-ml-1.5 font-medium text-white text-8xl">Erick Amaral.</h1>
        <h2 className="text-4xl font-medium">Com códigos e criatividade, crio interfaces como desenvolvedor frontend.</h2>
        <p className="text-lg">Sou um desenvolvedor web com mais de 20 anos de experiência. Atualmente especialista em frontend utilizando o React com principal ferramenta, apaixonado por criar interfaces incríveis, funcionais e responsivas que tornam a experiência do usuário inesquecível.</p>
        <span className="flex items-center">
          <Chevron className="w-auto h-4 text-lime-500" />
          <Bar className="w-auto h-5 text-lime-500" />
          <Chevron className="w-auto h-4 rotate-180 text-lime-500" />
        </span>
      </Container>
    </section>
  )
}
