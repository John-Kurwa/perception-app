import { View, Text, Pressable } from "react-native";

export default function TrendingList() {
  const trends = [
    "Is fast fashion unethical?",
    "Is remote work permanent?",
    "Is K-Pop dominating global culture?",
  ];

  return (
    <View className="mb-6">
      
      {/* Header */}
      <Text className="text-white text-lg font-semibold mb-3">
        🔥 Trending Worldwide
      </Text>

      {trends.map((item, index) => (
        <Pressable
          key={index}
          className="bg-surface p-4 rounded-xl mb-3 flex-row items-center active:opacity-80"
        >
          <Text className="text-primary font-semibold mr-3">
            {index + 1}
          </Text>
          <Text className="text-gray-300 flex-1">
            {item}
          </Text>
        </Pressable>
      ))}
    </View>
  );
}