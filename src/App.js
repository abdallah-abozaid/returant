import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import AppNavbar from "./components/Navbar/AppNavbar";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Orders from "./pages/Orders";
import Bills from "./pages/Bills";
import Capsolute from "./pages/Capsolute";

function App() {
  return (
    <div className="App">
      <AppNavbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/Bills" element={<Bills />} />
        <Route path="/capsolute" element={<Capsolute />} />
      </Routes>
    </div>
  );
}

export default App;
