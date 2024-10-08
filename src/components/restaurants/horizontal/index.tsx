import { Image, Pressable, Text, View } from "react-native";
import { RestProps } from "..";

export function RestaurantsItem({ item }: { item: RestProps }) {
  return (
    <Pressable
      className="flex flex-col items-center justify-center"
      onPress={() => console.log("CLICOU NO RESTAURENTE" + item.name)}
    >
      <Image source={{ uri: item.image }} className="w-20 h-20 rounded-full" />
      <Text
        className="text-sm mt-2 w-20 text-center leading-4 text-black"
        numberOfLines={2}
      >
        {item.name}
      </Text>
    </Pressable>
  );
}
