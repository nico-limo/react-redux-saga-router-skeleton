import axios from 'axios';

const baseURL = 'http://www.omdbapi.com?apiKey=f3692617';

export const apiCall = (url, data, headers, method) => axios({
    method,
    url: baseURL + url,
    data,
    headers
});