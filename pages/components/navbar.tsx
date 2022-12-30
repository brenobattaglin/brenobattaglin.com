import Link from "next/link";

const links = [
  { id: 1, route: "/", label: "Home" },
  { id: 2, route: "/about", label: "About" },
  { id: 3, route: "/linktree", label: "Linktree" },
];

const NavBar = () => {
  return (
    <div className="container mx-auto w-screen space-x-4 text-center pt-3">
      {links.map((link) => (
        <Link
          href={link.route}
          key={link.id}
          className="inline align-middle font-light text-nord6 hover:text-nord8"
        >
          {link.label}
        </Link>
      ))}
    </div>
  );
};

export default NavBar;
