import MenuBar from "@components/landing/MenuBar";
import { Outlet } from "react-router-dom";

const LandingLayout = () => {
  return (
    <>
      {/* MENUBAR */}
      <MenuBar />
      <Outlet />
    </>
  );
};

export default LandingLayout;
