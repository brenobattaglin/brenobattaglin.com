import type { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";
import Content from "../components/content";

const subtitles = [
  { id: 1, text: "Computer Scientist" },
  { id: 2, text: "Software Engineer" },
  { id: 3, text: "Minimalist" },
];

const companies = [
  { id: 1, text: "@bmw", url: "https://www.bmw.com/" },
  { id: 2, text: "@mini", url: "https://www.mini.com" },
];

const Home: NextPage = () => {
  return (
    <Content>
      <p className="text-4xl mb-4 text-nord6">Breno Battaglin</p>
      {subtitles.map((subtitle) => (
        <p key={subtitle.id} className="text-base text-nord6">
          {subtitle.text}
        </p>
      ))}
      <div className="mt-4">
        {companies.map((company) => (
          <span key={company.id} className="text-base text-nord6 mr-2">
            <Link href={company.url}>{company.text}</Link>
          </span>
        ))}
      </div>
    </Content>
  );
};

export default Home;
