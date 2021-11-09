import { motion } from 'framer-motion'
import type { NextPage } from 'next'
import linktreeVariants from './components/animation/linktreeVariants';
import Content from './components/content';

const links = [
  { id: 1, url: 'mailto:breno.battaglin@icloud.com', description: 'Email', keepActiveTab: true },
  { id: 2, url: 'https://github.com/brenobattaglin', description: 'Github' },
  { id: 3, url: 'https://instagram.com/brenobattaglin', description: 'Instagram' },
  { id: 4, url: 'https://www.linkedin.com/in/brenobattaglin', description: 'LinkedIn' },
  { id: 5, url: 'https://open.spotify.com/user/brenobattaglin', description: 'Spotify' },
  { id: 6, url: 'https://twitter.com/brenobattaglin', description: 'Twitter' },
];

const Linktree: NextPage = () => {
  return (
    <Content>
      {
        links.map(
          (link) => {
            return (
              <motion.a key={link.id}
                variants={linktreeVariants}
                whileHover="hover"
                whileTap="tap"
                className="block text-nord6 hover:text-nord8 my-2"
                {...!link.keepActiveTab && { target: '_blank' }}
                href={link.url}>
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
