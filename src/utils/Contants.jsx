import { FaCreditCard, FaShoppingCart } from "react-icons/fa";
import {
  MdAccountCircle,
  MdBrandingWatermark,
  MdCategory,
  MdDashboard,
  MdOutlinePayment,
  MdOutlinePreview,
  MdOutlineProductionQuantityLimits,
} from "react-icons/md";

export const ListMenu = [
  {
    icon: <MdDashboard />,
    title: "Dashboard",
    path: "/",
  },
  {
    icon: <MdCategory />,
    title: "Categories",
    path: "Categories",
  },
  {
    icon: <MdOutlineProductionQuantityLimits />,
    title: "Products",
    path: "/",
  },
  {
    icon: <MdOutlineProductionQuantityLimits />,
    title: "ProductItem",
    path: "/",
  },
  {
    icon: <MdAccountCircle />,
    title: "Account",
    path: "/",
  },
  {
    icon: <FaShoppingCart />,
    title: "Orders",
    path: "/",
  },
  {
    icon: <MdOutlinePreview />,
    title: "Reviews",
    path: "/",
  },
  {
    icon: <MdBrandingWatermark />,
    title: "Brands",
    path: "/",
  },
  {
    icon: <MdOutlinePayment />,
    title: "Payments",
    path: "/",
  },
  {
    icon: <FaShoppingCart />,
    title: "OrderItem",
    path: "/",
  },
];
