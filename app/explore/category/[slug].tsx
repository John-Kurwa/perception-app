import { View, Text, FlatList } from "react-native";
import { useLocalSearchParams } from "expo-router";
import { usePerceptions } from "@/hooks/usePerceptions";
import PerceptionCard from "@/components/home/PerceptionCard";

export default function CategoryPage() {
  const { slug } = useLocalSearchParams();
  const { data: perceptions } = usePerceptions((s) => s.perceptions);
  
  const filtered = perceptions.filter(
    (item) =>
      item.category.toLowerCase() ===
      String(slug).toLowerCase()
  );

  return (
    <View className="flex-1 bg-background px-4 pt-4">
      <Text className="text-white text-xl font-bold mb-4">
        {slug} Perceptions
      </Text>

      <FlatList
        data={filtered}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <PerceptionCard item={item} />
        )}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}