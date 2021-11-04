import Link from 'next/link';

const NavBar = () => {
    return (
        <div className="container mx-auto w-screen space-x-4 text-center pt-3">
            <Link href='/' >
                <a className="inline align-middle hover:text-nord8">Home</a>
            </Link>
            <Link href='/about' >
                <a className="inline align-middle hover:text-nord8">About me</a>
            </Link>
            <Link href='/linktree'>
                <a className="inline align-middle hover:text-nord8">Linktree</a>
            </Link>
        </div>
    );
};

export default NavBar;
