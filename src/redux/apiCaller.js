import axios from 'axios';
import { API_ENPOINT } from '../redux/constant';

export var callApi = function (endpoint, method = 'GET', body) {
    return axios({
        method: method,
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json,charset=utf-8',
        },
        url: `${endpoint}`,
        data: body
    }).catch(err => {
        
    });
};