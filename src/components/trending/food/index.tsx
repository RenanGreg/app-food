import { Image, Pressable, Text, View } from "react-native";
import { FoodProps } from "..";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useRouter } from "expo-router";

export function CardHorizontalFood({ food }: { food: FoodProps }) {
  const router = useRouter();

  const handlePress = () => {
    router.push({
      pathname: '/product/[id]',
      params: {
        id: food.id,
        name: food.name,
        price: food.price.toString(),
        image: food.image,
        rating: food.rating.toString(),
        time: food.time,
        delivery: food.delivery.toString(),
        type: 'food'
      }
    });
  };

  return (
    <Pressable 
      className="flex rounded-xl relative shadow-sm bg-white p-2 w-44"
      onPress={handlePress}
    >
      <Image 
        source={{ uri: food.image }} 
        className="w-40 h-32 rounded-xl"
        resizeMode="cover"
      />
      <View
        className="flex flex-row bg-neutral-900/95 gap-1 rounded-full 
                absolute top-3 right-3 px-2.5 py-1 items-center justify-center"
      >
        <Ionicons name="star" size={14} color="#fbbf24" />
        <Text className="text-white text-sm font-semibold">{food.rating}</Text>
      </View>
      <Text className="text-emerald-600 font-bold text-lg mt-2">
        R$ {food.price.toFixed(2)}
      </Text>
      <Text className="text-black font-semibold text-base mt-0.5" numberOfLines={1}>
        {food.name}
      </Text>
      <Text className="text-neutral-500 text-xs mt-1 mb-1">
        ⏱️ {food.time} • 🚚 R$ {food.delivery.toFixed(2)}
      </Text>
    </Pressable>
  );
}
