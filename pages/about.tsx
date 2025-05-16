import type { NextPage } from 'next';
import Image from 'next/image';
import Content from '../components/core/content';
import BackLink from '../components/core/back-link';

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

const About: NextPage = () => {
  return (
    <Content>
      <Image
        src="/images/profile.jpg"
        height={150}
        width={150}
        alt="Breno's profile photo"
        className="rounded-full"
      />
      <div className="mt-4 p-3 ">
        {paragraphs.map((paragraph) => (
          <p key={paragraph.id} className="mb-4 text-justify text-nord6">
            {paragraph.text}
          </p>
        ))}
      </div>
      <BackLink />
    </Content>
  );
};

export default About;
