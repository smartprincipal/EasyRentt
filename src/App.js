import "./App.css";
import { Routes, Route } from "react-router-dom";
// import Schedule from "./Pages/SchedulePage/Schedule";
import Landingpage from "./Pages/LandingPage/LandingPage";
// import Login from "./Pages/Login/Login";
import Catalogue from "../src/Pages/Catalogue/Catalogue";
import SignUp from "./Pages/Signup/Signup";
import Landingpage from "./Pages/LandingPage/LandingPage";
import Login from "./Pages/Login/Login";
import Catalogue from "../src/Pages/Catalogue/Catalogue";
import SignUp from "./Pages/Signup/Signup";
// import CatalogueNavbar from "./Components/CatalogueNavbar/CatalogueNavbar";
import CatalogueCard from "./Components/CatalogueCard/CatalogueCard";
import Ajah from "./Pages/Catalogue/Ajah";
import Bananaisland from "./Pages/Catalogue/Bananaisland";
import Ikeja from "./Pages/Catalogue/Ikeja";
import Lekki from "./Pages/Catalogue/Lekki";
import Magodo from "./Pages/Catalogue/Magodo";
import Maryland from "./Pages/Catalogue/Maryland";
import Oshodi from "./Pages/Catalogue/Oshodi";
import Victoriaisland from "./Pages/Catalogue/Victoriaisland";
import Yaba from "./Pages/Catalogue/Yaba";
import Viewmore from "./Pages/Viewmore/Viewmore"
import Map from "./Components/Map/Map";
import ViewMap from "./Pages/ViewMap/ViewMap";
// import SchedulePage from "./Pages/SchedulePage/Schedule";
import PaymentPersonalInfo from "./Pages/PaymentPersonalInfo/PaymentPersonalInfo";
// import ViewMap from "./Pages/ViewMap/ViewMap";
import Ikeja from './Pages/Catalogue/Ikeja'
import Lekki from './Pages/Catalogue/Lekki'
import Magodo from './Pages/Catalogue/Magodo'
import Oshodi from './Pages/Catalogue/Oshodi'
import Ajah from './Pages/Catalogue/Ajah'
import Bananaisland from './Pages/Catalogue/Bananaisland'
import Yaba from './Pages/Catalogue/Yaba'
import Maryland from './Pages/Catalogue/Maryland'
import Victoriaisland from './Pages/Catalogue/Victoriaisland'














function App() {
  return (
    <div>

      <Routes>
        <Route path="/" element={<Landingpage />} /> 
        <Route path="/Catalogue" element={<Catalogue />} />
        <Route path="/Signup" element={<SignUp />} />
        <Route path="/Bananaisland" element={<Bananaisland />} />
        <Route path="/Ikeja" element={<Ikeja />} />
        <Route path="/Lekki" element={<Lekki />} />
        <Route path="/Magodo" element={<Magodo />} />
        <Route path="/Maryland" element={<Maryland />} />
        <Route path="/Oshodi" element={<Oshodi />} />
        <Route path="/Victoriaisland" element={<Victoriaisland />} />
        <Route path="/Yaba" element={<Yaba />} />
        <Route path="/PaymentPersonalInfo" element={<PaymentPersonalInfo />} />

      </Routes>
      {/* <Overview /> */}
      {/* <Login /> */}
      <Landingpage />
      {/* <Catalogue/> */}
      {/* <SignUp /> */}
      {/* <Viewmore/> */}
      {/* <SchedulePage/> */}
      <PaymentPersonalInfo/>
      {/* <Map/> */}
      {/* <ViewMap/> */}
    </div>
  );
}

export default App;
