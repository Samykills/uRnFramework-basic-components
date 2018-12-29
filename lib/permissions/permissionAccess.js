import { PermissionsAndroid } from "react-native";
class PermissionAccess{
  static async requestPermission (permission){
    try {
      const granted = await PermissionsAndroid.request(
        permission
      );
        return granted === PermissionsAndroid.RESULTS.GRANTED;
    } catch (err) {
      console.log(err);
    }
  }
}
export default PermissionAccess;
