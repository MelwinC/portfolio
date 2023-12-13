import DeveloperImg from "../assets/developer.png";

const Accueil = () => {
  return (
    <section className="container mx-auto border-b-2 border-secondary-dark">
      <section className="flex flex-col sm:justify-between items-center sm:flex-row mt-12 sm:mt-10">
        <div className="w-full sm:w-1/3 text-left">
          <h1 className="font-semibold text-2xl lg:text-3xl xl:text-4xl text-center sm:text-left text-primary-light uppercase">
            Melwin C.
          </h1>
          <p className="mt-4 text-lg sm:text-xl lg:text-2xl xl:text-3xl text-center sm:text-left leading-normal text-gray-200">
            Développeur toute-pile junior.
          </p>
          <div className="flex justify-center sm:block">
            <a
              download="CV Melwin CHENU.pdf"
              href="/CV-Melwin-CHENU.pdf"
              className="flex justify-center items-center w-36 sm:w-48 mt-12 mb-6 sm:mb-0 text-lg border border-ternary-dark py-2.5 sm:py-3 shadow-lg rounded-lg bg-indigo-50 focus:ring-1 focus:ring-indigo-900 hover:bg-indigo-500 text-gray-500 hover:text-white duration-500"
              aria-label="Download Resume"
            >
              <svg
                stroke="currentColor"
                fill="none"
                strokeWidth="2"
                viewBox="0 0 24 24"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="mr-2 sm:mr-3 h-5 w-5 sn:w-6 sm:h-6 duration-100"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="12" cy="12" r="10"></circle>
                <polyline points="8 12 12 16 16 12"></polyline>
                <line x1="12" y1="8" x2="12" y2="16"></line>
              </svg>
              <span className="text-sm sm:text-lg duration-100">
                Télécharger CV
              </span>
            </a>
          </div>
        </div>
        <div className="w-full sm:w-2/3 text-right float-right mt-8 sm:mt-0">
          <img src={DeveloperImg} alt="developer" className="mx-auto" />
        </div>
      </section>
    </section>
  );
};

export default Accueil;
