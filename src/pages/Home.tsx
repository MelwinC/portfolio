import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import DeveloperImg from "../assets/developer.png"

const Home = () => {
    return (
        <>
            <div className="bg-primary-dark font-poppins">
                <Navbar />
                <div className="container mx-auto">
                    <section className="flex flex-col font-poppins">
                        <img src={DeveloperImg} alt="developer" className="mx-auto" />
                        <a href="/src/assets/CV Melwin CHENU.pdf" target="_blank" className="text-zinc-800 flex justify-center items-end">
                            <button className="bg-neutral-300 p-2 pr-10 pl-10 rounded-lg hover:bg-zinc-600 hover:text-neutral-200">
                                Mon CV PDF
                            </button>
                        </a>
                    </section>
                </div>
                <Footer />
            </div >
        </>
    )
}

export default Home
