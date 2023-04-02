import Footer from "../components/Footer"
import Navbar from "../components/Navbar"

const Profil = () => {
    return (
        <>
            <div className="bg-zinc-700 w-full h-screen font-poppins">
                <header className="bg-zinc-800 w-full h-screen flex flex-col">
                    {/* Test image background */}
                    {/* <header className="bg-test w-full h-screen flex flex-col"> */}
                    <Navbar />
                    <h1 className="text-neutral-200 text-5xl flex justify-center w-auto h-auto items-center">
                        Melwin Chenu
                    </h1>
                </header>
                <section className="bg-zinc-800 w-full h-screen font-poppins border-t">
                    <a href="/src/assets/CV Melwin CHENU.pdf" target="_blank" className="text-zinc-800 flex justify-center">
                        <button className="bg-neutral-300 p-2 pr-10 pl-10 rounded-lg hover:bg-zinc-600 hover:text-neutral-200">
                            Mon CV PDF
                        </button>
                    </a>
                </section>
                <Footer />
            </div >
        </>
    )
}

export default Profil
