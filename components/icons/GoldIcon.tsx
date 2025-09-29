import React from 'react';
import Svg, { G, Path } from 'react-native-svg';

type Props = { size?: number };

// Gold inactive icon (viewport 22) converted from VectorDrawable
export default function GoldIcon({ size = 22 }: Props) {
  return (
    <Svg width={size} height={size} viewBox="0 0 22 22" fill="none">
      <G>
        <Path d="M11 0C4.924 0 0 4.924 0 11s4.924 11 11 11 11-4.924 11-11S17.076 0 11 0Z" fill="#969696"/>
        <Path d="M11 2.2c-4.859 0-8.8 3.941-8.8 8.8 0 4.859 3.941 8.8 8.8 8.8 4.859 0 8.8-3.941 8.8-8.8 0-4.859-3.941-8.8-8.8-8.8Z" fill="#969696"/>
        <Path d="M11 2.7c-4.583 0-8.3 3.717-8.3 8.3s3.717 8.3 8.3 8.3 8.3-3.717 8.3-8.3S15.583 2.7 11 2.7Z" stroke="#FFFFFF"/>
        <Path d="M11 7.333a1.1 1.1 0 0 1 1.1 1.1v5.133A1.1 1.1 0 0 1 11 14.666a1.1 1.1 0 0 1-1.1-1.1V8.433a1.1 1.1 0 0 1 1.1-1.1Z" fill="#FAFAFA"/>
      </G>
    </Svg>
  );
}


