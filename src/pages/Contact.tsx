import Navbar from "../components/Navbar"
import ContactForm from '../components/ContactForm';
import Footer from "../components/Footer";

const Contact = () => {
    return (
        <div className="bg-primary-dark font-poppins min-h-screen">
            <Navbar />
            <div className="container mx-auto flex flex-col lg:flex-row py-5 lg:py-10 lg:mt-10">
                <ContactForm />
            </div>
            <Footer />
        </div>
    )
}

export default Contact
