import { Link } from "react-router-dom";
const Navbar = () =>{
    return (
        <header className="flex flex-col md:flex-row gap-5 justify-between px-5 items-center shadow-lg py-2">
            <div className="logo">
             <img src="https://picsum.photos/id/10/100/100" alt="" className="h-16 w-16" />
            </div>
            <nav className="flex gap-5 flex-col md:flex-row items-center">
                <Link to={`/home`}>Home</Link>
                <Link to={`/about-us`}>About Us</Link>
                <Link to={`/services`}>Services</Link>
                <Link to={`/blog`}>Blog</Link>
                <Link to={`/gallery`}>Gallery</Link>
                <Link to={`/contact`} className="bg-purple-800 px-5 py-2 text-white rounded hover:bg-red-600 transition duration-200 ease-in-out">Contact</Link>

            </nav>
        </header>
    )
}
export default Navbar;