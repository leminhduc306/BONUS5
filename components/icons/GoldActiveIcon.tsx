import React from 'react';
import Svg, { ClipPath, Defs, G, Path, Rect } from 'react-native-svg';

type Props = { size?: number };

// Gold Active icon (viewport 28) - ring with vertical bar
export default function GoldActiveIcon({ size = 28 }: Props) {
  return (
    <Svg width={size} height={size} viewBox="0 0 28 28" fill="none">
      {/* Outer blue disc and white ring */}
      <Path d="M14 0C6.268 0 0 6.268 0 14s6.268 14 14 14 14-6.268 14-14S21.732 0 14 0Z" fill="#185ECE"/>
      <Path d="M14 .5C6.543.5.5 6.543.5 14S6.543 27.5 14 27.5 27.5 21.457 27.5 14 21.457.5 14 .5Z" stroke="#FAFAFA"/>

      {/* Clipped inner graphics */}
      <Defs>
        <ClipPath id="clip-gold-active">
          <Rect x={6} y={6} width={16} height={16} fill="#fff" />
        </ClipPath>
      </Defs>
      <G clipPath="url(#clip-gold-active)">
        <Path d="M14 6a8 8 0 1 1 0 16 8 8 0 0 1 0-16Z" fill="#fff"/>
        <Path d="M14 7.6a6.4 6.4 0 1 1 0 12.8A6.4 6.4 0 0 1 14 7.6Z" fill="#fff"/>
        <Path d="M14 8.1a5.9 5.9 0 1 1 0 11.8A5.9 5.9 0 0 1 14 8.1Z" stroke="#185ECE"/>
        <Path d="M14 11.333a.8.8 0 0 1 .8.8v3.733a.8.8 0 0 1-1.6 0v-3.733a.8.8 0 0 1 .8-.8Z" fill="#185ECE"/>
      </G>
    </Svg>
  );
}


