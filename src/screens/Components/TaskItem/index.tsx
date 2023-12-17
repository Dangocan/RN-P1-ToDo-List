import React from "react";
import { styles } from "./styles";
import { Text, View } from "react-native";
import EmptyListImageSVG from "../EmptyListImageSVG";

export default function ToDo() {
  const [isAddTaskButtonPressed, setIsAddTaskButtonPressed] =
    React.useState(false);

  return (
    <View>
      <Text>task</Text>
    </View>
  );
}
