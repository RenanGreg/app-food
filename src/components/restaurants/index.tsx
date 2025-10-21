import { useEffect, useState } from "react";
import { RestaurantsItem } from "./horizontal"; 
import {FlatList} from "react-native";

export interface RestaurantsProps {
  id: string;
  name: string;
  image: string;
}

// Dados mockados como padrão - Restaurantes mais conhecidos ⭐
const mockRestaurants: RestaurantsProps[] = [
  {
    id: '1',
    name: 'Bella Napoli',
    image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=400&h=400&fit=crop',
  },
  {
    id: '2',
    name: 'Burger Lab',
    image: 'https://images.unsplash.com/photo-1571091718767-18b5b1457add?w=400&h=400&fit=crop',
  },
  {
    id: '3',
    name: 'Tokyo Sushi Bar',
    image: 'https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?w=400&h=400&fit=crop',
  },
  {
    id: '4',
    name: 'Açaí do Grau',
    image: 'https://images.unsplash.com/photo-1488900128323-21503983a07e?w=400&h=400&fit=crop',
  },
  {
    id: '5',
    name: 'Green Bowls',
    image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&h=400&fit=crop',
  },
  {
    id: '6',
    name: 'Taco Loco',
    image: 'https://images.unsplash.com/photo-1565299585323-38d6b0865b47?w=400&h=400&fit=crop',
  },
  {
    id: '7',
    name: 'Ramen House',
    image: 'https://images.unsplash.com/photo-1557872943-16a5ac26437e?w=400&h=400&fit=crop',
  },
];

export function Restaurants() {
  // Inicializar com dados mockados para exibição imediata
  const [restaurants, setRestaurants] = useState<RestaurantsProps[]>(mockRestaurants);

  useEffect(() => {
    async function getFoods() {
      try {
        const response = await fetch("http://192.168.0.4:3000/restaurants");
        const data = await response.json()
        setRestaurants(data);
      } catch (error) {
        // Manter dados mockados em caso de erro
        console.log("Usando dados mockados para restaurants");
      }
    }

    getFoods();
  }, []);

  return ( 
    <FlatList 
      data={restaurants} 
      renderItem={({ item }) => <RestaurantsItem item={item} />}
      horizontal={true}
      contentContainerStyle={{ gap:14, paddingLeft: 16, paddingRight: 16 }} 
      showsHorizontalScrollIndicator={false} 
    />
  );
}  