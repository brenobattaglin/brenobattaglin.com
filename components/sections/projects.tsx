import { LayoutGrid } from '@/components/ui/layout-grid';

const ProjectOne = () => {
  return (
    <div>
      <p className="font-bold md:text-4xl text-xl text-white">
        Project One
      </p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        A description of your first project goes here. Explain what it does,
        the technologies used, and why it matters.
      </p>
    </div>
  );
};

const ProjectTwo = () => {
  return (
    <div>
      <p className="font-bold md:text-4xl text-xl text-white">
        Project Two
      </p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        A description of your second project goes here. Highlight the key
        features and your role in the development process.
      </p>
    </div>
  );
};

const ProjectThree = () => {
  return (
    <div>
      <p className="font-bold md:text-4xl text-xl text-white">
        Project Three
      </p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        A description of your third project goes here. Share the challenges
        you overcame and the impact it had.
      </p>
    </div>
  );
};

const ProjectFour = () => {
  return (
    <div>
      <p className="font-bold md:text-4xl text-xl text-white">
        Project Four
      </p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        A description of your fourth project goes here. Describe the problem
        it solves and the value it provides.
      </p>
    </div>
  );
};

const cards = [
  {
    id: 1,
    content: <ProjectOne />,
    className: "md:col-span-2",
    thumbnail:
      "https://images.unsplash.com/photo-1476231682828-37e571bc172f?q=80&w=3474&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 2,
    content: <ProjectTwo />,
    className: "col-span-1",
    thumbnail:
      "https://images.unsplash.com/photo-1464457312035-3d7d0e0c058e?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 3,
    content: <ProjectThree />,
    className: "col-span-1",
    thumbnail:
      "https://images.unsplash.com/photo-1588880331179-bc9b93a8cb5e?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 4,
    content: <ProjectFour />,
    className: "md:col-span-2",
    thumbnail:
      "https://images.unsplash.com/photo-1475070929565-c985b496cb9f?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

export default function ProjectsSection() {
  return (
    <section className="snap-start h-screen flex items-center justify-center">
      <div className="h-full py-20 w-full px-6">
        <LayoutGrid cards={cards} />
      </div>
    </section>
  );
}
