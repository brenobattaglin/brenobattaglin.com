import type { NextPage } from 'next'
import Content from './components/content';

const subtitles = [
  { id: 1, text: 'Computer Scientist' },
  { id: 2, text: 'Software Engineer' },
  { id: 3, text: 'Minimalist' },
];

const Home: NextPage = () => {
  return (
    <Content>
      <p className="text-4xl mb-4 text-nord6">Breno Battaglin</p>
      {
        subtitles.map(
          (subtitle) => (
            <p key={subtitle.id} className="text-base text-nord6">{subtitle.text}</p>
          )
        )
      }
    </Content>
  )
}

export default Home;