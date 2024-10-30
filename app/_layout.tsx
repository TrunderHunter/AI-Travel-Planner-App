import { useFonts } from "expo-font";
import { Stack } from "expo-router";

export default function RootLayout() {
  useFonts({
    outfit: require("../assets/fonts/static/Outfit-Regular.ttf"),
    "outfit-bold": require("../assets/fonts/static/Outfit-Bold.ttf"),
    "outfit-black": require("../assets/fonts/static/Outfit-Black.ttf"),
    "outfit-light": require("../assets/fonts/static/Outfit-Light.ttf"),
    "outfit-medium": require("../assets/fonts/static/Outfit-Medium.ttf"),
    "outfit-thin": require("../assets/fonts/static/Outfit-Thin.ttf"),
  });

  return (
    <Stack>
      <Stack.Screen name="index" />
    </Stack>
  );
}
