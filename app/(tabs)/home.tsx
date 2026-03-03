import { View, FlatList } from "react-native";
import { useEffect, useState } from "react";
import DailyQuestion from "@/components/home/DailyQuestion";
import TrendingList from "@/components/home/TrendingList";
import InsightSnapshot from "@/components/home/InsightSnapshot";
import PerceptionCard from "@/components/home/PerceptionCard";
import { fetchPerceptions, Perception } from "@/services/mockFeed";

export default function HomeScreen() {
  const [data, setData] = useState<Perception[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    const response = await fetchPerceptions();
    setData(response);
    setLoading(false);
  };

  return (
    <View className="flex-1 bg-background">
      <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <PerceptionCard item={item} />
        )}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 40 }}
        ListHeaderComponent={
          <View className="px-4 pt-4">
            <DailyQuestion />
            <TrendingList />
          </View>
        }
        ListFooterComponent={<InsightSnapshot />}
      />
    </View>
  );
}