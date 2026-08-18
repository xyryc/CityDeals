import React, { useState } from "react";
import {
  View,
  Text,
  ScrollView,
  Image,
  TouchableOpacity,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import { Feather, Ionicons } from "@expo/vector-icons";
import DealCard, { DealItem } from "../../components/DealCard";
import { CATEGORIES, MOCK_DEALS } from "../../config/constants";

export default function HomeScreen() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const handleOpenDeal = (deal: DealItem) => {
    alert(`Opening deal: ${deal.offerTitle} at ${deal.storeName}`);
  };

  return (
    <View className="flex-1 bg-neutral-50">
      <StatusBar style="light" />

      {/* Deep Navy Top Header with Starry Backdrop */}
      <View className="relative bg-[#0f3b5e] pt-12 pb-5 px-5 rounded-b-[28px] overflow-hidden">
        <Image
          source={require("../../../assets/images/line-background.png")}
          className="absolute bottom-0 w-full"
          resizeMode="cover"
        />

        {/* Top Header Row: User Location & Action Buttons */}
        <View className="flex-row items-center justify-between z-10">
          {/* User Avatar + Location Info */}
          <View className="flex-row items-center flex-1 mr-3">
            <Image
              source={{
                uri: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=150&auto=format&fit=crop&q=80",
              }}
              className="w-11 h-11 rounded-full bg-neutral-200 border border-orange-200"
            />
            <View className="ml-3 flex-1">
              <Text className="text-slate-300 text-base font-normal">
                My Location
              </Text>
              <View className="flex-row items-center mt-0.5">
                <Ionicons name="location-sharp" size={16} color="#ffffff" />
                <Text
                  numberOfLines={1}
                  className="text-white text-base font-bold ml-1 flex-1"
                >
                  23/B Kumapara, Sylhet
                </Text>
              </View>
            </View>
          </View>

          {/* Action Buttons: Search & Bell */}
          <View className="flex-row items-center gap-2">
            <TouchableOpacity
              activeOpacity={0.8}
              className="w-11 h-11 rounded-2xl bg-white items-center justify-center shadow-sm"
            >
              <Feather name="search" size={20} color="#1e293b" />
            </TouchableOpacity>

            <TouchableOpacity
              activeOpacity={0.8}
              className="w-11 h-11 rounded-2xl bg-white items-center justify-center shadow-sm"
            >
              <Feather name="bell" size={20} color="#1e293b" />
            </TouchableOpacity>
          </View>
        </View>

        {/* Location Dropdown Filter Pill */}
        <TouchableOpacity
          activeOpacity={0.85}
          className="bg-white rounded-2xl px-4 h-13 py-3.5 flex-row items-center justify-between mt-4 z-10 shadow-sm"
        >
          <View className="flex-row items-center">
            <Ionicons name="location-outline" size={20} color="#ea580c" />
            <Text className="text-neutral-700 font-semibold text-base ml-2.5">
              23/B Kumapara, Sylhet
            </Text>
          </View>
          <Feather name="chevron-down" size={20} color="#64748b" />
        </TouchableOpacity>
      </View>

      {/* Main Content ScrollView */}
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingTop: 16, paddingBottom: 110 }}
      >
        {/* Browse Categories Section */}
        <View className="mb-4">
          <Text className="text-neutral-900 font-bold text-lg px-5 mb-3">
            Browse Categories
          </Text>

          {/* Horizontal Scrollable Category Chips */}
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{ paddingHorizontal: 20, gap: 10 }}
          >
            {CATEGORIES.map((category) => {
              const isSelected = selectedCategory === category;
              return (
                <TouchableOpacity
                  key={category}
                  activeOpacity={0.8}
                  onPress={() => setSelectedCategory(category)}
                  className={`px-5 py-2.5 rounded-full border transition-all ${
                    isSelected
                      ? "bg-orange-500 border-orange-500 shadow-sm shadow-orange-500/25"
                      : "bg-slate-100/90 border-slate-200/60"
                  }`}
                >
                  <Text
                    className={`font-semibold text-base ${
                      isSelected ? "text-white" : "text-neutral-700"
                    }`}
                  >
                    {category}
                  </Text>
                </TouchableOpacity>
              );
            })}
          </ScrollView>
        </View>

        {/* Deals Feed */}
        <View className="px-4">
          {MOCK_DEALS.map((deal) => (
            <DealCard
              key={deal.id}
              deal={deal}
              onPressOpen={handleOpenDeal}
            />
          ))}
        </View>
      </ScrollView>
    </View>
  );
}
