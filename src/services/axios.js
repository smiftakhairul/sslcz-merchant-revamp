import axios from "axios";
import { apiBaseUrl } from "constants/default-values";
import { getCurrentUser, setCurrentUser } from "helpers/utils";
import { NotificationManager } from "../components/notifications";

export const instance = axios.create();

instance.defaults.headers.common = {
  Accepts: "application/json",
};
instance.interceptors.request.use((config) => {
  // config.baseURL = base_url; add the baseurl
  // config.headers['Authorization'] = localStorage.getItem('token_type') + ' ' + localStorage.getItem('access_token'); //pass the token
  return config;
});
instance.interceptors.response.use(
  (res) => {
    // modify the response and logout if 401
    return res;
  },
  (error) => {
    // modify the response and logout if 401
    return Promise.reject(error);
  }
);

var headers = {
  Accept: "application/json",
  lang: "en",
  ipAddress: "192.168.69.191",
  deviceId: navigator.userAgent + navigator.appName + navigator.appVersion,
  simId: Date.now(),
  apiUrl: "/api/v1/login",
  googleAdId: "GOOGLE090932",
  subscriptionId: "SUBSCRIBE090932",
  userAgent: "PostmanRuntime/7.20.1",
  browserName: "Postman",
  browserVersion: "7.20.1",
  osPlatform: "Linux",
  deviceType: "Computer",
  imeiNo: "950345832532",
};

const apiClient = (
  action,
  params,
  body = {},
  callback = null,
  setError = null
) => {
  let selectedStores = JSON.parse(localStorage.getItem("selected_stores")) || [];
  if (selectedStores.length) {
    if (!body.store_list_key) body.store_list_key = selectedStores.map(item => item.stid);
    if (!params.store_list_key) params.store_list_key = selectedStores.map(item => item.stid);
  }

  const user = getCurrentUser();
  headers.action = action;
  if (user) headers.sessionId = user.sessionId;
  return axios
    .create({
      baseURL: apiBaseUrl,
      // withCredentials: true,
      headers: headers,
    })
    .request({
      url: "/api/v1/endpoint",
      method: "POST",
      params: params,
      data: body,
    })
    .then((response) => {
      if (response.data.code === 401) unAuthorized();

      if (response.status === 200 && response.data.code === 200) {
        return response;
      }
      throw response;
    })
    .catch((error) => {
      // if (error.response.data.status === 422 && error.response.data.errors) {
      //   let messages = [error.response.data.message];
      //   Object.keys(error.response.data.errors).forEach((key) => {
      //     messages.push(error.response.data.errors[key]);
      //   });

      //   throw messages;
      //   // {"message":"The given data was invalid.","errors":{"name":["The name must not be greater than 2 characters."]}}
      // }
      if (error.data.code === 401) unAuthorized();
      NotificationManager.warning(
        error.data.message,
        "Error",
        3000,
        null,
        null,
        ""
      );
      throw error.data.message;
    });
};

const unAuthorized = () => {
  NotificationManager.warning(
    "Not Authorized",
    "Login Error",
    3000,
    null,
    null,
    ""
  );
  setCurrentUser();
  window.location.replace("/");
};
export default apiClient;
