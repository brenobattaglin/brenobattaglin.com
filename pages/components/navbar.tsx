import Link from 'next/link';

const NavBar = () => {
    return (
        <div className="container mx-auto w-screen space-x-4 text-center pt-3">
            <Link href='/' >
                <a className="inline align-middle hover:text-blue-400">Home</a>
            </Link>
            <Link href='/about' >
                <a className="inline align-middle hover:text-blue-400">About</a>
            </Link>
            <a href='mailto:breno.battaglin@icloud.com' className="inline align-middle hover:text-blue-400">Contact</a>
            <Link href='/linktree'>
                <a className="inline align-middle hover:text-blue-400">Linktree</a>
            </Link>
        </div>
    );
};

export default NavBar;
