import { Navigate, Route, Routes } from "react-router-dom";
import LandingLayout from "@pages/layout/LandingLayout";
import HomePage from "@pages/landing/HomePage";

const Routers = () => {
  return (
    <Routes>
      <Route path="*" element={<Navigate to="/" />} />
      <Route element={<LandingLayout />}>
        <Route path="/" element={<HomePage />} />
      </Route>
    </Routes>
  );
};

export default Routers;
