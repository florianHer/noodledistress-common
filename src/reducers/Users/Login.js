import USERS from '../../constants/User';

const initialState = {
    loading: false,
    user: null,
    error: null
};

export default (state = initialState, action) => {
    switch (action.type) {
        case USERS.FETCH_LOGIN:
            return {
                ...state,
                ...initialState,
                loading: true
            };
        case USERS.LOGIN:
            return {
                ...state,
                loading: false,
                user: action.user,
                error: null
            };
        case USERS.EXIT_LOGIN:
            return {
                ...state,
                loading: false,
                user: null,
                error: action.err
            };
        case USERS.LOGOUT:
            return {
                ...initialState
            };
        default:
            return state;
    }
}