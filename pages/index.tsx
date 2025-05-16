import type { NextPage } from 'next';
import Content from '../components/core/content';
import NavBar from '../components/index/navbar';

const name = 'Breno Battaglin';

const Home: NextPage = () => {
  return (
    <Content>
      <p className="text-4xl mb-4 text-nord6">{name}</p>
      <NavBar />
    </Content>
  );
};

export default Home;
