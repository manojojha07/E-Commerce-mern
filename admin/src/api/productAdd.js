// api/productAdd.js
import axios from 'axios'
import { backendURL } from '../App'

export const add_New_Product = async (formData, token) => {
  const { data } = await axios.post(`${backendURL}/api/product/add`, formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
      token: token,
    },
  });
  return data;
};

export default add_New_Product;
