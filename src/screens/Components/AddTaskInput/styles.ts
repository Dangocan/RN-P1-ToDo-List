import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  inputContainer: {
    width: "100%",
    flexDirection: "row",
    position: "relative",
    bottom: -26,
  },
  addButton: {
    borderRadius: 6,
    padding: 18,
    width: 52,
    height: 52,
    marginLeft: 4,
    alignItems: "center",
    justifyContent: "center",
  },
  textInput: {
    flex: 1,
    backgroundColor: "#262626",
    borderRadius: 6,
    borderWidth: 1,
    paddingHorizontal: 16,
    fontSize: 16,
    color: "#F2F2F2",
  },
});
