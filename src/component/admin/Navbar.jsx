import Logo from "../logo/Logo";
import Dashboard from "../../pages/admin/dashboard/Dashboard";
import Categories from "../../pages/admin/categories/Categories";
import Analytics from "../../pages/admin/analytics/Analytics";
import Customers from "../../pages/admin/customers/Customers";
import Media from "../../pages/admin/medias/Medias";
import Orders from "../../pages/admin/orders/Orders";
import Products from "../../pages/admin/products/Products";
import Settings from "../../pages/admin/settings/Settings";
import { IoMdClose, IoMdMenu } from "react-icons/io";
import { ListMenu } from "../../utils/Contants";
import { Link } from "react-router-dom";

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
        {ListMenu.map((item, index) => (
          <Link
            to={item.path}
            className="px-4 py-2 border rounded-2xl flex gap-2 items-center hover:bg-cyan-300"
          >
            {item.icon}
            <p>{item.title}</p>
          </Link>
        ))}

        <button className="p-2 border rounded-2xl bg-amber-300 hover:bg-amber-600">
          Log out
        </button>
      </div>
    </div>
  );
}

export default Navbar;
