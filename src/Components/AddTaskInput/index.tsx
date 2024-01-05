import React from "react";
import uuid from "react-native-uuid";
import { TTask } from "../../types";
import { styles } from "./styles";
import { Alert, TextInput, TouchableOpacity, View } from "react-native";
import PlusImageSVG from "../PlusImageSVG";

type props = {
  tasks: TTask[];
  setTasks: React.Dispatch<React.SetStateAction<TTask[]>>;
};

export default function ToDo({ tasks, setTasks }: props) {
  const [isAddTaskButtonPressed, setIsAddTaskButtonPressed] =
    React.useState(false);

  const [isTextInputFocused, setIsTextInputFocused] = React.useState(false);
  const [textInputValue, setTextInputValue] = React.useState("");

  const handleAddTask = () => {
    if (textInputValue.length <= 0) {
      return Alert.alert(
        "Tarefa vazia",
        "Você precisa digitar uma tarefa para adicioná-la"
      );
    }
    setTasks((prevStateTasks) => [
      ...prevStateTasks,
      { id: uuid.v4().toString(), done: false, content: textInputValue },
    ]);
    setTextInputValue("");
  };

  return (
    <View style={styles.inputContainer}>
      <TextInput
        value={textInputValue}
        keyboardAppearance="dark"
        placeholder="Adicione uma nova tarefa"
        placeholderTextColor="#808080"
        style={{
          ...styles.textInput,
          borderColor: isTextInputFocused ? "#8284FA" : "#0D0D0D",
        }}
        onFocus={() => setIsTextInputFocused(true)}
        onBlur={() => setIsTextInputFocused(false)}
        onChangeText={setTextInputValue}
      />
      <TouchableOpacity
        style={{
          ...styles.addButton,
          backgroundColor: isAddTaskButtonPressed ? "#4EA8DE" : "#1E6F9F",
        }}
        activeOpacity={1}
        onPressIn={() => setIsAddTaskButtonPressed(true)}
        onPressOut={() => setIsAddTaskButtonPressed(false)}
        onPress={handleAddTask}
      >
        <PlusImageSVG />
      </TouchableOpacity>
    </View>
  );
}
