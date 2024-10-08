/// <reference types="nativewind/types" /> 






import { View, ScrollView, Text } from "react-native"; 
import { Header } from "react-native/Libraries/NewAppScreen";

import Constants from "expo-constants"; 

const statusbarHeight = Constants.statusBarHeight;

export default function Index() {
    return(
        <ScrollView
        style={{ flex; 1}} 
        className="bg-slate-200" 
        showsVerticalScrollIndicator={false} 
        >
            <View className="w-full" style={{ marginTop: statusbarHeight + 8 }}>
                <Header/> 
            </View>
        </ScrollView>
    )
} 







import { View, ScrollView, Text } from "react-native"; 
import { Header } from "react-native/Libraries/NewAppScreen";

import Constants from "expo-constants"; 

const statusbarHeight = Constants.statusBarHeight;

export default function Index() {
    return(
        <ScrollView
        style={{ flex; 1}} 
        className="bg-slate-200" 
        showsVerticalScrollIndicator={false} 
        >
            <View className="w-full" style={{ marginTop: statusbarHeight + 8 }}>
                <Header/> 
            </View>
        </ScrollView>
    )
}