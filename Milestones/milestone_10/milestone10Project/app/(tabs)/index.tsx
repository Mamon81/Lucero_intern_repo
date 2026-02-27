import { useRouter } from 'expo-router';
import { StyleSheet } from 'react-native';
import { Button, useTheme } from '@rneui/themed';

import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';

export default function HomeScreen() {
  const router = useRouter();
  const { theme } = useTheme();

  const handleApiDemo = () => {
    // Navigates to the screen we will create in app/api-demo.tsx
    router.push('./api-demo');
  };

  return (
    <ThemedView style={styles.container}>
      <ThemedText type="title" style={styles.titleText}>
        Welcome to the Milestone 10 Project!
      </ThemedText>

      <Button
        title="API Call Demo"
        type="solid"
        onPress={handleApiDemo}
        buttonStyle={[
          styles.buttonStyle,
          {
            backgroundColor: theme.colors.primary,
            borderColor: theme.colors.primary,
          },
        ]}
        titleStyle={[
          styles.buttonTitle,
          {
            color: 'white',
          },
        ]}
      />
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  titleText: {
    color: '#FFFFFF',
    textAlign: 'center',
    lineHeight: 40,
    paddingVertical: 4,
    textShadowColor: '#000000',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 1,
    marginBottom: 40,
  },
  buttonStyle: {
    borderWidth: 2,
    paddingVertical: 14,
    borderRadius: 12,
    width: 220,
  },
  buttonTitle: {
    fontWeight: 'bold',
    fontSize: 18,
  },
});
