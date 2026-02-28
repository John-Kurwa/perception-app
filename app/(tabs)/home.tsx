import { View, StyleSheet, FlatList } from "react-native";
import { useEffect, useState } from "react";
import { COLORS } from "@/constants/colors";
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
    <View style={styles.container}>
      <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <PerceptionCard item={item} />}
        contentContainerStyle={{ padding: 16 }}
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={
          <>
            <DailyQuestion />
            <TrendingList />
          </>
        }
        ListFooterComponent={<InsightSnapshot />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
});