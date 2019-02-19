import { AsyncStorage } from "react-native";

module.exports = {
  get(key) {
    return AsyncStorage.getItem(key).catch(err => {
      throw new Error(`[react-native-storage-wrapper] - ${err}`);
    });
  },
  set(key, value) {
    let val = JSON.stringify(value);
    return AsyncStorage.setItem(key, val).catch(err => {
      throw new Error(`[react-native-storage-wrapper] - ${err}`);
    });
  },
  del(key) {
    return AsyncStorage.removeItem(key).catch(err => {
      throw new Error(`[react-native-storage-wrapper] - ${err}`);
    });
  }
};
