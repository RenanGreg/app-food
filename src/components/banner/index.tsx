import React from "react";
import { Pressable, View, Image, Text } from "react-native"; 
import PagerView from "react-native-pager-view";

export function Banner () {
    return(
        <View className="w-full h-36 rounded-2x1 mt-5 mb-4"> 
         <PagerView style={{flex:1}} initialPage={0} pageMargin={14}> 


            <Pressable className="w-full h-36 rounded-2x1" 
            key="1"
            onPress={() => console.log("CLICOU NO BANNER 1")}
            >
            
            <Image
            source={require("../../assets/")} 
            className="w-full h-36 rounded-2-1" 
            />

         

            </Pressable> 



            <Pressable className="w-full h-36 rounded-2x1" 
            key="1"
            onPress={() => console.log("CLICOU NO BANNER 1")}
            >
            
            <Image
            source={require("../../assets/")} 
            className="w-full h-36 rounded-2-1" 
            />

         

            </Pressable>

        </PagerView>
        </View>
    );
}