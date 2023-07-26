import * as React from 'react';
import Svg, {SvgProps, Path} from 'react-native-svg';
export const AccidentIcon = (props: SvgProps) => (
  <Svg width={24} height={24} fill="none" {...props}>
    <Path
      fill="#D996F0"
      fillRule="evenodd"
      d="M14 6a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm2 0a4 4 0 1 1-8 0 4 4 0 0 1 8 0Zm-8 8h2.812l-1.8 6H5a1 1 0 0 1-1-1v-1a4 4 0 0 1 4-4Zm6.225 8H5a3 3 0 0 1-3-3v-1a6 6 0 0 1 6-6h4.156a1 1 0 0 1 .958 1.287L11.1 20h2.5l2.186-7.287c.127-.423.518-.722.957-.667A6.001 6.001 0 0 1 22 18v3a1 1 0 1 1-2 0v-3a4.002 4.002 0 0 0-2.972-3.867l-1.834 7.117a1 1 0 0 1-.969.75Z"
      clipRule="evenodd"
    />
  </Svg>
);
