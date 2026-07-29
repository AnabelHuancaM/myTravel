import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home/Home";

import CategoryDetailPage from "../pages/Category/CategoryDetailPage";
import DestinationDetailPage from "../pages/Destination/DestinationDetailPage";

function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<MainLayout />}>
                    <Route path="/" element={<Home />} />
                    <Route path="/categoria/:id" element={<CategoryDetailPage />} />
                    <Route path="/destino/:id" element={<DestinationDetailPage />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default AppRoutes;