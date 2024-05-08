import React from "react";
import { Link, NavLink } from "react-router-dom";
import { SiShopware } from "react-icons/si";
import { MdOutlineCancel } from "react-icons/md";
import { TooltipComponent } from "@syncfusion/ej2-react-popups";
import { links } from "../data/dummy";
import { useStateContext } from "../contexts/ContextProvider";
export default function Sidebar() {
  const { activeMenu, setActiveMenu, screenSize } = useStateContext();

  const handleCloseSidebar = () => {
    if (activeMenu && screenSize <= 900) {
      setActiveMenu(false);
    }
  };

  const sharedSlyle =
    "flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-md flex w-full";
  const activeLink = `${sharedSlyle} text-red-500 bg-light-gray`;
  const inactivelLink = `${sharedSlyle} text-gray-700 dark:text-gray-200 dark:hover:text-black hover:bg-light-gray w-full`;

  return (
    <div className="ml-3 h-screen md:overflow-hidden overflow-auto md:hover:overflow-auto pb-10">
      {/* {activeMenu && ( */}
      <>
        <div className="flex justify-between items-center">
          <Link
            to="/"
            className="items-center gap-3 ml-3 mt-4 flex text-xl font-extrabold tracking-light dark:text-white text-slate-900"
            onClick={() => handleCloseSidebar}
          >
            <SiShopware /> <span>Shoppy</span>
          </Link>

          <TooltipComponent content="Fechar" position="BottomCenter">
            <span
              className="text-xl rounded-full p-3 hover:bg-light-gray mt-4 block md:hidden"
              onClick={() => setActiveMenu((prev) => !prev)}
            >
              <MdOutlineCancel />
            </span>
          </TooltipComponent>
        </div>

        <ul className="mt-10">
          {links.map(({ title, links }) => (
            <li className="text-gray-400 m-3 mt-4" key={title}>
              <span className="uppercase">{title}</span>
              <ul>
                {links.map(({ name, icon, linkName }) => (
                  <li key={name} className="my-3 flex items-center gap-4">
                    <NavLink
                      to={`/${linkName}`}
                      className={({ isActive }) =>
                        isActive ? activeLink : inactivelLink
                      }
                      onClick={() => handleCloseSidebar}
                    >
                      {icon}
                      <span className="">{name}</span>
                    </NavLink>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </>
      {/* // )} */}
    </div>
  );
}
