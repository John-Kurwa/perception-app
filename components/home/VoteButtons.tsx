import { View, Pressable, Text } from "react-native";

export default function VoteButtons() {
  return (
    <View className="flex-row justify-between">
      
      <Pressable className="flex-1 bg-primary py-3 rounded-xl mx-1 items-center active:opacity-80">
        <Text className="text-black font-semibold">
          Agree
        </Text>
      </Pressable>

      <Pressable className="flex-1 bg-accent py-3 rounded-xl mx-1 items-center active:opacity-80">
        <Text className="text-black font-semibold">
          Disagree
        </Text>
      </Pressable>

      <Pressable className="flex-1 bg-gray-500 py-3 rounded-xl mx-1 items-center active:opacity-80">
        <Text className="text-black font-semibold">
          Unsure
        </Text>
      </Pressable>

    </View>
  );
}