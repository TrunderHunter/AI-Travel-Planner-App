import {
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
} from "react-native";
import React, { useEffect } from "react";
import { useNavigation } from "expo-router";
import { Colors } from "@/constants/Colors";

const SignIn = () => {
  const navigation = useNavigation();

  useEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Let's Sign You In</Text>
      <Text
        style={{
          fontFamily: "outfit",
          fontSize: 24,
          color: Colors.TEXT_GRAY,
          marginTop: 10,
        }}
      >
        Welcome back
      </Text>
      <Text
        style={{
          fontFamily: "outfit",
          fontSize: 24,
          color: Colors.TEXT_GRAY,
          marginTop: 10,
        }}
      >
        You've been missed
      </Text>

      <View>
        <Text
          style={{
            fontFamily: "outfit",
            fontSize: 16,
            color: Colors.TEXT_GRAY,
            marginTop: 20,
            marginBottom: 10,
          }}
        >
          Email
        </Text>
        <TextInput style={styles.input} placeholder="Enter your email" />
      </View>
      <View>
        <Text
          style={{
            fontFamily: "outfit",
            fontSize: 16,
            color: Colors.TEXT_GRAY,
            marginTop: 20,
            marginBottom: 10,
          }}
        >
          Password
        </Text>
        <TextInput
          style={styles.input}
          placeholder="Enter your password"
          secureTextEntry
        />
      </View>

      {/* Sign In Button */}
      <TouchableOpacity
        style={{
          backgroundColor: Colors.BLACK,
          padding: 15,
          borderRadius: 5,
          marginTop: 20,
        }}
      >
        <Text
          style={{
            color: Colors.WHITE,
            fontFamily: "outfit-bold",
            fontSize: 16,
            flexDirection: "row",
            textAlign: "center",
          }}
        >
          Sign In
        </Text>
      </TouchableOpacity>

      {/* Create Account Button */}
      <TouchableOpacity
        style={{
          padding: 15,
          borderRadius: 5,
          marginTop: 20,
          borderWidth: 1,
          borderColor: Colors.BLACK,
        }}
      >
        <Text
          style={{
            color: Colors.BLACK,
            fontFamily: "outfit-bold",
            fontSize: 16,
            flexDirection: "row",
            textAlign: "center",
          }}
        >
          Create Account
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default SignIn;

const styles = StyleSheet.create({
  container: {
    padding: 25,
    paddingTop: 80,
    height: "100%",
    backgroundColor: Colors.WHITE,
  },
  title: {
    fontSize: 24,
    fontFamily: "outfit-bold",
  },
  input: {
    borderWidth: 1,
    borderRadius: 5,
    fontSize: 16,
    fontFamily: "outfit",
    padding: 15,
  },
});
