import React from 'react';
import { useColorScheme } from '../hooks/use-color-scheme';
import { useThemeColor } from '../hooks/use-theme-color';
import { ThemedView } from './themed-view';

export default function ParallaxScrollView({ children }: { children: React.ReactNode }) {
  const colorScheme = useColorScheme();
  const background = useThemeColor({}, 'background');
  return <ThemedView style={{ backgroundColor: background }}>{children}</ThemedView>;
}
