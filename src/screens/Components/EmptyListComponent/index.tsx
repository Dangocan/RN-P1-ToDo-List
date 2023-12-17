import React from "react";
import { styles } from "./styles";
import { Text, View } from "react-native";
import EmptyListImageSVG from "../EmptyListImageSVG";

export default function ToDo() {
  return (
    <View>
      <EmptyListImageSVG />
      <Text>Você ainda não tem tarefas cadastradas</Text>
      <Text>Crie tarefas e organize seus itens a fazer</Text>
    </View>
  );
}
