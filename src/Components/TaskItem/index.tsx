import React from "react";
import { styles } from "./styles";
import { Text, View } from "react-native";
import EmptyListImageSVG from "../EmptyListImageSVG";

type props = {
  task: string;
};

export default function TaskItem({ task }: props) {
  return (
    <View>
      <Text>{task}</Text>
    </View>
  );
}
