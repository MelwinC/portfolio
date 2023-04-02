import { useState } from "react";
import menuLogo from "../assets/menu.svg"
import crossLogo from "../assets/cross.svg"
import logo from "../assets/logo.png"

const Navbar = () => {

    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const toggleNav = () => {
        setIsMenuOpen(!isMenuOpen);
    }
    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    }

    const toggleDropdownOpen = () => {
        setIsDropdownOpen(true)
    }
    const toggleDropdownClose = () => {
        setIsDropdownOpen(false)
    }

    const menuImgSrc = isMenuOpen ? crossLogo : menuLogo;
    const ariaExpanded = isMenuOpen ? "true" : "false";
    const toggledMenuClass = isMenuOpen ? "" : "-translate-y-full";

    return (
        <div className="h-20 bg-zinc-800">
            <header className="bg-neutral-200 z-50 fixed top-0 w-full shadow">
                <nav
                    className="bg-neutral-200  max-w-5xl mx-auto font-poppins p-6 flex items-center justify-between"
                >
                    <a
                        href="/"
                        className="flex"
                        aria-label="Page d'accueil du portfolio"
                    >
                        <img
                            src={logo}
                            className="hidden md:w-7 md:inline md:mr-4"
                            alt=""
                        />
                        <span aria-hidden="true" className="text-lg lg:text-xl">
                            Melwin <strong>C<span className="text-blue-900">.</span></strong>
                        </span>
                    </a>
                    <button
                        aria-label="toggle button"
                        aria-expanded={ariaExpanded}
                        className="cursor-pointer w-7 md:hidden"
                        onClick={toggleNav}
                    >
                        <img src={menuImgSrc} alt="" className="text-white" />
                    </button>
                    <ul
                        className={`w-full absolute top-full left-0 ${toggledMenuClass} -z-10
                        bg-neutral-200 border-t
                        text-black border-b border-neutral-300 flex flex-col items-center
                        md:static md:z-10 md:w-min md:transform-none md:border-none md:flex-row`}
                    >
                        <li className="py-4 md:py-0 md:mr-6">
                            <a
                                href="/profil"
                                className="text-sm uppercase font-semibold w-full hover:text-blue-900"
                            >
                                Profil
                            </a>
                        </li>
                        {/* <!-- dropdown --> */}
                        <li className="py-4 md:py-0 md:mr-6">
                            <div
                                className="text-sm uppercase font-semibold w-full hover:text-blue-900 "
                                onMouseEnter={toggleDropdownOpen}
                                onMouseLeave={toggleDropdownClose}
                                onClick={toggleDropdown}
                            >
                                <a
                                    className="flex m-auto items-center justify-center hover:cursor-pointer"
                                >
                                    Formation
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-caret-down-fill" viewBox="0 0 16 16">
                                        <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z" />
                                    </svg>
                                </a>
                                {isDropdownOpen && (
                                    <ul className="right-0 p-2 bg-neutral-200 rounded-md shadow items-center md:absolute md:right-auto">
                                        <li>
                                            <a
                                                href="/btssio"
                                                className="flex p-2 font-medium text-zinc-600 rounded-md  hover:bg-zinc-300 hover:text-black"
                                            >Présentation</a>
                                        </li>
                                        <li>
                                            <a
                                                href="/competences"
                                                className="flex p-2 font-medium text-zinc-600 rounded-md  hover:bg-zinc-300 hover:text-black"
                                            >Compétences</a>
                                        </li>
                                        <li>
                                            <a
                                                href="/projets"
                                                className="flex p-2 font-medium text-zinc-600 rounded-md  hover:bg-zinc-300 hover:text-black"
                                            >Projets</a>
                                        </li>
                                        <li>
                                            <a
                                                href="/stage"
                                                className="flex p-2 font-medium text-zinc-600 rounded-md  hover:bg-zinc-300 hover:text-black"
                                            >Stage</a>
                                        </li>
                                        <li>
                                            <a
                                                href="/veille"
                                                className="flex p-2 font-medium text-zinc-600 rounded-md  hover:bg-zinc-300 hover:text-black"
                                            >Veille</a>
                                        </li>
                                    </ul>
                                )}
                            </div>
                        </li>
                        {/* <!-- dropdown --> */}
                        <li className="py-4 md:py-0 md:mr-6">
                            <a
                                // TODO link
                                href="/test"
                                className="text-sm uppercase font-semibold w-full hover:text-blue-900"
                            >
                                Test
                            </a>
                        </li>
                        <li className="py-4 md:py-0 md:mr-6">
                            <a
                                href="/contact"
                                className="text-sm uppercase font-semibold w-full hover:text-blue-900"
                            >
                                Contact
                            </a>
                        </li>

                    </ul>
                </nav>
            </header>
        </div>
    )
}
export default Navbar