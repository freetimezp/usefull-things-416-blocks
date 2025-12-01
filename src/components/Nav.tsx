import Link from "next/link";

const Nav = () => {
    return (
        <nav>
            <Link href="/">Home</Link>
            <Link href="/colony">Colony</Link>
            <Link href="/gateway">Gateway</Link>
            <Link href="/station">Station</Link>
        </nav>
    );
};

export default Nav;
