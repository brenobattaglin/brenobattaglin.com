import Content from '@/components/core/Content';
import { EncryptedText } from '@/components/ui/EncryptedText';

const error = 'Error 404';
const message = 'This page could not be found.';

export default function NotFound() {
  return (
    <Content>
      <p className="text-base mb-4 text-red-800">
        <EncryptedText text={error} />
      </p>
      <p className="text-base mb-4">
        <EncryptedText text={message} />
      </p>
    </Content>
  );
}
