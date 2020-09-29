import axios from "axios";
export function request(config) {
  const instance1 = axios.create({
    baseURL: "/api",
    timeout: 30000
  });
  return instance1(config);
}
