import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { RootStackNavigationProp } from "../types";

interface SignInProps {
  navigation: RootStackNavigationProp<"SignIn">;
}

const SignIn: React.FC<SignInProps> = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const isEmailValid = (email: string) => {
    // This regex pattern checks for a valid email address
    const re =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  };

  const isPasswordValid = (password: string) => {
    // This regex pattern checks for a password with at least 8 characters,
    // containing at least one letter, one number, and one special character
    const re = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;
    return re.test(password);
  };

  const handleSignIn = () => {
    if (!isEmailValid(email)) {
      setErrorMessage("Please enter a valid email.");
      return;
    }

    if (!isPasswordValid(password)) {
      setErrorMessage("Your password is incorrect");
      return;
    }
    // Perform the sign-in process here
    // On successful sign-in, navigate to the Home screen
    navigation.navigate("Home");
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        onChangeText={setEmail}
        value={email}
        placeholder="Email"
        keyboardType="email-address"
        autoComplete="email"
      />
      <TextInput
        style={styles.input}
        onChangeText={setPassword}
        value={password}
        placeholder="Password"
        secureTextEntry
        autoComplete="password"
      />
      <TouchableOpacity style={styles.button} onPress={handleSignIn}>
        <Text style={styles.buttonText}>Sign In</Text>
      </TouchableOpacity>
      {errorMessage ? (
        <Text style={styles.errorMessage}>{errorMessage}</Text>
      ) : null}
      <View style={styles.signupContainer}>
        <Text>Don&#39;t have an account? </Text>
        <TouchableOpacity onPress={() => navigation.navigate("SignUp")}>
          <Text style={styles.signupLink}>Create an account.</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    alignItems: "center",
    backgroundColor: "#5B8E7D",
    borderRadius: 5,
    marginBottom: 10,
    padding: 10,
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
  },
  container: {
    alignItems: "center",
    alignSelf: "center",
    backgroundColor: "#E9F2E2",
    flex: 1,
    justifyContent: "center",
    maxWidth: 400,
    paddingHorizontal: 20,
    width: "100%",
  },
  errorMessage: {
    color: "red",
    marginBottom: 10,
  },
  input: {
    backgroundColor: "white",
    borderColor: "#5B8E7D",
    borderWidth: 1,
    height: 40,
    marginBottom: 10,
    paddingLeft: 10,
    width: "100%",
  },
  signupContainer: {
    flexDirection: "row",
    justifyContent: "center",
  },
  signupLink: {
    color: "#5B8E7D",
    textDecorationLine: "underline",
  },
});

export default SignIn;
