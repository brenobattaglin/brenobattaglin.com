import type { NextPage } from 'next'
import Image from 'next/image'
import Content from './components/content'

const paragraphs = [
  { id: 1, text: 'I was born in the state of Espírito Santo, Brazil. When I was a child, I always loved games and tech.' },
  {
    id: 2, text: 'Growing up, I decided to do a programming technical course, and later, study computer science.'
      + 'At this time, my carrer begins as web developer. '
      + 'Today I have a bachelor in computer science and work as software engineer.',
  }
];

const About: NextPage = () => {
  return (
    <Content>
      <Image
        src="/images/profile.png"
        height={200}
        width={200}
        alt="Breno's profile photo" />
      <div className="mt-16 mb-4 p-3 ">
        {
          paragraphs.map(
            paragraph => (
              <p key={paragraph.id} className="mb-4 text-justify text-nord6">{paragraph.text}</p>
            )
          )
        }
      </div>
    </Content>
  )
}

export default About
