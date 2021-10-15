import type { NextPage } from 'next'

const Linktree: NextPage = () => {
  return (
    <div className="flex flex-col mx-auto min-h-screen max-w-sm justify-center items-center space-y-4">
      <a className="block" href="https://www.linkedin.com/in/brenobattaglin">Linkedin</a>
      <a className="block" href="https://github.com/brenobattaglin">Github</a>
      <a className="block" href="https://instagram.com/brenobattaglin">Instagram</a>
      <a className="block" href="https://open.spotify.com/user/brenobattaglin">Spotify</a>
      <a className="block" href="https://twitter.com/brenobattaglin">Twitter</a>
    </div>
  )
}

export default Linktree
