import { StyleSheet } from 'react-native';
import { GestureDetector, Gesture } from 'react-native-gesture-handler';
import Animated, {
  useAnimatedStyle,
  withTiming,
} from 'react-native-reanimated';
import { AnimatedColorName } from '@/components/animated-color-name';
import { COLOR_PALETTE } from '@/constants/colors';
import { useColorGestures } from '@/hooks/use-color-gestures';

export const ColorGestureDisplay = () => {
  const {
    colorIndex,
    colorIndexState,
    nextColor,
    previousColor,
    textScale,
    triggerZoom,
  } = useColorGestures();

  const panGesture = Gesture.Pan()
    .runOnJS(true)
    .onEnd((e) => {
      if (e.translationX > 50) previousColor();
      if (e.translationX < -50) nextColor();
    });

  const doubleTap = Gesture.Tap()
    .runOnJS(true)
    .numberOfTaps(2)
    .onStart(() => {
      triggerZoom();
    });

  const animatedBackgroundStyle = useAnimatedStyle(() => ({
    backgroundColor: withTiming(COLOR_PALETTE[colorIndex.value].hex),
  }));

  const composedGesture = Gesture.Exclusive(panGesture, doubleTap);

  return (
    <GestureDetector gesture={composedGesture}>
      <Animated.View style={[styles.container, animatedBackgroundStyle]}>
        <AnimatedColorName
          name={COLOR_PALETTE[colorIndexState].name}
          scale={textScale}
        />
      </Animated.View>
    </GestureDetector>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
});
