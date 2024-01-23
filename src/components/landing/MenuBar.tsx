import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import LetsTalkButton from "./Menubar/LetsTalkButton";

const MenuBar = () => {
  const location = useLocation();
  const [active, setActive] = useState(location.pathname);
  useEffect(() => {
    setActive(location.pathname);
  }, [location]);

  const menuItems = [
    {
      name: "Home",
      route: "/",
    },
    {
      name: "Services",
      route: "/services",
    },
    {
      name: "Projects",
      route: "/projects",
    },
    {
      name: "About",
      route: "/about",
    },
    {
      name: "Blog",
      route: "/blog",
    },
  ];
  console.log(active);
  return (
    <div className=" px-20 py-8 flex justify-between items-end bg-[#161513]">
      <menu className=" flex items-end gap-x-10">
        <Link
          to="/"
          className=" px-10 text-white hover:text-yellow-500 hover:scale-105 font-semibold text-3xl no-underline"
        >
          KFOLIO.
        </Link>
        {menuItems?.map((obj, i) => {
          if (active === obj.route) {
            return (
              <Link
                onClick={() => {
                  setActive(obj.route);
                }}
                className=" text-yellow-500 no-underline hover:text-yellow-500 text-lg"
                to={obj.route}
                key={i}
              >
                {obj.name}
              </Link>
            );
          }
          return (
            <Link
              onClick={() => {
                setActive(obj.route);
              }}
              className=" text-white no-underline hover:text-yellow-500 text-lg"
              to={obj.route}
              key={i}
            >
              {obj.name}
            </Link>
          );
        })}
      </menu>
      {/* <h2 className=" px-10">BUTTON HERE</h2> */}
      <LetsTalkButton />
    </div>
  );
};

export default MenuBar;
