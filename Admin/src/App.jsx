import React from "react";
import Sidebar from "./components/Sidebar/Sidebar";
import { Route, Routes } from "react-router-dom";
import Add from "./pages/Add/Add";
import List from "./pages/List/List";
import Orders from "./pages/Orders/Orders";
import { Toaster } from "react-hot-toast";

const App = () => {
  const url = import.meta.env.VITE_BACKEND_URL;
  return (
    <div>
      <Toaster position="top-right" reverseOrder={false} />
      <div className="app-content">
        <Sidebar />
        <div className="app-side-section">
          <Routes>
            <Route path="/add" element={<Add url={url} />} />
            <Route path="/list" element={<List url={url} />} />
            <Route path="/order" element={<Orders url={url} />} />
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default App;
