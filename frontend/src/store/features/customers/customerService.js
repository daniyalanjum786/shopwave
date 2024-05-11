import axios from "axios";

const getUsers = async () => {
  const response = await axios
    .post(`${import.meta.env.VITE_BASE_URL}/users/admin/all-users`, {
      withCredentials: true, // Axios automatically sends cookies when using withCredentials
      headers: {
        "Content-Type": "application/json",
      },
    })
    .then((response) => {
      return response.data;
    })
    .catch((error) => error.response.data);
  return response;
};

const customerService = { getUsers };
export default customerService;
