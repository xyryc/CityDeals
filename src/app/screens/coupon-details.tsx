import { Feather, FontAwesome, Ionicons } from "@expo/vector-icons";
import { router, useLocalSearchParams } from "expo-router";
import { StatusBar } from "expo-status-bar";
import {
  Image,
  Linking,
  ScrollView,
  Share,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export default function CouponDetailsScreen() {
  const insets = useSafeAreaInsets();
  const params = useLocalSearchParams<{
    id: string;
    dealHeading: string;
    dealDescription: string;
    category: string;
  }>();

  const dealHeading = params.dealHeading ?? "Coupon Deal";
  const dealDescription = params.dealDescription ?? "";

  const handleShareDeal = async () => {
    try {
      const dealUrl = `https://citydeals.app/deals/${params.id || "1"}`;
      await Share.share({
        title: dealHeading,
        message: `Check out this special offer on CityDeals! 🎉\n\n${dealHeading}\n${dealDescription}\n\nGet the coupon: ${dealUrl}`,
        url: dealUrl,
      });
    } catch (error) {
      console.log("Error sharing deal:", error);
    }
  };

  // Header height = status bar + 12 top padding + 44 button + 16 bottom padding
  const headerHeight = insets.top + 12 + 44 + 16;

  return (
    <View className="flex-1 bg-white">
      <StatusBar style="light" />

      {/* Floating Header */}
      <View
        className="absolute top-0 left-0 right-0 z-10 bg-[#0f3b5e] rounded-b-[28px] flex-row items-center justify-between px-4 pb-4"
        style={{ paddingTop: insets.top + 12, height: headerHeight }}
        pointerEvents="box-none"
      >
        {/* Background texture clipped separately to the rounded shape */}
        <View className="absolute inset-0 rounded-b-[28px] overflow-hidden">
          <Image
            source={require("../../../assets/images/line-background.png")}
            style={StyleSheet.absoluteFill}
            resizeMode="cover"
          />
        </View>

        <TouchableOpacity
          activeOpacity={0.8}
          onPress={() => router.back()}
          className="w-11 h-11 rounded-2xl bg-white items-center justify-center z-10 shadow-sm"
        >
          <Feather name="arrow-left" size={20} color="#1e293b" />
        </TouchableOpacity>

        <Text className="text-white text-lg font-bold z-10">
          Coupon Details
        </Text>

        <TouchableOpacity
          activeOpacity={0.8}
          onPress={handleShareDeal}
          className="w-11 h-11 rounded-2xl bg-white items-center justify-center z-10 shadow-sm"
        >
          <Ionicons name="share-social-outline" size={20} color="#1e293b" />
        </TouchableOpacity>
      </View>

      {/* Scrollable Content */}
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingTop: headerHeight,
          paddingBottom: insets.bottom + 32,
        }}
      >
        {/* Poster card with padding and border */}
        <View className="px-4 pt-4">
          <View className="rounded-3xl overflow-hidden border border-neutral-200">
            <Image
              source={require("../../../assets/images/placeholder-deal.jpg")}
              className="w-full h-[60vh]"
              resizeMode="cover"
            />
          </View>
        </View>

        {/* Info Section */}
        <View className="px-5 pt-5 bg-white">
          {/* Store logo + deal title row */}
          <View className="flex-row items-center mb-5">
            <View className="w-12 h-12 rounded-full bg-amber-100 border-2 border-amber-400 items-center justify-center mr-3.5">
              <Text className="text-2xl font-extrabold text-amber-700">
                {dealHeading.charAt(0).toUpperCase()}
              </Text>
            </View>
            <View className="flex-1">
              <Text className="text-lg font-bold text-neutral-900">
                {dealHeading}
              </Text>
              <Text className="text-base text-neutral-500 mt-0.5">
                {dealDescription}
              </Text>
            </View>
          </View>

          {/* Save coupon CTA */}
          <TouchableOpacity
            activeOpacity={0.85}
            className="flex-row items-center justify-center gap-2.5 rounded-2xl py-4 mb-6 bg-[#111827] shadow-sm"
          >
            <Ionicons name="heart-outline" size={20} color="#ffffff" />
            <Text className="text-white text-lg font-bold">Save coupon</Text>
          </TouchableOpacity>

          {/* Divider */}
          <View className="h-px bg-neutral-100 mb-5" />

          {/* Store location row */}
          <View className="flex-row items-center justify-between mb-5">
            <View className="flex-1 mr-3">
              <Text className="text-lg font-bold text-neutral-900 mb-1">
                Maria's Pizzeria
              </Text>
              <View className="flex-row items-center gap-1">
                <Ionicons name="location-outline" size={15} color="#6b7280" />
                <Text className="text-base text-neutral-500 flex-shrink">
                  2347 Arthur Ave, Bronx, NY 10458
                </Text>
              </View>
            </View>
            <TouchableOpacity
              activeOpacity={0.85}
              className="flex-row items-center gap-1.5 rounded-2xl px-3.5 py-3 bg-[#111827] shadow-sm"
            >
              <Ionicons name="location-outline" size={16} color="#ffffff" />
              <Text className="text-white text-base font-semibold">
                Where to use
              </Text>
            </TouchableOpacity>
          </View>

          {/* Divider */}
          <View className="h-px bg-neutral-100 mb-5" />

          {/* Website + Learn More */}
          <View className="flex-row gap-2 mb-3">
            <TouchableOpacity
              activeOpacity={0.85}
              className="flex-1 flex-row items-center justify-center gap-2 rounded-2xl py-4 bg-[#111827] shadow-sm"
            >
              <Ionicons name="globe-outline" size={18} color="#ffffff" />
              <Text className="text-white text-base font-semibold">
                Website
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              activeOpacity={0.85}
              className="flex-1 flex-row items-center justify-center gap-2 rounded-2xl py-4 bg-[#111827] shadow-sm"
            >
              <Ionicons
                name="information-circle-outline"
                size={18}
                color="#ffffff"
              />
              <Text className="text-white text-base font-semibold">
                Learn More
              </Text>
            </TouchableOpacity>
          </View>

          {/* Social links */}
          <View className="flex-row gap-2">
            <TouchableOpacity
              activeOpacity={0.85}
              className="flex-1 items-center justify-center rounded-2xl py-4 bg-[#111827] shadow-sm"
              onPress={() =>
                Linking.openURL("https://facebook.com").catch(() => {})
              }
            >
              <FontAwesome name="facebook" size={22} color="#ffffff" />
            </TouchableOpacity>
            <TouchableOpacity
              activeOpacity={0.85}
              className="flex-1 items-center justify-center rounded-2xl py-4 bg-[#111827] shadow-sm"
              onPress={() =>
                Linking.openURL("https://instagram.com").catch(() => {})
              }
            >
              <FontAwesome name="instagram" size={22} color="#ffffff" />
            </TouchableOpacity>
            <TouchableOpacity
              activeOpacity={0.85}
              className="flex-1 items-center justify-center rounded-2xl py-4 bg-[#111827] shadow-sm"
              onPress={() => Linking.openURL("https://wa.me/").catch(() => {})}
            >
              <FontAwesome name="whatsapp" size={22} color="#ffffff" />
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}
