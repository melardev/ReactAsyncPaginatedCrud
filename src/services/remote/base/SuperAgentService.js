import superagentPromise from 'superagent-promise';
import _superagent from 'superagent';
// user superAgentPromise
const superAgentPromise = superagentPromise(_superagent, global.Promise);
const API_URL_BASE = 'http://localhost:8080/api';

let cachedUser = {};
export const setUser = function (user) {
    cachedUser = user;
};
const headersPlugin = req => {
    req.set('Accept', 'application/json');
    req.set('Content-Type', 'application/json');
    if (cachedUser) {
        req.set('authorization', `Bearer ${cachedUser.token}`);
    }
};

const rensponseBody = (res) => res.data;

export const SuperAgentService = {
    superAgentPromise, // also exposing instance if needed somewhere in the application
    fetchPage: (url, page, page_size) => superAgentPromise.get(`${API_URL_BASE}${url}?page=${page}&page_size=${page_size}`),
    get: url => superAgentPromise.get(`${API_URL_BASE}${url}`).use(headersPlugin).then(rensponseBody),
    post: (url, body) => superAgentPromise.post(`${API_URL_BASE}${url}`, body).use(headersPlugin).then(rensponseBody),
    put: (url, body) => superAgentPromise.put(`${API_URL_BASE}${url}`, body).use(headersPlugin).then(rensponseBody),
    del: url => superAgentPromise.del(`${API_URL_BASE}${url}`).use(headersPlugin).then(rensponseBody),
    setUser
};