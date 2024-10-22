import { ScrollView, Text, View } from "react-native";
import Header from "../components/header";
import Constants from "expo-constants";
import Banner from "../components/banners"; 
import { Search } from "../components/search";
import { Section } from "../components/section";
import { TrendingFoods } from "../components/trending";
import { Restaurants } from "../components/restaurants";
import { RestaurantsVerticalList } from "../components/RestaurantsLIST/item";

const StatusBarHeight = Constants.statusBarHeight;

export default function Index() {
  return (
    <ScrollView
      style={{ flex: 1 }}
      className="bg-slate-200"
      showsVerticalScrollIndicator={false}
    >
      <View
        className="w-full px-4"
        style={{
          marginTop: StatusBarHeight + 8,
        }}
      >
        <Header />
        <Banner />
        <Search />
      </View>
      <Section
        name="Em alta"
        label="Veja mais"
        action={() => console.log("VEJA MAIS")}
        size="text-2xl"
      />
      <TrendingFoods />
      <Section
        name="Os mais conhecidos"
        label="Veja todos"
        action={() => console.log("VEJA TODOS")}
        size="text-xl"
      />
      <Restaurants />
      <Section
        name="Restaurantes"
        label="Veja todos"
        action={() => console.log("RESTAURANTES")}
        size="text-xl"
      />
      <RestaurantsVerticalList />
    </ScrollView>
  );
}
