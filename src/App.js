
import "./App.css";
import Landingpage from "./Pages/LandingPage/LandingPage";
import Login from "./Pages/Login/Login";
import Catalogue from "../src/Pages/Catalogue/Catalogue";
import SignUp from "./Pages/Signup/Signup";
import { Routes, Route } from "react-router-dom";
import Overview from "./Components/Overview/Overview";


function App() {
  return (
    <div>
      <Routes>
        {/* <Route path="/" element={<Landingpage />} /> */}
        <Route path="/" element={<Catalogue />} />
        <Route path="/Signup" element={<SignUp />} />
      </Routes>
      {/* <Overview /> */}
      {/* <Login /> */}
      {/* <Landingpage /> */}
      {/* <Catalogue/>  */}
      {/* <SignUp /> */}

    </div>
  );
}

export default App;
