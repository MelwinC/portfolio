import emailjs, { EmailJSResponseStatus } from "@emailjs/browser";
import FormInput from "./FormInput";

const ContactForm = () => {
  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    emailjs
      .sendForm(
        import.meta.env.VITE_MAIL_JS_SERVICE_ID,
        import.meta.env.VITE_MAIL_JS_TEMPLATE_ID,
        e.currentTarget,
        import.meta.env.VITE_MAIL_JS_PUBLIC_KEY
      )
      .then(
        (result: EmailJSResponseStatus) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.currentTarget.reset();
  };

  return (
    <>
      <div className="leading-loose mx-auto md:w-1/2 w-full">
        <form
          onSubmit={sendEmail}
          className="max-w-xl m-4 p-6 sm:p-10 bg-secondary-dark rounded-xl shadow-xl text-left"
        >
          <p className="text-primary-light text-2xl mb-8">Contactez-moi</p>
          <FormInput
            inputLabel="Votre Nom"
            labelFor="name"
            inputType="text"
            inputId="name"
            inputName="name"
            placeholderText="Nom Prenom"
            ariaLabelName="Nom"
          />
          <FormInput
            inputLabel="Votre email"
            labelFor="email"
            inputType="email"
            inputId="email"
            inputName="email"
            placeholderText="Email"
            ariaLabelName="Email"
          />
          <FormInput
            inputLabel="Sujet"
            labelFor="subject"
            inputType="text"
            inputId="subject"
            inputName="subject"
            placeholderText="Sujet"
            ariaLabelName="Sujet"
          />

          <div className="mt-6">
            <label
              className="block text-lg text-primary-light mb-2"
              htmlFor="message"
            >
              Message
            </label>
            <textarea
              className="w-full px-5 py-2 border border-primary-dark border-opacity-50 text-secondary-light bg-ternary-dark rounded-md shadow-sm text-md"
              id="message"
              name="message"
              cols={14}
              rows={6}
              aria-label="Message"
            ></textarea>
          </div>
          <div className="font-general-medium w-40 px-4 py-2.5 text-white text-center font-medium tracking-wider bg-indigo-500 hover:bg-indigo-600 hover:cursor-pointer focus:ring-1 focus:ring-indigo-900 rounded-lg mt-6 duration-500">
            <button type="submit" aria-label="Envoyer">
              Envoyer
            </button>
          </div>
        </form>
      </div>

      <div className="mx-auto w-full">
        <div className="text-center px-6">
          <h2 className="font-general-medium text-2xl text-primary-light mt-12 mb-8">
            Informations
          </h2>
          <ul className="font-general-regular">
            <li className="flex justify-center">
              <i className="text-2xl text-gray-500 dark:text-gray-400 mr-4">
                <svg
                  className="text-indigo-400"
                  stroke="currentColor"
                  fill="none"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                  <circle cx="12" cy="10" r="3"></circle>
                </svg>
              </i>
              <span className="text-lg mb-4 text-ternary-light">
                Vannes, 56000 Morbihan
              </span>
            </li>
            <li className="flex justify-center">
              <i className="text-2xl text-gray-400 mr-4">
                <svg
                  className="text-indigo-400"
                  stroke="currentColor"
                  fill="none"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                  <polyline points="22,6 12,13 2,6"></polyline>
                </svg>
              </i>
              <span className="text-lg mb-4 text-ternary-light">
                contact@melwinchenu.fr
              </span>
            </li>
          </ul>
          <iframe
            className="mx-auto w-full h-72 md:w-1/2"
            src="https://www.openstreetmap.org/export/embed.html?bbox=-2.83224105834961%2C47.622190306287365%2C-2.71388053894043%2C47.693183419547196&amp;layer=mapnik"
          ></iframe>
        </div>
      </div>
    </>
  );
};

export default ContactForm;
