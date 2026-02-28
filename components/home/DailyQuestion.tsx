import { View, Text, StyleSheet } from "react-native";
import VoteButtons from "./VoteButtons";
import { COLORS } from "@/constants/colors";

export default function DailyQuestion() {
  return (
    <View style={styles.card}>
      <Text style={styles.title}>🌍 Global Question</Text>
      <Text style={styles.question}>
        Is AI replacing human creativity?
      </Text>

      <VoteButtons />

      <Text style={styles.results}>
        62% Agree • 28% Disagree • 10% Unsure
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: COLORS.surface,
    borderRadius: 16,
    padding: 16,
    marginBottom: 24,
  },
  title: {
    color: COLORS.accent,
    fontWeight: "600",
    marginBottom: 8,
  },
  question: {
    color: COLORS.textPrimary,
    fontSize: 16,
    marginBottom: 12,
  },
  results: {
    color: COLORS.textSecondary,
    marginTop: 12,
  },
});