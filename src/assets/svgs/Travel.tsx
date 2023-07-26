import * as React from 'react';
import Svg, {SvgProps, Path} from 'react-native-svg';
export const TravelIcon = (props: SvgProps) => (
  <Svg width={24} height={24} fill="none" {...props}>
    <Path
      fill="#33BD51"
      fillRule="evenodd"
      d="M10 4h4v2h-4V4ZM8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2h3a3 3 0 0 1 3 3v8a3 3 0 0 1-3 3v.5a1.5 1.5 0 0 1-3 0V20H8v.5a1.5 1.5 0 0 1-3 0V20a3 3 0 0 1-3-3V9a3 3 0 0 1 3-3h3Zm8 2v10H8V8h8ZM6 8H5a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h1V8Zm12 10h1a1 1 0 0 0 1-1V9a1 1 0 0 0-1-1h-1v10Z"
      clipRule="evenodd"
    />
  </Svg>
);
