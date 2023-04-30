'use client';

import { Background, InDev } from '@/components';
import { AboutSection, ExperiencesSection, FooterSection, HeaderSection, IntroSection, NetworksSection, ProjectsSection } from '@/ui';

export default function Home() {
  return (
    <main className="flex flex-col min-h-full gap-40">
      <HeaderSection />
      <IntroSection />
      <AboutSection />
      <ExperiencesSection />
      <ProjectsSection />
      <NetworksSection />
      <FooterSection />
      <Background />
      <InDev />
    </main>
  )
}
