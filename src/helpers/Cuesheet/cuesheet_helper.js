import { APIClient } from "../api_helper";
import * as url from "../url_helper";

const api = new APIClient();

// Gets the logged in user data from local session
export const getLoggedInUser = () => {
  const user = localStorage.getItem("authUser");
  if (user) return JSON.parse(user);
  return null;
};

// //is user is logged in
export const isUserAuthenticated = () => {
  return getLoggedInUser() !== null;
};

// 큐시트
export const getCuesheets = (data) => {
  console.log("----cuesheet_helper----");
  console.log(url.GET_CUESHEET);
  console.log(data);
  return api.get(url.GET_CUESHEET, data).catch((err) => {
    var message;
    console.log("message", message); //에러 없으니까 메시지 안 나옴
    if (err.response && err.response.status) {
      switch (err.response.status) {
        default:
          message = err[1];
          break;
      }
    }
    throw message;
  });
};
