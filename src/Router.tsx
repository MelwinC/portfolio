import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Presentation from "./pages/Presentation";
import Preuves from "./pages/Preuves";
import Stage from "./pages/Stage";
import Projets from "./pages/Projets";
import Veille from "./pages/Veille";
import Contact from "./pages/Contact";

const Router = () => {
    return (
        <Routes>
            <Route index element={<Home />} />
            <Route path="/profil" element={<Home />} />
            <Route path="/presentation" element={<Presentation />} />
            <Route path="/preuves" element={<Preuves />} />
            <Route path="/stage" element={<Stage />} />
            <Route path="/projets" element={<Projets />} />
            <Route path="/veille" element={<Veille />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<Home />} />
        </Routes>
    );
};

export default Router;