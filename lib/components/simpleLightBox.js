import React, { Component } from "react";
import PropTypes from "prop-types";
import {
  View,
  StyleSheet,
  Animated,
  TouchableWithoutFeedback,
  Text
} from "react-native";
import { Actions } from "react-native-router-flux";
import { height, width } from "react-native-dimension";

const deviceHeight = height(100);
const deviceWidth = width(100);

export default class SimpleLightBox extends Component {
  static propTypes = {
    children: PropTypes.any,
    horizontalPercent: PropTypes.number,
    verticalPercent: PropTypes.number,
    backgroundColor: PropTypes.string,
    onTouchDismiss: PropTypes.bool,
    onTouchCloseCustomAction: PropTypes.func,
    borderRadius: PropTypes.number
  };

  constructor(props) {
    super(props);
    this.state = {
      opacity: new Animated.Value(0),
      bounceValue: new Animated.Value(height(100)),
      onTouchDismiss: this.props.onTouchDismiss
        ? this.props.onTouchDismiss
        : false
    };
  }

  componentDidMount() {
    Animated.parallel(
      [
        // Animated.timing(this.state.opacity, {
        //   duration: 500,
        //   toValue: 1,
        //   useNativeDriver: true
        // }),
        Animated.spring(this.state.bounceValue, {
          toValue: 0,
          velocity: 3,
          tension: 2,
          friction: 8,
          useNativeDriver: true
        })
      ],
      { useNativeDriver: true }
    ).start();
  }

  closeModal = () => {
    Animated.spring(this.state.bounceValue, {
      toValue: height(100),
      velocity: 3,
      tension: 2,
      friction: 8,
      useNativeDriver: true
    }).start(() => {
      if (this.props.cancelCallback) {
        this.props.cancelCallback();
      }
      Actions.pop();
    });
    // Animated.timing(this.state.opacity, {
    //   duration: 150,
    //   toValue: 0
    // }).start(() => {
    //   if (this.props.cancelCallback) {
    //     this.props.cancelCallback();
    //   }
    //   Actions.pop();
    // });
  };

  _renderLightBox = () => {
    const {
      children,
      horizontalPercent = 1,
      verticalPercent = 1,
      backgroundColor,
      borderRadius
    } = this.props;
    const height = verticalPercent
      ? deviceHeight * verticalPercent
      : deviceHeight;
    const width = horizontalPercent
      ? deviceWidth * horizontalPercent
      : deviceWidth;

    return (
      <Animated.View
        style={{
          width,
          height,
          borderRadius: borderRadius ? borderRadius : 0,
          backgroundColor: backgroundColor ? backgroundColor : "white",
          // opacity: this.state.opacity,
          transform: [{ translateY: this.state.bounceValue }]
        }}
      >
        {children}
      </Animated.View>
    );
  };

  render() {
    return (
      <TouchableWithoutFeedback
        onPress={() => {
          this.state.onTouchDismiss ? this.closeModal() : "";
          this.props.onTouchCloseCustomAction
            ? this.props.onTouchCloseCustomAction()
            : "";
        }}
      >
        <View style={styles.container}>{this._renderLightBox()}</View>
      </TouchableWithoutFeedback>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "rgba(52,52,52,0.5)",
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    justifyContent: "center",
    alignItems: "center"
  }
});
