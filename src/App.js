import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { FiSettings } from "react-icons/fi";
import { TooltipComponent } from "@syncfusion/ej2-react-popups";
import { Navbar, Sidebar, Footer, ThemeSettings } from "./components";
import {
  Ecommerce,
  Orders,
  Calendar,
  Employees,
  Kanban,
  Customers,
  Editor,
  Line,
  Stacked,
  Pyramid,
  Pie,
  Financial,
  ColorPicker,
  ColorMapping,
  Area,
  Bar,
} from "./pages";
import { useStateContext } from "./contexts/ContextProvider";
import "./App.css";

export default function App() {
  const { activeMenu } = useStateContext();

  return (
    <>
      <BrowserRouter>
        <div className="flex relative dark:bg-main-dark-bg">
          <div className="fixed right-4 bottom-4" style={{ zIndex: "1000" }}>
            <TooltipComponent content="Ajustes" position="Top">
              <button
                type="button"
                className="text-3xl p-3 hover:drop-shadow-xl hover:bg-light-gray text-white"
                style={{ background: "blue", borderRadius: "50%" }}
              >
                <FiSettings />
              </button>
            </TooltipComponent>
          </div>

          <div
            className={`${
              activeMenu ? "translate-x-[0px]" : "translate-x-[-300px]"
            } fixed w-72 dark:bg-secondary-dark-bg bg-white transition-all duration-500 ease-in-out z-[500000]`}
          >
            <Sidebar />
          </div>

          <div
            className={`${
              activeMenu ? "md:ml-72" : ""
            } dark:bg-main-bg bg-main-bg min-h-screen w-full transition-all duration-500 ease-in-out`}
          >
            <nav className="fixed md:static bg-main-bg dark:bg-main-dark-bg navbar w-full">
              <Navbar />
            </nav>

            <div className="h-full bg-gray-200 p-5 pt-[70px]">
              <ThemeSettings />

              <Routes>
                {/* dashboard */}
                <Route path="/" element={<Ecommerce />} />
                <Route path="/ecommerce" element={<Ecommerce />} />
                {/* pages */}
                <Route path="/pedidos" element={<Orders />} />
                <Route path="/colaboradores" element={<Employees />} />
                <Route path="/clientes" element={<Customers />} />
                {/* apps */}
                <Route path="/kanban" element={<Kanban />} />
                <Route path="/editor" element={<Editor />} />
                <Route path="/calendario" element={<Calendar />} />
                <Route path="/color-picker" element={<ColorPicker />} />
                {/* Charts */}
                <Route path="/linha" element={<Line />} />
                <Route path="/area" element={<Area />} />
                <Route path="/barra" element={<Bar />} />
                <Route path="/pizza" element={<Pie />} />
                <Route path="/financeiro" element={<Financial />} />
                <Route path="/mapa-de-cores" element={<ColorMapping />} />
                <Route path="/piramide" element={<Pyramid />} />
                <Route path="/empilhamento" element={<Stacked />} />
              </Routes>
            </div>
          </div>
        </div>
      </BrowserRouter>
    </>
  );
}
