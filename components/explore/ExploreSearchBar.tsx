import { View, TextInput } from "react-native";
import React from "react";

interface Props {
  query: string;
  setQuery: (val: string) => void;
}

export default function ExploreSearchBar({ query, setQuery }: Props) {
  return (
    <View className="mb-4">
      <TextInput
        value={query}
        onChangeText={setQuery}
        placeholder="Search perceptions, topics, trends..."
        placeholderTextColor="#888"
        className="bg-zinc-900 text-white p-3 rounded-full text-base"
        autoCorrect={false}
        autoCapitalize="none"
        clearButtonMode="while-editing"
      />
    </View>
  );
}