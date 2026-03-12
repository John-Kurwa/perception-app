import { View, Animated, Text } from "react-native";
import { useState, useMemo, useRef } from "react";
import { useNavigation } from "@react-navigation/native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import ExploreSearchBar from "@/components/explore/ExploreSearchBar";
import TrendingSection from "@/components/explore/TrendingSection";
import SearchResults from "@/components/explore/SearchResults";
import SuggestedTopics from "@/components/explore/SuggestedTopics";
import RecentSearches from "@/components/explore/RecentSearches";
import { usePerceptions } from "@/hooks/usePerceptions";

const APP_BAR_HEIGHT = 20;
const SCROLL_THRESHOLD = 10;

export default function Explore() {
  const [query, setQuery] = useState("");
  const navigation = useNavigation();
  const insets = useSafeAreaInsets();

  const lastScrollY = useRef(0);
  const scrollY = useRef(new Animated.Value(0)).current;
  const appBarTranslateY = useRef(new Animated.Value(0)).current;

  const { data: Perception, loading } = usePerceptions((s) => s.perceptions);

  const filtered = useMemo(() => {
    if (!query) return [];
    return Perception.filter((p) =>
      p.title.toLowerCase().includes(query.toLowerCase())
    );
  }, [query, Perception]);

  const suggested = ["Technology", "Politics", "AI", "Business", "Health", "Fashion"];

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
              borderRadius: 50,
              marginHorizontal: 20,
              marginBottom: 40,
              height: 56,
              position: "absolute",
              overflow: "hidden",
              borderColor: "#0f0D23",
              paddingVertical: 8,
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
          height: APP_BAR_HEIGHT,
          transform: [{ translateY: appBarTranslateY }],
        }}
        className="absolute left-0 right-0 z-10 flex-row items-center justify-between px-4 bg-background"
      >
        {/* <Text className="text-white text-xl font-bold">
          Explore🔍
        </Text> */}
      </Animated.View>

      {/* Scrollable Content */}
      <Animated.ScrollView
        onScroll={handleScroll}
        scrollEventThrottle={16}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingBottom: 40,
          paddingTop: APP_BAR_HEIGHT + insets.top,
        }}
        className="flex-1"
      >
        <View className="px-4">
          <ExploreSearchBar query={query} setQuery={setQuery} />

          {query.length === 0 ? (
            <>
              <SuggestedTopics topics={suggested} />
              <RecentSearches onSelect={setQuery} />
              <TrendingSection perceptions={Perception} />
            </>
          ) : (
            <SearchResults perception={filtered} />
          )}
        </View>
      </Animated.ScrollView>

    </View>
  );
}