import portfolioImg from "../assets/portfolio.png";
import jaugesTempsImg from "../assets/jaugestemps.png";
import petSitterImg from "../assets/petsitter.png";
import promedImg from "../assets/promed.png";
import piscineImg from "../assets/piscine.png";

const ProjetsC = () => {
  return (
    <main className="container mx-auto text-ternary-light">
      <section className="py-5 md:py-10 mt-14 ">
        <div className="text-center">
          <p className="text-2xl md:text-4xl">Projets</p>
          <p className="text-lg mt-14 text-center">
            Voici un échantillon des <span className="text-indigo-300">projets</span> sur lesquels j'ai travaillé <span className="text-indigo-300">cette année</span> sur mon temps libre, en stage et en formation.
          </p>
        </div>
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-32 sm:gap-20">
          <article>
            <a
              aria-label="Projet"
              href="https://melwinchenu.fr/"
              target="_blank"
            >
              <div className="rounded-xl shadow-lg hover:shadow-xl cursor-pointer mb-10 sm:mb-0 bg-ternary-dark">
                <div>
                  <img
                    src={portfolioImg}
                    className="rounded-t-xl w-full"
                    alt="Image projet portfolio"
                  />
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
                    <i>Tailwind CSS - Vite SWC - JSX</i>
                  </p>
                </div>
              </div>
            </a>
          </article>
          <article>
            <a
              aria-label="Projet"
              href="https://pet-sitter-ea7df.web.app/"
              target="_blank"
            >
              <div className="rounded-xl shadow-lg hover:shadow-xl cursor-pointer mb-10 sm:mb-0 bg-ternary-dark">
                <div>
                  <img
                    src={petSitterImg}
                    className="rounded-t-xl w-full"
                    alt="Image projet pet-sitter"
                  />
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
                    <i>Vite - JSX - Firebase - SASS</i>
                  </p>
                </div>
              </div>
            </a>
          </article>
          <article>
            <a
              aria-label="Projet"
              href="https://jauges-temps.web.app/private"
              target="_blank"
            >
              <div className="rounded-xl shadow-lg hover:shadow-xl cursor-pointer mb-10 sm:mb-0 bg-ternary-dark">
                <div>
                  <img
                    src={jaugesTempsImg}
                    className="rounded-t-xl w-full"
                    alt="Image projet working-time"
                  />
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
                    <i>Vite - JSX - Firebase - SASS</i>
                  </p>
                </div>
              </div>
            </a>
          </article>
          <article>
            <a
              aria-label="Projet"
              href="https://github.com/MelwinC/projet_Web"
              target="_blank"
            >
              <div className="rounded-xl shadow-lg hover:shadow-xl cursor-pointer mb-10 sm:mb-0 bg-ternary-dark">
                <div>
                  <img
                    src={promedImg}
                    className="rounded-t-xl w-full"
                    alt="Image projet working-time"
                  />
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
                    <i>PHP - JavaScript - SASS</i>
                  </p>
                </div>
              </div>
            </a>
          </article>
          <article>
            <a
              aria-label="Projet"
              href="https://github.com/MelwinC/Piscine"
              target="_blank"
            >
              <div className="rounded-xl shadow-lg hover:shadow-xl cursor-pointer mb-10 sm:mb-0 bg-ternary-dark">
                <div>
                  <img
                    src={piscineImg}
                    className="rounded-t-xl w-full"
                    alt="Image projet working-time"
                  />
                </div>
                <div className="text-center px-4 py-6">
                  <p className="font-medium text-lg md:text-xl text-ternary-light mb-2">
                    Piscine
                  </p>
                  <span className="text-lg text-ternary-light">
                    Java Application
                  </span>
                  <hr className="m-2" />
                  <p className="text-base text-ternary-light">
                    <i>Java - JavaFX - JDBC</i>
                  </p>
                </div>
              </div>
            </a>
          </article>
        </section>
      </section>
    </main>
  );
};

export default ProjetsC;
