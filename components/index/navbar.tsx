import Link from 'next/link';

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
          className="inline align-middle font-light text-nord6 hover:text-nord8"
        >
          {link.label}
        </Link>
      ))}
    </div>
  );
};

export default NavBar;
