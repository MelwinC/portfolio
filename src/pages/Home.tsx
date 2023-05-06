import Navbar from "../components/Navbar"
import Accueil from "../components/Accueil"
import Profil from "../components/Profil"
import Footer from "../components/Footer"

const Home = () => {
    return (
        <div className="bg-primary-dark font-poppins min-h-screen">
            <Navbar />
            <Accueil />
            <Profil />
            <Footer />
        </div >
    )
}

export default Home
