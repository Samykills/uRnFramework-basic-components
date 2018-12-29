import { PermissionsAndroid } from "react-native";
const PermissionConstant = {
  readContancts: PermissionsAndroid.PERMISSIONS.READ_CONTACTS,
  writeContancts: PermissionsAndroid.PERMISSIONS.WRITE_CONTACTS,
  accessFineLocation: PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
  coarseLocation:PermissionsAndroid.PERMISSIONS.ACCESS_COARSE_LOCATION,
  camera: PermissionsAndroid.PERMISSIONS.CAMERA,
  writeExternalStorage: PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
  phoneCall: PermissionsAndroid.PERMISSIONS.CALL_PHONE
};

export default PermissionConstant;
