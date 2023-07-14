import axios from "axios";

const BASE_URL = `${window.location.protocol}//${window.location.hostname}:${window.location.port}`; // Đường dẫn đến server API

// Hàm gửi yêu cầu đăng nhập và trả về thông tin người dùng và mã thông báo truy cập
export const login = async (email, password) => {
  const response = await axios.post(`${BASE_URL}/login`, { email, password });
  return response.data;
};
