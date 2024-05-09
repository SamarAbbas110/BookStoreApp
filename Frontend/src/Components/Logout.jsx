import React from "react";
import toast from "react-hot-toast";
import { useAuth } from "../Context/Authprovider";

function Logout() {
  const [authUser, setAuthUser] = useAuth();
  const handlelogout = () => {
    //Logout Functionality
    try {
      setAuthUser({
        ...authUser,
        user: null,
      });
      localStorage.removeItem("Users");
      toast.success("Logout Successfull");

      setTimeout(() => {
        //for delay the toast message
        window.location.reload();
      }, 1000);
    } catch (error) {
      toast.error(error.message);
      setTimeout(() => {}, 3000);
    }
  };
  return (
    <button
      className="bg-red-500 text-white px-4 py-2 rounded-md cursor-pointer"
      onClick={handlelogout}
    >
      Logout
    </button>
  );
}

export default Logout;
