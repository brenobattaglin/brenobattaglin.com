import { EncryptedText } from '@/components/ui/encrypted-text';

export default function IntroSection() {
  const title = 'Breno Battaglin';
  const subtitle = 'Software Engineer';

  return (
    <section>
      <div className="text-center">
        <h2>
          <EncryptedText text={title} />
        </h2>
        <p>
          <EncryptedText text={subtitle} />
        </p>
      </div>
    </section>
  );
}
