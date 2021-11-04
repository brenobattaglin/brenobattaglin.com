import type { NextPage } from 'next'
import { motion } from 'framer-motion';
import contentVariants from './components/animationVariants/contentVariants';


const Home: NextPage = () => {
  return (
    <motion.div initial="exit" animate="enter" exit="exit" variants={contentVariants} >
    <div className="flex flex-col mx-auto min-h-screen max-w-sm justify-center items-center">
        <p className="text-4xl mb-4">Breno Battaglin</p>
        <p className="text-base">Computer Scientist</p>
        <p className="text-base">Software Engineer</p>
        <p className="text-base">Minimalist</p>
    </div>
    </motion.div>
  )
}

export default Home
