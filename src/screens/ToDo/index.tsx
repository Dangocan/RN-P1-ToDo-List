import React from "react";
import {
  AddTaskInput,
  EmptyListComponent,
  LogoImageSVG,
  TaskItem,
} from "../../Components";
import { TTask } from "../../types";
import { styles } from "./styles";
import { Alert, FlatList, Text, View } from "react-native";

export default function ToDo() {
  const [tasks, setTasks] = React.useState<TTask[]>([
    {
      id: "1",
      done: false,
      content:
        "Integer urna interdum massa libero auctor neque turpis turpis semper.",
    },
    {
      id: "3",
      done: false,
      content:
        "Integer urna interdum massa libero auctor neque turpis turpis semper.",
    },
    {
      id: "2",
      done: false,
      content:
        "Integer urna interdum massa libero auctor neque turpis turpis semper.",
    },
  ]);

  const handleRemoveTask = (task: TTask) => {
    Alert.alert(
      "Remover tarefa",
      `Tem certeza que deseja remover esta tarefa?`,
      [
        {
          text: "Cancelar",
          style: "cancel",
        },
        {
          text: "Remover",
          style: "destructive",
          onPress: () =>
            setTasks((prevState) =>
              prevState.filter((item) => item.id !== task.id)
            ),
        },
      ]
    );
  };

  const handleTaskToggle = (task: TTask) => {
    setTasks((prevState) =>
      prevState.map((item) =>
        item.id === task.id ? { ...item, done: !item.done } : item
      )
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.topSubContainer}>
        <LogoImageSVG style={{ marginBottom: 14 }} />
        <AddTaskInput tasks={tasks} setTasks={setTasks} />
      </View>
      <View style={styles.bottomSubContainer}>
        <View style={styles.countersContainer}>
          <View style={{ flexDirection: "row" }}>
            <Text style={styles.tasksToDoText}>Criadas</Text>
            <Text style={styles.tasksCounters}>
              {tasks.filter((item) => !item.done).length}
            </Text>
          </View>
          <View style={{ flexDirection: "row" }}>
            <Text style={styles.tasksDoneText}>Concluídas</Text>
            <Text style={styles.tasksCounters}>
              {tasks.filter((item) => item.done).length}
            </Text>
          </View>
        </View>
        <FlatList
          style={styles.tasksList}
          data={tasks}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <TaskItem
              task={item}
              handleRemoveTask={handleRemoveTask}
              handleTaskToggle={handleTaskToggle}
            />
          )}
          ListEmptyComponent={() => <EmptyListComponent />}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </View>
  );
}
