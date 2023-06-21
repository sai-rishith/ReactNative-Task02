import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import LoginForm from "../components/LoginForm";
import RegistrationForm from "../components/RegistrationForm";
import SubmittedDataScreen from "../components/SubmittedDataScreen";
import ForgotPassword from "./ForgotPassword";
import CreateNewPassword from "./CreateNewPassword";
// import { AppRegistry } from "react-native";
// import App from "../App";

// AppRegistry.registerComponent("App", () => App);


const Stack = createStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        
        <Stack.Screen name="Login" component={LoginForm} />
        <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
        <Stack.Screen name="Register" component={RegistrationForm} />
        <Stack.Screen name="SubmittedData" component={SubmittedDataScreen} />
        <Stack.Screen name="CreatePassword" component={CreateNewPassword} />

      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
