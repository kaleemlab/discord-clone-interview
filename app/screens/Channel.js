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

const Channel = ({ navigation }) => {
  const groupData = {
    id: "1",
    name: "Group 1",
    participants: 10,
    image: require("../../assets/icon.png"),
    members: [
      { id: "1", name: "Member 1", image: require("../../assets/icon.png") },
      { id: "2", name: "Member 2", image: require("../../assets/icon.png") },
      { id: "3", name: "Member 3", image: require("../../assets/icon.png") },
      { id: "4", name: "Member 4", image: require("../../assets/icon.png") },
      { id: "5", name: "Member 5", image: require("../../assets/icon.png") },
    ],
  };

  const { name, participants, image, members } = groupData;

  function renderMember({ item }) {
    return (
      <TouchableOpacity
        onPress={() => navigation.navigate("Message")}
        style={styles.member}
      >
        <Image style={styles.memberImage} source={item.image} />
        <Text style={styles.memberName}>{item.name}</Text>
      </TouchableOpacity>
    );
  }

  return (
    <View style={styles.container}>
      <Image style={styles.headerImage} source={image} />
      <View style={styles.headerTextContainer}>
        <Text style={styles.groupName}>{name}</Text>
        <Text
          style={styles.participants}
        >{`${participants} participants`}</Text>
      </View>
      <FlatList
        data={members}
        renderItem={renderMember}
        keyExtractor={(item) => item.id}
        style={styles.memberList}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  headerImage: {
    width: "100%",
    height: 200,
    resizeMode: "cover",
  },
  headerTextContainer: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    padding: 16,
    paddingBottom: 48, // Add padding to avoid overlap
  },
  groupName: {
    color: "#fff",
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 4,
  },
  participants: {
    color: "#fff",
    fontSize: 18,
  },
  memberList: {
    marginTop: 16,
    paddingHorizontal: 16,
  },
  member: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
  memberImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 16,
  },
  memberName: {
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default Channel;
