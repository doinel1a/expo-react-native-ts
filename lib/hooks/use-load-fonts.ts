/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable unicorn/prefer-module */

import FontAwesome from '@expo/vector-icons/FontAwesome';
import { useFonts } from 'expo-font';

export default function useLoadFonts() {
  const [areFontsLoaded, fontsError] = useFonts({
    'Roboto-Thin': require('../../assets/fonts/Roboto-Thin.ttf'),
    'Roboto-Regular': require('../../assets/fonts/Roboto-Regular.ttf'),
    'Roboto-Medium': require('../../assets/fonts/Roboto-Medium.ttf'),
    'Roboto-Bold': require('../../assets/fonts/Roboto-Bold.ttf'),
    ...FontAwesome.font
  });

  return {
    areFontsLoaded,
    fontsError
  };
}
