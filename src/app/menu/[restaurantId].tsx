import { View, Text, Image, Pressable, ScrollView, FlatList } from 'react-native';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import Constants from 'expo-constants';
import { useState } from 'react';

const StatusBarHeight = Constants.statusBarHeight;

interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: string;
  image: string;
  category: string;
}

// Função para gerar cardápio baseado no restaurante
function getMenuItems(restaurantName: string): MenuItem[] {
  const name = restaurantName.toLowerCase();
  
  // Pizzaria - Bella Napoli
  if (name.includes('napoli') || name.includes('pizza')) {
    return [
      {
        id: '1',
        name: 'Pizza Margherita',
        description: 'Molho de tomate, mussarela, manjericão fresco e azeite',
        price: '45.90',
        image: 'https://images.unsplash.com/photo-1604068549290-dea0e4a305ca?w=400&h=300&fit=crop',
        category: 'Pizzas Tradicionais'
      },
      {
        id: '2',
        name: 'Pizza Calabresa',
        description: 'Molho de tomate, mussarela, calabresa fatiada e cebola',
        price: '48.90',
        image: 'https://images.unsplash.com/photo-1628840042765-356cda07504e?w=400&h=300&fit=crop',
        category: 'Pizzas Tradicionais'
      },
      {
        id: '3',
        name: 'Pizza Quattro Formaggi',
        description: 'Mussarela, gorgonzola, parmesão e provolone',
        price: '52.90',
        image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?w=400&h=300&fit=crop',
        category: 'Pizzas Especiais'
      },
      {
        id: '4',
        name: 'Calzone Tradicional',
        description: 'Recheado com presunto, mussarela e tomate',
        price: '38.90',
        image: 'https://images.unsplash.com/photo-1593504049359-74330189a345?w=400&h=300&fit=crop',
        category: 'Calzones'
      },
      {
        id: '5',
        name: 'Focaccia Alecrim',
        description: 'Pão italiano com alecrim, azeite e sal grosso',
        price: '22.90',
        image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?w=400&h=300&fit=crop',
        category: 'Entradas'
      }
    ];
  }
  
  // Hamburgueria - Burger Lab
  if (name.includes('burger') || name.includes('lab')) {
    return [
      {
        id: '1',
        name: 'Classic Burger',
        description: 'Blend de carne 180g, queijo cheddar, alface, tomate e molho especial',
        price: '32.90',
        image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=400&h=300&fit=crop',
        category: 'Burgers Clássicos'
      },
      {
        id: '2',
        name: 'Bacon Cheddar Burger',
        description: 'Blend 200g, bacon crocante, cheddar cremoso e cebola caramelizada',
        price: '38.90',
        image: 'https://images.unsplash.com/photo-1553979459-d2229ba7433b?w=400&h=300&fit=crop',
        category: 'Burgers Especiais'
      },
      {
        id: '3',
        name: 'BBQ Burger',
        description: 'Blend 180g, queijo gouda, onion rings e molho barbecue artesanal',
        price: '36.90',
        image: 'https://images.unsplash.com/photo-1572802419224-296b0aeee0d9?w=400&h=300&fit=crop',
        category: 'Burgers Especiais'
      },
      {
        id: '4',
        name: 'Batata Rústica',
        description: 'Batatas artesanais com casca, temperadas e crocantes',
        price: '18.90',
        image: 'https://images.unsplash.com/photo-1573080496219-bb080dd4f877?w=400&h=300&fit=crop',
        category: 'Acompanhamentos'
      },
      {
        id: '5',
        name: 'Milkshake Oreo',
        description: 'Sorvete de baunilha, biscoito Oreo e chantilly',
        price: '16.90',
        image: 'https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=400&h=300&fit=crop',
        category: 'Bebidas'
      }
    ];
  }
  
  // Sushi - Tokyo Sushi Bar
  if (name.includes('sushi') || name.includes('tokyo') || name.includes('japan')) {
    return [
      {
        id: '1',
        name: 'Combo Sushi 20 Peças',
        description: '10 sushis variados e 10 sashimis de salmão e atum',
        price: '85.90',
        image: 'https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?w=400&h=300&fit=crop',
        category: 'Combos'
      },
      {
        id: '2',
        name: 'Temaki Salmão',
        description: 'Salmão fresco, cream cheese, pepino e gergelim',
        price: '28.90',
        image: 'https://images.unsplash.com/photo-1617196034796-73dfa7b1fd56?w=400&h=300&fit=crop',
        category: 'Temakis'
      },
      {
        id: '3',
        name: 'Hot Roll Camarão',
        description: 'Camarão empanado, cream cheese e molho tarê',
        price: '38.90',
        image: 'https://images.unsplash.com/photo-1563612116625-3012372fccce?w=400&h=300&fit=crop',
        category: 'Hot Rolls'
      },
      {
        id: '4',
        name: 'Yakisoba Misto',
        description: 'Macarrão oriental, legumes e carne de frango',
        price: '42.90',
        image: 'https://images.unsplash.com/photo-1585032226651-759b368d7246?w=400&h=300&fit=crop',
        category: 'Pratos Quentes'
      },
      {
        id: '5',
        name: 'Guioza 6 Unidades',
        description: 'Pastelzinho japonês frito recheado com carne suína',
        price: '24.90',
        image: 'https://images.unsplash.com/photo-1496116218417-1a781b1c416c?w=400&h=300&fit=crop',
        category: 'Entradas'
      }
    ];
  }
  
  // Açaí - Açaí do Grau
  if (name.includes('açaí') || name.includes('acai')) {
    return [
      {
        id: '1',
        name: 'Açaí 500ml Tradicional',
        description: 'Açaí puro com granola, banana e mel',
        price: '18.90',
        image: 'https://images.unsplash.com/photo-1590301157890-4810ed352733?w=400&h=300&fit=crop',
        category: 'Açaí'
      },
      {
        id: '2',
        name: 'Açaí 700ml Premium',
        description: 'Açaí premium com frutas variadas, granola, leite em pó e complementos',
        price: '28.90',
        image: 'https://images.unsplash.com/photo-1488900128323-21503983a07e?w=400&h=300&fit=crop',
        category: 'Açaí'
      },
      {
        id: '3',
        name: 'Vitamina Morango',
        description: 'Morango, leite, açúcar e gelo',
        price: '12.90',
        image: 'https://images.unsplash.com/photo-1505252585461-04db1eb84625?w=400&h=300&fit=crop',
        category: 'Vitaminas'
      },
      {
        id: '4',
        name: 'Smoothie Frutas Vermelhas',
        description: 'Morango, framboesa, mirtilo e iogurte natural',
        price: '16.90',
        image: 'https://images.unsplash.com/photo-1505252585461-04db1eb84625?w=400&h=300&fit=crop',
        category: 'Smoothies'
      },
      {
        id: '5',
        name: 'Tigela Fit',
        description: 'Açaí, granola sem açúcar, frutas e pasta de amendoim',
        price: '22.90',
        image: 'https://images.unsplash.com/photo-1590301157890-4810ed352733?w=400&h=300&fit=crop',
        category: 'Especiais'
      }
    ];
  }
  
  // Comida Saudável - Green Bowls
  if (name.includes('green') || name.includes('bowl') || name.includes('salad')) {
    return [
      {
        id: '1',
        name: 'Buddha Bowl',
        description: 'Quinoa, grão de bico, abacate, tomate, rúcula e molho tahine',
        price: '28.90',
        image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&h=300&fit=crop',
        category: 'Bowls'
      },
      {
        id: '2',
        name: 'Salada Caesar Vegana',
        description: 'Alface romana, croutons, parmesão vegano e molho caesar',
        price: '24.90',
        image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400&h=300&fit=crop',
        category: 'Saladas'
      },
      {
        id: '3',
        name: 'Wrap de Falafel',
        description: 'Falafel crocante, homus, vegetais e molho tahine',
        price: '22.90',
        image: 'https://images.unsplash.com/photo-1626700051175-6818013e1d4f?w=400&h=300&fit=crop',
        category: 'Wraps'
      },
      {
        id: '4',
        name: 'Suco Detox Verde',
        description: 'Couve, limão, gengibre, maçã e hortelã',
        price: '14.90',
        image: 'https://images.unsplash.com/photo-1610970881699-44a5587cabec?w=400&h=300&fit=crop',
        category: 'Sucos'
      },
      {
        id: '5',
        name: 'Overnight Oats',
        description: 'Aveia, leite vegetal, frutas e chia',
        price: '18.90',
        image: 'https://images.unsplash.com/photo-1590301157890-4810ed352733?w=400&h=300&fit=crop',
        category: 'Café da Manhã'
      }
    ];
  }
  
  // Mexicano - Taco Loco
  if (name.includes('taco') || name.includes('mexican') || name.includes('loco')) {
    return [
      {
        id: '1',
        name: 'Tacos de Carne 3 Unidades',
        description: 'Carne temperada, queijo, alface, tomate e molho picante',
        price: '32.90',
        image: 'https://images.unsplash.com/photo-1565299585323-38d6b0865b47?w=400&h=300&fit=crop',
        category: 'Tacos'
      },
      {
        id: '2',
        name: 'Burrito Supreme',
        description: 'Frango, arroz, feijão, queijo, guacamole e creme azedo',
        price: '36.90',
        image: 'https://images.unsplash.com/photo-1626700051175-6818013e1d4f?w=400&h=300&fit=crop',
        category: 'Burritos'
      },
      {
        id: '3',
        name: 'Quesadilla de Frango',
        description: 'Tortilla recheada com frango, queijo e pimentões',
        price: '28.90',
        image: 'https://images.unsplash.com/photo-1618040996337-2d8a0630f417?w=400&h=300&fit=crop',
        category: 'Quesadillas'
      },
      {
        id: '4',
        name: 'Nachos Supreme',
        description: 'Nachos, queijo derretido, jalapeños, guacamole e creme azedo',
        price: '34.90',
        image: 'https://images.unsplash.com/photo-1513456852971-30c0b8199d4d?w=400&h=300&fit=crop',
        category: 'Entradas'
      },
      {
        id: '5',
        name: 'Guacamole com Chips',
        description: 'Guacamole caseiro com tortilla chips crocantes',
        price: '18.90',
        image: 'https://images.unsplash.com/photo-1534939561126-855b8675edd7?w=400&h=300&fit=crop',
        category: 'Entradas'
      }
    ];
  }
  
  // Ramen - Ramen House
  if (name.includes('ramen') || name.includes('noodle') || name.includes('house')) {
    return [
      {
        id: '1',
        name: 'Shoyu Ramen',
        description: 'Caldo de shoyu, macarrão artesanal, chashu, ovo marinado e nori',
        price: '42.90',
        image: 'https://images.unsplash.com/photo-1557872943-16a5ac26437e?w=400&h=300&fit=crop',
        category: 'Ramen'
      },
      {
        id: '2',
        name: 'Tonkotsu Ramen',
        description: 'Caldo cremoso de osso de porco, macarrão, chashu e moyashi',
        price: '48.90',
        image: 'https://images.unsplash.com/photo-1623341214825-9f4f963727da?w=400&h=300&fit=crop',
        category: 'Ramen'
      },
      {
        id: '3',
        name: 'Spicy Miso Ramen',
        description: 'Caldo de miso picante, macarrão, carne moída e vegetais',
        price: '45.90',
        image: 'https://images.unsplash.com/photo-1617093727343-374698b1b08d?w=400&h=300&fit=crop',
        category: 'Ramen'
      },
      {
        id: '4',
        name: 'Yakisoba Especial',
        description: 'Macarrão frito com vegetais e carne de porco',
        price: '38.90',
        image: 'https://images.unsplash.com/photo-1585032226651-759b368d7246?w=400&h=300&fit=crop',
        category: 'Noodles'
      },
      {
        id: '5',
        name: 'Gyoza 8 Unidades',
        description: 'Dumplings grelhados recheados com porco e vegetais',
        price: '26.90',
        image: 'https://images.unsplash.com/photo-1496116218417-1a781b1c416c?w=400&h=300&fit=crop',
        category: 'Entradas'
      }
    ];
  }
  
  // Padrão
  return [
    {
      id: '1',
      name: 'Prato Executivo',
      description: 'Arroz, feijão, carne, salada e acompanhamento',
      price: '28.90',
      image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&h=300&fit=crop',
      category: 'Pratos Executivos'
    }
  ];
}

