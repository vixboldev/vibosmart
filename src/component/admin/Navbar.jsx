import React from "react";
import Logo from "../logo/Logo";
import Dashboard from "../../pages/admin/dashboard/Dashboard";
import Categories from "../../pages/admin/categories/Categories";
import Analytics from "../../pages/admin/analytics/Analytics";
import Customers from "../../pages/admin/customers/Customers";
import Media from "../../pages/admin/media/Media";
import Orders from "../../pages/admin/orders/Orders";
import Products from "../../pages/admin/products/Products";
import Settings from "../../pages/admin/settings/Settings";
import { IoMdClose, IoMdMenu } from "react-icons/io";

function Navbar(props) {
  return (
    <div>
      <div className="flex justify-around py-4">
        <Logo></Logo>
        <div className="flex flex-col justify-center border p-2">
          <IoMdMenu />
          <IoMdClose className="hidden" />
        </div>
      </div>
      <div className="flex flex-col gap-4 px-4 pt-4">
        <Dashboard></Dashboard>
        <Categories></Categories>
        <Analytics></Analytics>
        <Customers></Customers>
        <Media></Media>
        <Orders></Orders>
        <Products></Products>
        <Settings></Settings>
        <button className="p-2 rounded-2xl bg-amber-300 hover:bg-amber-600">
          Log out
        </button>
      </div>
    </div>
  );
}

export default Navbar;
