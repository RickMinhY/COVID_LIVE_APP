import * as Types from '../../src/redux/actionType';

var initialState = {
    detailData: {},
    isLoading: false,
};

const VacxinDetailReducer = (state = initialState, action) => {
    switch (action.type) {
        case Types.GET_VACXIN_LOADING:
            return {
                ...state,
                isLoading: true,
            };
        case Types.GET_VACXIN:
            return {
                ...state,
                isLoading: false,
                detailData: action.data
            };
        default: return state;
    }
};

export default VacxinDetailReducer;