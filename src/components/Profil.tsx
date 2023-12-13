import TimelineParcoursPro from "../assets/TimelineParcoursPro.png";

const Profil = () => {
  return (
    <section className="container mx-auto text-ternary-light">
      <article className="text-center">
        <h1 className="text-2xl mt-20 md:text-3xl xl:text-4xl">
          Qui suis-je ?
        </h1>
        <p className="text-sm mt-14 md:text-lg">
          Je m'appelle <span className="text-indigo-300">Melwin Chenu</span>,
          j'ai 24 ans, et j'ai fait le choix de devenir{" "}
          <span className="text-indigo-300">développeur</span>, c'est pourquoi
          je suis actuellement en BTS SIO SLAM.
        </p>
      </article>
      <div className="mt-20">
        <h1 className="text-2xl md:text-3xl xl:text-4xl text-center">
          Mon parcours
        </h1>
        <img
          src={TimelineParcoursPro}
          alt="Schéma parcours professionnel"
          className="mt-20 mx-auto w-5/6 shadow-md shadow-indigo-400 rounded-2xl"
        />
      </div>
      <div className="mt-20">
        <h1 className="text-2xl md:text-3xl xl:text-4xl text-center mt-20">
          Mes compétences
        </h1>
        <p className="text-sm mt-14 md:text-lg">
          Dans le cadre de la formation, grâce à l'autoformation et mes
          expériences passées, j'ai développé des compétences en lien avec le
          métier. <br />
        </p>
        <div className="grid grid-cols-2 divide-x my-14">
          <div className="text-center">
            <ul className="mr-2">
              <h3 className="text-lg font-semibold">Front-end</h3>
              <li className="text-sm text-indigo-300 mt-6">
                HTML5, CSS3, SCSS, Tailwind CSS, Bootstrap, Javascript
              </li>
            </ul>
            <ul className="mr-4 mt-8">
              <h3 className="text-lg font-semibold">Back-end</h3>
              <li className="text-sm text-indigo-300 mt-6">
                Java, PHP, Python
              </li>
            </ul>
            <ul className="mr-2 mt-8">
              <h3 className="text-lg font-semibold">Frameworks Javascript</h3>
              <li className="text-sm text-indigo-300 mt-6">
                Node.js, React.js, Next.js, Vue.js, Nuxt.js 
              </li>
            </ul>
          </div>
          <div className="text-center">
            <ul className="ml-2">
              <h3 className="text-lg font-semibold">Base de données</h3>
              <li className="text-sm text-indigo-300 mt-6">
                MySQL, PostgreSQL, MongoDB, Firebase (Firestore)
              </li>
            </ul>
            <ul className="ml-2 mt-8">
              <h3 className="text-lg font-semibold">DevOps</h3>
              <li className="text-sm text-indigo-300 mt-6">
                Gitlab, CI/CD, SCRUM, Docker, Linux
              </li>
            </ul>
            <ul className="ml-2 mt-8">
              <h3 className="text-lg font-semibold">Travail collaboratif</h3>
              <li className="text-sm text-indigo-300 mt-6">
                Git, GitHub, Jira, Trello, Slack, Notion
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Profil;
