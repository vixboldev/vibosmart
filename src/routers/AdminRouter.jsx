import React from "react";
import Dashboard from "../pages/admin/dashboard/Dashboard";
import Categories from "../pages/admin/categories/Categories";
import Analytics from "../pages/admin/analytics/Analytics";
import Customers from "../pages/admin/customers/Customers";
import Medias from "../pages/admin/medias/Medias";
import Orders from "../pages/admin/orders/Orders";
import Products from "../pages/admin/products/Products";
import Settings from "../pages/admin/settings/Settings";
import { Route, Routes } from "react-router-dom";

function AdminRouter(props) {
  const routes = [
    {
      path: "/",
      element: <Dashboard />,
    },
    {
      path: "categories",
      element: <Categories />,
    },
    {
      path: "analytics",
      element: <Analytics />,
    },
    {
      path: "customers",
      element: <Customers />,
    },
    {
      path: "medias",
      element: <Medias />,
    },
    {
      path: "orders",
      element: <Orders />,
    },
    {
      path: "products",
      element: <Products />,
    },
    {
      path: "settings",
      element: <Settings />,
    },
  ];
  return (
    <div>
      <Routes>
        {routes.map((e) => (
          <Route key={e.path} path={e.path} element={e.element} />
        ))}
      </Routes>
    </div>
  );
}

export default AdminRouter;
