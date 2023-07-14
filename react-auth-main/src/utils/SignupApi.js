import axios from "axios";

const BASE_URL = `${window.location.protocol}//${window.location.hostname}:${window.location.port}`;

export const register = async (email, password) => {
  try {
    const response = await axios.post(`${BASE_URL}/register`, { email, password });
    return response.data;
  } catch (error) {
    console.error(error);
  }
};