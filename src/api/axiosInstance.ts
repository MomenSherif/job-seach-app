import axios, { AxiosError } from 'axios';

const instance = axios.create({
  baseURL: 'http://api.dataatwork.org/v1',
});

instance.interceptors.response.use(
  (res) => res.data,
  (err: AxiosError) =>
    Promise.reject(err.response?.data.message || 'Network Error'),
);

export default instance;
