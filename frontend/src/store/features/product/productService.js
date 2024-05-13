import axios from "axios";

const fetchProducts = async (userData) => {
  const response = await axios
    .get(`${import.meta.env.VITE_BASE_URL}/products/all`, userData, {
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

const productService = { fetchProducts };
export default productService;
