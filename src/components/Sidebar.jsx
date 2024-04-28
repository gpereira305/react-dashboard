import React from "react";
import { Link, NavLink } from "react-router-dom";
import { SiShopware } from "react-icons/si";
import { MdOutlineCancel } from "react-icons/md";
import { TooltipComponent } from "@syncfusion/ej2-react-popups";
import { links } from "../data/dummy";
import { useStateContext } from "../contexts/ContextProvider";
export default function Sidebar() {
  const { activeMenu, setActiveMenu } = useStateContext();

  const sharedSlyle =
    "flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-md m-2";
  const activeLink = `${sharedSlyle} text-white`;
  const inactivelLink = `${sharedSlyle} text-gray-700 dark:text-gray-200 dark:hover:text-black hover:bg-light-gray`;

  return (
    <div className="ml-3 h-screen md:overflow-hidden overflow-auto md:hover:overflow-auto pb-10">
      {activeMenu && (
        <>
          <div className="flex justify-between items-center">
            <Link
              to="/"
              className="items-center gap-3 ml-3 mt-4 flex text-xl font-extrabold tracking-light dark:text-white text-slate-900"
              onClick={() => setActiveMenu(false)}
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

          <ul className="mt-10 ">
            {links.map(({ title, links }) => (
              <li className="text-gray-400 m-3 mt-4 uppercase" key={title}>
                {title}
                <ul>
                  {links.map(({ name, icon }) => (
                    <li
                      key={name}
                      className="ml-4 my-3 flex items-center gap-4"
                    >
                      <NavLink
                        to={`/${name}`}
                        className={({ isActive }) =>
                          isActive ? activeLink : inactivelLink
                        }
                        onClick={() => {}}
                      >
                        {icon}
                        <span className="capitalize">{name}</span>
                      </NavLink>
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
}
