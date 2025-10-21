import { View, Text, Image, Pressable, ScrollView, TextInput, KeyboardAvoidingView, Platform, Keyboard } from 'react-native';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import Constants from 'expo-constants';
import { useState, useRef, useEffect } from 'react';

const StatusBarHeight = Constants.statusBarHeight;

// Função para retornar especialidades baseadas no nome do restaurante
function getSpecialties(restaurantName: string): string[] {
  const name = restaurantName.toLowerCase();
  
  // Pizzaria
  if (name.includes('napoli') || name.includes('pizza')) {
    return [
      '🍕 Pizzas Artesanais',
      '🧀 Calzones Recheados',
      '🥖 Focaccias e Antepastos'
    ];
  }
  
  // Hamburgueria
  if (name.includes('burger') || name.includes('lab')) {
    return [
      '🍔 Hambúrgueres Artesanais',
      '🍟 Batatas Especiais',
      '🥤 Milkshakes Caseiros'
    ];
  }
  
  // Sushi / Japonês
  if (name.includes('sushi') || name.includes('tokyo') || name.includes('japan')) {
    return [
      '🍱 Sushis e Sashimis',
      '🍜 Temakis Especiais',
      '🥟 Yakisoba e Guiozas'
    ];
  }
  
  // Açaí
  if (name.includes('açaí') || name.includes('acai')) {
    return [
      '🍇 Açaí Premium',
      '🍓 Vitaminas e Smoothies',
      '🥥 Tigelas Especiais'
    ];
  }
  
  // Comida Saudável / Bowls
  if (name.includes('green') || name.includes('bowl') || name.includes('salad')) {
    return [
      '🥗 Saladas e Bowls',
      '🥑 Wraps Veganos',
      '🍠 Sucos Naturais'
    ];
  }
  
  // Mexicano
  if (name.includes('taco') || name.includes('mexican') || name.includes('loco')) {
    return [
      '🌮 Tacos Artesanais',
      '🌯 Burritos e Quesadillas',
      '🥑 Guacamole Caseiro'
    ];
  }
  
  // Ramen / Asiático
  if (name.includes('ramen') || name.includes('noodle') || name.includes('house')) {
    return [
      '🍜 Ramen Tradicional',
      '🥢 Noodles Especiais',
      '🍲 Sopas Asiáticas'
    ];
  }
  
  // Churrascaria
  if (name.includes('churrasco') || name.includes('grill') || name.includes('boi') || name.includes('carne')) {
    return [
      '🥩 Carnes Nobres',
      '🍖 Espetos Premium',
      '🥔 Acompanhamentos Gourmet'
    ];
  }
  
  // Cafeteria
  if (name.includes('café') || name.includes('coffee') || name.includes('cafeteria')) {
    return [
      '☕ Cafés Especiais',
      '🥐 Pães e Doces',
      '🧁 Bolos Artesanais'
    ];
  }
  
  // Padrão (para restaurantes genéricos)
  return [
    '🍽️ Pratos Executivos',
    '🍲 Refeições Completas',
    '🥘 Culinária Variada'
  ];
}

export default function ProductDetails() {
  const { id, name, price, image, rating, time, delivery, type } = useLocalSearchParams();
  const router = useRouter();
  const [observations, setObservations] = useState('');
  const scrollViewRef = useRef<ScrollView>(null);
  const textInputRef = useRef<TextInput>(null);
  const [keyboardHeight, setKeyboardHeight] = useState(0);

  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener(
      'keyboardDidShow',
      (e) => {
        setKeyboardHeight(e.endCoordinates.height);
      }
    );
    const keyboardDidHideListener = Keyboard.addListener(
      'keyboardDidHide',
      () => {
        setKeyboardHeight(0);
      }
    );

    return () => {
      keyboardDidShowListener.remove();
      keyboardDidHideListener.remove();
    };
  }, []);

  return (
    <KeyboardAvoidingView 
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      className="flex-1"
      style={{ flex: 1 }}
    >
      <ScrollView 
        ref={scrollViewRef}
        className="flex-1 bg-gray-50"
        keyboardShouldPersistTaps="handled"
        contentContainerStyle={{ paddingBottom: Platform.OS === 'ios' ? 40 : keyboardHeight + 40 }}
        showsVerticalScrollIndicator={false}
      >
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

            <Text className="text-lg font-bold text-gray-900 mb-3">O que vem no pedido</Text>
            <View className="bg-gray-50 rounded-xl p-4 mb-6">
              <View className="flex-row items-center mb-3">
                <Ionicons name="checkmark-circle" size={20} color="#10b981" />
                <Text className="text-gray-700 ml-2 flex-1">Produto completo e bem embalado</Text>
              </View>
              <View className="flex-row items-center mb-3">
                <Ionicons name="checkmark-circle" size={20} color="#10b981" />
                <Text className="text-gray-700 ml-2 flex-1">Talheres e guardanapos</Text>
              </View>
              <View className="flex-row items-center">
                <Ionicons name="checkmark-circle" size={20} color="#10b981" />
                <Text className="text-gray-700 ml-2 flex-1">Molhos e acompanhamentos</Text>
              </View>
            </View>

            <Text className="text-lg font-bold text-gray-900 mb-3">Observações</Text>
            <View 
              className="bg-gray-50 rounded-xl p-4 mb-4"
              onLayout={(event) => {
                const layout = event.nativeEvent.layout;
                textInputRef.current?.measure((x, y, width, height, pageX, pageY) => {
                  // Armazena a posição do campo
                });
              }}
            >
              <TextInput
                ref={textInputRef}
                className="text-gray-700 min-h-[100px] text-base"
                placeholder="Ex: sem cebola, ponto da carne mal passado, molho à parte..."
                placeholderTextColor="#9ca3af"
                multiline
                numberOfLines={4}
                textAlignVertical="top"
                value={observations}
                onChangeText={setObservations}
                maxLength={200}
                onFocus={(event) => {
                  setTimeout(() => {
                    textInputRef.current?.measure((x, y, width, height, pageX, pageY) => {
                      scrollViewRef.current?.scrollTo({
                        y: pageY - 100,
                        animated: true
                      });
                    });
                  }, 300);
                }}
              />
              <Text className="text-gray-400 text-xs mt-2 text-right">
                {observations.length}/200 caracteres
              </Text>
            </View>

            <Pressable className="bg-emerald-600 rounded-xl py-4 items-center shadow-md mb-8">
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
              {getSpecialties(name as string).map((specialty, index) => (
                <Text 
                  key={index} 
                  className={`text-gray-700 ${index < getSpecialties(name as string).length - 1 ? 'mb-2' : ''}`}
                >
                  {specialty}
                </Text>
              ))}
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

            <Pressable 
              className="bg-emerald-600 rounded-xl py-4 items-center shadow-md mb-4"
              onPress={() => {
                router.push({
                  pathname: '/menu/[restaurantId]',
                  params: {
                    restaurantId: id as string,
                    name: name as string,
                    image: image as string
                  }
                });
              }}
            >
              <Text className="text-white font-bold text-lg">Ver Cardápio</Text>
            </Pressable>
          </>
        )}
      </View>
    </ScrollView>
    </KeyboardAvoidingView>
  );
}
