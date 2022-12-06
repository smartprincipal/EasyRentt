

import "./App.css";
import { Routes, Route } from "react-router-dom";
import Landingpage from "./Pages/LandingPage/LandingPage";
import Login from "./Pages/Login/Login";
import Catalogue from "../src/Pages/Catalogue/Catalogue";
// import SignUp from "./Pages/Signup/Signup";
// import CatalogueNavbar from "./Components/CatalogueNavbar/CatalogueNavbar";
// import CatalogueCard from "./Components/CatalogueCard/CatalogueCard";
import Maryland from "./Pages/Catalogue/Maryland";




function App() {
  return (
    <div>
      {/* <Routes>
        <Route path="/" element={<Landingpage />} />
        <Route path="/Catalogue" element={<Catalogue />} />
        <Route path="/Signup" element={<SignUp />} />
        <Route path="/Login" element={<Login />} />
      </Routes> */}
      
      <Maryland />

      {/* <CatalogueNavbar /> */}
      {/* <CatalogueCard /> */}
    
    </div>
  );
}

export default App;
