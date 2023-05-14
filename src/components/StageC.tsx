import kayetanna from "../assets/logo_kayetanna.png"
import jaugestemps from "../assets/jaugestemps2.png"
import petsitter from "../assets/petsitter.png"
import petsitter2 from "../assets/petsitter2.png"

const StageC = () => {
    return (
        <div className="container mx-auto text-ternary-light text-sm md:text-lg">
            <div className="text-center">
                <h1 className="text-2xl md:text-3xl xl:text-4xl mt-10 md:mt-20">
                    Stage Professionnel
                </h1>
                <p className="mt-14">
                    Durant ma formation, j'ai eu la chance d'intégrer l'entreprise <span className="text-indigo-300">Kayetanna</span> pour effectuer mon stage de 8 semaines.
                </p>
            </div>
            <div className="text-center">
                <h1 className="text-2xl md:text-3xl xl:text-4xl mt-16 md:mt-20">
                    Qui est Kayetanna ?
                </h1>
                <p className="mt-14">
                    Kayetanna est une agence de <span className="text-indigo-300">développement</span> d'applications <span className="text-indigo-300">web</span> et <span className="text-indigo-300">mobile</span> créée et dirigée par Camille GANZIN depuis avril 2022.
                </p>
                <a href="https://kayetanna.com/">
                    <img src={kayetanna} alt="Logo Kayetanna" className="mx-auto mt-10 w-1/6" />
                </a>
            </div>
            <div>
                <h1 className="text-2xl text-center md:text-3xl xl:text-4xl mt-10 md:mt-20">
                    Mon expérience
                </h1>
                <p className="mt-14">
                    Pendant ce stage, j'ai eu majoritairement 2 missions :
                </p>
                <ul className="list-disc text-indigo-300 ml-20 mt-4">
                    <li>Retro-engineering PHP</li>
                    <li>Développement d'application web React (+ documentations)</li>
                </ul>
            </div>
            <div>
                <h1 className="text-2xl text-center md:text-3xl xl:text-4xl mt-10 md:mt-20">
                    Retro-engineering PHP
                </h1>
                <p className="mt-14">
                    Le but de la mission était de <span className="text-indigo-300">prendre en main</span> le <span className="text-indigo-300">codebase</span> d'un CMS complexe et d'<span className="text-indigo-300">analyser</span> une fonctionnalité afin de trouver la provenance d'un <span className="text-indigo-300">dysfonctionnement</span>.
                </p>
            </div>
            <div>
                <h1 className="text-2xl text-center md:text-3xl xl:text-4xl mt-10 md:mt-20">
                    Jauges Temps
                </h1>
                <p className="mt-14">
                    Jauges Temps est une <span className="text-indigo-300">application web</span> ayant pour objectif de gérer le temps de travail à attribuer à nos différents projets.
                    <br />
                    Ce projet était une approche à l'utilisation du <span className="text-indigo-300">Framework</span> Javascript <span className="text-indigo-300">React</span>.
                </p>
                <ul className="list-disc ml-10 mt-4 text-indigo-300">
                    <p className="text-ternary-light">Technologies utilisées :</p>
                    <li className="ml-20 mt-2">React</li>
                    <li className="ml-20 mt-2">Sass</li>
                    <li className="ml-20 mt-2">Firebase (auth, firestore, host)</li>
                    <li className="ml-20 mt-2">ViteJS</li>
                </ul>
                <img src={jaugestemps} alt="Application Jauges Temps" className="mx-auto w-1/3 mt-10 rounded-xl shadow-md shadow-indigo-400" />
            </div>
            <div>
                <h1 className="text-2xl text-center md:text-3xl xl:text-4xl mt-10 md:mt-20">
                    Pet Sitter
                </h1>
                <p className="mt-14">
                    Pet Sitter est une <span className="text-indigo-300">application web</span> ayant pour objectif de mettre en relation des propriétaires de chien avec des pet sitters.
                    <br />
                    Ce projet a été conçu en <span className="text-indigo-300">mobile first</span> et visait à utiliser nos connaissances sur React fraichement acquises.
                </p>
                <ul className="list-disc ml-10 mt-4 text-indigo-300">
                    <p className="text-ternary-light">Technologies utilisées :</p>
                    <li className="ml-20 mt-2">React</li>
                    <li className="ml-20 mt-2">Sass</li>
                    <li className="ml-20 mt-2">Firebase (auth, firestore, host)</li>
                    <li className="ml-20 mt-2">ViteJS</li>
                    <li className="ml-20 mt-2">EmailJS</li>
                </ul>
                <img src={petsitter} alt="Application Pet Sitter" className="mx-auto mt-10 w-1/2 rounded-xl" />
                <img src={petsitter2} alt="Application Pet Sitter" className="mx-auto mt-20 w-1/4 rounded-xl" />
            </div>
            <div>
                <h1 className="text-2xl text-center md:text-3xl xl:text-4xl mt-10 md:mt-20">
                    Compétences acquises
                </h1>
                <div className="text-center text-sm grid grid-cols-2 divide-x my-20">
                    <div>
                        <ul className="mr-2">
                            <h3 className="text-xl font-semibold">Hard skills</h3>
                            <li className="mt-6">
                                Environnement de développement (<span className="text-indigo-300">CRA / ViteJS / Firebase / npm</span>)
                            </li>
                            <li className="mt-6">
                                Langages de programmation (<span className="text-indigo-300">React / Sass</span>)
                            </li>
                            <li className="mt-6">
                                Travail collaboratif (<span className="text-indigo-300">Notion / Slack / Figma / GitHub / Miro / GoogleMeet</span>)
                            </li>
                        </ul>
                    </div>
                    <div>
                        <ul className="ml-2">
                            <h3 className="text-xl font-semibold">Soft skills</h3>
                            <li className="mt-6">
                                Travailler en <span className="text-indigo-300">autonomie</span> / en <span className="text-indigo-300">équipe</span>
                            </li>
                            <li className="mt-6">
                                <span className="text-indigo-300">Échanger</span> et être <span className="text-indigo-300">force de proposition</span> sur l'évolution des applications
                            </li>
                            <li className="mt-6">
                                <span className="text-indigo-300">Conception</span> et <span className="text-indigo-300">gestion</span> d'un projet from scratch
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div>
                <h1 className="text-2xl text-center md:text-3xl xl:text-4xl mt-10 md:mt-20">
                    Bilan
                </h1>
                <p className="mt-14">
                    Cette expérience a été très enrichissante, autant sur le <span className="text-indigo-300">travail en entreprise</span> que sur les <span className="text-indigo-300">technologies</span> que j'ai eu l'occasion d'aborder. <br />
                    Je ressors grandi de cette expérience qui a validé pour mon <span className="text-indigo-300">projet professionnel</span> de poursuivre dans la voie du <span className="text-indigo-300">développement web</span>.
                </p>
            </div>
        </div>
    )
}

export default StageC