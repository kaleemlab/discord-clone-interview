import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import AppNavigator from "./app/routes/AppNavigator";
import { LogBox } from "react-native";
LogBox.ignoreAllLogs();

const App = () => {
  return (
      <NavigationContainer>
        <AppNavigator />
      </NavigationContainer>
  );
};

export default App;
