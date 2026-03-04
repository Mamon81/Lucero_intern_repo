import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { useSharedValue, withSpring } from 'react-native-reanimated';
import { COLOR_PALETTE } from '@/constants/colors';

const PALETTE_LENGTH = COLOR_PALETTE.length;

export const useColorGestures = () => {
  const [colorIndexState, setColorIndexState] = useState(0);
  const isZoomedRef = useRef(false);
  const colorIndex = useSharedValue(0);
  const textScale = useSharedValue(1);

  const nextColor = useCallback(() => {
    setColorIndexState((current) => (current + 1) % PALETTE_LENGTH);
  }, []);

  const previousColor = useCallback(() => {
    setColorIndexState(
      (current) => (current - 1 + PALETTE_LENGTH) % PALETTE_LENGTH
    );
  }, []);

  useEffect(() => {
    colorIndex.value = colorIndexState;
  }, [colorIndexState, colorIndex]);

  const triggerZoom = useCallback(() => {
    isZoomedRef.current = !isZoomedRef.current;
    textScale.value = withSpring(isZoomedRef.current ? 1.5 : 1);
  }, [textScale]);

  return useMemo(
    () => ({
      colorIndex,
      colorIndexState,
      nextColor,
      previousColor,
      textScale,
      triggerZoom,
    }),
    [
      colorIndex,
      colorIndexState,
      nextColor,
      previousColor,
      textScale,
      triggerZoom,
    ]
  );
};
