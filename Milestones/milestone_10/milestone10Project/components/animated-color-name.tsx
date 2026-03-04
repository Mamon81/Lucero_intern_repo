import { memo } from 'react';
import Animated, { useAnimatedStyle } from 'react-native-reanimated';
import { Text } from '@rneui/themed';

const AnimatedText = Animated.createAnimatedComponent(Text);

interface AnimatedColorNameProps {
  name: string;
  scale: any;
}

const AnimatedColorNameComponent = ({
  name,
  scale,
}: AnimatedColorNameProps) => {
  const animatedTextStyle = useAnimatedStyle(() => ({
    transform: [{ scale: scale.value }],
  }));

  return (
    <AnimatedText
      h2
      style={[
        {
          color: 'white',
          textAlign: 'center',
        },
        animatedTextStyle,
      ]}
    >
      {name}
    </AnimatedText>
  );
};

export const AnimatedColorName = memo(AnimatedColorNameComponent);
