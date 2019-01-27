import axios from "axios";

axios.defaults.baseURL = "https://webdev-api.loftschool.com";

const token = localStorage.getItem("token");

if (token) {
  axios.defaults.headers['Authorization'] = `Bearer ${token}`;
}

axios.interceptors.response.use(function (response) {
  return response;
}, function (error) {
  const originalRequest = error.config;

  if(error.response.status === 401) {
    return axios.post("/refreshToken").then(response => {
      const token = response.data.token;

      localStorage.setItem('token', token);
      
      axios.defaults.headers['Authorization'] = `Bearer ${token}`;
      originalRequest.headers['Authorization'] = `Bearer ${token}`;

      return axios(originalRequest);
    })
  }

  return Promise.reject(error); 
}
)
// axios.defaults.headers["Authorization"] = `Bearer ${localStorage.getItem(
//   "token"
// )}`;

// axios.interceptors.response.use(
//   response => {
//     return response;
//   },
//   error => {
//     const ttl = parseInt(localStorage.getItem("ttl"));
//     const DateNowInSeconds = Math.floor(Date.now() / 1000);
//     const originalRequest = error.config;
//     const timeMarginForSure = 10;

//     if (
//       DateNowInSeconds > ttl - timeMarginForSure &&
//       error.response.status === 401
//     ) {
//       return axios.post("/refreshToken").then(response => {
//         const token = response.data.token;
//         const ttl = Math.floor(Date.now() / 1000 + response.data.ttl);

//         localStorage.setItem("token", token);
//         localStorage.setItem("ttl", ttl);

//         axios.defaults.headers["Authorization"] = `Bearer ${token}`;
//         originalRequest.headers["Authorization"] = `Bearer ${token}`;

//         return axios(originalRequest);
//       });
//     }
//     return Promise.reject(error);
//   }
// );
export default axios;