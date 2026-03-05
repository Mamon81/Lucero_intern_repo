import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider as NavigationThemeProvider,
} from '@react-navigation/native';
import { ThemeProvider } from '@rneui/themed';
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Provider } from 'react-redux';
import 'react-native-reanimated';

import { useColorScheme } from '@/hooks/use-color-scheme';
import { rneuiTheme } from '@/constants/theme-config';
import { store } from '../store/store';

export const unstable_settings = {
  anchor: '(tabs)',
};

export default function RootLayout() {
  const colorScheme = useColorScheme();

  return (
    <Provider store={store}>
      <GestureHandlerRootView style={styles.root}>
        <ThemeProvider theme={rneuiTheme}>
          <NavigationThemeProvider
            value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}
          >
            <Stack>
              <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
              <Stack.Screen name="api-demo" options={{ headerShown: false }} />
              <Stack.Screen
                name="gesture-demo"
                options={{ headerShown: false }}
              />
            </Stack>
            <StatusBar style="auto" />
          </NavigationThemeProvider>
        </ThemeProvider>
      </GestureHandlerRootView>
    </Provider>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
});
