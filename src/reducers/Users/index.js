import USERS from '../../constants/User';

const initialState = {
    loading: false,
    user: null,
    error: null
};

export default (state = initialState, action) => {
    switch (action.type) {
        case USERS.UPDATING:
        case USERS.CREATING:
        case USERS.FETCH_LOGIN:
            return {
                ...state,
                ...initialState,
                loading: true
            };
        case USERS.CREATED:
        case USERS.UPDATED:
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
        case USERS.UPDATE_ERROR:
            return {
                ...state,
                loading: false,
                error: action.err
            };
        case USERS.CREATE_ERROR:
            return {
                ...initialState,
                loading: false,
                error: action.err
            };
        default:
            return state;
    }
}