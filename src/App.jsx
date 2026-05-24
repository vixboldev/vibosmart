import "./App.css";
import HeaderAdmin from "./component/admin/HeaderAdmin";
import Navbar from "./component/admin/Navbar";

function App() {
  return (
    <div className="grid grid-cols-5 min-h-screen">
      <div className="col-span-1 border-r">
        <Navbar />
      </div>
      <div className="col-span-4">
        <HeaderAdmin />
      </div>
    </div>
  );
}

export default App;
