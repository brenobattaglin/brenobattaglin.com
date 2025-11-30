import Link from 'next/link';
import { LayoutGrid } from '@/components/ui/layout-grid';

interface ProjectLink {
  label: string;
  url: string;
}

interface Project {
  title: string;
  links: ProjectLink[];
  thumbnail: string;
  className: string;
}

interface ProjectCardProps {
  title: string;
  links: ProjectLink[];
}

const sectionTitle = 'Projects & Companies';
const sectionSubtitle = 'Projects and companies that I have and had the honor of working with.';

const projects: Project[] = [
  {
    title: 'My BMW',
    links: [
      { label: 'App Store', url: 'https://apps.apple.com/us/app/my-bmw/id1519457734' },
      { label: 'Google Play', url: 'https://play.google.com/store/apps/details?id=de.bmw.connected.mobile20.na&hl=en-US' }
    ],
    thumbnail: '/images/bmw.jpg',
    className: 'md:col-span-2'
  },
  {
    title: 'MINI',
    links: [
      { label: 'App Store', url: 'https://apps.apple.com/us/app/mini/id1519458349' },
      { label: 'Google Play', url: 'https://play.google.com/store/apps/details?id=de.mini.connected.mobile20.row&hl=en-US' }
    ],
    thumbnail: '/images/mini.jpg',
    className: 'md:col-span-1'
  },
  {
    title: 'Zallpy',
    links: [{ label: 'Website', url: 'https://www.zallpy.com/' }],
    thumbnail: '/images/zallpy.jpg',
        className: 'md:col-span-2'

  },
  {
    title: 'MinhaEntrada',
    links: [{ label: 'Website', url: 'https://www.minhaentrada.com.br/' }],
    thumbnail: '/images/me.jpg',
    className: 'col-span-1'
  }
];

const ProjectCard = ({ title, links }: ProjectCardProps) => (
  <div>
    <p className="font-bold text-xl text-white md:text-4xl">
      {title}
    </p>
    <p className="my-4 max-w-lg text-base font-normal text-neutral-200">
      {links.map((link, index) => (
        <span key={`${link.url}-${index}`}>
          <Link href={link.url} className="text-white underline">
            {link.label}
          </Link>
          {index < links.length - 1 && ', '}
        </span>
      ))}
    </p>
  </div>
);

const cards = projects.map((project, index) => ({
  id: index + 1,
  content: <ProjectCard title={project.title} links={project.links} />,
  className: project.className,
  thumbnail: project.thumbnail
}));


export default function ProjectsSection() {
  return (
    <section className="snap-start h-screen flex items-center justify-center">
      <div className="h-full w-full py-10">
        <div className="mb-8 px-10 text-left">
          <h2 className="mb-2 text-4xl font-bold">{sectionTitle}</h2>
          <p className="text-sm text-neutral-400">{sectionSubtitle}</p>
        </div>
        <LayoutGrid cards={cards} />
      </div>
    </section>
  );
}
