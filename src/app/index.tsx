import { View, ScrollView, Text } from "react-native"; 
import { Header } from "react-native/Libraries/NewAppScreen";

import Constants from "expo-constants"; 
import { Banner } from "../components/banner"; 
import { Header } from "../components/header";
import React from "react";

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

                <Banner>
            </View>
        </ScrollView>
    );
}





