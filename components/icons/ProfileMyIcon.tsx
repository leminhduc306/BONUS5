import React from 'react';
import Svg, { Circle, Defs, LinearGradient, Path, Stop } from 'react-native-svg';

type Props = { size?: number };

export default function ProfileMyIcon({ size = 20 }: Props) {
  return (
    <Svg width={size} height={size} viewBox="0 0 20 20" fill="none">
      <Defs>
        <LinearGradient
          id="mp_g"
          x1="10.064685"
          y1="11.333886"
          x2="17.858315"
          y2="23.993496"
          gradientUnits="userSpaceOnUse"
        >
          <Stop offset="0" stopColor="#5597FF" />
          <Stop offset="1" stopColor="#185ECE" />
        </LinearGradient>
      </Defs>
      {/* Head */}
      <Circle cx="10" cy="6" r="3" fill="url(#mp_g)" />
      {/* Shoulders / body */}
      <Path
        d="M4 16.2c0-3.314 2.686-6 6-6s6 2.686 6 6v0.8H4v-0.8z"
        fill="url(#mp_g)"
      />
    </Svg>
  );
}
