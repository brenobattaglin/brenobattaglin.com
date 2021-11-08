import type { NextPage } from 'next'
import Content from './components/content';

const Home: NextPage = () => {
  return (
    <Content>
      <p className="text-4xl mb-4 text-nord6">Breno Battaglin</p>
      <p className="text-base text-nord6">Computer Scientist</p>
      <p className="text-base text-nord6">Software Engineer</p>
      <p className="text-base text-nord6">Minimalist</p>
    </Content>
  )
}

export default Home;
