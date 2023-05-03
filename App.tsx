import React from "react";
import { StyleSheet, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import SignIn from "./screens/SignIn";
import SignUp from "./screens/SignUp";
import Home from "./screens/Home";

const Stack = createStackNavigator();

const App = () => {
  return (
    <View style={styles.background}>
      <View style={styles.navigationContainerWrapper}>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen
              name="SignIn"
              component={SignIn}
              options={{
                headerShown: false,
              }}
            />
            <Stack.Screen
              name="SignUp"
              component={SignUp}
              options={{ title: "Sign Up" }}
            />
            <Stack.Screen
              name="Home"
              component={Home}
              options={{ title: "Home" }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  background: {
    alignItems: "center",
    backgroundColor: "#E9F2E2",
    flex: 1,
    justifyContent: "center",
    width: "100%",
  },
  navigationContainerWrapper: {
    flex: 1,
    maxWidth: 400,
    width: "100%",
  },
});

export default App;
