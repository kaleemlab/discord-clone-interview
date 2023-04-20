import React, { useContext, useState, useEffect } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Message from "../screens/Message";
import Channel from "../screens/Channel";
import Home from "../screens/Home";
import Login from "../screens/Login";

const Stack = createStackNavigator();

const AppNavigator = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  useEffect(() => {
    isLogin();
  }, []);

  const isLogin = () => {
    if (false) {
      console.log("AppNavigator: LogIn");
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
  };

  return (
    <Stack.Navigator screenOptions={{ headerShown: true }}>
      {isLoggedIn ? (
        <>
          <Stack.Screen
            name="Home"
            options={{
              title: "Home",
            }}
            component={Home}
          />
          <Stack.Screen
            name="Message"
            options={{
              title: "Message",
            }}
            component={Message}
          />
          <Stack.Screen
            name="Channel"
            options={{
              title: "Channel",
            }}
            component={Channel}
          />
        </>
      ) : (
        <>
          <Stack.Screen name="Login" component={Login} />
        </>
      )}
    </Stack.Navigator>
  );
};

export default AppNavigator;
