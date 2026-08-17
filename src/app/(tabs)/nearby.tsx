import React from "react";
import { View, Text, ScrollView, Image, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import { Feather, Ionicons } from "@expo/vector-icons";

export default function NearbyScreen() {
  return (
    <SafeAreaView className="flex-1 bg-white">
      <StatusBar style="dark" />
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingHorizontal: 20, paddingTop: 14, paddingBottom: 110 }}
      >
        <View className="flex-row items-center justify-between mb-5">
          <Text className="text-3xl font-extrabold text-neutral-900">
            Nearby Deals
          </Text>
          <View className="flex-row items-center bg-orange-50 px-3.5 py-2 rounded-full border border-orange-100">
            <Ionicons name="location-outline" size={18} color="#ea580c" />
            <Text className="text-orange-600 font-bold text-base ml-1.5">
              Dhaka, BD
            </Text>
          </View>
        </View>

        <View className="bg-neutral-50 rounded-3xl p-6 items-center justify-center border border-neutral-100 mb-6">
          <Image
            source={require("../../../assets/images/coupons-2.png")}
            className="w-52 h-52 mb-4"
            resizeMode="contain"
          />
          <Text className="text-xl font-bold text-neutral-900 text-center">
            Discover Great Places Around You
          </Text>
          <Text className="text-neutral-600 text-base text-center mt-2.5 leading-6 max-w-sm">
            Browse active coupons and exclusive discounts available within walking distance.
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
