import type { NextPage } from 'next';
import Content from '../components/core/content';

const error = 'Error 404';
const message = 'This page could not be found.';

const NotFound: NextPage = () => {
  return (
    <Content>
      <p className="text-base mb-4 text-nord11">{error}</p>
      <p className="text-base mb-4 text-nord6">{message}</p>
    </Content>
  );
};

export default NotFound;
