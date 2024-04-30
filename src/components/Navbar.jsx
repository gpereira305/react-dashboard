import React, { useEffect } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { AiShoppingCart, FiShoppingBag, FiShoppingCart } from "react-icons/fi";
import { BsChatLeft } from "react-icons/bs";
import { RiNotification3Line } from "react-icons/ri";
import { MdKeyboardArrowDown } from "react-icons/md";
import { TooltipComponent } from "@syncfusion/ej2-react-popups";
import avatar from "../data/avatar.jpg";
import { Cart, Chat, Notifications, UserProfile } from ".";
import { useStateContext } from "../contexts/ContextProvider";

const NavButton = ({ icon, customFunc, title, color, dotColor }) => (
  <TooltipComponent content={title} position="BottomCenter">
    <button
      type="button"
      className="relative text-xl rounded-full p-3 hover:bg-light-gray"
      style={{ color }}
      onClick={customFunc}
    >
      <span
        style={{ background: dotColor }}
        className="absolute inline-flex rounded-full h-2 w-2 right-2 top-2"
      />
      {icon}
    </button>
  </TooltipComponent>
);

export default function Navbar() {
  const {
    activeMenu,
    setActiveMenu,
    isClicked,
    setIsClicked,
    handleClick,
    screenSize,
    setScreenSize,
  } = useStateContext();

  useEffect(() => {
    const handleResize = () => setScreenSize(window.innerWidth);
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    screenSize <= 900 ? setActiveMenu(false) : setActiveMenu(true);
  }, [screenSize]);

  return (
    <>
      <div className="flex justify-between p-2 md:mx-6 relative">
        <NavButton
          title="Menu"
          customFunc={() => setActiveMenu((prevActiveMenu) => !prevActiveMenu)}
          color="blue"
          icon={<AiOutlineMenu />}
        />

        <div className="flex">
          <NavButton
            title="Carrinho"
            customFunc={() => handleClick("cart")}
            color="blue"
            icon={<FiShoppingCart />}
          />
          <NavButton
            title="Chat"
            dotColor="#03C9D7"
            customFunc={() => handleClick("chat")}
            color="blue"
            icon={<BsChatLeft />}
          />
          <NavButton
            title="Notificações"
            dotColor="#03C9D7"
            customFunc={() => handleClick("notifications")}
            color="blue"
            icon={<RiNotification3Line />}
          />

          <TooltipComponent content="Avatar" position="BottomCenter">
            <figure
              className="flex items-center gap-2 cursor-pointer p-1 hover:bg-light-gray rounded-lg"
              onClick={() => handleClick("userProfile")}
            >
              <img
                className="rounded-full w-8 h-8"
                src={avatar}
                alt="user-profile"
              />
              <figcaption className="text-gray-400 text-14">
                Hi, <span className=" font-bold ml-1">Michael</span>
              </figcaption>
              <MdKeyboardArrowDown className="text-gray-400 text-14" />
            </figure>
          </TooltipComponent>

          {isClicked.cart && <Cart />}
          {isClicked.chat && <Chat />}
          {isClicked.notifications && <Notifications />}
          {isClicked.userProfile && <UserProfile />}
        </div>
      </div>
    </>
  );
}
