import { Slot } from "expo-router"; 
import React from "react"; 
import '../styles/global.css' 

export default function RootLayout() {
    return(
        <Stack>
            <Stack.Screen name="Index" />
        </Stack>
    );
}