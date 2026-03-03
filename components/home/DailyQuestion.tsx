import { View, Text } from "react-native";
import VoteButtons from "./VoteButtons";

export default function DailyQuestion() {
  return (
    <View className="bg-surface rounded-2xl p-4 mb-6">
      
      {/* Title */}
      <Text className="text-accent font-semibold mb-2">
        🌍 Global Question
      </Text>

      {/* Question */}
      <Text className="text-white text-base mb-4 leading-6">
        Is AI replacing human creativity?
      </Text>

      {/* Voting Buttons */}
      <VoteButtons />

      {/* Results */}
      <Text className="text-gray-400 text-sm mt-4">
        62% Agree • 28% Disagree • 10% Unsure
      </Text>
    </View>
  );
}