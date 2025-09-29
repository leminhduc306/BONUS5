import React from 'react';
import Svg, { ClipPath, Defs, G, Path, Rect } from 'react-native-svg';

type Props = { size?: number };

// Home Active icon (viewport 28) converted from VectorDrawable
export default function HomeActiveIcon({ size = 28 }: Props) {
  return (
    <Svg width={size} height={size} viewBox="0 0 28 28" fill="none">
      <Path d="M14 0C6.268 0 0 6.268 0 14s6.268 14 14 14 14-6.268 14-14S21.732 0 14 0Z" fill="#185ECE"/>
      <Path d="M14 0.5C6.543 0.5 0.5 6.543 0.5 14S6.543 27.5 14 27.5 27.5 21.457 27.5 14 21.457 0.5 14 0.5Z" stroke="#FAFAFA"/>
      <Defs>
        <ClipPath id="c">
          <Rect x={6} y={5} width={16} height={16} fill="#fff" />
        </ClipPath>
      </Defs>
      <G clipPath="url(#c)">
        <Path d="M18.876 19.969H9.121a1.4 1.4 0 0 1-1.394-1.392v-7.161c0-.642.283-1.253.738-1.682l4.547-3.318a1.467 1.467 0 0 1 1.974 0l4.546 3.318c.455.429.738 1.04.738 1.682v7.161a1.4 1.4 0 0 1-1.394 1.392Zm-5.683-7.405a.5.5 0 0 0-.5.5v3.356a.5.5 0 0 0 .5.5h1.613a.5.5 0 0 0 .5-.5v-3.356a.5.5 0 0 0-.5-.5h-1.613Z" fill="#fff"/>
      </G>
    </Svg>
  );
}


