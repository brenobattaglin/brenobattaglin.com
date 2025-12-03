import { EncryptedText } from '@/components/ui/encrypted-text';

export default function IntroSection() {
  const title = 'Breno Battaglin';
  const subtitle = 'Software Engineer';

  return (
    <section className="snap-start h-screen flex items-center justify-center">
      <div className="text-center">
        <p className="text-4xl mb-2 text-white">
          <EncryptedText text={title} />
        </p>
        <p className="text-sm text-gray-400">{subtitle}</p>
      </div>
    </section>
  );
}
