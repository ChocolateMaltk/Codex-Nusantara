import Link from "next/link"
import { FaDog, FaTree} from "react-icons/fa"

export default function Navbar() {
    return (
        <nav className="navbarffid p-4 sticky top-0 drop-shadow-xl z-10">
            <div className=" mx-auto flex justify-between flex-col sm:flex-row">
                <h1 className="text-3xl font-bold text-white grid place-content-center mb-2 md:mb-0">
                    <Link href="/" className="text-white/90 no-underline hover:text-white navbarhoverfx">Home</Link>
                </h1>
                <div className="flex flex-row justify-center sm:justify-evenly align-middle gap-4 text-white text-4xl lg:text-4xl">
                    <Link className="text-white/75 hover:text-white" href="/faunaindex">
                        <FaDog />
                    </Link>
                    <Link className="text-white/75 hover:text-white" href="/floraindex">
                        <FaTree />
                    </Link>
                    <Link className="text-white/75 hover:text-white no-underline" href="/about">
                        About Us
                    </Link>
                </div>
            </div>
        </nav>
    )
}