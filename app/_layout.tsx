import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';
import theme from "@/theme";
import { ThemeProvider } from "@rneui/themed";
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Prevent splash screen from auto-hiding
SplashScreen.preventAutoHideAsync();

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAZ-sEf7w3PEA3JvmxJyFcEjYlGGyjJg1U",
  authDomain: "cattle-zoo.firebaseapp.com",
  projectId: "cattle-zoo",
  storageBucket: "cattle-zoo.appspot.com",
  messagingSenderId: "925901692717",
  appId: "1:925901692717:web:ae5627ff8a36d899c47da4",
  measurementId: "G-FD2THPF3H6"
};
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default function RootLayout() {
  const [loaded] = useFonts({
    Quicksand: require('../assets/fonts/Quicksand-Regular.ttf'),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <ThemeProvider theme={theme}>
      <GestureHandlerRootView style={{ flex: 1 }}>
        <Stack>
          <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
          <Stack.Screen name="index" options={{ headerShown: false }} />
          <Stack.Screen name="getStarted/index" options={{ headerShown: false }} />
          <Stack.Screen name="register/index" options={{ headerShown: false }} />
          <Stack.Screen name="login/index" options={{ headerShown: false }} />
          <Stack.Screen name="forgotPassword/index" options={{ headerShown: false }} />
        </Stack>
      </GestureHandlerRootView>
    </ThemeProvider>
  );
}