import type { NextPage } from 'next';
import Content from '../components/core/content';
import { EncryptedText } from '@/components/ui/encrypted-text';

const error = 'Error 404';
const message = 'This page could not be found.';

const NotFound: NextPage = () => {
  return (
    <Content>
      <p className="text-base mb-4 text-red-800"><EncryptedText text={error} /></p>
      <p className="text-base mb-4"><EncryptedText text={message} /></p>
    </Content>
  );
};

export default NotFound;
