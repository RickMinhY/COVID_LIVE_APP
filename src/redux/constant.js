const { REACT_APP_URL_GET_SUMMARY, REACT_APP_URL_SUBMIT_DECLARATION, REACT_APP_URL_SUBMIT_VACXIN, REACT_APP_URL_GET_VACXIN } = process.env
export const API_ENPOINT = 'https://localhost:44317/api';


export const MESSAGE = {
    GET_SUCCESS: 'Tải dữ liệu thành công!',
    GET_FAILURE: 'Tải dữ liệu không thành công!',
    SAVE_SUCCESS: 'Ghi dữ liệu thành công!',
    SAVE_FAILURE: 'Ghi dữ liệu không thành công!',
};

export const API_ROUTE = {
    // URL_GET_SUMMARY:'https://vaccovid.live/api/npm-covid-data/country-report-iso-based/Vietnam/VNM'
    URL_GET_SUMMARY: REACT_APP_URL_GET_SUMMARY,
    URL_SUBMIT_DECLARATION: REACT_APP_URL_SUBMIT_DECLARATION,
    URL_SUBMIT_VACXIN: REACT_APP_URL_SUBMIT_VACXIN,
    URL_GET_VACXIN: REACT_APP_URL_GET_VACXIN
};