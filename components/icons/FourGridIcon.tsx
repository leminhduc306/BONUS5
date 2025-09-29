import React from 'react';
import Svg, { Rect } from 'react-native-svg';

type Props = { size?: number; color?: string; corner?: number };

export default function FourGridIcon({ size = 18, color = '#B5B7BC', corner = 2 }: Props) {
  const strokeWidth = 1.5;
  const gap = 3;
  const cell = (size - gap - strokeWidth) / 2 - strokeWidth; // compute cell size with padding

  // Use a fixed 18x18 viewBox for consistent sizing
  return (
    <Svg width={size} height={size} viewBox="0 0 18 18" fill="none">
      <Rect x="1" y="1" width="6" height="6" rx={corner} stroke={color} strokeWidth={strokeWidth} />
      <Rect x="11" y="1" width="6" height="6" rx={corner} stroke={color} strokeWidth={strokeWidth} />
      <Rect x="1" y="11" width="6" height="6" rx={corner} stroke={color} strokeWidth={strokeWidth} />
      <Rect x="11" y="11" width="6" height="6" rx={corner} stroke={color} strokeWidth={strokeWidth} />
    </Svg>
  );
}


