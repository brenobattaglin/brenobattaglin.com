import { motion } from 'motion/react';
import { EncryptedText } from '@/components/ui/encrypted-text';

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

export default function LinksSection() {
  return (
    <section className="snap-start h-screen flex items-center justify-center">
      <div className="text-center">
        {links.map((link) => {
          return (
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
          );
        })}
      </div>
    </section>
  );
}
