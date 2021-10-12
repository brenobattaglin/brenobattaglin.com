import Link from 'next/link';

const NavBar = () => {
    return (
        <div>
            <Link href='/'>
                <a>About me</a>
            </Link>
            <a href='mailto:breno.battaglin@icloud.com'>Contact</a>
            <Link href='/linktree'>
                <a>Linktree</a>
            </Link>
        </div>
    );
};

export default NavBar;
