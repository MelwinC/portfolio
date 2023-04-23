import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import portfolioImg from "../assets/portfolio.png"
import jaugesTempsImg from "../assets/jaugestemps.png"
import petSitterImg from "../assets/petsitter.png"
import promedImg from "../assets/promed.png"

const Projets = () => {
    return (
        <div className="bg-primary-dark font-poppins min-h-screen">
            <Navbar />
            <div className="container mx-auto">
                <section className="py-5 sm:py-10 mt-14 ">
                    <div className="text-center">
                        <p className="font-medium text-2xl sm:text-4xl mb-1 text-ternary-light">
                            Projets
                        </p>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 mt-32 sm:gap-10">
                        <div>
                            <a aria-label="Projet"
                                href="https://melwinchenu.fr/" target="_blank">
                                <div className="rounded-xl shadow-lg hover:shadow-xl cursor-pointer mb-10 sm:mb-0 bg-ternary-dark">
                                    <div>
                                        <img
                                            src={portfolioImg}
                                            className="rounded-t-xl w-full" alt="Image projet portfolio" />
                                    </div>
                                    <div className="text-center px-4 py-6">
                                        <p className="font-medium text-lg md:text-xl text-ternary-light mb-2">
                                            Portfolio
                                        </p>
                                        <span className="text-lg text-ternary-light">
                                            Web Application
                                        </span>
                                        <hr className="m-2" />
                                        <p className="text-base text-ternary-light">
                                            <i>Vite SWC - TSX - Tailwind CSS</i>
                                        </p>
                                    </div>
                                </div>
                            </a>
                        </div>
                        <div>
                            <a aria-label="Projet"
                                href="https://pet-sitter-ea7df.web.app/" target="_blank">
                                <div className="rounded-xl shadow-lg hover:shadow-xl cursor-pointer mb-10 sm:mb-0 bg-ternary-dark">
                                    <div>
                                        <img
                                            src={petSitterImg}
                                            className="rounded-t-xl w-full" alt="Image projet pet-sitter" />
                                    </div>
                                    <div className="text-center px-4 py-6">
                                        <p className="font-medium text-lg md:text-xl text-ternary-light mb-2">
                                            Pet Sitter
                                        </p>
                                        <span className="text-lg text-ternary-light">
                                            Web Application
                                        </span>
                                        <hr className="m-2" />
                                        <p className="text-base text-ternary-light">
                                            <i>Vite - JSX - Firebase - SCSS</i>
                                        </p>
                                    </div>
                                </div>
                            </a>
                        </div>
                        <div>
                            <a aria-label="Projet"
                                href="https://jauges-temps.web.app/private" target="_blank">
                                <div className="rounded-xl shadow-lg hover:shadow-xl cursor-pointer mb-10 sm:mb-0 bg-ternary-dark">
                                    <div>
                                        <img
                                            src={jaugesTempsImg}
                                            className="rounded-t-xl w-full" alt="Image projet working-time" />
                                    </div>
                                    <div className="text-center px-4 py-6">
                                        <p className="font-medium text-lg md:text-xl text-ternary-light mb-2">
                                            Work in Time
                                        </p>
                                        <span className="text-lg text-ternary-light">
                                            Web Application
                                        </span>
                                        <hr className="m-2" />
                                        <p className="text-base text-ternary-light">
                                            <i>Vite - JSX - Firebase - SCSS</i>
                                        </p>
                                    </div>
                                </div>
                            </a>
                        </div>
                        <div>
                            <a aria-label="Projet"
                                href="https://promo23.sio56.org/melwin/E5/Projet%20PHP/projet%20Live/" target="_blank">
                                <div className="rounded-xl shadow-lg hover:shadow-xl cursor-pointer mb-10 sm:mb-0 bg-ternary-dark">
                                    <div>
                                        <img
                                            src={promedImg}
                                            className="rounded-t-xl w-full" alt="Image projet working-time" />
                                    </div>
                                    <div className="text-center px-4 py-6">
                                        <p className="font-medium text-lg md:text-xl text-ternary-light mb-2">
                                            Promed
                                        </p>
                                        <span className="text-lg text-ternary-light">
                                            Web Application
                                        </span>
                                        <hr className="m-2" />
                                        <p className="text-base text-ternary-light">
                                            <i>PHP - JavaScript - SCSS</i>
                                        </p>
                                    </div>
                                </div>
                            </a>
                        </div>
                    </div>
                </section>
            </div >
            <Footer />
        </div >
    )
}

export default Projets
