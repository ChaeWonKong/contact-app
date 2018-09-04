import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  Platform
} from "react-native";
import { FontAwesome } from "@expo/vector-icons";

const { width } = Dimensions.get("window");
const activeOpacityVal = 0.6;

export default class Navigation extends Component {
  state = {
    isSwipingMode: true
  };
  render() {
    const { isSwipingMode } = this.state;
    return (
      <View style={styles.container}>
        {isSwipingMode ? (
          <TouchableOpacity
            style={styles.list}
            activeOpacity={activeOpacityVal}
          >
            <FontAwesome name={"list"} size={20} color="white" />
          </TouchableOpacity>
        ) : (
          <TouchableOpacity
            style={styles.explore}
            activeOpacity={activeOpacityVal}
          >
            <FontAwesome name={"search"} size={20} color="white" />
          </TouchableOpacity>
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    width: width,
    alignItems: "center"
  },
  text: {
    marginTop: 10,
    color: "#bbb"
  },
  explore: {
    alignItems: "center",
    justifyContent: "center",
    width: 64,
    height: 64,
    borderRadius: 32,
    backgroundColor: "#d32323",
    ...Platform.select({
      ios: {
        shadowColor: "rgb(50, 50, 50)",
        shadowOpacity: 0.7,
        shadowRadius: 5,
        shadowOffset: {
          height: 5,
          width: 0
        }
      },
      android: {
        elevation: 2
      }
    })
  },
  list: {
    alignItems: "center",
    justifyContent: "center",
    width: 64,
    height: 64,
    borderRadius: 32,
    backgroundColor: "#d32323",
    ...Platform.select({
      ios: {
        shadowColor: "rgb(50, 50, 50)",
        shadowOpacity: 0.7,
        shadowRadius: 5,
        shadowOffset: {
          height: 5,
          width: 0
        }
      },
      android: {
        elevation: 2
      }
    })
  }
});
