import { View, Text, FlatList, TouchableOpacity } from "react-native";
import React from "react";
import { useRouter } from "expo-router";
import { Perception } from "@/services/mockFeed";

interface Props {
  perceptions: Perception[];
}

export default function TrendingSection({ perceptions }: Props) {
  const router = useRouter();

  const trending = [...(perceptions ?? [])]
    .sort(
      (a, b) =>
        b.votes.agree + b.votes.disagree -
        (a.votes.agree + a.votes.disagree)
    )
    .slice(0, 5);

  return (
    <View className="mb-6">
      <Text className="text-white text-lg font-semibold mb-3">
        🔥 Trending
      </Text>

      <FlatList
        data={trending}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => router.push(`/explore/category/${item.category.toLowerCase()}`)}
            className="bg-zinc-900 p-3 rounded-xl mb-2"
          >
            <Text className="text-white font-medium">{item.question}</Text>
            <Text className="text-zinc-400 text-xs mt-1">{item.category}</Text>
          </TouchableOpacity>
        )}
        scrollEnabled={false}
      />
    </View>
  );
}