import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import AppBottomSheet from "./AppBottomSheet";

export const LANGUAGES = [
  { id: "en", label: "United States", flag: "🇺🇸" },
  { id: "es", label: "Spain", flag: "🇪🇸" },
  { id: "pt", label: "Portugal", flag: "🇧🇷" },
];

interface LanguageBottomSheetProps {
  isPresented: boolean;
  onDismiss: () => void;
  selectedLanguage: string;
  onSaveLanguage: (language: string) => void;
}

export default function LanguageBottomSheet({
  isPresented,
  onDismiss,
  selectedLanguage,
  onSaveLanguage,
}: LanguageBottomSheetProps) {
  const [tempLanguage, setTempLanguage] = useState(selectedLanguage);

  useEffect(() => {
    if (isPresented) {
      setTempLanguage(selectedLanguage);
    }
  }, [isPresented, selectedLanguage]);

  const handleSave = () => {
    onSaveLanguage(tempLanguage);
    onDismiss();
  };

  return (
    <AppBottomSheet isPresented={isPresented} onDismiss={onDismiss}>
      <Text className="text-neutral-900 font-bold text-lg text-center mt-1 mb-5">
        Choose Your Language
      </Text>

      {/* Language Options */}
      <View className="gap-y-3 w-full">
        {LANGUAGES.map((lang) => {
          const isSelected = tempLanguage === lang.label;
          return (
            <TouchableOpacity
              key={lang.id}
              activeOpacity={0.8}
              onPress={() => setTempLanguage(lang.label)}
              className={`w-full h-14 rounded-2xl flex-row items-center justify-center border ${
                isSelected
                  ? "bg-orange-50 border-orange-400"
                  : "bg-slate-50 border-slate-100"
              }`}
            >
              <Text className="text-xl mr-2.5">{lang.flag}</Text>
              <Text
                className={`font-semibold text-lg ${
                  isSelected ? "text-orange-500" : "text-neutral-800"
                }`}
              >
                {lang.label}
              </Text>
            </TouchableOpacity>
          );
        })}
      </View>

      {/* Save CTA Button */}
      <TouchableOpacity
        activeOpacity={0.85}
        onPress={handleSave}
        className="w-full bg-orange-50 border border-orange-200/90 h-14 rounded-2xl items-center justify-center mt-5 active:bg-orange-100"
      >
        <Text className="text-orange-500 font-bold text-lg">Save</Text>
      </TouchableOpacity>
    </AppBottomSheet>
  );
}
