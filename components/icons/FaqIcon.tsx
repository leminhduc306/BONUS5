import React from 'react';
import Svg, { Defs, LinearGradient, Path, Stop } from 'react-native-svg';

type Props = { size?: number };

export default function FaqIcon({ size = 20 }: Props) {
  return (
    <Svg width={size} height={size} viewBox="0 0 20 20" fill="none">
      <Defs>
        <LinearGradient id="faq_g" x1="16.073" y1="4.017" x2="18.327" y2="20.366">
          <Stop offset="0" stopColor="#5597FF" />
          <Stop offset="1" stopColor="#185ECE" />
        </LinearGradient>
      </Defs>
      <Path
        d="M10,1a9,9 0,1 0,9 9A9.01,9.01 0,0 0,10 1ZM10,15.25a0.75,0.75 0,1 1,0.75 -0.75A0.75,0.75 0,0 1,10 15.25ZM11.187,10.481a0.753,0.753 0,0 0,-0.437 0.682L10.75,11.5a0.75,0.75 0,1 1,-1.5 0v-0.337A2.26,2.26 0,0 1,10.559 9.119a2.451,2.451 0,0 0,1.316 -1.744,1.875 1.875,0 1,0 -3.75,0 0.75,0.75 0,0 1,-1.5 0,3.375 3.375,0 0,1 6.75,0 3.908,3.908 0,0 1,-2.188 3.107Z"
        fill="url(#faq_g)"
      />
    </Svg>
  );
}


