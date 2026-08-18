import { Host, Switch } from "@expo/ui";
import { Feather, Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import { router } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import CurvedHeader from "../../components/CurvedHeader";
import LanguageBottomSheet from "../../components/LanguageBottomSheet";

export default function ProfileScreen() {
  const [pushNotification, setPushNotification] = useState(true);

  // Language state & bottom sheet visibility
  const [selectedLanguage, setSelectedLanguage] = useState("English");
  const [isLanguageSheetOpen, setIsLanguageSheetOpen] = useState(false);

  const handleLogout = () => {
    router.replace("/login" as any);
  };

  return (
    <Host style={{ flex: 1 }}>
      <View className="flex-1 bg-neutral-50">
        <StatusBar style="light" />

        {/* Reusable Curved Header */}
        <CurvedHeader title="Profile" />

        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingBottom: 160 }}
        >
          {/* User Card */}
          <View className="bg-white rounded-3xl p-5 mx-4 mt-4 shadow-sm border border-neutral-100">
            {/* User Info Row */}
            <View className="flex-row items-center mb-5">
              <Image
                source={{
                  uri: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=150&auto=format&fit=crop&q=80",
                }}
                className="w-14 h-14 rounded-full bg-neutral-200 border-2 border-orange-100"
              />
              <View className="ml-3.5 flex-1">
                <Text className="text-neutral-500 text-base font-normal">
                  Welcome back,
                </Text>
                <Text className="text-neutral-900 font-bold text-lg mt-0.5">
                  Nasimul Noyon
                </Text>
              </View>
            </View>

            {/* Stats Row */}
            <View className="flex-row items-center justify-between">
              {/* Stat 1: Save coupons */}
              <View className="flex-1 bg-neutral-50/70 border border-neutral-100/90 rounded-2xl p-4 mr-2">
                <View className="flex-row items-center justify-between">
                  <Text className="text-2xl font-black text-[#0f3455]">12</Text>
                  <View className="w-10 h-10 rounded-full bg-orange-50 items-center justify-center">
                    <MaterialCommunityIcons
                      name="ticket-percent-outline"
                      size={22}
                      color="#ea580c"
                    />
                  </View>
                </View>
                <Text className="text-neutral-600 text-base font-semibold mt-2">
                  Save coupons
                </Text>
              </View>

              {/* Stat 2: Coupon redeemed */}
              <View className="flex-1 bg-neutral-50/70 border border-neutral-100/90 rounded-2xl p-4 ml-2">
                <View className="flex-row items-center justify-between">
                  <Text className="text-2xl font-black text-[#0f3455]">06</Text>
                  <View className="w-10 h-10 rounded-full bg-orange-50 items-center justify-center">
                    <Ionicons
                      name="checkmark-circle-outline"
                      size={22}
                      color="#ea580c"
                    />
                  </View>
                </View>
                <Text className="text-neutral-600 text-base font-semibold mt-2">
                  Coupon redeemed
                </Text>
              </View>
            </View>
          </View>

          {/* General Section */}
          <Text className="text-neutral-900 font-bold text-lg px-5 mt-6 mb-3">
            General
          </Text>

          {/* Menu Items with Uniform Fixed Height (h-[60px]) */}
          <View className="px-4 gap-y-3">
            {/* Account Info */}
            <TouchableOpacity
              activeOpacity={0.7}
              onPress={() => router.push("/screens/account" as any)}
              className="bg-white border border-neutral-100 rounded-2xl px-4 h-[60px] flex-row items-center justify-between shadow-sm"
            >
              <View className="flex-row items-center flex-1">
                <Feather name="user" size={20} color="#ea580c" />
                <Text className="text-neutral-800 font-semibold text-lg ml-3.5">
                  Account Info
                </Text>
              </View>
              <Feather name="chevron-right" size={20} color="#9ca3af" />
            </TouchableOpacity>

            {/* Change password */}
            <TouchableOpacity
              activeOpacity={0.7}
              onPress={() => router.push("/screens/change-password" as any)}
              className="bg-white border border-neutral-100 rounded-2xl px-4 h-[60px] flex-row items-center justify-between shadow-sm"
            >
              <View className="flex-row items-center flex-1">
                <Feather name="lock" size={20} color="#ea580c" />
                <Text className="text-neutral-800 font-semibold text-lg ml-3.5">
                  Change password
                </Text>
              </View>
              <Feather name="chevron-right" size={20} color="#9ca3af" />
            </TouchableOpacity>

            {/* Push notification */}
            <View className="bg-white border border-neutral-100 rounded-2xl px-4 h-[60px] flex-row items-center justify-between shadow-sm">
              <View className="flex-row items-center flex-1">
                <Feather name="bell" size={20} color="#ea580c" />
                <Text className="text-neutral-800 font-semibold text-lg ml-3.5">
                  Push notification
                </Text>
              </View>
              <View style={{ transform: [{ scale: 0.85 }], marginRight: -4 }}>
                <Host matchContents>
                  <Switch
                    value={pushNotification}
                    onValueChange={setPushNotification}
                  />
                </Host>
              </View>
            </View>

            {/* Language */}
            <TouchableOpacity
              activeOpacity={0.7}
              onPress={() => setIsLanguageSheetOpen(true)}
              className="bg-white border border-neutral-100 rounded-2xl px-4 h-[60px] flex-row items-center justify-between shadow-sm"
            >
              <View className="flex-row items-center flex-1">
                <MaterialCommunityIcons
                  name="translate"
                  size={20}
                  color="#ea580c"
                />
                <Text className="text-neutral-800 font-semibold text-lg ml-3.5">
                  Language
                </Text>
              </View>
              <View className="flex-row items-center">
                <Text className="text-neutral-500 text-base font-medium mr-2">
                  {selectedLanguage}
                </Text>
                <Feather name="chevron-right" size={20} color="#9ca3af" />
              </View>
            </TouchableOpacity>

            {/* Help & Support */}
            <TouchableOpacity
              activeOpacity={0.7}
              onPress={() => router.push("/screens/help-support" as any)}
              className="bg-white border border-neutral-100 rounded-2xl px-4 h-[60px] flex-row items-center justify-between shadow-sm"
            >
              <View className="flex-row items-center flex-1">
                <Feather name="shield" size={20} color="#ea580c" />
                <Text className="text-neutral-800 font-semibold text-lg ml-3.5">
                  Help & Support
                </Text>
              </View>
              <Feather name="chevron-right" size={20} color="#9ca3af" />
            </TouchableOpacity>

            {/* Terms of Use */}
            <TouchableOpacity
              activeOpacity={0.7}
              className="bg-white border border-neutral-100 rounded-2xl px-4 h-[60px] flex-row items-center justify-between shadow-sm"
            >
              <View className="flex-row items-center flex-1">
                <Feather name="file-text" size={20} color="#ea580c" />
                <Text className="text-neutral-800 font-semibold text-lg ml-3.5">
                  Terms of Use
                </Text>
              </View>
              <Feather name="chevron-right" size={20} color="#9ca3af" />
            </TouchableOpacity>
          </View>

          {/* Log Out Button */}
          <TouchableOpacity
            activeOpacity={0.85}
            onPress={handleLogout}
            className="bg-red-50 border border-red-100/80 rounded-2xl py-4 flex-row items-center justify-center mx-4 mt-5 active:bg-red-100"
          >
            <Feather name="log-out" size={20} color="#ef4444" />
            <Text className="text-red-500 font-bold text-lg ml-2">Log Out</Text>
          </TouchableOpacity>
        </ScrollView>

        {/* Modular Reusable LanguageBottomSheet */}
        <LanguageBottomSheet
          isPresented={isLanguageSheetOpen}
          onDismiss={() => setIsLanguageSheetOpen(false)}
          selectedLanguage={selectedLanguage}
          onSaveLanguage={(lang) => setSelectedLanguage(lang)}
        />
      </View>
    </Host>
  );
}
