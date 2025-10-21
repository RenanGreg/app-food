import { View, Pressable, Text, Image } from 'react-native';
import { RestaurantsProps } from '..'
import { Ionicons } from '@expo/vector-icons'
import { useRouter } from 'expo-router';

export function RestaurantItem({ item }: { item: RestaurantsProps }) {
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
     className='flex flex-row items-center justify-start gap-3 bg-white p-3 rounded-xl shadow-sm mb-3'
     onPress={handlePress}
   >
     <Image
      source={{ uri: item.image}}
      className='w-24 h-24 rounded-2xl'
      resizeMode="cover"
     />

     <View className='flex-1 gap-2'>
      <Text className='text-lg text-black leading-5 font-bold' numberOfLines={2}>
        {item.name}
      </Text>

      <View className='flex-row items-center gap-1'>
        <Ionicons name='star' size={16} color="#fbbf24" />
        <Text className='text-sm font-semibold text-gray-700'>4.5</Text>
        <Text className='text-xs text-gray-400 ml-1'>(120+ avaliações)</Text>
      </View>

      <View className='flex-row items-center gap-2'>
        <View className='flex-row items-center gap-1'>
          <Ionicons name='time-outline' size={14} color="#6b7280" />
          <Text className='text-xs text-gray-600'>25-35 min</Text>
        </View>
        <View className='flex-row items-center gap-1'>
          <Ionicons name='bicycle-outline' size={14} color="#6b7280" />
          <Text className='text-xs text-gray-600'>R$ 3,50</Text>
        </View>
      </View>

     </View>
   </Pressable>
  );
}