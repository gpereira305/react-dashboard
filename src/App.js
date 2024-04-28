import React from "react";
import { FiSettings } from "react-icons/fi";
import { TooltipComponent } from "@syncfusion/ej2-react-popups";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";

export default function App() {
  const activeMenu = false;
  const navStyle = activeMenu ? "md:ml-72" : "flex-2";

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

          {activeMenu ? (
            <div className="fixed w-72 sidebar dark:bg-secondary-dark-bg bg-white">
              Sidebar
            </div>
          ) : (
            <div className="w-0 p-10 dark:bg-main-dark-bg">Content</div>
          )}
          <div
            className={`${navStyle} dark:bg-main-bg bg-main-bg min-h-screen w-full`}
          >
            <nav className="fixed md:static bg-main-bg dark:bg-main-dark-bg navbar w-full">
              Navbar
            </nav>
          </div>

          <div>
            <Routes>
              {/* dashboard */}
              <Route path="/" element={<div>Ecommerce</div>} />
              <Route path="/ecommerce" element={<div>Ecommerce</div>} />

              {/* pages */}
              <Route path="/orders" element={<div>Orders</div>} />
              <Route path="/employees" element={<div>Employees</div>} />
              <Route path="/customers" element={<div>Customers</div>} />

              {/* apps */}
              <Route path="/kanban" element={<div>Kanban</div>} />
              <Route path="/editor" element={<div>Editor</div>} />
              <Route path="/calendar" element={<div>Calendar</div>} />
              <Route path="/color-picker" element={<div>Color Picker</div>} />

              {/* Charts */}
              <Route path="/line" element={<div>Line</div>} />
              <Route path="/area" element={<div>Area</div>} />
              <Route path="/bar" element={<div>Bar</div>} />
              <Route path="/pie" element={<div>Pie</div>} />
              <Route path="/financial" element={<div>Financial</div>} />
              <Route path="/color-mapping" element={<div>Color Mapping</div>} />
              <Route path="/pyramid" element={<div>Pyramid</div>} />
              <Route path="/stacked" element={<div>Stacked</div>} />
            </Routes>
          </div>
        </div>
      </BrowserRouter>
    </>
  );
}
