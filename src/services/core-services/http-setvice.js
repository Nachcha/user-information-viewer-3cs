import axios from "axios";

const axiosInstance = axios;

axiosInstance.defaults.headers.common = {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "*",
    "Access-Control-Allow-Headers": "*",
};

axiosInstance.interceptors.response.use(
    response => { return Promise.resolve(response) },
    error => { return Promise.reject(error) }
);

export default {
    get: axiosInstance.get,
    post: axiosInstance.post,
    put: axiosInstance.put,
    delete: axiosInstance.delete
};
