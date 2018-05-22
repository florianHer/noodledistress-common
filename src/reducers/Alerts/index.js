import ALERTS from '../../constants/Alerts';

const initialState = {
    loading: false,
    alerts: null,
    error: null
};

export default (state = initialState, action) => {
    switch (action.type) {
        case ALERTS.UPDATING:
            return {
                ...initialState,
                loading: true
            };
        case ALERTS.UPDATED:
            return {
                ...state,
                loading: false,
                alerts: action.alerts,
                error: null
            };
        case ALERTS.UPDATE_ERROR:
            return {
                ...state,
                loading: false,
                error: action.err
            };
        default:
            return state;
    }
}