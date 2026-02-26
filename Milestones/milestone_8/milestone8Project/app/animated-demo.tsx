import { useRef } from 'react';
import { View, StyleSheet, Animated } from 'react-native';
import { useRouter } from 'expo-router';
import { Button, useTheme } from '@rneui/themed';
import { AnimatedBox } from '@/components/animated-box';
import { ThemedView } from '@/components/themed-view';
import { ThemedText } from '@/components/themed-text';

export default function AnimatedDemoScreen() {
  const router = useRouter();
  const { theme } = useTheme();
  const animatedValue = useRef(new Animated.Value(0)).current;

  const startAnimation = () => {
    Animated.spring(animatedValue, {
      toValue: 1,
      friction: 5,
      useNativeDriver: true,
    }).start();
  };

  const resetAnimation = () => {
    animatedValue.setValue(0);
  };

  const handleBack = () => {
    router.back();
  };

  return (
    <ThemedView style={styles.container}>
      <View style={styles.contentContainer}>
        <ThemedText type="title" style={styles.titleText}>
          Animated API Demo
        </ThemedText>

        <View style={styles.animationContainer}>
          <AnimatedBox animatedValue={animatedValue} />
        </View>

        <View style={styles.buttonGroup}>
          <Button
            title="Start Animation"
            type="outline"
            onPress={startAnimation}
            containerStyle={styles.primaryButtonContainer}
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
            title="Reset Animation"
            type="outline"
            onPress={resetAnimation}
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
        </View>
      </View>

      <View style={styles.backButtonContainer}>
        <Button
          title="Back"
          type="outline"
          onPress={handleBack}
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
      </View>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contentContainer: {
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
  animationContainer: {
    marginVertical: 20,
  },
  buttonGroup: {
    marginTop: 30,
    width: '100%',
    alignItems: 'center',
  },
  primaryButtonContainer: {
    marginTop: 0,
  },
  secondaryButtonContainer: {
    marginTop: 12,
  },
  buttonStyle: {
    borderWidth: 2,
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 8,
  },
  buttonTitle: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  backButtonContainer: {
    position: 'absolute',
    bottom: 24,
    alignSelf: 'center',
  },
});
