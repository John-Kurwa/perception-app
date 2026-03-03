import { View, Text } from "react-native";

export default function InsightSnapshot() {
  return (
    <View className="bg-surface rounded-2xl p-4 mb-8">
      
      {/* Title */}
      <Text className="text-primary font-semibold mb-2">
        📊 Insight Snapshot
      </Text>

      {/* Insight Text */}
      <Text className="text-gray-400 leading-5">
        Today, 64% of global users believe AI will reshape jobs permanently.
      </Text>
    </View>
  );
}