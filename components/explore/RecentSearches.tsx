import { View, Text, TouchableOpacity, FlatList } from "react-native";
import React, { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

interface Props {
  onSelect: (query: string) => void;
}

export default function RecentSearches({ onSelect }: Props) {
  const [recent, setRecent] = useState<string[]>([]);

  useEffect(() => {
    AsyncStorage.getItem("recentSearches").then((res) => {
      if (res) setRecent(JSON.parse(res));
    });
  }, []);

  if (!recent.length) return null;

  return (
    <View className="mb-6">
      <Text className="text-white font-semibold mb-3">
        🕒 Recent Searches
      </Text>
      <FlatList
        data={recent}
        keyExtractor={(item, i) => `${item}-${i}`}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => onSelect(item)}
            className="bg-zinc-900 p-3 rounded-xl mb-2"
          >
            <Text className="text-white">{item}</Text>
          </TouchableOpacity>
        )}
        scrollEnabled={false}
      />
    </View>
  );
}