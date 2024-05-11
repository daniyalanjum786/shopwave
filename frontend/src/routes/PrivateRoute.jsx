import axios from "axios";
import { useEffect, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Loader from "../components/Loader";

function PrivateRoute() {
  const [isAdmin, setIsAdmin] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    const adminCheck = async () => {
      // TODO: Calling wrong api, decided in future to correct it
      await axios
        .get(`${import.meta.env.VITE_BASE_URL}/users//admin/all-users`, {
          withCredentials: true, // Axios automatically sends cookies when using withCredentials
          headers: {
            "Content-Type": "application/json",
          },
        })
        .then((response) => {
          setIsAdmin(true);
          console.log(response);
        })
        .catch((error) => {
          toast.error(error.response.data.message, { autoClose: 1500 });
        });
    };
    adminCheck();
  }, [navigate]);
  return isAdmin ? <Outlet /> : <Loader />;
}

export default PrivateRoute;
