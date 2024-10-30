import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import { Colors } from "@/constants/Colors";
import { AntDesign } from "@expo/vector-icons";
import { useRouter } from "expo-router";

const Login = () => {
  const router = useRouter();
  return (
    <View>
      <Image
        source={require("../assets/images/img-login.png")}
        style={{ width: "100%", height: 500 }}
      />
      <View style={styles.container}>
        <Text
          style={{
            fontSize: 30,
            fontFamily: "outfit-bold",
            color: Colors.BLACK,
            textAlign: "center",
          }}
        >
          AI Travel Planner
        </Text>
        <Text
          style={{
            fontSize: 16,
            fontFamily: "outfit",
            color: Colors.TEXT_GRAY,
            textAlign: "justify",
            marginTop: 10,
            paddingHorizontal: 24,
          }}
        >
          Plan your trip with AI Travel Planner and get the best experience.
          Personalize your trip with the best recommendations. Travel with ease
          and comfort.
        </Text>
        <TouchableOpacity
          style={styles.buttonLoginWithGoogle}
          onPress={() => {
            router.push("/auth/sign-in");
          }}
        >
          <Text
            style={{
              color: Colors.WHITE,
              fontFamily: "outfit-bold",
              fontSize: 16,
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            Get Started
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: "100%",
    backgroundColor: Colors.WHITE,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingHorizontal: 20,
    paddingVertical: 20,
    marginTop: -20,
  },
  buttonLoginWithGoogle: {
    backgroundColor: "#4285F4",
    padding: 15,
    borderRadius: 99,
    marginTop: "20%",
    alignItems: "center",
  },
});

export default Login;
