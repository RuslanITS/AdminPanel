import * as axios from "axios";

const axiosApi = axios.create({
  baseURL: 'https://homework65-a8ea3-default-rtdb.firebaseio.com/'
});

export default axiosApi