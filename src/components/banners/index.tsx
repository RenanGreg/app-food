import { Image, Pressable, View } from "react-native";
import PagerView from "react-native-pager-view";
import { useRef, useEffect } from "react";

export default function Banner() {
  const pagerRef = useRef<PagerView>(null);
  const currentPage = useRef(0);
  const totalPages = 5; // Total de banners atualizado

  useEffect(() => {
    // Auto-scroll a cada 3 segundos
    const interval = setInterval(() => {
      if (pagerRef.current) {
        currentPage.current = (currentPage.current + 1) % totalPages;
        pagerRef.current.setPage(currentPage.current);
      }
    }, 3000); // Muda a cada 3 segundos

    return () => clearInterval(interval);
  }, []);

  return (
    <View className="w-full h-36 rounded-2xl mt-5 mb-4 md:h-60">
      <PagerView
        ref={pagerRef}
        style={{ flex: 1 }}
        initialPage={0}
        pageMargin={14}
        onPageSelected={(e) => {
          currentPage.current = e.nativeEvent.position;
        }}
      >
        <Pressable
          className="w-full h-36 md:h-60 rounded-2xl overflow-hidden bg-gray-100"
          key="1"
          onPress={() => console.log("CLICOU NO BANNER 1 - Pizza Especial")}
        >
          <Image
            source={require("../../img/img/banner1.png")}
            className="w-full h-full"
            style={{ transform: [{ scale: 1.05 }] }}
            resizeMode="cover"
          />
        </Pressable>
        
        <Pressable
          className="w-full h-36 md:h-60 rounded-2xl overflow-hidden bg-gray-100"
          key="2"
          onPress={() => console.log("CLICOU NO BANNER 2 - Burger Promo")}
        >
          <Image
            source={require("../../img/img/banner2.png")}
            className="w-full h-full"
            style={{ transform: [{ scale: 1.05 }] }}
            resizeMode="cover"
          />
        </Pressable>

        <Pressable
          className="w-full h-36 md:h-60 rounded-2xl overflow-hidden bg-gray-100"
          key="3"
          onPress={() => console.log("CLICOU NO BANNER 3 - Pasta Italiana")}
        >
          <Image
            source={{ uri: 'https://img.freepik.com/vetores-gratis/modelo-de-webinar-social-de-comida-plana_23-2149175491.jpg' }}
            className="w-full h-full"
            style={{ transform: [{ scale: 1.05 }] }}
            resizeMode="cover"
          />
        </Pressable>

        <Pressable
          className="w-full h-36 md:h-60 rounded-2xl overflow-hidden bg-gray-100"
          key="4"
          onPress={() => console.log("CLICOU NO BANNER 4 - Açaí Gourmet")}
        >
          <Image
            source={{ uri: 'https://img.freepik.com/psd-gratuitas/menu-de-comida-e-modelo-de-capa-de-midia-social-de-restaurante_202595-368.jpg?semt=ais_hybrid&w=740&q=80' }}
            className="w-full h-full"
            style={{ transform: [{ scale: 1.15 }] }}
            resizeMode="cover"
          />
        </Pressable>

        <Pressable
          className="w-full h-36 md:h-60 rounded-2xl overflow-hidden bg-gray-100"
          key="5"
          onPress={() => console.log("CLICOU NO BANNER 5 - Sushi Premium")}
        >
          <Image
            source={{ uri: 'https://img.freepik.com/psd-gratuitas/modelo-de-capa-de-facebook-delicioso-menu-de-hamburguer-e-comida_106176-2198.jpg?semt=ais_hybrid&w=740&q=80' }}
            className="w-full h-full"
            style={{ transform: [{ scale: 1.15 }] }}
            resizeMode="cover"
          />
        </Pressable>
      </PagerView>
    </View>
  );
}
