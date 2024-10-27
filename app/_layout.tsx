import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';
import theme from "@/theme";
import { ThemeProvider } from "@rneui/themed";
import { GestureHandlerRootView } from 'react-native-gesture-handler';
SplashScreen.preventAutoHideAsync();

export default function _layout() {
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
        <Stack.Screen name="index" options={{headerShown: false}} />
          <Stack.Screen name="getStarted/index" options={{ headerShown: false}} />
          <Stack.Screen name="register/index" options={{ }} />
          <Stack.Screen name="login/index" options={{}} />
        <Stack.Screen name="(tabs)" options={{ headerShown: false  }} />
      </Stack>
    </GestureHandlerRootView>
    </ThemeProvider>
  );
}
