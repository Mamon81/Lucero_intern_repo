import { createTheme } from '@rneui/themed';
import { Colors } from './theme';

export const rneuiTheme = createTheme({
  lightColors: {
    primary: '#f97316',
    secondary: '#3B1F00',
    background: '#FDBA74',
    white: '#ffffff',
    black: '#000000',
    grey0: '#f9fafb',
    grey1: '#f3f4f6',
    grey2: '#e5e7eb',
    grey3: '#d1d5db',
    grey4: '#9ca3af',
    grey5: '#6b7280',
    greyOutline: '#ccc',
    searchBg: '#f3f4f6',
    success: '#10b981',
    error: '#ef4444',
    warning: '#f59e0b',
    divider: '#e5e7eb',
  },
  darkColors: {
    primary: '#f97316',
    secondary: '#3B1F00',
    background: '#FDBA74',
    white: '#ffffff',
    black: '#1f2937',
    grey0: '#1f2937',
    grey1: '#374151',
    grey2: '#4b5563',
    grey3: '#6b7280',
    grey4: '#9ca3af',
    grey5: '#d1d5db',
    greyOutline: '#4b5563',
    searchBg: '#374151',
    success: '#10b981',
    error: '#ef4444',
    warning: '#f59e0b',
    divider: '#4b5563',
  },
  mode: 'light',
  components: {
    Button: {
      titleStyle: {
        fontWeight: 'bold',
      },
      buttonStyle: {
        borderRadius: 8,
        paddingHorizontal: 20,
      },
    },
    Input: {
      inputContainerStyle: {
        borderWidth: 2,
        borderRadius: 8,
        paddingHorizontal: 10,
      },
      containerStyle: {
        paddingHorizontal: 0,
      },
    },
    Card: {
      containerStyle: {
        borderRadius: 8,
        borderLeftWidth: 4,
        borderLeftColor: '#f97316',
        marginBottom: 10,
      },
    },
  },
});
