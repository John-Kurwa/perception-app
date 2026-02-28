import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { COLORS } from "@/constants/colors";
import { Perception } from "@/services/mockFeed";

type Props = {
  item: Perception;
};

export default function PerceptionCard({ item }: Props) {
  return (
    <View style={styles.card}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.username}>{item.username}</Text>
        <Text style={styles.meta}>
          {item.country} • {item.createdAt}
        </Text>
      </View>

      {/* Content */}
      <Text style={styles.content}>{item.content}</Text>

      {/* Engagement */}
      <View style={styles.actions}>
        <TouchableOpacity>
          <Text style={styles.actionText}>🔥 {item.reactions}</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.actionText}>💬 {item.comments}</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.actionText}>🔁 {item.reposts}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: COLORS.surface,
    borderRadius: 16,
    padding: 16,
    marginBottom: 16,
  },
  header: {
    marginBottom: 8,
  },
  username: {
    color: COLORS.textPrimary,
    fontWeight: "600",
    fontSize: 15,
  },
  meta: {
    color: COLORS.textSecondary,
    fontSize: 12,
  },
  content: {
    color: COLORS.textPrimary,
    fontSize: 16,
    lineHeight: 22,
    marginBottom: 14,
  },
  actions: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  actionText: {
    color: COLORS.textSecondary,
    fontSize: 14,
  },
});