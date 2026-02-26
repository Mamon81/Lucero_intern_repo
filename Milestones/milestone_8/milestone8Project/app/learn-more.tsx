import { useRouter } from 'expo-router';
import { Button, useTheme } from '@rneui/themed';
import { StyleSheet, View } from 'react-native';

import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';

export default function LearnMoreScreen() {
  const router = useRouter();
  const { theme } = useTheme();

  return (
    <ThemedView style={styles.container}>
      <ThemedText type="title" style={styles.titleText}>
        About Milestone 8
      </ThemedText>

      <ThemedText style={styles.description}>
        This app focuses on accomplishing Milestone 8: React Native Fundamentals
      </ThemedText>

      <View style={styles.listContainer}>
        <ThemedText style={styles.bulletText}>
          • Setting up a React Native Development Environment (Expo & Metro
          Server)
        </ThemedText>
        <ThemedText style={styles.bulletText}>
          • Understanding React Native Components vs. React Components
        </ThemedText>
        <ThemedText style={styles.bulletText}>
          • React Native Stylesheets vs CSS-in-JS
        </ThemedText>
        <ThemedText style={styles.bulletText}>
          • Navigation in React Native using React Navigation
        </ThemedText>
        <ThemedText style={styles.bulletText}>
          • Handling Gestures and Animations in React Native
        </ThemedText>
      </View>

      <Button
        title="Back"
        onPress={() => router.back()}
        buttonStyle={[
          styles.button,
          {
            backgroundColor: theme.colors.white,
          },
        ]}
        titleStyle={[
          styles.buttonTitle,
          {
            color: theme.colors.black,
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
    padding: 20,
  },
  description: {
    textAlign: 'center',
    marginVertical: 20,
    fontSize: 16,
  },
  listContainer: {
    alignSelf: 'stretch',
    marginBottom: 20,
  },
  bulletText: {
    fontSize: 15,
    lineHeight: 22,
    textAlign: 'left',
    marginBottom: 8,
  },
  titleText: {
    color: '#FFFFFF',
    textAlign: 'center',
    lineHeight: 40,
    paddingVertical: 4,
    textShadowColor: '#000000',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 1,
    marginBottom: 10,
  },
  button: {
    borderRadius: 8,
    paddingHorizontal: 30,
    paddingVertical: 10,
    borderWidth: 2,
    borderColor: '#000000',
  },
  buttonTitle: {
    color: '#000000',
    fontWeight: 'bold',
  },
});
