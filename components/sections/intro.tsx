import { EncryptedText } from '@/components/ui/encrypted-text';

export default function IntroSection() {
  const name = 'Breno Battaglin';

  return (
    <section className="snap-start h-screen flex items-center justify-center">
      <div className="text-center">
        <p className="text-4xl mb-4">
          <EncryptedText text={name} />
        </p>
        <p className="text-sm text-gray-400 mt-8">Scroll to explore</p>
      </div>
    </section>
  );
}
