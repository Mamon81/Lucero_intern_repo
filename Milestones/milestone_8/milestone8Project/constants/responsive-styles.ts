import { Platform, StyleSheet } from 'react-native';

export const getResponsiveSpacing = (width: number) => {
  return {
    paddingHorizontal: width * 0.05,

    paddingTop: Platform.select({
      android: 30,
      ios: 0,
      default: 20,
    }),

    borderWidth: StyleSheet.hairlineWidth * 2,
  };
};
