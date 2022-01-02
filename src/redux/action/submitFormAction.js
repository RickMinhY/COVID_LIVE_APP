import * as Types from './../../redux/actionType';
import { callApi } from './../../redux/apiCaller';
import { toastErrorText, toastSuccessText } from '../../helpers/toastify';
import { API_ROUTE, MESSAGE } from '../../redux/constant';


export function submitVacxinAction(data) {
    return function (dispatch) {
        dispatch({ type: Types.SUBMIT_VACXIN_LOADING })
        return callApi(`${API_ROUTE.URL_SUBMIT_VACXIN}`, 'POST', data).then(res => {
            if (res && res.data) {
                dispatch({ type: Types.SUBMIT_VACXIN, data: res.data });
                toastSuccessText(MESSAGE.SAVE_SUCCESS);
                window.location.reload(true);
            } else {
                toastErrorText(MESSAGE.SAVE_FAILURE);
                dispatch({ type: Types.SUBMIT_VACXIN });
            }
        });
    }
}

export function submitDeclarationAction(data) {
    return function (dispatch) {
        dispatch({ type: Types.SUBMIT_DECLARATION_LOADING })
        return callApi(`${API_ROUTE.URL_SUBMIT_DECLARATION}`, 'POST', data).then(res => {
            if (res && res.data) {
                dispatch({ type: Types.SUBMIT_DECLARATION, data: res.data });
                toastSuccessText(MESSAGE.SAVE_SUCCESS);
                window.location.reload(true);
            } else {
                toastErrorText(MESSAGE.SAVE_FAILURE);
                dispatch({ type: Types.SUBMIT_DECLARATION });
            }
        });
    }
}