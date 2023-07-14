import axios from 'axios';
const BASE_URL = 'http://localhost:3000'; // Đường dẫn đến server API

export const register = async (email, password) => {
  try {
    const response = await fetch(`${BASE_URL}/register`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password }),
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
};