import { Pressable, Text, View } from "react-native";


interface Props{
    name: string,
    size: "text-lg" | "text-xl" | "text-2xl",
    label: string,
    action: () => void
}


export function Section ({name, size, label, action}: Props) {
    return (
        <View className="w-full flex flex-row items-center justify-between px-4">
            <Text className={`${size} font-bold my-4 self-start text-gray-900`}>{name}</Text>

            <Pressable onPress={action} className="bg-gray-100 px-3 py-1.5 rounded-full">
                <Text className="text-sm font-semibold text-gray-700">{label}</Text>
            </Pressable>
        </View>
    )
}