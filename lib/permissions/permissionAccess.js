import { PermissionsAndroid, Platform } from "react-native";
class PermissionAccess {
  static async requestPermission(permission) {
    try {
      if (Platform.OS != "ios") {
        const granted = await PermissionsAndroid.request(permission);
        return granted === PermissionsAndroid.RESULTS.GRANTED;
      } else {
        return true;
      }
    } catch (err) {
      console.log(err);
    }
  }
}
export default PermissionAccess;
