import React from 'react';
import Svg, { Path } from 'react-native-svg';

type Props = { size?: number };

// All Apps inactive icon (viewport 23) from VectorDrawable
export default function AllAppsIcon({ size = 23 }: Props) {
  const color = '#8b8b8b';
  return (
    <Svg width={size} height={size} viewBox="0 0 23 23" fill="none">
      <Path d="M11.4386 14.936h5.932v1.049h-5.932Z" fill={color} />
      <Path d="M20.0926 4.399H2.6016a.583.583 0 0 0-.583.583v14.1c0 .322.261.583.583.583h17.491a.583.583 0 0 0 .583-.583v-14.1a.583.583 0 0 0-.583-.583Zm-9.819 12.583v-3.191c0-.322.261-.583.583-.583h7.1c.322 0 .583.261.583.583v3.191c0 .322-.261.583-.583.583h-7.1a.583.583 0 0 1-.583-.583Z" fill={color} />
      <Path d="M11.1196 3.234l-.1-.552A.583.583 0 0 0 10.4486 2.2H3.8636a.583.583 0 0 0-.577.481l-.1.552h7.933Z" fill={color} />
    </Svg>
  );
}


