import { Stack } from "expo-router";
import AppProviders from "../providers/AppProviders";
import "../global.css";

export default function RootLayout() {
  return (
    <AppProviders>
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="index" />
        <Stack.Screen name="onboarding" />
        <Stack.Screen name="(auth)" />
        <Stack.Screen name="(tabs)" />
        <Stack.Screen
          name="coupon-details"
          options={{
            presentation: "card",
            animation: "slide_from_right",
          }}
        />
        <Stack.Screen name="account" />
        <Stack.Screen name="change-password" />
      </Stack>
    </AppProviders>
  );
}
