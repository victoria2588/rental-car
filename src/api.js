import axios from 'axios';

axios.defaults.baseURL = 'https://6572d9b5192318b7db4120da.mockapi.io/';

export const getAdverts = async () => {
  const response = await axios.get('/adverts');
  return response.data;
};
