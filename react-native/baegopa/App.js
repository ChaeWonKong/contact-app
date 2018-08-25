import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={{ color: "white" }}>Titles & Filters Here</Text>
        </View>
        <Image source={require("./img/2.png")} style={styles.imgStyle} />
        <View style={styles.footer}>
          <Text>Tab Menus Here</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  },
  header: {
    flex: 1,
    width: "100%",
    backgroundColor: "#d32323",
    alignItems: "center",
    justifyContent: "center"
  },
  imgStyle: {
    marginTop: 30,
    marginBottom: 30,
    flex: 5,
    width: 330
  },
  footer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  }
});
