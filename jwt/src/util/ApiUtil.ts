import axios from "axios";

const ApiUtil = axios.create({
  withCredentials: true,
  baseURL: "http://localhost:3001",
});

export default ApiUtil;
