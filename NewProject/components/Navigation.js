import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import LoginForm from "../components/LoginForm";
import SubmittedDataScreen from "../components/SubmittedDataScreen";
import { AppRegistry } from "react-native";
import App from "../App";

AppRegistry.registerComponent("App", () => App);


const Stack = createStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={LoginForm} />
        <Stack.Screen name="SubmittedData" component={SubmittedDataScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
