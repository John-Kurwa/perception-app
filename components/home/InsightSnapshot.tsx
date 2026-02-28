import { View, Text, StyleSheet } from "react-native";
import { COLORS } from "@/constants/colors";

export default function InsightSnapshot() {
  return (
    <View style={styles.card}>
      <Text style={styles.title}>📊 Insight Snapshot</Text>
      <Text style={styles.text}>
        Today, 64% of global users believe AI will reshape jobs permanently.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: COLORS.surface,
    borderRadius: 16,
    padding: 16,
    marginBottom: 32,
  },
  title: {
    color: COLORS.primary,
    fontWeight: "600",
    marginBottom: 8,
  },
  text: {
    color: COLORS.textSecondary,
  },
});