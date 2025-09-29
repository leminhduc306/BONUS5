import React from 'react';
import Svg, { ClipPath, Defs, G, Path, Rect } from 'react-native-svg';

type Props = { size?: number };

// Profile Active icon (viewport 28)
export default function ProfileActiveIcon({ size = 28 }: Props) {
  return (
    <Svg width={size} height={size} viewBox="0 0 28 28" fill="none">
      <Path d="M14 0C6.268 0 0 6.268 0 14s6.268 14 14 14 14-6.268 14-14S21.732 0 14 0Z" fill="#185ECE"/>
      <Path d="M14 .5C6.543.5.5 6.543.5 14S6.543 27.5 14 27.5 27.5 21.457 27.5 14 21.457.5 14 .5Z" stroke="#FAFAFA"/>
      <Defs>
        <ClipPath id="c4">
          <Rect x={6.5} y={6} width={15} height={15} fill="#fff" />
        </ClipPath>
      </Defs>
      <G clipPath="url(#c4)">
        <Path d="M19.005 15.902a9.472 9.472 0 0 0-9.916 0 1.942 1.942 0 0 0-.884 1.637v2.781h11.688v-2.78a1.942 1.942 0 0 0-.888-1.638Z" fill="#fff"/>
        <Path d="M16.459 7.681a3.409 3.409 0 1 1-4.821 0 3.409 3.409 0 0 1 4.821 0" fill="#fff"/>
      </G>
    </Svg>
  );
}


