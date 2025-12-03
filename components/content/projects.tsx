import Link from 'next/link';
import { LayoutGrid } from '@/components/ui/layout-grid';
import { EncryptedText } from '../ui/encrypted-text';

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
const sectionSubtitle =
  'Projects and companies that I have and had the honor of working with.';

const projects: Project[] = [
  {
    title: 'My BMW',
    links: [
      {
        label: 'App Store',
        url: 'https://apps.apple.com/us/app/my-bmw/id1519457734',
      },
      {
        label: 'Google Play',
        url: 'https://play.google.com/store/apps/details?id=de.bmw.connected.mobile20.na&hl=en-US',
      },
    ],
    thumbnail: '/images/bmw.jpg',
    className: 'sd:col-span-1 md:col-span-2',
  },
  {
    title: 'MINI',
    links: [
      {
        label: 'App Store',
        url: 'https://apps.apple.com/us/app/mini/id1519458349',
      },
      {
        label: 'Google Play',
        url: 'https://play.google.com/store/apps/details?id=de.mini.connected.mobile20.row&hl=en-US',
      },
    ],
    thumbnail: '/images/mini.jpg',
    className: 'col-span-1'
  },
  {
    title: 'Zallpy',
    links: [{ label: 'Website', url: 'https://www.zallpy.com/' }],
    thumbnail: '/images/zallpy.jpg',
        className: 'sd:col-span-1 md:col-span-2'

  },
  {
    title: 'MinhaEntrada',
    links: [{ label: 'Website', url: 'https://www.minhaentrada.com.br/' }],
    thumbnail: '/images/me.jpg',
    className: 'col-span-1',
  },
];

const ProjectCard = ({ title, links }: ProjectCardProps) => (
  <div>
    <h2 >{title}
    </h2>
    <p >
      {links.map((link, index) => (
        <span key={`${link.url}-${index}`}>
          <Link href={link.url}>
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
  thumbnail: project.thumbnail,
}));

export default function ProjectsSection() {
  return (
    <section>
      <div className="h-full w-full max-h-screen py-10 flex flex-col">
        <div className="px-10 text-left shrink-0">
          <h2>
            <EncryptedText text={sectionTitle} />
          </h2>
          <p>
            <EncryptedText text={sectionSubtitle} />
          </p>
        </div>
        <div className="flex-1 min-h-0">
          <LayoutGrid cards={cards} />
        </div>
      </div>
    </section>
  );
}
