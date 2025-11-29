import IntroSection from '@/components/sections/intro';
import AboutSection from '@/components/sections/about';
import LinksSection from '@/components/sections/links';
import ProjectsSection from '@/components/sections/projects';
import { FloatingDock } from '@/components/ui/floating-dock';
import { IconHome, IconUser, IconLink, IconBriefcase, IconNavigation } from '@tabler/icons-react';

export default function Home() {
  const dockItems = [
    {
      title: 'Top',
      icon: <IconNavigation className="h-full w-full" />,
      href: '#intro',
    },
    {
      title: 'About',
      icon: <IconUser className="h-full w-full" />,
      href: '#about',
    },
    {
      title: 'Links',
      icon: <IconLink className="h-full w-full" />,
      href: '#links',
    },
    {
      title: 'Projects',
      icon: <IconBriefcase className="h-full w-full" />,
      href: '#projects',
    },
  ];

  return (
    <div className="h-screen overflow-y-scroll">
      <div id="intro">
        <IntroSection />
      </div>
      <div id="about">
        <AboutSection />
      </div>
      <div id="links">
        <LinksSection />
      </div>
      <div id="projects">
        <ProjectsSection />
      </div>
      
      <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50">
        <FloatingDock items={dockItems} />
      </div>
    </div>
  );
}
