import React from 'react';
import Svg, { Path } from 'react-native-svg';

type Props = { size?: number; color?: string };

export default function LogoutIcon({ size = 20, color = '#185ECE' }: Props) {
  return (
    <Svg width={size} height={size} viewBox="0 0 20 20" fill="none">
      <Path d="M15.729 12.086a.558.558 0 010-.8l1.851-1.847h-5.768a.563.563 0 010-1.126h5.768L15.729 6.458a.562.562 0 11.8-.794l2.809 2.812a.564.564 0 010 .795l-2.814 2.813a.56.56 0 01-.4.167.567.567 0 01-.395-.165z" fill={color} />
      <Path d="M7.5 19a1.546 1.546 0 01-.465-.07l-4.514-1.5A1.514 1.514 0 011.5 16V2.5A1.5 1.5 0 013 1c.151 0 .303.024.465.07l4.513 1.5C8.603 2.737 9 3.332 9 4v13.5A1.5 1.5 0 017.5 19z" fill={color} opacity={0.5} />
      <Path d="M12.938 6a.563.563 0 01-.562-.562V3.062a.939.939 0 00-.937-.938H3a.562.562 0 110-1.125h8.438A2.064 2.064 0 0113.5 3.062V5.437A.563.563 0 0112.938 6z" fill={color} />
      <Path d="M11.438 16.75h-3a.562.562 0 110-1.125h3c.519 0 .938-.42.937-.938V12.31a.563.563 0 111.125 0v2.375a2.064 2.064 0 01-2.062 2.065z" fill={color} />
    </Svg>
  );
}


