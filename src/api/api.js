import axios from 'axios';
export const BASE_URL = 'https://delivery-app-back-iruk.onrender.com/api/';

export const fetchShops = async () => {
  const response = await axios.get(`${BASE_URL}shops`);
  return response.data.result;
};

export const createOrder = async (order) => {
  return axios.post(`${BASE_URL}orders`, order);
};
