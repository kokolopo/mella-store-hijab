import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.jsx";
import "./index.css";
import Homepage from "./pages/Homepage.jsx";
import ProductPage from "./pages/ProductPage.jsx";
import CategoryPage from "./pages/CategoryPage.jsx";
import VariantPage from "./pages/VariantPage.jsx";
import TransactionPage from "./pages/TransactionPage.jsx";
import Login from "./pages/Login.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Homepage />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/products",
    element: <ProductPage />,
  },
  {
    path: "/categories",
    element: <CategoryPage />,
  },
  {
    path: "/variants",
    element: <VariantPage />,
  },
  {
    path: "/transactions",
    element: <TransactionPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
