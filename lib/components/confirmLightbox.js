import React, { Component } from "react";
import PropTypes from "prop-types";
import { View, StyleSheet, Animated, Button, Text } from "react-native";
import { Actions } from "react-native-router-flux";
import { height, width } from "react-native-dimension";
import Touchable from "../common/touchable";

const deviceHeight = height(100);
const deviceWidth = width(100);

export default class ConfirmLightbox extends Component {
  static propTypes = {
    children: PropTypes.any,
    horizontalPercent: PropTypes.number,
    verticalPercent: PropTypes.number,
    backgroundColor: PropTypes.string,
    headerComponent: PropTypes.any,
    confirmCallback: PropTypes.any,
    confirmTextColor: PropTypes.string,
    confirmButtonBackgroundColor: PropTypes.string,
    cancelCallback: PropTypes.any,
    cancelTextColor: PropTypes.string,
    cancelButtonBackgroundColor: PropTypes.string
  };

  constructor(props) {
    super(props);

    this.state = {
      opacity: new Animated.Value(0)
    };
  }

  componentDidMount() {
    Animated.timing(this.state.opacity, {
      duration: 150,
      toValue: 1
    }).start();
  }

  closeModal = () => {
    Animated.timing(this.state.opacity, {
      duration: 150,
      toValue: 0
    }).start(() => {
      if (this.props.cancelCallback) {
        this.props.cancelCallback();
      }
      Actions.pop();
    });
  };

  confirmClick = () => {
    Animated.timing(this.state.opacity, {
      duration: 150,
      toValue: 0
    }).start(() => {
      if (this.props.confirmCallback) {
        this.props.confirmCallback();
      }
      Actions.pop();
    });
  };

  _renderHeaderComponent = () => {
    const { headerComponent } = this.props;
    if (headerComponent) {
      return headerComponent;
    }
  };

  _renderLightBox = () => {
    const {
      children,
      horizontalPercent = 1,
      verticalPercent = 1,
      confirmButtonBackgroundColor,
      confirmTextColor,
      cancelButtonBackgroundColor,
      cancelTextColor,
      backgroundColor
    } = this.props;
    const height = verticalPercent
      ? deviceHeight * verticalPercent
      : deviceHeight;
    const width = horizontalPercent
      ? deviceWidth * horizontalPercent
      : deviceWidth;

    return (
      <View
        style={{
          width,
          height,
          backgroundColor: backgroundColor ? backgroundColor : "white"
        }}
      >
        {this._renderHeaderComponent()}
        <View style={{ flex: 6 }}>{children}</View>
        <View
          style={{
            flex: 1,
            flexDirection: "row",
            justifyContent: "flex-end",
            alignItems: "flex-end"
          }}
        >
          <View
            style={{
              justifyContent: "space-around",
              flexDirection: "row"
            }}
          >
            <Touchable
              content={
                <View
                  style={{
                    borderWidth: 1,
                    padding: 10,
                    borderRadius: 30,
                    marginRight: 10,
                    marginBottom: 2,
                    backgroundColor: confirmButtonBackgroundColor
                  }}
                >
                  <Text style={{ color: confirmTextColor }}>Confirm</Text>
                </View>
              }
              onPress={this.confirmClick}
            />
            <Touchable
              content={
                <View
                  style={{
                    borderWidth: 1,
                    padding: 10,
                    marginRight: 10,
                    borderRadius: 30,
                    marginBottom: 2,
                    backgroundColor: cancelButtonBackgroundColor
                  }}
                >
                  <Text style={{ color: cancelTextColor }}>Cancel</Text>
                </View>
              }
              onPress={this.closeModal}
            />
          </View>
        </View>
      </View>
    );
  };

  render() {
    return (
      <Animated.View
        style={[styles.container, { opacity: this.state.opacity }]}
        blurRadius={1}
      >
        {this._renderLightBox()}
      </Animated.View>
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
