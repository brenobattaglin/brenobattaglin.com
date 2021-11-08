import { motion } from 'framer-motion'
import type { NextPage } from 'next'
import Image from 'next/image'
import contentVariants from './components/animation/contentVariants'

const About: NextPage = () => {
  return (
    <motion.div variants={contentVariants} initial="hidden" animate="visible" exit="exit">
      <div className="flex flex-col mx-auto min-h-screen max-w-sm justify-center items-center">
        <Image
          src="/images/profile.png"
          height={200}
          width={200}
          alt="Breno's profile photo"
        />
        <div className="mt-16 p-3 " >
          <p className="mb-4 text-justify text-nord6">
            I was born in the state of Espírito Santo, Brazil. When I was a child, I always loved games and tech.
          </p>
          <p className="text-justify text-nord6">
            Growing up, I decided to do a  programming technical course, and later, study computer science.
            At this time, my carrer begins as web developer.
            Today I have a bachelor in computer science and work as software engineer.
          </p>
        </div>
      </div>
    </motion.div>
  )
}

export default About
