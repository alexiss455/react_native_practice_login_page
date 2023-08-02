import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeLogin from "./login-form/Login";
import Signup from "./login-form/sign-in";
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeLogin}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Sign-Up"
          options={{ headerShown: false }}
          component={Signup}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
