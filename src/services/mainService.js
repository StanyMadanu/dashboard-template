
import http from "./httpService";

const apiUrl = process.env.REACT_APP_API_URL;

export async function backEndCall(route) {
  const { data } = await http.post(apiUrl + route);
}
export async function backEndCallObj(route, obj) {
  const drreqpob = await helpers.encryptobj(obj);

  const { data } = await http.post(apiUrl + route, {
    enc: drreqpob,
  });
  return helpers.decryptobj(data);
}
