import React, { useState } from "react";
import {
  Image,
  ImageSourcePropType,
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

export interface DealItem {
  id: string;
  category?: string;
  image?: ImageSourcePropType | string;
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

  const imageSource =
    typeof deal.image === "string"
      ? { uri: deal.image }
      : deal.image || require("../../assets/images/placeholder-deal.jpg");

  return (
    <View style={styles.card}>
      {/* Banner */}
      <View style={styles.bannerContainer}>
        {/* Favorite Heart */}
        <TouchableOpacity
          activeOpacity={0.8}
          onPress={handleFavoriteToggle}
          style={styles.heartButton}
        >
          <Ionicons
            name={favorite ? "heart" : "heart-outline"}
            size={20}
            color={favorite ? "#ef4444" : "#1e293b"}
          />
        </TouchableOpacity>

        {/* Poster Image */}
        <Image source={imageSource} style={styles.posterImage} resizeMode="cover" />
      </View>

      {/* Card Info */}
      <View style={styles.cardInfo}>
        <Text style={styles.dealHeading}>{deal.dealHeading}</Text>
        <Text style={styles.dealDescription}>{deal.dealDescription}</Text>
      </View>

      {/* CTA Button */}
      <Pressable
        onPress={() => onPressOpen?.(deal)}
        style={styles.openButton}
      >
        <Text style={styles.openButtonText}>Open</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#ffffff",
    borderRadius: 26,
    padding: 16,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: "#f3f4f6",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.06,
    shadowRadius: 8,
    elevation: 3,
  },
  bannerContainer: {
    borderRadius: 16,
    overflow: "hidden",
    backgroundColor: "#f3f4f6",
    position: "relative",
  },
  heartButton: {
    position: "absolute",
    top: 12,
    right: 12,
    width: 40,
    height: 40,
    borderRadius: 14,
    backgroundColor: "#ffffff",
    alignItems: "center",
    justifyContent: "center",
    zIndex: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 4,
  },
  posterImage: {
    width: "100%",
    height: 320,
  },
  cardInfo: {
    paddingTop: 14,
    paddingBottom: 4,
    paddingHorizontal: 4,
  },
  dealHeading: {
    color: "#111827",
    fontWeight: "700",
    fontSize: 18,
  },
  dealDescription: {
    color: "#6b7280",
    fontSize: 15,
    marginTop: 2,
    fontWeight: "400",
  },
  openButton: {
    backgroundColor: "#ea580c",
    borderRadius: 14,
    paddingVertical: 14,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 14,
  },
  openButtonText: {
    color: "#ffffff",
    fontWeight: "700",
    fontSize: 16,
  },
});
