import React from "react";
import { StyleSheet, SafeAreaView, StatusBar } from "react-native";
import WelcomeScreen from "./testinglist";

export default function App() {
  console.log("jhjhjh");
  const list = [
    {
      name: "Amy Farha",
      avatar_url:
        "https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg",
      subtitle: "Vice President",
      icon: "av-timer",
    },
    {
      name: "Chris Jackson",
      avatar_url:
        "https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg",
      subtitle: "Vice Chairman",
      icon: "flight-takeoff",
    },
  ];
  return (
    <SafeAreaView style={styles.AndroidSafeArea}>
      <WelcomeScreen list={list} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "blue",
  },
  AndroidSafeArea: {
    flex: 1,
    backgroundColor: "white",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
});
