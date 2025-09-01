import { Stack, Redirect } from "expo-router";
import { useAuthStore } from "../../store/authStore";

export default function AuthLayout() {
  const { user, token } = useAuthStore();
  const isSignedIn = user && token;

  if (isSignedIn) {
    return <Redirect href="/(tabs)" />;
  }

  return <Stack screenOptions={{ headerShown: false }} />;
}
