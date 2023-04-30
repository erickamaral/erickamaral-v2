'use client';

import { Box, Container, DescriptionData, DescriptionList, TabItem, TabPanel, Tabs, TabsItems, TabsPanels, Title } from '@/components'

export const ExperiencesSection = () => {
  return (
    <section>
      <Container className="flex flex-col gap-8">
        <header className="flex flex-col gap-4">
          <Title>Experiências</Title>
          <p>Conheça logo abaixo um pouco da minha trajetória e experiências profissionais adquiridas ao longo dos últimos anos.</p>
        </header>
        <Tabs>
          <TabsItems>
            <TabItem id="invillia">Invillia</TabItem>
            <TabItem id="vox">Vox Tecnologia</TabItem>
            <TabItem id="freelance">Freelancer</TabItem>
            <TabItem id="show">Show Tecnologia</TabItem>
            <TabItem id="eusa">EuSa</TabItem>
          </TabsItems>
          <TabsPanels>
            <Box className="p-16">
              <TabPanel id="invillia">
                <DescriptionList>
                  <DescriptionData title="Cargo" description="Desenvolvedor Frontend" />
                  <DescriptionData title="Período" description="Janeiro de 2020 até atualmente" />
                  <DescriptionData title="Local" description="Araraquara, SP" />
                  <DescriptionData title="Sobre" description="Atualmente trabalho como desenvolvedor frontend utilizando React com nossos parceiros da OLX." />
                </DescriptionList>
              </TabPanel>
              <TabPanel id="vox">
                <DescriptionList>
                  <DescriptionData title="Cargo" description="Desenvolvedor Fullstack (Líder Técnico)" />
                  <DescriptionData title="Período" description="Janeiro de 2018 até Dezembro de 2019" />
                  <DescriptionData title="Local" description="João Pessoa, PB" />
                  <DescriptionData title="Sobre" description="Trabalhei como desenvolvedor Fullstack e Líder Técnico da equipe de Frontend utilizando PHP, Synfony, jQuery, ES6, Typescript, Angular 6, Bootstrap, dentro outros." />
                </DescriptionList>
              </TabPanel>
              <TabPanel id="freelance">
                <DescriptionList>
                  <DescriptionData title="Cargo" description="Desenvolvedor Freelancer" />
                  <DescriptionData title="Período" description="Novembro de 2014 até Janeiro de 2018" />
                  <DescriptionData title="Local" description="João Pessoa, PB" />
                  <DescriptionData title="Sobre" description="Trabalhei como freelancer há cerca de quatro anos, neste período obtive experiência com diversas tecnologias, tais como, Laravel, VueJS, React, React Native, Wordpress, NodeJS, Express, AdonisJS, DevOps, Flutter, Java, dentre outros." />
                </DescriptionList>
              </TabPanel>
              <TabPanel id="show">
                <DescriptionList>
                  <DescriptionData title="Cargo" description="Desenvolvedor Fullstack" />
                  <DescriptionData title="Período" description="Abril de 2013 até Maio de 2014" />
                  <DescriptionData title="Local" description="Guarabira, PB" />
                  <DescriptionData title="Sobre" description="Trabalhei tanto no backend (Codeigniter, MySQL) e frontend (Bootstrap, jQuery). Fiquei responsável pela reestruturação e refatoração de praticamente todo o sistema tanto interno quanto externo, na remodelagem do banco de dados. Tive experiência com sistema de rastreamento veícular, GPS, geolocalização, API do Google Maps, Open Street Maps, dentre outros." />
                </DescriptionList>
              </TabPanel>
              <TabPanel id="eusa">
                <DescriptionList>
                  <DescriptionData title="Cargo" description="Desenvolvedor Frontend" />
                  <DescriptionData title="Período" description="Maio de 2014 até Novembro de 2014" />
                  <DescriptionData title="Local" description="João Pessoa, PB" />
                  <DescriptionData title="Sobre" description="Experiência com desenvolvimento web utilizando o framework Backbone e sistema mobile utilizando o ExtJS." />
                </DescriptionList>
              </TabPanel>
            </Box>
          </TabsPanels>
        </Tabs>
      </Container>
    </section>
  )
}
