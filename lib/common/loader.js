//import liraries
import React, { Component } from "react";
import { View, Text, Animated } from "react-native";
import { Card, CardItem, Body, Spinner } from "native-base";
import DefaultAppTheme from "../theme/theme";
import { totalSize, width, height } from "react-native-dimension";
import PropTypes from "prop-types";
// create a component
const AnimatedCardComponent = Animated.createAnimatedComponent(Card);
class Loader extends Component {
  constructor(props) {
    super(props);
    this.viewOpacity = new Animated.Value(0);
    this.loaderEntry = new Animated.Value(height(30));
  }

  componentDidMount() {
    Animated.parallel([
      Animated.timing(this.viewOpacity, {
        toValue: 1,
        duration: 500
      }),
      Animated.spring(this.loaderEntry, {
        toValue: 0,
        velocity: 1,
        tension: 4,
        friction: 12,
        useNativeDriver: true
      })
    ]).start();
  }

  render() {
    return (
      <Animated.View
        style={{
          position: "absolute",
          left: 0,
          right: 0,
          top: 0,
          bottom: 0,
          alignItems: "center",
          justifyContent: "center",
          opacity: this.viewOpacity,
          backgroundColor: DefaultAppTheme.blackColor + "60"
        }}
      >
        <AnimatedCardComponent
          transparent
          style={[
            {
              marginLeft: width(18),
              marginRight: width(18),
              alignItems: "center",
              justifyContent: "center",
              transform: [
                {
                  translateY: this.loaderEntry
                }
              ]
            }
          ]}
        >
          <CardItem style={{ backgroundColor: "transparent" }}>
            <Body
              style={{
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center"
              }}
            >
              <Spinner color={this.props.spinnerColor} />
              <Text
                style={{
                  fontFamily: DefaultAppTheme.primaryFontFamily,
                  fontSize: totalSize(2),
                  fontWeight: "300",
                  color: this.props.loadingTextColor,
                  marginLeft: width(3)
                }}
              >
                {this.props.loadingText}
              </Text>
            </Body>
          </CardItem>
        </AnimatedCardComponent>
      </Animated.View>
    );
  }
}

//make this component available to the app
export default Loader;

Loader.propTypes = {
  loadingText: PropTypes.string,
  loadingTextColor: PropTypes.string,
  spinnerColor: PropTypes.string
};

Loader.defaultProps = {
  loadingText: "Loading ...",
  loadingTextColor: DefaultAppTheme.whiteColor,
  spinnerColor: DefaultAppTheme.whiteColor
};
