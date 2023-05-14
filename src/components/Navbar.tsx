import { useState } from "react";
import logo from "../assets/mc_logo.png"

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

    const ariaExpanded = isMenuOpen ? "true" : "false";
    const toggledMenuClass = isMenuOpen ? "" : "-translate-y-full";

    return (
        <div className="h-20">
            <header className="bg-primary-dark text-secondary-light z-50 fixed top-0 w-full shadow">
                <nav
                    className="bg-primary-dark text-secondary-light mx-auto font-poppins p-6 flex items-center justify-between"
                >
                    <a
                        href="/"
                        className="flex"
                        aria-label="Page d'accueil du portfolio"
                    >
                        <img
                            src={logo}
                            className="hidden md:w-9 md:inline md:mr-4 bg-ternary-dark rounded-md p-1"
                            alt=""
                        />
                        <span aria-hidden="true" className="text-lg lg:text-2xl">
                            Melwin <strong>C<span className="text-indigo-500">.</span></strong>
                        </span>
                    </a>
                    <button
                        aria-label="toggle button"
                        aria-expanded={ariaExpanded}
                        className="cursor-pointer w-7 md:hidden text-secondary-light"
                        onClick={toggleNav}
                    >
                        {isMenuOpen ?
                            <i>
                                <svg stroke="currentColor" height="32" width="32" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" data-name="Layer 2">
                                    <path d="m17.854 7.146a.5.5 0 0 0 -.708 0l-4.646 4.647-4.646-4.647a.5.5 0 0 0 -.708.708l4.647 4.646-4.647 4.646a.5.5 0 0 0 .708.708l4.646-4.647 4.646 4.647a.5.5 0 0 0 .708-.708l-4.647-4.646 4.647-4.646a.5.5 0 0 0 0-.708z" />
                                </svg>
                            </i>
                            :
                            <i>
                                <svg stroke="currentColor" xmlns="http://www.w3.org/2000/svg" width="32" height="32" className="bi bi-list" viewBox="0 0 16 16">
                                    <path fillRule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z" />
                                </svg>
                            </i>
                        }
                    </button>
                    <ul
                        className={`w-full absolute top-full left-0 ${toggledMenuClass} -z-10
                        bg-primary-dark
                        text-secondary-light border-b border-secondary-light flex flex-col items-center
                        md:static md:z-10 md:w-min md:transform-none md:border-none md:flex-row`}
                    >
                        <li className="py-4 md:py-0 md:mr-6">
                            <a
                                href="/projets"
                                className="text-sm uppercase font-medium w-full hover:text-indigo-300"
                            >
                                Projets
                            </a>
                        </li>
                        <li className="py-4 md:py-0 md:mr-6">
                            <a
                                href="/veille"
                                className="text-sm uppercase font-medium w-full hover:text-indigo-300"
                            >
                                Veille
                            </a>
                        </li>
                        {/* <!-- dropdown --> */}
                        <li className="py-4 md:py-0 md:mr-6">
                            <div
                                className="text-sm uppercase font-medium w-full hover:text-indigo-300 "
                                onMouseEnter={toggleDropdownOpen}
                                onMouseLeave={toggleDropdownClose}
                                onClick={toggleDropdown}
                            >
                                <a
                                    className="flex m-auto items-center justify-center hover:cursor-pointer"
                                >
                                    Formation
                                    <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" fill="currentColor" className="ml-1 text-indigo-500" viewBox="0 0 16 16">
                                        <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z" />
                                    </svg>
                                </a>
                                {isDropdownOpen && (
                                    <ul className="right-0 p-2 bg-neutral-200 rounded-md shadow items-center md:absolute md:right-auto">
                                        <li>
                                            <a
                                                href="/presentation"
                                                className="flex p-2 font-medium text-zinc-600 rounded-md  hover:bg-zinc-300 hover:text-black"
                                            >Présentation</a>
                                        </li>
                                        <li>
                                            <a
                                                href="/preuves"
                                                className="flex p-2 font-medium text-zinc-600 rounded-md  hover:bg-zinc-300 hover:text-black"
                                            >Preuves</a>
                                        </li>
                                        <li>
                                            <a
                                                href="/stage"
                                                className="flex p-2 font-medium text-zinc-600 rounded-md  hover:bg-zinc-300 hover:text-black"
                                            >Stage</a>
                                        </li>
                                    </ul>
                                )}
                            </div>
                        </li>
                        {/* <!-- dropdown --> */}
                        <li className="py-4 md:py-0 md:mr-6">
                            <a
                                href="/contact"
                                className="text-sm uppercase font-medium w-full hover:text-indigo-300"
                            >
                                Me contacter
                            </a>
                        </li>

                    </ul>
                </nav>
            </header>
        </div>
    )
}
export default Navbar