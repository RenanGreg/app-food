import { TextInput, View } from "react-native";
import Feather from "@expo/vector-icons/Feather";

export function Search() {
  return (
    <View
      style={{
        width: "100%",
        flexDirection: "row",
        height: 56,
        borderRadius: 30,
        alignItems: "center",
        paddingHorizontal: 16,
        backgroundColor: "transparent",
        borderWidth: 1,
        borderColor: "#64748b",
      }}
    >
      <Feather name="search" size={24} color="#64748b" />
      <TextInput
        placeholder="Procure sua comida..."
        placeholderTextColor="#64748b"
        style={{
          flex: 1,
          marginLeft: 9,
          color: "#000",
          backgroundColor: "transparent",
          height: 40,
        }}
      />
    </View>
  );
}
