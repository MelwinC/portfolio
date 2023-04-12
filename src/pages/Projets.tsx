import Footer from "../components/Footer"
import Navbar from "../components/Navbar"

const Projets = () => {
    return (
        <div className="bg-primary-dark font-poppins">
            <Navbar />
            <div className="container mx-auto">
                <section className="py-5 sm:py-10 mt-14 ">
                    <div className="text-center">
                        <p className="font-medium text-2xl sm:text-4xl mb-1 text-ternary-light">
                            Projets
                        </p>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-32 sm:gap-10">
                        <div>
                            <a aria-label="Projet"
                                //TODO lien
                                href="">
                                <div className="rounded-xl shadow-lg hover:shadow-xl cursor-pointer mb-10 sm:mb-0 bg-ternary-dark">
                                    <div>
                                        <img
                                            //TODO lien image
                                            src=""
                                            className="rounded-t-xl border-none" alt="Image projet pet-sitter" />
                                    </div>
                                    <div className="text-center px-4 py-6">
                                        <p className="font-medium text-lg md:text-xl text-ternary-light mb-2">
                                            Pet-Sitter
                                        </p>
                                        <span className="text-lg text-ternary-light">
                                            Web Application
                                        </span>
                                    </div>
                                </div>
                            </a>
                        </div>
                        <div>
                            <a aria-label="Projet"
                                //TODO lien
                                href="">
                                <div className="rounded-xl shadow-lg hover:shadow-xl cursor-pointer mb-10 sm:mb-0 bg-ternary-dark">
                                    <div>
                                        <img
                                            //TODO lien image
                                            src=""
                                            className="rounded-t-xl border-none" alt="Image projet portfolio" />
                                    </div>
                                    <div className="text-center px-4 py-6">
                                        <p className="font-medium text-lg md:text-xl text-ternary-light mb-2">
                                            Portfolio
                                        </p>
                                        <span className="text-lg text-ternary-light">
                                            Mobile Application
                                        </span>
                                    </div>
                                </div>
                            </a>
                        </div>
                        <div>
                            <a aria-label="Projet"
                                //TODO lien
                                href="">
                                <div className="rounded-xl shadow-lg hover:shadow-xl cursor-pointer mb-10 sm:mb-0 bg-ternary-dark">
                                    <div>
                                        <img
                                            //TODO lien image
                                            src=""
                                            className="rounded-t-xl border-none" alt="Image projet working-time" />
                                    </div>
                                    <div className="text-center px-4 py-6">
                                        <p className="font-medium text-lg md:text-xl text-ternary-light mb-2">
                                            Working-Time
                                        </p>
                                        <span className="text-lg text-ternary-light">
                                            UI/UX Design
                                        </span>
                                    </div>
                                </div>
                            </a>
                        </div>
                    </div>
                </section>
            </div>
            <Footer />
        </div>
    )
}

export default Projets
