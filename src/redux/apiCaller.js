import axios from 'axios';
import { API_ENPOINT } from '../redux/constant';

export var callApi = function (endpoint, method = 'GET', body) {
    return axios({
        method: method,
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        url: `${endpoint}`,
        data: body
    }).catch(err => {

    });
};