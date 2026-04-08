import React from 'react';
import { useTheme } from '../hooks/useTheme';
import { SunIcon } from './icons/SunIcon';
import { MoonIcon } from './icons/MoonIcon';

interface NavLinkProps {
  label: string;
  href: string;
}

const NAV_ITEMS: NavLinkProps[] = [
  { label: 'About', href: '#about' },
  { label: 'Works', href: '#works' },
  { label: 'Contact', href: '#contact' },
];

const NavLink: React.FC<NavLinkProps> = ({ label, href }) => {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const targetId = href.replace('#', '');
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      const headerOffset = 80;
      const elementPosition = targetElement.getBoundingClientRect().top;
      const offsetPosition =
        elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <li>
      <a
        href={href}
        onClick={handleClick}
        className="relative group cursor-pointer"
      >
        {label}
        <span className="absolute -bottom-1 left-0 w-0 h-px bg-current transition-all duration-300 group-hover:w-full" />
      </a>
    </li>
  );
};

export const Header: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <header
      className={`fixed top-0 left-0 w-full px-6 py-6 md:px-12 md:py-8 flex justify-center items-center z-40 ${theme === 'light' ? 'text-black' : 'text-white'}`}
    >
      <nav>
        <ul className="flex space-x-8 font-mono text-xs md:text-sm tracking-widest uppercase">
          {NAV_ITEMS.map((item) => (
            <NavLink key={item.label} label={item.label} href={item.href} />
          ))}
        </ul>
      </nav>

      <button
        onClick={toggleTheme}
        className="absolute right-6 md:right-12 p-2 hover:bg-current/10 rounded-full transition-colors focus:outline-hidden"
        aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
      >
        {theme === 'dark' ? (
          <SunIcon className="w-5 h-5" />
        ) : (
          <MoonIcon className="w-5 h-5" />
        )}
      </button>
    </header>
  );
};
