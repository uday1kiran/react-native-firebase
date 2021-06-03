import React, { useEffect, useState } from "react";
import {
  FlatList,
  Keyboard,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import styles from "./styles";
import { firebase } from "../../firebase/config";

export default function CoinCreate(props) {
  const [coinText, setCoinText] = useState("");
  const [coins, setCoins] = useState([]);

  const coinRef = firebase.firestore().collection("coins");
  const userID = props.extraData.id;

  useEffect(() => {
    coinRef
      .where("authorID", "==", userID)
      .orderBy("createdAt", "desc")
      .onSnapshot(
        (querySnapshot) => {
          const newCoins = [];
          querySnapshot.forEach((doc) => {
            const coin = doc.data();
            coin.id = doc.id;
            newCoins.push(coin);
          });
          setCoins(newCoins);
        },
        (error) => {
          console.log(error);
        }
      );
  }, []);

  const onAddButtonPress = () => {
    if (coinText && coinText.length > 0) {
      const timestamp = firebase.firestore.FieldValue.serverTimestamp();
      const data = {
        text: coinText,
        authorID: userID,
        createdAt: timestamp,
      };
      coinRef
        .add(data)
        .then((_doc) => {
          setCoinText("");
          Keyboard.dismiss();
        })
        .catch((error) => {
          alert(error);
        });
    }
  };
  const renderCoin = ({ item, index }) => {
    return (
      <View style={styles.entityContainer}>
        <Text style={styles.entityText}>
          {index}. {item.text}
        </Text>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.formContainer}>
        <TextInput
          style={styles.input}
          placeholder="Add new coin"
          placeholderTextColor="#aaaaaa"
          onChangeText={(text) => setCoinText(text)}
          value={coinText}
          underlineColorAndroid="transparent"
          autoCapitalize="none"
        />
        <TouchableOpacity style={styles.button} onPress={onAddButtonPress}>
          <Text style={styles.buttonText}>Add</Text>
        </TouchableOpacity>
      </View>
      {coins && (
        <View style={styles.listContainer}>
          <FlatList
            data={coins}
            renderItem={renderCoin}
            keyExtractor={(item) => item.id}
            removeClippedSubviews={true}
          />
        </View>
      )}
    </View>
  );
}
