import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react-native';
import { useRouter } from 'expo-router';
import GestureDemo from '../app/gesture-demo';
import { ColorGestureDisplay } from '@/components/color-gesture-display';

jest.mock('expo-router', () => ({
  useRouter: jest.fn(),
}));

jest.mock(`@/components/color-gesture-display`, () => ({
  ColorGestureDisplay: () => null,
}));

jest.mock('@rneui/themed', () => {
  const mockReact = require('react');
  const { TouchableOpacity, Text } = require('react-native');
  return {
    Button: ({ title, onPress }: { title: string; onPress: () => void }) =>
      mockReact.createElement(
        TouchableOpacity,
        { onPress, testID: 'rneui-button' },
        mockReact.createElement(Text, null, title)
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
