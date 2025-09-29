import React from 'react';
import Svg, { Circle, Defs, LinearGradient, Rect, Stop } from 'react-native-svg';

type Props = { size?: number };

export default function SupportIcon({ size = 20 }: Props) {
  return (
    <Svg width={size} height={size} viewBox="0 0 20 20" fill="none">
      <Defs>
        <LinearGradient
          id="sup_g"
          x1="10.003"
          y1="1.0899372"
          x2="16.86402"
          y2="25.414423"
          gradientUnits="userSpaceOnUse"
        >
          <Stop offset="0" stopColor="#5597FF" />
          <Stop offset="1" stopColor="#185ECE" />
        </LinearGradient>
      </Defs>
      {/* Outer ring */}
      <Circle cx="10" cy="10" r="7.5" fill="url(#sup_g)" />
      {/* White cross */}
      <Rect x="9.2" y="3.5" width="1.6" height="13" rx="0.8" fill="#FFFFFF" />
      <Rect x="3.5" y="9.2" width="13" height="1.6" rx="0.8" fill="#FFFFFF" />
      {/* Inner hole */}
      <Circle cx="10" cy="10" r="3" fill="#FFFFFF" />
    </Svg>
  );
}
