import axios from "axios";
import base_api from "../constants";
console.log(base_api)

// const BASE_URL = `${window.location.protocol}//${window.location.hostname}:${window.location.port}`; // Đường dẫn đến server API
const BASE_URL = base_api;
// Hàm gửi yêu cầu đăng nhập và trả về thông tin người dùng và mã thông báo truy cập
export const login = async (email, password) => {
  try {
    const response = await axios.post(`${BASE_URL}/login`, { email, password });
    return response.data;
  } catch (error) {
    console.error(error);
    throw new Error("Đăng nhập thất bại"); // Xử lý lỗi
  }
};