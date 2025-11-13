import Link from 'next/link';
import Content from '../components/core/content';
import { EncryptedText } from '@/components/ui/encrypted-text';

function NavBar() {
  const links = [
    { id: 2, route: '/about', label: 'About' },
    { id: 3, route: '/links', label: 'Links' },
  ];

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
}

export default function Home() {
  const name = 'Breno Battaglin';

  return (
    <Content>
      <p className="text-4xl mb-4">
        <EncryptedText text={name} />
      </p>
      <NavBar />
    </Content>
  );
}
