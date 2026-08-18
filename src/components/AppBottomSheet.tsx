import React from "react";
import { BottomSheet, RNHostView } from "@expo/ui";
import { Dimensions, View } from "react-native";

const { width: SCREEN_WIDTH } = Dimensions.get("window");

interface AppBottomSheetProps {
  isPresented: boolean;
  onDismiss: () => void;
  showDragIndicator?: boolean;
  children: React.ReactNode;
}

export default function AppBottomSheet({
  isPresented,
  onDismiss,
  showDragIndicator = true,
  children,
}: AppBottomSheetProps) {
  return (
    <BottomSheet
      isPresented={isPresented}
      onDismiss={onDismiss}
      showDragIndicator={showDragIndicator}
    >
      <RNHostView matchContents style={{ width: SCREEN_WIDTH }}>
        <View
          style={{ width: SCREEN_WIDTH, backgroundColor: "#ffffff" }}
          className="px-5 pt-2 pb-8 bg-white w-full"
        >
          {children}
        </View>
      </RNHostView>
    </BottomSheet>
  );
}
