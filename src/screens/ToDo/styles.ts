import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    paddingTop: 48,
    backgroundColor: "#0D0D0D",
  },
  topSubContainer: {
    alignItems: "center",
    width: "100%",
    paddingHorizontal: 24,
    zIndex: 1,
  },
  inputContainer: {
    width: "100%",
    flexDirection: "row",
    position: "relative",
    bottom: -26,
  },
  bottomSubContainer: {
    flex: 1,
    alignItems: "center",
    width: "100%",
    paddingTop: 48,
    paddingHorizontal: 24,
    backgroundColor: "#1A1A1A",
  },
  countersContainer: {
    width: "100%",
    justifyContent: "space-between",
    flexDirection: "row",
  },
  tasksToDoText: {
    color: "#1E6F9F",
    fontSize: 14,
    fontWeight: "700",
  },
  tasksDoneText: {
    color: "#8284FA",
    fontSize: 14,
    fontWeight: "700",
  },
  tasksCounters: {
    marginLeft: 8,
    fontWeight: "700",
    backgroundColor: "#333333",
    paddingHorizontal: 8,
    borderRadius: 100,
    color: "#D9D9D9",
  },
});
