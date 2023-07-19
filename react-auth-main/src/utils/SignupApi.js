//import axios from "axios";

const BASE_URL ="http://trangpham.gcalls.vn/api";

export const register = async (email, password) => {
  try {
    const response = await axios.post(`${BASE_URL}/register`, { email, password });
    return response.data;
  } catch (error) {
    console.error(error);
  }
};
