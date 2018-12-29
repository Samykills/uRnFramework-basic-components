//import liraries
import React, { Component } from "react";
import { View, Text, ActivityIndicator } from "react-native";
import { Card, CardItem, Body } from "native-base";
import DefaultAppTheme from "../theme/theme";
import { totalSize, width } from "react-native-dimension";
// create a component
class Loader extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <View
        style={{
          position: "absolute",
          left: 0,
          right: 0,
          top: 0,
          bottom: 0,
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: DefaultAppTheme.blackColor + "60"
        }}
      >
        <Card
          style={[
            {
              marginLeft: width(18),
              marginRight: width(18),
              alignItems: "center",
              justifyContent: "center"
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
              <ActivityIndicator color={DefaultAppTheme.secondary} />
              <Text
                style={{
                  fontFamily: DefaultAppTheme.primaryFontFamily,
                  fontSize: totalSize(2),
                  fontWeight: "300",
                  color: DefaultAppTheme.primaryDark,
                  marginLeft: width(3)
                }}
              >
                Loading ...
              </Text>
            </Body>
          </CardItem>
        </Card>
      </View>
    );
  }
}

//make this component available to the app
export default Loader;
