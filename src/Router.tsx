import { Routes, Route } from "react-router-dom";
import BtsSio from "./pages/BtsSio";
import Accueil from "./pages/Accueil";
import Competences from "./pages/Competences";
import Projets from "./pages/Projets";
import Stage from "./pages/Stage";
import VeilleTechnologique from "./pages/VeilleTechnologique";
import Profil from "./pages/Profil";
import Contact from "./pages/Contact";
import Test from "./pages/Test";

const Router = () => {
    return (
        <>
            <Routes>
                <Route index element={<Accueil />} />
                <Route path="/profil" element={<Profil />} />
                <Route path="/btssio" element={<BtsSio />} />
                <Route path="/competences" element={<Competences />} />
                <Route path="/projets" element={<Projets />} />
                <Route path="/stage" element={<Stage />} />
                <Route path="/veille" element={<VeilleTechnologique />} />
                <Route path="/test" element={<Test />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="*" element={<Accueil />} />
            </Routes>
        </>
    );
};

export default Router;