import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import Homepage from "./pages/Homepage.jsx";
import ProductPage from "./pages/ProductPage.jsx";
import CategoryPage from "./pages/CategoryPage.jsx";
import VariantPage from "./pages/VariantPage.jsx";
import TransactionPage from "./pages/TransactionPage.jsx";
import Login from "./pages/Login.jsx";
import Cookies from "js-cookie";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <RequireAuth>
        <Homepage />
      </RequireAuth>
    ),
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/products",
    element: (
      <RequireAuth>
        <ProductPage />
      </RequireAuth>
    ),
  },
  {
    path: "/categories",
    element: (
      <RequireAuth>
        <CategoryPage />
      </RequireAuth>
    ),
  },
  {
    path: "/variants",
    element: (
      <RequireAuth>
        <VariantPage />
      </RequireAuth>
    ),
  },
  {
    path: "/transactions",
    element: (
      <RequireAuth>
        <TransactionPage />
      </RequireAuth>
    ),
  },
  {
    path: "*",
    element: <Navigate to="/login" replace />,
  },
]);

function RequireAuth({ children }) {
  const isAuthenticated = Cookies.get("token");
  return isAuthenticated ? children : <Navigate to="/login" replace />;
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
