import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { ListItem, Icon } from "react-native-elements";

export default function TestingList({ list }) {
  /* const list = [
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
  ];*/
  console.log((list) => list.Object);

  return (
    <View>
      {list.map((l, i) => (
        <ListItem key={i} bottomDivider>
          <Icon name={"av-timer"} />
          <ListItem.Content>
            <ListItem.Title>{l.Object.id}</ListItem.Title>
            <ListItem.Subtitle>{"av-timer"}</ListItem.Subtitle>
          </ListItem.Content>
          <Text>{i}</Text>
          <Icon name={"av-timer"} />
          <Icon name={"flight-takeoff"} />
        </ListItem>
      ))}
    </View>
  );
}

styles = StyleSheet.create({
  subtitleView: {
    flexDirection: "row",
    paddingLeft: 10,
    paddingTop: 5,
  },
  ratingImage: {
    height: 19.21,
    width: 100,
  },
  ratingText: {
    paddingLeft: 10,
    color: "grey",
  },
});
