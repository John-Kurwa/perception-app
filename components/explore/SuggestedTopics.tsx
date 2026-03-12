import { View, Text, FlatList, TouchableOpacity } from "react-native";
import React from "react";
import { useRouter } from "expo-router";

interface Props {
  topics: string[];
}

export default function SuggestedTopics({ topics }: Props) {
  const router = useRouter();

  return (
    <View className="mb-6">
      <Text className="text-white font-semibold mb-3">
        💡 Suggested Topics
      </Text>

      <FlatList
        data={topics}
        keyExtractor={(item) => item}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => router.push(`/explore/category/${item.toLowerCase()}`)}
            className="bg-zinc-900 px-4 py-2 rounded-full mr-2"
          >
            <Text className="text-white">{item}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}