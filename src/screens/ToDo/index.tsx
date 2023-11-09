import { LogoImageSVG } from "../Components";
import { styles } from "./styles";
import { Text, TextInput, TouchableOpacity, View } from "react-native";

export default function ToDo() {
  return (
    <View style={styles.container}>
      <View
        style={{
          alignItems: "center",
          width: "100%",
          paddingHorizontal: 24,
          zIndex: 1,
        }}
      >
        <LogoImageSVG />
        <View
          style={{
            width: "100%",
            flexDirection: "row",
            position: "relative",
            bottom: -26,
          }}
        >
          <TextInput
            keyboardAppearance="dark"
            placeholder="Adicione uma nova tarefa"
            placeholderTextColor="#808080"
            style={{
              flex: 1,
              backgroundColor: "#262626",
              borderRadius: 6,
              borderWidth: 1,
              borderColor: "#0D0D0D",
              paddingHorizontal: 16,
              fontSize: 16,
              color: "#F2F2F2",
            }}
          />
          <TouchableOpacity
            style={{
              backgroundColor: "#1E6F9F",
              borderRadius: 6,
              padding: 18,
              width: 52,
              height: 52,
              marginLeft: 4,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Text
              style={{
                color: "#F2F2F2",
              }}
            >
              +
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      <View
        style={{
          flex: 1,
          alignItems: "center",
          width: "100%",
          paddingTop: 48,
          paddingHorizontal: 24,
          backgroundColor: "#1A1A1A",
        }}
      >
        <View
          style={{
            width: "100%",
            justifyContent: "space-between",
            flexDirection: "row",
          }}
        >
          <View style={{ flexDirection: "row" }}>
            <Text style={{ color: "#1E6F9F", fontSize: 14, fontWeight: "700" }}>
              Criadas
            </Text>
            <Text
              style={{
                marginLeft: 8,
                fontWeight: "700",
                backgroundColor: "#333333",
                paddingHorizontal: 8,
                borderRadius: 100,
                color: "#D9D9D9",
              }}
            >
              0
            </Text>
          </View>
          <View style={{ flexDirection: "row" }}>
            <Text
              style={{
                color: "#8284FA",
                fontSize: 14,
                fontWeight: "700",
              }}
            >
              Concluídas
            </Text>
            <Text
              style={{
                marginLeft: 8,
                fontWeight: "700",
                backgroundColor: "#333333",
                paddingHorizontal: 8,
                borderRadius: 100,
                color: "#D9D9D9",
              }}
            >
              0
            </Text>
          </View>
        </View>
        <Text>LISTA AQUI</Text>
      </View>
    </View>
  );
}
