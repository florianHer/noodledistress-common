import CALLS from '../../constants/Call';

const initialState = {
    loading: false,
    call: null,
    error: null
};

export default (state = initialState, action) => {
    switch (action.type) {
        case CALLS.CREATING:
            return {
                ...state,
                ...initialState,
                loading: true
            };
        case CALLS.UPDATING:
            return {
                ...state,
                loading: true
            };
        case CALLS.UPDATED:
        case CALLS.CREATED:
            return {
                ...state,
                loading: false,
                call: action.call,
                error: null
            };
        case CALLS.UPDATE_ERROR:
            return {
                ...state,
                loading: false,
                error: action.err
            };
        case CALLS.CREATE_ERROR:
            return {
                ...state,
                loading: false,
                call: null,
                error: action.err
            };
        default:
            return state;
    }
}