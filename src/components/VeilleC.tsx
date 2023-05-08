import CRA from "../assets/CRA.png"
import Vite from "../assets/Vite.png"
import CRAvsVite from "../assets/CRAvsVite.png"

const VeilleC = () => {
    return (
        <div className="container mx-auto text-ternary-light">
            <div>
                <div>
                    <h1 className="text-2xl md:text-3xl xl:text-4xl text-center mt-10 md:mt-20">
                        Qu'est-ce que la veille technologique ?
                    </h1>
                    <p className="text-sm mt-14 text-center md:text-lg">
                        La veille technologique consiste à <span className="text-indigo-300">s'informer</span> sur les dernières technologies / nouveautés sur votre secteur d'activité.
                    </p>
                    <h1 className="text-2xl md:text-3xl xl:text-4xl text-center mt-16 md:mt-20">
                        Pourquoi effectuer une veille ?
                    </h1>
                    <p className="text-sm mt-14 text-center md:text-lg">
                        La veille est un élément essentiel pour un développeur, il faut se tenir au courant des failles de <span className="text-indigo-300">sécurité</span>, des <span className="text-indigo-300">bonnes pratiques</span>, des technologies qui évoluent sans cesse.
                    </p>
                </div>
                <div className="grid grid-cols-2 divide-x my-20">
                    <div>
                        <ul className="text-center mr-2">
                            <h3 className="text-xl font-semibold">Sujets de veille</h3>
                            <li className="text-sm text-indigo-300 mt-6">
                                Environnement de développement (ViteJS / SWC)
                            </li>
                            <li className="text-sm text-indigo-300 mt-6">
                                Langages de programmation (React / TypeScript / Tailwind CSS)
                            </li>
                            <li className="text-sm text-indigo-300 mt-6">
                                Hardware (évolution CPU / GPU)
                            </li>
                        </ul>
                    </div>
                    <div>
                        <ul className="ml-2 text-center">
                            <h3 className="text-xl font-semibold">Outils de veille</h3>
                            <li className="text-sm text-indigo-300 mt-6">
                                Feedly
                            </li>
                            <li className="text-sm text-indigo-300 mt-6">
                                LinkedIn / échanges (amis, collègues, stackoverflow)
                            </li>
                            <li className="text-sm text-indigo-300 mt-6">
                                Cours en ligne (openclassrooms / youtube)
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="text-center">
                    <h1 className="text-2xl md:text-3xl xl:text-4xl mt-20">
                        Exemple de veille
                    </h1>
                    <div className="text-sm mt-14 md:text-lg">
                        <p>
                            Lors de mon stage dans l'entreprise <span className="text-indigo-300">Kayetanna</span> j'ai eu
                            l'occasion de pratiquer du ReactJS et donc de mettre en place un environnement de développement web.
                        </p>
                        <p className="mt-14">
                            Pour créer mon application web j'ai utilisé l'outil <span className="text-indigo-300">CRA</span> (Create React App)
                            qui permet de créer le squelette du code et d'apporter des outils comme Webpack Babel ESLint pour optimiser l'expérience de développement. <br />
                            Mais en effectuant ma veille technologique j'ai appris l'existence de <span className="text-indigo-300">ViteJS</span>,
                            un outil plus récent et bien plus <span className="text-indigo-300">performant</span>.
                        </p>
                        <p className="mt-14">
                            Comme on peut le voir sur les schémas ci-dessous, <span className="text-indigo-300">CRA</span>, à chaque requête, va rebuild et reload <span className="text-indigo-300">toute la page</span> et ses modules. <br />
                            À contrario, <span className="text-indigo-300">Vite</span> n'aura pas besoin de rebuild, il fonctionne par routes et sépare le code, ainsi les modules qui ne
                            sont pas modifiés vont retourner un code status (304) et ne seront pas rechargés. <br />
                            Vite va donc transpiler de manière dynamique uniquement le <span className="text-indigo-300">nécessaire</span>, ce qui crée une <span className="text-indigo-300">grande différence de performance</span>.
                        </p>
                    </div>
                </div>
                <div className="my-10 mx-auto w-3/4 md:w-1/2">
                    <img src={CRA} alt="Schéma du fonctionnement de Create React App" />
                    <caption className="w-72 h-full text-left"><i>Schéma CRA <br /> (source : <a className="underline" href="https://vitejs.dev/guide/why.html" target="_blank">documentation ViteJS</a>)</i></caption>
                </div>
                <div className="my-10 mx-auto w-3/4 md:w-1/2">
                    <img src={Vite} alt="Schéma du fonctionnement de Vite" />
                    <caption className="w-72 h-full text-left"><i>Schéma Vite <br /> (source : <a className="underline" href="https://vitejs.dev/guide/why.html" target="_blank">documentation ViteJS</a>)</i></caption>
                </div>
                <p className="text-sm mt-14 text-center md:text-lg">
                    Voici une <span className="text-indigo-300">démonstration</span> d'un projet de stage que j'ai <span className="text-indigo-300">migré</span> de Create React App vers ViteJS.
                    <br />
                    CRA importe bien plus de modules à l'<span className="text-indigo-300">initialisation</span>.
                    <br />
                    Le poids du projet a presque été divisé par <span className="text-indigo-300">10</span>.
                </p>
                <div className="my-10 mx-auto w-3/4 md:w-1/2">
                    <img src={CRAvsVite} alt="CRA vs Vite (poids)" />
                    <caption className="w-52 text-left"><i>CRA vs Vite</i></caption>
                </div>
            </div>
        </div>
    )
}

export default VeilleC