import React from 'react';

interface SocialLink {
  name: string;
  url: string;
}

const SOCIAL_LINKS: SocialLink[] = [
  { name: 'Github', url: 'https://github.com/brenobattaglin' },
  { name: 'LinkedIn', url: 'https://www.linkedin.com/in/brenobattaglin' },
];

const COPYRIGHT_TEXT = 'Breno Battaglin. All rights reserved.';

const SocialLinkItem: React.FC<SocialLink> = ({ name, url }) => (
  <a
    href={url}
    target="_blank"
    rel="noopener noreferrer"
    className="font-mono text-[11px] uppercase tracking-widest text-neutral-400 hover:text-white transition-colors"
  >
    {name}
  </a>
);

const Copyright: React.FC = () => (
  <div className="flex items-center gap-2">
    <span className="font-mono text-[11px] text-neutral-500 uppercase tracking-widest">
      {COPYRIGHT_TEXT}
    </span>
  </div>
);

export const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-black border-t border-neutral-900">
      <div className="container mx-auto px-6 md:px-12 py-8 md:py-12 flex flex-col md:flex-row justify-between items-center gap-6">
        <Copyright />
        <div className="flex gap-8">
          {SOCIAL_LINKS.map((link) => (
            <SocialLinkItem key={link.name} name={link.name} url={link.url} />
          ))}
        </div>
      </div>
    </footer>
  );
};
