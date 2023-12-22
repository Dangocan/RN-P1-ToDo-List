import React from "react";
import { styles } from "./styles";
import { Text, View } from "react-native";
import EmptyListImageSVG from "../EmptyListImageSVG";

export default function ToDo() {
  return (
    <View style={styles.container}>
      <EmptyListImageSVG />
      <Text style={styles.mainText}>
        Você ainda não tem tarefas cadastradas
      </Text>
      <Text style={styles.subText}>
        Crie tarefas e organize seus itens a fazer
      </Text>
    </View>
  );
}
