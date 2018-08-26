import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  TouchableOpacity,
  StatusBar,
  Platform
} from "react-native";
import TabMenu from "./TabMenu";

const { width, height } = Dimensions.get("window");

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <StatusBar barStyle={"light-content"} />
        <View style={styles.header}>
          <Text style={styles.text}>달빛창가 302호</Text>
        </View>
        <TouchableOpacity style={styles.card}>
          <Image source={require("./img/2.png")} style={styles.imgStyle} />
        </TouchableOpacity>
        <View style={styles.footer}>
          <TabMenu />
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
  text: {
    marginTop: 20,
    fontSize: 26,
    color: "white",
    fontWeight: "500"
  },
  card: {
    flex: 6,
    ...Platform.select({
      ios: {
        shadowColor: "rgb(50, 50, 50)",
        shadowOpacity: 0.5,
        shadowRadius: 5,
        shadowOffset: {
          height: 1,
          width: 0
        }
      },
      android: {
        elevation: 1
      }
    })
  },
  imgStyle: {
    flex: 1,
    marginTop: 30,
    width: width - 50
  },
  footer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  }
});
