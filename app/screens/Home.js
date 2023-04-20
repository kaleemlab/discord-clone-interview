import React, { useEffect, useRef, useMemo, useState } from "react";
import {
  Dimensions,
  Image,
  SafeAreaView,
  StyleSheet,
  View,
  TouchableOpacity,
  Platform,
  LogBox,
  ScrollView,
  TextInput,
  FlatList,
  Modal,
  Linking,
  Text,
  ActivityIndicator,
  Alert,
  StatusBar,
  Pressable,
  BackHandler,
} from "react-native";

const Home = ({ navigation }) => {
  const data = [
    {
      id: "1",
      name: "Group 1",
      participants: 10,
      image: require("../../assets/icon.png"),
    },
    {
      id: "2",
      name: "Group 2",
      participants: 5,
      image: require("../../assets/icon.png"),
    },
    {
      id: "3",
      name: "Group 3",
      participants: 7,
      image: require("../../assets/icon.png"),
    },
  ];

  function renderItem({ item }) {
    return (
      <TouchableOpacity
        onPress={() => navigation.navigate("Channel")}
        style={styles.item}
      >
        <Image style={styles.image} source={item.image} />
        <View style={styles.textContainer}>
          <Text style={styles.name}>{item.name}</Text>
          <Text
            style={styles.participants}
          >{`${item.participants} participants`}</Text>
        </View>
      </TouchableOpacity>
    );
  }

  return (
    <FlatList
      data={data}
      renderItem={renderItem}
      keyExtractor={(item) => item.id}
      style={styles.container}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  item: {
    flexDirection: "row",
    alignItems: "center",
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
  image: {
    width: 75,
    height: 75,
    borderRadius: 25,
  },
  textContainer: {
    marginLeft: 16,
  },
  name: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 8,
  },
  participants: {
    color: "#999",
  },
});
export default Home;
