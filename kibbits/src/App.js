import "./App.css";
import Home from "./View/home.jsx";
import Mesero from "./View/mesero";
import Cocina from "./View/cocina.jsx";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="mesero" element={<Mesero />} />
        <Route path="cocina" element={<Cocina />} />
      </Routes>
    </>
  );
}

export default App;
