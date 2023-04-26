import Footer from "../components/Footer"
import Navbar from "../components/Navbar"

const Profil = () => {
    return (
        <div className="bg-primary-dark font-poppins min-h-screen">
            <Navbar />
            <div className="container mx-auto text-ternary-light">
                <div>
                    <h1 className="text-2xl lg:text-3xl xl:text-4xl text-center mt-20">
                        Qui suis-je ?
                    </h1>
                    <p className="text-lg mt-14 text-center">
                        Je m'appelle <span className="text-indigo-300">Melwin Chenu</span>, j'ai 23 ans, et j'ai fais le choix de devenir <span className="text-indigo-300">développeur</span>, c'est pourquoi je suis actuellement en BTS SIO SLAM.
                    </p>
                </div>
                <div className="mt-20">
                    <h1 className="text-2xl lg:text-3xl xl:text-4xl text-center">
                        Mon parcours
                    </h1>
                    <p className="text-lg mt-14">
                        J'ai toujours été <span className="text-indigo-300">passionné</span> par l'informatique. <br />
                        J'ai <span className="text-indigo-300">décidé</span> de rejoindre cette voie dès ma terminale en choisissant l'option <span className="text-indigo-300">ISN</span> (Informatique et Sciences du Numérique).<br />
                        Cette option fût mon entrée dans le monde du <span className="text-indigo-300">développement</span>.<br />
                        J'ai débuté avec l'<span className="text-indigo-300">HTML5</span>, le <span className="text-indigo-300">CSS3</span> et le <span className="text-indigo-300">JS</span>.
                    </p>
                    <p className="text-lg mt-6">
                        Ayant obtenu mon Bac S, j'ai poursuivi en effectuant un service civique où j'avais pour mission d'assister les <span className="text-indigo-300">utilisateurs</span> à l'utilisation des <span className="text-indigo-300">outils numériques</span>, mission effectuée à Pôle Emploi.<br />
                        Une expérience enrichissante qui m'a appris le monde du travail.
                    </p>
                    <p className="text-lg mt-6">
                        Étant aussi intéressé par l'environnement <span className="text-indigo-300">système / hardware</span>, j'ai suivi une formation de TAI (Technicien d'Assistance en Informatique).
                    </p>
                    <p className="text-lg mt-6">
                        Ce qui m'a amené à réfléchir sur la filière dans laquelle je voulais poursuivre, 2 choix s'offraient à moi :
                        <ul className="list-disc mt-6 ml-24">
                            <li>BTS SIO <span className="text-indigo-300">SISR</span></li>
                            <li>BTS SIO <span className="text-indigo-300">SLAM</span></li>
                        </ul>
                    </p>
                    <p className="text-lg mt-6">
                        Mon choix s'est porté sur l'option <span className="text-indigo-300">SLAM</span>, j'ai donc saisi l'occasion de rejoindre cette formation au Greta de Vannes.
                    </p>
                </div>
                <div className="mt-20">
                    <h1 className="text-2xl lg:text-3xl xl:text-4xl text-center mt-20">
                        Mes compétences
                    </h1>
                    <p className="text-lg mt-14">
                        Dans le cadre de la formation, grâce à l'autoformation et mes expériences passées, j'ai développé des compétences en lien avec le métier. <br />

                    </p>
                    <div className="grid grid-cols-2 divide-x mt-10 text-center">
                        <div>
                            <ul className="mt-4">
                                <h3 className="text-lg font-semibold">Développement WEB</h3>
                                <li className="text-indigo-300 mt-2">HTML5, CSS3, Javascript, ReactJS, PHP</li>
                            </ul>
                            <ul className="mt-4">
                                <h3 className="text-lg font-semibold">Programmation</h3>
                                <li className="text-indigo-300 mt-2"></li>
                                <li className="text-indigo-300 mt-2">Java, Python, Algorithmie, Modélisation, Microsoft SQL Server</li>
                            </ul>
                            <ul className="mt-4">
                                <h3 className="text-lg font-semibold mt-4">Base de données</h3>
                                <li className="text-indigo-300 mt-2">MySQL, Microsoft SQL Server, DAO, UML</li>
                            </ul>
                        </div>
                        <div>
                            <ul className="mt-4">
                                <h3 className="text-lg font-semibold">Serveurs</h3>
                                <li className="text-indigo-300 mt-2">LAMP, Win Server, VM, NAS, Bash</li>
                            </ul>
                            <ul className="mt-4">
                                <h3 className="text-lg font-semibold">CyberSécurité</h3>
                                <li className="text-indigo-300 mt-2">Secure coding, RGPD, Hacking, SSL</li>
                            </ul>
                            <ul className="mt-4">
                                <h3 className="text-lg font-semibold">Travail collaboratif</h3>
                                <li className="text-indigo-300 mt-2">Git, GitHub, Slack, Notion, NAS, Cloud</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div>
                    <h1 className="text-2xl lg:text-3xl xl:text-4xl text-center mt-20">
                        Mon parcours professionnel
                    </h1>
                    <p className="text-lg mt-14 text-center">
                        À court terme, j'envisage de poursuivre les études vers un diplôme de niveau 6 dans le <span className="text-indigo-300">développement WEB</span><br />
                        Je suis tout particulièrement intéressé par la technologie <span className="text-indigo-300">ReactJS</span>.<br />
                        <img src="" alt="" />
                        À moyen, long terme je m'imagine compléter mes compétences avec l'apprentissage de <span className="text-indigo-300">NodeJS</span> afin de devenir un <span className="text-indigo-300">développeur Full Stack</span>.
                    </p>
                </div>
            </div>
            <Footer />
        </div >
    )
}

export default Profil