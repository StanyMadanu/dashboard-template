import { jwtDecode } from "jwt-decode";
import http from "./httpService";

const apiEndpoint = process.env.REACT_APP_API_URL;
const tokenKey = "token";

http.setJwt(getJwt());

export async function login(
  email,
  password,
  last_ip,
  device_id,
  browserid,
  fcm_token
) {
  try {
    const { data: jwt } = await http.post(apiEndpoint + "/emp/login", {
      email,
      password,
      last_ip,
      device_id,
      browserid,
      fcm_token,
    });
    localStorage.setItem(tokenKey, jwt.token);
  } catch (error) {
    console.error("Login failed", error);
    throw error;
  }
}

export function logout() {
  localStorage.clear();
  localStorage.removeItem(tokenKey);
  window.location = "/";
}

export function getCurrentUser() {
  try {
    const jwt = localStorage.getItem(tokenKey);
    return jwtDecode(jwt);
  } catch (error) {
    return null;
  }
}

export function getJwt() {
  return localStorage.getItem(tokenKey);
}

const authService = {
  login,
  logout,
  getCurrentUser,
  getJwt,
};

export default authService;
