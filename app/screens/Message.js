import React, { useState, useEffect } from "react";
import { GiftedChat } from "react-native-gifted-chat";

const DUMMY_DATA = [
  {
    _id: 1,
    text: "Hello!",
    createdAt: new Date(2022, 3, 25, 10, 0),
    user: {
      _id: 1,
      name: "John Doe",
      avatar: "https://placeimg.com/140/140/any",
    },
  },
  {
    _id: 2,
    text: "How are you?",
    createdAt: new Date(2022, 3, 25, 10, 2),
    user: {
      _id: 2,
      name: "Jane Smith",
      avatar: "https://placeimg.com/140/140/any",
    },
  },
  {
    _id: 3,
    text: "I am good, thanks for asking. How about you?",
    createdAt: new Date(2022, 3, 25, 10, 5),
    user: {
      _id: 1,
      name: "John Doe",
      avatar: "https://placeimg.com/140/140/any",
    },
  },
];

export default function Message() {
  const [messages, setMessages] = useState(DUMMY_DATA);

  function handleSend(newMessages = []) {
    setMessages(GiftedChat.append(messages, newMessages));
  }

  return (
    <GiftedChat
      messages={messages}
      onSend={handleSend}
      user={{
        _id: 1,
        name: "John Doe",
        avatar: "https://placeimg.com/140/140/any",
      }}
    />
  );
}
