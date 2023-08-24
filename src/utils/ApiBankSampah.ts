import axios from "axios";

const baseURL = "http://103-175-216-13.cprapid.com:8822/server"

export const BSHandler = axios.create({
  baseURL,
});

// Add a request interceptor
// BSHandler.interceptors.request.use(
//   (config) => {
//     // Add the token to the 'cookies' header
//     config.headers["Set-Cookie"] = `token=${tokenFromCookie}`;
//     return config;
//   },
//   (error) => {
//     return Promise.reject(error);
//   }
// );
