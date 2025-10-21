import { TextInput, View } from "react-native";
import Feather from "@expo/vector-icons/Feather";

export function Search() {
  return (
    <View
      style={{
        width: "100%",
        flexDirection: "row",
        height: 54,
        borderRadius: 16,
        alignItems: "center",
        paddingHorizontal: 16,
        backgroundColor: "#ffffff",
        borderWidth: 1,
        borderColor: "#e5e7eb",
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.05,
        shadowRadius: 2,
        elevation: 1,
      }}
    >
      <Feather name="search" size={20} color="#9ca3af" />
      <TextInput
        placeholder="Busque por comida ou restaurante..."
        placeholderTextColor="#9ca3af"
        style={{
          flex: 1,
          marginLeft: 12,
          color: "#1f2937",
          backgroundColor: "transparent",
          fontSize: 15,
          fontWeight: "500",
        }}
      />
    </View>
  );
}
