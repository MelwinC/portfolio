const BtsSio = () => {
    return (
        <div className="container mx-auto text-ternary-light">
            <h1 className="text-2xl lg:text-3xl xl:text-4xl text-center mt-20">
                Qu'est-ce que le BTS SIO ?
            </h1>
            <p className="text-base mt-14 text-center lg:text-lg">
                Le Brevet de Technicien Supérieur Services Informatiques aux Organisations est un <span className="text-indigo-300">diplôme d'état</span> de niveau 5. <br />
                La formation est réalisable en 2 ans, ou 1 an dans le cas d'une reconversion professionnelle. <br />
                Il présente 2 spécialités :
            </p>
            <div className="grid grid-cols-2 divide-x mt-12">
                <div>
                    <ul className="mr-2 lg:ml-10 text-center lg:text-left lg:list-disc">
                        <h3 className="text-xl font-semibold text-center">Option SLAM <br /> <span className="text-lg">(Solutions Logicielles et Applications Métiers)</span></h3>
                        <li className="text-sm text-indigo-300 mt-6">
                            Définir les solutions adaptées en fonction du besoin des utilisateurs<br />(analyse des besoins client interne et étude de l'offre de marché en progiciels)
                        </li>
                        <li className="text-sm text-indigo-300 mt-2">
                            Concevoir, produire et maintenir des solutions d'infrastructures réseau ou<br />des solutions applicatives
                        </li>
                        <li className="text-sm text-indigo-300 mt-2">
                            Gérer et administrer un parc informatique (matériels et logiciels)
                        </li>
                        <li className="text-sm text-indigo-300 mt-2">
                            Concevoir, modéliser et administrer des bases de données
                        </li>
                        <li className="text-sm text-indigo-300 mt-2">
                            Assurer la maintenance des programmes informatiques.
                        </li>
                        <li className="text-sm text-indigo-300 mt-2">
                            Rédiger les supports documentaires et assurer la formation des utilisateurs finaux.
                        </li>
                        <li className="text-sm text-indigo-300 mt-2">
                            Être force de proposition dans l'amélioration et l'optimisation des logiciels<br />en place.
                        </li>
                    </ul>
                </div>
                <div>
                    <ul className="ml-2 lg:ml-14 text-center lg:text-left lg:list-disc">
                        <h3 className="text-xl font-semibold text-center lg:ml-10">Option SISR <br /> <span className="text-lg">(Solutions d'Infrastructures Systèmes et Réseaux)</span></h3>
                        <li className="text-sm text-indigo-300 mt-6">
                            Installer, intégrer, administrer, sécuriser des équipements et des services informatiques
                        </li>
                        <li className="text-sm text-indigo-300 mt-2">
                            Exploiter, superviser et assurer la maintenance d'une infrastructure
                        </li>
                        <li className="text-sm text-indigo-300 mt-2">
                            Définir et configurer des postes clients, des serveurs et des équipements d'interconnexion, déploiement et maintenance
                        </li>
                        <li className="text-sm text-indigo-300 mt-2">
                            Gérer les actifs de l'infrastructure
                        </li>
                        <li className="text-sm text-indigo-300 mt-2">
                            Rechercher des réponses adaptées à des besoins d'évolution de l'infrastructure ou à des problèmes liés à la mise à disposition des services informatiques
                        </li>
                        <li className="text-sm text-indigo-300 mt-2">
                            Résoudre des incidents et assister les utilisateurs
                        </li>
                        <li className="text-sm text-indigo-300 mt-2">
                            Maintenir la qualité des services informatiques
                        </li>
                    </ul>
                </div>
            </div>
            <h1 className="text-2xl lg:text-3xl xl:text-4xl text-center mt-20">
                Que faire après un BTS SIO ?
            </h1>
            <div className="grid grid-cols-2 divide-x mt-12">
                <div>
                    <ul className="mr-2 lg:ml-10 text-center lg:text-left lg:list-disc">
                        <h3 className="text-xl font-semibold text-center">Option SLAM <br /> <span className="text-lg">(Solutions Logicielles et Applications Métiers)</span></h3>
                        <li className="text-sm text-indigo-300 mt-6 ml-4">
                            <li>Développeur-euse informatique.</li>
                        </li>
                        <li className="text-sm text-indigo-300 mt-2 ml-4">
                            <li>Programmation de logiciel d'entreprise ou/et</li>
                        </li>
                        <li className="text-sm text-indigo-300 mt-2 ml-4">
                            <li>Développement d'application web/mobile.</li>
                        </li>
                        <li className="text-sm text-indigo-300 mt-2 ml-4">
                            <li>Développeur-euse web back-end / front-end.</li>
                        </li>
                        <li className="text-sm text-indigo-300 mt-2 ml-4">
                            <li>Développeur-euse DevOps.</li>
                        </li>
                    </ul>
                </div>
                <div>
                    <ul className="ml-2 lg:ml-14 text-center lg:text-left lg:list-disc">
                        <h3 className="text-xl font-semibold text-center lg:ml-10">Option SISR <br /> <span className="text-lg">(Solutions d'Infrastructures Systèmes et Réseaux)</span></h3>
                        <li className="text-sm text-indigo-300 mt-6">
                            <li>Dirigeant-e / Responsable des services applicatifs.</li>
                        </li>
                        <li className="text-sm text-indigo-300 mt-2">
                            <li>Technicien-ne des Systèmes d'Information.</li>
                        </li>
                        <li className="text-sm text-indigo-300 mt-2">
                            <li>Administrateur-rice / maintenance de parc informatique.</li>
                        </li>
                        <li className="text-sm text-indigo-300 mt-2">
                            <li>Webmaster / Administrateur/trice serveur (front et back-end).</li>
                        </li>
                        <li className="text-sm text-indigo-300 mt-2">
                            <li>Développement de solutions informatiques sécurisées.</li>
                        </li>
                        <li className="text-sm text-indigo-300 mt-2">
                            <li>Administrateur-rice / Analyste de solutions de sécurité.</li>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default BtsSio
