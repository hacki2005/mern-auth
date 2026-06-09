import React, { useContext } from "react";
import { assets } from "../assets/assets";
import { useNavigate } from "react-router-dom";
import { AppContent } from "../context/AppContext";
import axios from "axios";
import { toast } from "react-toastify";

const Navbar = () => {
  const navigate = useNavigate();
  

  const { userData, backendUrl, setIsLoggedin, setUserData } = useContext(AppContent);

  const sendVerificationOtp = async () => {
    try {
      axios.defaults.withCredentials = true;

      const { data } = await axios.post(backendUrl + '/api/auth/send-verify-otp')
      if (data.success) {
        navigate('/email-verify');
        toast.success(data.message)
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      
      toast.error(error.response?.data?.message || error.message || "Verification failed");
    }
  }

  const logout = async () => {
    try {
      axios.defaults.withCredentials = true;
      

      const { data } = await axios.post(backendUrl + "/api/auth/logout");
      
      if (data.success) {
        setIsLoggedin(false);
        setUserData(false);
        navigate("/");
      }
    } catch (error) {
      
      toast.error(error.response?.data?.message || error.message || "Logout failed");
    }
  };

  return (
    <div className="w-full flex justify-between items-center p-4 sm:p-6 sm:px-24 absolute top-0 z-50">
      {/* Logo */}
      <img src={assets.logo} alt="Logo" className="w-28 sm:w-32" />

      {userData ? (
        /* User Profile Avatar Circle Dropdown */
        <div className="w-8 h-8 flex justify-center items-center rounded-full bg-black text-white relative group cursor-pointer font-bold select-none">
          {/* Safely get the first letter of the user's name */}
          {userData?.name ? userData.name[0].toUpperCase() : "U"}

          {/* Dropdown Menu Container */}
          <div className="absolute hidden group-hover:block top-full right-0 pt-2 z-10 text-black">
            <ul className="list-none m-0 p-2 bg-gray-100 text-sm rounded shadow-md border border-gray-200 min-w-[120px]">
              {!userData.isAccountVerified && (
                <li onClick={sendVerificationOtp} className="py-1.5 px-3 hover:bg-gray-200 cursor-pointer rounded transition-colors whitespace-nowrap">
                  Verify Email
                </li>
              )}

              <li
                onClick={logout}
                className="py-1.5 px-3 hover:bg-gray-200 cursor-pointer rounded text-red-600 transition-colors"
              >
                Logout
              </li>
            </ul>
          </div>
        </div>
      ) : (
        <button
          onClick={() => navigate("/login")}
          className="flex items-center gap-2 border border-gray-500 rounded-full px-6 py-2 text-gray-800 hover:bg-gray-100 transition-all"
        >
          Login <img src={assets.arrow_icon} alt="" />
        </button>
      )}
    </div>
  );
};

export default Navbar;