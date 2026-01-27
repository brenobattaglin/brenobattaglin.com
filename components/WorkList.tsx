import React from 'react';
import { WorkItem } from './WorkItem';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

const PROJECTS = [
  {
    id: "01",
    title: "MY BMW",
    description: "Senior Software Engineer, Solutions Architect",
    link: "https://www.bmw.com"
  },
  {
    id: "02",
    title: "MINI",
    description: "Senior Software Engineer, Solutions Architect",
    link: "https://www.mini.com"
  },
  {
    id: "03",
    title: "ZALLPY",
    description: "Senior Software Engineer, Mobile Specialist",
    link: "https://www.zallpy.com"
  },
  {
    id: "04",
    title: "MINHA ENTRADA",
    description: "Android Developer",
    link: "https://minhaentrada.com.br"
  }
];

export const WorkList: React.FC = () => {
  const { elementRef, isVisible } = useIntersectionObserver({ threshold: 0.1 });

  return (
    <section id="works" className="w-full pb-20">
      <div ref={elementRef} className={`container mx-auto px-6 md:px-12 py-12 border-b border-neutral-800 mb-10 transition-all duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
        <div className="flex justify-between items-end mb-4">
          <h4 className="font-mono text-xs md:text-sm text-neutral-400 uppercase tracking-[0.2em]">
            Works <span className="text-white">(04)</span>
          </h4>
          <span className="font-mono text-[10px] text-neutral-600 uppercase tracking-widest hidden md:inline-block">
            Scroll to explore
          </span>
        </div>
        <p className="font-mono text-sm md:text-base text-neutral-400 max-w-2xl">
          Some projects and companies that I have and had the honor of working with.
        </p>
      </div>

      <div className="flex flex-col">
        {PROJECTS.map((project, index) => (
          <WorkItem key={project.id} project={project} index={index} />
        ))}
      </div>
    </section>
  );
};