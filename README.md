
# react-native-basic-components

## Getting started

`$ npm install react-native-basic-components --save`

### Mostly automatic installation

`$ react-native link react-native-basic-components`

### Manual installation


#### iOS

1. In XCode, in the project navigator, right click `Libraries` ➜ `Add Files to [your project's name]`
2. Go to `node_modules` ➜ `react-native-basic-components` and add `RNBasicComponents.xcodeproj`
3. In XCode, in the project navigator, select your project. Add `libRNBasicComponents.a` to your project's `Build Phases` ➜ `Link Binary With Libraries`
4. Run your project (`Cmd+R`)<

#### Android

1. Open up `android/app/src/main/java/[...]/MainActivity.java`
  - Add `import com.smartenspaces.basiccomponents.RNBasicComponentsPackage;` to the imports at the top of the file
  - Add `new RNBasicComponentsPackage()` to the list returned by the `getPackages()` method
2. Append the following lines to `android/settings.gradle`:
  	```
  	include ':react-native-basic-components'
  	project(':react-native-basic-components').projectDir = new File(rootProject.projectDir, 	'../node_modules/react-native-basic-components/android')
  	```
3. Insert the following lines inside the dependencies block in `android/app/build.gradle`:
  	```
      compile project(':react-native-basic-components')
  	```


## Usage
```javascript
import RNBasicComponents from 'react-native-basic-components';

// TODO: What to do with the module?
RNBasicComponents;
```
  