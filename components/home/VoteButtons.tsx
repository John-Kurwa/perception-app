import { View, TouchableOpacity, Text, StyleSheet } from "react-native";
import { COLORS } from "@/constants/colors";

export default function VoteButtons() {
  return (
    <View style={styles.row}>
      <TouchableOpacity style={[styles.button, { backgroundColor: COLORS.agree }]}>
        <Text style={styles.text}>Agree</Text>
      </TouchableOpacity>

      <TouchableOpacity style={[styles.button, { backgroundColor: COLORS.disagree }]}>
        <Text style={styles.text}>Disagree</Text>
      </TouchableOpacity>

      <TouchableOpacity style={[styles.button, { backgroundColor: COLORS.neutral }]}>
        <Text style={styles.text}>Unsure</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  button: {
    flex: 1,
    padding: 10,
    borderRadius: 12,
    marginHorizontal: 4,
    alignItems: "center",
  },
  text: {
    color: "#000",
    fontWeight: "600",
  },
});