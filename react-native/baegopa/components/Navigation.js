import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Dimensions
} from "react-native";
import { FontAwesome } from "@expo/vector-icons";

const { width } = Dimensions.get("window");
const activeOpacityVal = 0.6;

export default class Navigation extends Component {
  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity
          activeOpacity={activeOpacityVal}
          style={styles.explore}
        >
          <FontAwesome name={"search"} size={20} color="#bbb" />
          <Text style={styles.text}>Explore</Text>
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={activeOpacityVal} style={styles.list}>
          <FontAwesome name={"list"} size={20} color="#bbb" />
          <Text style={styles.text}>List</Text>
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={activeOpacityVal} style={styles.me}>
          <FontAwesome name={"user-circle-o"} size={20} color="#bbb" />
          <Text style={styles.text}>Me</Text>
        </TouchableOpacity>
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
  explore: {
    flex: 1,
    alignItems: "center"
  },
  list: {
    flex: 1,
    alignItems: "center"
  },
  me: {
    flex: 1,
    alignItems: "center"
  },
  text: {
    marginTop: 10,
    color: "#bbb"
  }
});
