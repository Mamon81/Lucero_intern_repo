import { useRouter } from 'expo-router';
import { StyleSheet, View } from 'react-native';
import { Button, useTheme } from '@rneui/themed';

import { ColorGestureDisplay } from '@/components/color-gesture-display';

export default function GestureDemoScreen() {
  const router = useRouter();
  const { theme } = useTheme();

  const handleBack = () => {
    router.back();
  };

  return (
    <View style={styles.container}>
      <ColorGestureDisplay />
      <View style={styles.buttonContainer}>
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
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  buttonContainer: {
    position: 'absolute',
    bottom: 24,
    alignSelf: 'center',
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
});
