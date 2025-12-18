import { Redirect } from 'expo-router';
import { NativeTabs, Icon, Label, Badge, VectorIcon } from 'expo-router/unstable-native-tabs';
import { useSession } from '@/context/Authentication';
import { useTheme } from '@react-navigation/native';
import AuthCheck from '@/components/AuthCheck';
import { Ionicons } from '@expo/vector-icons';
import { Platform } from 'react-native';

export default function TabLayout() {
  const { session, isLoading } = useSession();
  const { colors } = useTheme()

  if (isLoading) {
    return <AuthCheck />
  }

  if (!session) {
    return <Redirect href="/(auth)/index" />;
  }

  return (
    <NativeTabs
      backBehavior='none'
      badgeTextColor={colors.text}
      // backgroundColor={Platform.OS === "android" ? colors.background : null}
      blurEffect="systemDefault"
      minimizeBehavior="onScrollDown"
    >
      <NativeTabs.Trigger name="home">
        <Label>Home</Label>
        {Platform.select({
          ios: <Icon sf={{default: "house", selected: "house.fill"}} />,
          android: <Icon src={{
            default: <VectorIcon family={Ionicons} name="home-outline" />,
            selected: <VectorIcon family={Ionicons} name="home-sharp" />
          }} />
        })}
      </NativeTabs.Trigger>

      <NativeTabs.Trigger name="profile">
        <Label>Profile</Label>
        {Platform.select({
          ios: <Icon sf={{default: "person", selected: "person.fill"}} />,
          android: <Icon src={{
            default: <VectorIcon family={Ionicons} name="person-outline" />,
            selected: <VectorIcon family={Ionicons} name="person-sharp" />
          }} />
        })}
        <Badge>1</Badge>
      </NativeTabs.Trigger>
    </NativeTabs>
  );
}
