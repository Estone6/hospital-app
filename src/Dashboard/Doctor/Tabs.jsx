import { BiMenu } from "react-icons/bi";
import PropTypes from "prop-types"; // Step 1: Import PropTypes
import { AuthContext } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";

const Tabs = ({ tab, setTab }) => {
  const { dispatch } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch({ type: "LOGOUT" });
    navigate("/");
  };

  return (
    <div>
      <span className="lg:hidden">
        <BiMenu className="w-6 h-6 cursor-pointer" />
      </span>
      <div className="hidden lg:flex flex-col p-[30px] bg-white shadow-panelShadow items-center h-max rounded-md">
        <button
          className={`w-full btn mt-0 rounded-md ${
            tab === "overview"
              ? "bg-indigo-100 text-primaryColor"
              : "bg-transparent text-headingColor"
          }`}
          onClick={() => setTab("overview")}
        >
          Overview
        </button>
        <button
          className={`w-full btn mt-0 rounded-md ${
            tab === "appointments"
              ? "bg-indigo-100 text-primaryColor"
              : "bg-transparent text-headingColor"
          }`}
          onClick={() => setTab("appointments")}
        >
          Appointments
        </button>
        <button
          className={`w-full btn mt-0 rounded-md ${
            tab === "settings"
              ? "bg-indigo-100 text-primaryColor"
              : "bg-transparent text-headingColor"
          }`}
          onClick={() => setTab("settings")}
        >
          Profile
        </button>

        <div className="mt-[100px] md:mt-[100px]">
          <button
            onClick={handleLogout}
            className="w-full bg-[#181A1E] p-3 text-[16px] leading-7 rounded-md text-white"
          >
            Logout
          </button>
          <button className="w-full bg-red-600 mt-4 p-3 text-[16px] leading-7 rounded-md text-white">
            Delete account
          </button>
        </div>
      </div>
    </div>
  );
};

// Step 2: Define PropTypes
Tabs.propTypes = {
  tab: PropTypes.string.isRequired, // Ensuring 'tab' is a string and is required
  setTab: PropTypes.func.isRequired, // Ensuring 'setTab' is a function and is required
};

export default Tabs;
