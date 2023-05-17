const Footer = () => {
    return (
        <div className="container mx-auto">
            <div className="pt-20 sm:pt-30 pb-8 mt-32 border-t-2 border-secondary-dark">
                <div className="flex flex-col justify-center items-center mb-10">
                    <p className="text-3xl sm:text-4xl text-primary-light mb-5">
                        Suivez-moi
                    </p>
                    <ul className="flex gap-4 sm:gap-8">
                        <a href="https://github.com/MelwinC" target="__blank"
                            className="text-gray-400 hover:text-indigo-500 cursor-pointer rounded-lg bg-ternary-dark shadow-sm p-4 duration-300">
                            <i className="text-xl sm:text-2xl md:text-3xl">
                                <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                                </svg>
                            </i>
                        </a>
                        <a href="https://www.linkedin.com/in/melwin-chenu-935a59205/" target="_blank"
                            className="text-gray-400 hover:text-indigo-500 cursor-pointer rounded-lg bg-ternary-dark shadow-sm p-4 duration-300">
                            <i className="text-xl sm:text-2xl md:text-3xl">
                                <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                                    <rect x="2" y="9" width="4" height="12"></rect>
                                    <circle cx="4" cy="4" r="2"></circle>
                                </svg>
                            </i>
                        </a>
                    </ul>
                </div>
                <div className="font-medium flex justify-center text-center">
                    <div className="text-lg text-ternary-light">
                        <a href="https://github.com/MelwinC/portfolio" target="__blank" className="hover:underline hover:text-indigo-300 duration-300">
                            React(TSX) & Tailwind CSS Portfolio
                        </a>
                        <p className="text-base">
                            © 2023 Melwin Chenu. Tous droits réservés.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer