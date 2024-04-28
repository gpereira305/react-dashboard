import React, { createContext, useContext, useState } from "react";

const StateContext = createContext();

const initalState = {
  chat: false,
  cart: false,
  userProfile: false,
  notification: false,
};

export const ContextProvider = ({ children }) => {
  const [activeMenu, setActiveMenu] = useState(true);

  const providedValues = {
    activeMenu,
    setActiveMenu,
  };
  return (
    <StateContext.Provider value={providedValues}>
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);
