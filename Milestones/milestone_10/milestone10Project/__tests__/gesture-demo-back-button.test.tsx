import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react-native';
import { TouchableOpacity, Text } from 'react-native';
import { useRouter } from 'expo-router';
import GestureDemo from '../app/gesture-demo';

const mockReact = React;
const mockTouchableOpacity = TouchableOpacity;
const mockText = Text;

jest.mock('expo-router', () => ({
  useRouter: jest.fn(),
}));

jest.mock(`@/components/color-gesture-display`, () => ({
  ColorGestureDisplay: () => null,
}));

jest.mock('@rneui/themed', () => {
  return {
    Button: ({ title, onPress }: { title: string; onPress: () => void }) =>
      mockReact.createElement(
        mockTouchableOpacity,
        { onPress, testID: 'rneui-button' },
        mockReact.createElement(mockText, null, title)
      ),
    useTheme: () => ({
      theme: {
        colors: { black: '#000000', white: '#ffffff' },
      },
    }),
  };
});

describe('GestureDemoScreen - Back Button', () => {
  beforeEach(() => {
    jest.useFakeTimers();
  });

  it('navigates away from GestureDemo page when the back button is pressed', () => {
    //Setup the mock router
    const mockRouter = { back: jest.fn() };
    (useRouter as jest.Mock).mockReturnValue(mockRouter);

    render(<GestureDemo />);

    const backButton = screen.getByText('Back');

    fireEvent.press(backButton);

    expect(mockRouter.back).toHaveBeenCalled();
  });
});
