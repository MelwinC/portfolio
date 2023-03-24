import { Routes, Route } from "react-router-dom";
import TestPage from "./Pages/TestPage";

const Router = () => {
    return (
        <div>
            <Routes>
                <Route index element={<TestPage />} />
                <Route path="*" element={<TestPage />} />
            </Routes>
        </div>
    );
};

export default Router;