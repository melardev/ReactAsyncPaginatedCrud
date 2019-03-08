import axios from "axios";

let cachedUser = {};

const axiosInstance = axios.create({
    baseURL: 'http://localhost:8080/api',
    responseType: 'json',
    responseEncoding: 'utf8'
});

axiosInstance.interceptors.request.use((config) => {
    if (cachedUser.token)
        config.headers.authorization = "Bearer " + cachedUser.token;
    return config;
}, function (error) {
    return Promise.reject(error);
});

function get(url) {
    return axiosInstance.get(url)
}

function post(url, data) {
    return axiosInstance.post(url, data);
}

function put(url, data) {
    return axiosInstance.put(url, data);
}

function _delete(url) {
    return axiosInstance.delete(url);
}

function setUser(user) {
    cachedUser = user;
}

const fetchPage = (url, page, page_size) => {
    return axiosInstance.get(`${url}?page=${page || 1}&page_size=${page_size || 5}`)
};

export const AxiosService = {
    axiosInstance,
    fetchPage,
    get,
    setUser,
    post,
    put,
    delete: _delete
};