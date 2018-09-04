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
import Navigation from "./components/Navigation";

const { width, height } = Dimensions.get("window");
const foodData = {
  name: "달빛창가 302호",
  img: require("./img/2.png")
};

export default class App extends React.Component {
  state = {
    name: foodData.name,
    img: foodData.img
  };
  render() {
    const { name, img } = this.state;
    return (
      <View style={styles.container}>
        <StatusBar barStyle={"light-content"} />
        <View style={styles.header}>
          <Text style={styles.text}>{name}</Text>
        </View>
        <TouchableOpacity style={styles.card} activeOpacity={0.8}>
          <Image source={img} style={styles.imgStyle} />
        </TouchableOpacity>
        <View style={styles.floatButton}>
          <Navigation />
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
    flex: 7,
    marginBottom: 50,
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
    marginTop: 20,
    marginBottom: 20,
    width: width - 20
  },
  floatButton: {
    position: "absolute",
    top: height - 140,
    left: width - 80
  }
});
