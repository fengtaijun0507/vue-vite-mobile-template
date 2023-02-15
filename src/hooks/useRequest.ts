import { useAxios } from '@vueuse/integrations/useAxios';
import axios , {  type  AxiosRequestConfig } from 'axios';
import { showToast } from 'vant';

// create an axios instance
const instance = axios.create({
  baseURL: import.meta.env.VITE_URL_PREFIX,
  withCredentials: false,
  timeout: 5000
});

// request interceptor
instance.interceptors.request.use(
  (config) => {
    // do something before request is sent
    return config;
  },
  (error) => {
    // do something with request error
    console.log(error); // for debug
    return Promise.reject(error);
  }
);

// response interceptor
instance.interceptors.response.use(
  /**
   * If you want to get http information such as headers or status
   * Please return  response => response
   */

  /**
   * Determine the request status by custom code
   * Here is just an example
   * You can also judge the status by HTTP Status Code
   */
  (response) => {
    const res = response.data;
    console.log('res', res);

    // if the custom code is not 200, it is judged as an error.
    if (res.code !== 200) {
      showToast(res.msg);
      return Promise.reject(res.msg || 'Error');
    } else {
      return res;
    }
  },
  (error) => {
    console.log('err' + error);
    showToast(error.message);
    return Promise.reject(error.message);
  }
);


export default function useRequest(url: string, config: AxiosRequestConfig) {
  return useAxios(url, config, instance);
}
