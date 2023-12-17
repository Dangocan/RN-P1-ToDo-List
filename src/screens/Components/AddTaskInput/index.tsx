import React from "react";
import { styles } from "./styles";
import { Text, TextInput, TouchableOpacity, View } from "react-native";
import { PlusImageSVG } from "..";

export default function ToDo() {
  const [isAddTaskButtonPressed, setIsAddTaskButtonPressed] =
    React.useState(false);

  const [isTextInputFocused, setIsTextInputFocused] = React.useState(false);

  return (
    <View style={styles.inputContainer}>
      <TextInput
        keyboardAppearance="dark"
        placeholder="Adicione uma nova tarefa"
        placeholderTextColor="#808080"
        style={{
          ...styles.textInput,
          borderColor: isTextInputFocused ? "#8284FA" : "#0D0D0D",
        }}
        onFocus={() => setIsTextInputFocused(true)}
        onBlur={() => setIsTextInputFocused(false)}
      />
      <TouchableOpacity
        style={{
          ...styles.addButton,
          backgroundColor: isAddTaskButtonPressed ? "#4EA8DE" : "#1E6F9F",
        }}
        activeOpacity={1}
        onPressIn={() => setIsAddTaskButtonPressed(true)}
        onPressOut={() => setIsAddTaskButtonPressed(false)}
      >
        <PlusImageSVG />
      </TouchableOpacity>
    </View>
  );
}