export default function MenuScreen() {
  const { restaurantId, name, image } = useLocalSearchParams();
  const router = useRouter();
  const menuItems = getMenuItems(name as string);
  
  // Agrupar itens por categoria
  const categories = Array.from(new Set(menuItems.map(item => item.category)));

  const handleItemPress = (item: MenuItem) => {
    router.push({
      pathname: '/product/[id]',
      params: {
        id: item.id,
        name: item.name,
        price: item.price,
        image: item.image,
        rating: '4.5',
        time: '25-35 min',
        delivery: '3.50',
        type: 'food'
      }
    });
  };

  return (
    <View className="flex-1 bg-gray-50">
      {/* Header */}
      <View 
        className="bg-white border-b border-gray-200"
        style={{ paddingTop: StatusBarHeight }}
      >
        <View className="px-4 py-4 flex-row items-center">
          <Pressable
            onPress={() => router.back()}
            className="w-10 h-10 rounded-full items-center justify-center bg-gray-100 mr-3"
          >
            <Ionicons name="arrow-back" size={24} color="#000" />
          </Pressable>
          <View className="flex-1">
            <Text className="text-xl font-bold text-gray-900">{name}</Text>
            <Text className="text-sm text-gray-500">Cardápio Completo</Text>
          </View>
        </View>
      </View>

      {/* Banner do Restaurante */}
      <View className="bg-white mb-2">
        <Image
          source={{ uri: image as string }}
          className="w-full h-40"
          resizeMode="cover"
        />
      </View>

      {/* Lista de Itens do Menu */}
      <ScrollView className="flex-1" showsVerticalScrollIndicator={false}>
        {categories.map((category, categoryIndex) => (
          <View key={categoryIndex} className="mb-6">
            <View className="px-4 py-3 bg-white border-b border-gray-200">
              <Text className="text-lg font-bold text-gray-900">{category}</Text>
            </View>
            
            {menuItems
              .filter(item => item.category === category)
              .map((item) => (
                <Pressable
                  key={item.id}
                  onPress={() => handleItemPress(item)}
                  className="bg-white border-b border-gray-100 px-4 py-4 flex-row active:bg-gray-50"
                >
                  <Image
                    source={{ uri: item.image }}
                    className="w-24 h-24 rounded-xl"
                    resizeMode="cover"
                  />
                  <View className="flex-1 ml-4 justify-between">
                    <View>
                      <Text className="text-base font-bold text-gray-900 mb-1">
                        {item.name}
                      </Text>
                      <Text className="text-sm text-gray-600 leading-5" numberOfLines={2}>
                        {item.description}
                      </Text>
                    </View>
                    <View className="flex-row items-center justify-between mt-2">
                      <Text className="text-lg font-bold text-emerald-600">
                        R$ {item.price}
                      </Text>
                      <View className="bg-emerald-600 rounded-full px-3 py-1">
                        <Ionicons name="add" size={20} color="#fff" />
                      </View>
                    </View>
                  </View>
                </Pressable>
              ))}
          </View>
        ))}
        
        <View className="h-8" />
      </ScrollView>
    </View>
  );
}
