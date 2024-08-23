import { useEffect } from "react";
import "./App.css";
import { useDispatch } from "react-redux";
import { Route, Routes, useNavigate } from "react-router-dom";

// Components
import Navbar from "./components/common/Navbar";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Error from "./pages/Error";
import ForgotPassword from "./pages/ForgotPassword";
// Pages
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import UpdatePassword from "./pages/UpdatePassword";
import VerifyEmail from "./pages/VerifyEmail";
import { getUserDetails } from "./services/operations/profileAPI";

function App() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem("token")) {
      const token = JSON.parse(localStorage.getItem("token"));
      dispatch(getUserDetails(token, navigate));
    }
  }, []);

  return (
    <div className="w-screen min-h-screen bg-richblack-900 flex flex-col font-inter">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="signup" element={<Signup />} />
        <Route path="login" element={<Login />} />
        <Route path="forgot-password" element={<ForgotPassword />} />
        <Route path="verify-email" element={<VerifyEmail />} />
        <Route path="update-password/:id" element={<UpdatePassword />} />
        <Route path="about" element={<About />} />
        <Route path="/contact" element={<Contact />} />

        <Route path="*" element={<Error />} />
      </Routes>
    </div>
  );
}

export default App;
