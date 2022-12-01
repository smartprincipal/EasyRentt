
import "./App.css";
import Landingpage from "./Pages/LandingPage/LandingPage";
import Login from "./Pages/Login/Login";
import Catalogue from "../src/Pages/Catalogue/Catalogue";
import SignUp from "./Pages/Signup/Signup";
import { Routes, Route } from "react-router-dom";
import Overview from "./Components/Overview/Overview";
import CatalogueNavbar from "./Components/CatalogueNavbar/CatalogueNavbar";
import NavBar from "./Components/NavBar/NavBar";
import CatalogueCard from "./Components/CatalogueCard/CatalogueCard";
import Maryland from "./Pages/Catalogue/Maryland";



function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Landingpage />} />
        <Route path="/" element={<Catalogue />} />
        <Route path="/Signup" element={<SignUp />} />
      </Routes>
      {/* <Maryland /> */}
      {/* <CatalogueNavbar /> */}
      {/* <CatalogueCard /> */}
    </div>
  );
}

export default App;
