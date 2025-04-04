import Link from "next/link";

export default function Header(){
    const linkStyling = "p-1 m-2 text-xl hover: underline";
    return(
        <header
            className="flex justify-between items-center h-20 bg-cover bg-center"
            style={{ backgroundImage: "url(/photo-1601370552761-d129028bd833.jpg)" }}
        >
            <h2 className="text-4xl font-semibold p-4">The Weathery Weather</h2>
            <nav className="p-2 m-4">
                <Link href="/" className="p-1 m-2 text-xl hover:underline">
                    Home
                </Link>
                <Link href="/about" className={linkStyling}>
                    About
                </Link>
            </nav>
        </header>
    );
}