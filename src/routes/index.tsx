import { Navigate, Route, Routes } from "react-router-dom";
import LandingLayout from "@pages/layout/LandingLayout";
import HomePage from "@pages/landing/HomePage";
import ServicesPage from "@pages/landing/ServicesPage";

const Routers = () => {
  return (
    <Routes>
      <Route path="*" element={<Navigate to="/" />} />
      <Route element={<LandingLayout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/services" element={<ServicesPage />} />
      </Route>
    </Routes>
  );
};

export default Routers;
