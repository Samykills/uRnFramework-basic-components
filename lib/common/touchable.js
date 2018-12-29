//import liraries
import React, { Component } from "react";
import {
  Platform,
  TouchableNativeFeedback,
  TouchableOpacity
} from "react-native";
import _ from "lodash";

// create a component
class Touchable extends Component {
  constructor(props) {
    super(props);
  }

  doAction = () => {
    this.props.onPress();
  };

  render() {
    if (Platform.OS == "android") {
      if (TouchableNativeFeedback.canUseNativeForeground()) {
        return (
          <TouchableNativeFeedback
            {...this.props}
            background={TouchableNativeFeedback.SelectableBackground()}
            onPress={_.throttle(this.doAction, 500)}
            delayPressIn={0}
            useForeground={true}
          >
            {this.props.content}
          </TouchableNativeFeedback>
        );
      } else {
        return (
          <TouchableOpacity
            {...this.props}
            onPress={_.throttle(this.doAction, 500)}
          >
            {this.props.content}
          </TouchableOpacity>
        );
      }
    } else {
      return (
        <TouchableOpacity
          {...this.props}
          onPress={_.throttle(this.doAction, 500)}
        >
          {this.props.content}
        </TouchableOpacity>
      );
    }
  }
}

//make this component available to the app
export default Touchable;
