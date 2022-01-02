import * as Types from './../../redux/actionType';
import { callApi } from './../../redux/apiCaller';
import { toastErrorText } from '../../helpers/toastify';
import { API_ROUTE } from '../../redux/constant';


export function getSummaryData() {
    return function(dispatch){
        return callApi(`${API_ROUTE.URL_GET_SUMMARY}`, 'GET').then(res => {
            if (res && res.data) {
                dispatch({type: Types.GET_SUMMARY, data: res.data[0]});
            } else {
                toastErrorText(res.statusText);
            }
        });
    }
}

