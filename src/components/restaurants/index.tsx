import { useEffect, useState } from "react";
import { FlatList, Text, View } from "react-native";
import { RestaurantsItem } from "./horizontal";

export interface RestProps {
  id: string;
  name: string;
  image: string;
}

export function Restaurants() {
  const [restaurants, setRestaurants] = useState<RestProps[]>([]);

  useEffect(() => {
    async function getFoods() {
      const response = await fetch("http://192.168.0.4:3000/restaurants");
      const data = await response.json();
      setRestaurants(data);
    }

    getFoods();
  }, []);

  return (
    <FlatList
      data={restaurants}
      renderItem={({ item }) => <RestaurantsItem item={item} />}
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
