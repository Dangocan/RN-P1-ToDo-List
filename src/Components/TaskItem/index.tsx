import React from "react";
import { TTask } from "../../types";
import { styles } from "./styles";
import TrashCanImageSVG from "../TrashCanImageSVG";
import CheckBoxCheckedImageSVG from "../CheckBoxCheckedImageSVG";
import CheckBoxUncheckedImageSVG from "../CheckBoxUncheckedImageSVG";
import { Text, TouchableOpacity, View } from "react-native";

type props = {
  task: TTask;
  handleRemoveTask: (task: TTask) => void;
  handleTaskToggle: (task: TTask) => void;
};

export default function TaskItem({
  task,
  handleRemoveTask,
  handleTaskToggle,
}: props) {
  return (
    <View style={styles.taskContainer}>
      <TouchableOpacity onPress={() => handleTaskToggle(task)}>
        {task.done ? (
          <CheckBoxCheckedImageSVG />
        ) : (
          <CheckBoxUncheckedImageSVG />
        )}
      </TouchableOpacity>
      <View style={styles.taskTextContainer}>
        <Text
          style={
            task.done
              ? {
                  color: "#808080",
                  textDecorationLine: "line-through",
                }
              : { color: "#F2F2F2" }
          }
        >
          {task.content}
        </Text>
      </View>
      <TouchableOpacity onPress={() => handleRemoveTask(task)}>
        <TrashCanImageSVG />
      </TouchableOpacity>
    </View>
  );
}
