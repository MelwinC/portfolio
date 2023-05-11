import TimelineParcoursPro from "../assets/TimelineParcoursPro.png"

const Profil = () => {
    return (
        <div className="bg-primary-dark font-poppins min-h-screen">
            <div className="container mx-auto text-ternary-light">
                <div className="text-center">
                    <h1 className="text-2xl mt-20 md:text-3xl xl:text-4xl">
                        Qui suis-je ?
                    </h1>
                    <p className="text-sm mt-14 md:text-lg">
                        Je m'appelle <span className="text-indigo-300">Melwin Chenu</span>, j'ai 23 ans, et j'ai fait le choix de devenir <span className="text-indigo-300">développeur</span>, c'est pourquoi je suis actuellement en BTS SIO SLAM.
                    </p>
                </div>
                <div className="mt-20">
                    <h1 className="text-2xl md:text-3xl xl:text-4xl text-center">
                        Mon parcours
                    </h1>
                    <p className="text-sm mt-14 md:text-lg">
                        J'ai toujours été <span className="text-indigo-300">passionné</span> par l'informatique. <br />
                        J'ai <span className="text-indigo-300">décidé</span> de rejoindre cette voie dès ma terminale en choisissant l'option <span className="text-indigo-300">ISN</span> (Informatique et Sciences du Numérique).<br />
                        Cette option fût mon entrée dans le monde du <span className="text-indigo-300">développement</span>.<br />
                        J'ai débuté avec l'<span className="text-indigo-300">HTML5</span>, le <span className="text-indigo-300">CSS3</span> et le <span className="text-indigo-300">JS</span>.
                    </p>
                    <img src={TimelineParcoursPro} alt="Schéma parcours professionnel" className="mt-20 mx-auto w-5/6" />
                </div>

                <div className="mt-20">
                    <h1 className="text-2xl md:text-3xl xl:text-4xl text-center mt-20">
                        Mes compétences
                    </h1>
                    <p className="text-sm mt-14 md:text-lg">
                        Dans le cadre de la formation, grâce à l'autoformation et mes expériences passées, j'ai développé des compétences en lien avec le métier. <br />
                    </p>
                    <div className="grid grid-cols-2 divide-x my-14">
                        <div className="text-center">
                            <ul className="mr-2">
                                <h3 className="text-lg font-semibold">Développement WEB</h3>
                                <li className="text-sm text-indigo-300 mt-6">HTML5, CSS3, Javascript, ReactJS, PHP</li>
                            </ul>
                            <ul className="mr-4 mt-8">
                                <h3 className="text-lg font-semibold">Programmation</h3>
                                <li className="text-sm text-indigo-300 mt-6">Java, Python, Algorithmie, Modélisation, Microsoft SQL Server</li>
                            </ul>
                            <ul className="mr-2 mt-8">
                                <h3 className="text-lg font-semibold">Base de données</h3>
                                <li className="text-sm text-indigo-300 mt-6">MySQL, Microsoft SQL Server, DAO, UML</li>
                            </ul>
                        </div>
                        <div className="text-center">
                            <ul className="ml-2">
                                <h3 className="text-lg font-semibold">Serveurs</h3>
                                <li className="text-sm text-indigo-300 mt-6">LAMP, Win Server, VM, NAS, Bash</li>
                            </ul>
                            <ul className="ml-2 mt-8">
                                <h3 className="text-lg font-semibold">CyberSécurité</h3>
                                <li className="text-sm text-indigo-300 mt-6">Secure coding, RGPD, Hacking, SSL</li>
                            </ul>
                            <ul className="ml-2 mt-8">
                                <h3 className="text-lg font-semibold">Travail collaboratif</h3>
                                <li className="text-sm text-indigo-300 mt-6">Git, GitHub, Slack, Notion, NAS, Cloud</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div>
                    <h1 className="text-2xl md:text-3xl xl:text-4xl text-center mt-20">
                        Mon parcours professionnel
                    </h1>
                    <p className="text-sm mt-14 md:text-lg">
                        À court terme, j'envisage de poursuivre les études vers un diplôme de niveau 6 dans le <span className="text-indigo-300">développement WEB</span><br />
                        Je suis tout particulièrement intéressé par la technologie <span className="text-indigo-300">ReactJS</span>.<br />
                        <img src="" alt="" />
                        À moyen, long terme je m'imagine compléter mes compétences avec l'apprentissage de <span className="text-indigo-300">NodeJS</span> afin de devenir un <span className="text-indigo-300">développeur Full Stack</span>.
                    </p>
                </div>
            </div>
        </div >
    )
}

export default Profil