import emailjs, { EmailJSResponseStatus } from 'emailjs-com';
import FormInput from './FormInput';

const ContactForm = () => {

    const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        emailjs.sendForm(
            import.meta.env.VITE_MAIL_JS_SERVICE_ID,
            import.meta.env.VITE_MAIL_JS_TEMPLATE_ID,
            e.currentTarget,
            import.meta.env.VITE_MAIL_JS_PUBLIC_KEY
        ).then((result: EmailJSResponseStatus) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
        e.currentTarget.reset()
    };

    return (
        <>
            <div className="w-full leading-loose">
                <form
                    onSubmit={sendEmail}
                    className="max-w-xl m-4 p-6 sm:p-10 bg-secondary-dark rounded-xl shadow-xl text-left"
                >
                    <p className="text-primary-light text-2xl mb-8">
                        Contactez-moi
                    </p>
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
                        <button type="submit" aria-label="Envoyer">Envoyer</button>
                    </div>
                </form>
            </div>

            <div className="w-full">
                <div className="text-left max-w-xl px-6">
                    <h2 className="font-general-medium text-2xl text-primary-light mt-12 mb-8">
                        Informations
                    </h2>
                    <ul className="font-general-regular">
                        <li className="flex ">
                            <i className="text-2xl text-gray-500 dark:text-gray-400 mr-4">
                                <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                                    <circle cx="12" cy="10" r="3"></circle>
                                </svg>
                            </i>
                            <span className="text-lg mb-4 text-ternary-light">
                                Vannes, 56000 Morbihan
                            </span>
                        </li>
                        <li className="flex ">
                            <i className="text-2xl text-gray-400 mr-4">
                                <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                                    <polyline points="22,6 12,13 2,6"></polyline>
                                </svg>
                            </i>
                            <span className="text-lg mb-4 text-ternary-light">
                                contact@melwinchenu.fr
                            </span>
                        </li>
                        <iframe
                            className='w-full h-80'
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d42997.974451999304!2d-2.789650530073699!3d47.657742038438606!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48101e84c37de291%3A0xb9f358307b233d13!2sVannes!5e0!3m2!1sfr!2sfr!4v1681334584867!5m2!1sfr!2sfr"
                            style={{ border: 0 }}
                            allowFullScreen={undefined}
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade">
                        </iframe>
                    </ul>
                </div >
            </div >
        </>
    );
};

export default ContactForm;
