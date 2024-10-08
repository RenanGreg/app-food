import { Image, Pressable, Text, View } from "react-native";
import { RestProps } from "..";
import Ionicons from "@expo/vector-icons/Ionicons";

export function RestaurantsItem({ item }: { item: RestProps }) {
  return (
    <Pressable className="flex flex-row items-center justify-start gap-2">
      <Image source={{ uri: item.image }} className="w-20 h-20 rounded-full" />
      <View className="flex gap-2">
        <Text
          className="flex-base text-black leading-4 font-bold"
          numberOfLines={2}
        >
          {item.name}
        </Text>
        <View className="flex-row items-center gap-1">
          <Ionicons name="star" size={14} color="#ca8a04" />
          <Text className="text-sm">4.5</Text>
        </View>
      </View>
    </Pressable>
  );
}
