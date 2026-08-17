import React from "react";
import { View, Text, ScrollView, Image, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import { Feather, Ionicons } from "@expo/vector-icons";

export default function HomeScreen() {
  return (
    <SafeAreaView className="flex-1 bg-white">
      <StatusBar style="dark" />
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingHorizontal: 20, paddingTop: 14, paddingBottom: 110 }}
      >
        {/* Top Header */}
        <View className="flex-row items-center justify-between mb-5">
          <Image
            source={require("../../../assets/images/city-deals-logo.png")}
            className="h-10 w-40"
            resizeMode="contain"
          />
          <TouchableOpacity
            activeOpacity={0.7}
            className="w-12 h-12 rounded-full bg-neutral-100 items-center justify-center"
          >
            <Feather name="bell" size={22} color="#1f2937" />
          </TouchableOpacity>
        </View>

        {/* Search Bar */}
        <View className="flex-row items-center bg-neutral-50 border border-neutral-200 rounded-2xl px-4 py-3.5 mb-6">
          <Feather name="search" size={20} color="#ea580c" />
          <Text className="text-neutral-400 text-base ml-3">
            Search coupons, stores & offers...
          </Text>
        </View>

        {/* Hero Banner */}
        <View className="bg-orange-500 rounded-3xl p-5 mb-6 overflow-hidden relative shadow-md shadow-orange-500/20">
          <View className="max-w-[65%]">
            <View className="bg-white/20 px-3 py-1.5 rounded-full self-start mb-2.5">
              <Text className="text-white text-base font-bold uppercase">
                Featured Deal
              </Text>
            </View>
            <Text className="text-white text-2xl font-black leading-tight">
              Save Up To 50% Today!
            </Text>
            <Text className="text-orange-100 text-base mt-2 leading-5">
              Explore local restaurant deals, fashion vouchers & more.
            </Text>
            <TouchableOpacity
              activeOpacity={0.85}
              className="bg-white py-3 px-5 rounded-xl self-start mt-4 shadow-sm"
            >
              <Text className="text-orange-600 font-bold text-base">
                Explore Deals
              </Text>
            </TouchableOpacity>
          </View>
          <Image
            source={require("../../../assets/images/coupons-1.png")}
            className="w-32 h-32 absolute -right-2 bottom-1"
            resizeMode="contain"
          />
        </View>

        {/* Popular Categories */}
        <View className="flex-row items-center justify-between mb-4">
          <Text className="text-neutral-900 font-bold text-xl">
            Categories
          </Text>
          <Text className="text-orange-600 font-bold text-base">See All</Text>
        </View>

        <View className="flex-row justify-between mb-6">
          {[
            { name: "Food & Drinks", icon: "fast-food-outline" },
            { name: "Shopping", icon: "cart-outline" },
            { name: "Services", icon: "construct-outline" },
            { name: "Beauty", icon: "sparkles-outline" },
          ].map((cat, idx) => (
            <View key={idx} className="items-center w-[22%]">
              <View className="w-16 h-16 rounded-2xl bg-orange-50 border border-orange-100 items-center justify-center mb-2">
                <Ionicons name={cat.icon as any} size={26} color="#ea580c" />
              </View>
              <Text
                numberOfLines={1}
                className="text-neutral-800 text-base font-semibold text-center"
              >
                {cat.name}
              </Text>
            </View>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
