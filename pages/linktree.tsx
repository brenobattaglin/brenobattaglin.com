import { motion } from 'framer-motion'
import type { NextPage } from 'next'
import { redirect } from 'next/dist/server/api-utils';
import contentVariants from './components/animation/contentVariants'
import linkVariants from './components/animation/linkVariants';

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
    <motion.div variants={contentVariants} initial="hidden" animate="visible" exit="exit">
      <div className="flex flex-col mx-auto min-h-screen max-w-sm justify-center items-center space-y-4">
        {
          links.map(
            (link) => (
              <motion.a key={link.id} variants={linkVariants} whileHover="hover" whileTap="tap" >
                <a className="block text-nord6 hover:text-nord8" target="_blank" href={link.url}>{link.description}</a>
              </motion.a>
            )
          )
        }
      </div>
    </motion.div >
  )
}

export default Linktree
