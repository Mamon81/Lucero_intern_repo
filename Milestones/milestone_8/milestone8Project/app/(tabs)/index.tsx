import { useRouter } from 'expo-router';
import { StyleSheet } from 'react-native';
import { Button, useTheme } from '@rneui/themed';

import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';

export default function HomeScreen() {
  const router = useRouter();
  const { theme } = useTheme();

  const handleLearnMore = () => {
    router.push('/learn-more');
  };

  const handleGestureDemo = () => {
    router.push('/gesture-demo');
  };

  return (
    <ThemedView style={styles.container}>
      <ThemedText type="title" style={styles.titleText}>
        Welcome to the Milestone 8 Project!
      </ThemedText>
      <Button
        title="Learn More"
        type="outline"
        onPress={handleLearnMore}
        buttonStyle={[
          styles.buttonStyle,
          {
            borderColor: theme.colors.black,
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
      <Button
        title="Gesture Demo"
        type="outline"
        onPress={handleGestureDemo}
        containerStyle={styles.secondaryButtonContainer}
        buttonStyle={[
          styles.buttonStyle,
          {
            borderColor: theme.colors.black,
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
      <Button
        title="Animated Demo"
        type="outline"
        onPress={() => router.push('/animated-demo')}
        containerStyle={styles.secondaryButtonContainer}
        buttonStyle={[
          styles.buttonStyle,
          {
            borderColor: theme.colors.black,
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
    marginBottom: 30,
  },
  buttonStyle: {
    borderWidth: 2,
    paddingVertical: 12,
    borderRadius: 8,
    width: 159,
  },
  buttonTitle: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  secondaryButtonContainer: {
    marginTop: 12,
  },
});
