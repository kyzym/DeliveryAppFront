import axios from 'axios';
const BASE_URL = 'http://localhost:3001/api/';

export const fetchShops = async () => {
  const response = await axios.get(`${BASE_URL}shops`);
  return response.data.result;
};

export const createOrder = async (order) => {
  return axios.post(`${BASE_URL}orders`, order);
};
