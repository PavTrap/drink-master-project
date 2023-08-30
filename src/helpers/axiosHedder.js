import axios from 'axios';

export default function setAuthHeader(token) {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
}


export const clearAuthHeader = () => {
    axios.defaults.headers.common.Authorization = '';
  };