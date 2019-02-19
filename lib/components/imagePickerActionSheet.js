// import ImagePicker from "react-native-image-picker";
export default class ImagePickerActionSheet {
  
  // static openCamera(userOptions){
  //   let options = {
  //     title:"Take a Photo",
  //     storageOptions:{
  //       skipBackup:true,
  //       path:"images"
  //     }
  //   };
  //   return new Promise((resolve, reject) => {
  //     ImagePicker.launchCamera(
  //       userOptions ? userOptions : options,
  //       response => {
  //         if (response.didCancel) {
  //           //   console.log("User cancelled image picker");
  //           reject("User cancelled image picker");
  //         } else if (response.error) {
  //           //   console.log("ImagePicker Error: ", response.error);
  //           reject(response.error);
  //         } else {
  //           resolve(response);
  //         }
  //       }
  //     );
  //   });
  // }

  // static openLibrary(userOptions){
  //   let options = {
  //     title:"Choose from Library",
  //     storageOptions:{
  //       skipBackup:true,
  //       path:"images"
  //     }
  //   };
  //   return new Promise((resolve, reject) => {
  //     ImagePicker.launchImageLibrary(
  //       userOptions ? userOptions : options,
  //       response => {
  //         if (response.didCancel) {
  //           //   console.log("User cancelled image picker");
  //           reject("User cancelled image picker");
  //         } else if (response.error) {
  //           //   console.log("ImagePicker Error: ", response.error);
  //           reject(response.error);
  //         } else {
  //           resolve(response);
  //         }
  //       }
  //     );
  //   });
  // }

  // static showImagePicker(userOptions) {
  //   let options = {
  //     title: "Choose a Photo",
  //     storageOptions: {
  //       skipBackup: true,
  //       path: "images"
  //     }
  //   };      

  //   return new Promise((resolve, reject) => {
  //     ImagePicker.showImagePicker(
  //       userOptions ? userOptions : options,
  //       response => {
  //         if (response.didCancel) {
  //           //   console.log("User cancelled image picker");
  //           reject("User cancelled image picker");
  //         } else if (response.error) {
  //           //   console.log("ImagePicker Error: ", response.error);
  //           reject(response.error);
  //         } else {
  //           resolve(response);
  //         }
  //       }
  //     );
  //   });
  // }
}
