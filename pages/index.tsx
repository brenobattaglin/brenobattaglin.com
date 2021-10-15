import type { NextPage } from 'next'

const Home: NextPage = () => {
  return (
    <div className="flex flex-col mx-auto min-h-screen max-w-sm justify-center items-center">
        <p className="text-4xl mb-4">Breno Battaglin</p>
        <p className="text-base">Computer Scientist</p>
        <p className="text-base">Software Engineer</p>
        <p className="text-base">Minimalist</p>
    </div>
  )
}

export default Home
