import { motion } from 'framer-motion'
import type { NextPage } from 'next'
import Content from './components/content';

const links = [
  { id: 1, url: 'https://github.com/brenobattaglin', description: 'Github' },
  { id: 2, url: 'https://instagram.com/brenobattaglin', description: 'Instagram' },
  { id: 3, url: 'https://www.linkedin.com/in/brenobattaglin', description: 'LinkedIn' },
  { id: 4, url: 'https://open.spotify.com/user/brenobattaglin', description: 'Spotify' },
  { id: 5, url: 'https://t.me/brenobattaglin', description: 'Telegram' },
  { id: 6, url: 'https://twitter.com/brenobattaglin', description: 'Twitter' },
];

const linktreeAnimationVariants = {
  hover: { y: -3, },
  tap: { x: 30, },
};

const Linktree: NextPage = () => {
  return (
    <Content>
      {
        links.map(
          (link) => {
            return (
              <motion.a key={link.id}
                variants={linktreeAnimationVariants}
                whileHover="hover"
                whileTap="tap"
                className="block text-nord6 hover:text-nord8 my-2"
                href={link.url}
              >
                {link.description}
              </motion.a>
            );
          }
        )
      }
    </Content>
  )
}

export default Linktree
