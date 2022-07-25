import axios from 'axios';

const api = axios.create({
  baseURL: 'https://content-api-rec.herokuapp.com/api'
})

export default api;
