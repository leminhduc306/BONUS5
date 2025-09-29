/**
 * Learn more about light and dark modes:
 * https://docs.expo.dev/guides/color-schemes/
 */

import { Colors } from '../constants/theme';
import { useColorScheme } from './use-color-scheme';

export function useThemeColor(props: any, colorName: keyof typeof Colors.light & keyof typeof Colors.dark) {
  const theme = useColorScheme();
  return Colors[theme][colorName];
}
