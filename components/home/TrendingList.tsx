import { View, Text, StyleSheet } from "react-native";
import { COLORS } from "@/constants/colors";

export default function TrendingList() {
  return (
    <View style={{ marginBottom: 24 }}>
      <Text style={styles.header}>🔥 Trending Worldwide</Text>

      {["Is fast fashion unethical?", 
        "Is remote work permanent?", 
        "Is K-Pop dominating global culture?"].map((item, index) => (
        <View key={index} style={styles.card}>
          <Text style={styles.text}>{item}</Text>
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    color: COLORS.textPrimary,
    fontSize: 18,
    fontWeight: "600",
    marginBottom: 12,
  },
  card: {
    backgroundColor: COLORS.surface,
    padding: 14,
    borderRadius: 14,
    marginBottom: 10,
  },
  text: {
    color: COLORS.textSecondary,
  },
});