import Image from 'next/image';
import { motion } from 'motion/react';
import { EncryptedText } from '@/components/ui/encrypted-text';

const sectionTitle = 'Contact Me';
const sectionSubtitle = 'Find me here.';

const links = [
  { id: 1, url: 'https://github.com/brenobattaglin', description: 'Github' },
  {
    id: 2,
    url: 'https://instagram.com/brenobattaglin',
    description: 'Instagram',
  },
  {
    id: 3,
    url: 'https://www.linkedin.com/in/brenobattaglin',
    description: 'LinkedIn',
  },
];

const linktreeAnimationVariants = {
  hover: { y: -3 },
  tap: { x: 30 },
};

export default function ContactSection() {
  return (
    <section className="snap-start h-screen flex items-center justify-center">
      <div className="flex flex-col items-center justify-center">
     
        <Image
          src="/images/profile.jpg"
          height={200}
          width={200}
          className="rounded-full mb-8"
          alt="Profile"
        />
           <div className="text-center mb-8">
          <h2>{sectionTitle}</h2>
          <p className="text-sm text-gray-400">{sectionSubtitle}</p>
        </div>
        <div className="flex flex-col items-center">
          {links.map((link) => (
            <motion.a
              key={link.id}
              variants={linktreeAnimationVariants}
              whileHover="hover"
              whileTap="tap"
              className="block my-2"
              href={link.url}
            >
              <EncryptedText text={link.description} />
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
