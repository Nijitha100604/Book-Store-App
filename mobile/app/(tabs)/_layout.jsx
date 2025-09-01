import { Tabs, Redirect } from "expo-router";
import { useAuthStore } from "../../store/authStore";
import { Ionicons } from "@expo/vector-icons";
import COLORS from "../../constants/color";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export default function TabsLayout() {
  const insets = useSafeAreaInsets();

  const { user, token } = useAuthStore();
  const isSignedIn = user && token;

  if (!isSignedIn) {
    return <Redirect href="/(auth)" />;
  }

  return (
    <Tabs 
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: COLORS.primary,
        headerTitleStyle:{
          color: COLORS.textPrimary,
          fontWeight: "600"
        },
        headerShadowVisible: false,
        tabBarStyle:{
          backgroundColor: COLORS.cardBackground,
          borderTopWidth: 1,
          borderTopColor: COLORS.border,
          paddingTop: 5,
          paddingBottom: insets.bottom,
          height: 60 + insets.bottom
        }
      }}
    >
      <Tabs.Screen name="index" 
        options={{
          title: "Home",
          tabBarIcon: ({color, size}) =>(<Ionicons name="home-outline" size={size} color={color}/>)
        }}
      />
      <Tabs.Screen name="create" 
        options={{
          title: "Create",
          tabBarIcon: ({color, size}) =>(<Ionicons name="add-circle-outline" size={size} color={color}/>)
        }}
      />
      <Tabs.Screen name="profile"
        options={{
          title: "Profile",
          tabBarIcon: ({color, size}) =>(<Ionicons name="person-outline" size={size} color={color}/>)
        }} 
      />
    </Tabs>
  );
}
