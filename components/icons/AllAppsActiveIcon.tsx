import React from 'react';
import Svg, { ClipPath, Defs, G, Path, Rect } from 'react-native-svg';

type Props = { size?: number };

// All Apps Active icon (viewport 28) converted from provided VectorDrawable
export default function AllAppsActiveIcon({ size = 28 }: Props) {
  return (
    <Svg width={size} height={size} viewBox="0 0 28 28" fill="none">
      <Path d="M14 0C6.268 0 0 6.268 0 14s6.268 14 14 14 14-6.268 14-14S21.732 0 14 0Z" fill="#185ECE"/>
      <Path d="M14 .5C6.543.5.5 6.543.5 14S6.543 27.5 14 27.5 27.5 21.457 27.5 14 21.457.5 14 .5Z" stroke="#FAFAFA"/>
      <Defs>
        <ClipPath id="clip-allapps-active">
          <Rect x={6.458} y={5.895} width={14.824} height={14.824} fill="#fff" />
        </ClipPath>
      </Defs>
      <G clipPath="url(#clip-allapps-active)">
        <Path d="M13.981 15.82h3.916v.692h-3.916Z" fill="#fff" />
        <Path d="M19.694 8.865H8.148a.385.385 0 0 0-.385.384v9.309c0 .212.173.385.385.385h11.546a.385.385 0 0 0 .385-.385V9.249a.385.385 0 0 0-.385-.384Zm-6.482 8.306v-2.106c0-.213.173-.385.385-.385h4.685c.213 0 .385.172.385.385v2.106c0 .213-.172.385-.385.385h-4.685a.385.385 0 0 1-.385-.385Z" fill="#fff" />
        <Path d="M13.771 8.095l-.065-.364a.385.385 0 0 0-.374-.318H8.981a.385.385 0 0 0-.379.318l-.064.364h5.233Z" fill="#fff" />
      </G>
    </Svg>
  );
}


