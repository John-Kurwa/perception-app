import { View, Text, Animated } from "react-native";
import { useRef } from "react";
import { useNavigation } from "@react-navigation/native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import DebateDiscovery from "@/components/debates/DebateDicovery";
import DebateArena from "@/components/debates/DebateArena";
import ArgumentStrengthScore from "@/components/debates/ArgumentsStrengthScore.tsx";
import Leaderboard from "@/components/debates/Learderboard";
import { hiddenTabBarStyle } from "@/constants/tabBarStyle";

const APP_BAR_HEIGHT = 20;
const SCROLL_THRESHOLD = 10;

export default function DebatesScreen() {
  const navigation = useNavigation();
  const insets = useSafeAreaInsets();

  const scrollY = useRef(new Animated.Value(0)).current;
  const lastScrollY = useRef(0);
  const appBarTranslateY = useRef(new Animated.Value(0)).current;

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
            tabBarStyle: hiddenTabBarStyle
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
            }
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
          Debates⚔️
        </Text>
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
          <DebateDiscovery />
          <DebateArena />
          <ArgumentStrengthScore />
          <Leaderboard />
          <View className="h-24" />
        </View>
      </Animated.ScrollView>

    </View>
  );
}