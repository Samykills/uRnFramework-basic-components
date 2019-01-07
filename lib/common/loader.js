//import liraries
import React, { Component } from "react";
import { View, Text, Animated } from "react-native";
import { Card, CardItem, Body, Spinner } from "native-base";
import DefaultAppTheme from "../theme/theme";
import { totalSize, width, height } from "react-native-dimension";
// create a component
const AnimatedCardComponent = Animated.createAnimatedComponent(Card);
class Loader extends Component {
  constructor(props) {
    super(props);
    this.viewOpacity = new Animated.Value(0);
    this.loaderEntry = new Animated.Value(height(30));
    this.loaderExit = new Animated.Value(0);
  }

  componentDidMount() {
    Animated.parallel([
      Animated.timing(this.viewOpacity, {
        toValue: 1,
        duration: 500,
        useNativeDriver: true
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

  componentWillUnmount() {
    // debugger;
    Animated.spring(this.loaderExit, {
      toValue: height(30),
      velocity: 1,
      tension: 4,
      friction: 12,
      useNativeDriver: true
    }).start();
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
          <CardItem>
            <Body
              style={{
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center"
              }}
            >
              <Spinner color={DefaultAppTheme.secondary} />
              <Text
                style={{
                  fontFamily: DefaultAppTheme.primaryFontFamily,
                  fontSize: totalSize(2),
                  fontWeight: "300",
                  color: DefaultAppTheme.secondary,
                  marginLeft: width(3)
                }}
              >
                Loading ...
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
