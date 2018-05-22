import GPS from '../../constants/Gps';

const initialState = {
    lat: null,
    lng: null
};

export default (state = initialState, action) => {
    switch (action.type) {
        case GPS.UPDATE:
            return {
                ...state,
                lat: action.coords.lat,
                lng: action.coords.lng
            };
        default:
            return state;
    }
}