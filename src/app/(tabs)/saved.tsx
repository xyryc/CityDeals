import React from "react";
import { View, Text, ScrollView, Image, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import { Feather, Ionicons } from "@expo/vector-icons";

export default function SavedScreen() {
  return (
    <SafeAreaView className="flex-1 bg-white">
      <StatusBar style="dark" />
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingHorizontal: 20, paddingTop: 14, paddingBottom: 110 }}
      >
        <View className="flex-row items-center justify-between mb-5">
          <Text className="text-3xl font-extrabold text-neutral-900">
            Saved Coupons
          </Text>
          <View className="bg-orange-50 px-3.5 py-1.5 rounded-full border border-orange-100">
            <Text className="text-orange-600 font-bold text-base">12 Saved</Text>
          </View>
        </View>

        <View className="bg-neutral-50 rounded-3xl p-6 items-center justify-center border border-neutral-100 mb-6">
          <Image
            source={require("../../../assets/images/coupons-3.png")}
            className="w-52 h-52 mb-4"
            resizeMode="contain"
          />
          <Text className="text-xl font-bold text-neutral-900 text-center">
            Your Favorite Deals in One Place
          </Text>
          <Text className="text-neutral-600 text-base text-center mt-2.5 leading-6 max-w-sm">
            Present these coupons at checkout whenever you visit participating stores.
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
