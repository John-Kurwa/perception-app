import { View, Animated, Text } from "react-native";
import { useEffect, useState, useRef } from "react";
import { useNavigation } from "@react-navigation/native";
import DailyQuestion from "@/components/home/DailyQuestion";
import TrendingList from "@/components/home/TrendingList";
import InsightSnapshot from "@/components/home/InsightSnapshot";
import PerceptionCard from "@/components/home/PerceptionCard";
import { fetchPerceptions, Perception } from "@/services/mockFeed";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const APP_BAR_HEIGHT = 18;
const SCROLL_THRESHOLD = 10;

export default function HomeScreen() {
  const [data, setData] = useState<Perception[]>([]);
  const navigation = useNavigation();
  const insets = useSafeAreaInsets();
  const scrollY = useRef(new Animated.Value(0)).current;
  const lastScrollY = useRef(0);
  const appBarTranslateY = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    const response = await fetchPerceptions();
    setData(response);
  };

  const handleScroll = Animated.event(
    [{ nativeEvent: { contentOffset: { y: scrollY } } }],
    {
      useNativeDriver: true,
      listener: (e: any) => {
        const currentY = e.nativeEvent.contentOffset.y;
        const diff = currentY - lastScrollY.current;

        if (diff > SCROLL_THRESHOLD) {
          Animated.timing(appBarTranslateY, {
            toValue: -(insets.top + APP_BAR_HEIGHT + 8),
            duration: 200,
            useNativeDriver: true,
          }).start();

          navigation.setOptions({
            tabBarStyle: { display: "none" },
          });

        } else if (diff < -SCROLL_THRESHOLD) {
          Animated.timing(appBarTranslateY, {
            toValue: 0,
            duration: 200,
            useNativeDriver: true,
          }).start();

          navigation.setOptions({
            tabBarStyle: {
              display: "flex",
              backgroundColor: "#0f0D23",
            },
          });
        }

        lastScrollY.current = currentY;
      },
    }
  );

  return (
    <View className="flex-1 bg-background">

      {/* Status bar faded overlay */}
      <View
        style={{ height: insets.top }}
        className="absolute top-0 left-0 right-0 z-20 bg-white/100"
      />

      {/* Spacer for app bar */}
      <View style={{ height: insets.top + APP_BAR_HEIGHT + 10 }} />

      {/* Animated App Bar */}
      <Animated.View
        style={{
          top: insets.top,
          height: APP_BAR_HEIGHT + 20,
          transform: [{ translateY: appBarTranslateY }],
        }}
        className="absolute left-0 right-0 z-10 flex-row items-center justify-between px-4 bg-background"
      >
        <Text className="text-white text-center text-xl font-bold">
          Perception💡
        </Text>
      </Animated.View>

      {/* FlatList */}
      <Animated.FlatList
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <PerceptionCard item={item} />}
        showsVerticalScrollIndicator={false}
        scrollEventThrottle={16}
        onScroll={handleScroll}
        contentContainerStyle={{
          paddingBottom: 40,
          paddingTop: APP_BAR_HEIGHT + insets.top,
        }}
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