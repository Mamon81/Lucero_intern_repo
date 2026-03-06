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
import { I18nextProvider } from 'react-i18next';

import { useColorScheme } from '@/hooks/use-color-scheme';
import { rneuiTheme } from '@/constants/theme-config';
import { store } from '../store/store';
import * as Sentry from '@sentry/react-native';
import i18n from '@/services/i18n';

Sentry.init({
  dsn: 'https://1934ce8c008e67dd77e535c9f33f8935@o4510996302004225.ingest.us.sentry.io/4510996303446016',

  // Adds more context data to events (IP address, cookies, user, etc.)
  // For more information, visit: https://docs.sentry.io/platforms/react-native/data-management/data-collected/
  sendDefaultPii: true,

  // Enable Logs
  enableLogs: true,

  // Configure Session Replay
  replaysSessionSampleRate: 0.1,
  replaysOnErrorSampleRate: 1,
  integrations: [
    Sentry.mobileReplayIntegration(),
    Sentry.feedbackIntegration(),
  ],

  // uncomment the line below to enable Spotlight (https://spotlightjs.com)
  // spotlight: __DEV__,
});

export const unstable_settings = {
  anchor: '(tabs)',
};

export default Sentry.wrap(function RootLayout() {
  const colorScheme = useColorScheme();

  return (
    <I18nextProvider i18n={i18n}>
      <Provider store={store}>
          <GestureHandlerRootView style={styles.root}>
            <ThemeProvider theme={rneuiTheme}>
              <NavigationThemeProvider
                value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}
              >
                <Stack>
                  <Stack.Screen
                    name="(tabs)"
                    options={{ headerShown: false }}
                  />
                  <Stack.Screen
                    name="api-demo"
                    options={{ headerShown: false }}
                  />
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
    </I18nextProvider>
  );
});

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
});
