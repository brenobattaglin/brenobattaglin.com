'use client';
import Link from 'next/link';
import { EncryptedText } from '../ui/EncryptedText';

const BackLink = () => {
  return (
    <Link href="/" className="font-light mt-12">
      <EncryptedText text="Back" />
    </Link>
  );
};

export default BackLink;
