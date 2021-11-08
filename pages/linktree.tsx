import { motion } from 'framer-motion'
import type { NextPage } from 'next'
import linkVariants from './components/animation/linkVariants';
import Content from './components/content';

const links = [
  { id: 1, url: 'mailto:breno.battaglin@icloud.com', description: 'Email', mustOpenTab: false },
  { id: 2, url: 'https://github.com/brenobattaglin', description: 'Github', mustOpenTab: true },
  { id: 3, url: 'https://instagram.com/brenobattaglin', description: 'Instagram', mustOpenTab: true },
  { id: 4, url: 'https://www.linkedin.com/in/brenobattaglin', description: 'LinkedIn', mustOpenTab: true },
  { id: 5, url: 'https://open.spotify.com/user/brenobattaglin', description: 'Spotify', mustOpenTab: true },
  { id: 6, url: 'https://twitter.com/brenobattaglin', description: 'Twitter', mustOpenTab: true },
];

const Linktree: NextPage = () => {
  return (
    <Content>
      {
        links.map(
          (link) => (
            <motion.a key={link.id} variants={linkVariants} whileHover="hover" whileTap="tap"
              className="block text-nord6 hover:text-nord8 my-2" target="_blank" href={link.url}>{link.description}
            </motion.a>
          )
        )
      }
    </Content>
  )
}

export default Linktree
