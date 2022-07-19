import axios from 'axios';

const headers = {
  Authorization: 'Basic 1dfdf2c1-7365-4625-b7d9-d9db5210f18d',
  'Content-Type': 'application/json',
};
export const ProductApi = async () => {
  return await axios.get('https://mysaralapp.com/mall-test/getallproducts', {
    headers,
  });
};

export const CreateUserApi = async user => {
  return await axios.post('https://mysaralapp.com/mall-test/addorder/', user, {
    headers,
  });
};

export const GetUserDetailsApi = async () => {
  return await axios.get('https://mysaralapp.com/mall-test/getallorders/', {
    headers,
  });
};

// `https://mysaralapp.com/mall-test/addorder/?user=${user}`
