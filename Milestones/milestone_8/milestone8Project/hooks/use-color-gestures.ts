import { useCallback, useEffect, useRef, useState } from 'react';
import { useSharedValue, withSpring } from 'react-native-reanimated';
import { COLOR_PALETTE } from '@/constants/colors';

export const useColorGestures = () => {
  const [colorIndexState, setColorIndexState] = useState(0);
  const isZoomedRef = useRef(false);
  const colorIndex = useSharedValue(0);
  const textScale = useSharedValue(1);

  const nextColor = useCallback(() => {
    setColorIndexState((current) => (current + 1) % COLOR_PALETTE.length);
  }, []);

  const previousColor = useCallback(() => {
    setColorIndexState(
      (current) => (current - 1 + COLOR_PALETTE.length) % COLOR_PALETTE.length
    );
  }, []);

  useEffect(() => {
    colorIndex.value = colorIndexState;
  }, [colorIndex, colorIndexState]);

  const triggerZoom = useCallback(() => {
    isZoomedRef.current = !isZoomedRef.current;
    textScale.value = withSpring(isZoomedRef.current ? 1.5 : 1);
  }, [textScale]);

  return {
    colorIndex,
    colorIndexState,
    nextColor,
    previousColor,
    textScale,
    triggerZoom,
  };
};
