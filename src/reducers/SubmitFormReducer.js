import * as Types from '../../src/redux/actionType';

var initialState = {
    isLoading: false,
};

const SubmitFormReducer = (state = initialState, action) => {
    switch (action.type) {
        case Types.SUBMIT_DECLARATION:
            return {
                ...state,
                isLoading: false,
            };
        case Types.SUBMIT_DECLARATION_LOADING:
            return {
                ...state,
                isLoading: true,
            };
        case Types.SUBMIT_VACXIN:
            return {
                ...state,
                isLoading: false,
            };
        case Types.SUBMIT_VACXIN_LOADING:
            return {
                ...state,
                isLoading: true,
            };
        default: return state;
    }
};

export default SubmitFormReducer;