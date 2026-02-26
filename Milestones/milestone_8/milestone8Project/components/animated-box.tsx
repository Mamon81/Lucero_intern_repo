import { Animated, StyleSheet } from 'react-native';

export const AnimatedBox = ({
  animatedValue,
}: {
  animatedValue: Animated.Value;
}) => {
  const opacity = animatedValue.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 1],
  });

  const scale = animatedValue.interpolate({
    inputRange: [0, 1],
    outputRange: [1, 1.5],
  });

  const rotate = animatedValue.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg'],
  });

  return (
    <Animated.View
      style={[
        styles.box,
        {
          opacity,
          transform: [{ scale }, { rotate }],
        },
      ]}
    />
  );
};

const styles = StyleSheet.create({
  box: {
    width: 100,
    height: 100,
    backgroundColor: 'blue',
    borderRadius: 10,
    alignSelf: 'center',
    marginVertical: 20,
  },
});
