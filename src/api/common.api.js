import axios from "axios";

export const api_url = "https://2243-103-209-109-231.ngrok-free.app/api";

// Axios Instance with Token Management
const api = axios.create({
  baseURL: api_url,
  headers: { "Content-Type": "application/json" },
});

api.interceptors.request.use(
  async (config) => {
    let token = localStorage.getItem("access_token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

api.interceptors.response.use(
  (response) => response,
  async (error) => {
    if (error.response?.status === 401) {
      const refreshToken = localStorage.getItem("refresh_token");

      if (refreshToken) {
        try {
          const refreshResponse = await axios.post(`${api_url}/refresh-token`, {
            refresh_token: refreshToken,
          });

          const newAccessToken = refreshResponse.data.access_token;
          localStorage.setItem("access_token", newAccessToken);

          // Retry the failed request with new token
          error.config.headers.Authorization = `Bearer ${newAccessToken}`;
          return axios(error.config);
        } catch (refreshError) {
          console.error("Refresh token failed:", refreshError);
          localStorage.removeItem("access_token");
          localStorage.removeItem("refresh_token");
          window.location.href = "/login"; // Redirect user to login
        }
      }
    }
    return Promise.reject(error);
  }
);

export default api;

