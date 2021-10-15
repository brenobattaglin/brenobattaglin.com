import type { NextPage } from 'next'
import Image from 'next/image'


const About: NextPage = () => {
  return (
    <div className="flex flex-col mx-auto min-h-screen max-w-sm justify-center items-center">
      <Image
        src="/images/profile.png"
        height={144}
        width={144}
        alt="Breno's profile photo"
      />
      <div className="mt-16">
        <p className="mb-4">
          I was born in the state of Espírito Santo, Brazil. When I was a child, I always loved games and tech.
        </p>
        <p>
          Growing up, I decided to do a technical programming course, and later, study computer science.
          At this time, my carrer begins as web developer.
          Today I have a bachelor in computer science and work as software engineer.
        </p>
      </div>
    </div>
  )
}

export default About
