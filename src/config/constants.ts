import { ImageSourcePropType } from "react-native";
import { DealItem } from "../components/DealCard";

export interface LanguageOption {
  id: string;
  name: string;
  nativeName: string;
}

export const LANGUAGES: LanguageOption[] = [
  {
    id: "en",
    name: "English",
    nativeName: "English (US)",
  },
  {
    id: "es",
    name: "Spanish",
    nativeName: "Español",
  },
  {
    id: "pt",
    name: "Portuguese",
    nativeName: "Português",
  },
];

export interface OnboardingSlide {
  id: string;
  badge: string;
  title: string;
  description: string;
  image: ImageSourcePropType;
}

export const ONBOARDING_DATA: OnboardingSlide[] = [
  {
    id: "1",
    badge: "Special Discounts",
    title: "Save More on\nWhat You Love",
    description:
      "Discover Amazing local deals, exclusive coupons, and special offers near you",
    image: require("../../assets/images/coupons-1.png"),
  },
  {
    id: "2",
    badge: "Nearby Locations",
    title: "Find Great Deals\nNear You",
    description:
      "Browse nearby coupon locations, restaurants, and special offers around your area in seconds.",
    image: require("../../assets/images/coupons-2.png"),
  },
  {
    id: "3",
    badge: "Instant Checkout",
    title: "Ready to Save\nEvery Day",
    description:
      "Save your favorite coupons. Show them at checkout and enjoy local saving anytime.",
    image: require("../../assets/images/coupons-3.png"),
  },
];

export const CATEGORIES = [
  "All",
  "Shopping",
  "Groceries",
  "Electronics",
  "Restaurants",
  "Beauty",
];

export const MOCK_DEALS: DealItem[] = [
  {
    id: "1",
    storeName: "A-Mari-Mix",
    foodImage:
      "https://images.unsplash.com/photo-1541544741938-0af808871cc0?w=800&auto=format&fit=crop&q=80",
    offerTitle: "Free Queso Dip",
    offerSubtitle: "with 2 Entrées",
    dealHeading: "Buy 2 main dishes",
    dealDescription: "& get 1 order of croquettes for free.",
    isFavorite: false,
  },
  {
    id: "2",
    storeName: "Burger Craft",
    foodImage:
      "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=800&auto=format&fit=crop&q=80",
    offerTitle: "Free Crispy Fries",
    offerSubtitle: "with any Classic Meal",
    dealHeading: "Buy 1 Double Cheese Combo",
    dealDescription: "& get 1 large seasoned curly fries free.",
    isFavorite: true,
  },
  {
    id: "3",
    storeName: "Pizza Napoli",
    foodImage:
      "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=800&auto=format&fit=crop&q=80",
    offerTitle: "Buy 1 Get 1 Free",
    offerSubtitle: "on 12\" Gourmet Pizzas",
    dealHeading: "Special Weekend Offer",
    dealDescription: "Order any artisanal pizza & receive a Margherita free.",
    isFavorite: false,
  },
];
