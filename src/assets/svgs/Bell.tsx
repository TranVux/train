import * as React from 'react';
import Svg, {SvgProps, Path} from 'react-native-svg';
export const BellIcon = (props: SvgProps) => (
  <Svg width={24} height={24} fill="none" {...props}>
    <Path
      fill="#fff"
      fillRule="evenodd"
      d="M11 3a1 1 0 1 1 2 0v1.07c3.392.486 6 3.404 6 6.93v6h2a1 1 0 1 1 0 2h-5.126a4.002 4.002 0 0 1-7.748 0H3a1 1 0 1 1 0-2h2v-6a7.002 7.002 0 0 1 6-6.93V3Zm1 17a2 2 0 0 0 1.732-1h-3.464A2 2 0 0 0 12 20Zm0-14a5 5 0 0 0-5 5v6h10v-6a5 5 0 0 0-5-5Z"
      clipRule="evenodd"
    />
  </Svg>
);
