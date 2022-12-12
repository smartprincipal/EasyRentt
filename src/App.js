import "./App.css";
import { Routes, Route } from "react-router-dom";
// import Schedule from "./Pages/SchedulePage/Schedule";
import Landingpage from "./Pages/LandingPage/LandingPage";
import Catalogue from "../src/Pages/Catalogue/Catalogue";
import SignUp from "./Pages/Signup/Signup";
import Login from "./Pages/Login/Login";
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
import SchedulePage from "./Pages/SchedulePage/Schedule";
import PaymentPersonalInfo from "./Pages/PaymentPersonalInfo/PaymentPersonalInfo";
import ForgetPassword from "./Pages/ForgetPassword/ForgetPassword";
import Calendar from "./Components/Calendar/Calendar";
import PaymentCardPage from "./Pages/PaymentCardPage/PaymentCardPage";
import Schedule from "./Pages/SchedulePage/Schedule";
import Time from "./Components/Time/Time";
import Payment from "./Components/Payment/Payment";



function App() {
  return (
    <div>

      {/* <Routes>
        <Route path="/" element={<Landingpage />} /> 
        <Route path="/Catalogue" element={<Catalogue />} />
        <Route path="/Signup" element={<SignUp />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Bananaisland" element={<Bananaisland />} />
        <Route path="/Ikeja" element={<Ikeja />} />
        <Route path="/Lekki" element={<Lekki />} />
        <Route path="/Magodo" element={<Magodo />} />
        <Route path="/Maryland" element={<Maryland />} />
        <Route path="/Oshodi" element={<Oshodi />} />
        <Route path="/Victoriaisland" element={<Victoriaisland />} />
        <Route path="/Yaba" element={<Yaba />} />
        {/* <Route path="/PaymentPersonalInfo" element={<PaymentPersonalInfo />} />
        <Route path="/SchedulePage" element={<SchedulePage />} />
        <Route path="/ViewMap" element={<ViewMap />} /> */}
        <Route path="/Viewmore" element={<Viewmore />} />
        <Route path="/Map" element={<Map />} />
        <Route path="/PaymentCardPage" element={<PaymentCardPage />} />
      </Routes> */}

      {/* <Calendar/> */}
      <PaymentCardPage/>
      {/* <Viewmore/> */}
      {/* <Time/> */}
      {/* <Payment/> */}
    </div>
  );
}

export default App;
