import { View, Pressable, Text } from "react-native"; 
import { Ionicons, Feather } from "@expo/vector-icons"; 
import React from "react";

export function Header() {
    return (
    <View className="bg-red-50 w-full flex items-center justfy-between"> 
        <Pressable className="w-10 h-10 bg-white rounder-full justfy-center"> 
            <Ionicons name="menu" size={20} color={#121212}/>
        </Pressable> 

        <View className="flex flex -col items-center justfy-center">

       
             <Text className="text-center text-sm">Localização</Text> 
             
        <View className="flex-row items-center justify-center gap-1">
            <Feather name="map-pin" size={14} color={#FF000}/> 

            <Text className="text-lg font-bold">CAMPO GRANDE</Text> 

        </View>
        </View>



        <Pressable className="w-10 h-10 bg-white rounder-full justfy-center">
            <Feather name="bell" size={20} color={"#121212"}> 

        </Pressable>
    </View>
    );
}