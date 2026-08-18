import { Feather, Ionicons } from "@expo/vector-icons";
import { StatusBar } from "expo-status-bar";
import { useMemo, useState } from "react";
import {
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import DealCard, { DealItem } from "../../components/DealCard";
import EmptyDealsState from "../../components/EmptyDealsState";
import { CATEGORIES, MOCK_DEALS } from "../../config/constants";

export default function HomeScreen() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredDeals = useMemo(() => {
    let list = MOCK_DEALS;

    if (selectedCategory !== "All") {
      list = list.filter((d) => d.category === selectedCategory);
    }

    if (searchQuery.trim().length > 0) {
      const q = searchQuery.toLowerCase().trim();
      list = list.filter(
        (deal) =>
          deal.dealHeading.toLowerCase().includes(q) ||
          deal.dealDescription.toLowerCase().includes(q) ||
          (deal.category && deal.category.toLowerCase().includes(q))
      );
    }

    return list;
  }, [selectedCategory, searchQuery]);

  const handleOpenDeal = (deal: DealItem) => {
    alert(`Opening deal: ${deal.dealHeading}`);
  };

  const handleClearFilters = () => {
    setSearchQuery("");
    setSelectedCategory("All");
  };

  return (
    <View style={styles.container}>
      <StatusBar style="light" />

      {/* Deep Navy Top Header */}
      <View style={styles.header}>
        <Image
          source={require("../../../assets/images/line-background.png")}
          style={StyleSheet.absoluteFill}
          resizeMode="cover"
        />

        {/* Header Row */}
        <View style={styles.headerRow}>
          <View style={styles.locationRow}>
            <Image
              source={{
                uri: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=150&auto=format&fit=crop&q=80",
              }}
              style={styles.avatar}
            />
            <View style={styles.locationText}>
              <Text style={styles.locationLabel}>My Location</Text>
              <View style={styles.locationValueRow}>
                <Ionicons name="location-sharp" size={16} color="#ffffff" />
                <Text style={styles.locationValue} numberOfLines={1}>
                  4/A 28013 Madrid, Spain
                </Text>
              </View>
            </View>
          </View>
          <TouchableOpacity activeOpacity={0.8} style={styles.bellButton}>
            <Feather name="bell" size={20} color="#1e293b" />
          </TouchableOpacity>
        </View>

        {/* Search Bar */}
        <View style={styles.searchBar}>
          <Feather name="search" size={20} color="#ea580c" />
          <TextInput
            value={searchQuery}
            onChangeText={setSearchQuery}
            placeholder="Search deals, stores, food..."
            placeholderTextColor="#9ca3af"
            returnKeyType="search"
            style={styles.searchInput}
          />
          {searchQuery.trim().length > 0 && (
            <TouchableOpacity
              activeOpacity={0.7}
              onPress={() => setSearchQuery("")}
              style={styles.clearButton}
            >
              <Feather name="x" size={16} color="#64748b" />
            </TouchableOpacity>
          )}
        </View>
      </View>

      {/* Scrollable Content */}
      <ScrollView
        showsVerticalScrollIndicator={false}
        keyboardShouldPersistTaps="handled"
        contentContainerStyle={styles.scrollContent}
      >
        {/* Browse Categories */}
        <View style={styles.categoriesSection}>
          <Text style={styles.sectionTitle}>Browse Categories</Text>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.categoryScroll}
          >
            {CATEGORIES.map((category) => {
              const isSelected = selectedCategory === category;
              return (
                <Pressable
                  key={category}
                  onPress={() => setSelectedCategory(category)}
                  style={[
                    styles.categoryChip,
                    isSelected
                      ? styles.categoryChipSelected
                      : styles.categoryChipDefault,
                  ]}
                >
                  <Text
                    style={[
                      styles.categoryChipText,
                      isSelected
                        ? styles.categoryChipTextSelected
                        : styles.categoryChipTextDefault,
                    ]}
                  >
                    {category}
                  </Text>
                </Pressable>
              );
            })}
          </ScrollView>
        </View>

        {/* Deals Feed */}
        <View style={styles.feedContainer}>
          {filteredDeals.length > 0 ? (
            filteredDeals.map((deal) => (
              <DealCard
                key={deal.id}
                deal={deal}
                onPressOpen={handleOpenDeal}
              />
            ))
          ) : (
            <EmptyDealsState
              query={searchQuery}
              onClearFilters={handleClearFilters}
            />
          )}
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f9fafb",
  },
  header: {
    backgroundColor: "#0f3b5e",
    paddingTop: 48,
    paddingBottom: 20,
    paddingHorizontal: 20,
    borderBottomLeftRadius: 28,
    borderBottomRightRadius: 28,
    overflow: "hidden",
  },
  headerRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    zIndex: 10,
  },
  locationRow: {
    flexDirection: "row",
    alignItems: "center",
    flex: 1,
    marginRight: 12,
  },
  avatar: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: "#e5e7eb",
    borderWidth: 1,
    borderColor: "#fed7aa",
  },
  locationText: {
    marginLeft: 12,
    flex: 1,
  },
  locationLabel: {
    color: "#94a3b8",
    fontSize: 14,
    fontWeight: "400",
  },
  locationValueRow: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 2,
  },
  locationValue: {
    color: "#ffffff",
    fontSize: 15,
    fontWeight: "700",
    marginLeft: 4,
    flex: 1,
  },
  bellButton: {
    width: 44,
    height: 44,
    borderRadius: 14,
    backgroundColor: "#ffffff",
    alignItems: "center",
    justifyContent: "center",
  },
  searchBar: {
    backgroundColor: "#ffffff",
    borderRadius: 16,
    paddingHorizontal: 16,
    height: 52,
    flexDirection: "row",
    alignItems: "center",
    marginTop: 16,
    zIndex: 10,
  },
  searchInput: {
    flex: 1,
    marginLeft: 10,
    color: "#111827",
    fontWeight: "500",
    fontSize: 15,
    paddingVertical: 10,
  },
  clearButton: {
    width: 28,
    height: 28,
    borderRadius: 14,
    backgroundColor: "#f1f5f9",
    alignItems: "center",
    justifyContent: "center",
    marginLeft: 4,
  },
  scrollContent: {
    paddingTop: 16,
    paddingBottom: 110,
  },
  categoriesSection: {
    marginBottom: 16,
  },
  sectionTitle: {
    color: "#111827",
    fontWeight: "700",
    fontSize: 18,
    paddingHorizontal: 20,
    marginBottom: 12,
  },
  categoryScroll: {
    paddingHorizontal: 20,
    gap: 10,
  },
  categoryChip: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 100,
    borderWidth: 1,
  },
  categoryChipSelected: {
    backgroundColor: "#ea580c",
    borderColor: "#ea580c",
  },
  categoryChipDefault: {
    backgroundColor: "#f1f5f9",
    borderColor: "#e2e8f0",
  },
  categoryChipText: {
    fontWeight: "600",
    fontSize: 15,
  },
  categoryChipTextSelected: {
    color: "#ffffff",
  },
  categoryChipTextDefault: {
    color: "#374151",
  },
  feedContainer: {
    paddingHorizontal: 16,
  },
});
