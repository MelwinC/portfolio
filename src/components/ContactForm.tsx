import FormInput from '../reusable/FormInput';

const ContactForm = () => {

    return (
        <>
            <div className="w-full leading-loose">
                <form
                    onSubmit={(e) => e.preventDefault}
                    className="max-w-xl m-4 p-6 sm:p-10 bg-secondary-dark rounded-xl shadow-xl text-left"
                >
                    <p className="font-general-medium text-primary-light text-2xl mb-8">
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
                            cols="14"
                            rows="6"
                            aria-label="Message"
                        ></textarea>
                    </div>
                    <div className="font-general-medium w-40 px-4 py-2.5 text-white text-center font-medium tracking-wider bg-indigo-500 hover:bg-indigo-600 hover:cursor-pointer focus:ring-1 focus:ring-indigo-900 rounded-lg mt-6 duration-500">
                        <button type="submit" aria-label="Envoyer">Envoyer</button>
                    </div>
                </form>
            </div>
        </>
    );
};

export default ContactForm;
