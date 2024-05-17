import Home from "../pages/Home";
import Services from "../pages/Services";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import Contact from "../pages/Contact";
import Doctors from "../pages/Doctors/Doctors";
import DoctorDetails from "../pages/Doctors/DoctorDetails";
import UserAccount from "../Dashboard/User/UserAccount";
import DoctorAccount from "../Dashboard/Doctor/DoctorAccount";

import { Routes, Route } from "react-router-dom";
import ProtectedRoutes from "./ProtectedRoutes";

const Routers = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={<Home />}
      />
      <Route
        path="/home"
        element={<Home />}
      />
      <Route
        path="/doctors"
        element={<Doctors />}
      />
      <Route
        path="/doctors/:id"
        element={<DoctorDetails />}
      />
      <Route
        path="/login"
        element={<Login />}
      />
      <Route
        path="/register"
        element={<Signup />}
      />
      <Route
        path="/contact"
        element={<Contact />}
      />
      <Route
        path="/services"
        element={<Services />}
      />
      <Route
        path="/users/profile/me"
        element={
          <ProtectedRoutes allowedRoles={["patient"]}>
            <UserAccount />
          </ProtectedRoutes>
        }
      />
      <Route
        path="/doctors/profile/me"
        element={
          <ProtectedRoutes allowedRoles={["doctor"]}>
            <DoctorAccount />
          </ProtectedRoutes>
        }
      />
    </Routes>
  );
};

export default Routers;
