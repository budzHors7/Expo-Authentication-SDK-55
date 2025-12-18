import { Redirect, Stack } from "expo-router"
import { useSession } from "@/context/Authentication";
import AuthCheck from "@/components/AuthCheck";

export default function RootLayout() {
    const { session, isLoading } = useSession()

    if (isLoading) {
        return <AuthCheck />
    }

    if (session) {
        return <Redirect href="/(tabs)/home" />;
    }
    return (
        <Stack>
            <Stack.Screen name="index" options={{headerShown: false}} />
        </Stack>
    )
}