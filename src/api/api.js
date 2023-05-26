import axios from 'axios';
// export const BASE_URL = 'https://delivery-app-back-iruk.onrender.com/api/';
export const BASE_URL = 'http://localhost:3001/api/';

export const fetchShops = async () => {
  const response = await axios.get(`${BASE_URL}shops`);
  return response.data.result;
};

export const createOrder = async (order) => {
  return axios.post(`${BASE_URL}orders`, order);
};

export const fetchOrderHistory = async (email, phone) => {
  const response = await axios.post(`${BASE_URL}orders/history`, {
    email,
    phone,
  });
  return response.data;
};
