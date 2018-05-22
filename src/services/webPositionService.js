
export default class Gps {
    // Start watching geolocation
    id = null;

    watch(callback) {
        if (this.id === null) {
            if ("geolocation" in navigator && callback) {
                this.id = navigator.geolocation.watchPosition((position) => {
                    callback(position.coords.latitude, position.coords.longitude);
                }, null, {enableHighAccuracy:true, maximumAge:30000, timeout:27000});
            }
        }
        return null;
    };

    // Stop watching geolocation
    stop() {
        if ("geolocation" in navigator) {
            navigator.geolocation.clearWatch(this.id);
        }
    }
}