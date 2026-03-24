import { View, Text, Animated } from "react-native";
import { useRef } from "react";
import { useNavigation } from "@react-navigation/native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import UserHeader from "@/components/profile/UserHeader";
import BadgesSection from "@/components/profile/BadgeSection";
import StatsSection from "@/components/profile/StatsSection";

const APP_BAR_HEIGHT = 20;
const SCROLL_THRESHOLD = 10;

export default function ProfileScreen() {
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
            tabBarStyle: {
               display: "none" 
              }
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
              backgroundColor: "#0f0D23"
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
      <View style={{ height: insets.top + APP_BAR_HEIGHT + 30 }} />

      {/* Animated App Bar */}
      <Animated.View
        style={{
          top: insets.top,
          height: APP_BAR_HEIGHT + 20,
          transform: [{ translateY: appBarTranslateY }],
        }}
        className="absolute left-0 right-0 z-10 flex-row items-center justify-between px-4 bg-background"
      >
        <Text className="text-white text-xl font-bold">
          Hello 👋
        </Text>
      </Animated.View>

      {/* Scrollable Content — ✅ content moved inside here, duplicate ScrollView removed */}
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
          <UserHeader />
          <View className="h-20" />
          <BadgesSection />
          <StatsSection />
          <View className="h-24" />
        </View>
      </Animated.ScrollView>

    </View>
  );
}