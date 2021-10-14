import Link from 'next/link';

const NavBar = () => {
    return (
        <div className="container mx-auto w-screen space-x-4 text-center">
            <Link href='/' >
                <a className="inline align-middle">Home</a>
            </Link>
            <Link href='/about' >
                <a className="inline align-middle">About me</a>
            </Link>
            <a href='mailto:breno.battaglin@icloud.com' className="inline align-middle">Contact</a>
            <Link href='/linktree'>
                <a className="inline align-middle">Linktree</a>
            </Link>
        </div>
    );
};

export default NavBar;
