import React, { Component } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  Dimensions
} from "react-native";

const { width, height } = Dimensions.get("window");

export default class TabMenu extends Component {
  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity style={styles.explore}>
          <Text>Explore</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.list}>
          <Text>List</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.me}>
          <Text>Me</Text>
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
  }
});
