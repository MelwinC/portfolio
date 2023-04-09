import { Routes, Route } from "react-router-dom";
import BtsSio from "./pages/BtsSio";
import Competences from "./pages/Competences";
import Projets from "./pages/Projets";
import Stage from "./pages/Stage";
import VeilleTechnologique from "./pages/VeilleTechnologique";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Test from "./pages/Test";

const Router = () => {
    return (
        <>
            <Routes>
                <Route index element={<Home />} />
                <Route path="/profil" element={<Home />} />
                <Route path="/btssio" element={<BtsSio />} />
                <Route path="/competences" element={<Competences />} />
                <Route path="/projets" element={<Projets />} />
                <Route path="/stage" element={<Stage />} />
                <Route path="/veille" element={<VeilleTechnologique />} />
                <Route path="/test" element={<Test />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="*" element={<Home />} />
            </Routes>
        </>
    );
};

export default Router;