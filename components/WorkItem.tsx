import React from 'react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

interface Project {
  id: string;
  title: string;
  description: string;
  link: string;
}

interface WorkItemProps {
  project: Project;
  index: number;
}

const ANIMATION_CLASSES = {
  container: (isVisible: boolean) =>
    `group relative border-b border-neutral-900 transition-all duration-700 ease-out py-16 md:py-24 cursor-pointer hover:bg-neutral-900/30 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'
    }`,
};

const ProjectTitle: React.FC<{ title: string }> = ({ title }) => (
  <h3 className="font-sans font-bold text-5xl md:text-7xl lg:text-8xl xl:text-[120px] 2xl:text-[140px] tracking-tighter text-white transition-all duration-500 group-hover:pl-4 group-hover:text-cyan-100">
    {title}
  </h3>
);

const ProjectDescription: React.FC<{ description: string }> = ({ description }) => (
  <div className="flex items-center gap-4 md:gap-8 font-mono text-xs md:text-sm uppercase tracking-widest text-neutral-400">
    <span className="text-white group-hover:text-cyan-400 transition-colors duration-300">
      {description}
    </span>
  </div>
);

export const WorkItem: React.FC<WorkItemProps> = ({ project }) => {
  const { elementRef, isVisible } = useIntersectionObserver({ threshold: 0.2 });

  const handleClick = () => {
    window.open(project.link, '_blank', 'noopener,noreferrer');
  };

  return (
    <div ref={elementRef} className={ANIMATION_CLASSES.container(isVisible)} onClick={handleClick}>
      <div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row md:items-baseline justify-between gap-6 md:gap-0">
        <ProjectTitle title={project.title} />
        <ProjectDescription description={project.description} />
      </div>
    </div>
  );
};