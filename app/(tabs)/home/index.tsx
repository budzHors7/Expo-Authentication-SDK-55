import { Pressable, Text, View } from 'react-native'
import { StatusBar } from "expo-status-bar"
import { openBrowserAsync } from 'expo-web-browser';

export default function Home() {

  const _handlePressButtonAsync = async () => {
    await openBrowserAsync('https://github.com/budzHors7/');
  };

  return (
    <View className="flex-1 h-full justify-center items-center p-5 gap-y-5">
      <StatusBar style="auto" />

      <Text className="text-4xl font-extrabold text-[#34a0ff]">Hello World</Text>

      <View className="h-[1] w-full bg-gray-300 dark:bg-gray-700" />

      <View className="gap-y-10 justify-center items-center">
        <Text className="text-lg text-center text-gray-600 dark:text-gray-400">
          This is an <Text className="font-extrabold text-[#2e78b7]">Expo </Text> 
          Template using <Text className="font-semibold text-[#2e78b7]">Context Provider </Text> 
          with <Text className="font-semibold text-[#2e78b7]">expo-secure-store</Text> to persist user session on the device.
        </Text>

        <Pressable onPress={_handlePressButtonAsync}>
          <Text className="text-gray-800 dark:text-gray-200 text-sm">
            Created by <Text className="font-extrabold text-[#2e78b7]">Anda Hanise</Text>
          </Text>
        </Pressable>
      </View>
    </View>
  )
}
