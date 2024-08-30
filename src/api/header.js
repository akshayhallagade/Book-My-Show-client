import axios from "axios";

const apiv1Instance = axios.create({
  baseURL: "http://localhost:8000/api/v1/",
  responseType: "json",
});

apiv1Instance.interceptors.request.use((request) => {
  const token = localStorage.getItem("token");
  if (token) request.headers.Authorization = `Bearer ${token}`;
  return request;
});

export default apiv1Instance;
