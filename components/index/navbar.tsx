import Link from 'next/link';
import { EncryptedText } from '../ui/encrypted-text';

const links = [
  { id: 2, route: '/about', label: 'About' },
  { id: 3, route: '/links', label: 'Links' },
];

const NavBar = () => {
  return (
    <div className="container mx-auto  space-x-4 text-center pt-3 justify-center">
      {links.map((link) => (
        <Link
          href={link.route}
          key={link.id}
          className="inline align-middle font-light"
        >
          <EncryptedText text={link.label} />
        </Link>
      ))}
    </div>
  );
};

export default NavBar;
