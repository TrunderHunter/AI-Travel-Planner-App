import { Text, View } from "react-native";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
      }}
    >
      <Text
        style={{
          fontSize: 20,
          textAlign: "center",
          marginTop: 100,
          fontFamily: "outfit-bold",
        }}
      >
        Edit app/index.tsx
      </Text>
    </View>
  );
}
