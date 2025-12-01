import IntroSection from '@/components/content/intro';
import ContactSection from '@/components/content/contact';
import ProjectsSection from '@/components/content/projects';
import { FloatingDock } from '@/components/ui/floating-dock';
import { ScrollArea } from '@/components/ui/scroll-area';
import UserIcon from '@/components/icons/user';
import BriefcaseIcon from '@/components/icons/briefcase';
import MessageIcon from '@/components/icons/message';

export default function Home() {
  const dockItems = [
    {
      title: 'Go to Top',
      icon: <UserIcon />,
      href: '#intro',
    },
    {
      title: 'Projects',
      icon: <BriefcaseIcon />,
      href: '#projects',
    },
    {
      title: 'Contact Me',
      icon: <MessageIcon />,
      href: '#contact',
    },

  ];

  return (
    <ScrollArea className="h-screen snap-y snap-mandatory">
      <div id="intro" className="snap-start snap-always">
        <IntroSection />
      </div>
      <div id="projects" className="snap-start snap-always">
        <ProjectsSection />
      </div>
      <div id="contact" className="snap-start snap-always">
        <ContactSection />
      </div>
   

      <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50">
        <FloatingDock items={dockItems} />
      </div>
    </ScrollArea>
  );
}
