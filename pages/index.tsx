import type { NextPage } from 'next'
import Image from 'next/image'

const Home: NextPage = () => {
  return (
      <Image
        src="/images/profile.png"
        height={144}
        width={144}
        alt="Breno's profile photo" />
  )
}

export default Home
