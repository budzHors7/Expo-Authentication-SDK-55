import { Pressable, Text, View } from 'react-native'
import { useSession } from '@/context/Authentication'
import { Ionicons } from '@expo/vector-icons'
import { StatusBar } from "expo-status-bar"

export default function Profile() {

  const { signOut } = useSession()

  return (
    <View className='flex-1 relative items-center justify-center'>
      <StatusBar style="auto" />

      <Text className="text-gray-700 dark:text-gray-300 text-2xl font-semibold">
        <Text className="text-[#2e78b7]">Click</Text> the button to logout.
      </Text>

      <Pressable className="absolute bottom-32 right-8 bg-[#2e78b7] p-4 rounded-full" onPress={() => signOut()}>
        <Ionicons name="log-out-outline" size={30} color="white" />
      </Pressable>
    </View>
  );
}
