import React from "react";
import {
  AddTaskInput,
  EmptyListComponent,
  LogoImageSVG,
  TaskItem,
} from "../../Components";
import { styles } from "./styles";
import { FlatList, Text, View } from "react-native";

export default function ToDo() {
  const [tasks, setTasks] = React.useState<string[]>([]);

  return (
    <View style={styles.container}>
      <View style={styles.topSubContainer}>
        <LogoImageSVG />
        <AddTaskInput tasks={tasks} setTasks={setTasks} />
      </View>
      <View style={styles.bottomSubContainer}>
        <View style={styles.countersContainer}>
          <View style={{ flexDirection: "row" }}>
            <Text style={styles.tasksToDoText}>Criadas</Text>
            <Text style={styles.tasksCounters}>0</Text>
          </View>
          <View style={{ flexDirection: "row" }}>
            <Text style={styles.tasksDoneText}>Concluídas</Text>
            <Text style={styles.tasksCounters}>0</Text>
          </View>
        </View>
        <FlatList
          data={tasks}
          keyExtractor={(item, index) => `${item}-${index}`}
          renderItem={({ item }) => <TaskItem task={item} />}
          ListEmptyComponent={() => <EmptyListComponent />}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </View>
  );
}
