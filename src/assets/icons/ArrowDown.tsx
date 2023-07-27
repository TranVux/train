import * as React from 'react';
import Svg, {SvgProps, Path} from 'react-native-svg';
export const ArrowDown = (props: SvgProps) => (
  <Svg width={24} height={24} fill="none" {...props}>
    <Path
      fill="#000"
      fillRule="evenodd"
      d="M17.707 14.707a1 1 0 0 1-1.414 0L12 10.414l-4.293 4.293a1 1 0 0 1-1.414-1.414l5-5a1 1 0 0 1 1.414 0l5 5a1 1 0 0 1 0 1.414Z"
      clipRule="evenodd"
    />
  </Svg>
);
