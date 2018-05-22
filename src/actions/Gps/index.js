import GPS from '../../constants/Gps';

// GPS GEOLOCATION
export function updateGeolocationAction(coords) {
    return {
        type: GPS.UPDATE,
        coords
    }
}