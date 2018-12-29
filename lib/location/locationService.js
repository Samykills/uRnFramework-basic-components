export default class LocationService {
  static getCurrentLocation = () => {
    let gpsPromise = new Promise(function(resolve, reject) {
      navigator.geolocation.getCurrentPosition(
        position => {
          console.log(position);
          resolve(position);
        },
        error => {
          reject(error);
          console.log(error);
        },
        { timeout: 3000, enableHighAccuracy: true }
      );
    });
    return gpsPromise;
  };
}
