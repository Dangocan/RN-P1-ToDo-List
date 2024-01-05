import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  taskContainer: {
    flexDirection: "row",
    backgroundColor: "#262626",
    borderColor: "#333333",
    borderWidth: 1,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 8,
    paddingHorizontal: 8,
    paddingVertical: 12,
  },
  taskTextContainer: {
    flexShrink: 1,
    marginHorizontal: 8,
  },
});
