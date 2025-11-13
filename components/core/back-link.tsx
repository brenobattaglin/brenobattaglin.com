import Link from 'next/link';
import { EncryptedText } from '../ui/encrypted-text';

const BackLink = () => {
  return (
    <Link href="/" className="font-light mt-12">
      <EncryptedText text="Back" />
    </Link>
  );
};

export default BackLink;
