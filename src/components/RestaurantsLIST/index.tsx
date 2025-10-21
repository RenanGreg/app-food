import { useState, useEffect } from 'react';
import { View, FlatList } from 'react-native';
import { RestaurantItem } from './item';

export interface RestaurantsProps {
  id: string;
  name: string;
  image: string;
}

export function RestaurantsVerticalList() {
  const [restaurants, setRestaurants] = useState<RestaurantsProps[]>([]);

  useEffect(() => {
    async function getRestaurants() {
      // Dados de exemplo - Lista completa de restaurantes 🍽️
      const data: RestaurantsProps[] = [
        {
          id: '100',
          name: 'Bella Napoli Pizzaria',
          image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=400&h=400&fit=crop',
        },
        {
          id: '101',
          name: 'Burger Lab Gourmet',
          image: 'https://images.unsplash.com/photo-1571091718767-18b5b1457add?w=400&h=400&fit=crop',
        },
        {
          id: '102',
          name: 'Tokyo Sushi Bar',
          image: 'https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?w=400&h=400&fit=crop',
        },
        {
          id: '103',
          name: 'Churrascaria Boi na Brasa',
          image: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=400&h=400&fit=crop',
        },
        {
          id: '104',
          name: 'Açaí do Grau Premium',
          image: 'https://images.unsplash.com/photo-1488900128323-21503983a07e?w=400&h=400&fit=crop',
        },
        {
          id: '105',
          name: 'Green Bowls Healthy',
          image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&h=400&fit=crop',
        },
        {
          id: '106',
          name: 'Taco Loco Mexicano',
          image: 'https://images.unsplash.com/photo-1565299585323-38d6b0865b47?w=400&h=400&fit=crop',
        },
        {
          id: '107',
          name: 'Ramen House Authentic',
          image: 'https://images.unsplash.com/photo-1557872943-16a5ac26437e?w=400&h=400&fit=crop',
        },
        {
          id: '108',
          name: 'Pasta & Vino Italiano',
          image: 'https://images.unsplash.com/photo-1563379926898-05f4575a45d8?w=400&h=400&fit=crop',
        },
        {
          id: '109',
          name: 'Frango Frito da Casa',
          image: 'https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?w=400&h=400&fit=crop',
        },
        {
          id: '110',
          name: 'Doce Sabor Sobremesas',
          image: 'https://images.unsplash.com/photo-1488477181946-6428a0291777?w=400&h=400&fit=crop',
        },
        {
          id: '111',
          name: 'Coffee & Brunch',
          image: 'https://images.unsplash.com/photo-1559925393-8be0ec4767c8?w=400&h=400&fit=crop',
        },
        {
          id: '112',
          name: 'Veggie Delights',
          image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400&h=400&fit=crop',
        },
        {
          id: '113',
          name: 'BBQ Master Smokehouse',
          image: 'https://images.unsplash.com/photo-1529193591184-b1d58069ecdd?w=400&h=400&fit=crop',
        },
      ];
      setRestaurants(data);
    }

    getRestaurants();
  }, []);

  return (
    <View className='px-4 flex-1 w-full mb-8'>
      {restaurants.map((item) => (
        <RestaurantItem key={item.id} item={item} />
      ))}
    </View>
  );
}
