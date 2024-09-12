import axios from "axios"; // axios should be imported as default
import logger from "./logServices";
import { toast } from "react-toastify";

// Handling unexpected errors
axios.interceptors.response.use(
  (response) => response, // Keep the response if there's no error
  (error) => {
    const expectedError =
      error.response &&
      error.response.status >= 400 &&
      error.response.status < 500;

    if (!expectedError) {
      logger.log(error);
      toast.error("An unexpected error occurred");
    }

    return Promise.reject(error);
  }
);

// Function to set JWT in the headers
function setJwt(jwt) {
  axios.defaults.headers.common["x-auth-token"] = jwt;
}

// Assigning the export object to a variable
const httpService = {
  get: axios.get,
  post: axios.post,
  setJwt,
};

export default httpService;
