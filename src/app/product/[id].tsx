import { View, Text, Image, Pressable, ScrollView } from 'react-native';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import Constants from 'expo-constants';

const StatusBarHeight = Constants.statusBarHeight;

export default function ProductDetails() {
  const { id, name, price, image, rating, time, delivery, type } = useLocalSearchParams();
  const router = useRouter();

  return (
    <ScrollView className="flex-1 bg-gray-50">
      {/* Header com botão voltar */}
      <View 
        className="relative"
        style={{ marginTop: StatusBarHeight }}
      >
        <Image
          source={{ uri: image as string }}
          className="w-full h-72"
          resizeMode="cover"
        />
        
        <Pressable
          onPress={() => router.back()}
          className="absolute top-4 left-4 w-10 h-10 bg-white rounded-full items-center justify-center shadow-lg"
        >
          <Ionicons name="arrow-back" size={24} color="#000" />
        </Pressable>

        {type === 'food' && (
          <View className="absolute top-4 right-4 flex-row bg-neutral-900/95 gap-1 rounded-full px-3 py-1.5 items-center">
            <Ionicons name="star" size={16} color="#fbbf24" />
            <Text className="text-white text-sm font-semibold">{rating}</Text>
          </View>
        )}
      </View>

      {/* Conteúdo */}
      <View className="px-4 py-6 bg-white rounded-t-3xl -mt-6">
        <Text className="text-3xl font-bold text-gray-900 mb-2">{name}</Text>
        
        {type === 'food' ? (
          <>
            <Text className="text-3xl font-bold text-emerald-600 mb-4">
              R$ {price}
            </Text>

            <View className="flex-row items-center gap-4 mb-6">
              <View className="flex-row items-center gap-1">
                <Ionicons name="time-outline" size={20} color="#6b7280" />
                <Text className="text-gray-600">{time}</Text>
              </View>
              <View className="flex-row items-center gap-1">
                <Ionicons name="bicycle-outline" size={20} color="#6b7280" />
                <Text className="text-gray-600">R$ {delivery}</Text>
              </View>
            </View>

            <Text className="text-lg font-bold text-gray-900 mb-3">Descrição</Text>
            <Text className="text-gray-600 leading-6 mb-6">
              Delicioso {name} preparado com ingredientes frescos e de alta qualidade. 
              Perfeito para matar aquela fome! Entrega rápida e segura direto na sua casa.
            </Text>

            <Text className="text-lg font-bold text-gray-900 mb-3">Informações Nutricionais</Text>
            <View className="bg-gray-50 rounded-xl p-4 mb-6">
              <View className="flex-row justify-between mb-2">
                <Text className="text-gray-600">Calorias</Text>
                <Text className="font-semibold">450 kcal</Text>
              </View>
              <View className="flex-row justify-between mb-2">
                <Text className="text-gray-600">Proteínas</Text>
                <Text className="font-semibold">25g</Text>
              </View>
              <View className="flex-row justify-between">
                <Text className="text-gray-600">Carboidratos</Text>
                <Text className="font-semibold">45g</Text>
              </View>
            </View>

            <Pressable className="bg-emerald-600 rounded-xl py-4 items-center shadow-md">
              <Text className="text-white font-bold text-lg">Adicionar ao Carrinho</Text>
            </Pressable>
          </>
        ) : (
          <>
            <View className="flex-row items-center gap-2 mb-6">
              <Ionicons name="star" size={20} color="#fbbf24" />
              <Text className="text-lg font-semibold text-gray-700">4.5</Text>
              <Text className="text-gray-500">(120+ avaliações)</Text>
            </View>

            <View className="flex-row items-center gap-4 mb-6">
              <View className="flex-row items-center gap-1">
                <Ionicons name="time-outline" size={20} color="#6b7280" />
                <Text className="text-gray-600">25-35 min</Text>
              </View>
              <View className="flex-row items-center gap-1">
                <Ionicons name="bicycle-outline" size={20} color="#6b7280" />
                <Text className="text-gray-600">R$ 3,50</Text>
              </View>
            </View>

            <Text className="text-lg font-bold text-gray-900 mb-3">Sobre o Restaurante</Text>
            <Text className="text-gray-600 leading-6 mb-6">
              {name} é conhecido pela excelência em sabor e qualidade. 
              Oferecemos uma experiência gastronômica única com ingredientes selecionados 
              e um ambiente acolhedor. Venha nos visitar!
            </Text>

            <Text className="text-lg font-bold text-gray-900 mb-3">Especialidades</Text>
            <View className="bg-gray-50 rounded-xl p-4 mb-6">
              <Text className="text-gray-700 mb-2">🍕 Pizzas Artesanais</Text>
              <Text className="text-gray-700 mb-2">🍔 Hambúrgueres Gourmet</Text>
              <Text className="text-gray-700">🍝 Massas Italianas</Text>
            </View>

            <Text className="text-lg font-bold text-gray-900 mb-3">Horário de Funcionamento</Text>
            <View className="bg-gray-50 rounded-xl p-4 mb-6">
              <View className="flex-row justify-between mb-2">
                <Text className="text-gray-600">Segunda - Sexta</Text>
                <Text className="font-semibold">11:00 - 23:00</Text>
              </View>
              <View className="flex-row justify-between mb-2">
                <Text className="text-gray-600">Sábado - Domingo</Text>
                <Text className="font-semibold">12:00 - 00:00</Text>
              </View>
            </View>

            <Pressable className="bg-emerald-600 rounded-xl py-4 items-center shadow-md mb-4">
              <Text className="text-white font-bold text-lg">Ver Cardápio</Text>
            </Pressable>
          </>
        )}
      </View>
    </ScrollView>
  );
}
