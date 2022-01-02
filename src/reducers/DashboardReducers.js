import * as Types from '../../src/redux/actionType';

var initialState = {
    summaryData:{},
    isLoading: false,
};

const DashboardReducers = (state = initialState, action) => {
    switch (action.type) {
        case Types.GET_SUMMARY:
            return {
                ...state,
                isLoading: true,
                summaryData: action.data
            };
        default: return state;
    }
};

export default DashboardReducers;