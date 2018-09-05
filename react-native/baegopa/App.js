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
import uuidv1 from "uuid/v1";
import { FontAwesome } from "@expo/vector-icons";

const { width, height } = Dimensions.get("window");
const foodData = [
  {
    name: "케이크야",
    img: require("./img/1.png")
  },
  {
    name: "달빛창가 302호",
    img: require("./img/2.png")
  },
  {
    name: "오가네 갈비",
    img: require("./img/3.png")
  },
  {
    name: "브이",
    img: require("./img/4.png")
  },
  {
    name: "드렁큰 샐러드",
    img: require("./img/5.png")
  },
  {
    name: "계절소반",
    img: require("./img/6.png")
  },
  {
    name: "딥 블루 씨",
    img: require("./img/7.png")
  },
  {
    name: "라따뚜이",
    img: require("./img/8.png")
  },
  {
    name: "Caprice",
    img: require("./img/9.png")
  },
  {
    name: "Vi Va La France",
    img: require("./img/10.png")
  },
  {
    name: "English Breakfast",
    img: require("./img/11.png")
  },
  {
    name: "Simplest Kitchen",
    img: require("./img/12.png")
  }
];

export default class App extends React.Component {
  state = {
    id: 0,
    liked: [],
    disliked: []
  };
  render() {
    const { id } = this.state;
    const { name, img } = foodData[id];
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
        <View style={styles.action}>
          <TouchableOpacity onPressOut={this._like}>
            <FontAwesome name={"heart"} size={50} style={styles.like} />
          </TouchableOpacity>
          <TouchableOpacity onPressOut={this._dislike}>
            <FontAwesome name={"close"} size={50} style={styles.dislike} />
          </TouchableOpacity>
        </View>
      </View>
    );
  }
  _like = () => {
    console.log(this.state.liked);
    this.setState(prevState => {
      if (prevState.id < foodData.length - 1) {
        const newState = {
          ...prevState,
          id: prevState.id + 1,
          liked: [...prevState.liked, prevState.id]
        };
        return newState;
      } else {
        const newState = {
          ...prevState,
          id: 0,
          liked: [...prevState.liked, prevState.id]
        };
        return newState;
      }
    });
  };
  _dislike = () => {
    console.log(this.state.disliked);
    this.setState(prevState => {
      if (prevState.id < foodData.length - 1) {
        const newState = {
          ...prevState,
          id: prevState.id + 1,
          disliked: [...prevState.disliked, prevState.id]
        };
        return newState;
      } else {
        const newState = {
          ...prevState,
          id: 0,
          disliked: [...prevState.disliked, prevState.id]
        };
        return newState;
      }
    });
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  },
  header: {
    flex: 3,
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
    marginBottom: 20,
    flex: 16,
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
    width: width - 20,
    borderRadius: 10
  },
  floatButton: {
    position: "absolute",
    top: height - 170,
    left: width - 80
  },
  action: {
    flex: 2,
    flexDirection: "row",
    justifyContent: "center"
  },
  like: {
    marginLeft: 20,
    marginRight: 20,
    color: "green"
  },
  dislike: {
    marginLeft: 20,
    marginRight: 20,
    color: "red"
  }
});
