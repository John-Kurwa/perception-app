import { View, FlatList, Text } from "react-native";
import React from "react";
import PerceptionCard from "@/components/home/PerceptionCard";
import { Perception } from "@/services/mockFeed";

interface Props {
  perception: Perception[];
}

export default function SearchResults({ perception }: Props) {
  if (!perception.length) {
    return (
      <View className="mt-6">
        <Text className="text-zinc-400 text-center">
          No results found
        </Text>
      </View>
    );
  }

  return (
    <FlatList
      data={perception}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => <PerceptionCard item={item} />}
      showsVerticalScrollIndicator={false}
      className="mt-4"
    />
  );
}