import Link from 'next/link';
import { EncryptedText } from '../ui/encrypted-text';

const BackLink = () => {
  return (
    <Link href="/" className="font-light text-nord6 hover:text-nord8 mt-12">
      <EncryptedText text="Back" />
    </Link>
  );
};

export default BackLink;
