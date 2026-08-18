import { Feather, FontAwesome, Ionicons } from "@expo/vector-icons";
import { router, useLocalSearchParams } from "expo-router";
import { StatusBar } from "expo-status-bar";
import {
  Image,
  Linking,
  ScrollView,
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

  // Header height = status bar + 12 top padding + 44 button + 16 bottom padding
  const headerHeight = insets.top + 12 + 44 + 16;

  return (
    <View style={styles.container}>
      <StatusBar style="light" />

      {/* Floating Header */}
      <View
        style={[styles.header, { paddingTop: insets.top + 12, height: headerHeight }]}
        pointerEvents="box-none"
      >
        {/* Background texture clipped separately to the rounded shape */}
        <View style={styles.headerBgClip}>
          <Image
            source={require("../../assets/images/line-background.png")}
            style={StyleSheet.absoluteFill}
            resizeMode="cover"
          />
        </View>

        <TouchableOpacity
          activeOpacity={0.8}
          onPress={() => router.back()}
          style={styles.headerBtn}
        >
          <Feather name="arrow-left" size={20} color="#1e293b" />
        </TouchableOpacity>

        <Text style={styles.headerTitle}>Coupon Details</Text>

        <TouchableOpacity activeOpacity={0.8} style={styles.headerBtn}>
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
              source={require("../../assets/images/placeholder-deal.jpg")}
              style={styles.posterImage}
              resizeMode="cover"
            />
          </View>
        </View>

        {/* Info Section */}
        <View className="px-5 pt-5 bg-white">

          {/* Store logo + deal title row */}
          <View className="flex-row items-center mb-5">
            <View style={styles.storeLogo}>
              <Text style={styles.storeLogoText}>
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
            className="flex-row items-center justify-center gap-2.5 rounded-2xl py-4 mb-6"
            style={styles.darkBtn}
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
              className="flex-row items-center gap-1.5 rounded-2xl px-3.5 py-3"
              style={styles.darkBtn}
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
              className="flex-1 flex-row items-center justify-center gap-2 rounded-2xl py-4"
              style={styles.darkBtn}
            >
              <Ionicons name="globe-outline" size={18} color="#ffffff" />
              <Text className="text-white text-base font-semibold">Website</Text>
            </TouchableOpacity>
            <TouchableOpacity
              activeOpacity={0.85}
              className="flex-1 flex-row items-center justify-center gap-2 rounded-2xl py-4"
              style={styles.darkBtn}
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
              className="flex-1 items-center justify-center rounded-2xl py-4"
              style={styles.darkBtn}
              onPress={() =>
                Linking.openURL("https://facebook.com").catch(() => {})
              }
            >
              <FontAwesome name="facebook" size={22} color="#ffffff" />
            </TouchableOpacity>
            <TouchableOpacity
              activeOpacity={0.85}
              className="flex-1 items-center justify-center rounded-2xl py-4"
              style={styles.darkBtn}
              onPress={() =>
                Linking.openURL("https://instagram.com").catch(() => {})
              }
            >
              <FontAwesome name="instagram" size={22} color="#ffffff" />
            </TouchableOpacity>
            <TouchableOpacity
              activeOpacity={0.85}
              className="flex-1 items-center justify-center rounded-2xl py-4"
              style={styles.darkBtn}
              onPress={() =>
                Linking.openURL("https://wa.me/").catch(() => {})
              }
            >
              <FontAwesome name="whatsapp" size={22} color="#ffffff" />
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
  },

  // Floating header — absolutely positioned over the scroll content
  header: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    zIndex: 10,
    backgroundColor: "#0f3b5e",
    borderBottomLeftRadius: 28,
    borderBottomRightRadius: 28,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 16,
    paddingBottom: 16,
  },

  // Inner view that clips the background texture to the rounded shape only
  headerBgClip: {
    ...StyleSheet.absoluteFill,
    borderBottomLeftRadius: 28,
    borderBottomRightRadius: 28,
    overflow: "hidden",
  },

  headerBtn: {
    width: 44,
    height: 44,
    borderRadius: 14,
    backgroundColor: "#ffffff",
    alignItems: "center",
    justifyContent: "center",
    zIndex: 1,
  },
  headerTitle: {
    color: "#ffffff",
    fontSize: 18,
    fontWeight: "700",
    zIndex: 1,
  },

  // Poster image — StyleSheet as requested
  posterImage: {
    width: "100%",
    height: 420,
  },

  // Store logo avatar
  storeLogo: {
    width: 52,
    height: 52,
    borderRadius: 26,
    backgroundColor: "#fef3c7",
    borderWidth: 2,
    borderColor: "#fbbf24",
    alignItems: "center",
    justifyContent: "center",
    marginRight: 14,
  },
  storeLogoText: {
    fontSize: 22,
    fontWeight: "800",
    color: "#b45309",
  },

  // Shared dark button background — avoids NativeWind bg classes on interactive elements
  darkBtn: {
    backgroundColor: "#111827",
  },
});
