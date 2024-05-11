import axios from "axios";

const loginUser = async (userData) => {
  const response = await axios
    .post(`${import.meta.env.VITE_BASE_URL}/users/login`, userData, {
      withCredentials: true, // Axios automatically sends cookies when using withCredentials
      headers: {
        "Content-Type": "application/json",
      },
    })
    .then((response) => {
      window.localStorage.setItem("user", JSON.stringify(response.data));
      return response.data;
    })
    .catch((error) => error.response.data);
  return response;
};

const authService = { loginUser };
export default authService;
