import React from 'react';
import Svg, { Path } from 'react-native-svg';

type ProfileIconProps = {
  size?: number;
  color?: string;
  opacity?: number;
};

// Profile icon converted from provided VectorDrawable (viewport 19)
export default function ProfileIcon({ size = 19, color = '#000000', opacity = 0.4 }: ProfileIconProps) {
  return (
    <Svg width={size} height={size} viewBox="0 0 19 19" fill="none">
      <Path d="M15.842 12.543a12 12 0 0 0-12.56 0A2.459 2.459 0 0 0 2.159 14.617v3.521h14.805v-3.521a2.46 2.46 0 0 0-1.122-2.074Z" fill={color} opacity={opacity}/>
      <Path d="M12.615 2.129a4.318 4.318 0 1 1-6.107 0 4.318 4.318 0 0 1 6.107 0" fill={color} opacity={opacity}/>
    </Svg>
  );
}


