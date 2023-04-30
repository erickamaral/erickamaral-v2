'use client';

import { Box, Chevron, Container, Title, UnorderedItem, UnorderedList } from '@/components';

export const AboutSection = () => {
  return (
    <section>
      <Container className="flex flex-col gap-8">
        <header className="flex flex-col gap-4">
          <Title>Sobre</Title>
        </header>
        <article className="grid grid-cols-12 gap-8">
          <div className="flex flex-col col-span-8 gap-4">
            <p>Meu chamo Erick Amaral e eu sou desenvolvedor web com mais de 20 anos de experiência na área. Ao longo desses anos, tive a oportunidade de trabalhar em diversos projetos, tanto como fullstack quanto, mais recentemente, como frontend.</p>
            <p>Minha especialização no frontend é uma escolha consciente, pois acredito que a interface do usuário é uma parte fundamental do sucesso de qualquer projeto web. Além disso, minha experiência em desenvolvimento fullstack me permite ter uma visão holística do processo de desenvolvimento, o que me ajuda a criar soluções integradas e funcionais para meus clientes.</p>
            <p>Como desenvolvedor experiente, eu valorizo a importância do design e da usabilidade em meus projetos. Além disso, estou sempre em busca das últimas tecnologias e tendências do mercado para garantir que estou oferecendo as melhores soluções para meus clientes.</p>
            <p>Se você está procurando um desenvolvedor web experiente, que pode criar soluções de alta qualidade, estou pronto para ajudar. Vamos trabalhar juntos para transformar suas ideias em um projeto web de sucesso!</p>
            <p className="text-lime-500">Confira abaixo a lista de algumas das tecnologias ao qual tenho experiência e trabalho atualmente.</p>
          </div>
          <figure className="flex items-center justify-center col-span-4">
            <div className="relative">
              <Chevron className="absolute -top-4 -left-4 w-16 rotate-[45deg] text-lime-500" />
              <Chevron className="absolute -bottom-4 -right-4 w-16 rotate-[225deg] text-lime-500" />
              <img src="https://github.com/erickamaral.png" alt="Erick Amaral" className="object-cover w-full max-w-xs rounded-full mix-blend-screen" />
            </div>
          </figure>
        </article>
      </Container>
      <Container className="mt-20">
        <div className="relative">
          <Chevron className="z-10 absolute w-8 text-lime-500 rotate-[45deg] -top-4 -left-4" />
          <Chevron className="z-10 absolute w-8 text-lime-500 rotate-[225deg] -bottom-4 -right-4" />
          <Box className="justify-between p-16">
            <UnorderedList>
              <UnorderedItem>JavaScript</UnorderedItem>
              <UnorderedItem>TypeScript</UnorderedItem>
              <UnorderedItem>HTML</UnorderedItem>
              <UnorderedItem>CSS</UnorderedItem>
              <UnorderedItem>React</UnorderedItem>
            </UnorderedList>
            <UnorderedList>
              <UnorderedItem>NextJS</UnorderedItem>
              <UnorderedItem>TailwindCSS</UnorderedItem>
              <UnorderedItem>PHP</UnorderedItem>
              <UnorderedItem>Laravel</UnorderedItem>
              <UnorderedItem>REST</UnorderedItem>
            </UnorderedList>
            <UnorderedList>
              <UnorderedItem>GraphQL</UnorderedItem>
              <UnorderedItem>Docker</UnorderedItem>
              <UnorderedItem>Acessibilidade</UnorderedItem>
              <UnorderedItem>Testes</UnorderedItem>
              <UnorderedItem>AlpineJS</UnorderedItem>
            </UnorderedList>
            <UnorderedList>
              <UnorderedItem>Flutter</UnorderedItem>
              <UnorderedItem>Dart</UnorderedItem>
              <UnorderedItem>Clean Code</UnorderedItem>
              <UnorderedItem>Design Pattern</UnorderedItem>
              <UnorderedItem>Figma</UnorderedItem>
            </UnorderedList>
          </Box>
        </div>
      </Container>
    </section>
  )
}
