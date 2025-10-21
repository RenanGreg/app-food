import { useEffect, useState } from "react";
import { FlatList } from "react-native";
import { CardHorizontalFood } from "./food";

export interface FoodProps {
  id: string;
  name: string;
  price: number;
  time: string;
  delivery: number;
  rating: number;
  image: string;
  restaurantId: string;
}

// Dados mockados como padrão - Comidas em alta 🔥
const mockFoods: FoodProps[] = [
  {
    id: '1',
    name: 'Pizza Margherita Especial',
    price: 45.90,
    time: '25-35 min',
    delivery: 5.00,
    rating: 4.9,
    image: 'https://images.unsplash.com/photo-1604068549290-dea0e4a305ca?w=400&h=300&fit=crop',
    restaurantId: '1',
  },
  {
    id: '2',
    name: 'Smash Burger Duplo',
    price: 39.90,
    time: '20-30 min',
    delivery: 3.50,
    rating: 4.8,
    image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=400&h=300&fit=crop',
    restaurantId: '2',
  },
  {
    id: '3',
    name: 'Combo Sushi Premium',
    price: 75.00,
    time: '35-45 min',
    delivery: 7.00,
    rating: 4.9,
    image: 'https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?w=400&h=300&fit=crop',
    restaurantId: '3',
  },
  {
    id: '4',
    name: 'Açaí Gourmet 500ml',
    price: 24.90,
    time: '15-20 min',
    delivery: 2.00,
    rating: 4.7, 
    image : 'https://thumb-cdn.soluall.net/prod/shp_products/sp1280fw/6411c1b4-1210-4113-94f0-239cac1e09ff/6411c1b4-5dd0-4f4f-bc32-239cac1e09ff.png',
    restaurantId: '4',
  },
  {
    id: '5',
    name: 'Poke Bowl Salmão',
    price: 42.00,
    time: '25-35 min',
    delivery: 4.50,
    rating: 4.8,
    image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&h=300&fit=crop',
    restaurantId: '5',
  },
  {
    id: '6',
    name: 'Tacos Mexicanos (3un)',
    price: 32.90,
    time: '20-30 min',
    delivery: 3.00,
    rating: 4.7,
    image: 'https://images.unsplash.com/photo-1565299585323-38d6b0865b47?w=400&h=300&fit=crop',
    restaurantId: '6',
  },
  {
    id: '7',
    name: 'Ramen Tonkotsu',
    price: 38.00,
    time: '30-40 min',
    delivery: 5.50,
    rating: 4.9,
    image: 'https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=400&h=300&fit=crop',
    restaurantId: '7',
  },
  {
    id: '9',
    name: 'Pasta Carbonara',
    price: 44.90,
    time: '25-35 min',
    delivery: 4.00,
    rating: 4.8,
    image: 'https://images.unsplash.com/photo-1612874742237-6526221588e3?w=400&h=300&fit=crop',
    restaurantId: '9',
  },
  {
    id: '10',
    name: 'Wrap Frango Grelhado',
    price: 26.90,
    time: '15-20 min',
    delivery: 2.50,
    rating: 4.5,
    image: 'https://images.unsplash.com/photo-1626700051175-6818013e1d4f?w=400&h=300&fit=crop',
    restaurantId: '10',
  },
];

export function TrendingFoods() {
  // Inicializar com dados mockados para exibição imediata
  const [foods, setFoods] = useState<FoodProps[]>(mockFoods);

  useEffect(() => {
    async function getFoods() {
      try {
        const response = await fetch("http://192.168.0.4:3000/foods");
        const data = await response.json();
        setFoods(data);
      } catch (error) {
        // Manter dados mockados em caso de erro
        console.log("Usando dados mockados para trending foods");
      }
    }

    getFoods();
  }, []);

  return (
    <FlatList
      data={foods}
      renderItem={({ item }) => <CardHorizontalFood food={item} />}
      horizontal={true}
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{
        gap: 14,
        paddingLeft: 16,
        paddingRight: 16,
      }}
    />
  );
}
