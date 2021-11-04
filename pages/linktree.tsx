import { motion } from 'framer-motion'
import type { NextPage } from 'next'
import contentVariants from './components/animationVariants/contentVariants'

const Linktree: NextPage = () => {
  return (
    <motion.div initial="exit" animate="enter" exit="exit" variants={contentVariants} >
      <div className="flex flex-col mx-auto min-h-screen max-w-sm justify-center items-center space-y-4">
        <a className="block text-nord6 hover:text-blue-400" href="mailto:breno.battaglin@icloud.com">Email</a>
        <a className="block text-nord6 hover:text-blue-400" target="_blank" href="https://github.com/brenobattaglin">Github</a>
        <a className="block text-nord6 hover:text-blue-400" target="_blank" href="https://instagram.com/brenobattaglin">Instagram</a>
        <a className="block text-nord6 hover:text-blue-400" target="_blank" href="https://www.linkedin.com/in/brenobattaglin">Linkedin</a>
        <a className="block text-nord6 hover:text-blue-400" target="_blank" href="https://open.spotify.com/user/brenobattaglin">Spotify</a>
        <a className="block text-nord6 hover:text-blue-400" target="_blank" href="https://twitter.com/brenobattaglin">Twitter</a>
      </div>
    </motion.div>
  )
}

export default Linktree
