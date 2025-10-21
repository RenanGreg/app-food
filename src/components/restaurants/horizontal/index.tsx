import { Image, Pressable, Text} from "react-native";
import { RestaurantsProps } from ".."; 
import { useRouter } from "expo-router";

export function RestaurantsItem({ item }: { item: RestaurantsProps }) {
  const router = useRouter();

  const handlePress = () => {
    router.push({
      pathname: '/product/[id]',
      params: {
        id: item.id,
        name: item.name,
        image: item.image,
        type: 'restaurant'
      }
    });
  };

  return (
    <Pressable
      className="flex flex-col items-center justify-center"
      onPress={handlePress}
    >
      <Image 
        source={{ uri: item.image }} 
        className="w-20 h-20 rounded-full border-2 border-gray-100 shadow-md" 
        resizeMode="cover"
      />
      <Text
        className="text-sm mt-2 w-20 text-center leading-4 text-black font-medium"
        numberOfLines={2}
      >
        {item.name}
      </Text>
    </Pressable>
  );
}
