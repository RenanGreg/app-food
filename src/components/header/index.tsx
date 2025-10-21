import { Pressable, Text, View } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import Feather from "@expo/vector-icons/Feather";

export default function Header() {
  return (
    <View className="w-full flex flex-row items-center justify-between">
      <Pressable className="w-11 h-11 bg-white rounded-full flex justify-center items-center shadow-sm">
        <Ionicons name="menu" size={22} color="#121212" />
      </Pressable>
      
      <View className="flex flex-col items-center justify-center">
        <Text className="text-center text-xs text-slate-500 font-medium">
          Localização
        </Text>
        <View className="flex-row items-center justify-center gap-1 mt-0.5">
          <Feather name="map-pin" size={14} color="#ef4444" />
          <Text className="text-lg font-bold text-gray-900">
            São Paulo
          </Text>
        </View>
      </View>
      
      <Pressable className="w-11 h-11 bg-white rounded-full flex justify-center items-center shadow-sm">
        <Feather name="bell" size={22} color="#121212" />
      </Pressable>
    </View>
  );
}
