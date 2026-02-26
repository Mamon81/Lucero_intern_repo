import Animated, { useAnimatedStyle } from 'react-native-reanimated';
import { Text } from '@rneui/themed';

const AnimatedText = Animated.createAnimatedComponent(Text);

export const AnimatedColorName = ({
  name,
  scale,
}: {
  name: string;
  scale: any;
}) => {
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
