import Link from 'next/link';

const links = [
    { route: '/', label: 'Home' },
    { route: '/about', label: 'About' },
    { route: '/linktree', label: 'Linktree' },
];

const NavBar = () => {
    return (
        <div className="container mx-auto w-screen space-x-4 text-center pt-3">
            {
                links.map(
                    (link) => (
                        <Link href={link.route}>
                            <a className="inline align-middle font-light text-nord6 hover:text-nord8">
                                {link.label}
                            </a>
                        </Link>
                    )
                )
            }
        </div>
    );
};

export default NavBar;
