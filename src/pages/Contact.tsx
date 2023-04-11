import Navbar from "../components/Navbar"
import ContactForm from '../components/ContactForm';
import Footer from "../components/Footer";

const Contact = () => {
    return (
        <div className="bg-primary-dark font-poppins">
            <Navbar />
            <div className="container mx-auto">
                <ContactForm />
            </div>
            <Footer />
        </div>
    )
}

export default Contact
