import { Feather } from "@expo/vector-icons";
import { View, TextInput } from "react-native"; 

import { Banner } from "../banner"; 
import { Header } from "../header"; 
import React from "react";


export function Input () {
    return(
        <View className="w-full flex-row border border-slate-500 h-14 rounded-full items-center gap-2 px-4"> 
            <Feather name="input"> 

                <TextInput
                placeholder="Procure sua comida.."
                className="w-full h-full flex-1 bg-transparent">  
                
        </View>
    );
}