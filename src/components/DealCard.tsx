import React, { useState } from "react";
import { View, Text, Image, TouchableOpacity, ImageSourcePropType } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import PrimaryButton from "./PrimaryButton";

export interface DealItem {
  id: string;
  storeName: string;
  storeLogo?: ImageSourcePropType | string;
  foodImage: string;
  offerBanner?: string;
  offerTitle: string;
  offerSubtitle: string;
  dealHeading: string;
  dealDescription: string;
  isFavorite?: boolean;
}

interface DealCardProps {
  deal: DealItem;
  onPressOpen?: (deal: DealItem) => void;
  onToggleFavorite?: (deal: DealItem) => void;
}

export default function DealCard({
  deal,
  onPressOpen,
  onToggleFavorite,
}: DealCardProps) {
  const [favorite, setFavorite] = useState(deal.isFavorite ?? false);

  const handleFavoriteToggle = () => {
    const newState = !favorite;
    setFavorite(newState);
    onToggleFavorite?.({ ...deal, isFavorite: newState });
  };

  return (
    <View className="bg-white rounded-3xl p-3.5 mb-5 shadow-sm border border-neutral-100">
      {/* Banner / Media Container */}
      <View className="relative rounded-2xl overflow-hidden bg-[#0a0f1d]">
        {/* Top Store Header & Favorite Button */}
        <View className="flex-row items-center justify-between px-3.5 pt-3 pb-2 z-10">
          {/* Store Logo / Badge */}
          <View className="flex-row items-center">
            <View className="w-8 h-8 rounded-full bg-red-600/90 items-center justify-center mr-2 shadow-sm">
              <Ionicons name="flame" size={18} color="#ffffff" />
            </View>
            <View>
              <Text className="text-white font-bold text-base tracking-wide">
                {deal.storeName}
              </Text>
              <Text className="text-amber-400 text-base font-medium -mt-0.5">
                Fresh Mex Fusion
              </Text>
            </View>
          </View>

          {/* Floating Favorite Heart Button */}
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={handleFavoriteToggle}
            className="w-11 h-11 rounded-2xl bg-white items-center justify-center shadow-md"
          >
            <Ionicons
              name={favorite ? "heart" : "heart-outline"}
              size={22}
              color={favorite ? "#ef4444" : "#1e293b"}
            />
          </TouchableOpacity>
        </View>

        {/* Product / Dish Image */}
        <Image
          source={{ uri: deal.foodImage }}
          className="w-full h-44"
          resizeMode="cover"
        />

        {/* Offer Typography Banner */}
        <View className="bg-[#111625] px-5 py-4 items-center justify-center border-t border-amber-500/20">
          <Text className="text-amber-400 font-serif font-black text-3xl text-center leading-tight tracking-wide">
            {deal.offerTitle}
          </Text>
          <Text className="text-amber-200/90 font-serif italic text-lg text-center mt-0.5">
            {deal.offerSubtitle}
          </Text>
        </View>
      </View>

      {/* Card Info Details */}
      <View className="px-1 pt-3">
        <Text className="text-neutral-900 font-bold text-lg">
          {deal.dealHeading}
        </Text>
        <Text className="text-neutral-500 text-base mt-0.5 font-normal">
          {deal.dealDescription}
        </Text>
      </View>

      {/* Action CTA Button using PrimaryButton */}
      <PrimaryButton
        title="Open"
        onPress={() => onPressOpen?.(deal)}
        className="mt-3.5"
      />
    </View>
  );
}
