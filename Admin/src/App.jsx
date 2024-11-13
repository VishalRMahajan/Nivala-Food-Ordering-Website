import React, { useContext } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import Sidebar from "./components/Sidebar/Sidebar";
import Add from "./pages/Add/Add";
import List from "./pages/List/List";
import Orders from "./pages/Orders/Orders";
import PromoCode from "./pages/PromoCode/PromoCode";
import UpdatePromoCode from "./pages/PromoCode/UpdatePromoCode";
import Login from "./pages/Login/Login";
import ProtectedRoute from "./components/ProtectedRoute";
import WelcomeAdmin from "./pages/WelcomeAdmin/WelcomeAdmin";
import { Toaster } from "react-hot-toast";
import { StoreContext } from "./context/StoreContext";

const App = () => {
  const url = import.meta.env.VITE_BACKEND_URL;
  const { isAuthenticated } = useContext(StoreContext);

  return (
    <div>
      <Toaster position="top-right" reverseOrder={false} />
      <div className="app-content">
        <Sidebar />
        <div className="app-side-section">
          <Routes>
            <Route
              path="/login"
              element={
                isAuthenticated ? <Navigate to="/" /> : <Login url={url} />
              }
            />
            <Route
              path="/"
              element={
                <ProtectedRoute>
                  <WelcomeAdmin />
                </ProtectedRoute>
              }
            />
            <Route
              path="/add"
              element={
                <ProtectedRoute>
                  <Add url={url} />
                </ProtectedRoute>
              }
            />
            <Route
              path="/list"
              element={
                <ProtectedRoute>
                  <List url={url} />
                </ProtectedRoute>
              }
            />
            <Route
              path="/order"
              element={
                <ProtectedRoute>
                  <Orders url={url} />
                </ProtectedRoute>
              }
            />
            <Route
              path="/promo"
              element={
                <ProtectedRoute>
                  <PromoCode url={url} />
                </ProtectedRoute>
              }
            />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default App;