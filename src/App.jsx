import "./App.css";
import HeaderAdmin from "./component/admin/HeaderAdmin";
import Navbar from "./component/admin/Navbar";
import SearchAdmin from "./component/admin/SearchAdmin";
import AdminRouter from "./routers/AdminRouter";

function App() {
  return (
    <div className="flex min-h-screen">
      <div className=" border-r">
        <Navbar />
      </div>
      <div className="flex-1">
        <HeaderAdmin />

        <AdminRouter />
      </div>
    </div>
  );
}

export default App;
