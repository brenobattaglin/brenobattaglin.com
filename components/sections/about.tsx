import Image from 'next/image';
import { EncryptedText } from '@/components/ui/encrypted-text';

const paragraphs = [
  {
    id: 1,
    text: "Hi, I'm Breno.",
  },
  {
    id: 2,
    text:
      "I'm a Computer Scientist and Software Engineer, passionate about creating elegant and efficient solutions. " +
      "I'm driven by challenges, commited to excellence, and dedicated to continuous learning.",
  },
];

export default function AboutSection() {
  return (
    <section className="snap-start h-screen flex items-center justify-center">
      <div className="max-w-2xl px-6">
        <Image
          src="/images/profile.jpg"
          height={150}
          width={150}
          alt="Breno's profile photo"
          className="rounded-full mx-auto"
        />
        <div className="mt-4 p-3">
          {paragraphs.map((paragraph, index) => (
            <p 
              key={paragraph.id} 
              className="mb-4 text-justify"
            >
              {index === 0 ? (
                <EncryptedText text={paragraph.text} />
              ) : (
                paragraph.text
              )}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}
