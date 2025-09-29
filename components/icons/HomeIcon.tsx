import React from 'react';
import Svg, { Path } from 'react-native-svg';

type HomeIconProps = {
  size?: number;
  color?: string;
  opacity?: number;
};

// Home icon converted from provided VectorDrawable (viewport 22)
export default function HomeIcon({ size = 22, color = '#000000', opacity = 0.4 }: HomeIconProps) {
  return (
    <Svg width={size} height={size} viewBox="0 0 22 22" fill="none">
      <Path
        d="M17.705 20.582H4.292a1.917 1.917 0 0 1-1.917-1.913V8.822c0-.85.38-1.65 1.016-2.312l6.252-4.568a2.017 2.017 0 0 1 2.714 0l6.251 4.568c.636.662 1.016 1.462 1.016 2.312v9.847a1.919 1.919 0 0 1-1.915 1.913ZM9.705 10.4a.5.5 0 0 0-.5.5v4.99a.5.5 0 0 0 .5.5h2.592a.5.5 0 0 0 .5-.5v-4.989a.5.5 0 0 0-.5-.5H9.705Z"
        fill={color}
        opacity={opacity}
      />
    </Svg>
  );
}


