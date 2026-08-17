import React from "react";
import { Tabs } from "expo-router";
import { View, Text, Pressable } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const TAB_CONFIG: Record<
  string,
  {
    focused: keyof typeof Ionicons.glyphMap;
    unfocused: keyof typeof Ionicons.glyphMap;
    label: string;
  }
> = {
  index: {
    focused: "home",
    unfocused: "home-outline",
    label: "Home",
  },
  nearby: {
    focused: "navigate-circle",
    unfocused: "navigate-circle-outline",
    label: "Nearby",
  },
  saved: {
    focused: "heart",
    unfocused: "heart-outline",
    label: "Save",
  },
  profile: {
    focused: "person-circle",
    unfocused: "person-circle-outline",
    label: "Profile",
  },
};

function CustomTabBar(props: any) {
  const { state, descriptors, navigation } = props;
  const insets = useSafeAreaInsets();

  return (
    <View
      pointerEvents="box-none"
      style={{
        position: "absolute",
        bottom: 0,
        left: 0,
        right: 0,
        backgroundColor: "transparent",
      }}
    >
      <View
        style={{
          paddingBottom: Math.max(insets.bottom, 10),
          borderTopLeftRadius: 28,
          borderTopRightRadius: 28,
          shadowColor: "#000",
          shadowOffset: { width: 0, height: -4 },
          shadowOpacity: 0.08,
          shadowRadius: 10,
          elevation: 12,
          backgroundColor: "#ffffff",
        }}
        className="border-t border-x border-slate-100/90 flex-row items-center pt-3"
      >
        {state.routes.map((route: any, index: number) => {
          const { options } = descriptors[route.key];
          const isFocused = state.index === index;
          const config = TAB_CONFIG[route.name] || {
            focused: "ellipse",
            unfocused: "ellipse-outline",
            label: options.title || route.name,
          };

          const onPress = () => {
            const event = navigation.emit({
              type: "tabPress",
              target: route.key,
              canPreventDefault: true,
            });

            if (!isFocused && !event.defaultPrevented) {
              navigation.navigate(route.name, route.params);
            }
          };

          const color = isFocused ? "#ea580c" : "#94a3b8";

          return (
            <Pressable
              key={route.key}
              onPress={onPress}
              android_ripple={null}
              style={({ pressed }) => ({
                opacity: pressed ? 0.7 : 1,
              })}
              className="flex-1 items-center justify-center py-1"
            >
              <View className="w-8 h-8 items-center justify-center">
                <Ionicons
                  name={isFocused ? config.focused : config.unfocused}
                  size={24}
                  color={color}
                />
              </View>
              <Text
                style={{ color }}
                className="text-base font-semibold text-center mt-1"
              >
                {config.label}
              </Text>
            </Pressable>
          );
        })}
      </View>
    </View>
  );
}

export default function TabLayout() {
  return (
    <Tabs
      tabBar={(props) => <CustomTabBar {...props} />}
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          position: "absolute",
          backgroundColor: "transparent",
          borderTopWidth: 0,
          elevation: 0,
        },
      }}
    >
      <Tabs.Screen name="index" options={{ title: "Home" }} />
      <Tabs.Screen name="nearby" options={{ title: "Nearby" }} />
      <Tabs.Screen name="saved" options={{ title: "Save" }} />
      <Tabs.Screen name="profile" options={{ title: "Profile" }} />
    </Tabs>
  );
}
